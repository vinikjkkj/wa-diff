__d(
  "WAWebFormatCiphertextMsgText",
  ["fbt", "WAWebMsgGetters"],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      var t = e.msg,
        n = o("WAWebMsgGetters").getSubtype(t);
      switch (n) {
        case "fanout":
          return s._(/*BTDS*/ "Waiting for this message. Check your phone.");
        case "bot_unavailable_fanout":
        case "hosted_unavailable_fanout":
          return s._(
            /*BTDS*/ "This message can't be displayed here. Please open WhatsApp on your phone to view the message.",
          );
        case "view_once_unavailable_fanout":
          return s._(/*BTDS*/ "Message");
        default:
          return s._(
            /*BTDS*/ "Waiting for this message. This may take a while.",
          );
      }
    }
    l.default = e;
  },
  226,
);
