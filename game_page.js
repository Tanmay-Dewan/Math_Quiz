function send()
{
    number1 = document.getElementById("number1").value; 
    number2 = document.getElementById("number2").value; 
    actuale_anwer = parseInt(number1) * parseInt(number2);
    question_number = "<h4>" + number1 + "X" + number2 + "</h4>";
    input_box = "<br>Answer: <input type='text' id='input_check_box'>";
    check_button = "<br><br> <button class='btn btn-info' onclick='check()'>Check</button>";
    row = input_box + question_number + check_button;
    document.getElementById("output").value = row;
    document.getElementById("number_1").value = "";
    document.getElementById("number_2").value = "";
}

Question_turn = "player1"
Answer_turn = "player2"

function check()
{
    get_answer = document.getElementById("input_check_box").value;

    if(get_answer == actuale_anwer)
    {

        if(Answer_turn == "player1")
        {
            update_player1_score = player1_score +1;
            document.getElementById("player1_score").innerHTML = update_player1_score;
        }

       else
       {
        update_player2_score = player2_score +1;
        document.getElementById("player2_score").innerHTML = update2_player_score;
       }
    }

    if(Question_turn == "player1")
    {
       Question_turn = "player_2"
       document.getElementById("player_question").innerHTML = "Question_turn -" + player2_name;
    }    

    else
    {
        Question_turn = "player_1"
       document.getElementById("player_question").innerHTML = "Question_turn -" + player1_name;
    }    

}