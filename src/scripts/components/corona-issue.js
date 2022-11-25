import css from "bootstrap/dist/css/bootstrap.min.css";

class CoronaReportItem extends HTMLElement {
  set coronaItem(item) {
    this._coronaItem = item;
    this.render();
  }

  render() {
    console.log(css);
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
      <div class="col-lg-4">
        <div class="service-item first-service">
          <h2 class="mb-3 text-danger" id="rupiah">${this._coronaItem.deaths.value}</h2>
          <h4 class="text-danger">Meninggal</h4>
          <hr>
          <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum est, ea asperiores quos cum et vero in aliquid!
          </p>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="service-item second-service">
          <h2 class="mb-3 text-primary" id="rupiah">${this._coronaItem.confirmed.value}</h2>
          <h4 class="text-primary">Terkonvirmasi</h4>
          <hr>
          <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores maiores expedita eum ducimus voluptates distinctio!
          </p>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="service-item third-service">
          <h2 class="mb-3 text-success" id="rupiah">${this._coronaItem.recovered.value}</h2>
          <h4 class="text-success">Sembuh</h4>
          <hr>
          <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus, amet!
          </p>
        </div>
      </div>
      
    </div>
  </div>`;
  }
}

customElements.define("corona-issue", CoronaReportItem);
