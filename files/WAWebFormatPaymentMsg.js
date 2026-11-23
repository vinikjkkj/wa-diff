__d(
  "WAWebFormatPaymentMsg",
  ["fbt", "WAWebSystemMessageGatingUtils", "WAWebWidToFormattedNameOrNumber"],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      var t = r("WAWebWidToFormattedNameOrNumber")(e.remote);
      return e.fromMe
        ? o(
            "WAWebSystemMessageGatingUtils",
          ).systemMessageTerminalPeriodsEnabled()
          ? s._(/*BTDS*/ "", [s._param("otherUser", t)])
          : s._(/*BTDS*/ "", [s._param("otherUser", t)])
        : o(
              "WAWebSystemMessageGatingUtils",
            ).systemMessageTerminalPeriodsEnabled()
          ? s._(/*BTDS*/ "", [s._param("otherUser", t)])
          : s._(/*BTDS*/ "", [s._param("otherUser", t)]);
    }
    function u(e) {
      return e === "send"
        ? s._(/*BTDS*/ "")
        : e === "request"
          ? s._(/*BTDS*/ "")
          : null;
    }
    function c(e, t) {
      return t == null || t === ""
        ? null
        : e === "send"
          ? s._(/*BTDS*/ "", [s._param("receiverName", t)])
          : e === "request"
            ? s._(/*BTDS*/ "", [s._param("receiverName", t)])
            : null;
    }
    ((l.formatPaymentInviteMessageText = e),
      (l.getPaymentTypeTextForSelf = u),
      (l.getPaymentTypeText = c));
  },
  226,
);
