let golpes = []

for (let index = 0; index < 10; index++) {

    golpes.push(Math.floor(Math.random()*200))
}
console.log("serie de golpes : " + golpes);
console.log("el golpe mas alto fue : " + Math.max(...golpes))
