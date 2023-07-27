import React, { useState, useEffect } from 'react';
import { BsPatchCheckFill } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import './Experience.scss';


const Experience = () => {
  const [competencies, setCompetencies] = useState([]);

  useEffect(() => {
    const fetchCompetencies = async () => {
      const query = '*[_type == "competencies"]';
      const response = await client.fetch(query);
      setCompetencies(response);
    };

    fetchCompetencies();
  }, []);

  return (
    <div className="experience">
      <div className="head-text">
        <h5>What Skills I Have</h5>
        <span>My Experience</span>
      </div>
    
      <div className="app__experience-container">
        {competencies.map((competency) => (
          <div className={`experience__${competency.field}`} key={competency._id}>
            <h3>{competency.field}</h3>
            <div className="experience__content">
              {competency.competencies.map((skill) => (
                <motion.div
                  whileInView={{ scale: [0, 1] }}
                  whileHover={{ scale: [1, 0.90] }}
                  transition={{ duration: 0.25 }}
                  className="app__flex"
                  key={skill._id}
                >
                  <BsPatchCheckFill className="experience__details-icon" />
                  <div>
                    <h4>{skill.name}</h4>
                    <small className="text-light">{skill.level}</small>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppWrap(MotionWrap(Experience), 'experience', 'app_experience');