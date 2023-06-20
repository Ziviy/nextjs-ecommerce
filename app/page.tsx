import Image from 'next/image'
import Layout from './layout'


export default function Home() {
  return (
    <>
    <div className='flex justify-center gap-10 w-full'>
    <div className='posts w-100 rounded-[8px] bg-mainColor border p-2 w-2/4'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem officiis assumenda eveniet voluptatem. Fuga doloribus cupiditate corrupti, delectus quas ipsum tempore, voluptatem optio facilis mollitia sequi fugiat exercitationem? Nulla, nesciunt?
      </div>
      <div className='posts w-100 rounded-[8px] bg-mainColor border p-2 w-2/4'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem officiis assumenda eveniet voluptatem. Fuga doloribus cupiditate corrupti, delectus quas ipsum tempore, voluptatem optio facilis mollitia sequi fugiat exercitationem? Nulla, nesciunt?
      </div>
    </div>

    </>
  )
}
