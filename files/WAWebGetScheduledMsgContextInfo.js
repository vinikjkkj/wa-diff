__d(
  "WAWebGetScheduledMsgContextInfo",
  [],
  function (t, n, r, o, a, i) {
    function e(e) {
      var t, n, r;
      return (t =
        (n = e.extendedTextMessage) == null ? void 0 : n.contextInfo) != null
        ? t
        : (r = e.imageMessage) == null
          ? void 0
          : r.contextInfo;
    }
    i.getScheduledMsgContextInfo = e;
  },
  66,
);
