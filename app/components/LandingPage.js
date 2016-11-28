import React from 'react';
import styles from './LandingPage.scss';

const LandingPage = () => (
    <div className={styles.banner}>
        <div className={styles.headline}> <b>Zero</b> your carbon impact. </div>
        <div>
            <div className={styles.totalFootprint}>
                <div className={styles.datum}>
                    <div className={styles.number}>20</div>
                    <div style={{display: 'inline'}}> tons CO<sub>2</sub>e<sup>*</sup></div>
                </div>
                <div className={styles.tagline}> (average US carbon footprint)</div>
            </div>
            <button className={styles.button}> Zero me </button>
        </div>
        <div className={styles.footer}>{`*https://www.sciencedaily.com/releases/2008/04/080428120658.htm`}</div>
    </div>
);

export default LandingPage;
