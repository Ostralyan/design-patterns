namespace StrategyEx {
    interface KebabAction {
        label: string;
        action: () => void;
    }

    interface IKebabMenuBehavior {
        actions(): KebabAction[];
    }

    class IScheduleOfValueActionsWithContract implements IKebabMenuBehavior {
        public actions(): KebabAction[]{
            return [
                {
                    label: "Rename",
                    action: () => {
                        console.log("Renaming...");
                    }
                },
                {
                    label: "+ Insert SOV above",
                    action: () => {
                        console.log("Inserting SOV above...");
                    }
                },
                {
                    label: "+ Insert SOV below",
                    action: () => {
                        console.log("Inserting SOV below...");
                    }
                },
                {
                    label: "Delete",
                    action: () => {
                        console.log("Deleting...");
                    }
                },
            ];
        }
    }

    class IScheduleOfValueActionsWithoutContract implements IKebabMenuBehavior {
        public actions(): KebabAction[]{
            return [];
        }
    }

    class ICostItemActionsNotSharedContract implements IKebabMenuBehavior {
        public actions(): KebabAction[]{
            return [
                {
                    label: "Rename",
                    action: () => {
                        console.log("Renaming...");
                    }
                },
                {
                    label: "Delete",
                    action: () => {
                        console.log("Deleting...");
                    }
                },
            ];
        }
    }

    class ICostItemActionsSharedContract implements IKebabMenuBehavior {
        constructor(private row: Row) {

        }

        public actions(): KebabAction[]{
            return [
                {
                    label: "Rename",
                    action: () => {
                        console.log("Renaming... ", this.row.label);
                    }
                }
            ];
        }
    }

    class ICostItemActionsNoContract implements IKebabMenuBehavior {
        public actions(): KebabAction[]{
            return [
                {
                    label: "Rename",
                    action: () => {
                        console.log("Renaming...");
                    }
                },
                {
                    label: "+ Add SOV",
                    action: () => {
                        console.log("Inserting SOV...");
                    }
                },
                {
                    label: "Delete",
                    action: () => {
                        console.log("Deleting...");
                    }
                },
            ];
        }
    }

    class ISectionActions implements IKebabMenuBehavior {
        public actions(): KebabAction[]{
            return [
                {
                    label: "Rename",
                    action: () => {
                        console.log("Renaming...");
                    }
                },
                {
                    label: "+ Add Cost Item to Section",
                    action: () => {
                        console.log("Adding Cost Item to Section...");
                    }
                },
                {
                    label: "Delete",
                    action: () => {
                        console.log("Deleting...");
                    }
                },
            ];
        }
    }

    abstract class Row {
        private kebabMenuBehavior: IKebabMenuBehavior;

        constructor(public label: string) {

        }
        
        public setKebabMenuBehavior(kebabMenuBehavior: IKebabMenuBehavior): void {
            this.kebabMenuBehavior = kebabMenuBehavior;
        }

        public displayRow(): void {
            this.kebabMenuBehavior.actions().forEach(actionElement => {
                console.log("action to perform: " + actionElement.label)
                actionElement.action();
            });
        }
    }

    class CostDetailRow extends Row {
        constructor(label: string) {
            super(label);
            this.setKebabMenuBehavior(new IScheduleOfValueActionsWithContract());
        }
    }

    class BudgetRow extends Row {
        constructor(label: string) {
            super(label);
            this.setKebabMenuBehavior(new IScheduleOfValueActionsWithContract());
        }
    }

    class CostItemRow extends Row {
        isContractShared: boolean = false;

        constructor(label: string) {
            super(label);
            this.setKebabMenuBehavior(new ICostItemActionsNotSharedContract());
        }

        public shareContract(): void {
            this.isContractShared = true;
            this.setKebabMenuBehavior(new ICostItemActionsSharedContract(this))
        }
    }

    class SectionRow extends Row {
        constructor(label: string) {
            super(label);
            this.setKebabMenuBehavior(new ISectionActions());
        }
    }

    let cdRow = new CostItemRow("Demolition");
    cdRow.displayRow();
    cdRow.shareContract();
    console.log("===================")
    cdRow.displayRow();
}