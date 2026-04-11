__d(
  "WAWebLinkDeviceCommonComponents.react",
  [
    "WAWebClickable.react",
    "WAWebEnvironment",
    "WDSText.react",
    "WDSVars.stylex",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = {
        position: "inherit",
        width: "unset",
        height: "unset",
        color: "var(--secondary)",
        fontSize: "16px",
        marginBottom: o("WDSVars.stylex").WDSVars.spacingQuad,
        lineHeight: "21px",
      };
    function c(e) {
      var t = o("react-compiler-runtime").c(5),
        n = e.theme,
        a = e.value;
      if (n === "wds" || r("WAWebEnvironment").isWindows) {
        var i;
        return (
          t[0] !== a
            ? ((i = s.jsx(r("WDSText.react"), {
                colorName: "contentDefault",
                type: "LargeTitle2",
                children: a,
              })),
              (t[0] = a),
              (t[1] = i))
            : (i = t[1]),
          i
        );
      }
      var l;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = {
            0: { className: "x579bpy xo1l8bm xggjnk3 x1hql6x6" },
            1: { className: "x579bpy xggjnk3 x1hql6x6 x1s688f" },
          }[!!r("WAWebEnvironment").isWindows << 0]),
          (t[2] = l))
        : (l = t[2]);
      var u;
      return (
        t[3] !== a
          ? ((u = s.jsx("div", babelHelpers.extends({}, l, { children: a }))),
            (t[3] = a),
            (t[4] = u))
          : (u = t[4]),
        u
      );
    }
    function d(e) {
      var t = o("react-compiler-runtime").c(4),
        n = e.value;
      if (n == null) {
        var r;
        return (
          t[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((r = s.jsx("div", { className: "x1fgtraw" })), (t[0] = r))
            : (r = t[0]),
          r
        );
      }
      var a;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = { className: "x1hql6x6 x1c3i2sq xdod15v xg6s713" }), (t[1] = a))
        : (a = t[1]);
      var i;
      return (
        t[2] !== n
          ? ((i = s.jsx("div", babelHelpers.extends({}, a, { children: n }))),
            (t[2] = n),
            (t[3] = i))
          : (i = t[3]),
        i
      );
    }
    function m(e) {
      var t = o("react-compiler-runtime").c(7),
        n = e.config;
      if (n == null) return null;
      var r = n.onClick,
        a = n.shouldShow,
        i = n.text;
      if (!a) return null;
      var l, u;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((l =
            "xrwxeff x10l6tqk x80663w x1i1rx1s xjm9jq1 x6ikm8r x10wlt62 x8o5u1m x162dhgo xm14bv4 x1p9y9v0 x1ot2rpl x1ayw9wz xlsgc75 x2iotq7 x1kpoq75 xcjmxlc xvjdqlt x1at3e3p x1ip307p x1qoaid1 x19byxu8"),
          (u = { className: "x1v5yvga" }),
          (t[0] = l),
          (t[1] = u))
        : ((l = t[0]), (u = t[1]));
      var c;
      t[2] !== i
        ? ((c = s.jsx("div", babelHelpers.extends({}, u, { children: i }))),
          (t[2] = i),
          (t[3] = c))
        : (c = t[3]);
      var d;
      return (
        t[4] !== r || t[5] !== c
          ? ((d = s.jsx(o("WAWebClickable.react").Clickable, {
              onClick: r,
              className: l,
              children: c,
            })),
            (t[4] = r),
            (t[5] = c),
            (t[6] = d))
          : (d = t[6]),
        d
      );
    }
    ((l.Title = c), (l.Subtitle = d), (l.ScreenReaderSubtitle = m));
  },
  98,
);
