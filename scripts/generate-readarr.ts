#!/usr/bin/env bun

import { createClient } from '@hey-api/openapi-ts';

async function generateReadarrClient() {
  console.log('📚 Generating Readarr API client...');

  await createClient({
    input:
      'https://raw.githubusercontent.com/Readarr/Readarr/develop/src/Readarr.Api.V1/openapi.json',
    output: 'src/generated/readarr',
    client: '@hey-api/client-fetch',
  });

  console.log('✅ Readarr client generated successfully!');
}

if (import.meta.main) {
  generateReadarrClient().catch(console.error);
}
