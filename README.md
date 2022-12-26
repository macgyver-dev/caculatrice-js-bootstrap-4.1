# caculatrice-js-bootstrap-4.1
Portfolio de julien dubromez pour démontrer ma maitrise de JS.

# Algorithme Calcultrices.


## Lire Symbol matématique.


Table de vériter 
        +       -       /       *
Cas 1   True    False   False   False
Cas 2   False   true    faux    faux
Cas 3   faux    faux    true    faux
Cas 4   false   false   false   true

`Début


Fonction ADD (operante)
    Action "Activer touche /"
    Action "Activer touche *"
    Action "Activer touche -"
    Action "Desactiver touche -"
    Ecrire +
FIN


Fonction SOUSTRACT (operante)
    Action "Activer touche /"
    Action "Activer touche *"
    Action "Activer touche +"
    Action "Desactiver touche -"
    Ecrire -
FIN


Fonction Multiply(operante)
    Action "Activer touche /"
    Action "Activer touche -"
    Action "Activer touche +"
    Action "Desactiver touche *"
    Ecrire *
FIN


Fonction Division(operante)
    Action "Activer touche *"
    Action "Activer touche -"
    Action "Activer touche +"
    Ecrire /
FIN


Fonction Dot (click)
    Si  != "/" et Click != "*" et et Click != "-" et Click != "-"
        Ecrire .
    Sinon
        Ecrire "0."
    FinSon
Fin


Fonction Opérante (click, mémoire, ecran)
    Si click = CE Alors
        Action ==  "CE" Efface Ecran 
    Sinon
        Si click == "C" Alors
            Action Efface efface l'entrée méroire et la mémoire
    Sinon
        Si click == "/" Alors
            Multiply(click)    
    Sinon 
        Si click == '*' Alors
            Multiply(click) 
    Sinon
        Si click == '-' Alors
         SOUSTRACT (click)   
    Sinon
         Si click == '+' Alors
            ADD (click)
    Sinon 
        Si click == "." Alors
             Dot (click)
    Sinon 
        Si click == "=" Alors
            Action Calcul memoire
            Action "Activer touche +"
            Action "Activer touche /"
            Action "Activer touche *"
            Action "Activer touche -"
    FinSinon
FIN Opérante


    ecran = 0;
    memoire = 0;
    

    Si Click != "/" et Click != "*" et et Click != "-" et Click != "=" 
    Alors    
        Ecrire Ecran
        memoire = memoire + ecran;
    Sinon
        Opérante (click, mémoire, ecran)
    FinSin  


Fin'
