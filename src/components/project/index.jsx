import React from 'react';
import image1 from '../../assets/img/project/Currency-Convertor-App.jpg'
import image2 from '../../assets/img/project/imag1.png'
import image3 from '../../assets/img/project/imag2.png'
import image4 from '../../assets/img/project/imag3.png'
import image5 from '../../assets/img/project/imag4.png'
import image6 from '../../assets/img/project/imag5.png'
import image7 from '../../assets/img/project/imag6.png'
import image8 from '../../assets/img/project/imag7.png'
import image9 from '../../assets/img/project/imag8.png'

const Project = () => {
  const projects = [
    {
      img: image1,
      skills:['Flutter','Figma','Postman', 'Firebase'],
      title:'Currensee',
      date:'Feb 24 - April 2024',
      description:"Currensee is a modern and user-friendly currency exchange platform designed to simplify the process of exchanging currencies for travelers, businesses, and individuals. With an intuitive interface and powerful features, Currensee makes it easy to convert currencies, view exchange rates, and track currency trends in real-time.",
      url:'https://github.com/aamirali65/Portfolio-ReactJS'
    },
    {
       img: image2,
      skills:['Angular','Node Js','Laravel','Figma'],
      title:'Admin Dashboard',
      date:'March 2 - May 2024',
      description:"Our Angular Admin Dashboard is a powerful and intuitive web application designed to provide administrators with the tools they need to manage and monitor their systems efficiently. Built using Angular, a popular front-end framework, our admin dashboard offers a seamless user experience with dynamic and responsive UI components.",
      url:'https://github.com/aamirali65/Portfolio-ReactJS'
    },
    {
       img: image3,
      skills:['Html','Css','Javascript', 'Bootstrap'],
      title:'NexaSelf Crypto',
      date:'March 4 - March 2024',
      description:"Nexaself is a comprehensive cryptocurrency portfolio manager designed to help cryptocurrency investors track, manage, and analyze their cryptocurrency investments with ease. With powerful features and an intuitive interface, Nexaself makes it easy to stay informed about your cryptocurrency portfolio and make informed investment decisions.",
      url:'https://github.com/aamirali65/Portfolio-ReactJS'
    },
    {
       img: image4,
      skills:['Laravel','Javascript','Bootstrap', 'Html'],
      title:'Filmbaily',
      date:'April 28 - May 2024',
      description:"Filmbaily showcasing the creativity of a close-knit group of friends working together to produce visually stunning content.",
      url:'https://github.com/aamirali65/Portfolio-ReactJS'
    },
    {
       img: image5,
      skills:['Angular','Laravel','Postman', 'Bootstrap'],
      title:'Marksman',
      date:'Aug 24 - Sept 2024',
      description:"At Marksman Arena, we are dedicated to providing a fun and safe experience for players of all ages. We pride ourselves on our exceptional customer service. Not only do we offer a great game, but we also make it easy for you to connect with other players in your locale. We are always looking for ways to improve and enhance the experience.",
      url:'https://github.com/aamirali65/Portfolio-ReactJS'
    },
    {
       img: image6,
      skills:['Angular','Laravel','Javascript', 'MySQl'],
      title:'Technologenesis',
      date:'July 19 - Aug 2024',
      description:"Technologenesis we are passionate about leveraging the latest technologies to create cutting-edge software solutions that drive business growth and success.",
      url:'https://github.com/aamirali65/Portfolio-ReactJS'
    },
    {
       img: image7,
       skills:['Html','Css','Javascript', 'Bootstrap'],
      title:'Sweitzer Psychology',
      date:'Dec 21 - Dec 2023',
      description:"Switzer-Psychology your online destination for compassionate and effective mental health support. At Switzer-Psychology, we understand that taking care of your mental health is essential, and we're here to support you every step of the way",
      url:'https://github.com/aamirali65/Portfolio-ReactJS'
    },
    {
       img: image8,
      skills:['Html','Bootstrap','PHP', 'MySQl'],
      title:'PHP Care',
      date:'Sept 10 - Nov 2023',
      description:"PHP Care we are committed to providing high-quality, patient-centered care in a warm and welcoming environment. Our team of experienced healthcare professionals is dedicated to meeting your healthcare needs with compassion and expertise.",
      url:'https://github.com/aamirali65/Portfolio-ReactJS'
    },
    {
       img: image9,
      skills:['Angular','Bootstrap','Laravel', 'Css'],
      title:'Filmpedia',
      date:'Jun 12 - July 2023',
      description:"Filmpedia your ultimate destination for watching a wide range of online movies from different genres and languages. With Filmpedia, you can stream your favorite movies anytime, anywhere, without any hassle.",
      url:'https://github.com/aamirali65/Portfolio-ReactJS'
    },
  ];

  return (
    <main className='bg-primary pt-10 pb-10' id='project'>
      <div id="title" className='text-center'>
        <h1 className='font-bold text-white font-body text-5xl mb-3'>Projects!</h1>
        <p className='font-body text-gray-500 mx-5 md:mx-20'>I have worked on a wide range of projects. From web apps to android apps. Here are some of my projects.</p>
        <div className="main mx-5 mt-5 md:mx-10 lg:mx-40 flex flex-wrap justify-between">
          {projects.map((project, index) => (
            <div key={index} className="project-card w-full md:w-[48%] lg:w-[32%] p-4 rounded-lg border border-purple-500 mt-5 hover:-translate-y-2 transition-all cursor-pointer duration-300">
              <img src={project.img} alt={project.title} className='rounded-2xl h-[180px] object-cover'/>
              <div className="tech flex flex-wrap text-purple-700 gap-2 mt-5 font-body">
                {project.skills.map((skill, index) => (
                  <span key={index} className='bg-[#231E36] rounded-3xl py-1 px-2 text-[11px]'>{skill}</span>
                ))}
              </div>
              <div id="detail" className='text-start flex flex-col gap-2 font-body my-3'>
                <h1 className='text-2xl text-gray-400 font-semibold'>{project.title}</h1>
                <h3 className='text-gray-600 text-sm'>{project.date}</h3>
                <span className='text-gray-500 overflow-hidden line-clamp-3'>{project.description}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

export default Project;
