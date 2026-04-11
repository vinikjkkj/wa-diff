__d(
  "CancelablePromise",
  ["Promise", "promiseDone"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (function () {
        function t(t) {
          var o = this;
          ((this.$1 = new (e || (e = n("Promise")))(function (e, n) {
            ((o.$3 = n),
              r("promiseDone")(
                t
                  .then(function (t) {
                    return o.$2
                      ? n({ isCanceled: !0, message: "canceled", result: t })
                      : e(t);
                  })
                  .catch(function (e) {
                    return o.$2
                      ? n({ isCanceled: !0, message: "canceled" })
                      : n(e);
                  }),
              ));
          })),
            (this.$2 = !1));
        }
        var o = t.prototype;
        return (
          (o.getPromise = function () {
            return this.$1;
          }),
          (o.cancel = function () {
            this.$2 = !0;
          }),
          (o.reject = function (t) {
            var e;
            (this.cancel(), (e = this.$3) == null || e.call(this, t));
          }),
          t
        );
      })();
    l.default = s;
  },
  98,
);
