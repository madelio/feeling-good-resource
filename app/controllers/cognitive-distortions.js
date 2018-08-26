import Controller from '@ember/controller';
import { set, get, computed } from '@ember/object';

export default Controller.extend({
    selectedDistortion: computed('distortion', function() {
        return get(this, 'distortion');
    }),
    actions: {
        selectDistortion(distortion) {
            set(this, 'distortion', distortion);
        }
    }
});
