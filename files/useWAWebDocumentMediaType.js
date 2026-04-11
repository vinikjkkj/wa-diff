__d(
  "useWAWebDocumentMediaType",
  ["WAWebFileUtils", "WAWebMimeTypes", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = o("react"))).useMemo;
    function u(e) {
      var t,
        n = o("react-compiler-runtime").c(8),
        r = e.filename,
        a = e.mimetype,
        i,
        l;
      if (
        Object.prototype.hasOwnProperty.call(
          o("WAWebMimeTypes").DOCUMENT_MIMETYPES,
          a,
        )
      ) {
        var s;
        if (n[0] !== a) {
          var u;
          ((s =
            (u = o("WAWebMimeTypes").DOCUMENT_MIMETYPES[a]) == null ||
            (u = u.ext) == null
              ? void 0
              : u.toLowerCase()),
            (n[0] = a),
            (n[1] = s));
        } else s = n[1];
        ((i = s), (l = a));
      }
      var c;
      n[2] !== r
        ? ((c = r ? o("WAWebFileUtils").getFileExtension(r) : null),
          (n[2] = r),
          (n[3] = c))
        : (c = n[3]);
      var d = c;
      if (i == null || (d != null && i !== d)) {
        var m;
        ((i = d),
          (l =
            i != null &&
            (m =
              o("WAWebMimeTypes").EXT_TO_MIME == null
                ? void 0
                : o("WAWebMimeTypes").EXT_TO_MIME[i]) != null
              ? m
              : null));
      }
      var p =
        l != null
          ? (t = o("WAWebMimeTypes").DOCUMENT_MIMETYPES[l]) == null
            ? void 0
            : t.icon
          : null;
      p == null && (p = "icon-doc-generic");
      var _;
      return (
        n[4] !== i || n[5] !== p || n[6] !== l
          ? ((_ = { ext: i, mime: l, icon: p }),
            (n[4] = i),
            (n[5] = p),
            (n[6] = l),
            (n[7] = _))
          : (_ = n[7]),
        _
      );
    }
    l.default = u;
  },
  98,
);
