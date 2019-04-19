import { IReportOptions, Reporter } from 'yachr';
import * as yargs from 'yargs';

const argv = yargs.option('output', {
  alias: 'o',
  // default: 'report.html',
  describe: 'HTML file output path',
  required: true,
  type: 'string'
}).option('jsonFile', {
  alias: 'j',
  // default: 'report.json',
  describe: 'Path to Cucumber file in JSON format',
  required: true,
  type: 'string'
}).option('htmlTemplate', {
  alias: 't',
  describe: 'Path to the custom template to use',
  required: false,
  type: 'string'
}).help().argv;

const reporter = new Reporter();
const options: IReportOptions = {
  jsonFile: argv.jsonFile,
  output: argv.output,
};

if (argv.htmlTemplate) options.htmlTemplate = argv.htmlTemplate;

reporter.generate(options);
