/*
import { Route } from 'vue-router'
import { Loading } from 'quasar';

export class VueEx {

    public async movePage (
        path: String,
        replace?: boolean,
        query?: Dictionary<string | Array<string>>
    ): Promise<Route | void> {
        if (this.$route.path === path) {
            return Promise.resolve();
        }
        if (Loading.isActive) {
            await DateUtils.sleep(800);
            await this.nextTick();
            return this.movePage(path, replace, query)
        } else {
            return this.$router.push({ path, replace, query})
        }
    }

    public backpage(): void {
        this.$router.back();
    }
}
