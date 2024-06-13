import React, { useState } from 'react';
import '../work/work.css';

const works = [
  { id: 1, category: 'UI', title: 'Learn UI/UX Design', img: 'https://images.unsplash.com/photo-1608785941240-ae798f939599?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 2, category: 'Web Design', title: 'Web Design Project', img: 'https://images.unsplash.com/photo-1597266029701-618ac066150a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 3, category: 'UX', title: 'UX Design Project', img: 'https://images.unsplash.com/photo-1518735881707-1a53be861a5f?q=80&w=1894&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  // Add more works as needed
];

const RecentWorksSection: React.FC = () => {
  const [filter, setFilter] = useState('All');

  const filteredWorks = filter === 'All' ? works : works.filter(work => work.category === filter);

  return (
    <section className="recent-works-section">
      <div className="container">
        <h2>My recent <span className="highlight">works</span></h2>
        <div className="filter-buttons">
          {['All', 'UI', 'UX', 'Web Design'].map(category => (
            <button
              key={category}
              className={`filter-button ${filter === category ? 'active' : ''}`}
              onClick={() => setFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="works-gallery">
          {filteredWorks.map(work => (
            <div key={work.id} className="work-item">
              <img src={work.img} alt={work.title} />
              <h3>{work.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentWorksSection;
