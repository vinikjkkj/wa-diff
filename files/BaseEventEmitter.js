__d(
  "BaseEventEmitter",
  [
    "EmitterSubscription",
    "ErrorGuard",
    "EventSubscriptionVendor",
    "FBLogger",
    "emptyFunction",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (function () {
        function t() {
          ((this.$2 = new (r("EventSubscriptionVendor"))()), (this.$1 = null));
        }
        var n = t.prototype;
        return (
          (n.addListener = function (t, n, o) {
            return this.$2.addSubscription(
              t,
              new (r("EmitterSubscription"))(this.$2, n, o),
            );
          }),
          (n.removeListener = function (t) {
            this.$2.removeSubscription(t);
          }),
          (n.once = function (t, n, r) {
            var e = this;
            return this.addListener(t, function () {
              (e.removeCurrentListener(), n.apply(r, arguments));
            });
          }),
          (n.removeAllListeners = function (t) {
            this.$2.removeAllSubscriptions(t);
          }),
          (n.removeCurrentListener = function () {
            if (!this.$1)
              throw r("FBLogger")("emitter").mustfixThrow(
                "Not in an emitting cycle; there is no current subscription",
              );
            this.$2.removeSubscription(this.$1);
          }),
          (n.listeners = function (t) {
            var e = this.$2.getSubscriptionsForType(t);
            return e
              ? e.filter(r("emptyFunction").thatReturnsTrue).map(function (e) {
                  return e.listener;
                })
              : [];
          }),
          (n.emit = function (t) {
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
          (n.__emitToSubscription = function (n, o) {
            for (
              var t = arguments.length, a = new Array(t > 2 ? t - 2 : 0), i = 2;
              i < t;
              i++
            )
              a[i - 2] = arguments[i];
            (e || (e = r("ErrorGuard"))).applyWithGuard(
              n.listener,
              n.context,
              a,
              { name: "EventEmitter " + o + " event" },
            );
          }),
          t
        );
      })();
    l.default = s;
  },
  98,
);
