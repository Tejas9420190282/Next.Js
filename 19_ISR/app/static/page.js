import mySqlPool from '@/config/db'
import React from 'react'

export const revalidate = 30;

const static_Page = async () => {
    
    const [data] = await mySqlPool.query("SELECT * FROM students")

    console.log(data);
    

  return (
    <>
        <div>
            {
                data.map((e) => {
                    return (
                        <>
                            <div className='ml-5'>
                                <p key={e.id}>ID : {e.id}</p>
                                <p>Name : {e.name}</p>
                                <p>Skills : {e.skills}</p>
                                <p>STD : {e.std}</p>
                                <p className='m-5'>---------------</p>
                            </div>
                        </>
                    )
                })
            }
        </div>
    </>
  )
}

export default static_Page