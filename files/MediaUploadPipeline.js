__d(
  "MediaUploadPipeline",
  ["MediaUploadCancelablePromise", "MediaUploadOperationOutcome"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
        function e(e, t) {
          var n = this;
          ((this.$2 = []),
            (this.$3 = null),
            (this.$2 = e),
            (this.$1 = t),
            (this.cancelablePromise = new (r("MediaUploadCancelablePromise"))(
              function (e, t) {
                return (
                  n.$4(e, t, [].concat(n.$2)),
                  {
                    cancel: function () {
                      var t;
                      ((t = n.$3) == null || t.cancel(),
                        (n.$3 = null),
                        e(r("MediaUploadOperationOutcome").CANCELED));
                    },
                  }
                );
              },
            )));
        }
        var t = e.prototype;
        return (
          (t.$4 = function (t, n, o) {
            var e = this;
            if (o.length === 0)
              ((this.$3 = null), t(r("MediaUploadOperationOutcome").SUCCESS));
            else {
              var a = o.shift(),
                i = a();
              (this.$1.promiseTerminator(
                i.promise
                  .then(function (a) {
                    e.cancelablePromise.isCanceled()
                      ? t(r("MediaUploadOperationOutcome").CANCELED)
                      : a === r("MediaUploadOperationOutcome").SUCCESS
                        ? e.$4(t, n, o)
                        : t(a);
                  })
                  .catch(n),
              ),
                (this.$3 = i));
            }
          }),
          e
        );
      })(),
      s = (function () {
        function t(e) {
          ((this.$2 = []), (this.$1 = e));
        }
        var n = t.prototype;
        return (
          (n.addCancelableStep = function (t) {
            this.$2.push(t);
          }),
          (n.addPlainStep = function (t) {
            this.$2.push(function () {
              return new (r("MediaUploadCancelablePromise"))(function (e) {
                e(t());
              });
            });
          }),
          (n.run = function () {
            var t = new e(this.$2, this.$1);
            return t.cancelablePromise;
          }),
          t
        );
      })();
    l.default = s;
  },
  98,
);
