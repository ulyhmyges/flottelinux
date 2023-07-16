#!/bin/bash
un=$1
deux=$2
nb=$#
code_status=$?

function greet() {
	if [ $nb -gt 2 ]
	then
		echo "I don't understand"
		echo "code status de la dernière commande $code_status"
		echo "code status de la fonction greet $?"
		exit 1

	else
		if [ $nb -eq 2 ]
		then
			echo "Bonjour $un $deux"
			exit 0
		fi
		if [ $nb -eq 1 ]
		then
			echo "Hello $un"
		else
			echo "Hi noname"
			echo "$#"
			echo "$nb"
			echo "code status $code_status"
			echo "code status de la fonction greet $?"
			echo "$@"
		fi
	fi
}

greet
