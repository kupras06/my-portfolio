import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { Route } from "wouter-preact";

const App = () => (
	<TooltipProvider>
		<Toaster />
		<Sonner />
		<Route path="/my-portfolio" nest>
			<Route path="/" component={Index} />
			<Route path="*" component={NotFound} />
		</Route>
	</TooltipProvider>
);

export default App;
