import Input from '../../components/input/Input';
import * as S from './Search.styled';
import * as Svg from '../../components/svg/Svg';

const typeMenus = [
    { id: 1, link: '/search', value: '전체', svg: <Svg.All /> },
    { id: 2, link: '/search/documnet', value: '문서', svg: <Svg.Document /> },
    { id: 3, link: '/search/image', value: '이미지', svg: <Svg.Image /> },
    { id: 4, link: '/search/video', value: '동영상', svg: <Svg.Video /> },
];

const Search = ({ value, setValue }) => {
    const elementsOfESDocument = value.data.map((document, idx) =>
        <div key={document._id}>
            <h1>Title {idx + 1} : {document._source.title}</h1>
            <div>Content {idx + 1} : {document._source.content}</div>
        </div>
    ).reduce((prev, curr) => prev === null ? [curr] : [...prev, curr], null);

    const elementsOfTypeMenu = typeMenus.map(typeMenu =>
        <S.TypeMenuWrapper key={typeMenu.id} >
            <S.LinkForMenu to={typeMenu.link} onClick={event => {
                event.preventDefault();
            }}>
                <S.Span>
                    {typeMenu.svg}
                </S.Span>
                {typeMenu.value}
            </S.LinkForMenu>
        </S.TypeMenuWrapper>
    ).reduce((prev, curr) => prev === null ? [curr] : [...prev, curr], null);

    return (
        <S.Layout>
            <S.Header>
                <S.TopOfHeader>
                    <S.LinkForLogo to="/">
                        <S.Image alt="LOLNEWS" src={require('../../assets/logo.png')} />
                    </S.LinkForLogo>
                    <S.Div>
                        <Input layoutName="search" setValue={setValue} />
                    </S.Div>
                    <S.Nav>
                    </S.Nav>
                </S.TopOfHeader>
                <S.BottomOfHeader>
                    {elementsOfTypeMenu}
                </S.BottomOfHeader>
            </S.Header>
            <S.Main>
                <S.Section>
                    {elementsOfESDocument}
                </S.Section>
            </S.Main>
            <S.Footer>
            </S.Footer>
        </S.Layout>
    );
};

export default Search;