__d(
  "WAWebFeatureDetectionDetectWebpSupport",
  [
    "Promise",
    "WAPromiseTimeout",
    "WAWebBoolFunc",
    "WAWebMediaLoad",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s =
        "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA",
      u = o("WAPromiseTimeout")
        .promiseTimeout(
          new (e || (e = n("Promise")))(function (e) {
            o("WAWebMediaLoad")
              .loadImage(s)
              .then(function (t) {
                return e(t.height === 2);
              });
          }),
          5e3,
        )
        .catch(o("WAWebBoolFunc").returnFalse),
      c = null;
    function d() {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (c != null) return (e || (e = n("Promise"))).resolve(c);
          var t = yield u;
          return ((c = t), t);
        })),
        m.apply(this, arguments)
      );
    }
    function p() {
      return c;
    }
    ((l.detectWebpSupport = d), (l.getCachedWebpSupport = p));
  },
  98,
);
