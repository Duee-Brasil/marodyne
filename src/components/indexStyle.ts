import styled from "styled-components"

export const Product = styled.div`
    width: 100%;
    padding: 3rem 2rem;

    h1 {
        text-align: center;
        font-size: 1.8rem;
    }
`

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    gap: 3rem;
    justify-content: space-around;
    width: 100%;
    align-items: center;

    @media (max-width: 520px) {
        flex-direction: column;
    }
`

export const MajorPart = styled.div`
    flex: 65%;
    padding: 1rem;

    @media (max-width: 520px) {
        flex: 100%;
    }
`

export const MinorPart = styled.div`
    flex: 35%;

    @media (max-width: 520px) {
        flex: 100%;
    }
`

export const Video = styled.div`
    padding: 2rem;
    width: 100%;
    background-color: #0F2B76;

    iframe {
        width: 100%;
        height: 70vh;
        max-height: 600px;
    }
`

export const Device = styled.div`
    padding: 3rem 2rem;
    width: 100%;

    h1 {
        font-size: 1.8rem;
    }
`

export const Science = styled.div`
    padding: 3rem 2rem;
    width: 100%;

    h1 {
        font-size: 1.8rem;
    }
`

export const Medical = styled.div`
    padding: 3rem 2rem;
    width: 100%;
    text-align: center;

    h1 {
        font-size: 1.8rem;
        text-align: center;
    }
`

export const Contact = styled.div`
    padding: 3rem 2rem;
    width: 100%;
    text-align: center;

    h1 {
        font-size: 1.8rem;
    }
`