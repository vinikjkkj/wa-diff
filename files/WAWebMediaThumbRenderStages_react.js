__d(
  "WAWebMediaThumbRenderStages.react",
  [
    "WAWebImageIcon.react",
    "WAWebMediaStateControls.react",
    "WAWebVideoPlaceholderIcon.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = { icon: { color: "x6oltr1", $$css: !0 } };
    function c(e) {
      var t = e.mediaType;
      return t === "video"
        ? s.jsx(o("WAWebVideoPlaceholderIcon.react").VideoPlaceholderIcon, {
            xstyle: u.icon,
          })
        : s.jsx(o("WAWebImageIcon.react").ImageIcon, { xstyle: u.icon });
    }
    c.displayName = c.name + " [from " + i.id + "]";
    function d(e) {
      var t = e.mediaType;
      return s.jsx("div", {
        className:
          "x10l6tqk x13vifvy x1o0tod x1vjfegm x9f619 x78zum5 x6s0dn4 xl56j7k xh8yej3 x5yr21d",
        "data-testid": void 0,
        children: s.jsx(c, { mediaType: t }),
      });
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m(e) {
      var t = e.onClick;
      return s.jsx("div", {
        className:
          "x10l6tqk x13vifvy x1o0tod x1vjfegm x9f619 x78zum5 x6s0dn4 xl56j7k xh8yej3 x5yr21d",
        children: s.jsx(o("WAWebMediaStateControls.react").Download, {
          tabIndex: -1,
          onClick: t,
        }),
      });
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p(e) {
      var t = e.mediaType,
        n = e.onClick;
      return s.jsx("button", {
        tabIndex: -1,
        className:
          "x10l6tqk x13vifvy x1o0tod x1vjfegm x9f619 x78zum5 x6s0dn4 xl56j7k xh8yej3 x5yr21d",
        onClick: n,
        children: s.jsx(c, { mediaType: t }),
      });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"),
      (l.MediaThumbLoading = d),
      (l.MediaThumbNeedsPoke = m),
      (l.MediaThumbError = p));
  },
  98,
);
