import express from 'express';
const app = express();
import { Client, ApiResponse, RequestParams } from '@elastic/elasticsearch';
const client = new Client({
    node: 'https://172.24.24.84:32311',
    auth: {
        username: 'elastic',
        password: '4w88klz48xcgvdq8m9gsncvt',
    },
    ssl: {
        rejectUnauthorized: false,
    },
});

const run = async ({ query }: any): Promise<any> => {
    const params: RequestParams.Search = {
        index: 'news_index',
        body: {
            query: {
                match: {
                    content: query
                }
            }
        }
    };

    return client.search(params)
        .then((result: ApiResponse) => result.body.hits.hits)
        .catch((err: Error) => err);
};

app.listen(31053, () => {
    console.log('Started server with 31053');
});

app.get('/search/keyword', async (req: express.Request, res: express.Response) => {
    const { query } = req;

    const result = await run(query);

    res.send(result);
});