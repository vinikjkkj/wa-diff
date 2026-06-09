__d(
  "WAWebMsgVcardUtils",
  [
    "WAWebCompactMapString",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebVcardParsingUtils",
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
    ((l.getVcardWids = e), (l.getMultiVcardWids = s));
  },
  98,
);
