import { useState, useEffect } from "react";

const API_URL = "https://codecoolfrontendapi.herokuapp.com/";
// const API_URL = "http://127.0.0.1:5000/";

const App = () => {
    const [isSearching, setIsSearching] = useState(false);
    const [employees, setEmployees] = useState([]);
    const [filteredEmployees, setFilteredEmployees] = useState(employees);

    const [error, setError] = useState("");
    const [password, setPassword] = useState("");
    const [verify, setVerify] = useState("");

    useEffect(() => {
        const fetchEmployees = async () => {
            const request = await fetch(API_URL + "employees");
            const response = await request.json();
            setEmployees(response);
            setFilteredEmployees(response);
        };

        fetchEmployees();
    }, []);

    const handleSearch = (e) => {
        e.preventDefault();
        setFilteredEmployees(
            e.target.value.length
                ? employees.filter((m) =>
                      m.name
                          .toLowerCase()
                          .includes(e.target.value.toLowerCase())
                  )
                : employees
        );
        setError("");
    };

    const updateEmployees = (id, difference) => {
        const update = async () => {
            const request = await fetch(API_URL + "employees/update/" + id, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    salary:
                        employees.find((m) => m.id === parseInt(id)).salary +
                        difference,
                }),
            });
            const response = await request.json();

            if (response) {
                setEmployees(response);
                setFilteredEmployees(response);
            }
        };

        update();
    };

    const handleDecrease = (e) => {
        e.preventDefault();
        updateEmployees(parseInt(e.target.dataset.id, 10), -20);
    };

    const handleIncrease = (e) => {
        e.preventDefault();
        updateEmployees(parseInt(e.target.dataset.id, 10), 20);
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
                                ({ id, name, age, salary }) => (
                                    <tr key={id}>
                                        <th>{id}</th>
                                        <td>{name}</td>
                                        <td>{age}</td>
                                        <td>
                                            <button
                                                data-id={id}
                                                onClick={handleDecrease}
                                            >
                                                -
                                            </button>
                                            <span>{salary}</span>
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
                        API hosted on{" "}
                        <a href="https://www.heroku.com/">heroku</a> with data
                        from{" "}
                        <a href="http://www.generatedata.com/">GenerateData</a>
                    </p>
                </div>
            </footer>
        </>
    );
};

export default App;
