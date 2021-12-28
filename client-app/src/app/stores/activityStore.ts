import { makeObservable, observable } from "mobx";

export default class ActivityStore {
    title = 'Hello from Mobx!';

    constructor() {
        makeObservable(this, {
            title: observable
        })
    }
}