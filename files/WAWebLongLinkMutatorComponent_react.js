__d(
  "WAWebLongLinkMutatorComponent.react",
  [
    "WAWebCmd",
    "WAWebCopyPasteSelectable.react",
    "WAWebLongLinkPop.react",
    "WAWebModalManager",
    "WAWebStatusContext",
    "WAWebSuspiciousLinkMutatorComponent.react",
    "react",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = s.useContext,
      d = { link: { cursor: "x1ypdohk", $$css: !0 } };
    function m(t) {
      var n,
        a = t.children,
        i = a === void 0 ? "" : a,
        l = t.dataTab,
        s = t.link,
        m = t.selectable,
        p = t.xstyle,
        _ = c(o("WAWebStatusContext").StatusContext),
        f = _.statusItemViewEventRef;
      return (n = s.suspiciousCharacters) != null && n.size
        ? u.jsx(r("WAWebSuspiciousLinkMutatorComponent.react"), {
            className: (e || (e = r("stylex")))(p),
            link: s,
            selectable: m,
            children: i,
          })
        : u.jsx(o("WAWebCopyPasteSelectable.react").SelectableLink, {
            dataTab: l,
            onClick: function (t) {
              (t.preventDefault(),
                o("WAWebModalManager").ModalManager.open(
                  u.jsx(r("WAWebLongLinkPop.react"), {
                    link: s,
                    statusItemViewEventRef: f,
                  }),
                ),
                o("WAWebCmd").Cmd.openLongLinkModal());
            },
            selectable: m,
            className: (e || (e = r("stylex")))(d.link, p),
            children: i,
          });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  98,
);
