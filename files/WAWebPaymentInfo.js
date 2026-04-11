__d(
  "WAWebPaymentInfo",
  ["WAWebEventEmitter", "WAWebUserPrefsPaymentInfo"],
  function (t, n, r, o, a, i, l) {
    var e = "cpi_info_change",
      s = (function (t) {
        function n() {
          return t.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(n, t);
        var r = n.prototype;
        return (
          (r.setCPIInfo = function (n) {
            var t = o("WAWebUserPrefsPaymentInfo").getCPIInfo();
            t !== n &&
              (o("WAWebUserPrefsPaymentInfo").setCPIInfo(n), this.trigger(e));
          }),
          n
        );
      })(r("WAWebEventEmitter")),
      u = new s();
    ((l.CPI_INFO_CHANGE_EVENT = e), (l.PaymentInfo = u));
  },
  98,
);
