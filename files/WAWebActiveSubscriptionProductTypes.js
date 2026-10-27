__d(
  "WAWebActiveSubscriptionProductTypes",
  ["WAWebSubscriptionCollection"],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e = new Set();
      return (
        o("WAWebSubscriptionCollection")
          .SubscriptionCollection.toArray()
          .forEach(function (t) {
            var n = t.isDeactivated ? null : s(t.source);
            n != null && e.add(n);
          }),
        e.size > 0 ? Array.from(e).join(",") : void 0
      );
    }
    function s(e) {
      return e == null
        ? null
        : (function (e) {
            return e === "AURA"
              ? "wa_plus"
              : e === "BLUE"
                ? "meta_verified"
                : e === "MP4B"
                  ? "meta_one_business"
                  : e === "PREMIUM"
                    ? "premium"
                    : null;
          })(e);
    }
    l.getActiveSubscriptionProductTypes = e;
  },
  98,
);
