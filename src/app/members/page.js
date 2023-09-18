"use client"
import React , {useEffect , useState} from 'react'
import supabase from '../../../supabase-client'

function MemberData() {
const [memberData , setMemberData] = useState([]);
async function getMembers(){
    const {data,error} = await supabase.from('member-data').select();
    setMemberData(data);
}

useEffect(()=>{
    getMembers();
},[])

console.log(memberData);

  return (
    <div className='p-24 break-all'>
        <h2 className='text-4xl font-extrabold text-center'>اطلاعات اعضا</h2>
        <div className='grid grid-rows-2 mx-auto'>
            <div className='flex min-w-full'>
                <h4 className='p-4 border-2 border-slate-300 w-[15%]'>نام</h4>
                <h4 className='p-4 border-2 border-slate-300 w-[15%]'>ایمیل</h4>
                <h4 className='p-4 border-2 border-slate-300 w-[10%]'>تاریخ ثبت نام</h4>
                <h4 className='p-4 border-2 border-slate-300 w-[30%]'>آنچه به سازمان می آورد</h4>
                <h4 className='p-4 border-2 border-slate-300 w-[30%]'>توضیحات اضافه</h4>
            </div>
            {memberData.map((member) => (
                           <div className='flex min-w-full'>
                           <div className="p-4 border-2 border-slate-300 w-[15%]">{member.name}</div>
                           <div className='p-4 border-2 border-slate-300 w-[15%]'>{member.email}</div>
                           <div className='p-4 border-2 border-slate-300 w-[10%]'>{member.created_at.split("T")[0]}</div>
                           <div className='p-4 border-2 border-slate-300 w-[30%]'>{member.checkboxes[0]?"تخصص":""} {member.checkboxes[1]?"نفوذ":""}  {member.checkboxes[2]?"سرمایه":""}  {member.checkboxes[3]?"دیگر":""}</div>
                           <div className='p-4 border-2 border-slate-300 w-[30%]'>{member.otherText}</div>
                       </div> 
            ))}

        </div>
    </div>
  )
}

export default MemberData