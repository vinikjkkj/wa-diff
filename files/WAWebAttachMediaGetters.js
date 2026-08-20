__d(
  "WAWebAttachMediaGetters",
  [
    "WAWebFileUtils",
    "WAWebGetters",
    "WAWebGettersCaches",
    "WAWebMediaOpaqueData",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebGetters").createGetterFactories({
        createCache: o("WAWebGettersCaches").createAttachMediaCache,
      }),
      s = e.clearCacheFor,
      u = e.computed,
      c = e.field,
      d = e.unsafeIdentityGetter,
      m = s,
      p = d,
      _ = c("file"),
      f = c("filename"),
      g = u(
        function (e) {
          var t = e[0];
          return t instanceof r("WAWebMediaOpaqueData")
            ? t.size()
            : t instanceof Blob
              ? t.size
              : null;
        },
        [_],
      ),
      h = u(
        function (e) {
          var t = e[0];
          return t ? o("WAWebFileUtils").getFileExtension(t) : null;
        },
        [f],
      );
    ((l.clearAttachMediaGetterCacheFor = m),
      (l.getAttachMediaUnsafe = p),
      (l.getFile = _),
      (l.getFilename = f),
      (l.getFilesize = g),
      (l.getFileExt = h));
  },
  98,
);
