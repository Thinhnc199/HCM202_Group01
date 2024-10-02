import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-red-500 text-white text-center p-4 text-xl">
    <div className="flex justify-between items-center">
      <div className="flex items-center">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/800px-Flag_of_Vietnam.svg.png" 
          alt="Logo" 
          className="h-20 mr-2" 
        />
      </div>
      <div className="text-center">
      <b> <p className='text-yellow-300 text-xl'>Team members Group-1</p></b>
        <p>Nguyễn Văn Quang</p>
        <p>Nguyễn Cường Thịnh</p>
        <p>Nguyễn Trần Mỹ Anh</p>
        <p>Nguyễn Nhật Hào</p>
      </div>
      <div className="flex items-center">
        <img 
          src="https://yt3.googleusercontent.com/ytc/AIdro_l5RDb_hCP3D-oDGK4Rw4cnqYhDxXC8hg-U8CrjkFuwM7w=s900-c-k-c0x00ffffff-no-rj" 
          alt="FPT" 
          className="h-20 mr-2" 
        />
      </div>
    </div>
  
    <hr className="my-4 border-white" /> 
  
    <b> <p>FA24_HCM202_MC1708 – Lecture: Nguyễn Văn Bình (Binnv26)</p></b>
  </footer>
  );
};

export default Footer;
