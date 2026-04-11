__d(
  "relay-runtime/network/RelayQueryResponseCache",
  ["invariant", "relay-runtime/util/stableCopy"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = n("relay-runtime/util/stableCopy"))).stableCopy,
      u = (function () {
        function e(e) {
          var t = e.size,
            n = e.ttl;
          (t > 0 || l(0, 1167, t),
            n > 0 || l(0, 1168, n),
            (this.$1 = new Map()),
            (this.$2 = t),
            (this.$3 = n));
        }
        var t = e.prototype;
        return (
          (t.clear = function () {
            this.$1.clear();
          }),
          (t.get = function (t, n) {
            var e = this,
              r = c(t, n);
            this.$1.forEach(function (t, n) {
              d(t.fetchTime, e.$3) || e.$1.delete(n);
            });
            var o = this.$1.get(r);
            return o == null
              ? null
              : Array.isArray(o.payload)
                ? o.payload.map(function (e) {
                    return babelHelpers.extends({}, e, {
                      extensions: babelHelpers.extends({}, e.extensions, {
                        cacheTimestamp: o.fetchTime,
                      }),
                    });
                  })
                : babelHelpers.extends({}, o.payload, {
                    extensions: babelHelpers.extends({}, o.payload.extensions, {
                      cacheTimestamp: o.fetchTime,
                    }),
                  });
          }),
          (t.set = function (t, n, r) {
            var e = Date.now(),
              o = c(t, n);
            if (
              (this.$1.delete(o),
              this.$1.set(o, { fetchTime: e, payload: r }),
              this.$1.size > this.$2)
            ) {
              var a = this.$1.keys().next();
              a.done || this.$1.delete(a.value);
            }
          }),
          e
        );
      })();
    function c(e, t) {
      return JSON.stringify(s({ queryID: e, variables: t }));
    }
    function d(e, t) {
      return e + t >= Date.now();
    }
    a.exports = u;
  },
  null,
);
