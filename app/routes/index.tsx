import Counter from "@/islands/counter";
import { createRoute } from "honox/factory";

export default createRoute((c) => {
	const name = c.req.query("name") ?? "Hono";
	return c.render(
		<div className="container font-sans">
			<h1>Hello, {name}!</h1>
			<Counter />
		</div>,
		{ title: name },
	);
});
