__d(
  "WAWebFormatCiphertextMsgText",
  ["fbt", "WAWebAcp2PlaceholderStrings", "WAWebMsgGetters"],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      var t = e.msg,
        n = o("WAWebMsgGetters").getSubtype(t);
      switch (n) {
        case "fanout":
          return s._(/*BTDS*/ "");
        case "bot_unavailable_fanout":
        case "hosted_unavailable_fanout":
          return s._(/*BTDS*/ "");
        case "view_once_unavailable_fanout":
          return s._(/*BTDS*/ "");
        case "acp_unavailable_fanout":
          return o("WAWebAcp2PlaceholderStrings").getAcp2PlaceholderText();
        default:
          return s._(/*BTDS*/ "");
      }
    }
    l.default = e;
  },
  226,
);
