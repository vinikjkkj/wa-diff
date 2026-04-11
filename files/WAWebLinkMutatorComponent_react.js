__d(
  "WAWebLinkMutatorComponent.react",
  ["WAWebCopyPasteSelectable.react", "react", "react-compiler-runtime"],
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
      var t = o("react-compiler-runtime").c(11),
        n = e.children,
        r = e.className,
        a = e.dataTab,
        i = e.href,
        l = e.onClick,
        c = e.selectable,
        d = n === void 0 ? "" : n,
        m,
        p;
      t[0] !== l
        ? ((m = function (t) {
            l == null || l();
          }),
          (p = function (t) {
            l == null || l();
          }),
          (t[0] = l),
          (t[1] = m),
          (t[2] = p))
        : ((m = t[1]), (p = t[2]));
      var _;
      return (
        t[3] !== d ||
        t[4] !== r ||
        t[5] !== a ||
        t[6] !== i ||
        t[7] !== c ||
        t[8] !== m ||
        t[9] !== p
          ? ((_ = s.jsx(o("WAWebCopyPasteSelectable.react").SelectableLink, {
              onClick: m,
              onContextMenu: p,
              className: r,
              xstyle: u.link,
              href: i,
              title: i,
              target: "_blank",
              rel: "noopener noreferrer",
              selectable: c,
              dataTab: a,
              children: d,
            })),
            (t[3] = d),
            (t[4] = r),
            (t[5] = a),
            (t[6] = i),
            (t[7] = c),
            (t[8] = m),
            (t[9] = p),
            (t[10] = _))
          : (_ = t[10]),
        _
      );
    }
    l.default = c;
  },
  98,
);
