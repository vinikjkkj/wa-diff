__d(
  "adsExperimentsGetStudyPublishFailedToastCard",
  ["fbt", "DateConsts"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = 10 * o("DateConsts").MS_PER_SEC;
    function u(t) {
      var n = t.id,
        r = t.onDismiss;
      return {
        bodyText: s._(/*BTDS*/ "An error occurred when publishing your test"),
        canDismiss: !0,
        cardType: "error",
        "data-testid": "adex-fail-to-create-study-toast-card",
        dismissButtonTestID: "adex-fail-to-create-study-toast-dismiss-button",
        dismissTimer: e,
        header: s._(/*BTDS*/ "Test can\u2019t be published"),
        id: n,
        onDismiss: r,
      };
    }
    l.default = u;
  },
  226,
);
