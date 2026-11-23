__d(
  "MAIBAAdDraftEditorExperience",
  [
    "AdsApplicationIDs",
    "AdsDraftFragmentListDataManager",
    "MAIBAAdDraftEditorExperience.entrypoint",
    "MAIBAAdDraftEditorParseInput",
    "MAIBAR23LoggingUtils",
    "MAIBAR23SimpleCreateUtils",
    "MAIBAWorkspaceExperienceRegistry",
    "MAIBAWorkspaceTypes",
    "RelayHooks",
    "getMAIBAFlowID",
    "hasMAIBAOutcomeForecastV2Capability",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        loadExperienceEntryPoint: function (t, n, a) {
          var e = o("MAIBAAdDraftEditorParseInput").parseInput(
            o("MAIBAWorkspaceTypes").parseAttributesJSON(n.attributes_json),
          );
          if (e == null) return null;
          var i = r("hasMAIBAOutcomeForecastV2Capability")(
            o("MAIBAWorkspaceTypes").parseBlocksJSON(n.blocks_json),
          );
          o("MAIBAR23LoggingUtils").logMAIBAR23Event({
            event: "e2e_ad_draft_editor_loaded",
            botResponseId: n.request_id,
            conversationID: a,
            campaignGroupIDs: [e.campaignGroupID],
            campaignIDs: [].concat(e.campaignIDs),
            adgroupIDs: [].concat(e.adgroupIDs),
            logOnce: !0,
          });
          var l =
            o("MAIBAR23SimpleCreateUtils").hasMAIBASimpleCreate1mn() &&
            e.product === "ads_manager" &&
            e.focusSectionKind == null &&
            e.sacRemediationContextID == null;
          l &&
            r("AdsDraftFragmentListDataManager").loadFor(
              e.draftID,
              r("AdsApplicationIDs").ADS_POWER_EDITOR,
            );
          var s = o("RelayHooks").loadEntryPoint(
              t,
              r("MAIBAAdDraftEditorExperience.entrypoint"),
              babelHelpers.extends({}, e, {
                flowID: r("getMAIBAFlowID")(e.product, a),
                useOutcomeForecastV2: i,
                useWrappedSimpleCreate: l,
                workspaceVersion: n.version,
              }),
            ),
            u = function (n) {
              var t;
              return (t = o("MAIBAAdDraftEditorParseInput").parseInput(
                o("MAIBAWorkspaceTypes").parseAttributesJSON(n.attributes_json),
              )) != null
                ? t
                : e;
            };
          return o("MAIBAWorkspaceExperienceRegistry").buildLoadedEntryPoint(
            s,
            function (e) {
              var t = e.entity;
              return { entity: t, input: u(t) };
            },
            function (e) {
              var t = e.entity;
              return { entity: t, input: u(t), surface: "inline_publish" };
            },
          );
        },
        prefetchExperienceResources: function () {
          r("MAIBAAdDraftEditorExperience.entrypoint").root.preload();
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
