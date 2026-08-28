__d(
  "AdsPEFragmentSelectors",
  [
    "AdFLEXDraftFragmentConfig",
    "AdsAccountStore",
    "AdsObjectLevelToFragmentStore",
    "AdsPEFragmentSelectorsAccountIDFragment.graphql",
    "AdsPEFragmentSelectors_adgroupFragment.graphql",
    "AdsPEFragmentSelectors_campaignFragment.graphql",
    "AdsPEFragmentSelectors_campaignGroupFragment.graphql",
    "RelayHooks",
    "adsCreateSelector",
    "adsCreateSelectorsByLevel",
    "adsCreateStoreSelector",
    "immutable",
    "isTruthy",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d =
        e !== void 0
          ? e
          : (e = n("AdsPEFragmentSelectorsAccountIDFragment.graphql")),
      m = r("adsCreateSelectorsByLevel")(function (e) {
        var t = r("AdsObjectLevelToFragmentStore").get(e);
        return r("adsCreateStoreSelector")(
          [r("AdsAccountStore"), t],
          function () {
            return _(r("AdsAccountStore").getSelectedAccountID(), t);
          },
          { name: i.id },
        );
      }),
      p = r("adsCreateSelectorsByLevel")(function (e) {
        return r("adsCreateSelector")(
          [m.campaign, m.ad_set, m[e]],
          function (n, o, a) {
            var t,
              i,
              l =
                (t =
                  r("AdFLEXDraftFragmentConfig") == null ||
                  (i = r("AdFLEXDraftFragmentConfig").get()) == null
                    ? void 0
                    : i.isFragmentAvailableInTool) != null
                  ? t
                  : function (e, t, n, r) {
                      return !0;
                    };
            return a.filter(function (t) {
              return l(t, e, o, n);
            });
          },
          { name: i.id },
        );
      }),
      _ = function (t, n) {
        return r("isTruthy")(t)
          ? n.getFragmentsInDraftFor(t)
          : r("immutable").Map();
      },
      f =
        s !== void 0
          ? s
          : (s = n("AdsPEFragmentSelectors_campaignGroupFragment.graphql")),
      g =
        u !== void 0
          ? u
          : (u = n("AdsPEFragmentSelectors_campaignFragment.graphql")),
      h =
        c !== void 0
          ? c
          : (c = n("AdsPEFragmentSelectors_adgroupFragment.graphql"));
    function y(e) {
      var t = o("RelayHooks").useFragment(f, e),
        n = t.campaign_group_fragments;
      return n != null ? n : r("immutable").Map();
    }
    function C(e) {
      var t = o("RelayHooks").useFragment(g, e),
        n = t.campaign_fragments;
      return n != null ? n : r("immutable").Map();
    }
    function b(e) {
      var t = o("RelayHooks").useFragment(h, e),
        n = t.adgroup_fragments;
      return n != null ? n : r("immutable").Map();
    }
    ((l.fragmentsByLevel = m),
      (l.toolFragmentsByLevel = p),
      (l.useGetFragmentsForCampaignGroup = y),
      (l.useGetFragmentsForCampaign = C),
      (l.useGetFragmentsForAdgroup = b));
  },
  98,
);
