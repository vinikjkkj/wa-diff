__d(
  "WAWebBaseCachePolicy",
  ["WAWebEventEmitter"],
  function (t, n, r, o, a, i, l) {
    var e = { LOAD: "LOAD", NONE: "NONE" },
      s = (function (e) {
        function t(t, n) {
          var r;
          return (
            (r = e.call(this) || this),
            (r.collection = t),
            (r.id = n),
            r
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.enableCaching = function () {}),
          (n.disableCaching = function () {}),
          t
        );
      })(r("WAWebEventEmitter"));
    ((s.policy = e.NONE), (l.CACHE_POLICY = e), (l.BaseCachePolicy = s));
  },
  98,
);
