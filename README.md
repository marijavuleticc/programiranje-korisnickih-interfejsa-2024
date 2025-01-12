# Programiranje Korisnickih Interfejsa

Ovaj repozitorijum poseduje izvorni kod aplikacije 

#Tehnologije

Aplikacija je razvijena upotrebom frontend okruzenja Angular 18. Pored toga koriscene su sledece biblioteke:


-[Angular Material](https://material.angular.io)

-[Sweet Alerts 2](https://sweetalert2.github.io)


## Struktura aplikacije

Izvorni kod aplikacije koristi standardnu strukturu Angular projekta bez 'app.modules.ts' datoteke koja nije potrebna upravo od verzije 18. Svi potrebni moduli se uvoze direktno u komponentama koje ih upotrebljavaju.

Prikaz svih direktorijuma:

-'src/app' - Glavni direktorijum koji sadrzi sve komponente
-'src/models' - Direktorijum u kome skladistimo definicije tipova/interfejsa potrebnih za brzi razvoj aplikacije
-'src/services' - Direktorijum koji sadrzi definicije servisa neophodnih za rad aplikacije

## Dodatne informacije

Aplikacija koristi Angular Router koji zahteva da prilikom pustanja aplikacije u produkciju svaka putanja redirektovana na index.html datoteku jer su rute definisane programski u javascript-u a ne fizicki postavljanjem fajlova.