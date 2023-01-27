import {format, createLogger, transports} from "winston";
const { combine, timestamp, label, printf, prettyPrint } = format;

const customFormat = printf(({ level, message, label, timestamp }) => {
  return `[${timestamp}] - ${level}: ${message}`;
});

const log = createLogger({
  level: "debug",
  format: combine(timestamp(), customFormat),
  transports: [new transports.Console()],
});

export default log;