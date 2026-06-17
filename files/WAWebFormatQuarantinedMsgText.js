__d(
  "WAWebFormatQuarantinedMsgText",
  ["fbt", "WAWebFrontendMsgGetters"],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      var t = e.msg,
        n = o("WAWebFrontendMsgGetters").getText(t);
      return n != null && n !== ""
        ? n
        : s._(/*BTDS*/ "Attachment blocked by Strict account settings");
    }
    l.default = e;
  },
  226,
);
