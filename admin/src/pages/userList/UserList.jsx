import { useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";

//local imports
import { Link } from "react-router-dom";
import "./userList.css";
import { getUserList, deleteUserList } from "../../redux/apiCalls";

export default function UserList() {
  const dispatch = useDispatch();
  const userList = useSelector(state => state.userList.userList);

  useEffect(() => {
    getUserList(dispatch);
  }, [dispatch]);

  const handleDelete = id => {
    deleteUserList(dispatch, id);
    // setData(data.filter(item => item.id !== id));
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 200 },
    { field: "username", headerName: "Username", width: 200 },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "isAdmin",
      headerName: "IsAdmin",
      width: 200
    },
    {
      field: "action",
      headerName: "Action",
      width: 250,
      renderCell: params => {
        return (
          <>
            <Link to={"/user/" + params.row._id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      }
    }
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={userList}
        disableSelectionOnClick
        columns={columns}
        getRowId={row => row._id}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}
