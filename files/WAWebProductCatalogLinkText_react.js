__d(
  "WAWebProductCatalogLinkText.react",
  ["WAWebCopyPasteSelectable.react", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.href,
        n = e.id,
        r = e.noHandle,
        a = e.onClick;
      return s.jsx("span", {
        className: "x1vvkbs xeaf4i8",
        children: s.jsx(o("WAWebCopyPasteSelectable.react").SelectableLink, {
          id: n,
          href: t,
          selectable: !0,
          onClick: a,
          "data-nohandle": r,
          children: t,
        }),
      });
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
