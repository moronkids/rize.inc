import React from "react";

function Index() {
  return (
    <div class="wrapper">
      <nav class="sidebar sidebar-collapsed toggled sidebar-sticky">
        <div class="sidebar-content  js-simplebar">
          <a class="sidebar-brand" href="index.html">
            <img
              src="images/navbar_logo.png"
              alt="Rize.inc Logo"
              class="img-fluid"
            />
          </a>
          <ul class="sidebar-nav">
            <li class="sidebar-header">Board</li>
            <li class="sidebar-item active">
              <a href="index.html" class="font-weight-bold sidebar-link">
                <i class="align-middle" data-feather="box"></i>{" "}
                <span class="align-middle">Board list</span>
              </a>
            </li>
            <li class="sidebar-header">Main</li>
            <li class="sidebar-item">
              <a
                href="rize_dashboard.html"
                class="font-weight-bold sidebar-link"
              >
                <i class="align-middle" data-feather="home"></i>{" "}
                <span class="align-middle">Dashboard</span>
              </a>
            </li>
            <li class="sidebar-item">
              <a
                href="#bp"
                data-toggle="collapse"
                class="font-weight-bold sidebar-link collapsed"
              >
                <i class="align-middle" data-feather="briefcase"></i>{" "}
                <span class="align-middle">Business Process</span>
              </a>
              <ul id="bp" class="sidebar-dropdown list-unstyled collapse ">
                <li class="sidebar-item">
                  <a class="sidebar-link" href="rize_businessCVC.html">
                    Company Value Chain
                  </a>
                </li>
                <li class="sidebar-item">
                  <a class="sidebar-link" href="rize_businessTree.html">
                    Tree View
                  </a>
                </li>
                <li class="sidebar-item">
                  <a class="sidebar-link" href="rize_businessIndex.html">
                    Index View
                  </a>
                </li>
              </ul>
            </li>
            <li class="sidebar-item">
              <a
                href="#org"
                data-toggle="collapse"
                class="font-weight-bold sidebar-link collapsed"
              >
                <i class="align-middle" data-feather="server"></i>{" "}
                <span class="align-middle">Organizations</span>
              </a>
              <ul id="org" class="sidebar-dropdown list-unstyled collapse ">
                <li class="sidebar-item">
                  <a class="sidebar-link" href="rize_orgStructure.html">
                    Structure View
                  </a>
                </li>
                <li class="sidebar-item">
                  <a class="sidebar-link" href="rize_orgIndex.html">
                    Index View
                  </a>
                </li>
                <li class="sidebar-item">
                  <a class="sidebar-link" href="rize_orgEmployee.html">
                    Employees
                  </a>
                </li>
                <li class="sidebar-item">
                  <a class="sidebar-link" href="rize_orgGradeMap.html">
                    Grade Mapping
                  </a>
                </li>
              </ul>
            </li>
            <li class="sidebar-item">
              <a
                href="#mtrx"
                data-toggle="collapse"
                class="font-weight-bold sidebar-link collapsed"
              >
                <i class="align-middle" data-feather="clipboard"></i>{" "}
                <span class="align-middle">Matrix</span>
              </a>
              <ul id="mtrx" class="sidebar-dropdown list-unstyled collapse ">
                <li class="sidebar-item">
                  <a class="sidebar-link" href="rize_matrixResp.html">
                    Responsibility Matrix
                  </a>
                </li>
                <li class="sidebar-item">
                  <a class="sidebar-link" href="rize_matrixPivot.html">
                    Pivot Table
                  </a>
                </li>
              </ul>
            </li>
            <li class="sidebar-item">
              <a
                href="rize_jobdesc.html"
                class="font-weight-bold sidebar-link collapsed"
              >
                <i class="align-middle" data-feather="bookmark"></i>{" "}
                <span class="align-middle">Job Description</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div class="main">
        <nav class="navbar navbar-expand navbar-light bg-white sticky-top">
          <a class="sidebar-toggle d-flex mr-3">
            {" "}
            <i class="align-self-center" data-feather="menu"></i>
          </a>
          <a href="rize_detailCompany.html" class="rNoDecoLink">
            <img
              src="images/company_placeholder.png"
              class="avatar img-fluid rounded mr-1"
              alt="companylogo"
            />{" "}
            <span class="text-dark">Company A</span>
          </a>
          <a
            id="alertsDropdown2"
            class="nav-link nav-link-user dropdown-toggle d-none d-sm-inline-block"
            href="#"
            data-toggle="dropdown"
          ></a>
          <div
            class="dropdown-menu dropdown-menu-lg company-list"
            aria-labelledby="alertsDropdown2"
          >
            <a class="dropdown-item" href="pages-profile.html">
              <img
                src="images/company_placeholder.png"
                class="avatar img-fluid rounded mr-1"
                alt="companylogo"
              />{" "}
              Company A
            </a>
            <a class="dropdown-item" href="pages-profile.html">
              <img
                src="images/company_placeholder.png"
                class="avatar img-fluid rounded mr-1"
                alt="companylogo"
              />{" "}
              Company B
            </a>
            <a class="dropdown-item" href="pages-profile.html">
              <img
                src="images/company_placeholder.png"
                class="avatar img-fluid rounded mr-1"
                alt="companylogo"
              />{" "}
              Company C
            </a>
            <a class="dropdown-item" href="pages-profile.html">
              <img
                src="images/company_placeholder.png"
                class="avatar img-fluid rounded mr-1"
                alt="companylogo"
              />{" "}
              Company D
            </a>
          </div>
          <form class="form-inline d-none d-sm-inline-block">
            <input
              class="form-control form-control-no-border navbar-search ml-sm-4"
              type="text"
              placeholder="Search topics..."
              aria-label="Search"
            />
          </form>
          <div class="navbar-collapse collapse">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item dropdown">
                <a
                  class="nav-icon dropdown-toggle ml-2 d-inline-block d-sm-none"
                  href="#"
                  data-toggle="dropdown"
                >
                  <div class="position-relative">
                    <i class="align-middle mt-n1" data-feather="settings"></i>
                  </div>
                </a>
                <a
                  class="nav-link nav-link-user dropdown-toggle d-none d-sm-inline-block"
                  href="#"
                  data-toggle="dropdown"
                >
                  <img
                    src="images/user_placeholder.png"
                    class="avatar img-fluid rounded mr-1"
                    alt="user placeholder"
                  />{" "}
                  <span class="text-dark">Kathy Davis</span>
                </a>
                <div class="dropdown-menu dropdown-menu-right">
                  <a class="dropdown-item" href="pages-profile.html">
                    Profile
                  </a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">
                    Help
                  </a>
                  <a class="dropdown-item" href="rize_signIn.html">
                    Sign out
                  </a>
                </div>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-icon dropdown-toggle ml-2"
                  href="#"
                  data-toggle="dropdown"
                >
                  <div class="position-relative">
                    <i class="align-middle" data-feather="message-square"></i>
                    <span class="indicator">4</span>
                  </div>
                </a>
                <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right py-0">
                  <div class="dropdown-menu-header">
                    <div class="position-relative">4 New Messages</div>
                  </div>
                  <div class="list-group">
                    <a href="#" class="list-group-item">
                      <div class="row no-gutters align-items-center">
                        <div class="col-2">
                          <img
                            src="https://via.placeholder.com/156x156"
                            class="avatar img-fluid rounded-circle"
                            alt="Kathy Davis"
                          />
                        </div>
                        <div class="col-10 pl-2">
                          <div class="text-dark">Kathy Davis</div>
                          <div class="text-muted small mt-1">
                            Nam pretium turpis et arcu. Duis arcu tortor.
                          </div>
                          <div class="text-muted small mt-1">15m ago</div>
                        </div>
                      </div>
                    </a>
                    <a href="#" class="list-group-item">
                      <div class="row no-gutters align-items-center">
                        <div class="col-2">
                          <img
                            src="https://via.placeholder.com/156x156"
                            class="avatar img-fluid rounded-circle"
                            alt="John Smith"
                          />
                        </div>
                        <div class="col-10 pl-2">
                          <div class="text-dark">John Smith</div>
                          <div class="text-muted small mt-1">
                            Curabitur ligula sapien euismod vitae.
                          </div>
                          <div class="text-muted small mt-1">2h ago</div>
                        </div>
                      </div>
                    </a>
                    <a href="#" class="list-group-item">
                      <div class="row no-gutters align-items-center">
                        <div class="col-2">
                          <img
                            src="https://via.placeholder.com/156x156"
                            class="avatar img-fluid rounded-circle"
                            alt="Marie Salter"
                          />
                        </div>
                        <div class="col-10 pl-2">
                          <div class="text-dark">Marie Salter</div>
                          <div class="text-muted small mt-1">
                            Pellentesque auctor neque nec urna.
                          </div>
                          <div class="text-muted small mt-1">4h ago</div>
                        </div>
                      </div>
                    </a>
                    <a href="#" class="list-group-item">
                      <div class="row no-gutters align-items-center">
                        <div class="col-2">
                          <img
                            src="https://via.placeholder.com/156x156"
                            class="avatar img-fluid rounded-circle"
                            alt="Teresa Lessard"
                          />
                        </div>
                        <div class="col-10 pl-2">
                          <div class="text-dark">Teresa Lessard</div>
                          <div class="text-muted small mt-1">
                            Aenean tellus metus, bibendum sed, posuere ac,
                            mattis non.
                          </div>
                          <div class="text-muted small mt-1">5h ago</div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="dropdown-menu-footer">
                    <a href="#" class="text-muted">
                      Show all messages
                    </a>
                  </div>
                </div>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-icon dropdown-toggle ml-2"
                  href="#"
                  id="alertsDropdown"
                  data-toggle="dropdown"
                >
                  <div class="position-relative">
                    <i class="align-middle" data-feather="bell"></i>
                  </div>
                </a>
                <div
                  class="dropdown-menu dropdown-menu-lg dropdown-menu-right py-0"
                  aria-labelledby="alertsDropdown"
                >
                  <div class="dropdown-menu-header">4 New Notifications</div>
                  <div class="list-group">
                    <a href="#" class="list-group-item">
                      <div class="row no-gutters align-items-center">
                        <div class="col-2">
                          <i
                            class="text-danger"
                            data-feather="alert-circle"
                          ></i>
                        </div>
                        <div class="col-10">
                          <div class="text-dark">Update completed</div>
                          <div class="text-muted small mt-1">
                            Restart server 12 to complete the update.
                          </div>
                          <div class="text-muted small mt-1">2h ago</div>
                        </div>
                      </div>
                    </a>
                    <a href="#" class="list-group-item">
                      <div class="row no-gutters align-items-center">
                        <div class="col-2">
                          <i class="text-warning" data-feather="bell"></i>
                        </div>
                        <div class="col-10">
                          <div class="text-dark">Lorem ipsum</div>
                          <div class="text-muted small mt-1">
                            Aliquam ex eros, imperdiet vulputate hendrerit et.
                          </div>
                          <div class="text-muted small mt-1">6h ago</div>
                        </div>
                      </div>
                    </a>
                    <a href="#" class="list-group-item">
                      <div class="row no-gutters align-items-center">
                        <div class="col-2">
                          <i class="text-primary" data-feather="home"></i>
                        </div>
                        <div class="col-10">
                          <div class="text-dark">Login from 192.186.1.1</div>
                          <div class="text-muted small mt-1">8h ago</div>
                        </div>
                      </div>
                    </a>
                    <a href="#" class="list-group-item">
                      <div class="row no-gutters align-items-center">
                        <div class="col-2">
                          <i class="text-success" data-feather="user-plus"></i>
                        </div>
                        <div class="col-10">
                          <div class="text-dark">New connection</div>
                          <div class="text-muted small mt-1">
                            Anna accepted your request.
                          </div>
                          <div class="text-muted small mt-1">12h ago</div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="dropdown-menu-footer">
                    <a href="#" class="text-muted">
                      Show all notifications
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </nav>

        <main class="content">
          <div class="container-fluid p-0">
            <div class="row">
              <div class="col-lg-6 col-xl-3 d-flex">
                <div class="card flex-fill rCard">
                  <div class="card-header">
                    <div class="card-actions float-right">
                      <div class="dropdown">
                        <i
                          class="align-middle rDefault"
                          data-feather="check-circle"
                        ></i>
                        <span class="rDefaultText mr-2">Default</span>
                        <a
                          href="#"
                          data-toggle="dropdown"
                          data-display="static"
                          aria-expanded="false"
                        >
                          <i class="align-middle" data-feather="settings"></i>
                        </a>

                        <div class="dropdown-menu dropdown-menu-right">
                          <a class="dropdown-item" href="rize_detailBoard.html">
                            <i
                              class="align-middle mr-2 rInfo"
                              data-feather="info"
                            ></i>
                            Board Information
                          </a>
                          <a
                            class="dropdown-item"
                            href="#"
                            data-toggle="modal"
                            data-target="#duplicateModal"
                          >
                            <i
                              class="align-middle mr-2 rDuplicate"
                              data-feather="copy"
                            ></i>
                            Duplicate
                          </a>
                          <div class="dropdown-divider"></div>
                          <a
                            class="dropdown-item"
                            href="#"
                            data-toggle="modal"
                            data-target="#deleteModal"
                          >
                            <i
                              class="align-middle mr-2 rRemove"
                              data-feather="trash-2"
                            ></i>
                            Delete
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card-body my-2">
                    <div class="row d-flex align-items-center mb-4">
                      <div class="col-8">
                        <a href="rize_dashboard.html" class="rNoDecoLink">
                          <h2 class="d-flex align-items-center mb-0">
                            Board A
                          </h2>
                        </a>
                        <span class="rCardShortdesc">Board Short Desc</span>
                      </div>
                    </div>
                  </div>
                  <div class="card-footer">
                    <button class="btn btn-pill btn-primary btn-sm" disabled>
                      accepted
                    </button>
                    <button class="btn btn-pill btn-warning btn-sm" disabled>
                      public
                    </button>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-xl-3 d-flex">
                <div class="card flex-fill rCard">
                  <div class="card-header">
                    <div class="card-actions float-right">
                      <div class="dropdown">
                        <a
                          href="#"
                          data-toggle="dropdown"
                          data-display="static"
                          aria-expanded="false"
                        >
                          <i class="align-middle" data-feather="settings"></i>
                        </a>

                        <div class="dropdown-menu dropdown-menu-right">
                          <a class="dropdown-item" href="rize_detailBoard.html">
                            <i
                              class="align-middle mr-2"
                              data-feather="info"
                            ></i>
                            Board Information
                          </a>
                          <a class="dropdown-item" href="#">
                            <i
                              class="align-middle mr-2"
                              data-feather="copy"
                            ></i>
                            Duplicate
                          </a>
                          <div class="dropdown-divider"></div>
                          <a class="dropdown-item" href="#">
                            <i
                              class="align-middle mr-2"
                              data-feather="trash-2"
                            ></i>
                            Delete
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card-body my-2">
                    <div class="row d-flex align-items-center mb-4">
                      <div class="col-8">
                        <h2 class="d-flex align-items-center mb-0">Board A</h2>
                        <span class="rCardShortdesc">Board Short Desc</span>
                      </div>
                    </div>
                  </div>
                  <div class="card-footer">
                    <button class="btn btn-pill btn-primary btn-sm" disabled>
                      accepted
                    </button>
                    <button class="btn btn-pill btn-warning btn-sm" disabled>
                      public
                    </button>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-xl-3 d-flex">
                <div class="card flex-fill rCard">
                  <div class="card-header">
                    <div class="card-actions float-right">
                      <div class="dropdown">
                        <a
                          href="#"
                          data-toggle="dropdown"
                          data-display="static"
                          aria-expanded="false"
                        >
                          <i class="align-middle" data-feather="settings"></i>
                        </a>

                        <div class="dropdown-menu dropdown-menu-right">
                          <a class="dropdown-item" href="rize_detailBoard.html">
                            <i
                              class="align-middle mr-2"
                              data-feather="info"
                            ></i>
                            Board Information
                          </a>
                          <a class="dropdown-item" href="#">
                            <i
                              class="align-middle mr-2"
                              data-feather="copy"
                            ></i>
                            Duplicate
                          </a>
                          <div class="dropdown-divider"></div>
                          <a class="dropdown-item" href="#">
                            <i
                              class="align-middle mr-2"
                              data-feather="trash-2"
                            ></i>
                            Delete
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card-body my-2">
                    <div class="row d-flex align-items-center mb-4">
                      <div class="col-8">
                        <h2 class="d-flex align-items-center mb-0">Board A</h2>
                        <span class="rCardShortdesc">Board Short Desc</span>
                      </div>
                    </div>
                  </div>
                  <div class="card-footer">
                    <button class="btn btn-pill btn-primary btn-sm" disabled>
                      accepted
                    </button>
                    <button class="btn btn-pill btn-warning btn-sm" disabled>
                      public
                    </button>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-xl-3 d-flex">
                <div class="card flex-fill rCard">
                  <div class="card-header">
                    <div class="card-actions float-right">
                      <div class="dropdown">
                        <a
                          href="#"
                          data-toggle="dropdown"
                          data-display="static"
                          aria-expanded="false"
                        >
                          <i class="align-middle" data-feather="settings"></i>
                        </a>

                        <div class="dropdown-menu dropdown-menu-right">
                          <a class="dropdown-item" href="rize_detailBoard.html">
                            <i
                              class="align-middle mr-2"
                              data-feather="info"
                            ></i>
                            Board Information
                          </a>
                          <a class="dropdown-item" href="#">
                            <i
                              class="align-middle mr-2"
                              data-feather="copy"
                            ></i>
                            Duplicate
                          </a>
                          <div class="dropdown-divider"></div>
                          <a class="dropdown-item" href="#">
                            <i
                              class="align-middle mr-2"
                              data-feather="trash-2"
                            ></i>
                            Delete
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card-body my-2">
                    <div class="row d-flex align-items-center mb-4">
                      <div class="col-8">
                        <h2 class="d-flex align-items-center mb-0">Board A</h2>
                        <span class="rCardShortdesc">Board Short Desc</span>
                      </div>
                    </div>
                  </div>
                  <div class="card-footer">
                    <button class="btn btn-pill btn-primary btn-sm" disabled>
                      accepted
                    </button>
                    <button class="btn btn-pill btn-warning btn-sm" disabled>
                      public
                    </button>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-xl-3 d-flex">
                <div class="card flex-fill rCard">
                  <div class="card-header">
                    <div class="card-actions float-right">
                      <div class="dropdown">
                        <a
                          href="#"
                          data-toggle="dropdown"
                          data-display="static"
                          aria-expanded="false"
                        >
                          <i class="align-middle" data-feather="settings"></i>
                        </a>

                        <div class="dropdown-menu dropdown-menu-right">
                          <a class="dropdown-item" href="rize_detailBoard.html">
                            <i
                              class="align-middle mr-2"
                              data-feather="info"
                            ></i>
                            Board Information
                          </a>
                          <a class="dropdown-item" href="#">
                            <i
                              class="align-middle mr-2"
                              data-feather="copy"
                            ></i>
                            Duplicate
                          </a>
                          <div class="dropdown-divider"></div>
                          <a class="dropdown-item" href="#">
                            <i
                              class="align-middle mr-2"
                              data-feather="trash-2"
                            ></i>
                            Delete
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card-body my-2">
                    <div class="row d-flex align-items-center mb-4">
                      <div class="col-8">
                        <h2 class="d-flex align-items-center mb-0">Board A</h2>
                        <span class="rCardShortdesc">Board Short Desc</span>
                      </div>
                    </div>
                  </div>
                  <div class="card-footer">
                    <button class="btn btn-pill btn-primary btn-sm" disabled>
                      accepted
                    </button>
                    <button class="btn btn-pill btn-warning btn-sm" disabled>
                      public
                    </button>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-xl-3 d-flex">
                <div class="card flex-fill rCard addCard">
                  <div class="card-body my-2 rCenterCont">
                    <div class="row d-flex align-items-center mb-4 rCenterItem">
                      <div class="col-8">
                        <a href="#">
                          <center>
                            <h2
                              class="d-flex align-items-center mb-0"
                              data-toggle="modal"
                              data-target="#addBoardModal"
                            >
                              Add Board
                            </h2>
                            <i class="addIcon" data-feather="plus-circle"></i>
                          </center>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        {/* <!-- DUPLICATE  modal -->
							<div class="modal fade rModal" id="duplicateModal" tabindex="-1" role="dialog" aria-hidden="true">
										<div class="modal-dialog modal-sm" role="document">
											<div class="modal-content">
												<div class="modal-header">
													<h5 class="modal-title">Duplicate Board</h5>
													<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							                      <span aria-hidden="true">&times;</span>
							                    </button>
												</div>
												<div class="modal-body m-3">
													<img src="images/duplicate_img.png" class="rModalImg">
													<p class="mb-0">This action cannot be reverted, it will copy your existing board into a new board for another set of data, would you really like to duplicate your board?</p>
												</div>
												<div class="modal-footer">
													<button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
													<button onclick="location.href='index.html?status=success_duplicate'" type="button" data-dismiss="modal" class="btn btn-primary">Yes, Please</button>
												</div>
											</div>
										</div>
									</div>
			<!-- END DUPLICATE modal --> */}
        {/* <!-- DELETE  modal -->
								<div class="modal fade rModal" id="deleteModal" tabindex="-1" role="dialog" aria-hidden="true">
										<div class="modal-dialog modal-sm" role="document">
											<div class="modal-content">
												<div class="modal-header">
													<h5 class="modal-title">Delete Board</h5>
													<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							                      <span aria-hidden="true">&times;</span>
							                    </button>
												</div>
												<div class="modal-body m-3">
													<img src="images/delete_img.png" class="rModalImg">
													<p class="mb-0">WARNING! This action cannot be reverted, it will delete your board and all of the data inside the board, do you wish to continue?</p>
												</div>
												<div class="modal-footer">
													<button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
													<button onclick="location.href='index.html?status=success_remove'" type="button" data-dismiss="modal" class="btn btn-primary">Continue</button>
												</div>
											</div>
										</div>
									</div>
									<!-- END DELETE modal -->
									<!-- ADD BOARD  modal -->
							<div class="modal fade rModal" id="addBoardModal" tabindex="-1" role="dialog" aria-hidden="true">
										<div class="modal-dialog addboard modal-md" role="document">
											<div class="modal-content">
												<div class="modal-header">
													<h1 class="modal-title float-left">Add Board</h1>
												</div>
												<div class="modal-body m-2 inline-div">
													<div class="col-12 col-md-12 pr2">
														<form action="#">
											<div class="form-group">
											<label>Board Name</label>
											<input class="form-control form-control-lg" type="text" name="name" placeholder="Enter your name" />
											</div>
											<div class="form-group">
											<label>Description</label>
												<div id="quill-toolbar">
													<span class="ql-formats">
										              <select class="ql-font"></select>
										              <select class="ql-size"></select>
										            </span>
													<span class="ql-formats">
										              <button class="ql-bold"></button>
										              <button class="ql-italic"></button>
										              <button class="ql-underline"></button>
										              <button class="ql-strike"></button>
										            </span>
													<span class="ql-formats">
										              <select class="ql-color"></select>
										              <select class="ql-background"></select>
										            </span>
													<span class="ql-formats">
										              <button class="ql-header" value="1"></button>
										              <button class="ql-header" value="2"></button>
										              <button class="ql-blockquote"></button>
										            </span>
													<span class="ql-formats">
										              <button class="ql-list" value="ordered"></button>
										              <button class="ql-list" value="bullet"></button>
										             </span>
													<span class="ql-formats">
										              <button class="ql-link"></button>
										              <button class="ql-image"></button>
										              <button class="ql-video"></button>
										            </span>
												</div>
												<div id="quill-editor"></div>
											</div>
											<div class="text-center mt-3 col-md-6 float-right">
												<a href="rize_boardlist.html?status=success_board" class="btn btn-lg btn-primary bt100 btnRprim">Submit</a>
												<!-- <button type="submit" class="btn btn-lg btn-primary">Sign in</button> -->
											</div>
										</form>
										</div>
												</div>
											</div>
										</div>
									</div>
									<!-- ADD BOARD modal -->
									<!-- SUCCESS  modal -->
								<div class="modal fade rModal" id="successModal" tabindex="-1" role="dialog" aria-hidden="true">
										<div class="modal-dialog modal-sm" role="document">
											<div class="modal-content">
												<div class="modal-header">
													<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							                      <span aria-hidden="true">&times;</span>
							                    </button>
												</div>
												<div class="modal-body m-3">
													<img src="images/success_img.png" class="rModalImg">
													<p class="mb-0">Process successfully completed!</p>
												</div>
											</div>
										</div>
									</div>
									<!-- SUCCESS modal -->
									<!-- ERROR  modal -->
								<div class="modal fade rModal" id="errorModal" tabindex="-1" role="dialog" aria-hidden="true">
										<div class="modal-dialog modal-sm" role="document">
											<div class="modal-content">
												<div class="modal-header">
													<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							                      <span aria-hidden="true">&times;</span>
							                    </button>
												</div>
												<div class="modal-body m-3">
													<img src="images/failed_img.png" class="rModalImg">
													<p class="mb-0">We encounter some problem, please check your input or contact us using this error code : <b>xxxxx</b> </p>
												</div>
											</div>
										</div>
									</div>
									<!-- ERROR modal -->
									<!-- SUCCESS  modal -->
								<div class="modal fade rModal" id="successModal_duplicate" tabindex="-1" role="dialog" aria-hidden="true">
										<div class="modal-dialog modal-sm" role="document">
											<div class="modal-content">
												<div class="modal-header">
													<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							                      <span aria-hidden="true">&times;</span>
							                    </button>
												</div>
												<div class="modal-body m-3">
													<img src="images/success_img.png" class="rModalImg">
													<p class="mb-0">Duplicate Request Success, please wait for a minute while the process is running on the background</p>
												</div>
											</div>
										</div>
									</div>
									<div class="modal fade rModal" id="successModal_remove" tabindex="-1" role="dialog" aria-hidden="true">
										<div class="modal-dialog modal-sm" role="document">
											<div class="modal-content">
												<div class="modal-header">
													<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							                      <span aria-hidden="true">&times;</span>
							                    </button>
												</div>
												<div class="modal-body m-3">
													<img src="images/success_img.png" class="rModalImg">
													<p class="mb-0">Remove Board successfully Completed!</p>
												</div>
											</div>
										</div>
									</div>
									<div class="modal fade rModal" id="successModal_board" tabindex="-1" role="dialog" aria-hidden="true">
										<div class="modal-dialog modal-sm" role="document">
											<div class="modal-content">
												<div class="modal-header">
													<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							                      <span aria-hidden="true">&times;</span>
							                    </button>
												</div>
												<div class="modal-body m-3">
													<img src="images/success_img.png" class="rModalImg">
													<p class="mb-0">Board has been added!</p>
												</div>
											</div>
										</div>
									</div>
									<!-- SUCCESS  modal --> */}
        <footer class="footer">
          <div class="container-fluid">
            <div class="row text-muted">
              <div class="col-6 text-left">
                <p class="mb-0">
                  &copy;{" "}
                  <a href="index.html" class="text-muted">
                    Vuze
                  </a>
                </p>
              </div>
              <div class="col-6 text-right">
                <ul class="list-inline">
                  <li class="list-inline-item">
                    <a class="text-muted" href="#">
                      About us
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a class="text-muted" href="#">
                      Help
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a class="text-muted" href="#">
                      Contact
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a class="text-muted" href="#">
                      Terms & Conditions
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Index;
