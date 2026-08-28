__d(
  "AdsCreativeEndStateV2Utils",
  [
    "AdCampaignDestination",
    "AdsAPIAdgroupRecordUtils",
    "AdsAPICampaignRecordUtils",
    "AdsAssetFeedUtils",
    "AdsAutomaticFlowUtils",
    "AdsL1VideoFlowOptimizationGK",
    "AdsPCAUnifiedFormatEligibilityUtils",
    "AdsSAInDAUtils",
    "AdsUEditorUnifiedCreationAwarenessConstants",
    "gkx",
    "immutable",
    "isMessageMarketingEligibleForCESV2",
    "isMessageMarketingEnabledFromCampaign",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = new Set([
        (e = r("AdCampaignDestination")).MESSENGER,
        e.WHATSAPP,
        e.INSTAGRAM_DIRECT,
        e.MESSAGING_MESSENGER_WHATSAPP,
        e.MESSAGING_INSTAGRAM_DIRECT_MESSENGER,
        e.MESSAGING_INSTAGRAM_DIRECT_WHATSAPP,
        e.MESSAGING_INSTAGRAM_DIRECT_MESSENGER_WHATSAPP,
      ]),
      u = new Set(["MESSENGER", "WHATSAPP", "INSTAGRAM_DIRECT"]);
    function c(e) {
      return e
        ? r("gkx")("3456") || r("gkx")("20949")
        : r("gkx")("4840") || r("gkx")("4181");
    }
    function d(e) {
      return c(e);
    }
    function m() {
      return d("silent") || r("gkx")("4181");
    }
    function p() {
      return c("silent");
    }
    function _(e) {
      return (
        e != null &&
        ((e instanceof Array && e.length > 0) ||
          (e instanceof r("immutable").List && e.size > 0))
      );
    }
    function f(e, t) {
      var n,
        r = e.destination_type,
        o =
          (n = t.creative) == null ||
          (n = n.object_story_spec) == null ||
          (n = n.link_data) == null ||
          (n = n.call_to_action) == null ||
          (n = n.value) == null
            ? void 0
            : n.app_destination;
      return !!((r != null && s.has(r)) || (o != null && u.has(o)));
    }
    function g(e, t) {
      var n,
        a,
        i,
        l,
        s,
        u,
        c,
        d,
        m,
        p,
        g =
          (n = t.creative) == null || (n = n.asset_feed_spec) == null
            ? void 0
            : n.bodies,
        h =
          (a = t.creative) == null ||
          (a = a.object_story_spec) == null ||
          (a = a.link_data) == null
            ? void 0
            : a.message,
        y =
          (i = t.creative) == null ||
          (i = i.object_story_spec) == null ||
          (i = i.video_data) == null
            ? void 0
            : i.message,
        C =
          _(g) ||
          (h != null &&
            h !== "" &&
            e.destination_type !== r("AdCampaignDestination").WHATSAPP) ||
          (y != null &&
            y !== "" &&
            e.destination_type !== r("AdCampaignDestination").WHATSAPP),
        b =
          (l = t.creative) == null || (l = l.asset_feed_spec) == null
            ? void 0
            : l.titles,
        v =
          (s = t.creative) == null ||
          (s = s.object_story_spec) == null ||
          (s = s.link_data) == null
            ? void 0
            : s.name,
        S =
          (u = t.creative) == null ||
          (u = u.object_story_spec) == null ||
          (u = u.video_data) == null
            ? void 0
            : u.title,
        R =
          (c = t.creative) == null || (c = c.branded_content) == null
            ? void 0
            : c.testimonial,
        L =
          _(b) ||
          (v != null &&
            v !== "" &&
            !f(e, t) &&
            v.toLowerCase() !==
              o(
                "AdsUEditorUnifiedCreationAwarenessConstants",
              ).MULTI_DESTINATION_HEADLINE.toLowerCase()) ||
          (S != null && S !== ""),
        E =
          (d = t.creative) == null || (d = d.asset_feed_spec) == null
            ? void 0
            : d.descriptions,
        k =
          (m = t.creative) == null ||
          (m = m.object_story_spec) == null ||
          (m = m.link_data) == null
            ? void 0
            : m.description,
        I =
          (p = t.creative) == null ||
          (p = p.object_story_spec) == null ||
          (p = p.video_data) == null
            ? void 0
            : p.link_description,
        T = _(E) || (k != null && k !== "") || (I != null && I !== ""),
        D = R != null && R !== "";
      return !C && !L && !T && !D;
    }
    function h(e) {
      var t,
        n,
        r =
          e == null ||
          (t = e.creative) == null ||
          (t = t.media_sourcing_spec) == null
            ? void 0
            : t.images,
        o =
          e == null ||
          (n = e.creative) == null ||
          (n = n.media_sourcing_spec) == null
            ? void 0
            : n.videos,
        a =
          r != null &&
          ((!Array.isArray(r) &&
            r.size > 0 &&
            r.some(function (e) {
              return (
                (e == null ? void 0 : e.get("opt_in_status")) !== "opt_out" &&
                (e == null ? void 0 : e.get("source")) === "multi_media"
              );
            })) ||
            (Array.isArray(r) &&
              r.some(function (e) {
                return (
                  String(e == null ? void 0 : e.opt_in_status) !== "opt_out" &&
                  String(e == null ? void 0 : e.source) === "multi_media"
                );
              }))),
        i =
          o != null &&
          ((!Array.isArray(o) &&
            o.size > 0 &&
            o.some(function (e) {
              return (
                (e == null ? void 0 : e.get("opt_in_status")) !== "opt_out" &&
                (e == null ? void 0 : e.get("source")) === "multi_media"
              );
            })) ||
            (Array.isArray(o) &&
              o.some(function (e) {
                return (
                  String(e == null ? void 0 : e.opt_in_status) !== "opt_out" &&
                  String(e == null ? void 0 : e.source) === "multi_media"
                );
              })));
      return a || i;
    }
    function y(e) {
      var t, n, r, o, a, i, l;
      return (
        ((t = e.creative) == null ||
        (t = t.object_story_spec) == null ||
        (t = t.photo_data) == null
          ? void 0
          : t.image_hash) != null ||
        ((n = e.creative) == null ||
        (n = n.object_story_spec) == null ||
        (n = n.template_data) == null
          ? void 0
          : n.image_hash) != null ||
        ((r = e.creative) == null ||
        (r = r.object_story_spec) == null ||
        (r = r.link_data) == null
          ? void 0
          : r.image_hash) != null ||
        ((o = e.creative) == null ||
        (o = o.object_story_spec) == null ||
        (o = o.link_data) == null
          ? void 0
          : o.picture) != null ||
        ((a = e.creative) == null ||
        (a = a.object_story_spec) == null ||
        (a = a.video_data) == null
          ? void 0
          : a.video_id) != null ||
        ((i = e.creative) == null || (i = i.asset_feed_spec) == null
          ? void 0
          : i.images) != null ||
        ((l = e.creative) == null || (l = l.asset_feed_spec) == null
          ? void 0
          : l.videos) != null
      );
    }
    function C(e, t, n) {
      var r;
      return (
        ((r = t.promoted_object) == null ? void 0 : r.place_page_set_id) ==
          null &&
        !o("AdsAssetFeedUtils").isRegularDCOAdgroupFromRecord(e) &&
        o("AdsAutomaticFlowUtils").isStaticSingleImageOrVideoFormat(e) &&
        !o("AdsAPIAdgroupRecordUtils").isFlexibleFormatAd(e) &&
        !o("AdsAPIAdgroupRecordUtils").isCreativeAssetGroupingsAd(e) &&
        !o("AdsSAInDAUtils").isSAInDAEnabledUsingCampaignAndAdgroup(t, e, n) &&
        !(
          o(
            "isMessageMarketingEnabledFromCampaign",
          ).isMessageMarketingEnabledFromCampaign(t) &&
          !o(
            "isMessageMarketingEligibleForCESV2",
          ).isMessageMarketingEligibleForCESV2(e, t)
        ) &&
        !o("AdsAPICampaignRecordUtils").isScheduledLiveVideoAd(t)
      );
    }
    function b(e, t, n, r) {
      var a = v(e, t, n);
      return !a || !r
        ? a
        : !o("AdsL1VideoFlowOptimizationGK").isL1VideoFlowOptimizationEnabled();
    }
    function v(e, t, n) {
      return o("AdsPCAUnifiedFormatEligibilityUtils").isEligiblePCAUnifiedL1(
        n,
        t,
      )
        ? C(t, e, n) && d() && !h(t)
        : C(t, e, n) && d() && !y(t) && g(e, t);
    }
    ((l.shouldRenderCESV2 = d),
      (l.shouldRenderCESTextUpdate = m),
      (l.shouldRenderCESConnectedSourcesUpdate = p),
      (l.isPreWizardSetupForTextGen = g),
      (l.hasMediaSelected = y),
      (l.isCESV2TargetedAdsFormatFromAdgroupAndCampaign = C),
      (l.isPreWizardSetupAndEligibleByExperiment = b),
      (l.isPreWizardSetupFromSpec = v));
  },
  98,
);
