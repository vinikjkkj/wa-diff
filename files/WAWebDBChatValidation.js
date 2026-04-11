__d(
  "WAWebDBChatValidation",
  ["WALogger", "WAWebWid"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t, n) {
      if (t.accountLid != null && !r("WAWebWid").isStringLid(t.accountLid)) {
        var a;
        o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "",
                ": accountLid is not a valid Lid. chatId: ",
                ", accountLid: ",
                "",
              ])),
            n,
            (a = t.id) != null ? a : "unknown",
            t.accountLid,
          )
          .sendLogs("chat-table-invalid-account-lid");
      }
    }
    function u(e, t) {
      for (var n of e) s(n, t);
    }
    ((l.validateAccountLidInChatRow = s), (l.validateAccountLidInChatRows = u));
  },
  98,
);
