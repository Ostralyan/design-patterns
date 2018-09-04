namespace FactoryMethodEx {
    abstract class Contract {
        protected abstract createContractItem(type: string): ContractItem[];
    }

    class InvoiceFactory extends Contract {
        createContractItem(type: string): ContractItem {
            if (type === "invoice") {
                return new Invoice();
            }
            if (type === "ptd") {
                return new PTDInvoice();
            }
        }
    }

    abstract class ContractItem {

    }

    class Invoice extends ContractItem {

    }

    class PTDInvoice extends ContractItem {

    }
}
