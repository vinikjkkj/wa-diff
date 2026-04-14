__d(
  "WAWebLinkMutatorComponent.react",
  ["WAWebCopyPasteSelectable.react", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = {
        link: {
          textDecoration:
            "x1bvjpef x1lku1pv x11iimpl xbvygy2 x1wp9yj1 x1e2wovf",
          color: "x1ph7ams x17f7hit",
          backgroundColor: "xn69kzl",
          textUnderlineOffset: "xrys4gj xhmieyt",
          $$css: !0,
        },
      };
    function c(e) {
      var t = e.children,
        n = t === void 0 ? "" : t,
        r = e.className,
        a = e.dataTab,
        i = e.href,
        l = e.onClick,
        c = e.selectable;
      return s.jsx(o("WAWebCopyPasteSelectable.react").SelectableLink, {
        onClick: function (t) {
          l == null || l();
        },
        onContextMenu: function (t) {
          l == null || l();
        },
        className: r,
        xstyle: u.link,
        href: i,
        title: i,
        target: "_blank",
        rel: "noopener noreferrer",
        selectable: c,
        dataTab: a,
        children: n,
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
