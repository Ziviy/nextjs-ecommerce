import { useRouter } from 'next/router'
import Layout from './layout'


export default function Home() {
  const post = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem officiis assumenda eveniet voluptatem. Fuga doloribus cupiditate corrupti, delectus quas ipsum tempore, voluptatem optio facilis mollitia sequi fugiat exercitationem? Nulla, nesciun";
  const posts: Array<any> = [];

  for (let i = 0; i < 5; i++)
    posts.push(<div className='posts rounded-[8px] bg-mainColor border p-2'>{post}</div>)

  return (
    <div className='CONTAINER'>
      <div className='grid justify-between md:grid-cols-2 lg:gap-5 md:gap-3'>
        {posts}
      </div>

    </div>
  )
}
