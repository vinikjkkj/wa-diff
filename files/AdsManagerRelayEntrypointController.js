__d(
  "AdsManagerRelayEntrypointController",
  ["AdsManagerRelayEnvironment", "RelayHooks", "stableStringify"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e, t, n) {
        var o, a;
        (t === void 0 && (t = r("AdsManagerRelayEnvironment")),
          (this.$3 = null),
          (this.$4 = null),
          (this.$5 = !1),
          (this.$6 = !1),
          (this.$7 = 0),
          (this.$8 = new Map()),
          (this.$2 = t),
          (this.$1 = e),
          (this.$6 =
            (o = n == null ? void 0 : n.shouldRetainPreviousEntrypoints) != null
              ? o
              : !1),
          (this.$7 =
            (a = n == null ? void 0 : n.maxRetainedEntrypoints) != null
              ? a
              : 10));
      }
      var t = e.prototype;
      return (
        (t.$9 = function () {
          var e;
          ((e = this.$3) == null || e.dispose(),
            (this.$3 = null),
            (this.$4 = null));
        }),
        (t.$10 = function (t) {
          var e = this,
            n = r("stableStringify")(t);
          if (this.$4 !== n) {
            if (this.$6) {
              var a = this.$8.get(n);
              if (a != null) {
                (this.$3 != null &&
                  this.$4 != null &&
                  this.$8.set(this.$4, this.$3),
                  this.$8.delete(n),
                  (this.$3 = a),
                  (this.$4 = n));
                return;
              }
              for (
                this.$3 != null &&
                this.$4 != null &&
                this.$8.set(this.$4, this.$3);
                this.$8.size > this.$7;
              ) {
                var i = !1;
                for (var l of this.$8.keys())
                  if (l !== this.$4) {
                    var s;
                    ((s = this.$8.get(l)) == null || s.dispose(),
                      this.$8.delete(l),
                      (i = !0));
                    break;
                  }
                if (!i) break;
              }
            } else this.$3 != null && this.$9();
            ((this.$3 = o("RelayHooks").loadEntryPoint(
              {
                getEnvironment: function () {
                  return e.$2;
                },
              },
              this.$1,
              t,
            )),
              (this.$4 = n));
          }
        }),
        (t.preloadEntrypoint = function (t) {
          this.$10(t);
        }),
        (t.loadEntrypointForDisplay = function (t) {
          (this.$10(t), (this.$5 = !0));
        }),
        (t.dispose = function (t) {
          if ((t === void 0 && (t = !1), t)) {
            this.$9();
            for (var e of this.$8) {
              var n = e[1];
              n.dispose();
            }
            this.$8.clear();
          }
          this.$5 = !1;
        }),
        (t.getEntrypointReferenceForDisplay = function () {
          return this.$5 ? this.$3 : null;
        }),
        (t.getEntrypointReference__DO_NOT_USE = function () {
          return this.$3;
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
