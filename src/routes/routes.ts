import HomePage from "../page/homepage/HomePage.tsx";
import React from "react";
import Posts from "../page/posts/Posts.tsx";
import Authors from "../page/authors/Authors.tsx";
import SinglePosts from "../page/posts/SinglePosts.tsx";
import SingleAuthors from "../page/authors/SingleAuthors.tsx";
import Categories from "../page/categories/Categories.tsx";
import SingleCategory from "../page/categories/SingleCategory.tsx";
import Search from "../page/search/Search.tsx";

interface Routes {
    path: string
    element: React.FC
    index?: boolean
}

export const routes: Routes[] = [
    {path: '/', element: HomePage, index:true},
    {path: 'posts', element: Posts},
    {path: 'posts/:id', element: SinglePosts},
    {path: 'authors', element: Authors},
    {path: 'authors/:id', element: SingleAuthors},
    {path: 'category', element: Categories},
    {path: 'category/:id', element: SingleCategory},
    {path: 'search', element: Search},

]