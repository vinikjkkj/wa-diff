__d(
  "AdsUEditorAdgroupWebAndAppMutators",
  [
    "AdsAssetFeedFieldUtils",
    "AdsAssetFeedMutationUtils",
    "AdsAssetFeedUtils",
    "AdsPlacementAssetUtils",
    "AdsUEditorAdgroupUrlMutators",
    "AdsUnifiedCreativeAPIFields",
    "FBLogger",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, a, i) {
      var l = o(
          "AdsUEditorAdgroupUrlMutators",
        ).getDefaultPlacementUrlAssetAndIndex(e),
        s = l.index,
        c = l.urls.website_url,
        m = e,
        p = a.ios_deep_link_url,
        _ = a.android_deep_link_url;
      if (p == null && _ == null) return m;
      var f = d(e, n, "ios"),
        g = d(e, n, "android"),
        h = u(_ != null ? _ : g, p != null ? p : f, i, c != null ? c : "");
      return (
        (m = o("AdsAssetFeedMutationUtils").setAssetFieldAtIndex(
          m,
          t,
          r("AdsUnifiedCreativeAPIFields").linkURL,
          s,
          "omnichannel_link_spec",
          h,
        )),
        o("AdsAssetFeedMutationUtils").removeDuplicateAssets(
          m,
          t,
          r("AdsUnifiedCreativeAPIFields").linkURL,
          "adlabels",
        )
      );
    }
    function s(e, t, n, a, i) {
      var l,
        s,
        c,
        d,
        m,
        p =
          (l = e.creative) == null || (l = l.asset_feed_spec) == null
            ? void 0
            : l.link_urls,
        _ = p != null ? p.size : 0,
        f = o("AdsPlacementAssetUtils").makeUniqueLabelNameForPlacementAsset(),
        g = e,
        h = a.ios_deep_link_url,
        y = a.android_deep_link_url;
      if (h == null && y == null) return g;
      var C = o(
          "AdsUEditorAdgroupUrlMutators",
        ).getLinkUrlLabelOfTargetRuleHavingPlacementList(e, n),
        b = String(
          (s = o(
            "AdsAssetFeedFieldUtils",
          ).getAssetPACOmnichannelAppEntryForLabel(
            (c = e.creative) == null || (c = c.asset_feed_spec) == null
              ? void 0
              : c.link_urls,
            C,
            "android",
          ).fieldValue) != null
            ? s
            : "",
        ),
        v = String(
          (d = o(
            "AdsAssetFeedFieldUtils",
          ).getAssetPACOmnichannelAppEntryForLabel(
            (m = e.creative) == null || (m = m.asset_feed_spec) == null
              ? void 0
              : m.link_urls,
            C,
            "ios",
          ).fieldValue) != null
            ? d
            : "",
        ),
        S = o("AdsUEditorAdgroupUrlMutators").getWebsiteUrlAssetForPlacement(
          e,
          n,
        ),
        R = u(y != null ? y : b, h != null ? h : v, i, S != null ? S : "");
      return (
        (g = o("AdsAssetFeedMutationUtils").setAssetFieldAtIndex(
          g,
          t,
          r("AdsUnifiedCreativeAPIFields").linkURL,
          _,
          "omnichannel_link_spec",
          R,
        )),
        (g = o("AdsAssetFeedMutationUtils").setAssetFieldAtIndex(
          g,
          t,
          r("AdsUnifiedCreativeAPIFields").linkURL,
          _,
          "website_url",
          S,
        )),
        (g = o("AdsAssetFeedMutationUtils").setAssetFieldAtIndex(
          g,
          t,
          r("AdsUnifiedCreativeAPIFields").linkURL,
          _,
          "display_url",
          o("AdsUEditorAdgroupUrlMutators").getDisplayUrlAssetForPlacement(
            e,
            n,
          ),
        )),
        o(
          "AdsUEditorAdgroupUrlMutators",
        ).updateTargetingRulesForUrlCustomization(g, t, n, _, f)
      );
    }
    function u(e, t, n, o) {
      var a;
      return (a = r("immutable")).Map({
        web: a.Map({ url: o }),
        app: a.Map({
          application_id: n,
          platform_specs: a.Map({
            android: a.Map({ url: e }),
            ios: a.Map({ url: t }),
          }),
        }),
      });
    }
    function c(t, n, a, i, l, u) {
      if (!o("AdsAssetFeedUtils").isPACAdgroupFromRecord(t))
        throw r("FBLogger")("ads_market_dynamics_solutions").mustfixThrow(
          "[PAC] This action should be called on an asset feed, after a video / image customization",
        );
      var c = t;
      return (l ? (c = e(c, n, a, i, u)) : (c = s(c, n, a, i, u)), c);
    }
    function d(e, t, n) {
      var r,
        a = o(
          "AdsUEditorAdgroupUrlMutators",
        ).getLinkUrlLabelOfTargetRuleHavingPlacementList(e, t);
      return String(
        a != null
          ? o("AdsAssetFeedFieldUtils").getAssetPACOmnichannelAppEntryForLabel(
              (r = e.creative) == null || (r = r.asset_feed_spec) == null
                ? void 0
                : r.link_urls,
              a,
              n,
            ).fieldValue
          : "",
      );
    }
    ((l.addAdsOmnichannelLinkSpecUtil = u),
      (l.addPlacementOmnichannelCustomizationUrl = c));
  },
  98,
);
