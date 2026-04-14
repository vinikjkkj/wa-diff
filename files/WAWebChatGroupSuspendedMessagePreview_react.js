__d(
  "WAWebChatGroupSuspendedMessagePreview.react",
  [
    "fbt",
    "WAWebGroupGatingUtils",
    "WAWebSettingsBlockedIcon.react",
    "WAWebUISpacing",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c() {
      var e = o(
        "WAWebGroupGatingUtils",
      ).isGroupSuspensionAppealsRedesignEnabled()
        ? s._(/*BTDS*/ "This group is suspended")
        : s._(/*BTDS*/ "This group is no longer available");
      return u.jsxs("span", {
        title: e,
        className: "x1k4tb9n",
        children: [
          u.jsx(o("WAWebSettingsBlockedIcon.react").SettingsBlockedIcon, {
            width: 14,
            height: 14,
            displayInline: !0,
            directional: !0,
            xstyle: [
              o("WAWebUISpacing").uiMargin.top3,
              o("WAWebUISpacing").uiMargin.end3,
            ],
          }),
          e,
        ],
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
