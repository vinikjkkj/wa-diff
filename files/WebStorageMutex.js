__d(
  "WebStorageMutex",
  ["WebStorage", "clearTimeout", "pageID", "setTimeout"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = null,
      u = !1,
      c = r("pageID");
    function d() {
      return (
        u || ((u = !0), (s = (e || (e = r("WebStorage"))).getLocalStorage())),
        s
      );
    }
    var m = (function () {
      function t(e) {
        this.name = e;
      }
      t.testSetPageID = function (t) {
        c = t;
      };
      var n = t.prototype;
      return (
        (n.$2 = function () {
          var e = d();
          if (!e) return c;
          var t = e.getItem("mutex_" + this.name);
          return (
            (t = (t != null ? t : "").split(":")),
            t && parseInt(t[1], 10) >= Date.now() ? t[0] : null
          );
        }),
        (n.$3 = function (n) {
          var t = d();
          if (t) {
            var o = n == null ? 1e3 : n,
              a = Date.now() + o;
            (e || (e = r("WebStorage"))).setItemGuarded(
              t,
              "mutex_" + this.name,
              c + ":" + a,
            );
          }
        }),
        (n.hasLock = function () {
          return this.$2() === c;
        }),
        (n.lock = function (t, n, o) {
          var e = this;
          (this.$1 && r("clearTimeout")(this.$1),
            c === (this.$2() || c) && this.$3(o),
            (this.$1 = r("setTimeout")(function () {
              e.$1 = null;
              var r = e.hasLock() ? t : n;
              r && r(e);
            }, 0)));
        }),
        (n.unlock = function () {
          this.$1 && r("clearTimeout")(this.$1);
          var e = d();
          e && this.hasLock() && e.removeItem("mutex_" + this.name);
        }),
        t
      );
    })();
    l.default = m;
  },
  98,
);
