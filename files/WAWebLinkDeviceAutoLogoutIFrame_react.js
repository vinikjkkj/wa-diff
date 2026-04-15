__d(
  "WAWebLinkDeviceAutoLogoutIFrame.react",
  [
    "WAWebAutoLogoutGating",
    "react",
    "react-compiler-runtime",
    "useWAWebTimeout",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.useState,
      c = 30 * 1e3;
    function d(e) {
      var t = o("react-compiler-runtime").c(8),
        n = e.autoLogoutEnabled,
        r = e.onTimeout,
        a = e.visible,
        i = u(!1),
        l = i[0],
        d = i[1],
        m = o("useWAWebTimeout").useTimeout(r, c),
        p = m[0],
        _ = m[1];
      if (!o("WAWebAutoLogoutGating").isRunningInAutoLogoutIframe() && n) {
        l || p();
        var f;
        t[0] !== _
          ? ((f = function () {
              (_(), d(!0));
            }),
            (t[0] = _),
            (t[1] = f))
          : (f = t[1]);
        var g = f,
          h;
        t[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((h = o("WAWebAutoLogoutGating").getAutoLogoutIframeUrl()),
            (t[2] = h))
          : (h = t[2]);
        var y = a ? "block" : "none",
          C;
        t[3] !== y
          ? ((C = {
              position: "fixed",
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              width: "100%",
              height: "100%",
              zIndex: 1e4,
              display: y,
            }),
            (t[3] = y),
            (t[4] = C))
          : (C = t[4]);
        var b;
        return (
          t[5] !== g || t[6] !== C
            ? ((b = s.jsx("iframe", {
                src: h,
                title: "autologout",
                onLoad: g,
                credentialless: "true",
                style: C,
              })),
              (t[5] = g),
              (t[6] = C),
              (t[7] = b))
            : (b = t[7]),
          b
        );
      }
      return (l && d(!1), _(), null);
    }
    l.default = d;
  },
  98,
);
