import React, { Component } from "react";
import "./App.css";
import Toolbar from "./components/Menu/Toolbar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop";

class App extends Component {
  state = {
    sideDrawerOpen: false,
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <div style={{ height: "100%" }}>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        <main style={{ marginTop: "64px" }}>
          <div className="container">
            <div className="text-center">
              <h1>Quản lý truyện</h1>
              <hr style={{color:'#93C54B',border:'2px solid'}}/>
            </div>
            <div className="row">
              
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <button type="button" className="btn btn-primary">
                  <span className="fa fa-plus mr-5" />
                  Thêm Truyện
                </button>
                <div className="row mt-15">
                  <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Nhập từ khóa..."
                      />
                      <span className="input-group-btn">
                        <button className="btn btn-primary" type="button">
                          <span className="fa fa-search mr-5" />
                          Tìm
                        </button>
                      </span>
                    </div>
                  </div>
                  <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <div className="dropdown">
                      <button
                        className="btn btn-primary dropdown-toggle"
                        type="button"
                        id="dropdownMenu1"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="true"
                      >
                        Sắp Xếp{" "}
                        <span className="fa fa-caret-square-o-down ml-5" />
                      </button>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenu1"
                      >
                        <li>
                          <a role="button">
                            <span className="fa fa-sort-alpha-asc pr-5">
                              Tên A-Z
                            </span>
                          </a>
                        </li>
                        <li>
                          <a role="button">
                            <span className="fa fa-sort-alpha-desc pr-5">
                              Tên Z-A
                            </span>
                          </a>
                        </li>
                        <li role="separator" className="divider" />
                        <li>
                          <a role="button">Trạng Thái Duyệt</a>
                        </li>
                        <li>
                          <a role="button">Trạng Thái Chưa Duyệt</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="row mt-15">
                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <table className="table table-bordered table-hover">
                      <thead>
                        <tr>
                          <th className="text-center">STT</th>
                          <th className="text-center">Tên</th>
                          <th className="text-center">Trạng Thái</th>
                          <th className="text-center">Thể Loại</th>
                          <th className="text-center">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td />
                          <td>
                            <input type="text" className="form-control" />
                          </td>
                          <td>
                            <select className="form-control">
                              <option value={-1}>Tất Cả</option>
                              <option value={0}>Chưa Duyệt</option>
                              <option value={1}>Duyệt</option>
                            </select>
                          </td>
                          <td>
                            <select className="form-control">
                              <option value={-1}>Tất Cả</option>
                              <option value={0}>Trinh Thám</option>
                              <option value={1}>Hài Hước</option>
                              <option value={2}>Ngôn Tình</option>
                              <option value={3}>Không xác định</option>
                            </select>
                          </td>
                          <td />
                        </tr>
                        <tr>
                          <td>1</td>
                          <td>Tiểu Thuyết:Những thực tập sinh của VietED</td>
                          <td className="text-center">
                            <span className="label label-success">
                            Duyệt
                            </span>
                          </td>
                          <td className="text-center">
                            <span className="label label-success">
                            Không xác định
                            </span>
                          </td>
                          <td className="text-center">
                            <button type="button" className="btn btn-warning">
                              <span className="fa fa-pencil mr-5" />
                              Sửa
                            </button>
                            &nbsp;
                            <button type="button" className="btn btn-danger">
                              <span className="fa fa-trash mr-5" />
                              Xóa
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
