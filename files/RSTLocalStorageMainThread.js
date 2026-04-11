__d(
  "RSTLocalStorageMainThread",
  ["FBLogger", "WebStorage", "fb-error"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = "RSTData",
      u = 200,
      c = 2880 * 60 * 1e3,
      d = (function () {
        function t() {
          ((this.$2 = !0),
            (this.$1 = (e || (e = r("WebStorage"))).getLocalStorage()),
            this.probeAndInit());
        }
        var n = t.prototype;
        return (
          (n.$3 = function (t, n) {
            var e = r("fb-error").getErrorSafe(t);
            r("FBLogger")("responsive-tracker")
              .catching(e)
              .warn("%s error in RSTLocalStorage", n);
          }),
          (n.$4 = function () {
            if (!this.$2) return {};
            try {
              var e,
                t = (e = this.$1) == null ? void 0 : e.getItem(s),
                n = t != null ? JSON.parse(t) : {};
              return typeof n == "object" && n !== null ? n : {};
            } catch (e) {
              return (this.$3(e, "readStore"), {});
            }
          }),
          (n.$5 = function (t) {
            if (this.$2)
              try {
                var e;
                (e = this.$1) == null || e.setItem(s, JSON.stringify(t));
              } catch (e) {
                this.$3(e, "writeStore");
                return;
              }
          }),
          (n.probeAndInit = function () {
            if (this.$1 == null) {
              this.$2 = !1;
              return;
            }
            var e = this.$1;
            try {
              var t = e.getItem(s);
              if (t != null) return;
              e.setItem(s, "{}");
            } catch (e) {
              (this.$3(e, "probeAndInit"), (this.$2 = !1));
            }
          }),
          (n.cleanUpExpiredEntries = function () {
            if (this.$2)
              try {
                var e = this.$6(this.$4());
                this.$5(e);
              } catch (e) {
                this.$3(e, "cleanUpExpiredEntries");
                return;
              }
          }),
          (n.$6 = function (t) {
            var e = Date.now();
            for (var n of Object.entries(t)) {
              var r = n[0],
                o = n[1];
              (e - o.lastWriteTime > c || typeof o.lastWriteTime != "number") &&
                delete t[r];
            }
            return t;
          }),
          (n.$7 = function (t) {
            var e = Object.entries(t);
            if (e.length <= u) return t;
            e.sort(function (e, t) {
              return e[1].lastWriteTime - t[1].lastWriteTime;
            });
            var n = e.slice(e.length - u);
            return Object.fromEntries(n);
          }),
          (n.set = function (t, n) {
            if (this.$2) {
              var e = this.$4();
              ((e = this.$6(e)),
                (e[t] = { value: n, lastWriteTime: Date.now() }),
                (e = this.$7(e)),
                this.$5(e));
            }
          }),
          (n.get = function (t) {
            if (!this.$2) return null;
            var e = this.$4(),
              n = e[t];
            return n ? n.value : null;
          }),
          (n.delete = function (t) {
            try {
              if (!this.$2) return;
              var e = this.$4();
              (delete e[t], this.$5(e));
            } catch (e) {
              this.$3(e, "delete");
              return;
            }
          }),
          (n.has = function (t) {
            if (!this.$2) return !1;
            var e = this.$4(),
              n = e[t];
            return n ? Date.now() - n.lastWriteTime <= c : !1;
          }),
          (n.clear = function () {
            this.$2 && this.$5({});
          }),
          (n.keys = function () {
            if (!this.$2) return [];
            var e = this.$6(this.$4());
            return Object.keys(e);
          }),
          (n.entries = function () {
            if (!this.$2) return [];
            var e = this.$6(this.$4());
            return Object.entries(e).map(function (e) {
              var t = e[0],
                n = e[1];
              return [t, n.value];
            });
          }),
          t
        );
      })(),
      m = new d(),
      p = m;
    l.default = p;
  },
  98,
);
