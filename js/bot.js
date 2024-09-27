document.addEventListener("DOMContentLoaded", function() {

    //Set chatbot interface
    var count = 0,
        interval;
    setTimeout(function() { $(".chat_animate figure img").removeClass("up_down").addClass("rotate"); }, 5000);
    setTimeout(function() { $(".chat_animate figure img").css("opacity", "0.1"); }, 7500);
    setTimeout(function() { $(".chat_animate figure").remove(); }, 8000);
    setTimeout(function() {
        $(".chat_animate").html('<div class="chat_bot"><h2 class="title"><aside><iconify-icon icon="streamline:ai-edit-spark"></iconify-icon> AI Assistance</aside><iconify-icon icon="ci:arrow-reload-02"></iconify-icon></h2><ul class="mssg_content"></ul><fieldset><input type="text" class="cmt" oninput = "typing_animate()" placeholder="Send a message" name="comment" /><iconify-icon icon="radix-icons:paper-plane" onclick="trigger_mssg()"></iconify-icon></fieldset></div>');
        $(".chat_bot").fadeTo(1000, 1);
        interval = setInterval(function() { count++;
            message_content(); }, 4000);
    }, 8100);

    //Set message content
    function message_content() {
        var mssg, classname;
        switch (count) {
            case 1:
                $(".mssg_content").append('<li class="typing"><span></span><span></span><span></span></li>');
                setTimeout(function() { mssg = '<li class="mssg bot_mssg bubble_anim"><iconify-icon icon="logos:geekbot"></iconify-icon><h5>Hello! How can I help you?</h5> </li>'; }, 1000);
                break;
            case 2:
                $(".mssg_content").append('<li class="typing typing_right"><span></span><span></span><span></span></li>');
                setTimeout(function() { mssg = '<li class="mssg usr_mssg bubble_anim"><iconify-icon icon="mingcute:user-4-fill"></iconify-icon><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></li>'; }, 1000);
                break;
            case 3:
                $(".mssg_content").next("fieldset").css("pointer-events", "auto");
                $(".mssg_content").next("fieldset").children("iconify-icon").css("pointer-events", "auto");
                count = 0;
                clearInterval(interval);
                break;
        }
        setTimeout(function() { append_mssg(mssg); }, 1000);
    }
});

//Typing animation 
function typing_animate() {
    if (!$(".typing").length > 0) {
        $(".mssg_content").append('<li class="typing typing_right"><span></span><span></span><span></span></li>');
        $('.mssg_content').scrollTop($('.mssg_content')[0].scrollHeight);
    } else {
        if ($(".cmt").val().length === 0) { $(".typing").remove(); }
    }
}

//Trigger user input message to append
function trigger_mssg() {
    $(".mssg_content").next("fieldset").css("pointer-events", "none");
    $(".mssg_content").next("fieldset").children("iconify-icon").css("pointer-events", "none");
    if ($(".cmt").val() != "") {
        append_mssg('<li class="mssg usr_mssg bubble_anim"><iconify-icon icon="mingcute:user-4-fill"></iconify-icon><p>' + $(".cmt").val() + '</p></li>');
        setTimeout(function() {
            $(".mssg_content").append('<li class="bot_alert"><h5>This is just a demo version</h5></li>');
            $('.mssg_content').scrollTop($('.mssg_content')[0].scrollHeight);
            $(".mssg_content").next("fieldset").css("pointer-events", "auto");
            $(".mssg_content").next("fieldset").children("iconify-icon").css("pointer-events", "auto");
        }, 1000);
    }
}

//Append message
function append_mssg(mssg) {
    $(".typing").remove();
    $(".mssg_content").append(mssg);
    $('.mssg_content').scrollTop($('.mssg_content')[0].scrollHeight);
}