__d(
  "FetchIntelligentComponentsDataRelay",
  [
    "AdsHelpTrayUtils",
    "AdsIntelligentComponentsUtils",
    "AdsManagerRelayEnvironment",
    "FetchIntelligentComponentsDataRelayQuery.graphql",
    "RelayHooks",
    "URIInitDataUtil",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t) {
      var a = o("AdsIntelligentComponentsUtils").convertContext(t.context),
        i = t.placement,
        l = o("URIInitDataUtil").getDefaultInjectTip(),
        s = l != null,
        u = o("URIInitDataUtil").getDefaultEnableStages(),
        c = t.messagesIDs,
        d = o("AdsHelpTrayUtils").getReleventArticlesProcessedURL(),
        m = o("RelayHooks")
          .fetchQuery(
            r("AdsManagerRelayEnvironment"),
            e !== void 0
              ? e
              : (e = n("FetchIntelligentComponentsDataRelayQuery.graphql")),
            {
              context: a,
              placement: i,
              inject_tip: l,
              enable_stages: u,
              enable_for_test_users: s,
              messages_ids: c,
              pathname: d,
            },
          )
          .toPromise();
      return m.then(function (e) {
        var t,
          n =
            e == null
              ? void 0
              : e.xfb_andromeda_XAdsInProductGuidanceAsyncController;
        if ((n == null ? void 0 : n.ok) === !1) {
          var r,
            o,
            a =
              (r =
                n == null || (o = n.errors) == null || (o = o[0]) == null
                  ? void 0
                  : o.description) != null
                ? r
                : "Unknown error",
            i = new Error(a);
          throw (i.stack, i);
        }
        var l = n == null || (t = n.value) == null ? void 0 : t.json;
        return JSON.parse(l != null ? l : "{}");
      });
    }
    l.loadMessage = s;
  },
  98,
);
