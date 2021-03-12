import { useState, useEffect } from "react";

const API_URL = "http://dummy.restapiexample.com/api/v1/";

const App = () => {
    const [isSearching, setIsSearching] = useState(false);
    const [employees, setEmployees] = useState([]);
    const [filteredEmployees, setFilteredEmployees] = useState(employees);

    const [error, setError] = useState("");
    const [password, setPassword] = useState("");
    const [verify, setVerify] = useState("");

    useEffect(() => {
        const fetchEmployees = async () => {
            const response = await fetch(API_URL + "employees");
            const result = await response.json();

            setEmployees(result.data);
            setFilteredEmployees(result.data);
        };

        fetchEmployees();
    }, []);

    const handleSearch = (e) => {
        e.preventDefault();
        setFilteredEmployees(
            e.target.value.length
                ? employees.filter((m) =>
                      m.employee_name
                          .toLowerCase()
                          .includes(e.target.value.toLowerCase())
                  )
                : employees
        );
        setError("");
    };

    const updateSalary = async (id, difference) => {
        const employee = employees.find((m) => m.id === id);
        if (employee) {
            const salary = parseInt(employee.employee_salary, 10) + difference;
            const response = await fetch(
                `${API_URL}update/${id}?employee_salary=${salary}`,
                { method: "PUT" }
            );
            const result = await response.json();

            if (result.status === "success") {
                return result.data.employee_salary;
            }
        }
        return null;
    };

    const updateEmployees = async (id, difference) => {
        const salary = await updateSalary(id, difference);
        if (salary) {
            const newEmployees = employees.map((m) => ({
                ...m,
                employee_salary: m.id === id ? salary : m.employee_salary,
            }));
            setEmployees(newEmployees);
            setFilteredEmployees(newEmployees);
        }
    };

    const handleDecrease = async (e) => {
        e.preventDefault();
        updateEmployees(e.target.dataset.id, -20);
    };

    const handleIncrease = (e) => {
        e.preventDefault();
        updateEmployees(e.target.dataset.id, 20);
    };

    const verifyPassword = (e) => {
        e.preventDefault();

        const errorStates = [
            e.target.value.length < 8,
            e.target.value.match(/[0-9]+/g) === null,
            e.target.value.match(/[a-z]+/g) === null,
            e.target.value.match(/[A-Z]+/g) === null,
            e.target.value.match(/[!"#$%&'()*+,./:;<=>?@\[\]^_`{\|}~-]+/g) ===
                null,
        ];
        const errorMessages = [
            "at least 8 characters",
            "digits",
            "lowercase characters",
            "uppercase characters",
            "special characters",
        ];

        const errors = errorMessages.filter((_, i) => errorStates[i]);

        if (errors.length) {
            setError(
                errors.length === errorMessages.length
                    ? ""
                    : "Password should contain " + errors.join(", ")
            );
        } else setError("");

        setPassword(e.target.value);
    };

    const verifyVerification = (e) => {
        e.preventDefault();
        setError(password !== e.target.value ? "Passwords do not match" : "");
        setVerify(e.target.value);
    };

    return (
        <>
            <header>
                <div className="container">
                    <h1 className="logo">Are you Hooked?</h1>
                </div>
            </header>

            <section>
                <div className="container">
                    {error ? <p className="error">{error}</p> : null}
                    <input
                        type="password"
                        onChange={verifyPassword}
                        value={password}
                        placeholder="Enter your password"
                    />
                    <input
                        type="password"
                        onChange={verifyVerification}
                        value={verify}
                        placeholder="Verify your password"
                    />
                </div>
            </section>

            <section>
                <div className="container">
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th
                                    onClick={() => setIsSearching(true)}
                                    onBlur={() => setIsSearching(false)}
                                >
                                    {isSearching ? (
                                        <input
                                            type="text"
                                            autoFocus={true}
                                            placeholder="Name..."
                                            onChange={handleSearch}
                                        />
                                    ) : (
                                        "Name"
                                    )}
                                </th>
                                <th>Age</th>
                                <th>Salary</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredEmployees.map(
                                ({
                                    id,
                                    employee_name,
                                    employee_age,
                                    employee_salary,
                                }) => (
                                    <tr key={id}>
                                        <th>{id}</th>
                                        <td>{employee_name}</td>
                                        <td>{employee_age}</td>
                                        <td>
                                            <button
                                                data-id={id}
                                                onClick={handleDecrease}
                                            >
                                                -
                                            </button>
                                            <span>{employee_salary}</span>
                                            <button
                                                data-id={id}
                                                onClick={handleIncrease}
                                            >
                                                +
                                            </button>
                                        </td>
                                    </tr>
                                )
                            )}
                        </tbody>
                    </table>
                </div>
            </section>

            <footer>
                <div className="container">
                    <p>
                        API provided by{" "}
                        <a href="http://www.dummy.restapiexample.com/">
                            Dummy sample REST API
                        </a>
                    </p>
                </div>
            </footer>
        </>
    );
};

export default App;
