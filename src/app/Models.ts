import { EventEmitter } from 'events';
export interface Model {
  fuga: number;
  videoInfos: VideoInfo[];
  exportConfig: ExportConfig;
  eventEmitter: EventEmitter;
}

export interface ExportConfig {
  width: number;
  height: number;
}

export interface VideoInfo {
  name: string;
  src: string;
  frameSrc: string;
}