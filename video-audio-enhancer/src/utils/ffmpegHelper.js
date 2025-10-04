import ffmpegInstaller from '@ffmpeg-installer/ffmpeg';
import { createFFmpeg, fetchFile } from '@ffmpeg/ffmpeg';
import fs from 'fs-extra';

const ffmpeg = createFFmpeg({ log: true });
ffmpeg.setFfmpegPath(ffmpegInstaller.path);

export const loadFFmpeg = async () => {
  if (!ffmpeg.isLoaded()) await ffmpeg.load();
};

export const writeFile = async (filename, filePath) => {
  await ffmpeg.FS('writeFile', filename, await fetchFile(filePath));
};

export const readFile = (filename, outputPath) => {
  fs.writeFileSync(outputPath, ffmpeg.FS('readFile')(filename));
};
