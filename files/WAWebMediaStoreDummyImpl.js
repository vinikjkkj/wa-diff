__d(
  "WAWebMediaStoreDummyImpl",
  ["Promise", "WAWebAbstractStore"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (function (t) {
        function r() {
          for (var e, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.name = "noop"),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(r, t);
        var o = r.prototype;
        return (
          (o.get = function (r) {
            return (e || (e = n("Promise"))).resolve();
          }),
          (o.queryByIndex = function (r, o) {
            return (e || (e = n("Promise"))).resolve([]);
          }),
          (o.getAll = function () {
            return (e || (e = n("Promise"))).resolve([]);
          }),
          (o.put = function (r, o) {
            return (e || (e = n("Promise"))).resolve(o);
          }),
          (o.del = function (r) {
            return (e || (e = n("Promise"))).resolve();
          }),
          (o.count = function () {
            return (e || (e = n("Promise"))).resolve(0);
          }),
          (o.clear = function () {
            return (e || (e = n("Promise"))).resolve();
          }),
          (o.setMaxSize = function (r) {
            return (e || (e = n("Promise"))).resolve();
          }),
          r
        );
      })(r("WAWebAbstractStore"));
    l.default = s;
  },
  98,
);
