import React from 'react';
import { BsLinkedin, BsInstagram, BsBehance, BsTwitter } from 'react-icons/bs';
import { FaFacebookF, FaGithub, FaYoutube } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
    <a href='https://www.linkedin.com/in/omar-waleed-zenhom-32216a1b3/' target='_blank'><BsLinkedin /></a>
    </div>
    <div>
    <a href='https://github.com/OmarZen' target='_blank'><FaGithub /></a>
    </div>
    <div>
    <a href='https://www.facebook.com/OmarZenho/' target='_blank'><FaFacebookF /></a>
    </div>
    <div>
    <a href='https://www.behance.net/omarwaleed3' target='_blank'><BsBehance /></a>
    </div>
    <div>
    <a href='http://www.instagram.com/omarzenhomofficail/' target='_blank'><BsInstagram /></a>
    </div>
    <div>
    <a href='https://twitter.com/OmarWaleedZenh1' target='_blank'><BsTwitter /></a>
    </div>
    <div>
    <a href='https://www.youtube.com/channel/UCZm5Gb5AcrZsPRF5bIjXCJw' target='_blank'><FaYoutube /></a>
    </div>
  </div>
);

export default SocialMedia;
