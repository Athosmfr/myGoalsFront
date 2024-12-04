import { FormEvent, useEffect, useState } from "react";
import { Button } from "../../components/button";
import { Navbar } from "../../components/navbar";
import { Edit, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { IGoal } from "../../interfaces/Goals";

export function Goals() {

    const navigate = useNavigate();

    const isLoggedOn = localStorage.getItem('token');

    const [isGoalsRegisterModalOpen, setIsGoalsRegisterModalOpen] = useState(false)

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [status, setStatus] = useState<string>('CREATED');
    const [userGoals, setUserGoals] = useState<IGoal[]>([]);

    const [editingGoalId, setEditingGoalId] = useState<number | undefined>(undefined);

    function handleGoalRegistration(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const goalData: IGoal = {
            id: editingGoalId,
            title,
            description,
            startDate,
            endDate,
            status: editingGoalId ? status : "CREATED"
        }

        const token = localStorage.getItem('token');
        const config = { headers: { Authorization: token } };
        if (!token) {
            alert("You must be logged in to create a goal.");
            return;
        }

        const request = editingGoalId 
        ? axios.put(`http://localhost:8080/goal/update`, goalData, config) 
        : axios.post("http://localhost:8080/goal/create", goalData, config);

        request
        // axios.post("http://localhost:8080/goal/create", goalData, config)
        .then((response) => {
            if (response.status === 201 || response.status === 200) {
                alert(editingGoalId ? "Goal updated successfully!" : "Goal created successfully!");
                closeGoalsRegisterModal();
                fetchGoals(); // Atualiza a lista de goals
                resetForm(); // Limpa os campos do formulário
            } else {
                alert("Error creating goal");
            }
        }).catch((error) => {
            console.error("Error creating goal:", error);
            alert(error.response?.data?.message || "Error");
        });
    }

    function openGoalsRegisterModal(goalToEdit?: IGoal) {
        if (goalToEdit) {
            setEditingGoalId(goalToEdit.id ?? undefined);
            setTitle(goalToEdit.title);
            setDescription(goalToEdit.description);
            setStartDate(goalToEdit.startDate);
            setEndDate(goalToEdit.endDate);
        } else {
            setEditingGoalId(undefined); // Se for para criar, limpa os campos
            resetForm();
        }
        setIsGoalsRegisterModalOpen(true);
    }

    function closeGoalsRegisterModal() {
        setIsGoalsRegisterModalOpen(false);
    }

    function resetForm() {
        setTitle('')
        setDescription('')
        setStartDate('')
        setEndDate('')
        setStatus('CREATED');
    }

    function formatStatus(status: string): string {
        const statusMap: Record<string, string> = {
            CREATED: "Created",
            IN_PROGRESS: "In Progress",
            FINISHED: "Finished",
        };
        return statusMap[status] || status; // Retorna o status original se não for mapeado
    }

    function fetchGoals() {
        const token = localStorage.getItem('token');
        const config = { headers: { Authorization: token } };
        if (!token) {
            alert("You must be logged in to create a goal.");
            return;
        }

        axios.get('http://localhost:8080/goal/goals', config)
        .then((response) => { setUserGoals(response.data.content) })
        .catch((error) => {
            console.error("Error fetching goals:", error);
        });
    }

    function deleteGoal(goalId: number) {
        const token = localStorage.getItem('token');
        const config = { headers: { Authorization: token } };
        if (!token) {
            alert("You must be logged in to create a goal.");
            return;
        }

        // Confirmação antes de excluir
        if (!window.confirm("Are you sure you want to delete this goal?")) {
            return;
        }

        axios.delete(`http://localhost:8080/goal/delete/${goalId}`, config)
        .then((response) => {
            if (response.status === 204) {
                fetchGoals();
            } else {
                alert("Error deleting goal.");
            }
        })
        .catch((error) => {
            console.error("Error deleting goal:", error);
            alert(error.response?.data?.message || "Error");
        });
    }

    useEffect(() => {
        if (!isLoggedOn) {
            navigate('/login')
        } else {
            fetchGoals();
        }
    }, [navigate, isLoggedOn])

    console.log("Start Date:", startDate);
    console.log("End Date:", endDate);

    return (
        <div className="bg-zinc-300 px-32 min-h-screen">
            <header className="mb-14">
                <Navbar/>
            </header>
            <div className="flex justify-around">
                <div className="h-full w-[75%] ">
                    <div className="bg-zinc-400 min-h-[756px] rounded-2xl px-10 py-8">
                    {userGoals.map((userGoal) => (
                            <div key={userGoal.id} className="bg-[#B9FF66] max-w-60 px-6 py-5 mb-5 relative">
                                <div className="flex justify-between pb-2">
                                    <h1 className="font-bold text-lg max-w-24 flex-wrap">{userGoal.title}</h1>
                                    <p className="font-bold text-xs">{userGoal.endDate}</p>
                                </div>
                                <div className="text-left pb-2">
                                    <h2 className="text-sm">{userGoal.description}</h2>
                                </div>
                                <p className="text-xs font-bold text-center">{formatStatus(userGoal.status)}</p>
                                <div className="absolute bottom-2 right-2 flex space-x-2">
                                    <X className="cursor-pointer" size={16} onClick={() => userGoal.id !== undefined && deleteGoal(userGoal.id)} /> {/* Tamanho reduzido para 16 */}
                                    <Edit className="cursor-pointer" size={16} onClick={() => openGoalsRegisterModal(userGoal)} /> {/* Tamanho reduzido para 16 */}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <Button type="button" onClick={() => openGoalsRegisterModal()} variant='secondaryBold'>Create new goal</Button>
                </div>

                {isGoalsRegisterModalOpen && (
                    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
                        <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-2">
                            <div className="flex items-center justify-between">
                                <h2 className="text-white font-bold text-lg">Create a new goal</h2>
                                <button onClick={closeGoalsRegisterModal}><X className="size-5 text-white"/></button>
                            </div>
                            <p className="text-white text-sm">Fill the form below with your goal in mind so it can be saved and ...</p>
                            <form onSubmit={handleGoalRegistration} className="w-4/5 mx-auto">
                                <label htmlFor="title" className="text-white text-base font-semibold">Title</label>
                                <input value={title} onChange={(event) => setTitle(event.target.value)} type="text" name="title" className="w-full text-[#191A23] px-2 py-2 mb-2 focus:outline-none rounded-md"/>
                                <label htmlFor="description" className="text-white text-base font-semibold">Description</label>
                                <input value={description} onChange={(event) => setDescription(event.target.value)} type="text" name="description" className="w-full text-[#191A23] px-2 py-2 mb-2 focus:outline-none rounded-md"/>
                                <label htmlFor="startDate" className="text-white text-base font-semibold">Start Date</label>
                                <input value={startDate} onChange={(event) => setStartDate(event.target.value)} type="date" name="startDate" className="w-full text-[#191A23] px-2 py-2 mb-2 focus:outline-none rounded-md"/>
                                <label htmlFor="endDate" className="text-white text-base font-semibold">End Date</label>
                                <input value={endDate} onChange={(event) => setEndDate(event.target.value)} type="date" name="endDate" className="w-full text-[#191A23] px-2 py-2 mb-2 focus:outline-none rounded-md"/>
                                {/* Lembrar de colocar o status para ser enviado sempre nesse metodo de Post como CREATED */}
                                {editingGoalId && (<>
                                    <label htmlFor="status" className="text-white text-base font-semibold">Status</label>
                                    <select value={status} onChange={(event) => setStatus(event.target.value)} name="status" className="w-full text-[#191A23] px-2 py-2 mb-2 focus:outline-none rounded-md">
                                        <option value="CREATED">Created</option>
                                        <option value="IN_PROGRESS">In Progress</option>
                                        <option value="FINISHED">Finished</option>
                                    </select>
                                </>)}
                                <Button className="w-full min-w-ful mt-6" style={{ marginTop: "1.5rem", width: "100%" }} type="submit" variant='secondaryBold'>{editingGoalId ? 'Update Goal' : 'Create Goal'}</Button>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}