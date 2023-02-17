import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledLink = styled(Link)`
    text-decoration: none;
`

type LinkButtonProps = {
    title: string
    link: string
}

export const LinkButton = ({ title, link }: LinkButtonProps) => (
    <StyledLink to={link}>
        {title}
    </StyledLink>
)
