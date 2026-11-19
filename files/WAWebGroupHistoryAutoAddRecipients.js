__d(
  "WAWebGroupHistoryAutoAddRecipients",
  ["WAWebGroupHistoryStoredHintGating", "WAWebWid"],
  function (t, n, r, o, a, i, l) {
    var e = 2;
    function s(t) {
      var n;
      if (
        !o(
          "WAWebGroupHistoryStoredHintGating",
        ).isGroupHistoryStoredHintEnabled()
      )
        return t;
      var a = (n = t.templateParams) != null ? n : [];
      return babelHelpers.extends({}, t, {
        recipients: a.slice(e).filter(function (e) {
          return e instanceof r("WAWebWid") && e.isUser();
        }),
        templateParams: a.slice(0, e),
      });
    }
    l.normalizeGroupHistoryAutoAddRecipients = s;
  },
  98,
);
