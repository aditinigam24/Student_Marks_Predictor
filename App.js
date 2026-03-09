// frontend/src/App.js
import { useState } from "react";
import axios from "axios";

function App() {

const [hours,setHours] = useState("")
const [attendance,setAttendance] = useState("")
const [previous,setPrevious] = useState("")
const [result,setResult] = useState(null)

const predictMarks = async () => {

const response = await axios.post(
"http://127.0.0.1:5000/predict",
{
hours:Number(hours),
attendance:Number(attendance),
previous:Number(previous)
}
)

setResult(response.data.predicted_marks)

}

return (

<div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600">

<div className="bg-white shadow-xl rounded-xl p-8 w-96">

<h1 className="text-2xl font-bold text-center text-gray-700 mb-6">
Student Marks Predictor
</h1>

<input
type="number"
placeholder="Study Hours"
className="w-full border p-2 rounded mb-3"
onChange={(e)=>setHours(e.target.value)}
/>

<input
type="number"
placeholder="Attendance (%)"
className="w-full border p-2 rounded mb-3"
onChange={(e)=>setAttendance(e.target.value)}
/>

<input
type="number"
placeholder="Previous Marks"
className="w-full border p-2 rounded mb-4"
onChange={(e)=>setPrevious(e.target.value)}
/>

<button
onClick={predictMarks}
className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition"
>
Predict Marks
</button>

{result && (

<div className="mt-6 text-center bg-gray-100 p-3 rounded">

<p className="text-gray-600">Predicted Marks</p>

<h2 className="text-2xl font-bold text-indigo-600">
{result.toFixed(2)}
</h2>

</div>

)}

</div>

</div>

)

}

export default App