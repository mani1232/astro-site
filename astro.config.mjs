import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    title: 'WorldMandia Docs',
    social: {
      github: 'https://github.com/withastro/starlight'
    },
    sidebar: [{
      label: 'Guides',
      items: [
      // Each item here is one entry in the navigation menu.
      {
        label: 'Example Guide',
        link: '/guides/example/'
      }]
    }, {
      label: 'Reference',
      autogenerate: {
        directory: 'reference'
      }
    }]
  }), compress()]
});