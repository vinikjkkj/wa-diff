__d(
  "adsExperimentsPublishToastCardUtils",
  ["AdsTALRoutingReportICERoute", "URI"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t) {
      var n,
        o = t.accountLoader,
        a = t.studyID;
      (e || (e = r("URI"))).goURIOnNewWindow(
        new e(r("AdsTALRoutingReportICERoute").path).setQueryData({
          act: (n = o.getValue()) == null ? void 0 : n.account_id,
          test_id: a,
          ref: "ads_manager",
        }),
      );
    }
    l.handleToastCardOnclick = s;
  },
  98,
);
