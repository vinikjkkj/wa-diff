__d(
  "WAWebWamMessageUtils",
  ["WALogger", "WAWebMsgType", "WAWebVcardParsingUtils"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t, n) {
      var r = [],
        a = t.type === o("WAWebMsgType").MSG_TYPE.VCARD,
        i = t.type === o("WAWebMsgType").MSG_TYPE.MULTI_VCARD;
      if (a) r.push(t.body);
      else if (i) {
        var l;
        r.push.apply(
          r,
          ((l = t.vcardList) != null ? l : []).map(function (e) {
            return e.vcard;
          }),
        );
      }
      var s = 0,
        u = 0,
        c = 0,
        d = 0;
      return (
        r.filter(Boolean).forEach(function (e) {
          var t = o("WAWebVcardParsingUtils").parseVcard(e),
            n = o("WAWebVcardParsingUtils").vcardLidWid(t) != null,
            r = o("WAWebVcardParsingUtils").vcardPhoneNumberWids(t).length > 0;
          n && r ? c++ : n ? u++ : r ? s++ : d++;
        }),
        d > 0 &&
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[message-",
                  "] ",
                  " vcards with no PN or LID found",
                ])),
              n,
              d,
            )
            .sendLogs("vcard-no-pn-or-lid", { sampling: 0.1 }),
        a || i
          ? { pnOnlyVcardCount: s, lidOnlyVcardCount: u, pnAndLidVcardCount: c }
          : null
      );
    }
    l.getVcardMsgWamData = s;
  },
  98,
);
