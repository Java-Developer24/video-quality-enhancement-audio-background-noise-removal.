import { loadFFmpeg } from './utils/ffmpegHelper.js';
import { extractFrames } from './video/extractFrames.js';
import { enhanceFrames } from './video/enhanceFrames.js';
import { mergeFrames } from './video/mergeFrames.js';
import { extractAudio } from './audio/extractAudio.js';
import { enhanceAudio } from './audio/enhanceAudio.js';

const main = async () => {
  console.log('🔥 Starting Video & Audio Enhancement...');
  await loadFFmpeg();

  // --- VIDEO ---
  await extractFrames();
  await enhanceFrames();
  await mergeFrames();

  // --- AUDIO ---
  await extractAudio();
  await enhanceAudio();

  console.log('✅ Enhancement Complete! Check output folder.');
};

main();
