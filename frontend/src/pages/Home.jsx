import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import WorkoutForm from "../components/workoutForm";
import { useWorkoutContext } from "../hooks/useWorkoutContext";
import DeleteIcon from '@mui/icons-material/Delete';
import toast, { Toaster } from "react-hot-toast";
//date fns => simplifies Time/Date
import formatDistanceToNow from "date-fns/formatDistanceToNow"

const Home = () => {
  const { workouts, dispatch } = useWorkoutContext();

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(7);

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("http://localhost:3500/api/workouts");
      const json = await response.json();
      if (response.ok) {
        dispatch({ type: "SET_WORKOUTS", payload: json });
      }
    };
    fetchWorkouts();
  }, [dispatch]);

  // Handle pagination changes
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 7));
    setPage(0);
  };

  const handleDeleteClick = async (_id) => {
    console.log(_id)
    const response = await fetch("http://localhost:3500/api/workouts/"+_id,{
      method:"DELETE",
    })
    const json = await response.json();
    if(!response.ok){
      toast.error("Oops! Some error occurred!"+response.error)
    }
    else{
      dispatch({type: "DELETE_WORKOUT", payload: json})
      toast.success("Successfully Deleted!")
    }
  }

  return (
    <div className="flex gap-6">
      <div className="home">
        <h2 className="font-bold text-green-600 text-3xl py-4">Home</h2>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell className="bg-[#00ADB5]">
                  <div className="font-bold text-[#393E46] uppercase text-md text-center font-oswald">
                    S.No.
                  </div>
                </TableCell>
                <TableCell className="bg-[#393E46]" sx={{width:"15rem"}}>
                  <div className="font-bold text-[#00ADB5] uppercase text-md text-center font-oswald">
                    Exercise
                  </div>
                </TableCell>
                <TableCell className="bg-[#393E46]">
                  <div className="font-bold text-[#00ADB5] text-md uppercase text-center font-oswald">
                    Load (in Kg)
                  </div>
                </TableCell>
                <TableCell className="bg-[#393E46]">
                  <div className="font-bold text-[#00ADB5] text-md uppercase text-center font-oswald">
                    Number of repetitions
                  </div>
                </TableCell>
                <TableCell align="center" className="bg-[#393E46]">
                  <div className="font-bold text-[#00ADB5] text-md uppercase font-oswald">
                    Created At
                  </div>
                </TableCell>
                <TableCell className="bg-[#393E46]">
                  <div className="font-bold text-[#00ADB5] text-md uppercase text-center">
                    
                  </div>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {workouts &&
                workouts
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((workout, index) => (
                    <TableRow key={workout._id} className="hover:bg-[#eaebec]">
                      <TableCell className=" bg-[#393E46]">
                        <div className="font-bold text-white text-center">
                          {(page * rowsPerPage) + index + 1}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="font-bold font-space text-[#06575b] text-center text-[1.05rem]">
                          {workout.title}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="text-center font-semibold font-oswald">{workout.load}</div>
                      </TableCell>
                      <TableCell>
                        <div className="text-center font-semibold font-oswald">{workout.reps}</div>
                      </TableCell>
                      <TableCell>
                        <div className="text-center font-space text-blue-800">{formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}</div>
                      </TableCell>
                      <TableCell>
                        <button onClick={()=>handleDeleteClick(workout._id)} className="text-red-600 text-sm text-center hover:text-red-800  active:scale-75 transition-all">
                          <DeleteIcon />
                        </button>
                      </TableCell>
                    </TableRow>
                  ))}
            </TableBody>
          </Table>
          <TablePagination
            component="div"
            count={workouts ? workouts.length : 0}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            rowsPerPageOptions={[5, 10, 25]}
          />
        </TableContainer>
      </div>
      <WorkoutForm />
    </div>
  );
};

export default Home;
