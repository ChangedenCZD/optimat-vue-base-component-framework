import { BaseModule } from './lib/BaseModule';
import icons from './icons.json';

class Component extends BaseModule {
    constructor () {
        super();
        this.setProps(['options']);
        this.setComponent({});
        this.setMethod({
            setOptions () {
                let options = this.options || {};
            },
        });
        this.setCompute({});
        this.setWatch({
            options () {
                this.setOptions();
            }
        });
    }

    getData () {
        return {
            icons
        };
    }

    onCreate () {
        this.app.setOptions();
    }

    onMount () {
    }
}

module.exports = Component;
