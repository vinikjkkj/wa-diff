__d(
  "WAWebBizAILeadGenUtils",
  ["$InternalEnum", "WAWebUserPrefsStore", "WAWebWidFactory", "fbs"],
  function (t, n, r, o, a, i, l) {
    var e = n("$InternalEnum").Mirrored(["BizAILeadGenFieldCountTipDismissed"]),
      s = e.BizAILeadGenFieldCountTipDismissed;
    function u() {
      return r("WAWebUserPrefsStore").getUser(s) === !0;
    }
    function c() {
      r("WAWebUserPrefsStore").setUser(s, !0);
    }
    function d(e, t) {
      if (e != null)
        try {
          return o("WAWebWidFactory").createWid(e + "@c.us");
        } catch (e) {
          return null;
        }
      if (t != null)
        try {
          return o("WAWebWidFactory").createWid(t + "@lid");
        } catch (e) {
          return null;
        }
      return null;
    }
    function m(e, t) {
      t === void 0 && (t = new Date());
      var n = r("fbs")._(/*BTDS*/ "Custom moment"),
        o =
          e === "NEW_CHAT_BEGINS"
            ? r("fbs")._(/*BTDS*/ "As soon as a new chat begins")
            : e === "READY_TO_BUY"
              ? r("fbs")._(/*BTDS*/ "When someone is ready to buy")
              : n,
        a = String(t.getMonth() + 1).padStart(2, "0"),
        i = String(t.getDate()).padStart(2, "0"),
        l = a + "-" + i + "-" + t.getFullYear(),
        s = r("fbs")._(/*BTDS*/ "WhatsApp {moment} Response {date}", [
          r("fbs")._param("moment", o),
          r("fbs")._param("date", l),
        ]);
      return s.toString().replaceAll("/", "-");
    }
    ((l.BizAILeadGenUserPrefs = e),
      (l.isLeadGenFieldCountTipDismissed = u),
      (l.markLeadGenFieldCountTipDismissed = c),
      (l.getConsumerWid = d),
      (l.getSingleResponseDownloadBasename = m));
  },
  226,
);
