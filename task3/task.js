
if (recipe === 'SPANISH') {
    fudge = SPANISH_FUDGE;
    amt = base * SPANISH_FUDGE;
    sugar = 2 * bottom(amt) + top(amt) * 1.17;
 }
else if (recipe === 'FRENCH' || recipe === 'ENGLISH') {
    fudge = recipe === 'FRENCH' ? FRENCH_FUDGE : ENGLISH_FUDGE;
    amt = base * fudge;
    sugar = 2 * bottom(amt) + top(amt) * 1.17;
    chocolate = recipe === 'FRENCH' ? 7 : null ;
 } 
else {
    fudge = 1;
    amt = base;
    sugar = 2 * bottom(amt) + top(amt) * 1.17;
 }
