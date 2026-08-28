__d(
  "AdsEmptyValue",
  ["AdsUniformValue"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (function (t) {
        function n() {
          var n;
          return (
            (n = t.call(this, void 0) || this),
            e == null && (e = n),
            e || babelHelpers.assertThisInitialized(n)
          );
        }
        (babelHelpers.inheritsLoose(n, t),
          (n.create = function (t) {
            return t.every(function (e) {
              return (
                e == null ||
                e === "" ||
                (Array.isArray(e) && !e.length) ||
                (e[
                  typeof Symbol == "function" ? Symbol.iterator : "@@iterator"
                ] &&
                  e.size === 0) ||
                (typeof e == "object" &&
                  e != null &&
                  Object.prototype.toString.call(e) === "[object Object]" &&
                  !Object.keys(e).length)
              );
            })
              ? n.instance()
              : null;
          }),
          (n.instance = function () {
            return e != null ? e : new n();
          }));
        var r = n.prototype;
        return (
          (r.getValue = function () {}),
          (r.getValueForIndex = function (t) {}),
          (r.getValues = function () {
            return [];
          }),
          (r.map = function (t, n) {
            return this;
          }),
          (r.hashCode = function () {
            return 0;
          }),
          (r.equals = function (t) {
            return t.getValues().length === 0;
          }),
          (r.match = function (t) {
            return t.Empty();
          }),
          n
        );
      })(r("AdsUniformValue"));
    l.default = s;
  },
  98,
);
