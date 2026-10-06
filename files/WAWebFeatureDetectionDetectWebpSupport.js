__d(
  "WAWebFeatureDetectionDetectWebpSupport",
  ["WAPromiseTimeout", "WAWebBoolFunc", "WAWebMediaLoad"],
  function (t, n, r, o, a, i, l) {
    var e =
        "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA",
      s = 3e4,
      u = null,
      c = null;
    function d() {
      return (
        u == null &&
          (u = o("WAPromiseTimeout")
            .promiseTimeout(
              o("WAWebMediaLoad")
                .loadImage(e)
                .then(function (e) {
                  return e.height === 2;
                }),
              s,
            )
            .catch(o("WAWebBoolFunc").returnFalse)
            .then(function (e) {
              return ((c = e), e);
            })),
        u
      );
    }
    function m() {
      return c;
    }
    ((l.detectWebpSupport = d), (l.getCachedWebpSupport = m));
  },
  98,
);
