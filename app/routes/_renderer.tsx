import { reactRenderer } from "@hono/react-renderer";
import { Script } from "honox/server";

export default reactRenderer(({ children, title }) => {
	const appSrc = import.meta.env.PROD
		? "/static/client.js"
		: "/app/client.ts";

	const styleSrc = import.meta.env.PROD
		? "static/assets/style.css"
		: "/app/style.css";

	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				/>
				<title>{title}</title>
				<Script src={appSrc} async />
				<link rel="icon" href="/favicon.ico" />
				<link href={styleSrc} rel="stylesheet" />
			</head>
			<body>{children}</body>
		</html>
	);
});
