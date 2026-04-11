__d(
  "WAWebDataSharing3pdLidCollection",
  ["PerCustomerDataSharingModel", "WAWebBaseCollection"],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t() {
        return e.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.initializeFromCache = function (t) {
          var e = t.map(function (e) {
            return new (o(
              "PerCustomerDataSharingModel",
            ).PerCustomerDataSharingModel)(
              babelHelpers.extends({ id: e.lidRawString }, e),
            );
          });
          this.add(e);
        }),
        (n.isDataSharingEnabled = function (t) {
          var e = this.get(t);
          return e ? e.dataSharing3pdEnabled : !0;
        }),
        t
      );
    })(o("WAWebBaseCollection").BaseCollection);
    e.model = o("PerCustomerDataSharingModel").PerCustomerDataSharingModel;
    var s = new e();
    l.DataSharing3pdLidCollection = s;
  },
  98,
);
