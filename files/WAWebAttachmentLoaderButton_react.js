__d(
  "WAWebAttachmentLoaderButton.react",
  [
    "fbt",
    "WDSButton.react",
    "WDSIconIcClose.react",
    "WDSIconIcDownload.react",
    "WDSIconIcUpload.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useCallback,
      d = 38,
      m = 4,
      p = (d - m) / 2,
      _ = 2 * Math.PI * p,
      f = 5,
      g = d / 2,
      h = "rotate(-90, " + g + ", " + g + ")";
    function y(e) {
      var t = o("react-compiler-runtime").c(13),
        n = e.progress,
        r = Math.max(0, Math.min(1, n)),
        a;
      t[0] !== r
        ? ((a = Math.round(r * 100)), (t[0] = r), (t[1] = a))
        : (a = t[1]);
      var i = a,
        l = r * _,
        c = Math.max(0, _ - l - 2 * f),
        y = r <= 0 || r >= 1,
        C;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = s._(/*BTDS*/ "Progress")), (t[2] = C))
        : (C = t[2]);
      var b, v;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = { className: "x1o0tod x47corl x10l6tqk x13vifvy" }),
          (v = u.jsx("title", { children: s._(/*BTDS*/ "Progress") })),
          (t[3] = b),
          (t[4] = v))
        : ((b = t[3]), (v = t[4]));
      var S;
      t[5] !== r || t[6] !== l || t[7] !== y || t[8] !== c
        ? ((S = y
            ? u.jsx(
                "circle",
                babelHelpers.extends(
                  { cx: g, cy: g, fill: "none", r: p, strokeWidth: m },
                  { 0: { className: "xanp23y" }, 1: { className: "x94ds6z" } }[
                    (r >= 1) << 0
                  ],
                ),
              )
            : u.jsxs(u.Fragment, {
                children: [
                  c > 0 &&
                    u.jsx("circle", {
                      cx: g,
                      cy: g,
                      fill: "none",
                      r: p,
                      strokeDasharray: c + " " + _,
                      strokeDashoffset: -(l + f),
                      strokeLinecap: "round",
                      strokeWidth: m,
                      transform: h,
                      className: "xanp23y",
                    }),
                  u.jsx("circle", {
                    cx: g,
                    cy: g,
                    fill: "none",
                    r: p,
                    strokeDasharray: l + " " + _,
                    strokeLinecap: "round",
                    strokeWidth: m,
                    transform: h,
                    className: "x94ds6z",
                  }),
                ],
              })),
          (t[5] = r),
          (t[6] = l),
          (t[7] = y),
          (t[8] = c),
          (t[9] = S))
        : (S = t[9]);
      var R;
      return (
        t[10] !== i || t[11] !== S
          ? ((R = u.jsxs(
              "svg",
              babelHelpers.extends(
                {
                  "aria-label": C,
                  "aria-valuemax": 100,
                  "aria-valuemin": 0,
                  "aria-valuenow": i,
                  height: d,
                  role: "progressbar",
                  width: d,
                },
                b,
                { children: [v, S] },
              ),
            )),
            (t[10] = i),
            (t[11] = S),
            (t[12] = R))
          : (R = t[12]),
        R
      );
    }
    function C(e) {
      var t = o("react-compiler-runtime").c(6),
        n = e.ariaLabel,
        a = e.onPress,
        i;
      t[0] !== n
        ? ((i = n != null ? n : s._(/*BTDS*/ "Download")),
          (t[0] = n),
          (t[1] = i))
        : (i = t[1]);
      var l = i,
        c;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = {
            className: "x6s0dn4 x78zum5 x16wdlz0 xl56j7k x1n2onr6 x1guw455",
          }),
          (t[2] = c))
        : (c = t[2]);
      var d;
      return (
        t[3] !== l || t[4] !== a
          ? ((d = u.jsx(
              "div",
              babelHelpers.extends({}, c, {
                children: u.jsx(r("WDSButton.react"), {
                  Icon: r("WDSIconIcDownload.react"),
                  "aria-label": l,
                  onPress: a,
                  size: "small",
                  type: "default",
                  variant: "borderless",
                }),
              }),
            )),
            (t[3] = l),
            (t[4] = a),
            (t[5] = d))
          : (d = t[5]),
        d
      );
    }
    function b(e) {
      var t = o("react-compiler-runtime").c(6),
        n = e.ariaLabel,
        a = e.onPress,
        i;
      t[0] !== n
        ? ((i = n != null ? n : s._(/*BTDS*/ "Upload")), (t[0] = n), (t[1] = i))
        : (i = t[1]);
      var l = i,
        c;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = {
            className: "x6s0dn4 x78zum5 x16wdlz0 xl56j7k x1n2onr6 x1guw455",
          }),
          (t[2] = c))
        : (c = t[2]);
      var d;
      return (
        t[3] !== l || t[4] !== a
          ? ((d = u.jsx(
              "div",
              babelHelpers.extends({}, c, {
                children: u.jsx(r("WDSButton.react"), {
                  Icon: r("WDSIconIcUpload.react"),
                  "aria-label": l,
                  onPress: a,
                  size: "small",
                  type: "default",
                  variant: "borderless",
                }),
              }),
            )),
            (t[3] = l),
            (t[4] = a),
            (t[5] = d))
          : (d = t[5]),
        d
      );
    }
    function v(e) {
      var t = o("react-compiler-runtime").c(13),
        n = e.ariaLabel,
        a = e.onPress,
        i = e.progress,
        l = i === void 0 ? 0 : i,
        c;
      t[0] !== n
        ? ((c = n != null ? n : s._(/*BTDS*/ "Cancel")), (t[0] = n), (t[1] = c))
        : (c = t[1]);
      var d = c,
        m;
      t[2] !== a
        ? ((m = function (t) {
            (t.stopPropagation(), a == null || a(t));
          }),
          (t[2] = a),
          (t[3] = m))
        : (m = t[3]);
      var p = m,
        _;
      t[4] !== p || t[5] !== d
        ? ((_ = u.jsx(r("WDSButton.react"), {
            Icon: r("WDSIconIcClose.react"),
            "aria-label": d,
            onPress: p,
            size: "small",
            type: "default",
            variant: "borderless",
          })),
          (t[4] = p),
          (t[5] = d),
          (t[6] = _))
        : (_ = t[6]);
      var f = _,
        g;
      t[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = {
            className: "x6s0dn4 x78zum5 x16wdlz0 xl56j7k x1n2onr6 x1guw455",
          }),
          (t[7] = g))
        : (g = t[7]);
      var h;
      t[8] !== l
        ? ((h = u.jsx(y, { progress: l })), (t[8] = l), (t[9] = h))
        : (h = t[9]);
      var C = a != null && f,
        b;
      return (
        t[10] !== h || t[11] !== C
          ? ((b = u.jsxs(
              "div",
              babelHelpers.extends({}, g, { children: [h, C] }),
            )),
            (t[10] = h),
            (t[11] = C),
            (t[12] = b))
          : (b = t[12]),
        b
      );
    }
    ((l.DownloadButton = C), (l.UploadButton = b), (l.LoaderButton = v));
  },
  226,
);
