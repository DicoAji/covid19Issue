import covid19 from "../../image/covid-19.png";

class HeaderContent extends HTMLElement {
  set coronaItem(item) {
    this._coronaItem = item;
    this.render();
  }

  render() {
    const dateUpdated = new Date(this._coronaItem.lastUpdate);
    const monthNames = [
      "Januari",
      "Februari",
      "Maret",
      "Aprl",
      "Mei",
      "Juni",
      "Juli",
      "Agustus",
      "September",
      "Oktober",
      "November",
      "Desember",
    ];
    this.innerHTML = "";
    this.innerHTML = ` <div class="container">
        <div class="row">
          <div class="col-lg-8 offset-lg-2">
            <div
              class="section-heading wow fadeInDown"
              data-wow-duration="1s"
              data-wow-delay="0.5s"
            >
              <div class="d-flex justify-content-center">
                <div class="d-flex align-items-center">
                  <img
                    src="${covid19}"
                    style="height: 4rem; width: auto"
                    alt=""
                  />
                </div>
              </div>
    
              <p class="text-center" >
                Berikut adalah data terkait  <a href="https://covid19.go.id/">perkembangan Covid-19</a> di Indonesia
                <br>  per tanggal <span class="text-dark fw-bold"> ${dateUpdated.getDate()} ${
      monthNames[dateUpdated.getMonth()]
    } ${dateUpdated.getFullYear()} </span>
              </p> 
            </div>
          </div>
        </div>
      </div>`;
  }
}

customElements.define("header-content", HeaderContent);
