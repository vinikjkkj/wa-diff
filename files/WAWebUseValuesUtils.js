__d(
  "WAWebUseValuesUtils",
  ["WAWebDummyCacheMap", "WAWebGetters", "lodash"],
  function (t, n, r, o, a, i, l) {
    var e = new (o("WAWebDummyCacheMap").FakeCacheMap)(),
      s = r("lodash").memoize(function (t) {
        return o("WAWebGetters").createGetterFactories({
          root: t,
          createCache: function () {
            return e;
          },
        });
      }),
      u = r("lodash").memoize(
        function (e) {
          var t = e[0].$$root,
            n = s(t),
            r = n.computed;
          return r(function (e) {
            return e;
          }, e);
        },
        function (e) {
          return e.map(m).join("-");
        },
      ),
      c = new WeakMap(),
      d = 0;
    function m(e) {
      var t = c.get(e);
      return (t == null && ((t = (d++).toString()), c.set(e, t)), t);
    }
    l.computedForComponent = u;
  },
  98,
);
