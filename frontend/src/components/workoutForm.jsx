import { Button, TextField } from "@mui/material";
import React from "react";
import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useWorkoutContext } from "../hooks/useWorkoutContext";

const WorkoutForm = () => {
  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");
  const [error, setError] = useState(false);
  const { dispatch } = useWorkoutContext();

  const successHandlerForToast = () => {
    if (title && load && reps) toast.success("Successfully Added!");
  };

  const errorHandlerForToast = () => {
    toast.error("Error! Please Enter Correctly");
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    // Now we have to send a POST Request to the server and store this new doc(row)
    const workout = { title, load, reps }; //new values to be added
    // A POST Request
    const response = await fetch("http://localhost:3500/api/workouts", {
      method: "POST",
      body: JSON.stringify(workout), //data that needs to be sent as JSON
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json(); //returns all data
    if (!response.ok) {
      setError(response.error); // invoking the ".error" property of our reposne obj as done in line36 of our controller
      errorHandlerForToast();
    } else {
      setTitle("");
      setLoad("");
      setReps("");
      setError(false);
      console.log("new workout added: ", workout);
      dispatch({type:"CREATE_WORKOUT", payload: json})
      successHandlerForToast();
    }
  };

  return (
    <form
      className="flex font-space bg-[#5cc9d323] rounded-xl flex-col gap-1 items-center w-[30%] mt-[4.8%] shadow-xl create"
      onSubmit={handleSubmit}
    >
      <div>
        <Toaster />
      </div>{" "}
      {/*Added just for Toast*/}
      <label className="mt-10 text-lg font-semibold text-[#393E46]">
        Exercise Title:&nbsp;{" "}
      </label>
      <TextField
        label="Title"
        variant="outlined"
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <label className="mt-10 text-lg font-semibold text-[#393E46]">
        Load (in Kg):&nbsp;{" "}
      </label>
      <TextField
        label="Load (in Kg)"
        variant="outlined"
        type="number"
        onChange={(e) => setLoad(e.target.value)}
        value={load}
      />
      <label className="mt-10 text-lg font-semibold text-[#393E46]">
        No. of repititions:{" "}
      </label>
      <TextField
        label="Repititions"
        variant="outlined"
        type="number"
        onChange={(e) => setReps(e.target.value)}
        value={reps}
      />
      <button
        className="bg-[#00ADB5] font-semibold text-[#EEEEEE] px-[5%] py-[1%] rounded-3xl hover:bg-[#0a9da5] uppercase mt-12 transition-all active:scale-90 mb-4"
      >
        Add workout
      </button>
    </form>
  );
};

export default WorkoutForm;
