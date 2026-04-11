__d(
  "WAWebFormatPaymentMsg",
  ["fbt", "WAWebWidToFormattedNameOrNumber"],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      var t = r("WAWebWidToFormattedNameOrNumber")(e.remote);
      return e.fromMe
        ? s._(/*BTDS*/ "You invited {otherUser} to use payments", [
            s._param("otherUser", t),
          ])
        : s._(/*BTDS*/ "{otherUser} invited you to use payments", [
            s._param("otherUser", t),
          ]);
    }
    l.formatPaymentInviteMessageText = e;
  },
  226,
);
