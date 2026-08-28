__d(
  "AdsUEditorAdgroupUrlMutators",
  [
    "AdsAPIAdgroupRecord",
    "AdsAdgroupRecordAccessors",
    "AdsAssetFeedFieldUtils",
    "AdsAssetFeedMutationUtils",
    "AdsAssetFeedUtils",
    "AdsChildAttachmentsUtils",
    "AdsPlacementAssetTargetingRuleUtils",
    "AdsPlacementAssetUtils",
    "AdsUEditorAdgroupWebAndAppMutators",
    "AdsUEditorCallToActionMutators",
    "AdsUnifiedCreativeAPIFields",
    "FBLogger",
    "immutable",
    "isAccountEligibleForThreeCOL2AdEx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t,
        n = h(e),
        r = n.urls;
      return (t = r.website_url) != null ? t : "";
    }
    function s(e) {
      var t,
        n = h(e),
        r = n.urls;
      return (t = r.display_url) != null ? t : "";
    }
    function u(e, t, n, a, i, l) {
      if (!o("AdsAssetFeedUtils").isPACAdgroupFromRecord(e))
        throw r("FBLogger")("am_feature_pac").mustfixThrow(
          "[PAC] This action should be called on an asset feed, after a video / image customization",
        );
      var s = e;
      return (i ? (s = c(s, t, n, a, l)) : (s = d(s, t, n, a, l)), s);
    }
    function c(e, t, n, a, i) {
      var l = h(e),
        s = l.index,
        u = l.urls.website_url,
        c = e,
        d = a.website_url,
        m = a.display_url;
      if (a.website_url == null && a.display_url == null) return c;
      if (d != null) {
        var p,
          _,
          f =
            (p = e.creative) == null || (p = p.asset_feed_spec) == null
              ? void 0
              : p.videos,
          g = f ? f.count() : 0;
        (g > 0 &&
          (c = o("AdsUEditorCallToActionMutators").setCallToActionLink({
            adgroup: c,
            link: d,
            specPlugin: t,
          })),
          (c = o("AdsAssetFeedMutationUtils").setAssetFieldAtIndex(
            c,
            t,
            r("AdsUnifiedCreativeAPIFields").linkURL,
            s,
            "website_url",
            d,
          )));
        var y = C(u != null ? u : ""),
          v = C((_ = a.website_url) != null ? _ : "");
        (y !== v &&
          !o("AdsChildAttachmentsUtils").isCarouselAd(e) &&
          (c = b(c, v)),
          (c = L(c, d, t, n, s, i)));
      }
      return (
        m != null &&
          (c = o("AdsAssetFeedMutationUtils").setAssetFieldAtIndex(
            c,
            t,
            r("AdsUnifiedCreativeAPIFields").linkURL,
            s,
            "display_url",
            m,
          )),
        o("AdsAssetFeedMutationUtils").removeDuplicateAssets(
          c,
          t,
          r("AdsUnifiedCreativeAPIFields").linkURL,
          "adlabels",
        )
      );
    }
    function d(e, t, n, a, i) {
      var l,
        s,
        u,
        c =
          (l = e.creative) == null || (l = l.asset_feed_spec) == null
            ? void 0
            : l.link_urls,
        d = c != null ? c.size : 0,
        p = o("AdsPlacementAssetUtils").makeUniqueLabelNameForPlacementAsset(),
        g = e;
      return a.website_url == null && a.display_url == null
        ? g
        : ((g = o("AdsAssetFeedMutationUtils").setAssetFieldAtIndex(
            g,
            t,
            r("AdsUnifiedCreativeAPIFields").linkURL,
            d,
            "website_url",
            (s = a.website_url) != null ? s : _(e, n),
          )),
          (g = o("AdsAssetFeedMutationUtils").setAssetFieldAtIndex(
            g,
            t,
            r("AdsUnifiedCreativeAPIFields").linkURL,
            d,
            "display_url",
            (u = a.display_url) != null ? u : f(e, n),
          )),
          a.deeplink_url != null &&
            (g = o("AdsAssetFeedMutationUtils").setAssetFieldAtIndex(
              g,
              t,
              r("AdsUnifiedCreativeAPIFields").linkURL,
              d,
              "deeplink_url",
              a.deeplink_url,
            )),
          a.android_url != null &&
            (g = o("AdsAssetFeedMutationUtils").setAssetFieldAtIndex(
              g,
              t,
              r("AdsUnifiedCreativeAPIFields").linkURL,
              d,
              "deeplink_url",
              a.android_url,
            )),
          a.ios_url != null &&
            (g = o("AdsAssetFeedMutationUtils").setAssetFieldAtIndex(
              g,
              t,
              r("AdsUnifiedCreativeAPIFields").linkURL,
              d,
              "deeplink_url",
              a.ios_url,
            )),
          (g = m(g, t, n, d, a, i)),
          R(g, t, n, d, p));
    }
    function m(e, t, n, a, i, l) {
      var s,
        u,
        c,
        d,
        m,
        _,
        f = p(e, n),
        g = e,
        h = String(
          (s = o(
            "AdsAssetFeedFieldUtils",
          ).getAssetPACOmnichannelAppEntryForLabel(
            (u = e.creative) == null || (u = u.asset_feed_spec) == null
              ? void 0
              : u.link_urls,
            f,
            "android",
          ).fieldValue) != null
            ? s
            : "",
        ),
        y = o("AdsAssetFeedFieldUtils").getAssetPACOmnichannelAppEntryForLabel(
          (c = e.creative) == null || (c = c.asset_feed_spec) == null
            ? void 0
            : c.link_urls,
          f,
          "ios",
        ),
        C = (d = y.applicationId) != null ? d : "0",
        b = String((m = y.fieldValue) != null ? m : ""),
        v =
          l != null &&
          l &&
          o("isAccountEligibleForThreeCOL2AdEx").is3coXPacFix();
      if (v) {
        var S = r(
          "AdsAdgroupRecordAccessors",
        ).creative.omnichannel_link_spec.app.application_id.get(e);
        (C == null || C === "0") && S != null && (C = S);
      }
      if ((h === "" || b === "") && l !== !0) return g;
      var R = o(
        "AdsUEditorAdgroupWebAndAppMutators",
      ).addAdsOmnichannelLinkSpecUtil(
        h,
        b,
        C,
        (_ = i.website_url) != null ? _ : "",
      );
      return (
        (g = o("AdsAssetFeedMutationUtils").setAssetFieldAtIndex(
          g,
          t,
          r("AdsUnifiedCreativeAPIFields").linkURL,
          a,
          "omnichannel_link_spec",
          r("immutable").Map(R),
        )),
        g
      );
    }
    function p(e, t) {
      var n,
        a =
          (n = e.creative) == null || (n = n.asset_feed_spec) == null
            ? void 0
            : n.asset_customization_rules;
      if (a == null)
        throw r("FBLogger")("ads_market_dynamics_solutions").mustfixThrow(
          "[PAC] TargetingRules should exist",
        );
      var i = o(
        "AdsPlacementAssetTargetingRuleUtils",
      ).getTargetingRuleHavingPlacementList(a, t);
      if (i == null)
        throw r("FBLogger")("ads_market_dynamics_solutions").mustfixThrow(
          "[PAC] TargetingRules should exist",
        );
      var l = o(
        "AdsPlacementAssetTargetingRuleUtils",
      ).getLabelNameFromTargetingRuleNullable(i.rule, "link_url_label");
      return typeof l == "string" ? l : null;
    }
    function _(e, t) {
      var n,
        r = p(e, t);
      return r != null
        ? o("AdsAssetFeedFieldUtils").getAssetEntryForLabel(
            (n = e.creative) == null || (n = n.asset_feed_spec) == null
              ? void 0
              : n.link_urls,
            r,
            "website_url",
          ).fieldValue
        : "";
    }
    function f(e, t) {
      var n,
        r = p(e, t);
      return r != null
        ? o("AdsAssetFeedFieldUtils").getAssetEntryForLabel(
            (n = e.creative) == null || (n = n.asset_feed_spec) == null
              ? void 0
              : n.link_urls,
            r,
            "display_url",
          ).fieldValue
        : "";
    }
    function g(e) {
      var t,
        n,
        a = o(
          "AdsPlacementAssetTargetingRuleUtils",
        ).getDefaultRuleOrRuleWithMostPlacements(
          e instanceof r("AdsAPIAdgroupRecord")
            ? e == null ||
              (t = e.creative) == null ||
              (t = t.asset_feed_spec) == null
              ? void 0
              : t.asset_customization_rules
            : r("immutable").fromJS(
                e == null ||
                  (n = e.creative) == null ||
                  (n = n.asset_feed_spec) == null
                  ? void 0
                  : n.asset_customization_rules,
              ),
        );
      return a == null
        ? (r("FBLogger")("ads")
            .blameToPreviousFile()
            .mustfix(
              "[PAC] Default target rule must be present while adding text customization",
            ),
          null)
        : o(
            "AdsPlacementAssetTargetingRuleUtils",
          ).getLabelNameFromTargetingRuleNullable(a, "link_url_label");
    }
    function h(e) {
      var t,
        n,
        a =
          e instanceof r("AdsAPIAdgroupRecord")
            ? e == null ||
              (t = e.creative) == null ||
              (t = t.asset_feed_spec) == null
              ? void 0
              : t.link_urls
            : r("immutable").fromJS(
                (n = e.creative) == null || (n = n.asset_feed_spec) == null
                  ? void 0
                  : n.link_urls,
              ),
        i = g(e),
        l = o("AdsAssetFeedFieldUtils").getAssetEntryForLabel(
          a,
          i,
          "website_url",
        ),
        s = l.fieldValue,
        u = l.index;
      if (i == null || s == null || u == null) {
        var c = o("AdsAssetFeedFieldUtils").getAssetAtIndex(
            a,
            "website_url",
            0,
          ),
          d = o("AdsAssetFeedFieldUtils").getAssetAtIndex(a, "display_url", 0),
          m = { website_url: c, display_url: d },
          p = o("AdsAssetFeedFieldUtils").getAssetAtIndex(a, "deeplink_url", 0);
        p != null && (m.deeplink_url = p);
        var _ = o("AdsAssetFeedFieldUtils").getAssetAtIndex(
          a,
          "android_url",
          0,
        );
        _ != null && (m.android_url = _);
        var f = o("AdsAssetFeedFieldUtils").getAssetAtIndex(a, "ios_url", 0);
        return (_ != null && (m.ios_url = f), { urls: m, index: 0 });
      }
      var h = o("AdsAssetFeedFieldUtils").getAssetEntryForLabel(
          a,
          i,
          "display_url",
        ),
        y = h.fieldValue != null ? h.fieldValue : "",
        C = { website_url: s, display_url: y },
        b = o("AdsAssetFeedFieldUtils").getAssetEntryForLabel(
          a,
          i,
          "deeplink_url",
        );
      b.fieldValue != null && (C.deeplink_url = b.fieldValue);
      var v = o("AdsAssetFeedFieldUtils").getAssetEntryForLabel(
        a,
        i,
        "android_url",
      );
      b.fieldValue != null && (C.android_url = v.fieldValue);
      var S = o("AdsAssetFeedFieldUtils").getAssetEntryForLabel(
        a,
        i,
        "ios_url",
      );
      return (
        b.fieldValue != null && (C.ios_url = S.fieldValue),
        { urls: C, index: u }
      );
    }
    function y(e) {
      var t = e.indexOf("?");
      return t == -1 ? e : e.substr(0, t);
    }
    function C(e) {
      var t = e.indexOf("?");
      return t == -1 ? "" : e.substr(t);
    }
    function b(e, t) {
      var n,
        o =
          (n = e.creative) == null || (n = n.asset_feed_spec) == null
            ? void 0
            : n.link_urls;
      if (!o) return e;
      var a = o.reduce(function (e, n) {
        var o = n.get("website_url");
        if (typeof o != "string")
          return (
            r("FBLogger")("am_feature_pac").mustfix(
              "website_url should be a string",
            ),
            e
          );
        var a = y(o),
          i = n.set("website_url", a + t);
        return e.push(i);
      }, r("immutable").List());
      return r(
        "AdsAdgroupRecordAccessors",
      ).creative.asset_feed_spec.link_urls.set(a, e);
    }
    function v(e, t, n) {
      var r = h(e);
      return u(e, t, n, r.urls, !1);
    }
    function S(e, t) {
      var n;
      if (
        !o("AdsAssetFeedUtils").isPACAdgroupFromRecord(e) &&
        !o("AdsAssetFeedUtils").isMCAAdgroupFromRecord(e)
      )
        throw r("FBLogger")("pac_url_mutators")
          .blameToPreviousFrame()
          .mustfixThrow(
            "[PAC] This action should be called on an asset feed, after a video / image customization",
          );
      var a =
        (n = e.creative) == null || (n = n.asset_feed_spec) == null
          ? void 0
          : n.link_urls;
      if (a != null) {
        var i,
          l =
            (i = e.creative) == null ||
            (i = i.asset_feed_spec) == null ||
            (i = i.link_urls) == null
              ? void 0
              : i.update(function (e) {
                  return e.map(function (e) {
                    return e.setIn(["website_url"], t);
                  });
                });
        return r(
          "AdsAdgroupRecordAccessors",
        ).creative.asset_feed_spec.link_urls.set(l, e);
      }
      return e;
    }
    function R(e, t, n, a, i) {
      var l,
        s,
        u = o("AdsAssetFeedMutationUtils").setAssetAdLabelAtIndex(
          e,
          t,
          r("AdsUnifiedCreativeAPIFields").linkURL,
          a,
          i,
        ),
        c =
          (l = u.creative) == null || (l = l.asset_feed_spec) == null
            ? void 0
            : l.asset_customization_rules;
      if (c == null)
        throw r("FBLogger")("am_feature_pac").mustfixThrow(
          "[PAC] TargetingRules should exist",
        );
      var d = o(
        "AdsPlacementAssetTargetingRuleUtils",
      ).getTargetingRuleHavingPlacementList(c, n);
      if (d == null)
        throw r("FBLogger")("am_feature_pac").mustfixThrow(
          "[PAC] targeting rule with placementlist must exist, since this action will be fired only after an image / video has been customized for the same placement before",
        );
      var m = d.index,
        p = d.rule,
        _ = p.get("link_url_label"),
        f = c.set(
          m,
          p.set(
            "link_url_label",
            r("immutable").Map(((s = {}), (s.name = i), s)),
          ),
        );
      if (
        ((u = r(
          "AdsAdgroupRecordAccessors",
        ).creative.asset_feed_spec.asset_customization_rules.set(f, u)),
        _ != null)
      ) {
        var g;
        if (!(_ instanceof r("immutable").Map))
          throw r("FBLogger")("am_feature_pac").mustfixThrow(
            "[PAC] labelFieldToRemove has to be an Immutable.Map",
          );
        var h = _.get("name"),
          y = o("AdsAssetFeedFieldUtils").getAssetEntryForLabel(
            (g = u.creative) == null || (g = g.asset_feed_spec) == null
              ? void 0
              : g.link_urls,
            h,
            "website_url",
          ).index;
        if (typeof y == "number" && y >= 0) {
          if (typeof h != "string")
            throw r("FBLogger")("am_feature_pac").mustfixThrow(
              "[PAC] labelToRemove must be a string",
            );
          var C = o("AdsAssetFeedMutationUtils").isolateAssetWithLabel(
              u,
              t,
              r("AdsUnifiedCreativeAPIFields").linkURL,
              y,
              "adlabels",
              h,
            ),
            b = C.adgroupWithIsolatedAsset,
            v = C.isolatedAssetIndex;
          u = r("AdsAdgroupRecordAccessors")
            .creative.asset_feed_spec.link_urls.at(v)
            .delete(b);
        } else
          return (
            r("FBLogger")("ads_cx").warn(
              "[PAC] Removed label must have a valid entry in assets.",
            ),
            u
          );
      }
      return o("AdsAssetFeedMutationUtils").removeDuplicateAssets(
        u,
        t,
        r("AdsUnifiedCreativeAPIFields").linkURL,
        "adlabels",
      );
    }
    function L(e, t, n, a, i, l) {
      var s,
        u =
          (s = e.creative) == null ||
          (s = s.asset_feed_spec) == null ||
          (s = s.link_urls) == null
            ? void 0
            : s.first(),
        c = u == null ? void 0 : u.get("omnichannel_link_spec"),
        d =
          l != null &&
          l &&
          o("isAccountEligibleForThreeCOL2AdEx").is3coXPacFix();
      if (c != null || d) {
        var m,
          _,
          f,
          g,
          h,
          y = e,
          C = p(e, a),
          b = String(
            (m = o(
              "AdsAssetFeedFieldUtils",
            ).getAssetPACOmnichannelAppEntryForLabel(
              (_ = e.creative) == null || (_ = _.asset_feed_spec) == null
                ? void 0
                : _.link_urls,
              C,
              "android",
            ).fieldValue) != null
              ? m
              : "",
          ),
          v = o(
            "AdsAssetFeedFieldUtils",
          ).getAssetPACOmnichannelAppEntryForLabel(
            (f = e.creative) == null || (f = f.asset_feed_spec) == null
              ? void 0
              : f.link_urls,
            C,
            "ios",
          ),
          S = (g = v.applicationId) != null ? g : "0",
          R = String((h = v.fieldValue) != null ? h : "");
        if (d) {
          var L = r(
            "AdsAdgroupRecordAccessors",
          ).creative.omnichannel_link_spec.app.application_id.get(e);
          (S == null || S === "0") && L != null && (S = L);
        }
        var E = o(
          "AdsUEditorAdgroupWebAndAppMutators",
        ).addAdsOmnichannelLinkSpecUtil(b, R, S, t);
        return (
          (y = o("AdsAssetFeedMutationUtils").setAssetFieldAtIndex(
            y,
            n,
            r("AdsUnifiedCreativeAPIFields").linkURL,
            i,
            "omnichannel_link_spec",
            r("immutable").Map(E),
          )),
          y
        );
      }
      return e;
    }
    function E(e, t, n) {
      var a;
      if (
        !o("AdsAssetFeedUtils").isPACAdgroupFromRecord(n) &&
        !o("AdsAssetFeedUtils").isMCAAdgroupFromRecord(n)
      )
        throw r("FBLogger")("pac_url_mutators")
          .blameToPreviousFrame()
          .mustfixThrow(
            "[PAC] This action should be called on an asset feed, after a video / image customization",
          );
      var i =
        (a = n.creative) == null || (a = a.asset_feed_spec) == null
          ? void 0
          : a.link_urls;
      if (i != null) {
        var l,
          s =
            (l = n.creative) == null ||
            (l = l.asset_feed_spec) == null ||
            (l = l.link_urls) == null
              ? void 0
              : l.update(function (n) {
                  return n.map(function (n) {
                    var r = n;
                    return (
                      (r = r.setIn(["android_url"], e)),
                      r.setIn(["ios_url"], t)
                    );
                  });
                });
        return r(
          "AdsAdgroupRecordAccessors",
        ).creative.asset_feed_spec.link_urls.set(s, n);
      }
      return n;
    }
    ((l.getDefaultWebsiteUrl = e),
      (l.getDefaultDisplayUrl = s),
      (l.addPlacementCustomizationUrl = u),
      (l.getLinkUrlLabelOfTargetRuleHavingPlacementList = p),
      (l.getWebsiteUrlAssetForPlacement = _),
      (l.getDisplayUrlAssetForPlacement = f),
      (l.getDefaultPlacementUrlAssetAndIndex = h),
      (l._chopUrlParameter = y),
      (l._getUrlParam = C),
      (l.copyDefaultPlacementURL = v),
      (l.updateWebsiteUrl = S),
      (l.updateTargetingRulesForUrlCustomization = R),
      (l.updatePlatformDeeplinkURLs = E));
  },
  98,
);
