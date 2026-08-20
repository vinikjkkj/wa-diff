__d(
  "AdsPoliticalAction",
  ["BusinessIntegrityPostDisapprovalEventTypedLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
        function e() {}
        var t = e.prototype;
        return (
          (t.getCTAData = function (t, n) {
            var e = this,
              r = this.$1(t),
              o = this.$2(t);
            return r == null || o == null
              ? null
              : {
                  text: r,
                  href: o,
                  target: "_blank",
                  use: "primary",
                  onCallToAction: function () {
                    return e.$3(n);
                  },
                };
          }),
          (t.$1 = function (t) {
            var e = null;
            return (typeof t.label.val == "string" && (e = t.label.val), e);
          }),
          (t.$2 = function (t) {
            var e = null;
            return (typeof t.uri.val == "string" && (e = t.uri.val), e);
          }),
          (t.$3 = function (t) {
            new (r("BusinessIntegrityPostDisapprovalEventTypedLogger"))()
              .setEvent("ui_policy_cta_clicked")
              .setAdAccountID(t.adAccountID)
              .setCallsite(t.callsite)
              .setCrowDisapprovalReason(t.disapprovalReasonName)
              .setCrowDisapprovalReasons([t.disapprovalReasonName])
              .log();
          }),
          e
        );
      })(),
      s = new e();
    l.default = s;
  },
  98,
);
