__d(
  "WAWebFeatureDetectionDetectWebpSupport",
  ["WAPromiseTimeout", "WAWebBoolFunc", "WAWebMediaLoad"],
  function (t, n, r, o, a, i, l) {
    var e =
        "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA",
      s = o("WAPromiseTimeout")
        .promiseTimeout(
          new Promise(function (t) {
            o("WAWebMediaLoad")
              .loadImage(e)
              .then(function (e) {
                return t(e.height === 2);
              });
          }),
          5e3,
        )
        .catch(o("WAWebBoolFunc").returnFalse),
      u = null;
    async function c() {
      if (u != null) return Promise.resolve(u);
      var e = await s;
      return ((u = e), e);
    }
    function d() {
      return u;
    }
    ((l.detectWebpSupport = c), (l.getCachedWebpSupport = d));
  },
  98,
);
