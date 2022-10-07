import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {BsFilterCircleFill} from 'react-icons/bs';
// import {SchoolIcon} from 'react-icons';
// import {StarIcon} from 'react-icons';
const Roadmap = () => {
  return (
    <>
        <div className="roadmap">
            <div className="container-fluid">
                <div className='text-center roadmap_txt'>
                    <p>ROADMAP</p>
                    <h2 className='text-white'>Our Plan</h2>
                </div>
                <div>
                <VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#fff', color: '#000' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2011 - present"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<BsFilterCircleFill />}
  >
    <div className='roadmap_card'>
    <h3 className="vertical-timeline-element-title mb-4">Phase 1</h3>
    <ul>
      <li>Team Expansion</li>
      <li>Social Media and Community</li>
      <li>Contract Creation</li>
      <li>Website Deployment</li>
      <li>Audit & KYC</li>
    </ul>
    </div>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2010 - 2011"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<BsFilterCircleFill />}
  >
    <div className='roadmap_card'>
    <h3 className="vertical-timeline-element-title mb-4">Phase 2</h3>
    <ul>
      <li>Presale Whitelist Competition</li>
      <li>Presale Marketing Campaign</li>
      <li>Presale Launch on Pinksale</li>
      <li>Airdrop Partnership</li>
      <li>Foreign Communities Integration and</li>
    </ul>
    </div>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2008 - 2010"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<BsFilterCircleFill />}
  >
    <div className='roadmap_card'>
    <h3 className="vertical-timeline-element-title mb-4">Phase 3</h3>
      <ul>
      <li>Pre-Launch Marketing Campaign</li>
      <li>Launch on PancakeSwap</li>
      <li>Airdrop for Migrating Holders</li>
      <li>Reward Tracker Partnership</li>
      <li>Farm & Staking Pools</li>
      <li>CMC/CG Listings</li>
    </ul>
    </div>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2006 - 2008"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<BsFilterCircleFill />}
  >
    <div className='roadmap_card'>
    <h3 className="vertical-timeline-element-title mb-4">Phase 4</h3>
     <ul>
      <li>FLOH Holders Lottery</li>
      <li>Worldwide Halloween Dog Costume</li>
      <li>CEX Listing</li>
      <li>ETH Bridging</li>
      <li>NFT Collection Website Integration</li>
      <li>NFT Collection Marketing Campaign</li>
    </ul>
    </div>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="April 2013"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<BsFilterCircleFill />}
  >
    <div className='roadmap_card'>
    <h3 className="vertical-timeline-element-title mb-4">Phase 5</h3>
     <ul >
      <li>Influencers Campaign</li>
      <li>NFT Collection Whitelist Contest</li>
      <li>NFT Collection Launch</li>
      <li>Second CEX Listing</li>
      <li>NFT Collection Website Integration</li>
    </ul>
    </div>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
    icon={<BsFilterCircleFill />}
  />
</VerticalTimeline>
                </div>
            </div>
        </div>
    </>
  )
}

export default Roadmap