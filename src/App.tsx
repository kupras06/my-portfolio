import { Route, Router, Switch } from "wouter-preact";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const App = () => (
	<TooltipProvider>
		<Toaster />
		<Router>
			<Route path="/my-portfolio" nest>
				<Switch>
					<Route path="/" component={Index} />
					<Route component={NotFound} />
				</Switch>
			</Route>
		</Router>
	</TooltipProvider>
);

export default App;
