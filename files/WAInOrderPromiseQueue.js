__d(
  "WAInOrderPromiseQueue",
  ["Promise", "WAAbortError", "WAPromiseRaceAbort"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (function () {
        function t() {
          ((this.$1 = (e || (e = n("Promise"))).resolve()), (this.$2 = []));
        }
        var a = t.prototype;
        return (
          (a.enqueue = function (t) {
            var e,
              n = this;
            t.catch(function () {});
            var a = function () {
              return t;
            };
            (e = this.$3) != null || (this.$3 = new AbortController());
            var i = this.$3.signal;
            this.$1 = this.$1.then(a, a);
            var l = r("WAPromiseRaceAbort")(this.$1, i).catch(
              o("WAAbortError").catchAbort(function (e) {
                var t;
                throw (t = n.$4) != null ? t : e;
              }),
            );
            return (
              this.$2.push(l),
              l.finally(function () {
                n.$2.length > 0 && n.$2[0] === l && (n.$2 = n.$2.slice(1));
              })
            );
          }),
          (a.cancelAll = function (t) {
            var e;
            ((this.$4 = t),
              (this.$2 = []),
              (e = this.$3) == null || e.abort(),
              (this.$3 = null));
          }),
          t
        );
      })();
    l.default = s;
  },
  98,
);
