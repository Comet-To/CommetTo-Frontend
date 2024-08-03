import React, { forwardRef, useRef, useState } from "react";
import { Axios } from "axios";
import axios from "axios";
import TimeScheduleList from "./TimeScheduleList";

const BACKEND_URL = import.meta.env.VITE_APP_BASE_URL;

export default function AddNewEvent() {
	//useState

	// const [editButton, setEditButton] = useState("Add");
	const [addData, setAddData] = useState({
		name: "",
		time: "",
		description: "",
	});
	const [scheduleData, setScheduleData] = useState([]);

	const shcedulesRef = useRef(null)




	const dataToSent = {};
	const overViewEvent = {
		name: addData.name,
		description: addData.description,
		time: addData.time,
	};
	const schedule = {

	}

	const userData = {
		name: addData.name,
		description: addData.description,
		time: addData.time,
	};

	//useEffect

	//handler functions

	// checks password

	const handleClick = () => {
		// setEditButton(editButton === "Add" ? "Saved" : "Saved");
		console.log(getChildState())
	};

	//creates object takes in event details.
	const handleEventsData = (key, e) => {
		e.preventDefault();
		const value = e.target.value;
		const newData = { ...addData, [key]: value };
		setAddData(newData);
		// console.log(addData)
	};

	//function data sending to Database
	const handleSumbitData = async (e) => {
		console.log(addData);
		e.preventDefault();

		console.log(e);


		await axios
			.post(BACKEND_URL + `/event`, userData)
			.then((res) => console.log(res.data))
			.catch((err) => console.log(err));

		// try{
		//   const response = await axios.post( BACKEND_URL + 'event', userData);
		//   console.log(response);
		// } catch (error){
		//   return 'Invalid Input';
		// }
	};

	function getChildState() {
		const childState = shcedulesRef.current.getScheduleColumn()
		console.log(childState)
	}

	//JSX return

	return (
		<>
			{/* Add and input data */}

			<div>
				<div className="mt-10 mb-16 container-add flex-row justify-self-center ml-72 max-w-md h-auto rounded-lg dark:bg-gray-100 p-10 shadow-2xl">
					<h1 className="mt-3 mb-8 font-extrabold text-[#7a68bf] text-3xl">
						Add Event
					</h1>

					<form onSubmit={handleSumbitData}>
						{/* EVENTNAME */}
						<div className="mb-5">
							<h1 className="float-left mb-2">Name</h1>
							<label
								htmlFor="event-name"
								className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
							></label>
							<input
								type="text"
								value={addData.name}
								onChange={(e) => handleEventsData("name", e)}
								required
								placeholder="Event Name"
								id="small-input"
								className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-transparent-700 dark:border-gray-400 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
							/>
						</div>
						{/* SCHEDULE */}
						<h1 className=" mb-6 h-2">Schedule</h1>
						<div className="mb-5">
							<div>
								{/* <TimeScheduleList isEditActive={true} getScheduleColumn={getScheduleColumn} */}
								<TimeScheduleList isEditActive={true} ref={shcedulesRef}
									></TimeScheduleList>
								{/* <WrapTimeScheduleList ref={shcedulesRef}/> */}
							</div>
						</div>

						{/* DECRIPTION */}
						<div className="mb-5">
							<h1 className="float-left mb-2">Description</h1>
							<label
								htmlFor="description"
								className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
							></label>
							<textarea
								type="text"
								value={addData.description}
								onChange={(e) => handleEventsData("description", e)}
								required
								placeholder="Description"
								id="small-input"
								className="bg-gray-50 border h-28 border-gray-300 text-gray-900 text-sm rounded-lg
                  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-transparent-700 dark:border-gray-400 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
							/>
						</div>

						{/* ADD BUTTON */}
						<div>
							<button
								onClick={handleClick}
								type="submit"
								data-twe-ripple-init
								data-twe-ripple-color="light"
								className=" select-none rounded-lg bg-gray-400 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-600/50 transition-all hover:shadow-lg hover:shadow-indigo-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none
                  w-32 flex-none 
                  hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 
                  focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
							>
								{/* {editButton} */}
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
}
