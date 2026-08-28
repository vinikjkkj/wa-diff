__d(
  "MAIBAAssetUtils",
  [
    "fbt",
    "ix",
    "AdsCoreAdLeftNavFilled24.svg.react",
    "AdsCoreAdSetsLeftNavFilled24.svg.react",
    "AdsCoreCampaignLeftNavFilled24.svg.react",
    "AdsGenericFilter",
    "AdsGenericFilterSet",
    "AdsNavigationChangeNavigationStateDataAction",
    "AdsPEFilterFields",
    "AdsPERouterHelper",
    "GeoBaseText.react",
    "GeoFlexbox.react",
    "IPB4BImage.react",
    "InstagramStoryFilled12.svg.react",
    "MAIBAAssetSelectionTypes.flow",
    "MetaBrandInstagramReelsFilled24.svg.react",
    "MetaBrandWhatsappFilled24.svg.react",
    "PostFilled12.svg.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e,
      c = e || (e = o("react")),
      d = function (t) {
        return new (r("AdsGenericFilter"))(
          r("AdsPEFilterFields").SEARCH_BY_CAMPAIGN_GROUP_ID,
          "EQUAL",
          t,
        );
      },
      m = function (t) {
        return new (r("AdsGenericFilter"))(
          r("AdsPEFilterFields").SEARCH_BY_CAMPAIGN_ID,
          "EQUAL",
          t,
        );
      },
      p = function (t) {
        return new (r("AdsGenericFilter"))(
          r("AdsPEFilterFields").SEARCH_BY_ADGROUP_ID,
          "EQUAL",
          t,
        );
      },
      _ = function (t, n) {
        var e = [];
        switch (t) {
          case "Campaign":
            e.push({
              key: "SEARCH_BY_CAMPAIGN_GROUP_ID",
              filter: d(n),
              label: s._(/*BTDS*/ "Campaign ID"),
            });
            break;
          case "Ad set":
            e.push({
              key: "SEARCH_BY_CAMPAIGN_ID",
              filter: m(n),
              label: s._(/*BTDS*/ "Ad set ID"),
            });
            break;
          case "Ad":
            e.push({
              key: "SEARCH_BY_ADGROUP_ID",
              filter: p(n),
              label: s._(/*BTDS*/ "Ad ID"),
            });
            break;
          default:
            break;
        }
        return e;
      };
    function f(e) {
      return e === "Campaign"
        ? r("AdsCoreCampaignLeftNavFilled24.svg.react")
        : e === "Ad set"
          ? r("AdsCoreAdSetsLeftNavFilled24.svg.react")
          : e === "Ad"
            ? r("AdsCoreAdLeftNavFilled24.svg.react")
            : e === "Post"
              ? r("PostFilled12.svg.react")
              : e === "Reel"
                ? r("MetaBrandInstagramReelsFilled24.svg.react")
                : e === "Story"
                  ? r("InstagramStoryFilled12.svg.react")
                  : e === "WhatsApp Business Account"
                    ? r("MetaBrandWhatsappFilled24.svg.react")
                    : (function () {
                        throw Error(
                          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                            e,
                        );
                      })();
    }
    function g(e) {
      switch (e) {
        case "campaign":
          return "Campaign";
        case "ad_set":
          return "Ad set";
        case "ad":
          return "Ad";
      }
    }
    var h = "<(?:ad-object|asset)\\s+([^>]*?)\\/?>";
    function y(e) {
      var t = e.match(/type\s*=\s*[\'\"]+([^\'\"]+)/i),
        n = e.match(/ids\s*=\s*[\'\"]+([^\'\"]+)/i),
        r = e.match(/display\s*=\s*[\'\"]+(.+?)[\'\"]+\s*$/i);
      return t == null || n == null
        ? null
        : { display: r != null ? r[1] : "", ids: n[1].split(","), type: t[1] };
    }
    function C(e) {
      switch (e.toLowerCase()) {
        case "campaigns":
          return "Campaign";
        case "adsets":
          return "Ad set";
        case "ads":
          return "Ad";
        case "posts":
          return "Post";
        case "reels":
          return "Reel";
        case "stories":
          return "Story";
        default:
          return null;
      }
    }
    function b(e) {
      var t = e.getAuxiliaryData();
      return "objective" in t
        ? "Campaign"
        : "hasTargeting" in t
          ? "Ad set"
          : "Ad";
    }
    function v(e) {
      switch (e) {
        case "Campaign":
          return "L3";
        case "Ad set":
          return "L2";
        case "Ad":
          return "L1";
      }
    }
    function S(e, t) {
      if (
        !(
          e === "Post" ||
          e === "Reel" ||
          e === "Story" ||
          e === "WhatsApp Business Account"
        )
      ) {
        var n = _(e, t),
          o = n[0],
          a = new (r("AdsGenericFilterSet"))([o.filter]),
          l = v(e);
        r("AdsPERouterHelper")
          .getRouteBuilder()
          .section(l)
          .clearAllSelectedIDs()
          .clearFilters()
          .filters(a)
          .closeTray()
          .action(function () {
            return r("AdsNavigationChangeNavigationStateDataAction").dispatch(
              { navState: { tool: "MANAGE_ADS", section: l } },
              { line: "280", module: "MAIBAAssetUtils.js", moduleID: i.id },
            );
          })
          .navigate();
      }
    }
    var R = {
      emptyStateContainer: {
        width: "x1dz1jew",
        maxWidth: "x1jkqq1h",
        paddingTop: "x1cnzs8",
        paddingInlineEnd: "x1xnnf8n",
        paddingBottom: "xx6bls6",
        paddingInlineStart: "x106a9eq",
        $$css: !0,
      },
    };
    function L(e) {
      return e === "" ? "placeholder" : "value";
    }
    function E(e, t, n) {
      var r = n != null && n.trim() !== "" ? n : "Story";
      if (e === "VIDEOS") {
        if (t != null && t > 0) {
          if (t < 60)
            return {
              displayName: s._(
                /*BTDS*/ '_j{"*":"Video \\u00b7 {number} seconds","_1":"Video \\u00b7 {number} second"}',
                [s._plural(t), s._param("number", t)],
              ),
              loggingName: r,
            };
          var o = Math.floor(t / 60),
            a = t % 60;
          return a > 0
            ? {
                displayName: s._(
                  /*BTDS*/ '_j{"*":{"*":"Video \\u00b7 {minutes} minutes {seconds} seconds","_1":"Video \\u00b7 {minutes} minutes {seconds} second"},"_1":{"*":"Video \\u00b7 {minutes} minute {seconds} seconds","_1":"Video \\u00b7 {minutes} minute {seconds} second"}}',
                  [
                    s._plural(o),
                    s._plural(a),
                    s._param("minutes", o),
                    s._param("seconds", a),
                  ],
                ),
                loggingName: r,
              }
            : {
                displayName: s._(
                  /*BTDS*/ '_j{"*":"Video \\u00b7 {number} minutes","_1":"Video \\u00b7 {number} minute"}',
                  [s._plural(o), s._param("number", o)],
                ),
                loggingName: r,
              };
        }
        return { displayName: s._(/*BTDS*/ "Video"), loggingName: r };
      }
      return e === "PHOTOS"
        ? { displayName: s._(/*BTDS*/ "Photo"), loggingName: r }
        : { displayName: r, loggingName: r };
    }
    function k(e, t) {
      return (e == null || e.trim() === "") &&
        o("MAIBAAssetSelectionTypes.flow").isOrganicContentAssetType(t)
        ? s._(/*BTDS*/ "This post has no text").toString()
        : e;
    }
    function I(e) {
      var t = o("react-compiler-runtime").c(7),
        n = e.type,
        a = n === "no-ads",
        i;
      t[0] !== a
        ? ((i = u(a ? "901813" : "925059")), (t[0] = a), (t[1] = i))
        : (i = t[1]);
      var l;
      t[2] !== i
        ? ((l = c.jsx(r("IPB4BImage.react"), { src: i })),
          (t[2] = i),
          (t[3] = l))
        : (l = t[3]);
      var d;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = c.jsx(r("GeoBaseText.react"), {
            color: "placeholder",
            size: "value",
            children: s._(/*BTDS*/ "No results found"),
          })),
          (t[4] = d))
        : (d = t[4]);
      var m;
      return (
        t[5] !== l
          ? ((m = c.jsxs(r("GeoFlexbox.react"), {
              alignItems: "center",
              direction: "column",
              gap: 8,
              grow: 1,
              justifyContent: "center",
              xstyle: R.emptyStateContainer,
              children: [l, d],
            })),
            (t[5] = l),
            (t[6] = m))
          : (m = t[6]),
        m
      );
    }
    ((l.getAssetIcon = f),
      (l.convertToMAIBAAssetType = g),
      (l.AD_OBJECT_TAG_PATTERN = h),
      (l.parseAdObjectTagAttrs = y),
      (l.getAdObjectLevel = C),
      (l.getSearchableEntryAssetType = b),
      (l.selectAssetsInTable = S),
      (l.getAssetNameColor = L),
      (l.getStoryDisplayInfo = E),
      (l.getAssetDisplayName = k),
      (l.MAIBAEmptyState = I));
  },
  226,
);
