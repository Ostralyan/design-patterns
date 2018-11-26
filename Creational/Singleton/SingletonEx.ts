class ContractService {
    private static contractService;

    private constructor() {

    }

    public static getInstance(): ContractService {
        if (this.contractService === undefined) {
            this.contractService = new ContractService();
        }
    
        return this.contractService;
    }
}

ContractService.getInstance();