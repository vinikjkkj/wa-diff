__d(
  "WAWebExternalBetaEvents",
  ["WAWebEventEmitter"],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.triggerBetaOptInStatusChanges = function () {
            this.trigger("external_beta_events:opt_in_status_changed");
          }),
          t
        );
      })(r("WAWebEventEmitter")),
      s = new e();
    l.WAWebExternalBetaEvents = s;
  },
  98,
);
