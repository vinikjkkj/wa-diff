__d(
  "WebBloksToastManager",
  ["WebBloksToast", "WebBloksUtils", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = {
        autoDismissDurationMs: 3e3,
        showAnimationDurationMs: 200,
        dismissAnimationDurationMs: 200,
        showAnimationInterpolator: "ease-out",
        dismissAnimationInterpolator: "ease-out",
      },
      c = (function () {
        function e() {
          ((this.$1 = null), (this.$2 = []), (this.$3 = !1), (this.$4 = []));
        }
        var t = e.prototype;
        return (
          (t.getDefaultCurrentToast = function () {
            return null;
          }),
          (t.getEmptyState = function () {
            return { currentToast: null, pendingToasts: [], isToastHiding: !1 };
          }),
          (t.getCurrentToast = function () {
            return this.$1;
          }),
          (t.getPendingToasts = function () {
            return this.$2;
          }),
          (t.enqueueBloksModelToast = function (t, n, r) {
            var e,
              o = this.$5(r);
            (this.$2.push({
              id: (e = n.getId()) != null ? e : n.clientId + "",
              type: "bloksModel",
              context: t,
              model: n,
              options: o,
              timeoutID: null,
            }),
              this.$6());
          }),
          (t.enqueueBloksParseResultToast = function (t, n, r) {
            var e,
              o = this.$5(r),
              a = n.unboundModel;
            (this.$2.push({
              id: (e = a.getId()) != null ? e : a.clientId + "",
              type: "bloksParseResult",
              context: t,
              parseResult: n,
              options: o,
              timeoutID: null,
            }),
              this.$6());
          }),
          (t.enqueueSimpleToast = function (t) {
            (this.$2.push({
              id: o("WebBloksUtils").getNextGlobalBloksClientId() + "",
              type: "simple",
              component: s.jsx(r("WebBloksToast"), { text: t }),
              options: u,
              timeoutID: null,
            }),
              this.$6());
          }),
          (t.enqueueMiniToast = function (t) {
            (this.$2.push({
              id: o("WebBloksUtils").getNextGlobalBloksClientId() + "",
              type: "mini",
              component: t,
              options: u,
              timeoutID: null,
            }),
              this.$6());
          }),
          (t.dismissToastWithID = function (t, n) {
            var e = String(t);
            this.$1 != null && this.$1.id === e
              ? this.$7()
              : (this.$2 = this.$2.filter(function (t) {
                  return t.id !== e;
                }));
          }),
          (t.$7 = function () {
            var e = this,
              t = this.$1;
            if (t != null) {
              if (
                (window.clearTimeout(t.timeoutID),
                (this.$3 = !0),
                this.$8(),
                t.type === "bloksModel")
              ) {
                var n = t.options.onDismiss;
                n != null && t.context.executeCatch(n, []);
              }
              ((t.timeoutID = window.setTimeout(function () {
                ((e.$3 = !1), (e.$1 = null), e.$8(), e.$6());
              }, t.options.dismissAnimationDurationMs)),
                (this.$1 = t));
            }
          }),
          (t.$6 = function () {
            var e = this;
            if (this.$1 === null && this.$2.length !== 0) {
              var t = this.$2.shift();
              if (t != null && t.options.autoDismissDurationMs !== 0) {
                var n = window.setTimeout(function () {
                  return e.$7();
                }, t.options.autoDismissDurationMs + t.options.showAnimationDurationMs);
                if (((t.timeoutID = n), t.type === "bloksModel")) {
                  var r = t.options.onShow;
                  r != null && t.context.executeCatch(r, []);
                }
              }
              ((this.$1 = t), this.$8());
            }
          }),
          (t.$5 = function (t) {
            var e,
              n,
              r,
              o = t.getValues(),
              a = this.parseToastInterpolator(
                o.show_animation_interpolator,
                u.showAnimationInterpolator,
              ),
              i = this.parseToastInterpolator(
                o.dismiss_animation_interpolator,
                u.dismissAnimationInterpolator,
              );
            return {
              autoDismissDurationMs:
                (e = o.auto_dismiss_duration_ms) != null
                  ? e
                  : u.autoDismissDurationMs,
              showAnimationDurationMs:
                (n = o.show_animation_duration_ms) != null
                  ? n
                  : u.showAnimationDurationMs,
              dismissAnimationDurationMs:
                (r = o.dismiss_animation_duration_ms) != null
                  ? r
                  : u.dismissAnimationDurationMs,
              showAnimationInterpolator: a,
              dismissAnimationInterpolator: i,
              onShow: o.on_show,
              onDismiss: o.on_dismiss,
            };
          }),
          (t.parseToastInterpolator = function (t, n) {
            if (t == null) return n;
            var e = t.getValues(),
              r = e.x_a,
              o = e.x_b,
              a = e.y_a,
              i = e.y_b;
            return "cubic-bezier(" + r + "," + a + "," + o + "," + i + ")";
          }),
          (t.addListener = function (t) {
            var e = this;
            return (
              this.$4.push(t),
              {
                remove: o("WebBloksUtils").once(function () {
                  o("WebBloksUtils").removeFromArray(e.$4, t);
                }),
              }
            );
          }),
          (t.$8 = function () {
            var e = this;
            this.$4.forEach(function (t) {
              return window.setTimeout(function () {
                t({
                  currentToast: e.$1,
                  pendingToasts: e.$2,
                  isToastHiding: e.$3,
                });
              }, 0);
            });
          }),
          e
        );
      })();
    l.default = c;
  },
  98,
);
