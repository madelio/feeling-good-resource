import Controller from '@ember/controller';
import { get, set } from '@ember/object';

export default Controller.extend({
    className: ['thoughtRecord'],
    emotionCount: 0,

    actions: {
        addEmotion() {
            var emotionCt = get(this, 'emotionCount');
            console.log(emotionCt);
            set(this, 'emotionCount', emotionCt + 1);
        }
    }
});