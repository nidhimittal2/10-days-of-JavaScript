function getLetter(s) {
    var i=0;
    let letter;
    switch(s.charAt(i)){
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
        return 'A';
        break;
        case 'b':
        case 'c':
        case 'd':
        case 'f':
        case 'g':
    return 'B';
        break;
            case 'h':
        case 'j':
        case 'k':
        case 'l':
        case 'm':
    return 'C';
        break;
              case 'n':
        case 'p':
        case 'q':
        case 's': 
        case 'r':
        case 't':
        case 'v':
        case 'w': 
        case 'x':
            case 'y': 
        case 'z':
    return 'D';
        break;
                 }
    return letter;
}
