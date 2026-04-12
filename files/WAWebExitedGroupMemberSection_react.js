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
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.group;
      return o("WAWebQuickPromotionGating").groupsPrivacyTipsEnabled()
        ? u.jsx(r("WAWebDrawerSection.react"), {
            children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
              padding: 16,
              align: "center",
              children: [
                u.jsx(o("WAWebText.react").WAWebTextTitle, {
                  children: s._(
                    /*BTDS*/ "You're no longer a member of this group",
                  ),
                }),
                u.jsx(r("WAWebExitedGroupQPSurface.react"), { group: t }),
              ],
            }),
          })
        : null;
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
