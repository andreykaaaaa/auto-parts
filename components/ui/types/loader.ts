import type {Ref} from "vue";

export interface UseLoaderProps {
    defaultStatus?: boolean;
    minSwitchStatusDelay?: number;
}
export interface UseLoader {
    show(): void;
    hide(): void;
    status: Ref<boolean>;
}
