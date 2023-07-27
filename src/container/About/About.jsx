import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';
import { urlFor, client } from '../../client';

const About = () => {
  const [abouts, setAbouts] = useState([]);
  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">I Know that <span>Good Design & Architecture </span> <br />means  <span>Good Business</span></h2>

{/* ===================================================================================================== */}
      <div className="cta">
          <a href="https://drive.google.com/drive/folders/1PdMJ5Ec7O8TnTFoo7TJUu_9SxP3wiFAf?usp=sharing" target='_blank' className='cv__btn'>Programing CV</a>
          <a href="https://drive.google.com/drive/folders/1mFnWODU9_O0s3Ve35kNMmVLM3eELfFS7?usp=sharing" target='_blank' className='cv__btn'>Designing CV</a>
          <a href="#contact" className='cv__btn talk__btn'>Let's Talk</a>
      </div>
{/* ======================================================================================================= */}
      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg',
);
