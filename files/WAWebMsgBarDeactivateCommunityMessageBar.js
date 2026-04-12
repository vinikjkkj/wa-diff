__d(
  "WAWebMsgBarDeactivateCommunityMessageBar",
  ["fbt", "react"],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.groupMetadata;
      return u.jsx("span", {
        className: "x126k92a",
        "data-testid": void 0,
        children: t.participants.iAmAdmin()
          ? s._(
              /*BTDS*/ "This community was deactivated. You can no longer message it.",
            )
          : s._(/*BTDS*/ "This community was deactivated"),
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
