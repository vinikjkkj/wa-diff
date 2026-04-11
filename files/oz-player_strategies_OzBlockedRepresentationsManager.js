__d(
  "oz-player/strategies/OzBlockedRepresentationsManager",
  [
    "oz-player/shims/OzEventEmitter",
    "oz-player/shims/ozClearTimeout",
    "oz-player/shims/ozSetTimeoutAcrossTransitions",
    "oz-player/utils/OzErrorUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e, t) {
        ((this.$2 = new Map()),
          (this.$3 = new Set()),
          (this.$4 = new Set()),
          (this.$5 = new (r("oz-player/shims/OzEventEmitter"))()),
          (this.$6 = t === !0),
          this.$7(e),
          this.$8(e));
      }
      var t = e.prototype;
      return (
        (t.isBlocked = function (t) {
          return this.$3.has(t);
        }),
        (t.handleError = function (t, n) {
          if (this.$1 != null && this.$3.size === this.$1 - 1) return !1;
          if (
            o("oz-player/utils/OzErrorUtils").isOzError(n) &&
            n.getType() === "OZ_NETWORK"
          ) {
            var e = Number(n.getExtra().code);
            if (!isNaN(e) && this.$2.has(e))
              return (this.$3.has(t) || this.$9(t, e), !0);
          }
          return !1;
        }),
        (t.$9 = function (t, n) {
          var e,
            o = this;
          (this.$3.add(t),
            (e = this.$5) == null || e.emit("representation_blocked", t));
          var a = this.$2.get(n) || 0;
          if (a > 0) {
            var i = r("oz-player/shims/ozSetTimeoutAcrossTransitions")(
              function () {
                (o.$3.delete(t), o.$4.delete(i));
              },
              a,
            );
            this.$4.add(i);
          }
        }),
        (t.applyRestriction = function (t) {
          var e = this;
          return t.filter(function (t) {
            return !e.$3.has(t.getID());
          });
        }),
        (t.onRepresentationBlocked = function (t) {
          return this.$5
            ? this.$5.addListener("representation_blocked", t)
            : { remove: function () {} };
        }),
        (t.setAvailableRepresentationsCount = function (t) {
          this.$1 = t;
        }),
        (t.destroy = function () {
          var e;
          ((e = this.$5) == null || e.removeAllListeners(), (this.$5 = null));
          for (var t of this.$4) r("oz-player/shims/ozClearTimeout")(t);
          this.$4.clear();
        }),
        (t.$7 = function (t) {
          var e = this;
          try {
            var n = JSON.parse(
              t.getString("block_representation_status_codes_json"),
            );
            if (
              Array.isArray(n) &&
              (n.forEach(function (t) {
                var n = parseInt(t, 10);
                isNaN(n) || e.$2.set(n, -1);
              }),
              this.$6)
            )
              for (var r = 500; r <= 599; r++) this.$2.set(r, -1);
          } catch (e) {}
        }),
        (t.$8 = function (t) {
          var e = this;
          try {
            var n = JSON.parse(
              t.getString("block_representation_status_codes_temporarily_json"),
            );
            Object.entries(n).forEach(function (t) {
              var n = t[0],
                r = t[1],
                o = parseInt(n, 10),
                a = parseInt(r, 10);
              !isNaN(o) && !isNaN(a) && e.$2.set(o, a);
            });
          } catch (e) {}
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
