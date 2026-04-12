__d(
  "WAWebMediaPdfDocumentThumbnail.react",
  ["WAWebMediaOpaqueData", "justknobx", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e.useEffect,
      c = r("justknobx")._("5240");
    function d(e) {
      var t,
        n = e.mediaData,
        o = e.onLoad,
        a = (t = n.fullPreviewData) != null ? t : n.preview,
        i = a != null && a instanceof r("WAWebMediaOpaqueData") ? a : null;
      return (
        u(
          function () {
            var e,
              t = i;
            if (!(((e = t == null ? void 0 : t.size()) != null ? e : 0) < c))
              return (
                t == null || t.retain(),
                function () {
                  t == null || t.autorelease();
                }
              );
          },
          [i],
        ),
        !i || i.size() < c
          ? null
          : s.jsx("div", {
              className:
                "x5yr21d x1n2onr6 x183cysc xdj266r x11t971q xat24cr xvc5jky x1us6l5c xtea3wc",
              children: s.jsx("img", {
                className: "x1s8dy9j x19kjcj4 x5yr21d x10l6tqk xh8yej3",
                src: i.url(),
                alt: n.filename,
                onLoad: o,
              }),
            })
      );
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  98,
);
