__d(
  "WAWebAvatarSpinner.react",
  [
    "fbt",
    "WAWebClassnames",
    "WAWebSpinner.react",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["ref"],
      u,
      c,
      d = c || (c = o("react")),
      m = {
        container: {
          position: "x10l6tqk",
          top: "x13vifvy",
          insetInlineStart: "x1o0tod",
          display: "x78zum5",
          alignItems: "x6s0dn4",
          justifyContent: "xl56j7k",
          width: "xh8yej3",
          height: "x5yr21d",
          backgroundColor: "x1honnu5",
          borderStartStartRadius: "x1c9tyrk",
          borderStartEndRadius: "xeusxvb",
          borderEndEndRadius: "x1pahc9y",
          borderEndStartRadius: "x1ertn4p",
          $$css: !0,
        },
      };
    function p(t) {
      var n = o("react-compiler-runtime").c(13),
        a,
        i;
      n[0] !== t
        ? ((i = t.ref),
          (a = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = a),
          (n[2] = i))
        : ((a = n[1]), (i = n[2]));
      var l = a,
        c = l.className,
        p = l.size,
        _ = l.xstyle,
        f = p === void 0 ? 50 : p,
        g;
      n[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = s._(/*BTDS*/ "Loading photo")), (n[3] = g))
        : (g = n[3]);
      var h;
      n[4] !== c || n[5] !== _
        ? ((h = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
            (u || (u = r("stylex")))(m.container, _),
            c,
          )),
          (n[4] = c),
          (n[5] = _),
          (n[6] = h))
        : (h = n[6]);
      var y;
      n[7] !== f
        ? ((y = d.jsx(o("WAWebSpinner.react").Spinner, {
            size: f,
            stroke: 3,
            color: "solidwhite",
          })),
          (n[7] = f),
          (n[8] = y))
        : (y = n[8]);
      var C;
      return (
        n[9] !== i || n[10] !== h || n[11] !== y
          ? ((C = d.jsx("div", {
              "aria-label": g,
              ref: i,
              className: h,
              children: y,
            })),
            (n[9] = i),
            (n[10] = h),
            (n[11] = y),
            (n[12] = C))
          : (C = n[12]),
        C
      );
    }
    l.default = p;
  },
  226,
);
