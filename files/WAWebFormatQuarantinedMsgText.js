__d(
  "WAWebFormatQuarantinedMsgText",
  ["WAWebFbtCommon", "WAWebFrontendMsgGetters"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.msg,
        n = o("WAWebFrontendMsgGetters").getText(t);
      return n != null && n !== ""
        ? n
        : r("WAWebFbtCommon")("Attachment blocked by Strict account settings");
    }
    l.default = e;
  },
  98,
);
