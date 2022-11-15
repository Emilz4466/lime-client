import week_schedule from "../components/example_data/week_schedule.json";

export default function getData(dataPath) {
  let data = {};
  // backend connection
  // data = fetch..

  // non connection
  data = getModel(dataPath);

  return data;
}

// only non connection fun
function getModel(path) {
  switch (path) {
    case "week_schedule":
      return week_schedule;
    default:
      return `Example model ${path} not found`;
  }
}
