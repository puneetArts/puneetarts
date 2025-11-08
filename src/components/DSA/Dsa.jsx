import React, { useEffect, useState } from 'react';
import './Dsa.css';
import leetLogo from '../../assets/leet.png';
import gfgLogo from '../../assets/gfg.png';
import { HiOutlineExternalLink } from "react-icons/hi";

const Dsa = () => {
  const [stats, setStats] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch('https://leetcode-stats-api.herokuapp.com/puneet51');
        if (!response.ok) throw new Error('Failed to fetch LeetCode stats');
        const data = await response.json();

        // if API returns null or invalid response
        if (!data || !data.totalSolved) throw new Error('Invalid API data');

        setStats(data);
      } catch (error) {
        console.warn('Error fetching LeetCode stats:', error.message);
        setError(true);
      }
    };

    fetchStats();
  }, []);

  // fallback for if API fails
  const leetFallback = {
    totalSolved: '100+',
    easySolved: 40,
    mediumSolved: 45,
    hardSolved: 15,
    profileLink: 'https://leetcode.com/u/puneet51/',
  };

  // Static GFG data 
  const gfgStats = {
    totalSolved: 180,
    basic: 18,
    easySolved: 81,
    mediumSolved: 81,
    hardSolved: 22,
    profileLink: 'https://www.geeksforgeeks.org/user/puneetsingh51/',
  };

  // if API fails
  const leetData = error ? leetFallback : stats;

  if (!leetData) return <p>Loading DSA stats...</p>;

  return (
    <section id='dsa'>
      <h5>Problem Solving Skills</h5>
      <h2>DSA Progress</h2>

      <div className="container leetcode__container">

        {/* LeetCode Card */}
        <div className="leetcode_card">
          <div className="leet__head">
            <img src={leetLogo} alt="LeetCode Logo" className="leet-logo" />
            <h3>LeetCode</h3>
          </div>
          <p className="problems-line">
            <b>Problems Solved:</b>{" "}
            <br/>
            <span className="solved-count">
              {leetData.totalSolved}
            </span>
          </p>

          
          
             <p className="easy">Easy: {leetData.easySolved}</p>
            <p className="medium">Medium: {leetData.mediumSolved}</p>
            <p className="hard">Hard: {leetData.hardSolved}</p>
                    

          <a
            href={leetFallback.profileLink}
            target="_blank"
            rel="noopener noreferrer"
            className="leetcode__link"
          >
            View Profile <HiOutlineExternalLink />
          </a>
        </div>

        {/* GFG Card */}
        <div className="leetcode_card">
          <div className="leet__head">
            <img src={gfgLogo} alt="GFG Logo" className="leet-logo" />
            <h3>GeeksforGeeks</h3>
          </div>

          <p className="problems-line">
            <b>Problems Solved:</b>{" "}
            <br/>
            <span className="solved-count">{gfgStats.totalSolved}+</span>
          </p>

          
            <p className="easy">Basic + Easy: {gfgStats.easySolved}</p>
            <p className="medium">Medium: {gfgStats.mediumSolved}</p>
            <p className="hard">Hard: {gfgStats.hardSolved}</p>
          

          <a
            href={gfgStats.profileLink}
            target="_blank"
            rel="noopener noreferrer"
            className="leetcode__link"
          >
            View Profile <HiOutlineExternalLink />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Dsa;
