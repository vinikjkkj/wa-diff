__d(
  "WAWebGetScheduledMsgContextInfo",
  [],
  function (t, n, r, o, a, i) {
    function e(e) {
      var t, n, r, o, a;
      return (t =
        (n = (r = e.extendedTextMessage) == null ? void 0 : r.contextInfo) !=
        null
          ? n
          : (o = e.imageMessage) == null
            ? void 0
            : o.contextInfo) != null
        ? t
        : (a = e.videoMessage) == null
          ? void 0
          : a.contextInfo;
    }
    i.getScheduledMsgContextInfo = e;
  },
  66,
);
