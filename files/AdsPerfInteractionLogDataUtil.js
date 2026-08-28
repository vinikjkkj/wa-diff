__d(
  "AdsPerfInteractionLogDataUtil",
  [
    "AdCampaignDestination",
    "AdsAPIObjectives",
    "AdsMgmtQPLLogger",
    "AdsPELoggerUtils",
    "AdsPERouterHelper",
    "AdsPerfInteractionConstants",
    "AdsPerfInteractionMetadataContext",
    "AdsPerfInteractionUtil",
    "Env",
    "FBLogger",
    "InteractionTracingMetrics",
    "PEAppContext",
    "PEAppLoggerEventCounter",
    "SiteData",
    "URI",
    "__debug",
    "getErrorSafe",
    "gkx",
    "ifRequired",
    "immutable",
    "isBusinessURI",
    "requireWeak",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m = {
        isNew: function (t) {
          return null;
        },
      },
      p = {
        isNew: function (t) {
          return null;
        },
      },
      _ = {
        isNew: function (t) {
          return null;
        },
      },
      f = null,
      g = null,
      h = null,
      y = null;
    ((d = r("requireWeak"))("AdsCampaignGroupDraftFragmentStore", function (e) {
      m = e;
    }),
      d("AdsCampaignDraftFragmentStore", function (e) {
        p = e;
      }),
      d("AdsAdgroupDraftFragmentStore", function (e) {
        _ = e;
      }),
      d("AdsUEditorSelectors", function (e) {
        f = e;
      }),
      d("AdsCampaignGroupRecordAccessors", function (e) {
        g = e;
      }),
      d("AdsCampaignRecordAccessors", function (e) {
        h = e;
      }),
      d("adsGetUniformValueSelector", function (e) {
        y = e;
      }));
    var C = r("immutable").Map(
        ((e = {}), (e.L1 = _), (e.L2 = p), (e.L3 = m), e),
      ),
      b = 100,
      v = "null",
      S = new Set(["L3", "L2", "L1"]);
    function R(e, t) {
      var n,
        a,
        i =
          ((n = r("AdsPERouterHelper").getInitialParams()) == null ||
          (n = n.initial_route) == null
            ? void 0
            : n.params.is_reload_from_account_change) === "true";
      return (
        (a = {}),
        (a.object_source =
          e === t.length
            ? o("AdsPerfInteractionConstants").EDITOR_METADATA.DRAFT
            : e === 0
              ? o("AdsPerfInteractionConstants").EDITOR_METADATA.EXISTING
              : o("AdsPerfInteractionConstants").EDITOR_METADATA.MIXED),
        (a.editor_mode =
          t.length > 1
            ? o("AdsPerfInteractionConstants").EDITOR_METADATA.BULK
            : o("AdsPerfInteractionConstants").EDITOR_METADATA.SINGLE),
        (a.is_reload_from_account_change = i),
        a
      );
    }
    function L() {
      var e,
        t = o("PEAppContext").getEventDataForLogging().at_section;
      if (!(t != null && S.has(t))) return null;
      var n = o("AdsPerfInteractionMetadataContext").getSelectedIdsBySection(
          "L1",
        ),
        r = o("AdsPerfInteractionMetadataContext").getSelectedIdsBySection(
          "L2",
        ),
        a = o("AdsPerfInteractionMetadataContext").getSelectedIdsBySection(
          "L3",
        );
      return (
        (e = {}),
        (e.selected_ad_ids = n),
        (e.selected_adset_ids = r),
        (e.selected_campaign_ids = a),
        e
      );
    }
    function E() {
      var e = o("PEAppContext").getEventDataForLogging().at_section;
      if (!(e == null || !C.has(e))) {
        var t = o("AdsPerfInteractionMetadataContext").getEditorContext(e);
        if (t != null && f != null && g != null && y != null) {
          var n = y(
            f.campaignGroup.bulkByAccessorToJS(function (e) {
              return e.objective;
            }),
            r("AdsAPIObjectives").NONE,
          );
          return n(t);
        }
      }
    }
    function k() {
      var e = r("ifRequired")("AdsEditingCampaignEditorContext", function (e) {
        return e;
      });
      if (e != null && f != null && h != null && y != null) {
        var t = y(
          f.campaign.bulkByAccessorToJS(function (e) {
            return e.destination_type;
          }),
          r("AdCampaignDestination").UNDEFINED,
        );
        return t(e);
      }
    }
    function I() {
      var e = r("ifRequired")("AdsEditingCampaignEditorContext", function (e) {
        return e;
      });
      if (e != null && f != null && h != null && y != null) {
        var t = y(
          f.campaign.bulkByAccessorToJS(function (e) {
            var t;
            return (t = e.promoted_object) == null ? void 0 : t.product_set_id;
          }),
          null,
        );
        return t(e);
      }
    }
    function T() {
      var e = o("PEAppContext").getEventDataForLogging().at_section;
      if (!(e == null || !C.has(e))) {
        var t = o("AdsPerfInteractionMetadataContext").getEditorContext(e);
        if (t != null && f != null && g != null && y != null) {
          var n = y(
            f.campaignGroup.bulkByAccessorToJS(function (e) {
              var t;
              return (t = e.promoted_object) == null
                ? void 0
                : t.product_catalog_id;
            }),
            null,
          );
          return n(t);
        }
      }
    }
    function D() {
      var e = o("PEAppContext").getEventDataForLogging().at_section;
      if (!(e == null || !C.has(e))) {
        var t = o("AdsPerfInteractionMetadataContext").getEditorContext(e);
        if (t != null && f != null && g != null && y != null) {
          var n = y(
            f.campaignGroup.bulkByAccessorToJS(function (e) {
              return e.daily_budget;
            }),
            null,
          );
          return n(t);
        }
      }
    }
    function x() {
      var e = r("ifRequired")("AdsEditingCampaignEditorContext", function (e) {
        return e;
      });
      if (e != null && f != null && h != null && y != null) {
        var t,
          n = y(
            f.campaign.bulkByAccessorToJS(function (e) {
              return e.targeting.targeting_automation;
            }),
            null,
          );
        return (t = n(e)) == null ? void 0 : t.advantage_audience;
      }
    }
    function $() {
      var e = o("PEAppContext").getEventDataForLogging().at_section,
        t = 0,
        n = {};
      if (e != null && C.has(e)) {
        var r = o("AdsPerfInteractionMetadataContext").getSelectedIdsBySection(
          e,
        );
        ((n.is_empty_editor = r == null || r.length === 0),
          r != null &&
            ((n.campaign_objective = E()),
            r.forEach(function (n) {
              var r;
              return (r = C.get(e)) != null && r.isNew(n) ? ++t : null;
            }),
            (n = babelHelpers.extends({}, R(t, r), n))));
      }
      return n;
    }
    function P(e) {
      var t, n;
      return babelHelpers.extends({}, e, {
        placement_format: (t = e.ad_preview_format) != null ? t : "",
        start_callsite: (n = e.creative_event_source) != null ? n : "",
      });
    }
    function N() {
      if (!r("gkx")("26573")) return {};
      var e = r("__debug").getCounts();
      return { js_modules_defined: e.numDefined, js_modules_used: e.numUsed };
    }
    function M() {
      var e = o("PEAppContext").getEventDataForLogging(),
        t = r("PEAppLoggerEventCounter").get(),
        n = window.location.href,
        a = r("ifRequired")("hyperionUtil", function (e) {
          return e.ClientSessionID;
        });
      return babelHelpers.extends(
        {
          ad_account_id: e.ad_account_id,
          business_id: e.business_id,
          draft_id: e.draft_id,
          sessionId: e.session_id,
          session_event_index: t,
          at_section: e.at_section,
          at_tool: e.at_tool,
          current_route: o("AdsPELoggerUtils").getCurrentRouteName(),
          routes: e.routes,
          is_business_domain: r("isBusinessURI")(new (u || (u = r("URI")))(n))
            ? "1"
            : "0",
          is_measurement_force_in: r("gkx")("14629"),
          is_firedrill: !1,
          is_from_felab: r("gkx")("21236"),
          marketing_messages_liquidity_whatsapp_ui_test: r("gkx")("23048"),
          brsid:
            (c || (c = r("Env"))).brsid != null
              ? "" + (c || (c = r("Env"))).brsid
              : null,
          browser_session_id: a,
          pkg_cohort: r("SiteData").pkg_cohort,
        },
        N(),
      );
    }
    function w() {
      var e = window.location.href,
        t = e === document.referrer ? null : document.referrer;
      return { uri: e, referrer: t };
    }
    function A(e, t, n) {
      n === void 0 && (n = !1);
      var r = o("PEAppContext").getEventDataForLogging();
      return {
        start_section: r.at_section,
        start_tool: r.at_tool,
        start_route: o("AdsPELoggerUtils").getCurrentRouteName(),
        start_tracePolicy: e,
        interaction_index: t,
        is_user_flow: n,
      };
    }
    function F(e) {
      switch (typeof e) {
        case "number":
          return { key: "int", value: e };
        case "string":
          return { key: "string", value: e };
        case "boolean":
          return { key: "bool", value: e };
      }
      return Array.isArray(e)
        ? {
            key: "string_array",
            value: e.filter(Boolean).map(function (e) {
              return String(e);
            }),
          }
        : null;
    }
    function O(e, t) {
      try {
        var n = { string: {}, int: {}, bool: {}, string_array: {} };
        for (var o in e) {
          var a = F(e[o]);
          if (a == null || (t && !t.has(o))) {
            e[o] != null &&
              a == null &&
              t &&
              t.has(o) &&
              r("FBLogger")("ads").warn(
                "Ads perf interaction fail to annotate in QPL! annotate key: %s annotate value: %s",
                o,
                e[o],
              );
            continue;
          }
          n[a.key][o] = a.value;
        }
        return n;
      } catch (e) {
        var i = r("getErrorSafe")(e);
        r("FBLogger")("ads")
          .catching(i)
          .mustfix("Error annotate Ads Manager Interactions QPL event.");
      }
    }
    function B(e, t, n, r, a) {
      var i = W(t, n, r);
      i != null && o("AdsMgmtQPLLogger").markerAnnotate(e, i);
      var l = O(w(), null);
      l != null &&
        o("AdsMgmtQPLLogger").markerAnnotate(
          e,
          l,
          { instanceKey: o("AdsMgmtQPLLogger").DEFAULT_INSTANCE_KEY },
          b,
        );
      var s = a != null ? a : {};
      o("AdsPerfInteractionConstants").EDITOR_SCENARIOS_WWW_QPL_EVENT.has(e) &&
        (s = babelHelpers.extends({}, $(), a));
      var u = O(s, null);
      u != null && o("AdsMgmtQPLLogger").markerAnnotate(e, u);
    }
    function W(e, t, n) {
      var r = M();
      return (
        delete r.interaction_id,
        delete r.tracePolicy,
        (r.is_log_by_scenario_framework = !1),
        (r.revisit = o("AdsPerfInteractionUtil").getRevisitInteractionData(
          e,
          n,
        )),
        (r.interaction_component = t),
        O(r)
      );
    }
    function q(e, t) {
      var n = ["string", "int", "bool"];
      for (var o of n)
        for (var a in t[o]) {
          var i = t[o][a];
          i != null && r("InteractionTracingMetrics").addMetadata(e, a, i);
        }
      var l = function (o) {
        var n = t.string_array[o];
        n != null &&
          n.forEach(function (t) {
            r("InteractionTracingMetrics").addTag(e, o, t);
          });
      };
      for (var s in t.string_array) l(s);
    }
    function U(e, t, n, r) {
      var o = W(e, t, r);
      o != null && q(n, o);
    }
    function V(e, t, n, r) {
      var o = A(t, n, r),
        a = O(o);
      a != null && q(e, a);
    }
    function H(e, t) {
      if (o("AdsPerfInteractionConstants").EDITOR_INTERACTIONS.has(t)) {
        var n = babelHelpers.extends({}, $(), L()),
          r = O(n);
        r != null && q(e, r);
      }
    }
    function G(e, t) {
      var n = O(t);
      n != null && q(e, n);
    }
    function z(e, t) {
      o("AdsPerfInteractionConstants").EDITOR_INTERACTIONS_QPL_EVENT.has(
        t.interactionConfig.qplEvent,
      ) &&
        (q(t.interactionID, { bool: { is_overlapping: !0 } }),
        q(e, {
          bool: { is_overlapping: !0 },
          string: { parenet_interaction_id: t.interactionID },
        }));
    }
    var j =
      ((s = {}),
      (s.at_section = v),
      (s.current_action_objects_total_count = 0),
      (s.flow_instance_id = v),
      (s.media_format = v),
      (s.name = v),
      (s.revisit = v),
      (s.start_callsite = v),
      (s.campaign_objective = v),
      (s.ad_creation_package_config_id = v),
      (s.browser_session_id = v),
      s);
    function K(e, t) {
      var n = babelHelpers.extends({}, j);
      n.name = String(e);
      var a = o("AdsPerfInteractionUtil").getTracePolicy();
      ((n.at_section = M().at_section),
        (n.browser_session_id = M().browser_session_id),
        (n.revisit = String(
          o("AdsPerfInteractionUtil").getRevisitInteractionData(
            e,
            a != null ? a : "default",
          ),
        )));
      var i = r("InteractionTracingMetrics").get(t);
      if (i != null) {
        var l, s, u, c, d, m, p;
        if (
          ((l = i.annotations.string) == null ? void 0 : l.start_callsite) !=
          null
        ) {
          var _;
          n.start_callsite =
            (_ = i.annotations.string) == null ? void 0 : _.start_callsite;
        }
        if (
          ((s = i.annotations.string) == null ? void 0 : s.media_format) != null
        ) {
          var f;
          n.media_format =
            (f = i.annotations.string) == null ? void 0 : f.media_format;
        }
        if (
          (((u = i.annotations.int) == null
            ? void 0
            : u.current_action_ads_count) != null &&
            ((c = i.annotations.int) == null
              ? void 0
              : c.current_action_campaigns_count) != null &&
            ((d = i.annotations.int) == null
              ? void 0
              : d.current_action_campaign_groups_count) != null &&
            (n.current_action_objects_total_count =
              i.annotations.int.current_action_ads_count +
              i.annotations.int.current_action_campaigns_count +
              i.annotations.int.current_action_campaign_groups_count),
          ((m = i.annotations.string) == null
            ? void 0
            : m.campaign_objective) != null)
        ) {
          var g;
          n.campaign_objective =
            (g = i.annotations.string) == null ? void 0 : g.campaign_objective;
        }
        if (
          ((p = i.annotations.string) == null
            ? void 0
            : p.ad_creation_package_config_id) != null
        ) {
          var h;
          n.ad_creation_package_config_id =
            (h = i.annotations.string) == null
              ? void 0
              : h.ad_creation_package_config_id;
        }
      }
      return n;
    }
    function Q(e) {
      var t,
        n = "",
        r = K(e.interaction, e.interactionID);
      r.flow_instance_id =
        (t = e.flowInstanceID) != null ? t : j.flow_instance_id;
      for (var o in r)
        if (r[o] != null) {
          var a = o + ":" + String(r[o]) + ",";
          n = n.concat(a);
        }
      return "{" + n + "}";
    }
    ((l.getAdsObjectSelectedIds = L),
      (l.getCampaignObjectiveData = E),
      (l.getMessagingDestinationData = k),
      (l.getProductSetIdData = I),
      (l.getCatalogIdData = T),
      (l.getL3BudgetData = D),
      (l.getTargetingAdventageAudienceData = x),
      (l.getTypeObject = O),
      (l.annotateHTInteractionBaseDataInWwwQPL = B),
      (l.annotateHeroTracingData = q),
      (l.addHeroTracingBaseMetadata = U),
      (l.addHeroTracingStartMetadata = V),
      (l.addHeroTracingEditorMetadata = H),
      (l.addHeroTracingInteractionCustomMetadata = G),
      (l.addHeroTracingOverlappingPreviewData = z),
      (l.getConvertedDataToBackend = Q));
  },
  98,
);
