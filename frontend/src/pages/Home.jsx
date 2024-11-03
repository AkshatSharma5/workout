import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import { useEffect, useState } from "react";
import WorkoutForm from "../components/workoutForm";

const Home = () => {
  const [workouts, setWorkouts] = useState(null);

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("http://localhost:3500/api/workouts");
      const json = await response.json();
      if (response.ok) {
        setWorkouts(json);
      }
    };
    fetchWorkouts();
  }, []);

  return (
    <div className="flex gap-6">
      <div className="home">
        <h2 className="font-bold text-green-600 text-3xl py-4">Home</h2>
        <TableContainer className="shadow-xl" component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell className="bg-[#393E46]">
                  <span className="font-bold text-[#00ADB5] uppercase text-lg">
                    Exercise
                  </span>
                </TableCell>
                <TableCell className="bg-[#393E46]">
                  <span className="font-bold text-[#00ADB5] text-lg uppercase">
                    Load (in Kg)
                  </span >
                </TableCell>
                <TableCell className="bg-[#393E46]">
                  <span className="font-bold text-[#00ADB5] text-lg uppercase">
                    Number of Repititions
                  </span>
                </TableCell>
                <TableCell className="bg-[#393E46]">
                  <span className="font-bold text-[#00ADB5] text-lg uppercase">
                    Created At
                  </span>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {workouts &&
                workouts.map((workout) => (
                  <TableRow key={workout._id} className="hover:bg-[#eaebec]">
                    <TableCell>
                      <span className="font-bold font-space text-[#06575b]">
                        {workout.title}
                      </span>
                    </TableCell>
                    <TableCell>
                      <span>{workout.load}</span>
                    </TableCell>
                    <TableCell>
                      <span>{workout.reps}</span>
                    </TableCell>
                    <TableCell>
                      <span>{workout.createdAt}</span>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <WorkoutForm />
    </div>
  );
};

export default Home;
