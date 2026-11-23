__d(
  "WAWebFormatRestrictNotification",
  ["fbt", "WAWebSystemMessageGatingUtils", "WAWebSystemMessagesUtils"],
  function (t, n, r, o, a, i, l, s) {
    var e = 256;
    function u(t) {
      var n = t.author,
        r = t.authorClickable,
        a = t.templateParams,
        i = a[0];
      if (i === "on") {
        if (a[1] != null) {
          var l = parseInt(String(a[1]), 10) || e;
          return o(
            "WAWebSystemMessageGatingUtils",
          ).systemMessageTerminalPeriodsEnabled()
            ? s._(/*BTDS*/ "", [s._plural(l, "threshold")])
            : s._(/*BTDS*/ "", [s._plural(l, "threshold")]);
        }
        return o("WAWebSystemMessagesUtils").isMe(n)
          ? o(
              "WAWebSystemMessageGatingUtils",
            ).systemMessageTerminalPeriodsEnabled()
            ? s._(/*BTDS*/ "")
            : s._(/*BTDS*/ "")
          : r != null
            ? (o(
                "WAWebSystemMessageGatingUtils",
              ).systemMessageTerminalPeriodsEnabled() &&
                s._(/*BTDS*/ "", [s._param("user_name", r)])) ||
              s._(/*BTDS*/ "", [s._param("user_name", r)])
            : (o(
                "WAWebSystemMessageGatingUtils",
              ).systemMessageTerminalPeriodsEnabled() &&
                s._(/*BTDS*/ "")) ||
              s._(/*BTDS*/ "");
      } else if (o("WAWebSystemMessagesUtils").isMe(n))
        return o(
          "WAWebSystemMessageGatingUtils",
        ).systemMessageTerminalPeriodsEnabled()
          ? s._(/*BTDS*/ "")
          : s._(/*BTDS*/ "");
      return r != null
        ? (o(
            "WAWebSystemMessageGatingUtils",
          ).systemMessageTerminalPeriodsEnabled() &&
            s._(/*BTDS*/ "", [s._param("user_name", r)])) ||
            s._(/*BTDS*/ "", [s._param("user_name", r)])
        : (o(
            "WAWebSystemMessageGatingUtils",
          ).systemMessageTerminalPeriodsEnabled() &&
            s._(/*BTDS*/ "")) ||
            s._(/*BTDS*/ "");
    }
    l.formatRestrictNotification = u;
  },
  226,
);
