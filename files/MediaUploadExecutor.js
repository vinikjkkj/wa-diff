__d(
  "MediaUploadExecutor",
  ["Promise"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e,
      l = (function () {
        function t(e) {
          (e === void 0 && (e = 1),
            (this.$1 = []),
            (this.$3 = 0),
            (this.$2 = e));
        }
        var r = t.prototype;
        return (
          (r.schedule = function (r) {
            var t = this;
            return new (e || (e = n("Promise")))(function (e) {
              var n = function () {
                var t = r();
                return (t.finally(e), t);
              };
              (t.$1.push(n), t.$4());
            });
          }),
          (r.$4 = function () {
            var e = this;
            if (!(this.$3 >= this.$2 || this.$1.length === 0)) {
              var t = this.$1.shift();
              t != null &&
                (t().finally(function () {
                  (e.$3--, e.$4());
                }),
                this.$3++);
            }
          }),
          t
        );
      })();
    i.default = l;
  },
  66,
);
