import styled from "styled-components";

interface ListProps<T>{
    items: T[]
    element : (item: T) => React.ReactNode
}
function List<T> (props:ListProps<T>)  {
    return (
        <Container>
            {
                props.items?.map(props.element)
            }
        </Container>
    );
}

export default List;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
`