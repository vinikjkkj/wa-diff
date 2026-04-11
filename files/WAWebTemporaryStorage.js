__d(
  "WAWebTemporaryStorage",
  [
    "Promise",
    "WANullthrows",
    "WATypeUtils",
    "WAWebSessionStorage",
    "WAWebUserPrefsKeys",
    "lodash",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (function () {
        function t() {
          this.dataStore = {};
        }
        var o = t.prototype;
        return (
          (o.setItem = function (t, n) {
            ((this.dataStore[t] = n),
              r("WANullthrows")(r("WAWebSessionStorage")).setItem(t, n));
          }),
          (o.getItem = function (t, n) {
            return (
              n === void 0 && (n = !1),
              this.dataStore[t] == null || n
                ? r("WANullthrows")(r("WAWebSessionStorage")).getItem(t)
                : this.dataStore[t]
            );
          }),
          (o.removeItem = function (t) {
            (delete this.dataStore[t],
              r("WANullthrows")(r("WAWebSessionStorage")).removeItem(t));
          }),
          (o.clear = function (o) {
            return (
              (this.dataStore = {}),
              r("WANullthrows")(r("WAWebSessionStorage")).clear(),
              o &&
                r("lodash").forOwn(o, function (e, t) {
                  r("WANullthrows")(r("WAWebSessionStorage")).setItem(t, e);
                }),
              (e || (e = n("Promise"))).resolve()
            );
          }),
          t
        );
      })(),
      u = (function () {
        function t() {
          this.dataStore = {};
        }
        var r = t.prototype;
        return (
          (r.setItem = function (t, n) {
            this.dataStore[t] = n;
          }),
          (r.getItem = function (t) {
            return this.dataStore[t] === void 0 ? null : this.dataStore[t];
          }),
          (r.removeItem = function (t) {
            delete this.dataStore[t];
          }),
          (r.clear = function () {
            return ((this.dataStore = {}), (e || (e = n("Promise"))).resolve());
          }),
          t
        );
      })(),
      c = function () {
        try {
          var e = r("WANullthrows")(r("WAWebSessionStorage"));
          return (
            e.setItem(
              o("WAWebUserPrefsKeys").KEYS.STORAGE_TEST,
              o("WAWebUserPrefsKeys").KEYS.STORAGE_TEST,
            ),
            o("WATypeUtils").isFunction(e.clear)
          );
        } catch (e) {
          return !1;
        }
      },
      d = c() ? new s() : new u(),
      m = d;
    l.default = m;
  },
  98,
);
