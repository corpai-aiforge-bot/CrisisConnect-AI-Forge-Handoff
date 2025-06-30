import React, { useState } from 'react';

const IncidentReport = ({ onReportSubmit }) => {
    const [incident, setIncident] = useState({ title: '', description: '', location: '' });
    
    const handleSubmit = (e) => {
        e.preventDefault();
        onReportSubmit(incident);
        setIncident({ title: '', description: '', location: '' });
    };
    
    return (
        <form onSubmit={handleSubmit} className="p-4 border rounded shadow-md">
            <h2 className="text-lg font-semibold">Report an Incident</h2>
            <input className="block border w-full p-2 my-2" type="text" placeholder="Title" value={incident.title} onChange={(e) => setIncident({ ...incident, title: e.target.value })} />
            <textarea className="border w-full p-2 my-2" placeholder="Description" value={incident.description} onChange={(e) => setIncident({ ...incident, description: e.target.value })} ></textarea>
            <input className="block border w-full p-2 my-2" type="text" placeholder="Location" value={incident.location} onChange={(e) => setIncident({ ...incident, location: e.target.value })} />
            <button className="bg-blue-500 text-white p-2 rounded" type="submit">Submit</button>
        </form>
    );
};

export default IncidentReport;