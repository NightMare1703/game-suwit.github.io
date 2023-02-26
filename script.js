// pilihan player

function com() {
    const computer = Math.random();
    if (computer < 0.35) return 'gunting';
    if (computer > 0.36 && computer < 0.65) return 'batu';
    return 'kertas';
};

function random(){
    const gambar = ['batu', 'gunting', 'kertas'];
    for(let i = 0; i <=gambar.length; i++)
    console.log(gambar[0]);
};



function getHasil(computer, player) {
    if (player == computer) return 'SERI!';
    if (player == 'gunting') return (computer == 'kertas') ? 'MENANG!' : 'KALAH!';
    if (player == 'batu') return (computer == 'kertas') ? 'KALAH!' : 'MENANG!';
    if (player == 'kertas') return (computer == 'gunting') ? 'KALAH!' : 'MENANG!';
};

const pPlayer = document.querySelectorAll('.pilihanPlayer img');
pPlayer.forEach(function (choose){
    choose.addEventListener('click', function(){
            const computerMemilih = document.querySelector('.computerMemilih');
            const pComputer = com();
            computerMemilih.setAttribute('src', pComputer +'.png');
            const gPlayer = document.querySelector('.gambarDipilih');
            const p1 = choose.className;
            gPlayer.setAttribute('src', p1+'.png');
            const hasil = document.querySelector('.keterangan');
            const info = getHasil(pComputer, p1);
            hasil.innerHTML = info;
    });
});
