__d(
  "WAWebSubscriptionCollection",
  ["WAWebBaseCollection", "WAWebSubscriptionModel"],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t() {
        return e.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.initializeFromCache = function (t) {
          this.add(t, { merge: !0 });
        }),
        (n.replaceWith = function (t) {
          this.set(t, { add: !0, remove: !0, merge: !0 });
        }),
        t
      );
    })(o("WAWebBaseCollection").BaseCollection);
    e.model = o("WAWebSubscriptionModel").Subscription;
    var s = new e();
    l.SubscriptionCollection = s;
  },
  98,
);
