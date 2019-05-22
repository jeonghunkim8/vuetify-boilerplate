import {LogLevel as LOG_LEVEL} from '@/types/enums/LogLevel';

const noop = () => undefined;
const logLevel: LOG_LEVEL = LOG_LEVEL.DEBUG;

export default class Logger {

  private static c: Console = console;

  public static get debug() {
    if (logLevel <= LOG_LEVEL.DEBUG) {
      return this.c.log.bind(console);
    } else {
      return noop;
    }
  }

  public static get info() {
    if (logLevel <= LOG_LEVEL.INFO) {
      return this.c.info.bind(console);
    } else {
      return noop;
    }
  }

  public static get warn() {
    if (logLevel <= LOG_LEVEL.WARN) {
      return this.c.warn.bind(console);
    } else {
      return noop;
    }
  }

  public static get error() {
    if (logLevel <= LOG_LEVEL.ERROR) {
      return this.c.error.bind(console);
    } else {
      return noop;
    }
  }
}
