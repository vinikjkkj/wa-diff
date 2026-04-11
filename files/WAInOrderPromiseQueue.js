__d(
  "WAInOrderPromiseQueue",
  ["Promise", "WAAbortError", "WAPromiseRaceAbort"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (function () {
        function t() {
          ((this.$1 = (e || (e = n("Promise"))).resolve()),
            (this.$3 = new AbortController()),
            (this.$2 = []));
        }
        var a = t.prototype;
        return (
          (a.enqueue = function (t) {
            var e = this;
            t.catch(function () {});
            var n = function () {
                return t;
              },
              a = this.$3.signal;
            this.$1 = this.$1.then(n, n);
            var i = r("WAPromiseRaceAbort")(this.$1, a).catch(
              o("WAAbortError").catchAbort(function (t) {
                var n;
                throw (n = e.$4) != null ? n : t;
              }),
            );
            return (
              this.$2.push(i),
              i.finally(function () {
                e.$2.length > 0 && e.$2[0] === i && e.$2.shift();
              })
            );
          }),
          (a.cancelAll = function (t) {
            ((this.$4 = t),
              (this.$2 = []),
              this.$3.abort(),
              (this.$3 = new AbortController()));
          }),
          t
        );
      })();
    l.default = s;
  },
  98,
);
