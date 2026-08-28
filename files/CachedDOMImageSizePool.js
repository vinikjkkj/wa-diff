__d(
  "CachedDOMImageSizePool",
  ["debounce", "getDOMImageSize", "isFalsey"],
  function (t, n, r, o, a, i, l) {
    var e = (function () {
      function e(e, t, n) {
        var o = this;
        (n === void 0 && (n = !1),
          (this.$8 = function () {
            var e = o.$1,
              t = o.$2,
              n = o.$3,
              r = o.$4;
            if (n >= 0) {
              var a = Date.now();
              for (var i in e) {
                var l = e[i];
                a - l.lastAccessTime > o.$3 && (delete e[i], t--);
              }
            }
            if (t > r) {
              var s = Object.keys(e).sort(function (t, n) {
                  return e[t].lastAccessTime - e[n].lastAccessTime;
                }),
                u = s.slice(0, Math.ceil(r * 0.1));
              for (var c of u) (delete e[c], t--);
            }
            o.$2 = t;
          }),
          (this.$1 = {}),
          (this.$3 = t),
          (this.$2 = 0),
          (this.$4 = e),
          (this.$7 = n),
          (this.$5 = r("debounce")(this.$8, 5e3, this)),
          (this.$6 = {}));
      }
      var t = e.prototype;
      return (
        (t.get = function (t, n, o, a) {
          var e = this;
          a === void 0 && (a = t);
          var i = Object.freeze({ cacheKey: a, callback: n, context: o });
          if (r("isFalsey")(t) || r("isFalsey")(a)) return (n.call(o, 0, 0), i);
          var l = this.$1[a];
          return (
            l
              ? ((l.lastAccessTime = Date.now()), n.call(o, l.width, l.height))
              : this.$6[a]
                ? this.$6[a].push(i)
                : ((this.$6[a] = [i]),
                  r("getDOMImageSize")(
                    t,
                    function (t, n) {
                      return e.$9(t, n, a);
                    },
                    this,
                  )),
            i
          );
        }),
        (t.unsubscribe = function (t) {
          if (!r("isFalsey")(t.cacheKey)) {
            var e = this.$6[t.cacheKey];
            if (e) for (var n = 0; n < e.length; n++) e[n] === t && delete e[n];
          }
        }),
        (t.set = function (t, n, r) {
          var e = this.$1;
          if (t && !e[t]) {
            var o = { width: n, height: r, lastAccessTime: Date.now() };
            ((e[t] = o), this.$2++);
          }
          this.$2 > this.$4 && this.$5();
        }),
        (t.$9 = function (t, n, r) {
          this.set(r, t, n);
          var e = this.$6[r];
          for (var o of e) o && o.callback.call(o.context, t, n);
          delete this.$6[r];
        }),
        (t.getCache = function () {
          return (this.$7 && this.$8(), this.$1);
        }),
        (t.loadCache = function (t) {
          for (var e of Object.entries(t)) {
            var n = e[0],
              r = e[1];
            this.set(n, r.width, r.height);
          }
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
