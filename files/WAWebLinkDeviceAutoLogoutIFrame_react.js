__d(
  "WAWebLinkDeviceAutoLogoutIFrame.react",
  ["WAWebAutoLogoutGating", "react", "useWAWebTimeout"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.useState,
      c = 30 * 1e3;
    function d(e) {
      var t = e.autoLogoutEnabled,
        n = e.onTimeout,
        r = e.visible,
        a = u(!1),
        i = a[0],
        l = a[1],
        d = o("useWAWebTimeout").useTimeout(n, c),
        m = d[0],
        p = d[1];
      if (!o("WAWebAutoLogoutGating").isRunningInAutoLogoutIframe() && t) {
        i || m();
        var _ = function () {
          (p(), l(!0));
        };
        return s.jsx("iframe", {
          src: o("WAWebAutoLogoutGating").getAutoLogoutIframeUrl(),
          title: "autologout",
          onLoad: _,
          credentialless: "true",
          style: {
            position: "fixed",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            width: "100%",
            height: "100%",
            zIndex: 1e4,
            display: r ? "block" : "none",
          },
        });
      }
      return (i && l(!1), p(), null);
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  98,
);
