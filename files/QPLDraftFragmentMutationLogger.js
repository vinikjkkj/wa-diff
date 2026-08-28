__d(
  "QPLDraftFragmentMutationLogger",
  ["QPLSharing", "QuickPerformanceLogger", "qpl"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s() {
      d() ||
        (e || (e = r("QuickPerformanceLogger"))).markerStart(
          r("qpl")._(270214564, "338"),
          void 0,
          void 0,
          { enableE2ETracing: !0 },
        );
    }
    function u() {
      d() &&
        (e || (e = r("QuickPerformanceLogger"))).markerEnd(
          r("qpl")._(270214564, "338"),
          2,
        );
    }
    function c() {
      var t,
        n = (e || (e = r("QuickPerformanceLogger"))).getMarker(
          r("qpl")._(270214564, "338"),
          0,
        );
      (n == null || (t = n.points) == null ? void 0 : t.length) == 0 &&
        (e || (e = r("QuickPerformanceLogger"))).markerDrop(
          r("qpl")._(270214564, "338"),
        );
    }
    function d() {
      return (
        (e || (e = r("QuickPerformanceLogger"))).getMarker(
          r("qpl")._(270214564, "338"),
          0,
        ) != null
      );
    }
    function m(e, t, n) {
      n
        ? (r("QPLSharing").emitPoint("DRAFT_SYNC", "MUTATE_CAMPAIGN_START", {
            timestamp: t,
            data: {
              string: {
                ad_object_level: "ad_set",
                action: e != null ? e : "UNKNOWN",
              },
            },
          }),
          r("QPLSharing").emitPoint("DRAFT_SYNC", "MUTATE_CAMPAIGN_END"))
        : c();
    }
    function p(e, t, n) {
      n
        ? (r("QPLSharing").emitPoint(
            "DRAFT_SYNC",
            "MUTATE_CAMPAIGN_GROUP_START",
            {
              timestamp: t,
              data: {
                string: {
                  ad_object_level: "campaign",
                  action: e != null ? e : "UNKNOWN",
                },
              },
            },
          ),
          r("QPLSharing").emitPoint("DRAFT_SYNC", "MUTATE_CAMPAIGN_GROUP_END"))
        : c();
    }
    function _(e) {
      r("QPLSharing").emitPoint(
        "DRAFT_SYNC",
        "DRAFT_FRAGMENT_CREATE_API_CALL_START",
        { data: { string: { ads_application_id: e } } },
      );
    }
    function f(e) {
      r("QPLSharing").emitPoint(
        "DRAFT_SYNC",
        "DRAFT_FRAGMENT_UPDATE_API_CALL_START",
        { data: { string: { ads_application_id: e } } },
      );
    }
    ((l.markerStart = s),
      (l.markerEndSuccess = u),
      (l.markerDropIfEmpty = c),
      (l.qplDraftSyncEmitPointMutateCampaign = m),
      (l.qplDraftSyncEmitPointMutateCampaignGroup = p),
      (l.qplDraftSyncEmitPointCreateAPICall = _),
      (l.qplDraftSyncEmitPointUpdateAPICall = f));
  },
  98,
);
