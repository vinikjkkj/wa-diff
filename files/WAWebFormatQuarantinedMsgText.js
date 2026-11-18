__d(
  "WAWebFormatQuarantinedMsgText",
  ["fbt", "WAWebFrontendMsgGetters", "justknobx"],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      var t = e.msg,
        n = o("WAWebFrontendMsgGetters").getText(t);
      return n != null && n !== ""
        ? n
        : r("justknobx")._("8068")
          ? s._(/*BTDS*/ "Attachment blocked by strict account settings")
          : s._(/*BTDS*/ "Attachment blocked by Strict account settings");
    }
    l.default = e;
  },
  226,
);
