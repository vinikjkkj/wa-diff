__d(
  "AdsGenericFilterSet",
  ["LegacyImmutableObject"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {},
      s = [],
      u = ";",
      c = (function (t) {
        function n(n) {
          var r,
            o = [];
          switch (n.length) {
            case 0: {
              var a = new Error("AdsGenericFilterSet contains no filter");
              throw (a.stack, a);
            }
            case 1:
              (o.push(n[0]), (r = n[0].key));
              break;
            default:
              var i = {};
              ((s.length = 0),
                n.forEach(function (e) {
                  var t = e.key;
                  t in i || (o.push(e), (i[t] = !0), s.push(t));
                }),
                s.sort(),
                (r = s.join(u)));
          }
          return (
            (e.values = o),
            (e.key = "(" + r + ")"),
            t.call(this, e) || this
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var r = n.prototype;
        return (
          (r.toString = function () {
            return this.key;
          }),
          (r.toAPI = function () {
            for (var e = this.values, t = [], n = 0; n < e.length; n++) {
              var r = e[n].toAPI();
              r != null && t.push(r);
            }
            return t;
          }),
          (r.getCompleteFilters = function () {
            var e = this.values.filter(function (e) {
              return e.isComplete();
            });
            return e.length ? new this.constructor(e) : void 0;
          }),
          (r.getValues = function () {
            return this.values;
          }),
          n
        );
      })(r("LegacyImmutableObject"));
    l.default = c;
  },
  98,
);
