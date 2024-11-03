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
    if (title && load && reps) {
      document.getElementById("title").classList.remove("border-red-500","placeholder-red-500");
      document.getElementById("load").classList.remove("border-red-500","placeholder-red-500");
      document.getElementById("reps").classList.remove("border-red-500","placeholder-red-500");
      document.getElementById("reps").placeholder="Enter repetitions";
      document.getElementById("title").placeholder="Enter title";
      document.getElementById("load").placeholder="Enter load";
      toast.success("Successfully Added!");
    }
  };

  const errorHandlerForToast = () => {
    var arr=[];
    if(!title){
      const element = document.getElementById("title");
      element.classList.add("border-red-500","placeholder-red-500");
      element.placeholder="Title is required"
      arr.push("Title");
    }
    if(!load){
      const element = document.getElementById("load");
      element.classList.add("border-red-500","placeholder-red-500");
      element.placeholder="Load is required"
      arr.push("Load");
    }
    if(!reps){
      const element = document.getElementById("reps");
      element.classList.add("border-red-500","placeholder-red-500");
      element.placeholder="Repetitions are required"
      arr.push("Repetitions");
    }
    var msg="Error! Please Enter ";
    for(var i=0;i<arr.length;i++){
      msg+=arr[i];
      msg+=", "
    }
    toast.error(msg+" correctly!");
    
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
      dispatch({ type: "CREATE_WORKOUT", payload: json });
      successHandlerForToast();
    }
  };

  return (
    <form
      className="flex font-space bg-gradient-to-t to-[#5cc9d33a] from-[#27c5d486] rounded-xl flex-col gap-1 items-center w-[30%] mt-[4.8%] shadow-xl create"
      onSubmit={handleSubmit}
    >
      <div>
        <Toaster />
      </div>{" "}
      {/*Added just for Toast*/}
      <label className="mt-10 mb-2 text-lg font-semibold text-[#393E46]">
        Exercise Title:&nbsp;{" "}
      </label>
      <input
        className="bg-[#459fa200] border-[1px] border-[#959494] py-2 px-4 placeholder-slate-500 rounded-md outline-none focus:ring-[#00ADB5] focus:ring-[1px]"
        id="title"
        placeholder="Enter Title"
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <label className="mt-8 mb-2 text-lg font-semibold text-[#393E46]">
        Load (in Kg):&nbsp;{" "}
      </label>
      <input
        className="bg-[#459fa200] border-[1px] border-[#959494] py-2 px-4 placeholder-slate-500 rounded-md outline-none focus:ring-[#00ADB5] focus:ring-[1px]"
        id="load"
        placeholder="Enter Load (in Kg)"
        type="number"
        onChange={(e) => setLoad(e.target.value)}
        value={load}
      />
      <label className="mt-8 mb-2 text-lg font-semibold text-[#393E46]">
        No. of repetitions:{" "}
      </label>
      <input
        className="bg-[#459fa200] border-[1px] border-[#959494] py-2 px-4 placeholder-slate-500 rounded-md outline-none focus:ring-[#00ADB5] focus:ring-[1px]"
        id="reps"
        placeholder="Enter repetitions"
        type="number"
        onChange={(e) => setReps(e.target.value)}
        value={reps}
      />
      <button className="bg-[#00ADB5] font-semibold text-[#EEEEEE] px-[5%] py-[1%] rounded-3xl hover:bg-[#0a9da5] uppercase mt-10 transition-all active:scale-90 mb-4 tracking-wide	">
        Add workout
      </button>
    </form>
  );
};

export default WorkoutForm;
