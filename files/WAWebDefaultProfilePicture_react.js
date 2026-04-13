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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(14),
        n = e.backgroundStyles,
        a = e.directional,
        i = e.foregroundStyles,
        l = e.shape,
        c = e.size,
        d = e.type,
        m = l === void 0 ? "circle" : l,
        p = o("WAWebGroupTwoIcon.react").GroupTwoIcon,
        _,
        f;
      e: switch (d) {
        case "1-1": {
          p = o("WAWebDefaultPersonIcon.react").DefaultPersonIcon;
          var g;
          (t[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((g = { align: "end" }), (t[0] = g))
            : (g = t[0]),
            (_ = g),
            (f = u.oneOneIconStyles));
          break e;
        }
        case "group": {
          p = r("WDSIconIcGroupAddFilled.react");
          break e;
        }
        case "community": {
          p = o(
            "WAWebCommunityFilledRefreshedIcon.react",
          ).CommunityFilledRefreshedIcon;
          break e;
        }
        case "contact": {
          p = r("WDSIconIcPersonAddFilled.react");
          break e;
        }
        case "business-broadcast":
          p = r("WDSIconWdsIcBroadcastMessageFill.react");
      }
      var h;
      t[1] !== n
        ? ((h = [u.defaultBackgroundStyle, n]), (t[1] = n), (t[2] = h))
        : (h = t[2]);
      var y;
      t[3] !== f || t[4] !== i
        ? ((y = [u.defaultForegroundStyle, i, f]),
          (t[3] = f),
          (t[4] = i),
          (t[5] = y))
        : (y = t[5]);
      var C;
      return (
        t[6] !== p ||
        t[7] !== a ||
        t[8] !== _ ||
        t[9] !== m ||
        t[10] !== c ||
        t[11] !== h ||
        t[12] !== y
          ? ((C = s.jsx(
              o("WAWebShapeIcon.react").ShapeIcon,
              babelHelpers.extends(
                {
                  theme: o("WAWebShapeIcon.react").ShapeIconTheme.Muted,
                  backgroundStyles: h,
                  size: c,
                  shape: m,
                },
                _,
                { Icon: p, iconStyles: y, directional: a },
              ),
            )),
            (t[6] = p),
            (t[7] = a),
            (t[8] = _),
            (t[9] = m),
            (t[10] = c),
            (t[11] = h),
            (t[12] = y),
            (t[13] = C))
          : (C = t[13]),
        C
      );
    }
    l.default = c;
  },
  98,
);
