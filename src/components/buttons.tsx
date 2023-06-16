import * as React from "react"
import styled from "styled-components"

const StyledLink = styled.a`
    text-decoration: none;
    color: #0F2B76;
    border: 1px solid #0F2B76;
    padding: 1rem 4rem;
    border-radius: 1rem;
    font-weight: bold;
    margin: 2rem auto;
    width: fit-content;
`

type LinkButtonProps = {
    title: string
    link: string
}

export const LinkButton = ({ title, link }: LinkButtonProps) => (
    <StyledLink href={link}>
        {title}
    </StyledLink>
)
