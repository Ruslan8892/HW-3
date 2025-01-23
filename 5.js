let geometry = prompt('Введіть назву фігури: (коло, квадрат, трикутник)')
switch (geometry) {
    case 'коло':
        console.log('коло має 0 сторін')
        break;
        case 'квадрат':
            console.log('квадрат має 4 сторони')
            break
            case 'трикутник':
                console.log('Трикутник має 3 сторони');
                break;
}