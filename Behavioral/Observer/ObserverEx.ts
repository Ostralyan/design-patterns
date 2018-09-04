namespace ObserverEx {
    interface Observable {
        addObserver(o: Observer): void;
        removeObserver(o: Observer): void;
        notify(): void;
    }

    interface Observer {
        // why is this bad?
        update(
            holds: number,
            forecast: number,
            committed: number,
            budget: number,
            pendingChangeOrders: number,
            approvedChangeOrders: number,
            paidToDate: number,
            approvedInvoices: number
        );
    }

    class ProjectData implements Observable {
        private holds: number;
        private forecast: number;
        private committed: number;
        private budget: number;
        private pendingChangeOrders: number;
        private approvedChangeOrders: number;
        private paidToDate: number;
        private approvedInvoices: number;

        private observers: Observer[] = [];

        public addObserver(o: Observer): void {
            this.observers.push(o);
        }

        public removeObserver(o: Observer): void {
            let i = this.observers.indexOf(o);
            if (i >= 0) {
                this.observers.splice(i, 1);
            }
        }

        public notify(): void {
            for (let i = 0; i < this.observers.length; i++) {
                let observer = this.observers[i];
                observer.update(
                    this.holds,
                    this.forecast,
                    this.committed,
                    this.budget,
                    this.pendingChangeOrders,
                    this.approvedChangeOrders,
                    this.paidToDate,
                    this.approvedInvoices
                );
            }
        }

        public setBudget(budget: number): void{
            this.budget = budget;
            this.notify();
        }

        public setCommitted(committed: number): void{
            this.committed = committed;
            this.notify();
        }

        public setForecast(forecast: number): void{
            this.forecast = forecast;
            this.notify();
        }
    }

    class ProjectOverviewCard implements Observer {
        private holds;
        private forecast;
        private committed;
        private budget;
        private pendingChangeOrders;
        private approvedChangeOrders;
        private paidToDate;
        private approvedInvoices;

        public update(
            holds: number,
            forecast: number,
            committed: number,
            budget: number,
            pendingChangeOrders: number,
            approvedChangeOrders: number,
            paidToDate: number,
            approvedInvoices: number
        ): void {
            this.holds = holds;
            this.forecast = forecast;
            this.committed = committed;
            this.budget = budget;
            this.pendingChangeOrders = pendingChangeOrders;
            this.approvedChangeOrders = approvedChangeOrders;
            this.paidToDate = paidToDate;
            this.approvedInvoices = approvedInvoices;
        }

        public display(): void {
            console.log("In the overview card the budget value is:", this.budget, "committed value is:", this.committed);
        }
    }

    class CostTrackerTotalRow implements Observer {
        private holds;
        private forecast;
        private committed;
        private budget;
        private pendingChangeOrders;
        private approvedChangeOrders;
        private paidToDate;
        private approvedInvoices;

        public update(
            holds: number,
            forecast: number,
            committed: number,
            budget: number,
            pendingChangeOrders: number,
            approvedChangeOrders: number,
            paidToDate: number,
            approvedInvoices: number
        ): void {
            this.holds = holds;
            this.forecast = forecast;
            this.committed = committed;
            this.budget = budget;
            this.pendingChangeOrders = pendingChangeOrders;
            this.approvedChangeOrders = approvedChangeOrders;
            this.paidToDate = paidToDate;
            this.approvedInvoices = approvedInvoices;
        }

        public display(): void {
            console.log("In the total row component the budget value is:", this.budget, "committed value is:", this.committed);
            
        }
    }
    
    let projectData = new ProjectData();
    let projectOverviewCard = new ProjectOverviewCard();
    let costTrackerTotalRow = new CostTrackerTotalRow();

    projectData.addObserver(projectOverviewCard);
    projectData.addObserver(costTrackerTotalRow);

    projectData.setBudget(500);

    projectOverviewCard.display();
    costTrackerTotalRow.display();

    projectData.setCommitted(700);

    console.log("===========")
    projectOverviewCard.display();
    costTrackerTotalRow.display();
}