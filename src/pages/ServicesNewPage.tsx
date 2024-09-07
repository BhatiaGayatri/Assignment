import { useState } from "react";
import priceOptions from "../data/priceOptions";

const initialData = {
  port: "",
  priceOption: "",
};

function ServicesNewPage() {
  const [formData, setFormData] = useState(initialData);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData({ ...formData, priceOption: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.port && formData.priceOption) {
      alert("Successfully deployed.");
    } else {
      alert("Please fill out all required fields.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-8">Services New Page</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-6 rounded">
        <div className="mb-4">
          <label htmlFor="port" className="block text-gray-700">
            Port:
          </label>
          <input
            type="text"
            id="port"
            name="port"
            value={formData.port}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="priceOption" className="block text-gray-700">
            Price Configuration:
          </label>
          <select
            id="priceOption"
            name="priceOption"
            value={formData.priceOption}
            onChange={handleSelectChange}
            className="w-full px-4 py-2 border rounded"
            required
          >
            <option value="">Select an option</option>
            {priceOptions.map((option) => (
              <option key={option.id} value={option.id}>
                {option.label} - ${option.value}
              </option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-500 text-white rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default ServicesNewPage;
