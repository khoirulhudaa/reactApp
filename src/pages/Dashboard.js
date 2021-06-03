import React from 'react';
// import LOGO1 from '../assets/img/brand/blue.png';
import LOGO2 from '../assets/img/theme/team-1.jpg';
import LOGO3 from '../assets/img/theme/team-2.jpg';
import LOGO4 from '../assets/img/theme/team-3.jpg';
import LOGO5 from '../assets/img/theme/team-4.jpg';
import LOGO6 from '../assets/flat/png/012-shopping bag.png';
import '../assets/vendor/nucleo/css/nucleo.css';
import '../assets/vendor/@fortawesome/fontawesome-free/css/all.min.css';
import '../assets/css/argon.css?v=1.2.0';
import '../assets/css/Dasboard.css';

class Dashboard extends React.Component {
    render() {
        return (
          <div>
           <nav class="navbar navbar-expand-lg navbar-light bg-white">
            <div class="container-fluid">
              <a class="navbar-brand" href="#">Navbar</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Features</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Pricing</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <section className="section1">
            <div className="row d-flex">
              <div className="col-md-7 sec-dev">
                <h1>Toko online terbaik dan terlengkap untuk kebutuhan anda</h1>
                <p>Memilih produk yang bagus dan terpercaya tentu disinilah kamu akan menemukan semuanya dengan harga terjangkau</p>
                <button className="btn btn-1">Kunjungi toko</button>
              </div>
              <div className="col-md-5 sec-dev">
                <img  src={LOGO6} alt="logo" />
              </div>
            </div>
          </section>

          <div className="main-content" id="panel">
            <nav className="navbar navbar-top navbar-expand navbar-dark bg-primary border-bottom">
              <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav align-items-center  ml-md-auto ">
                    <li className="nav-item d-xl-none">
                      <div className="pr-3 sidenav-toggler sidenav-toggler-dark" data-action="sidenav-pin" data-target="#sidenav-main">
                        <div className="sidenav-toggler-inner">
                          <i className="sidenav-toggler-line"></i>
                          <i className="sidenav-toggler-line"></i>
                          <i className="sidenav-toggler-line"></i>
                        </div>
                      </div>
                    </li>
                    <li className="nav-item d-sm-none">
                      <a className="nav-link" href="#" data-action="search-show" data-target="#navbar-search-main">
                        <i className="ni ni-zoom-split-in"></i>
                      </a>
                    </li>
                    <li className="nav-item dropdown">
                      <a className="nav-link" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="ni ni-bell-55"></i>
                      </a>
                      <div className="dropdown-menu dropdown-menu-xl  dropdown-menu-right  py-0 overflow-hidden">
                        <div className="px-3 py-3">
                          <h6 className="text-sm text-muted m-0">You have <strong className="text-primary">13</strong> notifications.</h6>
                        </div>
                        <div className="list-group list-group-flush">
                          <a href="#!" className="list-group-item list-group-item-action">
                            <div className="row align-items-center">
                              <div className="col-auto">
                                <img alt="Image placeholder" src={LOGO2} className="avatar rounded-circle" />
                              </div>
                              <div className="col ml--2">
                                <div className="d-flex justify-content-between align-items-center">
                                  <div>
                                    <h4 className="mb-0 text-sm">John Snow</h4>
                                  </div>
                                  <div className="text-right text-muted">
                                    <small>2 hrs ago</small>
                                  </div>
                                </div>
                                <p className="text-sm mb-0">Let's meet at Starbucks at 11:30. Wdyt?</p>
                              </div>
                            </div>
                          </a>
                          <a href="#!" className="list-group-item list-group-item-action">
                            <div className="row align-items-center">
                              <div className="col-auto">
                                <img alt="Image placeholder" src={LOGO3} className="avatar rounded-circle" />
                              </div>
                              <div className="col ml--2">
                                <div className="d-flex justify-content-between align-items-center">
                                  <div>
                                    <h4 className="mb-0 text-sm">John Snow</h4>
                                  </div>
                                  <div className="text-right text-muted">
                                    <small>3 hrs ago</small>
                                  </div>
                                </div>
                                <p className="text-sm mb-0">A new issue has been reported for Argon.</p>
                              </div>
                            </div>
                          </a>
                          <a href="#!" className="list-group-item list-group-item-action">
                            <div className="row align-items-center">
                              <div className="col-auto">
                                <img alt="Image placeholder" src={LOGO4} className="avatar rounded-circle" />
                              </div>
                              <div className="col ml--2">
                                <div className="d-flex justify-content-between align-items-center">
                                  <div>
                                    <h4 className="mb-0 text-sm">John Snow</h4>
                                  </div>
                                  <div className="text-right text-muted">
                                    <small>5 hrs ago</small>
                                  </div>
                                </div>
                                <p className="text-sm mb-0">Your posts have been liked a lot.</p>
                              </div>
                            </div>
                          </a>
                          <a href="#!" className="list-group-item list-group-item-action">
                            <div className="row align-items-center">
                              <div className="col-auto">
                                <img alt="Image placeholder" src={LOGO5} className="avatar rounded-circle" />
                              </div>
                              <div className="col ml--2">
                                <div className="d-flex justify-content-between align-items-center">
                                  <div>
                                    <h4 className="mb-0 text-sm">John Snow</h4>
                                  </div>
                                  <div className="text-right text-muted">
                                    <small>2 hrs ago</small>
                                  </div>
                                </div>
                                <p className="text-sm mb-0">Let's meet at Starbucks at 11:30. Wdyt?</p>
                              </div>
                            </div>
                          </a>
                          <a href="#!" className="list-group-item list-group-item-action">
                            <div className="row align-items-center">
                              <div className="col-auto">
                                <img alt="Image placeholder" src={LOGO5} className="avatar rounded-circle" />
                              </div>
                              <div className="col ml--2">
                                <div className="d-flex justify-content-between align-items-center">
                                  <div>
                                    <h4 className="mb-0 text-sm">John Snow</h4>
                                  </div>
                                  <div className="text-right text-muted">
                                    <small>3 hrs ago</small>
                                  </div>
                                </div>
                                <p className="text-sm mb-0">A new issue has been reported for Argon.</p>
                              </div>
                            </div>
                          </a>
                        </div>
                        <a href="#!" className="dropdown-item text-center text-primary font-weight-bold py-3">View all</a>
                      </div>
                    </li>
                    <li className="nav-item dropdown">
                      <a className="nav-link" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="ni ni-ungroup"></i>
                      </a>
                      <div className="dropdown-menu dropdown-menu-lg dropdown-menu-dark bg-default  dropdown-menu-right ">
                        <div className="row shortcuts px-4">
                          <a href="#!" className="col-4 shortcut-item">
                            <span className="shortcut-media avatar rounded-circle bg-gradient-red">
                              <i className="ni ni-calendar-grid-58"></i>
                            </span>
                            <small>Calendar</small>
                          </a>
                          <a href="#!" className="col-4 shortcut-item">
                            <span className="shortcut-media avatar rounded-circle bg-gradient-orange">
                              <i className="ni ni-email-83"></i>
                            </span>
                            <small>Email</small>
                          </a>
                          <a href="#!" className="col-4 shortcut-item">
                            <span className="shortcut-media avatar rounded-circle bg-gradient-info">
                              <i className="ni ni-credit-card"></i>
                            </span>
                            <small>Payments</small>
                          </a>
                          <a href="#!" className="col-4 shortcut-item">
                            <span className="shortcut-media avatar rounded-circle bg-gradient-green">
                              <i className="ni ni-books"></i>
                            </span>
                            <small>Reports</small>
                          </a>
                          <a href="#!" className="col-4 shortcut-item">
                            <span className="shortcut-media avatar rounded-circle bg-gradient-purple">
                              <i className="ni ni-pin-3"></i>
                            </span>
                            <small>Maps</small>
                          </a>
                          <a href="#!" className="col-4 shortcut-item">
                            <span className="shortcut-media avatar rounded-circle bg-gradient-yellow">
                              <i className="ni ni-basket"></i>
                            </span>
                            <small>Shop</small>
                          </a>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <ul className="navbar-nav align-items-center  ml-auto ml-md-0 ">
                    <li className="nav-item dropdown">
                      <a className="nav-link pr-0" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <div className="media align-items-center">
                          <span className="avatar avatar-sm rounded-circle">
                            <img alt="Image placeholder" src={LOGO5} />
                          </span>
                          <div className="media-body  ml-2  d-none d-lg-block">
                            <span className="mb-0 text-sm  font-weight-bold">John Snow</span>
                          </div>
                        </div>
                      </a>
                      <div className="dropdown-menu  dropdown-menu-right ">
                        <div className="dropdown-header noti-title">
                          <h6 className="text-overflow m-0">Welcome!</h6>
                        </div>
                        <a href="#!" className="dropdown-item">
                          <i className="ni ni-single-02"></i>
                          <span>My profile</span>
                        </a>
                        <a href="#!" className="dropdown-item">
                          <i className="ni ni-settings-gear-65"></i>
                          <span>Settings</span>
                        </a>
                        <a href="#!" className="dropdown-item">
                          <i className="ni ni-calendar-grid-58"></i>
                          <span>Activity</span>
                        </a>
                        <a href="#!" className="dropdown-item">
                          <i className="ni ni-support-16"></i>
                          <span>Support</span>
                        </a>
                        <div className="dropdown-divider"></div>
                        <a href="#!" className="dropdown-item">
                          <i className="ni ni-user-run"></i>
                          <span>Logout</span>
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
        
            <div className="header bg-primary pb-6">
              <div className="container-fluid">
                <div className="header-body">
                  <div className="row align-items-center py-4">
                    <div className="col-lg-6 col-7">
                      <h6 className="h2 text-white d-inline-block mb-0">Default</h6>
                      <nav aria-label="breadcrumb" className="d-none d-md-inline-block ml-md-4">
                        <ol className="breadcrumb breadcrumb-links breadcrumb-dark">
                          <li className="breadcrumb-item"><a href="#"><i className="fas fa-home"></i></a></li>
                          <li className="breadcrumb-item"><a href="#">Dashboards</a></li>
                          <li className="breadcrumb-item active" aria-current="page">Default</li>
                        </ol>
                      </nav>
                    </div>
                    <div className="col-lg-6 col-5 text-right">
                      <a href="#" className="btn btn-sm btn-neutral">New</a>
                      <a href="#" className="btn btn-sm btn-neutral">Filters</a>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xl-3 col-md-6">
                      <div className="card card-stats">
                        <div className="card-body">
                          <div className="row">
                            <div className="col">
                              <h5 className="card-title text-uppercase text-muted mb-0">Total traffic</h5>
                              <span className="h2 font-weight-bold mb-0">350,897</span>
                            </div>
                            <div className="col-auto">
                              <div className="icon icon-shape bg-gradient-red text-white rounded-circle shadow">
                                <i className="ni ni-active-40"></i>
                              </div>
                            </div>
                          </div>
                          <p className="mt-3 mb-0 text-sm">
                            <span className="text-success mr-2"><i className="fa fa-arrow-up"></i> 3.48%</span>
                            <span className="text-nowrap">Since last month</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-md-6">
                      <div className="card card-stats">
                        <div className="card-body">
                          <div className="row">
                            <div className="col">
                              <h5 className="card-title text-uppercase text-muted mb-0">New users</h5>
                              <span className="h2 font-weight-bold mb-0">2,356</span>
                            </div>
                            <div className="col-auto">
                              <div className="icon icon-shape bg-gradient-orange text-white rounded-circle shadow">
                                <i className="ni ni-chart-pie-35"></i>
                              </div>
                            </div>
                          </div>
                          <p className="mt-3 mb-0 text-sm">
                            <span className="text-success mr-2"><i className="fa fa-arrow-up"></i> 3.48%</span>
                            <span className="text-nowrap">Since last month</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-md-6">
                      <div className="card card-stats">
                        <div className="card-body">
                          <div className="row">
                            <div className="col">
                              <h5 className="card-title text-uppercase text-muted mb-0">Sales</h5>
                              <span className="h2 font-weight-bold mb-0">924</span>
                            </div>
                            <div className="col-auto">
                              <div className="icon icon-shape bg-gradient-green text-white rounded-circle shadow">
                                <i className="ni ni-money-coins"></i>
                              </div>
                            </div>
                          </div>
                          <p className="mt-3 mb-0 text-sm">
                            <span className="text-success mr-2"><i className="fa fa-arrow-up"></i> 3.48%</span>
                            <span className="text-nowrap">Since last month</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-md-6">
                      <div className="card card-stats">
                        <div className="card-body">
                          <div className="row">
                            <div className="col">
                              <h5 className="card-title text-uppercase text-muted mb-0">Performance</h5>
                              <span className="h2 font-weight-bold mb-0">49,65%</span>
                            </div>
                            <div className="col-auto">
                              <div className="icon icon-shape bg-gradient-info text-white rounded-circle shadow">
                                <i className="ni ni-chart-bar-32"></i>
                              </div>
                            </div>
                          </div>
                          <p className="mt-3 mb-0 text-sm">
                            <span className="text-success mr-2"><i className="fa fa-arrow-up"></i> 3.48%</span>
                            <span className="text-nowrap">Since last month</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container-fluid mt--6">
              <div className="row">
                <div className="col-xl-8">
                  <div className="card bg-default">
                    <div className="card-header bg-transparent">
                      <div className="row align-items-center">
                        <div className="col">
                          <h6 className="text-light text-uppercase ls-1 mb-1">Overview</h6>
                          <h5 className="h3 text-white mb-0">Sales value</h5>
                        </div>
                        <div className="col">
                          <ul className="nav nav-pills justify-content-end">
                            <li className="nav-item mr-2 mr-md-0" data-toggle="chart" data-target="#chart-sales-dark" data-update='{"data":{"datasets":[{"data":[0, 20, 10, 30, 15, 40, 20, 60, 60]}]}}' data-prefix="$" data-suffix="k">
                              <a href="#" className="nav-link py-2 px-3 active" data-toggle="tab">
                                <span className="d-none d-md-block">Month</span>
                                <span className="d-md-none">M</span>
                              </a>
                            </li>
                            <li className="nav-item" data-toggle="chart" data-target="#chart-sales-dark" data-update='{"data":{"datasets":[{"data":[0, 20, 5, 25, 10, 30, 15, 40, 40]}]}}' data-prefix="$" data-suffix="k">
                              <a href="#" className="nav-link py-2 px-3" data-toggle="tab">
                                <span className="d-none d-md-block">Week</span>
                                <span className="d-md-none">W</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="chart">
                        <canvas id="chart-sales-dark" className="chart-canvas"></canvas>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4">
                  <div className="card">
                    <div className="card-header bg-transparent">
                      <div className="row align-items-center">
                        <div className="col">
                          <h6 className="text-uppercase text-muted ls-1 mb-1">Performance</h6>
                          <h5 className="h3 mb-0">Total orders</h5>
                        </div>
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="chart">
                        <canvas id="chart-bars" className="chart-canvas"></canvas>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-8">
                  <div className="card">
                    <div className="card-header border-0">
                      <div className="row align-items-center">
                        <div className="col">
                          <h3 className="mb-0">Page visits</h3>
                        </div>
                        <div className="col text-right">
                          <a href="#!" className="btn btn-sm btn-primary">See all</a>
                        </div>
                      </div>
                    </div>
                    <div className="table-responsive">
                      <table className="table align-items-center table-flush">
                        <thead className="thead-light">
                          <tr>
                            <th scope="col">Page name</th>
                            <th scope="col">Visitors</th>
                            <th scope="col">Unique users</th>
                            <th scope="col">Bounce rate</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">
                              /argon/
                            </th>
                            <td>
                              4,569
                            </td>
                            <td>
                              340
                            </td>
                            <td>
                              <i className="fas fa-arrow-up text-success mr-3"></i> 46,53%
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              /argon/index.html
                            </th>
                            <td>
                              3,985
                            </td>
                            <td>
                              319
                            </td>
                            <td>
                              <i className="fas fa-arrow-down text-warning mr-3"></i> 46,53%
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              /argon/charts.html
                            </th>
                            <td>
                              3,513
                            </td>
                            <td>
                              294
                            </td>
                            <td>
                              <i className="fas fa-arrow-down text-warning mr-3"></i> 36,49%
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              /argon/tables.html
                            </th>
                            <td>
                              2,050
                            </td>
                            <td>
                              147
                            </td>
                            <td>
                              <i className="fas fa-arrow-up text-success mr-3"></i> 50,87%
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              /argon/profile.html
                            </th>
                            <td>
                              1,795
                            </td>
                            <td>
                              190
                            </td>
                            <td>
                              <i className="fas fa-arrow-down text-danger mr-3"></i> 46,53%
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4">
                  <div className="card">
                    <div className="card-header border-0">
                      <div className="row align-items-center">
                        <div className="col">
                          <h3 className="mb-0">Social traffic</h3>
                        </div>
                        <div className="col text-right">
                          <a href="#!" className="btn btn-sm btn-primary">See all</a>
                        </div>
                      </div>
                    </div>
                    <div className="table-responsive">
                      <table className="table align-items-center table-flush">
                        <thead className="thead-light">
                          <tr>
                            <th scope="col">Referral</th>
                            <th scope="col">Visitors</th>
                            <th scope="col"></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">
                              Facebook
                            </th>
                            <td>
                              1,480
                            </td>
                            <td>
                              <div className="d-flex align-items-center">
                                <span className="mr-2">60%</span>
                                <div>
                                  <div className="progress">
                                    <div className="progress-bar bg-gradient-danger" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: '60%'}}></div>
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              Facebook
                            </th>
                            <td>
                              5,480
                            </td>
                            <td>
                              <div className="d-flex align-items-center">
                                <span className="mr-2">70%</span>
                                <div>
                                  <div className="progress">
                                    <div className="progress-bar bg-gradient-success" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{width: '70%'}}></div>
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              Google
                            </th>
                            <td>
                              4,807
                            </td>
                            <td>
                              <div className="d-flex align-items-center">
                                <span className="mr-2">80%</span>
                                <div>
                                  <div className="progress">
                                    <div className="progress-bar bg-gradient-primary" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{width: '80%'}}></div>
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              Instagram
                            </th>
                            <td>
                              3,678
                            </td>
                            <td>
                              <div className="d-flex align-items-center">
                                <span className="mr-2">75%</span>
                                <div>
                                  <div className="progress">
                                    <div className="progress-bar bg-gradient-info" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: '75%'}}></div>
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              twitter
                            </th>
                            <td>
                              2,645
                            </td>
                            <td>
                              <div className="d-flex align-items-center">
                                <span className="mr-2">30%</span>
                                <div>
                                  <div className="progress">
                                    <div className="progress-bar bg-gradient-warning" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" style={{width: '30%'}}></div>
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <footer className="footer pt-0">
                <div className="row align-items-center justify-content-lg-between">
                  <div className="col-lg-6">
                    <div className="copyright text-center  text-lg-left  text-muted">
                      &copy; 2020 <a href="https://www.creative-tim.com" className="font-weight-bold ml-1" target="_blank">Creative Tim</a>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <ul className="nav nav-footer justify-content-center justify-content-lg-end">
                      <li className="nav-item">
                        <a href="https://www.creative-tim.com" className="nav-link" target="_blank">Creative Tim</a>
                      </li>
                      <li className="nav-item">
                        <a href="https://www.creative-tim.com/presentation" className="nav-link" target="_blank">About Us</a>
                      </li>
                      <li className="nav-item">
                        <a href="http://blog.creative-tim.com" className="nav-link" target="_blank">Blog</a>
                      </li>
                      <li className="nav-item">
                        <a href="https://github.com/creativetimofficial/argon-dashboard/blob/master/LICENSE.md" class="nav-link" target="_blank">MIT License</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </footer>
            </div>
          </div>
          </div>
        );
    }
}

export default Dashboard;