__d(
  "WAWebChatlistBanners.react",
  ["WAWebChatButterbar.react", "WAWebChatlistPanelNuxBanners.react", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.useState;
    function c() {
      var e = u(!0),
        t = e[0],
        n = e[1];
      return s.jsxs(s.Fragment, {
        children: [
          s.jsx(r("WAWebChatButterbar.react"), { setShowButterBar: n }),
          !t && s.jsx(r("WAWebChatlistPanelNuxBanners.react"), {}),
        ],
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
