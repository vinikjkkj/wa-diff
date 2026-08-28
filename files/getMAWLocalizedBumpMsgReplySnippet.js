__d(
  "getMAWLocalizedBumpMsgReplySnippet",
  ["fbt", "FBLogger"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e, t, n) {
      switch (e) {
        case "currentUserBumpedOwnMessage":
          return s._(/*BTDS*/ "You bumped your message");
        case "currentUserBumpedMessage":
          return n != null
            ? s._(/*BTDS*/ "You bumped {name}'s message", [s._param("name", n)])
            : s._(/*BTDS*/ "You bumped a message");
        case "participantBumpedCurrentUserMessage":
          return s._(/*BTDS*/ "{sender_name} bumped your message", [
            s._param("sender_name", t),
          ]);
        case "participantBumpedOwnMessage":
          return s._(/*BTDS*/ "{name} bumped their message", [
            s._param("name", t),
          ]);
        case "participantBumpedParticipantMessage":
          return n != null
            ? s._(
                /*BTDS*/ "{sender_name} bumped {reply_source_sender_name}'s message",
                [
                  s._param("sender_name", t),
                  s._param("reply_source_sender_name", n),
                ],
              )
            : s._(/*BTDS*/ "{user_name} bumped a message", [
                s._param("user_name", t),
              ]);
        default:
          return (
            r("FBLogger")("messenger_web").mustfix(
              "unexpected bump type %s",
              e,
            ),
            ""
          );
      }
    }
    l.default = e;
  },
  226,
);
