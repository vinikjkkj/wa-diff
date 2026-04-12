__d(
  "WAWebAttachmentLoaderButton.react",
  [
    "fbt",
    "WDSButton.react",
    "WDSIconIcClose.react",
    "WDSIconIcDownload.react",
    "WDSIconIcUpload.react",
    "react",
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
      var t = e.progress,
        n = Math.max(0, Math.min(1, t)),
        r = Math.round(n * 100),
        o = n * _,
        a = Math.max(0, _ - o - 2 * f),
        i = n <= 0 || n >= 1;
      return u.jsxs("svg", {
        "aria-label": s._(/*BTDS*/ "Progress"),
        "aria-valuemax": 100,
        "aria-valuemin": 0,
        "aria-valuenow": r,
        height: d,
        role: "progressbar",
        width: d,
        className: "x1o0tod x47corl x10l6tqk x13vifvy",
        children: [
          u.jsx("title", { children: s._(/*BTDS*/ "Progress") }),
          i
            ? u.jsx(
                "circle",
                babelHelpers.extends(
                  { cx: g, cy: g, fill: "none", r: p, strokeWidth: m },
                  { 0: { className: "xanp23y" }, 1: { className: "x94ds6z" } }[
                    (n >= 1) << 0
                  ],
                ),
              )
            : u.jsxs(u.Fragment, {
                children: [
                  a > 0 &&
                    u.jsx("circle", {
                      cx: g,
                      cy: g,
                      fill: "none",
                      r: p,
                      strokeDasharray: a + " " + _,
                      strokeDashoffset: -(o + f),
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
                    strokeDasharray: o + " " + _,
                    strokeLinecap: "round",
                    strokeWidth: m,
                    transform: h,
                    className: "x94ds6z",
                  }),
                ],
              }),
        ],
      });
    }
    y.displayName = y.name + " [from " + i.id + "]";
    function C(e) {
      var t = e.ariaLabel,
        n = e.onPress,
        o = t != null ? t : s._(/*BTDS*/ "Download");
      return u.jsx("div", {
        className: "x6s0dn4 x78zum5 x16wdlz0 xl56j7k x1n2onr6 x1guw455",
        children: u.jsx(r("WDSButton.react"), {
          Icon: r("WDSIconIcDownload.react"),
          "aria-label": o,
          onPress: n,
          size: "small",
          type: "default",
          variant: "borderless",
        }),
      });
    }
    C.displayName = C.name + " [from " + i.id + "]";
    function b(e) {
      var t = e.ariaLabel,
        n = e.onPress,
        o = t != null ? t : s._(/*BTDS*/ "Upload");
      return u.jsx("div", {
        className: "x6s0dn4 x78zum5 x16wdlz0 xl56j7k x1n2onr6 x1guw455",
        children: u.jsx(r("WDSButton.react"), {
          Icon: r("WDSIconIcUpload.react"),
          "aria-label": o,
          onPress: n,
          size: "small",
          type: "default",
          variant: "borderless",
        }),
      });
    }
    b.displayName = b.name + " [from " + i.id + "]";
    function v(e) {
      var t = e.ariaLabel,
        n = e.onPress,
        o = e.progress,
        a = o === void 0 ? 0 : o,
        i = t != null ? t : s._(/*BTDS*/ "Cancel"),
        l = c(
          function (e) {
            (e.stopPropagation(), n == null || n(e));
          },
          [n],
        ),
        d = u.jsx(r("WDSButton.react"), {
          Icon: r("WDSIconIcClose.react"),
          "aria-label": i,
          onPress: l,
          size: "small",
          type: "default",
          variant: "borderless",
        });
      return u.jsxs("div", {
        className: "x6s0dn4 x78zum5 x16wdlz0 xl56j7k x1n2onr6 x1guw455",
        children: [u.jsx(y, { progress: a }), n != null && d],
      });
    }
    ((v.displayName = v.name + " [from " + i.id + "]"),
      (l.DownloadButton = C),
      (l.UploadButton = b),
      (l.LoaderButton = v));
  },
  226,
);
