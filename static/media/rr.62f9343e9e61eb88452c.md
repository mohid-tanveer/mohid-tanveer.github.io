# example interaction

```bash
$ ./rr_console_client lily.rhodes.edu 4444
trying to read token from /home/mohidtanveer/.rr_token...
Got cached token 1102520059
Terminal UI for Rhodes Ramble
commands:
                l <name> <pin> register user with given name and pin (this is your password/id)
                g              get all messages
                u <id>         upvote message/comment with given id
                d <id>         downvote message/comment with given id
                p <text>       post message with given text
                c <id> <text>  comment on message with given id
                m <id>         get message comments for message with given id
                i              get your user info
                q              quit
                ?              print this message
> i
icon/karma: ☕/0
> l mohid 1234
got token 1967513926
token cached to /home/mohidtanveer/.rr_token...
> i
icon/karma: ☕/0
> g
 1681692777 > (1) 🍛 hey guys!
 256487231 > (-12) 🐪 whos throwing this weekend???
 424238335 > (48) 📙 rhodes wont ever learn from all these parking issues
 837126389 > (-31) 🚆 weed??
 596516649 > (23) 📹 it's such a beautiful day!
> u 596516649
> g
 1681692777 > (1) 🍛 hey guys!
 256487231 > (-12) 🐪 whos throwing this weekend???
 424238335 > (48) 📙 rhodes wont ever learn from all these parking issues
 837126389 > (-31) 🚆 weed??
 596516649 > (24) 📹 it's such a beautiful day!
> c 596516649 right!?
> m 596516649
 1540383426 > (0) ☕ right!?
> g
 1681692777 > (1) 🍛 hey guys!
 256487231 > (-12) 🐪 whos throwing this weekend???
 424238335 > (48) 📙 rhodes wont ever learn from all these parking issues
 837126389 > (-31) 🚆 weed??
 596516649 > (24) 📹 it's such a beautiful day!
 1540383426 > (0) ☕ right!?
> q
```
