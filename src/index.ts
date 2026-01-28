import { Engine, Color, vec } from 'excalibur';

const engine = new Engine({
    backgroundColor: Color.fromHex('#5fcde4'),
    width: 600,
    height: 400,
    fixedUpdateFps: 60,
    antialiasing: false,
    physics: {
        gravity: vec(0, 800)
    }
});
