// Singleton Pattern: ensures a class has only one
// instance, and provides a global point of access to it.

namespace Singleton {
    class Singleton {

        private static uniqueInstance: Singleton;
        private constructor() {}

        public static getInstance(): Singleton {
            if (this.uniqueInstance === undefined) {
                return new Singleton();
            } else {
                return this.uniqueInstance;
            }
        }
    }

    Singleton.getInstance();
}