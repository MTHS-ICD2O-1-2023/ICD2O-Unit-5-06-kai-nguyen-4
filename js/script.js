// Copyright (c) 2024 Kai Nguyen All rights reserved
//
// Created by: Kai Nguyen
// Created on: May 2024
// This file contains the JS functions for index.html
"use strict"

function additionClicked() {
  const num1 = parseInt(document.getElementById("num1-entered").value)
  const num2 = parseInt(document.getElementById("num2-entered").value)
  let counter = 0
  let answer = 0

  while (counter < num2) {
    answer += Math.abs(num1)
    counter++
  }
  console.log(answer)
  document.getElementById("answer").innerHTML = "The answer is = " + answer
}

