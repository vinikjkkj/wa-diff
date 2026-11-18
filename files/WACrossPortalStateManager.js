__d(
  "WACrossPortalStateManager",
  ["WAGenericStateManager", "WALogger", "err", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e, t) {
      return _.define(e, t);
    }
    function u(e) {
      _.startSync(e);
    }
    function c(e, t) {
      _.applySyncValue(e, t);
    }
    function d(e) {
      if (typeof e != "object" || e == null) return null;
      var t = e.key,
        n = e.value;
      return typeof t == "string" ? { key: t, value: n } : null;
    }
    var m = (function (e) {
        function t(t, n) {
          var r;
          return (
            (r = e.call(this, t) || this),
            (r.$CrossPortalStateManager$p_2 = !1),
            (r.$CrossPortalStateManager$p_1 = n),
            r
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.set = function (n) {
            return (
              f(n, this.get()) ||
                ((this.$CrossPortalStateManager$p_2 = !0),
                this.$CrossPortalStateManager$p_1(n),
                e.prototype.set.call(this, n)),
              n
            );
          }),
          (n.hasBeenUpdated = function () {
            return this.$CrossPortalStateManager$p_2;
          }),
          (n.applySyncValue = function (n) {
            ((this.$CrossPortalStateManager$p_2 = !0),
              !f(n, this.get()) && e.prototype.set.call(this, n));
          }),
          t
        );
      })(o("WAGenericStateManager").WAGenericStateManager),
      p = (function () {
        function t() {
          ((this.$1 = new Map()), (this.$2 = new Map()), (this.$3 = null));
        }
        var n = t.prototype;
        return (
          (n.define = function (t, n) {
            var e = this;
            if (this.$1.has(t))
              throw r("err")(
                "CrossPortalStateManager: " + t + " is already defined",
              );
            var o = new m(n, function (n) {
              e.$4(t, n);
            });
            return (
              this.$1.set(t, o),
              this.$2.has(t) &&
                (o.applySyncValue(this.$2.get(t)), this.$2.delete(t)),
              o
            );
          }),
          (n.startSync = function (t) {
            this.$3 = t;
            for (var e of this.$1) {
              var n = e[0],
                r = e[1];
              r.hasBeenUpdated() && this.$4(n, r.get());
            }
          }),
          (n.applySyncValue = function (t, n) {
            var e = this.$1.get(t);
            if (e == null) {
              this.$2.set(t, n);
              return;
            }
            e.applySyncValue(n);
          }),
          (n.$4 = function (n, a) {
            try {
              var t;
              (t = this.$3) == null || t.call(this, n, a);
            } catch (t) {
              o("WALogger").ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "CrossPortalStateManager: failed to send ",
                    ": ",
                    "",
                  ])),
                n,
                r("getErrorSafe")(t).message,
              );
            }
          }),
          t
        );
      })(),
      _ = new p();
    function f(e, t) {
      var n = e == null || (typeof e != "object" && typeof e != "function");
      return n && Object.is(e, t);
    }
    ((l.defineCrossPortalState = s),
      (l.startCrossPortalStateSync = u),
      (l.applyCrossPortalStateSyncValue = c),
      (l.parseCrossPortalStateSyncValue = d),
      (l.CrossPortalStateRegistry = p));
  },
  98,
);
