__d(
  "WAWebSubscriptionModel",
  ["WAWebBaseModel", "lodash"],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t() {
        for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
          r[a] = arguments[a];
        return (
          (t = e.call.apply(e, [this].concat(r)) || this),
          (t.id = o("WAWebBaseModel").prop()),
          (t.isDeactivated = o("WAWebBaseModel").prop(!1)),
          (t.isAutoRenewing = o("WAWebBaseModel").prop(!1)),
          (t.expirationDate = o("WAWebBaseModel").prop()),
          (t.creationTime = o("WAWebBaseModel").prop()),
          (t.newMessageCappingEnabled = o("WAWebBaseModel").prop()),
          (t.tier = o("WAWebBaseModel").prop()),
          (t.status = o("WAWebBaseModel").prop()),
          (t.source = o("WAWebBaseModel").prop()),
          (t.isPlatformChanged = o("WAWebBaseModel").prop()),
          (t.startTime = o("WAWebBaseModel").prop()),
          babelHelpers.assertThisInitialized(t) ||
            babelHelpers.assertThisInitialized(t)
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.equal = function (t) {
          return t
            ? t.id === this.id &&
                t.isAutoRenewing === this.isAutoRenewing &&
                t.isDeactivated === this.isDeactivated &&
                t.expirationDate === this.expirationDate &&
                t.creationTime === this.creationTime &&
                t.newMessageCappingEnabled === this.newMessageCappingEnabled &&
                t.tier === this.tier &&
                t.status === this.status &&
                t.source === this.source &&
                t.isPlatformChanged === this.isPlatformChanged &&
                t.startTime === this.startTime
            : !1;
        }),
        (n.clone = function () {
          return r("lodash").clone(this);
        }),
        t
      );
    })(o("WAWebBaseModel").BaseModel);
    e.Proxy = "subscription";
    var s = o("WAWebBaseModel").defineModel(e);
    l.Subscription = s;
  },
  98,
);
