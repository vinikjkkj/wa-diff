__d(
  "WAWebExitedGroupMemberSection.react",
  [
    "fbt",
    "WAWebDrawerSection.react",
    "WAWebExitedGroupQPSurface.react",
    "WAWebFlex.react",
    "WAWebQuickPromotionGating",
    "WAWebText.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(3),
        n = e.group;
      if (!o("WAWebQuickPromotionGating").groupsPrivacyTipsEnabled())
        return null;
      var a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = u.jsx(o("WAWebText.react").WAWebTextTitle, {
            children: s._(/*BTDS*/ "You're no longer a member of this group"),
          })),
          (t[0] = a))
        : (a = t[0]);
      var i;
      return (
        t[1] !== n
          ? ((i = u.jsx(r("WAWebDrawerSection.react"), {
              children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
                padding: 16,
                align: "center",
                children: [
                  a,
                  u.jsx(r("WAWebExitedGroupQPSurface.react"), { group: n }),
                ],
              }),
            })),
            (t[1] = n),
            (t[2] = i))
          : (i = t[2]),
        i
      );
    }
    l.default = c;
  },
  226,
);
