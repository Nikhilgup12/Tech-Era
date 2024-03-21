import styled from 'styled-components'

export const HomeMainContainer = styled.div`
 display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

export const HomeContainer = styled.div`
display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: 20px;
`

export const CourseListContainer = styled.ul`
display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding-left: 0px;
  max-width: 800px;
  width: 100%;
`

export const CourseList = styled.li`
  display: flex;
  align-items: center;
  margin: 20px;
  width: 100%;
`

export const HomeMainHeading = styled.h1`
  align-self: flex-start;
  color: #1e293b;
  font-family: Roboto;
`

export const CourseImage = styled.img`
  width: 100%;
  max-width: 50px;
  padding-right: 10px;
`

export const CourseHeading = styled.h1`
  font-size: 20px;
  color: #475569;
  font-family: Roboto;
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
