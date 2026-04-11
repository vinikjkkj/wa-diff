__d(
  "WAWebSuspiciousLinkMutatorComponent.react",
  [
    "WAWebCmd",
    "WAWebCopyPasteSelectable.react",
    "WAWebModalManager",
    "WAWebSuspiciousLinkPopup.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(13),
        n = e.children,
        a = e.className,
        i = e.dataTab,
        l = e.link,
        u = e.onClick,
        c = e.selectable,
        d = n === void 0 ? "" : n,
        m;
      t[0] !== l || t[1] !== u
        ? ((m = function () {
            (o("WAWebModalManager").ModalManager.open(
              s.jsx(r("WAWebSuspiciousLinkPopup.react"), { link: l }),
            ),
              o("WAWebCmd").Cmd.openLongLinkModal(),
              u == null || u());
          }),
          (t[0] = l),
          (t[1] = u),
          (t[2] = m))
        : (m = t[2]);
      var p;
      t[3] !== u
        ? ((p = function (t) {
            u == null || u();
          }),
          (t[3] = u),
          (t[4] = p))
        : (p = t[4]);
      var _;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = { cursor: "pointer" }), (t[5] = _))
        : (_ = t[5]);
      var f;
      return (
        t[6] !== d ||
        t[7] !== a ||
        t[8] !== i ||
        t[9] !== c ||
        t[10] !== m ||
        t[11] !== p
          ? ((f = s.jsx(o("WAWebCopyPasteSelectable.react").SelectableLink, {
              className: a,
              onClick: m,
              onContextMenu: p,
              selectable: c,
              style: _,
              dataTab: i,
              children: d,
            })),
            (t[6] = d),
            (t[7] = a),
            (t[8] = i),
            (t[9] = c),
            (t[10] = m),
            (t[11] = p),
            (t[12] = f))
          : (f = t[12]),
        f
      );
    }
    l.default = u;
  },
  98,
);
