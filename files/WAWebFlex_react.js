__d(
  "WAWebFlex.react",
  ["WAWebFlexItem.react", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    var e = ["ref"],
      s = [
        "align",
        "alignSelf",
        "className",
        "direction",
        "justify",
        "justifySelf",
        "xstyle",
      ],
      u = ["ref"],
      c = ["ref"],
      d,
      m = d || (d = o("react")),
      p = { flex: { minWidth: "xeuugli", minHeight: "x2lwn1j", $$css: !0 } },
      _ = {
        start: { justifyContent: "x1nhvcw1", $$css: !0 },
        center: { justifyContent: "xl56j7k", $$css: !0 },
        end: { justifyContent: "x13a6bvl", $$css: !0 },
        all: { justifyContent: "x1qughib", $$css: !0 },
        around: { justifyContent: "x1l1ennw", $$css: !0 },
        evenly: { justifyContent: "xaw8158", $$css: !0 },
        stretch: { justifyContent: "x1szn6h9", $$css: !0 },
      },
      f = {
        horizontal: { flexDirection: "x1q0g3np", $$css: !0 },
        vertical: { flexDirection: "xdt5ytf", $$css: !0 },
        horizontalReverse: { flexDirection: "x15zctf7", $$css: !0 },
        verticalReverse: { flexDirection: "x3ieub6", $$css: !0 },
      },
      g = {
        center: { alignItems: "x6s0dn4", $$css: !0 },
        start: { alignItems: "x1cy8zhl", $$css: !0 },
        end: { alignItems: "xuk3077", $$css: !0 },
        stretch: { alignItems: "x1qjc9v5", $$css: !0 },
        baseline: { alignItems: "x1pha0wt", $$css: !0 },
      };
    function h(t) {
      var n = o("react-compiler-runtime").c(24),
        a,
        i;
      n[0] !== t
        ? ((i = t.ref),
          (a = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = a),
          (n[2] = i))
        : ((a = n[1]), (i = n[2]));
      var l, u, c, d, h, y, C, b;
      if (n[3] !== a) {
        var v = a;
        ((y = v.align),
          (l = v.alignSelf),
          (u = v.className),
          (c = v.direction),
          (C = v.justify),
          (d = v.justifySelf),
          (b = v.xstyle),
          (h = babelHelpers.objectWithoutPropertiesLoose(v, s)),
          (n[3] = a),
          (n[4] = l),
          (n[5] = u),
          (n[6] = c),
          (n[7] = d),
          (n[8] = h),
          (n[9] = y),
          (n[10] = C),
          (n[11] = b));
      } else
        ((l = n[4]),
          (u = n[5]),
          (c = n[6]),
          (d = n[7]),
          (h = n[8]),
          (y = n[9]),
          (C = n[10]),
          (b = n[11]));
      var S = y === void 0 ? "start" : y,
        R = C === void 0 ? "start" : C,
        L = _[R],
        E = f[c],
        k = g[S],
        I;
      n[12] !== L || n[13] !== E || n[14] !== k || n[15] !== b
        ? ((I = [p.flex, L, E, k, b]),
          (n[12] = L),
          (n[13] = E),
          (n[14] = k),
          (n[15] = b),
          (n[16] = I))
        : (I = n[16]);
      var T;
      return (
        n[17] !== l ||
        n[18] !== u ||
        n[19] !== d ||
        n[20] !== i ||
        n[21] !== h ||
        n[22] !== I
          ? ((T = m.jsx(
              r("WAWebFlexItem.react"),
              babelHelpers.extends(
                {
                  className: u,
                  xstyle: I,
                  align: l,
                  justify: d,
                  isFlexContainer: !0,
                  ref: i,
                },
                h,
              ),
            )),
            (n[17] = l),
            (n[18] = u),
            (n[19] = d),
            (n[20] = i),
            (n[21] = h),
            (n[22] = I),
            (n[23] = T))
          : (T = n[23]),
        T
      );
    }
    function y(e) {
      var t = o("react-compiler-runtime").c(6),
        n,
        r;
      t[0] !== e
        ? ((r = e.ref),
          (n = babelHelpers.objectWithoutPropertiesLoose(e, u)),
          (t[0] = e),
          (t[1] = n),
          (t[2] = r))
        : ((n = t[1]), (r = t[2]));
      var a;
      return (
        t[3] !== n || t[4] !== r
          ? ((a = m.jsx(
              h,
              babelHelpers.extends({}, n, {
                direction: "horizontal",
                ref: r,
                children: n.children,
              }),
            )),
            (t[3] = n),
            (t[4] = r),
            (t[5] = a))
          : (a = t[5]),
        a
      );
    }
    function C(e) {
      var t = o("react-compiler-runtime").c(6),
        n,
        r;
      t[0] !== e
        ? ((r = e.ref),
          (n = babelHelpers.objectWithoutPropertiesLoose(e, c)),
          (t[0] = e),
          (t[1] = n),
          (t[2] = r))
        : ((n = t[1]), (r = t[2]));
      var a;
      return (
        t[3] !== n || t[4] !== r
          ? ((a = m.jsx(
              h,
              babelHelpers.extends({}, n, {
                direction: "vertical",
                ref: r,
                children: n.children,
              }),
            )),
            (t[3] = n),
            (t[4] = r),
            (t[5] = a))
          : (a = t[5]),
        a
      );
    }
    ((l.FlexItem = r("WAWebFlexItem.react")),
      (l.FlexContainer = h),
      (l.FlexRow = y),
      (l.FlexColumn = C));
  },
  98,
);
