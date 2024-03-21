import styled from 'styled-components'


export const CourseDetailMainContainer = styled.div`
 display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`
export const CourseDetailContainer = styled.div`
 display: flex;
  box-shadow: 0px 4px 10px 0px #e8e8e8;
  width: 100%;
  max-width: 700px;
 `

export const CourseDetailImage = styled.img`
 width: 100%;
  max-width: 300px;
`

export const CourseDetailNameContainer = styled.div`
  margin-left: 20px;
  padding: 10px;

`

export const LoaderContainer = styled.div`
display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  height: 100vh;
`

export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const FailureHeading = styled.h1`
  margin-bottom: 0px;
  font-size: 35px;
  color: #475569;
  font-family: Roboto;
`

export const FailurePara = styled.p`
  color: #64748b;
  font-family: Roboto;
`

export const FailureButton = styled.button`
background-color: #4656a1;
  color: #ffffff;
  padding: 10px 20px 10px 20px;
  border-width: 0px;
  border-radius: 5px;
`
