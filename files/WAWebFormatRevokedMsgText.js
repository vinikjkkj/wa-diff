__d(
  "WAWebFormatRevokedMsgText",
  ["WAWebFormatRevokedMsg", "WAWebFrontendMsgGetters", "nullthrows"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.msg,
        n = o("WAWebFrontendMsgGetters").getAsRevoked(t);
      return o("WAWebFormatRevokedMsg")
        .formatRevokedMsg(r("nullthrows")(n))
        .toString();
    }
    l.default = e;
  },
  98,
);
