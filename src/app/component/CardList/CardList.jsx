'use client'
import React, { useEffect, useState } from 'react'
import Pagination from '../pagination/Pagination'
import Card from '../Card/Card'

const CardList = ({ className, page, cat }) => {
  const [data, setData] = useState({ posts: [], totalPages: 1 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/posts?page=${page}&cat=${cat || ""}`);
        if (!res.ok) throw new Error("Failed to fetch posts");
        const result = await res.json();
        setData(result);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [page, cat]);

  return (
    <div className={`${className} text-4xl font-bold`}>
      <h1 className='m-14'>{cat ? `${cat.charAt(0).toUpperCase() + cat.slice(1)} Blogs` : "Recent Posts"}</h1>

      {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <div>
          <div>
            {data.posts.map((post) => (
              <Card key={post.id} post={post} />
            ))}
          </div>
        </div>
      )}

      <Pagination currentPage={page} totalPages={data.totalPages} cat={cat} />
    </div>
  )
}

export default CardList;
