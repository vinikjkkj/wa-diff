__d(
  "WAWebSuspiciousLinkMutatorComponent.react",
  [
    "WAWebCmd",
    "WAWebCopyPasteSelectable.react",
    "WAWebModalManager",
    "WAWebSuspiciousLinkPopup.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.children,
        n = t === void 0 ? "" : t,
        a = e.className,
        i = e.dataTab,
        l = e.link,
        u = e.onClick,
        c = e.selectable;
      return s.jsx(o("WAWebCopyPasteSelectable.react").SelectableLink, {
        className: a,
        onClick: function () {
          (o("WAWebModalManager").ModalManager.open(
            s.jsx(r("WAWebSuspiciousLinkPopup.react"), { link: l }),
          ),
            o("WAWebCmd").Cmd.openLongLinkModal(),
            u == null || u());
        },
        onContextMenu: function (t) {
          u == null || u();
        },
        selectable: c,
        style: { cursor: "pointer" },
        dataTab: i,
        children: n,
      });
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
