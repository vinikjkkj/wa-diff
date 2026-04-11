__d(
  "WAWebChatContactUtils",
  ["fbt"],
  function (t, n, r, o, a, i, l, s) {
    function e(e, t) {
      return (
        t === void 0 && (t = !0),
        e == null || e === "" ? "" : "~" + (t ? "\u202F" : "") + e
      );
    }
    function u(e) {
      return e == null || e === ""
        ? ""
        : s._(/*BTDS*/ "Maybe {notifyName}", [s._param("notifyName", e)]);
    }
    ((l.getFormattedNotifyName = e), (l.getAccessibleNotifyName = u));
  },
  226,
);
