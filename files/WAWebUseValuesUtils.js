__d(
  "WAWebUseValuesUtils",
  ["WAMemoizeCache", "WAWebDummyCacheMap", "WAWebGetters"],
  function (t, n, r, o, a, i, l) {
    var e = new (o("WAWebDummyCacheMap").FakeCacheMap)(),
      s = o("WAMemoizeCache").memoizeWithArgs(function (t) {
        return o("WAWebGetters").createGetterFactories({
          root: t,
          createCache: function () {
            return e;
          },
        });
      }, m),
      u = o("WAMemoizeCache").memoizeWithArgs(
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
