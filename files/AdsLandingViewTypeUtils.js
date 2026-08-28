__d(
  "AdsLandingViewTypeUtils",
  [
    "invariant",
    "AdsAPICampaignGroupRecordUtils",
    "AdsAPIChildAttachmentPaths",
    "AdsAPIObjectives",
    "AdsAdgroupSemanticFields",
    "AdsAdgroupSpecUtils",
    "AdsAssetFeedFieldUtils",
    "AdsChildAttachmentsUtils",
    "AdsODAXUtils",
    "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
    "AdsUEditorCampaignAdObjectsUtils",
    "immutable",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = r("immutable").List([]),
      u = ["FACEBOOK_PAGE", "STORE_LOCATOR", "GET_DIRECTIONS"];
    function c(t, n) {
      var a = t.adgroup,
        i = o(
          "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
        ).getAdgroupSpecPathPlugin(t),
        l = o("AdsChildAttachmentsUtils").getChildAttachmentsPath(a),
        s = o("AdsAPICampaignGroupRecordUtils").getObjective(t.campaignGroup),
        u = ((l && a.getIn(l)) || e).filter(function (e) {
          return !e.getIn(r("AdsAPIChildAttachmentPaths").PLACE_DATA.path);
        }),
        c;
      if (u && u.size) {
        var m;
        c =
          (m = u.get(0)) == null
            ? void 0
            : m.getIn(r("AdsAPIChildAttachmentPaths").LINK);
      } else
        c = i
          ? o("AdsAssetFeedFieldUtils").firstAsset_TALK_WITH_ACE_BEFORE_USE(
              r("AdsAdgroupSemanticFields").linkURL.get(i, a),
              "website_url",
            )
          : o("AdsAdgroupSpecUtils").getLink(a);
      return d(c, n && n.link, s);
    }
    function d(e, t, n) {
      var o = n === r("AdsAPIObjectives").STORE_VISITS;
      return h(e, t) && !o
        ? "FACEBOOK_PAGE"
        : h(e, "https://fb.com/store_locator")
          ? "STORE_LOCATOR"
          : h(e, "https://fb.com/dynamic_get_directions")
            ? "GET_DIRECTIONS"
            : "EXTERNAL";
    }
    function m(e, t, n, o) {
      var a = r("AdsAdgroupSemanticFields").childAttachments.get(n, e);
      (a && a.size) || s(0, 234);
      var i = a
          .filter(function (e) {
            return !e.getIn(["place_data"]);
          })
          .map(function (e) {
            return d(e.getIn(["link"]), t, o);
          }),
        l = function (t) {
          if (
            i.every(function (e) {
              return e === t;
            })
          )
            return { v: t };
        },
        c;
      for (var m of u) if (((c = l(m)), c)) return c.v;
      return "EXTERNAL";
    }
    function p(e, t) {
      var n;
      switch (e) {
        case "FACEBOOK_PAGE":
          n = t.link;
          break;
        case "STORE_LOCATOR":
          n = "https://fb.com/store_locator";
          break;
        case "GET_DIRECTIONS":
          n = "https://fb.com/dynamic_get_directions";
          break;
        case "EXTERNAL":
          n = t.website;
          break;
        default:
          n = null;
      }
      return n || "";
    }
    function _(e) {
      var t;
      if (e.length === 0) return [];
      var n = e.map(g),
        o = n[0],
        a = babelHelpers.arrayLikeToArray(n).slice(1);
      return (t = r("immutable").Set(o)).intersect.apply(t, a).toArray();
    }
    function f(e, t) {
      var n = [];
      switch (e) {
        case r("AdsAPIObjectives").STORE_VISITS:
          switch (t) {
            case "GET_DIRECTIONS":
              n = ["EXTERNAL", "STORE_LOCATOR", "GET_DIRECTIONS"];
              break;
            default:
              n = ["EXTERNAL", "STORE_LOCATOR"];
          }
          break;
        default:
          n = ["FACEBOOK_PAGE", "EXTERNAL"];
      }
      return n;
    }
    function g(e) {
      var t,
        n,
        r,
        a,
        i,
        l,
        s,
        u,
        c = o("AdsAPICampaignGroupRecordUtils").getObjective(e.campaignGroup),
        d =
          (t = e.campaign.promoted_object) == null
            ? void 0
            : t.full_funnel_objective,
        m = o("AdsODAXUtils").maybeTranslateObjective(
          d || c,
          o("AdsUEditorCampaignAdObjectsUtils").getPromotedObjectType(e),
          e.campaign.optimization_goal,
        ),
        p = (n = e.adgroup.creative) == null ? void 0 : n.object_story_spec,
        _ =
          (r =
            (a =
              (i =
                p == null ||
                (l = p.template_data) == null ||
                (l = l.call_to_action) == null
                  ? void 0
                  : l.type) != null
                ? i
                : p == null ||
                    (s = p.video_data) == null ||
                    (s = s.call_to_action) == null
                  ? void 0
                  : s.type) != null
              ? a
              : p == null ||
                  (u = p.link_data) == null ||
                  (u = u.call_to_action) == null
                ? void 0
                : u.type) != null
            ? r
            : null;
      return f(m, _);
    }
    function h(e, t) {
      return (
        e != null && t != null && e.replace(/\/$/, "") === t.replace(/\/$/, "")
      );
    }
    ((l.fromAdObjects = c),
      (l.fromURLComparison = d),
      (l.fromAttachmentsURLComparison = m),
      (l.linkFromType = p),
      (l.getSupportedTypesFromAdObjects = _),
      (l.getSupportedTypesByObjectiveAndCTA = f),
      (l.getSupportedTypesFromAdObject = g),
      (l.areEqualURLs = h));
  },
  98,
);
