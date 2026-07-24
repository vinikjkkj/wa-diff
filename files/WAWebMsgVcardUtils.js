__d(
  "WAWebMsgVcardUtils",
  [
    "WAWebCompactMapString",
    "WAWebLidMigrationUtils",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebVcardParsingUtils",
    "WAWebWorkerSafeBackendApi",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return e.type !== o("WAWebMsgType").MSG_TYPE.VCARD
        ? null
        : o("WAWebVcardParsingUtils").vcardAllWids(
            o("WAWebMsgGetters").getVcard(e),
          );
    }
    function s(e) {
      if (e.type !== o("WAWebMsgType").MSG_TYPE.MULTI_VCARD) return null;
      var t = o("WAWebMsgGetters").getVcardList(e),
        n = r("WAWebCompactMapString")(t, function (e) {
          return e.vcard;
        })
          .map(function (e) {
            return o("WAWebVcardParsingUtils").parseMultiVcard(e);
          })
          .flat(),
        a = n
          .map(function (e) {
            return o("WAWebVcardParsingUtils").vcardAllWids(e);
          })
          .flat();
      return Array.from(new Set(a));
    }
    function u(t) {
      var n = t.reduce(function (t, n) {
        if (
          n == null ||
          (n.type !== o("WAWebMsgType").MSG_TYPE.VCARD &&
            n.type !== o("WAWebMsgType").MSG_TYPE.MULTI_VCARD)
        )
          return t;
        var r = n.type === o("WAWebMsgType").MSG_TYPE.VCARD ? e(n) : s(n);
        if (r == null) return t;
        var a = r.filter(function (e) {
          return o("WAWebLidMigrationUtils").toUserLid(e) == null;
        });
        return a.length === 0
          ? t
          : t == null
            ? new Set(a)
            : (a.forEach(function (e) {
                return t.add(e);
              }),
              t);
      }, null);
      n != null &&
        o("WAWebWorkerSafeBackendApi").workerSafeFireAndForget(
          "syncContactListJob",
          { contactIds: Array.from(n), shouldSyncDevice: !1, mode: "query" },
        );
    }
    ((l.getVcardWids = e),
      (l.getMultiVcardWids = s),
      (l.processVCardMessagesForLidMappings = u));
  },
  98,
);
