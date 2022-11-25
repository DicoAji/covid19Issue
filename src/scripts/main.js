import "../scripts/components/header-content.js";
import "./components/header-content.js";
import "./components/corona-issue.js";

const main = () => {
  const baseUrl = "https://covid19.mathdro.id/api/countries/Indonesia/";
  const getData = () => {
    fetch(baseUrl)
      .then((response) => response.json())
      .then((results) => {
        const coronaReportElement = document.querySelector("corona-issue");
        const dateReportElement = document.querySelector("header-content");
        coronaReportElement.coronaItem = results;
        dateReportElement.coronaItem = results;
      })
      .catch(() => showMessage());
  };

  const showMessage = (message = "Muat Ulang...") => {
    alert(message);
  };

  getData();
};

export default main;
