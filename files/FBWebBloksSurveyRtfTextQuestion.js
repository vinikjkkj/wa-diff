__d(
  "FBWebBloksSurveyRtfTextQuestion",
  [
    "WebBloksStyle",
    "WebBloksURLUtils",
    "dompurify",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useCallback,
      d = u.useMemo,
      m = "#";
    function p(e) {
      var t = o("react-compiler-runtime").c(15),
        n = e.externalStyle,
        a = e.node,
        i = o("WebBloksStyle").useStyle(a, n),
        l = i.style,
        u = i.wrapper,
        c = i.wrapperProps,
        d;
      t[0] !== a ? ((d = a.get(m)), (t[0] = a), (t[1] = d)) : (d = t[1]);
      var p = d,
        f;
      t[2] !== p
        ? ((f = r("dompurify").sanitize(p != null ? p : "")),
          (t[2] = p),
          (t[3] = f))
        : (f = t[3]);
      var g = f,
        h = _,
        y;
      t[4] !== g ? ((y = { __html: g }), (t[4] = g), (t[5] = y)) : (y = t[5]);
      var C;
      t[6] !== l
        ? ((C = babelHelpers.extends({ display: "block" }, l)),
          (t[6] = l),
          (t[7] = C))
        : (C = t[7]);
      var b;
      t[8] !== y || t[9] !== C || t[10] !== c
        ? ((b = s.jsx(
            "div",
            babelHelpers.extends({}, c, {
              className: o("WebBloksStyle").WebBloksStyles.container,
              dangerouslySetInnerHTML: y,
              onClickCapture: h,
              style: C,
            }),
          )),
          (t[8] = y),
          (t[9] = C),
          (t[10] = c),
          (t[11] = b))
        : (b = t[11]);
      var v;
      return (
        t[12] !== b || t[13] !== u
          ? ((v = u(b)), (t[12] = b), (t[13] = u), (t[14] = v))
          : (v = t[14]),
        v
      );
    }
    function _(e) {
      if (e.target instanceof Element) {
        var t = e.target.closest("a[href]");
        t instanceof HTMLAnchorElement &&
          (e.preventDefault(), o("WebBloksURLUtils").openURL(t.href, !0));
      }
    }
    l.default = p;
  },
  98,
);
