__d(
  "MAIBAR23LoggingUtils",
  [
    "ALToolTab",
    "AdsInterfacesLogger",
    "react",
    "react-compiler-runtime",
    "useAdsALCustomEventLogger",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).useCallback,
      u = {
        e2e_seed_media_impression: "e2e_seed_media_impression",
        e2e_seed_media_picker_opened: "e2e_seed_media_picker_opened",
        e2e_seed_media_selected: "e2e_seed_media_selected",
        e2e_seed_media_uploaded: "e2e_seed_media_uploaded",
        e2e_seed_media_selection_failed: "e2e_seed_media_selection_failed",
      },
      c = {
        e2e_creative_gen_variant_selected: "e2e_creative_gen_variant_selected",
      };
    function d(e) {
      var t,
        n = o("ALToolTab").getCurrentToolTab(),
        a = {
          eventName: "maiba_r23",
          data:
            ((t = {}),
            (t.sub_event = e.event),
            (t.message_id = e.conversationID),
            (t.message = e.data),
            (t.campaign_group_id = e.campaignGroupID),
            (t.campaign_id = e.campaignID),
            (t.adgroup_id = e.adgroupID),
            (t.selected_ad_object_ids = e.campaignGroupIDs),
            (t.eligible_ad_object_ids = e.campaignIDs),
            (t.created_ad_object_ids = e.adgroupIDs),
            (t.sub_session_id = e.botResponseId),
            (t.to_tool = n.tool),
            (t.to_tab = n.tab),
            t),
        };
      e.logOnce === !0
        ? r("AdsInterfacesLogger").logOnce(a)
        : r("AdsInterfacesLogger").log(a);
    }
    function m(e) {
      var t,
        n = o("ALToolTab").getCurrentToolTab(),
        a = {
          eventName: "maiba_r23",
          data:
            ((t = {}),
            (t.sub_event = e.subEvent),
            (t.error_name = e.errorName),
            (t.message = e.message),
            (t.stack_trace = e.stackTrace),
            (t.ad_account_id = e.adAccountID),
            (t.campaign_group_id = e.campaignGroupID),
            (t.campaign_id = e.campaignID),
            (t.adgroup_id = e.adgroupID),
            (t.draft_id = e.draftID),
            (t.message_id = e.conversationID),
            (t.sub_session_id = e.botResponseId),
            (t.to_tool = n.tool),
            (t.to_tab = n.tab),
            t),
        };
      e.logOnce === !0
        ? r("AdsInterfacesLogger").logOnce(a)
        : r("AdsInterfacesLogger").log(a);
    }
    function p(e, t, n, o) {
      var a;
      r("AdsInterfacesLogger").logOnce({
        eventName: "maiba_r23",
        data:
          ((a = {}),
          (a.sub_event = "experiment_eligibility"),
          (a.qe_universe_name = e),
          (a.experiment_variant =
            t == null ? "off" : t === !0 ? "test" : "control"),
          (a.is_enabled = n),
          (a.caller = o),
          a),
      });
    }
    function _() {
      var e = o("react-compiler-runtime").c(2),
        t = r("useAdsALCustomEventLogger")(),
        n;
      return (
        e[0] !== t
          ? ((n = function (n) {
              var e = {};
              ((e["maiba:seed_media_flow"] = n.flow),
                n.conversationID != null &&
                  (e["maiba:conversation_id"] = n.conversationID),
                n.adAccountID != null &&
                  (e["maiba:ad_account_id"] = n.adAccountID),
                n.source != null && (e["maiba:seed_media_source"] = n.source),
                n.impressionSource != null &&
                  (e["maiba:seed_media_impression_source"] =
                    n.impressionSource),
                n.mode != null && (e["maiba:seed_media_mode"] = n.mode),
                n.availableSources != null &&
                  (e["maiba:seed_media_available_sources"] =
                    n.availableSources),
                n.mediaType != null &&
                  (e["maiba:seed_media_type"] = n.mediaType),
                n.errorCategory != null &&
                  (e["maiba:seed_media_error_category"] = n.errorCategory),
                n.failureStage != null &&
                  (e["maiba:seed_media_failure_stage"] = n.failureStage));
              var r = {};
              (n.count != null &&
                (r["maiba:seed_media_count"] = String(n.count)),
                t.log(u[n.event], { int: r, string: e }));
            }),
            (e[0] = t),
            (e[1] = n))
          : (n = e[1]),
        n
      );
    }
    function f() {
      var e = o("react-compiler-runtime").c(2),
        t = r("useAdsALCustomEventLogger")(),
        n;
      return (
        e[0] !== t
          ? ((n = function (n) {
              var e = {};
              ((e["maiba:seed_media_flow"] = n.flow),
                (e["maiba:creative_gen_media_type"] = n.mediaType),
                n.conversationID != null &&
                  (e["maiba:conversation_id"] = n.conversationID),
                n.adAccountID != null &&
                  (e["maiba:ad_account_id"] = n.adAccountID));
              var r = {};
              (n.selectedCount != null &&
                (r["maiba:creative_gen_selected_count"] = String(
                  n.selectedCount,
                )),
                t.log(c[n.event], { int: r, string: e }));
            }),
            (e[0] = t),
            (e[1] = n))
          : (n = e[1]),
        n
      );
    }
    ((l.logMAIBAR23Event = d),
      (l.logMAIBAR23Error = m),
      (l.logMAIBAR23Exposure = p),
      (l.useLogMAIBAR23SeedMediaEvent = _),
      (l.useLogMAIBAR23CreativeGenEvent = f));
  },
  98,
);
