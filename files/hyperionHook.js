__d(
  "hyperionHook",
  [],
  function (t, n, r, o, a, i) {
    var e = function () {},
      l = (function () {
        function t() {
          this.call = e;
        }
        var n = t.prototype;
        return (
          (n.hasCallback = function (n) {
            if (this.$1) {
              var t = this.$1;
              return (
                t.length > 0 &&
                (!n ||
                  t.some(function (e) {
                    return e === n || e.$2 === n;
                  }))
              );
            } else return n ? this.call === n : this.call !== e;
          }),
          (n.createMultiCallbackCall = function (t) {
            var e = function () {
              for (var e = t, n = 0, r = e.length; n < r; ++n)
                e[n].apply(this, arguments);
            };
            return e;
          }),
          (n.add = function (n, r) {
            var t = n;
            if (r) {
              var o = this,
                a = function () {
                  return (o.remove(a), n.apply(this, arguments));
                };
              ((a.$2 = n), (t = a));
            }
            return (
              this.call === e
                ? (this.call = t)
                : this.$1
                  ? this.$1.push(t)
                  : ((this.$1 = [this.call, t]),
                    (this.call = this.createMultiCallbackCall(this.$1))),
              n
            );
          }),
          (n.remove = function (t) {
            return this.removeIf(function (e) {
              return e === t;
            });
          }),
          (n.removeIf = function (n) {
            if (this.$1) {
              var t = this.$1.filter(function (e) {
                  return !n(e);
                }),
                r = this.$1.length > t.length;
              return (
                r &&
                  ((this.$1 = t),
                  (this.call = this.createMultiCallbackCall(this.$1))),
                r
              );
            } else return n(this.call) ? ((this.call = e), !0) : !1;
          }),
          (n.clear = function () {
            this.call === e || !this.$1
              ? (this.call = e)
              : (this.$1.length = 0);
          }),
          t
        );
      })();
    i.Hook = l;
  },
  66,
);
