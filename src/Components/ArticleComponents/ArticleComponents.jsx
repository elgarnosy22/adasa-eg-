import React from 'react'
import Api from '../../posts.json'
import Image from './Image'
import Content from './Content'
import Recommend from './Recommend'
import { useParams } from 'react-router-dom'
export default function ArticleComponents() {
    const {slug} = useParams()
    const currentPost = Api.posts.find(post => post.slug === slug)
    return (
        <>
            <Image/>
            <Content/>
            <Recommend/>
        </>
    )
}
