__d(
  "WAWebScheduledMsgExtractText",
  [],
  function (t, n, r, o, a, i) {
    function e(e) {
      var t;
      if (typeof e.conversation == "string") return e.conversation;
      var n = (t = e.extendedTextMessage) == null ? void 0 : t.text;
      return typeof n == "string" ? n : null;
    }
    i.extractScheduledMsgText = e;
  },
  66,
);
