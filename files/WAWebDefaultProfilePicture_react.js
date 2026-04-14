__d(
  "WAWebDefaultProfilePicture.react",
  [
    "WAWebCommunityFilledRefreshedIcon.react",
    "WAWebDefaultPersonIcon.react",
    "WAWebGroupTwoIcon.react",
    "WAWebShapeIcon.react",
    "WDSIconIcGroupAddFilled.react",
    "WDSIconIcPersonAddFilled.react",
    "WDSIconWdsIcBroadcastMessageFill.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = {
        defaultBackgroundStyle: { backgroundColor: "x1od0jb8", $$css: !0 },
        defaultForegroundStyle: { color: "xhslqc4", $$css: !0 },
        oneOneIconStyles: { width: "xg0jo4d", height: "xuv0xuj", $$css: !0 },
      };
    function c(e) {
      var t = e.backgroundStyles,
        n = e.directional,
        a = e.foregroundStyles,
        i = e.shape,
        l = i === void 0 ? "circle" : i,
        c = e.size,
        d = e.type,
        m = o("WAWebGroupTwoIcon.react").GroupTwoIcon,
        p,
        _;
      switch (d) {
        case "1-1":
          ((m = o("WAWebDefaultPersonIcon.react").DefaultPersonIcon),
            (p = { align: "end" }),
            (_ = u.oneOneIconStyles));
          break;
        case "group":
          m = r("WDSIconIcGroupAddFilled.react");
          break;
        case "community":
          m = o(
            "WAWebCommunityFilledRefreshedIcon.react",
          ).CommunityFilledRefreshedIcon;
          break;
        case "contact":
          m = r("WDSIconIcPersonAddFilled.react");
          break;
        case "business-broadcast":
          m = r("WDSIconWdsIcBroadcastMessageFill.react");
          break;
      }
      return s.jsx(
        o("WAWebShapeIcon.react").ShapeIcon,
        babelHelpers.extends(
          {
            theme: o("WAWebShapeIcon.react").ShapeIconTheme.Muted,
            backgroundStyles: [u.defaultBackgroundStyle, t],
            size: c,
            shape: l,
          },
          p,
          {
            Icon: m,
            iconStyles: [u.defaultForegroundStyle, a, _],
            directional: n,
          },
        ),
      );
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
