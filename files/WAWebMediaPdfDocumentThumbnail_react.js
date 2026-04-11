__d(
  "WAWebMediaPdfDocumentThumbnail.react",
  ["WAWebMediaOpaqueData", "justknobx", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e.useEffect,
      c = r("justknobx")._("5240");
    function d(e) {
      var t,
        n = o("react-compiler-runtime").c(11),
        a = e.mediaData,
        i = e.onLoad,
        l = (t = a.fullPreviewData) != null ? t : a.preview,
        d = l != null && l instanceof r("WAWebMediaOpaqueData") ? l : null,
        m,
        p;
      if (
        (n[0] !== d
          ? ((m = function () {
              var e,
                t = d;
              if (!(((e = t == null ? void 0 : t.size()) != null ? e : 0) < c))
                return (
                  t == null || t.retain(),
                  function () {
                    t == null || t.autorelease();
                  }
                );
            }),
            (p = [d]),
            (n[0] = d),
            (n[1] = m),
            (n[2] = p))
          : ((m = n[1]), (p = n[2])),
        u(m, p),
        !d || d.size() < c)
      )
        return null;
      var _, f;
      n[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = {
            className:
              "x5yr21d x1n2onr6 x183cysc xdj266r x11t971q xat24cr xvc5jky x1us6l5c xtea3wc",
          }),
          (f = { className: "x1s8dy9j x19kjcj4 x5yr21d x10l6tqk xh8yej3" }),
          (n[3] = _),
          (n[4] = f))
        : ((_ = n[3]), (f = n[4]));
      var g;
      n[5] !== d ? ((g = d.url()), (n[5] = d), (n[6] = g)) : (g = n[6]);
      var h;
      return (
        n[7] !== a.filename || n[8] !== i || n[9] !== g
          ? ((h = s.jsx(
              "div",
              babelHelpers.extends({}, _, {
                children: s.jsx(
                  "img",
                  babelHelpers.extends({}, f, {
                    src: g,
                    alt: a.filename,
                    onLoad: i,
                  }),
                ),
              }),
            )),
            (n[7] = a.filename),
            (n[8] = i),
            (n[9] = g),
            (n[10] = h))
          : (h = n[10]),
        h
      );
    }
    l.default = d;
  },
  98,
);
