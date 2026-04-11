__d(
  "WAWebFormatRevokedMsgText",
  ["WANullthrows", "WAWebFormatRevokedMsg", "WAWebFrontendMsgGetters"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.msg,
        n = o("WAWebFrontendMsgGetters").getAsRevoked(t);
      return o("WAWebFormatRevokedMsg")
        .formatRevokedMsg(r("WANullthrows")(n))
        .toString();
    }
    l.default = e;
  },
  98,
);
