import styled from 'styled-components'

const SubCategories = styled.div`
  font-size: 1rem;
  height: 100%;
  max-width: 1000px;
  font-family: 'Inter', sans-serif;
  .link {
    transition-duration: 450ms;
    cursor: pointer;
    &:hover {
      transition-duration: 350ms;
      filter: invert(50%);
    }
  }
  
  .docs {
    line-height: 150%;
    display: flex;
    flex-direction: column;
  }
`

export default SubCategories
