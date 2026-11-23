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
        "data-testid": "deactivated-community-msg-bar",
        children: t.participants.iAmAdmin()
          ? s._(/*BTDS*/ "")
          : s._(/*BTDS*/ ""),
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
