__d(
  "MAIBAR23LoggingUtils",
  [
    "ALToolTab",
    "AdsALCustomEvent",
    "AdsInterfacesLogger",
    "MAIBAInlinedContext",
    "react",
    "useAdsALCustomEventLogger",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = (s || (s = o("react"))).useCallback,
      c = "website_media";
    function d() {
      var e;
      return ((e = o("MAIBAInlinedContext").getInlinedContext()) == null
        ? void 0
        : e.seed_media_flow) === "quick_create"
        ? "quick_create"
        : "organic_chat";
    }
    function m() {
      var e;
      return (
        ((e = o("MAIBAInlinedContext").getInlinedContext()) == null
          ? void 0
          : e.seed_media_source) === c
      );
    }
    var p = {
        e2e_seed_media_impression: "e2e_seed_media_impression",
        e2e_seed_media_picker_opened: "e2e_seed_media_picker_opened",
        e2e_seed_media_removed: "e2e_seed_media_removed",
        e2e_seed_media_selected: "e2e_seed_media_selected",
        e2e_seed_media_sent: "e2e_seed_media_sent",
        e2e_seed_media_uploaded: "e2e_seed_media_uploaded",
        e2e_seed_media_selection_failed: "e2e_seed_media_selection_failed",
      },
      _ = {
        e2e_creative_gen_selection_failed: "e2e_creative_gen_selection_failed",
        e2e_creative_gen_suggestion_shown: "e2e_creative_gen_suggestion_shown",
        e2e_creative_gen_variant_selected: "e2e_creative_gen_variant_selected",
      },
      f = {
        ad_step: "e2e_recommended_media_ad_step",
        ad_viewed: "e2e_recommended_media_ad_viewed",
        add_media_click: "e2e_recommended_media_add_media_click",
        confirmed: "e2e_recommended_media_confirmed",
        entry_click: "e2e_recommended_media_entry_click",
        entry_impression: "e2e_recommended_media_entry_impression",
        failed: "e2e_recommended_media_failed",
        gen_failed: "e2e_recommended_media_gen_failed",
        gen_reached_end: "e2e_recommended_media_gen_reached_end",
        gen_shown: "e2e_recommended_media_gen_shown",
        gen_step: "e2e_recommended_media_gen_step",
        gen_tile_toggled: "e2e_recommended_media_gen_tile_toggled",
        impression: "e2e_recommended_media_impression",
        tile_toggled: "e2e_recommended_media_tile_toggled",
        variant_step: "e2e_recommended_media_variant_step",
      },
      g = {
        adCount: "maiba:rec_media_ad_count",
        addedCount: "maiba:rec_media_added_count",
        adIndex: "maiba:rec_media_ad_index",
        adsWithSelectionCount: "maiba:rec_media_ads_with_selection_count",
        authoredCount: "maiba:rec_media_authored_count",
        entryPoint: "maiba:rec_media_entry_point",
        errorCategory: "maiba:rec_media_error_category",
        imageCount: "maiba:rec_media_image_count",
        isAdded: "maiba:rec_media_is_added",
        isBlocking: "maiba:rec_media_is_blocking",
        isReused: "maiba:rec_media_is_reused",
        isSelected: "maiba:rec_media_is_selected",
        mediaType: "maiba:rec_media_media_type",
        minRequired: "maiba:rec_media_min_required",
        outcome: "maiba:rec_media_outcome",
        reusedCount: "maiba:rec_media_reused_count",
        round: "maiba:rec_media_round",
        selectedCount: "maiba:rec_media_selected_count",
        selectedImageCount: "maiba:rec_media_selected_image_count",
        selectedRanks: "maiba:rec_media_selected_ranks",
        selectedVideoCount: "maiba:rec_media_selected_video_count",
        shownCount: "maiba:rec_media_shown_count",
        stepAction: "maiba:rec_media_step_action",
        tileRank: "maiba:rec_media_tile_rank",
        uniqueSelectedCount: "maiba:rec_media_unique_selected_count",
        variantAdCount: "maiba:rec_media_variant_ad_count",
        variantAdIndexes: "maiba:rec_media_variant_ad_indexes",
        variantCandidateCount: "maiba:rec_media_variant_candidate_count",
        variantEligibleAdCount: "maiba:rec_media_variant_eligible_ad_count",
        variantStepShown: "maiba:rec_media_variant_step_shown",
        variantVideoOnlyCount: "maiba:rec_media_variant_video_only_count",
        videoCount: "maiba:rec_media_video_count",
        withReasonCount: "maiba:rec_media_with_reason_count",
      },
      h = {
        add_media_click: "e2e_website_media_add_media_click",
        applied: "e2e_website_media_applied",
        consent_toggled: "e2e_website_media_consent_toggled",
        failed: "e2e_website_media_failed",
        form_shown: "e2e_website_media_form_shown",
        option_clicked: "e2e_website_media_option_clicked",
        option_shown: "e2e_website_media_option_shown",
        picker_shown: "e2e_website_media_picker_shown",
        tile_toggled: "e2e_website_media_tile_toggled",
        url_invalid: "e2e_website_media_url_invalid",
        url_submitted: "e2e_website_media_url_submitted",
        variant_ad_selector_shown:
          "e2e_website_media_variant_ad_selector_shown",
        variants_shown: "e2e_website_media_variants_shown",
      },
      y = babelHelpers.extends({}, g, {
        adCount: "maiba:website_media_ad_count",
        availableOptions: "maiba:website_media_available_options",
        selectedCount: "maiba:website_media_selected_count",
        shownCount: "maiba:website_media_shown_count",
        urlSource: "maiba:website_media_url_source",
      }),
      C = {
        add_media_click: "e2e_upload_media_add_media_click",
        confirmed: "e2e_upload_media_confirmed",
        failed: "e2e_upload_media_failed",
        option_clicked: "e2e_upload_media_option_clicked",
        picker_shown: "e2e_upload_media_picker_shown",
      };
    function b(e) {
      var t,
        n = ((t = {}), (t["maiba:seed_media_flow"] = d()), t);
      return (
        e.adAccountID != null && (n["maiba:ad_account_id"] = e.adAccountID),
        e.botResponseID != null &&
          (n["maiba:bot_response_id"] = e.botResponseID),
        e.conversationID != null &&
          (n["maiba:conversation_id"] = e.conversationID),
        n
      );
    }
    function v(e, t) {
      var n = {},
        r = {},
        o = b(e);
      for (var a of Object.entries(t)) {
        var i = a[0],
          l = a[1],
          s = g[i];
        s == null ||
          l == null ||
          (typeof l == "boolean"
            ? (n[s] = l)
            : typeof l == "number"
              ? (r[s] = String(l))
              : (o[s] = String(l)));
      }
      return { bool: n, int: r, string: o };
    }
    var S =
      ((e = {}),
      (e.ad_account_id = "maiba:ad_account_id"),
      (e.adgroup_id = "adgroup_id"),
      (e.caller = "maiba:caller"),
      (e.campaign_group_id = "campaign_group_id"),
      (e.campaign_id = "campaign_id"),
      (e.created_ad_object_ids = "maiba:created_ad_object_ids"),
      (e.draft_id = "maiba:draft_id"),
      (e.eligible_ad_object_ids = "maiba:eligible_ad_object_ids"),
      (e.error_name = "maiba:error_name"),
      (e.experiment_variant = "maiba:experiment_variant"),
      (e.is_enabled = "maiba:is_enabled"),
      (e.item_count = "maiba:item_count"),
      (e.message = "maiba:message"),
      (e.message_id = "maiba:conversation_id"),
      (e.module_name = "maiba:module_name"),
      (e.qe_universe_name = "maiba:qe_universe_name"),
      (e.recommendation_rank = "maiba:recommendation_rank"),
      (e.selected_ad_object_ids = "maiba:selected_ad_object_ids"),
      (e.selected_category_id = "maiba:selected_category_id"),
      (e.source = "maiba:source"),
      (e.stack_trace = "maiba:error_stacktrace"),
      (e.sub_event = "maiba:sub_event"),
      (e.sub_session_id = "maiba:bot_response_id"),
      e);
    function R(e, t) {
      if (r("AdsInterfacesLogger").get() != null) {
        t === !0
          ? r("AdsInterfacesLogger").logOnce(e)
          : r("AdsInterfacesLogger").log(e);
        return;
      }
      var n = {},
        a = {},
        i = {};
      for (var l of Object.entries((s = e.data) != null ? s : {})) {
        var s,
          u = l[0],
          c = l[1],
          d = S[u];
        d == null ||
          c == null ||
          (typeof c == "boolean"
            ? (n[d] = c)
            : typeof c == "number"
              ? (a[d] = String(c))
              : (i[d] = Array.isArray(c) ? c.join(",") : String(c)));
      }
      var m = { bool: n, int: a, string: i };
      t === !0
        ? o("AdsALCustomEvent").AdsALCustomEventLogger.logOnce("maiba_r23", m)
        : o("AdsALCustomEvent").AdsALCustomEventLogger.log("maiba_r23", m);
    }
    function L(e) {
      var t,
        n = o("ALToolTab").getCurrentToolTab(),
        r = {
          eventName: "maiba_r23",
          data:
            ((t = {}),
            (t.sub_event = e.event),
            (t.item_count = e.itemCount),
            (t.recommendation_rank = e.recommendationRank),
            (t.selected_category_id = e.selectedCategoryID),
            (t.source = e.source),
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
      R(r, e.logOnce);
    }
    function E(e) {
      var t,
        n = o("ALToolTab").getCurrentToolTab(),
        r = {
          eventName: "maiba_r23",
          data:
            ((t = {}),
            (t.sub_event = e.subEvent),
            (t.error_name = e.errorName),
            (t.message = e.message),
            (t.module_name = e.moduleName),
            (t.source = e.source),
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
      R(r, e.logOnce);
    }
    function k(e, t, n, r, o) {
      var a;
      R(
        {
          eventName: "maiba_r23",
          data:
            ((a = {}),
            (a.sub_event = "experiment_eligibility"),
            (a.qe_universe_name = e),
            (a.experiment_variant =
              t == null ? "off" : t === !0 ? "test" : "control"),
            (a.is_enabled = n),
            (a.caller = r),
            (a.message = o),
            a),
        },
        !0,
      );
    }
    function I(e) {
      var t;
      R(
        {
          eventName: "maiba_r23",
          data:
            ((t = {}),
            (t.sub_event = "e2e_odax_default_on"),
            (t.experiment_variant =
              e == null ? "null" : e === !0 ? "on" : "off"),
            t),
        },
        !0,
      );
    }
    function T() {
      var e = r("useAdsALCustomEventLogger")();
      return u(
        function (t) {
          var n = {};
          ((n["maiba:seed_media_flow"] = t.flow),
            t.conversationID != null &&
              (n["maiba:conversation_id"] = t.conversationID),
            t.adAccountID != null && (n["maiba:ad_account_id"] = t.adAccountID),
            t.source != null && (n["maiba:seed_media_source"] = t.source),
            t.impressionSource != null &&
              (n["maiba:seed_media_impression_source"] = t.impressionSource),
            t.mode != null && (n["maiba:seed_media_mode"] = t.mode),
            t.availableSources != null &&
              (n["maiba:seed_media_available_sources"] = t.availableSources),
            t.mediaType != null && (n["maiba:seed_media_type"] = t.mediaType),
            t.errorCategory != null &&
              (n["maiba:seed_media_error_category"] = t.errorCategory),
            t.failureStage != null &&
              (n["maiba:seed_media_failure_stage"] = t.failureStage));
          var r = {};
          (t.count != null && (r["maiba:seed_media_count"] = String(t.count)),
            e.log(p[t.event], { int: r, string: n }));
        },
        [e],
      );
    }
    function D() {
      var e = r("useAdsALCustomEventLogger")();
      return u(
        function (t) {
          var n = {};
          ((n["maiba:seed_media_flow"] = t.flow),
            (n["maiba:creative_gen_media_type"] = t.mediaType),
            t.conversationID != null &&
              (n["maiba:conversation_id"] = t.conversationID),
            t.adAccountID != null && (n["maiba:ad_account_id"] = t.adAccountID),
            t.entryPoint != null &&
              (n["maiba:creative_gen_entry_point"] = t.entryPoint),
            t.errorCategory != null &&
              (n["maiba:creative_gen_error_category"] = t.errorCategory));
          var r = {};
          (t.selectedCount != null &&
            (r["maiba:creative_gen_selected_count"] = String(t.selectedCount)),
            e.log(_[t.event], { int: r, string: n }));
        },
        [e],
      );
    }
    function x(e) {
      var t = r("useAdsALCustomEventLogger")(),
        n = e.adAccountID,
        o = e.botResponseID,
        a = e.conversationID;
      return u(
        function (e, r) {
          (r === void 0 && (r = {}),
            t.log(
              f[e],
              v({ adAccountID: n, botResponseID: o, conversationID: a }, r),
            ));
        },
        [n, o, a, t],
      );
    }
    function $(e) {
      var t = r("useAdsALCustomEventLogger")(),
        n = e.adAccountID,
        o = e.botResponseID,
        a = e.conversationID;
      return u(
        function (e, r) {
          r === void 0 && (r = {});
          var i = {},
            l = {},
            s = b({ adAccountID: n, botResponseID: o, conversationID: a });
          s["maiba:seed_media_source"] = c;
          for (var u of Object.entries(r)) {
            var d = u[0],
              m = u[1],
              p = y[d];
            p == null ||
              m == null ||
              (typeof m == "boolean"
                ? (i[p] = m)
                : typeof m == "number"
                  ? (l[p] = String(m))
                  : (s[p] = String(m)));
          }
          t.log(
            h[e],
            Object.keys(i).length > 0
              ? { bool: i, int: l, string: s }
              : { int: l, string: s },
          );
        },
        [n, o, a, t],
      );
    }
    function P(e) {
      var t = r("useAdsALCustomEventLogger")(),
        n = e.adAccountID,
        o = e.botResponseID,
        a = e.conversationID;
      return u(
        function (e, r) {
          (r === void 0 && (r = {}),
            t.log(
              C[e],
              v({ adAccountID: n, botResponseID: o, conversationID: a }, r),
            ));
        },
        [n, o, a, t],
      );
    }
    ((l.getMAIBAR23SeedMediaFlow = d),
      (l.isMAIBAR23WebsiteMediaSeedSource = m),
      (l.logMAIBAR23Event = L),
      (l.logMAIBAR23Error = E),
      (l.logMAIBAR23Exposure = k),
      (l.logMAIBAR23E2EODAXDefaultOn = I),
      (l.useLogMAIBAR23SeedMediaEvent = T),
      (l.useLogMAIBAR23CreativeGenEvent = D),
      (l.useLogMAIBAR23RecommendedMediaEvent = x),
      (l.useLogMAIBAR23WebsiteMediaEvent = $),
      (l.useLogMAIBAR23UploadMediaEvent = P));
  },
  98,
);
