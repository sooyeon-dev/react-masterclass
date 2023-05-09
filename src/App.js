import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
`;

// styled(Btn) 함수로도 사용 가능
const Input = styled.input.attrs({ required: true, minLength: 10 })`
  background-color: tomato;
`;
const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
`;

function App() {
  return (
    <Wrapper>
        {/* <Btn as="a" href="/">Test</Btn> as = ""로 HTML 태그 설정 가능 */}
      <Input />
    </Wrapper>
  );
}

export default App;
