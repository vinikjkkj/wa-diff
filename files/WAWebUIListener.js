__d(
  "WAWebUIListener",
  ["WAWebCompatibility", "WAWebEventEmitter", "WAWebTypedEventEmitter"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return (
        e instanceof r("WAWebEventEmitter") ||
        e instanceof r("WAWebTypedEventEmitter") ||
        (typeof e.on == "function" && typeof e.off == "function")
      );
    }
    var s = (function () {
      function t(t, n, r, a, i) {
        ((this.$2 = !1),
          (this.$3 = !1),
          (this.source = t),
          (this.cb = r),
          (this.opts = a),
          (this.$1 = i),
          e(t)
            ? (this.event = n)
            : (this.event = o("WAWebCompatibility").compatPrefix(n, t)));
      }
      var n = t.prototype;
      return (
        (n.engage = function () {
          if (!(this.$2 || this.$3)) {
            this.$2 = !0;
            var t = this.source,
              n = this.event;
            e(t)
              ? (t.on(n, this.cb),
                typeof t.incObservers == "function" && t.incObservers())
              : this.opts
                ? t.addEventListener(n, this.cb, this.opts)
                : t.addEventListener(n, this.cb);
          }
        }),
        (n.disengage = function () {
          if (!this.$3 && ((this.$3 = !0), !!this.$2)) {
            var t = this.source,
              n = this.event;
            e(t)
              ? (t.off(this.event, this.cb),
                typeof t.decObservers == "function" && t.decObservers())
              : this.opts
                ? t.removeEventListener(n, this.cb, this.opts)
                : t.removeEventListener(n, this.cb);
          }
        }),
        (n.represents = function (t, n, r, o) {
          var e;
          if (this.source !== t || this.event !== n || this.$1 !== r) return !1;
          var a = o != null ? o : {},
            i = a.capture,
            l = i === void 0 ? !1 : i,
            s = a.once,
            u = s === void 0 ? !1 : s,
            c = a.passive,
            d = c === void 0 ? !1 : c,
            m = (e = this.opts) != null ? e : {},
            p = m.capture,
            _ = p === void 0 ? !1 : p,
            f = m.once,
            g = f === void 0 ? !1 : f,
            h = m.passive,
            y = h === void 0 ? !1 : h;
          return l === _ && u === g && d === y;
        }),
        t
      );
    })();
    ((l.isEventsType = e), (l.Listener = s));
  },
  98,
);
