__d(
  "BaseEventEmitter",
  [
    "EmitterSubscription",
    "ErrorGuard",
    "EventSubscriptionVendor",
    "FBLogger",
    "emptyFunction",
  ],
  function (t, n, r, o, a, i) {
    var e,
      l = (function () {
        "use strict";
        function t() {
          ((this.$2 = new (n("EventSubscriptionVendor"))()), (this.$1 = null));
        }
        var r = t.prototype;
        return (
          (r.addListener = function (t, r, o) {
            return this.$2.addSubscription(
              t,
              new (n("EmitterSubscription"))(this.$2, r, o),
            );
          }),
          (r.removeListener = function (t) {
            this.$2.removeSubscription(t);
          }),
          (r.once = function (t, n, r) {
            var e = this;
            return this.addListener(t, function () {
              (e.removeCurrentListener(), n.apply(r, arguments));
            });
          }),
          (r.removeAllListeners = function (t) {
            this.$2.removeAllSubscriptions(t);
          }),
          (r.removeCurrentListener = function () {
            if (!this.$1)
              throw n("FBLogger")("emitter").mustfixThrow(
                "Not in an emitting cycle; there is no current subscription",
              );
            this.$2.removeSubscription(this.$1);
          }),
          (r.listeners = function (t) {
            var e = this.$2.getSubscriptionsForType(t);
            return e
              ? e.filter(n("emptyFunction").thatReturnsTrue).map(function (e) {
                  return e.listener;
                })
              : [];
          }),
          (r.emit = function (t) {
            var e = this.$2.getSubscriptionsForType(t);
            if (e) {
              for (var n = Object.keys(e), r, o = 0; o < n.length; o++) {
                var a = n[o],
                  i = e[a];
                if (i) {
                  if (((this.$1 = i), r == null)) {
                    r = [i, t];
                    for (
                      var l = 0,
                        s = arguments.length <= 1 ? 0 : arguments.length - 1;
                      l < s;
                      l++
                    )
                      r[l + 2] =
                        l + 1 < 1 || arguments.length <= l + 1
                          ? void 0
                          : arguments[l + 1];
                  } else r[0] = i;
                  this.__emitToSubscription.apply(this, r);
                }
              }
              this.$1 = null;
            }
          }),
          (r.__emitToSubscription = function (r, o) {
            for (
              var t = arguments.length, a = new Array(t > 2 ? t - 2 : 0), i = 2;
              i < t;
              i++
            )
              a[i - 2] = arguments[i];
            (e || (e = n("ErrorGuard"))).applyWithGuard(
              r.listener,
              r.context,
              a,
              { name: "EventEmitter " + o + " event" },
            );
          }),
          t
        );
      })();
    a.exports = l;
  },
  null,
);
