__d(
  "CometConsole",
  ["FBLogger", "JSScheduler", "once", "removeFromArray"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (function () {
        function t() {
          ((this.$1 = {}), (this.$2 = []));
        }
        var n = t.prototype;
        return (
          (n.reportError = function (t, n) {
            this.$1[t] || (this.$1[t] = { errors: new Map(), nextID: 0 });
            var e = this.$1[t].nextID,
              r = [t, e],
              o = babelHelpers.extends({ id: r, mute: !1 }, n);
            return (
              this.$1[t].errors.set(e, o),
              (this.$1[t].nextID += 1),
              this.$3(),
              r
            );
          }),
          (n.clearError = function (t) {
            var e = t[0],
              n = t[1],
              o = this.$1[e];
            if (!o)
              throw r("FBLogger")("ws_tools").mustfixThrow(
                "Tried to clearError() in Comet Console, but no valid category found",
              );
            o.errors.has(n) &&
              (o.errors.delete(n),
              o.errors.size === 0 && this.clearAll(e),
              this.$3());
          }),
          (n.muteError = function (t) {
            this.$4(t, !0);
          }),
          (n.unmuteError = function (t) {
            this.$4(t, !1);
          }),
          (n.clearAll = function (t) {
            if (t == null) {
              ((this.$1 = {}), this.$3());
              return;
            }
            this.$1[t] && (delete this.$1[t], this.$3());
          }),
          (n.getState = function () {
            for (
              var e = {}, t = Object.keys(this.$1), n = 0;
              n < t.length;
              n++
            ) {
              var r = t[n];
              e[r] = Array.from(this.$1[r].errors.values());
            }
            return e;
          }),
          (n.getErrors = function (t) {
            var e = [];
            if (this.$1[t])
              for (var n of this.$1[t].errors.entries()) {
                var r = n[0],
                  o = n[1],
                  a = o.description,
                  i = o.id,
                  l = o.mute,
                  s = o.offendingElement;
                e.push({
                  category: t,
                  description: a,
                  id: i,
                  mute: l,
                  offendingElement: s,
                });
              }
            return e;
          }),
          (n.$3 = function () {
            this.$2.forEach(function (t) {
              return (e || (e = o("JSScheduler"))).scheduleSpeculativeCallback(
                function () {
                  t();
                },
              );
            });
          }),
          (n.$4 = function (t, n) {
            var e = t[0],
              o = t[1],
              a = this.$1[e];
            if (!a)
              throw r("FBLogger")("ws_tools").mustfixThrow(
                "Tried to %s in Comet Console, but no valid category found",
                n ? "muteError()" : "unmuteError()",
              );
            var i = a.errors.get(o);
            i != null && ((i.mute = n), this.$3());
          }),
          (n.addListener = function (t) {
            var e = this;
            return (
              this.$2.push(t),
              {
                remove: r("once")(function () {
                  r("removeFromArray")(e.$2, t);
                }),
              }
            );
          }),
          (t.getInstance = function () {
            return (t.$5 == null && (t.$5 = new t()), t.$5);
          }),
          t
        );
      })(),
      u = s.getInstance();
    l.default = u;
  },
  98,
);
