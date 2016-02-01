import React from 'react';

import LoremIpsum from './../shared/lorem-ipsum.react.js';
import Section from './../shared/section.react.js';
import './../shared/shared.less';

export default () => {
  return (
		<div className="container">
      <h1>About Us</h1>
      <Section>
        <h2>How We Met</h2>
        <LoremIpsum />
      </Section>
      <Section>
        <h2>Proposal</h2>
        <LoremIpsum />
      </Section>
      <Section>
        <h2>The Future</h2>
        <LoremIpsum />
      </Section>
    </div>
  );
};
