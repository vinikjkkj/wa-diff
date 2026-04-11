__d(
  "WAWebMediaStoreDummyImpl",
  ["Promise", "WAWebAbstractStore"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (function (t) {
        function r() {
          return t.apply(this, arguments) || this;
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
