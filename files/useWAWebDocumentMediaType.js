__d(
  "useWAWebDocumentMediaType",
  ["WAWebFileUtils", "WAWebMimeTypes", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = o("react"))).useMemo;
    function u(e) {
      var t = e.filename,
        n = e.mimetype;
      return s(
        function () {
          var e, r, a;
          if (
            Object.prototype.hasOwnProperty.call(
              o("WAWebMimeTypes").DOCUMENT_MIMETYPES,
              n,
            )
          ) {
            var i;
            ((r =
              (i = o("WAWebMimeTypes").DOCUMENT_MIMETYPES[n]) == null ||
              (i = i.ext) == null
                ? void 0
                : i.toLowerCase()),
              (a = n));
          }
          var l = t ? o("WAWebFileUtils").getFileExtension(t) : null;
          if (r == null || (l != null && r !== l)) {
            var s;
            ((r = l),
              (a =
                r != null &&
                (s =
                  o("WAWebMimeTypes").EXT_TO_MIME == null
                    ? void 0
                    : o("WAWebMimeTypes").EXT_TO_MIME[r]) != null
                  ? s
                  : null));
          }
          var u =
            a != null
              ? (e = o("WAWebMimeTypes").DOCUMENT_MIMETYPES[a]) == null
                ? void 0
                : e.icon
              : null;
          return (
            u == null && (u = "icon-doc-generic"),
            { ext: r, mime: a, icon: u }
          );
        },
        [n, t],
      );
    }
    l.default = u;
  },
  98,
);
