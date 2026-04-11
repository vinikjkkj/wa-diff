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
    "react-compiler-runtime",
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
        a = o("react-compiler-runtime").c(18),
        i = t.children,
        l = t.dataTab,
        s = t.link,
        m = t.selectable,
        p = t.xstyle,
        _ = i === void 0 ? "" : i,
        f = c(o("WAWebStatusContext").StatusContext),
        g = f.statusItemViewEventRef;
      if ((n = s.suspiciousCharacters) != null && n.size) {
        var h;
        a[0] !== p
          ? ((h = (e || (e = r("stylex")))(p)), (a[0] = p), (a[1] = h))
          : (h = a[1]);
        var y;
        return (
          a[2] !== _ || a[3] !== s || a[4] !== m || a[5] !== h
            ? ((y = u.jsx(r("WAWebSuspiciousLinkMutatorComponent.react"), {
                className: h,
                link: s,
                selectable: m,
                children: _,
              })),
              (a[2] = _),
              (a[3] = s),
              (a[4] = m),
              (a[5] = h),
              (a[6] = y))
            : (y = a[6]),
          y
        );
      }
      var C;
      a[7] !== s || a[8] !== g
        ? ((C = function (t) {
            (t.preventDefault(),
              o("WAWebModalManager").ModalManager.open(
                u.jsx(r("WAWebLongLinkPop.react"), {
                  link: s,
                  statusItemViewEventRef: g,
                }),
              ),
              o("WAWebCmd").Cmd.openLongLinkModal());
          }),
          (a[7] = s),
          (a[8] = g),
          (a[9] = C))
        : (C = a[9]);
      var b;
      a[10] !== p
        ? ((b = (e || (e = r("stylex")))(d.link, p)), (a[10] = p), (a[11] = b))
        : (b = a[11]);
      var v;
      return (
        a[12] !== _ || a[13] !== l || a[14] !== m || a[15] !== C || a[16] !== b
          ? ((v = u.jsx(o("WAWebCopyPasteSelectable.react").SelectableLink, {
              dataTab: l,
              onClick: C,
              selectable: m,
              className: b,
              children: _,
            })),
            (a[12] = _),
            (a[13] = l),
            (a[14] = m),
            (a[15] = C),
            (a[16] = b),
            (a[17] = v))
          : (v = a[17]),
        v
      );
    }
    l.default = m;
  },
  98,
);
