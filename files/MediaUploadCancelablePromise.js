__d(
  "MediaUploadCancelablePromise",
  ["Promise"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e,
      l = { cancel: function () {} },
      s = (function () {
        function t(t) {
          var r = this;
          ((this.$1 = !1),
            (this.promise = new (e || (e = n("Promise")))(function (e, n) {
              ((r.$2 = t(e, n)),
                r.$2 == null && (r.$2 = l),
                r.$1 && r.$2.cancel());
            })));
        }
        t.resolve = function (n) {
          return new t(function (e) {
            e(n);
          });
        };
        var r = t.prototype;
        return (
          (r.then = function (n) {
            var e = this;
            return new t(function (r, o) {
              var a = { cancelable: e };
              return (
                e.promise
                  .then(function (r) {
                    if (((a.cancelable = l), e.$1)) return r;
                    var o = n(r);
                    return o instanceof t ? ((a.cancelable = o), o.promise) : o;
                  })
                  .then(r)
                  .catch(function () {
                    ((a.cancelable = l), o.apply(void 0, arguments));
                  }),
                {
                  cancel: function () {
                    a.cancelable.cancel();
                  },
                }
              );
            });
          }),
          (r.isCanceled = function () {
            return this.$1;
          }),
          (r.cancel = function () {
            if (!this.$1) {
              var e;
              ((this.$1 = !0), (e = this.$2) == null || e.cancel());
            }
          }),
          t
        );
      })();
    i.default = s;
  },
  66,
);
