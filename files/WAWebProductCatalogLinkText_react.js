__d(
  "WAWebProductCatalogLinkText.react",
  ["WAWebCopyPasteSelectable.react", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(6),
        n = e.href,
        r = e.id,
        a = e.noHandle,
        i = e.onClick,
        l;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = { className: "x1vvkbs xeaf4i8" }), (t[0] = l))
        : (l = t[0]);
      var u;
      return (
        t[1] !== n || t[2] !== r || t[3] !== a || t[4] !== i
          ? ((u = s.jsx(
              "span",
              babelHelpers.extends({}, l, {
                children: s.jsx(
                  o("WAWebCopyPasteSelectable.react").SelectableLink,
                  {
                    id: r,
                    href: n,
                    selectable: !0,
                    onClick: i,
                    "data-nohandle": a,
                    children: n,
                  },
                ),
              }),
            )),
            (t[1] = n),
            (t[2] = r),
            (t[3] = a),
            (t[4] = i),
            (t[5] = u))
          : (u = t[5]),
        u
      );
    }
    l.default = u;
  },
  98,
);
