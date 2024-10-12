if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .then(registration => {
                console.log('Service Worker registered with scope:', registration.scope);
            })
            .catch(error => {
                console.log('Service Worker registration failed:', error);
            });
    });
}

function napis(){
    var hodnota = document.getElementById('vyber').value;

    if (hodnota === 'odpor'){
        document.getElementById('label1').innerText = 'Napětí:';
        document.getElementById('label2').innerText = 'Proud:';
    }
    else{
        if (hodnota === 'napeti'){
            document.getElementById('label1').innerText = 'Odpor:';
            document.getElementById('label2').innerText = 'Proud:';
        }
        else{
            if (hodnota === 'proud'){
                document.getElementById('label1').innerText = 'Napětí:';
                document.getElementById('label2').innerText = 'Odpor:';
            }
        }
    }
}

function vypocet(){
    const hodnotaVyberu = document.getElementById('vyber').value;
    let cislo1 = parseFloat(document.getElementById('cislo1').value, 10);
    let cislo2 = parseFloat(document.getElementById('cislo2').value, 10);
    let vysledek;

    if (hodnotaVyberu === 'operace'){
        vysledek = 'Nemáte vybranou žádnou operaci!';
        document.getElementById('label1').innerText = '';
        document.getElementById('label2').innerText = '';
    }
    else{
        if (hodnotaVyberu === 'odpor'){
            if (cislo2 === 0){
                vysledek = 'Nulou se nedá dělit!';
            }
            else{
                vysledek = cislo1 / cislo2;
            }
        }
        else{
            if(hodnotaVyberu === 'proud'){
                if (cislo2 === 0){
                   vysledek = 'Nulou se nedá dělit!';
                }
                else{
                    vysledek = cislo1 / cislo2;
                }
            }
            else{
                if (hodnotaVyberu === 'napeti'){
                    vysledek = cislo1 * cislo2;
                }
            }
        }
    }

    document.getElementById('vysledekCislo').innerText = vysledek;
}