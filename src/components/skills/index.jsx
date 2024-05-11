import React from 'react';
import { Tilt } from 'react-tilt';
const frontendSkills = [
  { id: 1, name: 'React JS', logoUrl: 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png' },
  { id: 2, name: 'Angular', logoUrl: 'https://camo.githubusercontent.com/8886130b3d8aba95dbdd7c4f9a41029606424cc06d1873c1ced87dd55a222fef/68747470733a2f2f616e67756c61722e696f2f6173736574732f696d616765732f6c6f676f732f616e67756c61722f616e67756c61722e737667' },
  { id: 3, name: 'HTML', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1024px-HTML5_logo_and_wordmark.svg.png' },
  { id: 4, name: 'CSS', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg' },
  { id: 5, name: 'Bootstrap', logoUrl: 'https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png' },
  { id: 6, name: 'Material UI', logoUrl: 'data:image/png;base64,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' },
  { id: 7, name: 'JavaScript', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg' },
  { id: 8, name: 'Tailwind CSS', logoUrl: 'https://files.raycast.com/nwt9ncojkvwmjfkaada8upafvpnu' },
  { id: 9, name: 'GSAP', logoUrl: 'https://assets.awwwards.com/awards/avatar/2152182/652d1de29c2e9754617887.png' },
  { id: 10, name: 'Flutter', logoUrl: 'https://cdn-images-1.medium.com/v2/resize:fit:1200/1*5-aoK8IBmXve5whBQM90GA.png' },
];

const backendSkills = [
  { id: 1, name: 'Node.js', logoUrl: 'https://static-00.iconduck.com/assets.00/nodejs-icon-512x512-vl7ew1eg.png' },
  { id: 2, name: 'Express.js', logoUrl: 'https://res.cloudinary.com/iteam-cloud/image/upload/v1684848374/express_468adcd425.png' },
  { id: 3, name: 'PHP', logoUrl: 'https://pngimg.com/d/php_PNG29.png' },
  { id: 4, name: 'Python', logoUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg' },
  { id: 5, name: 'Laravel', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1969px-Laravel.svg.png' },
  { id: 6, name: 'firebase', logoUrl: 'https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg' },
  { id: 7, name: 'MongoDB', logoUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg' },
  { id: 8, name: 'MySQL', logoUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg' },
  { id: 9, name: 'SQL', logoUrl: 'https://static-00.iconduck.com/assets.00/sql-database-sql-azure-icon-1955x2048-4pmty46t.png' },
];
// const other = [
//   { id: 1, name: 'WordPress', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/WordPress_blue_logo.svg/2048px-WordPress_blue_logo.svg.png' },
//   { id: 2, name: 'Git', logoUrl: 'https://e7.pngegg.com/pngimages/713/558/png-clipart-computer-icons-pro-git-github-logo-text-logo-thumbnail.png' },
//   { id: 3, name: 'GitHub', logoUrl: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' },
//   { id: 4, name: 'Vs Code', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519' },
//   { id: 5, name: 'Android', logoUrl: 'https://cdn.worldvectorlogo.com/logos/android-studio-1.svg' },
//   { id: 6, name: 'Adobe Ps', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/1200px-Adobe_Photoshop_CC_icon.svg.png' },
//   { id: 7, name: 'Adobe XD', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Adobe_XD_CC_icon.svg/2101px-Adobe_XD_CC_icon.svg.png' },
//   { id: 8, name: 'Figma', logoUrl: 'https://cdn.sanity.io/images/599r6htc/localized/46a76c802176eb17b04e12108de7e7e0f3736dc6-1024x1024.png?w=804&h=804&q=75&fit=max&auto=format' },
//   { id: 9, name: 'Postman', logoUrl: 'https://static-00.iconduck.com/assets.00/postman-icon-497x512-beb7sy75.png' },
// ];

const Skill = () => {
  return (
    <main className='bg-primary pt-10 pb-10' id='skill'>
      <div id="title" className='text-center'>
        <h1 className='font-bold text-white font-body text-5xl mb-3'>Skills!</h1>
        <p className='font-body text-gray-500'>Here are some of my skills on which I have been working on for the past 3 years.</p>
      </div>
      <div className="flex lg:flex-row gap-5 mx-5 md:mx-10 lg:mx-40 mt-10 flex-col">
        <Tilt className="overlay bg-purple-600 p-[1px] rounded-3xl flex-1 cursor-pointer">
          <div className='p-6 flex flex-col items-center bg-primary text-white rounded-3xl h-full'>
            <h1 className='font-body text-2xl md:text-3xl mb-5'>Frontend</h1>
            <div className='flex flex-wrap justify-center items-center gap-3'>
              {frontendSkills.map(skill => (
                <div key={skill.id} className='flex border p-3 items-center gap-3 text-white rounded-lg'>
                  <img src={skill.logoUrl} className='w-7 h-7 object-cover' alt={skill.name} />
                  <h1>{skill.name}</h1>
                </div>
              ))}
            </div>
          </div>
        </Tilt>
        <Tilt className="overlay bg-purple-600 p-[1px] rounded-3xl flex-1">
          <div className='p-6 flex flex-col items-center bg-primary text-white rounded-3xl h-full'>
            <h1 className='font-body text-2xl md:text-3xl mb-5'>Backend</h1>
            <div className='flex flex-wrap justify-center items-center gap-3'>
              {backendSkills.map(skill => (
                <div key={skill.id} className='flex border p-3 items-center gap-3 text-white rounded-lg'>
                  <img src={skill.logoUrl} className='w-7 h-7 object-cover' alt={skill.name} />
                  <h1>{skill.name}</h1>
                </div>
              ))}
            </div>
          </div>
        </Tilt>
      </div>
      {/* <div className="flex flex-col md:flex-row gap-5 mx-5 md:mx-10 lg:mx-40 mt-10">
        <Tilt className="overlay bg-purple-600 p-[1px] rounded-3xl flex-1">
          <div className='p-6 flex flex-col items-center bg-primary text-white rounded-3xl h-full'>
            <h1 className='font-body text-2xl md:text-3xl mb-5'>Others</h1>
            <div className='flex flex-wrap justify-center items-center gap-3'>
             {other.map(skill => (
                <div key={skill.id} className='flex border p-3 items-center gap-3 text-white rounded-lg'>
                  <img src={skill.logoUrl} className='w-7 h-7 object-cover' alt={skill.name} />
                  <h1>{skill.name}</h1>
                </div>
              ))}
            </div>
          </div>
        </Tilt>
      </div> */}
    </main>
  );
}

export default Skill;
