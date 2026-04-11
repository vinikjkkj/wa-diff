__d(
  "WAWebProductCatalogCheckCartEnabled",
  ["WAWebBusinessProfileCollection", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = o(
              "WAWebBusinessProfileCollection",
            ).BusinessProfileCollection.get(e);
          if (!n || n.stale) {
            var r = yield o(
              "WAWebBusinessProfileCollection",
            ).BusinessProfileCollection.update(e);
            n = Array.isArray(r) ? r[0] : r;
          }
          return (
            ((t = n.profileOptions) == null ? void 0 : t.cartEnabled) || !1
          );
        })),
        s.apply(this, arguments)
      );
    }
    l.default = e;
  },
  98,
);
