import fs from 'fs/promises';
import type { ClockData } from '../model';

const DATA_FILE_PATH = 'src/lib/server/data.json';

export async function readClockData() {
  const fileContent = await fs.readFile(DATA_FILE_PATH, 'utf-8');
  return JSON.parse(fileContent, jsonParseReviver) as ClockData;
}

export async function saveClockData(data: ClockData) {
  const json = JSON.stringify(data);
  await fs.writeFile(DATA_FILE_PATH, json);
}

// Custom reviver function to convert date strings to Date objects
const jsonParseReviver = (_key: string, value: unknown) => {
  // If the value is a date string, convert it to a Date object
  if (typeof value === 'string' && !isNaN(Date.parse(value))) {
    return new Date(value);
  }
  return value;
};
