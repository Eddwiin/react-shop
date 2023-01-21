export default function SignIn() {

    function handleSubmit() {

    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="group">
                <label>Email</label>
                <input type="email" />
            </div>

            <div>
                <label>Password</label>
                <input type="password" />
            </div>
        </form>
    )
}