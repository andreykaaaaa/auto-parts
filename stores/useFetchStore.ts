import {defineStore} from "pinia";
import type {ComputedRef} from "vue";


interface UseFetchStore {
    loader: ComputedRef<boolean>
    addFetch(): void;
    spliceFetch(): void;
}

export const useFetchStore = defineStore('fetch', () => {
    const loaderStatus = reactive<any[]>([]);

    function addFetch(): void {
        loaderStatus.push('');
    }
    function spliceFetch(): void {
        loaderStatus.splice(0, 1);
    }

    return {
        loader: computed(() => loaderStatus.length > 0),
        addFetch,
        spliceFetch
    } as UseFetchStore;
})
