__d(
  "WAWebMediaStoreMetaInfo",
  [
    "WAWebLruMediaStorage",
    "WAWebMediaLruIdbStoreUtils",
    "WAWebSchemaLruMediaMetaInfo",
    "WAWebSizeLruObjectStore",
  ],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t(t, n) {
        var a,
          i = {
            primaryIndex: (a = o("WAWebSchemaLruMediaMetaInfo"))
              .metaInfoPrimaryIndex,
            dateIndex: a.metaInfoDateIndex,
            sizeIndex: a.metaInfoSizeIndex,
            maxSize: t,
            dispose: n,
          },
          l = new (r("WAWebMediaLruIdbStoreUtils"))(
            o("WAWebLruMediaStorage").initialize,
            a.IdbMetaInfoTable,
          );
        return e.call(this, l, i) || this;
      }
      return (babelHelpers.inheritsLoose(t, e), t);
    })(r("WAWebSizeLruObjectStore"));
    l.default = e;
  },
  98,
);
