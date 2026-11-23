__d(
  "MAIBACanvasPublishSACRemediation",
  [
    "FBLogger",
    "MAIBAAdDraftEditorContext",
    "MAIBAAsyncSupportLobbyStateStore",
    "MAIBACanvasPublishSACRemediationMutation.graphql",
    "MAIBAChatNavigationContext",
    "RelayHooks",
    "react",
    "useMAIBASendMessageFromInsideChat",
    "uuidv4",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = u.useCallback,
      d = u.useEffect,
      m = u.useRef,
      p =
        e !== void 0
          ? e
          : (e = n("MAIBACanvasPublishSACRemediationMutation.graphql"));
    function _(e) {
      return e.campaignGroupDraftFragmentID != null;
    }
    function f(e) {
      var t,
        n,
        a = e.onTerminal,
        i = o(
          "MAIBAAdDraftEditorContext",
        ).useMAIBAAdDraftEditorContextRequired(),
        l =
          (t = i.campaignGroupDraftFragmentID) != null
            ? t
            : (n = i.data.campaign_group) == null
              ? void 0
              : n.draft_fragment_id,
        s = m(null),
        u = o("RelayHooks").useMutation(p),
        _ = u[0],
        f = o("MAIBAChatNavigationContext").useMAIBAChatNavigationContext(),
        g = f.externalConversationId,
        h = r("useMAIBASendMessageFromInsideChat")(),
        y = c(
          function (e, t, n, o, a, l) {
            (n === void 0 && (n = []),
              o === void 0 && (o = null),
              a === void 0 && (a = null),
              l === void 0 && (l = null));
            var s = i.sacRemediationCampaignGroupID,
              u = i.sacRemediationContextID;
            if (s == null || u == null) {
              r("FBLogger")("maiba").warn(
                "SAC publish postback skipped because campaign or remediation context is missing",
              );
              return;
            }
            h({
              externalConversationId: g != null ? g : "",
              hideUserMessage: !0,
              isSentFromOutOfChat: !1,
              message: t,
              originComponent: "MAIBACanvasPublishSACRemediation",
              postback_payload: JSON.stringify({
                type: e,
                campaign_group_id: s,
                ad_ids: i.sacRemediationAdIDs,
                remediation_context_id: u,
                violation_codes: n,
                guidance: o,
                publish_id: a,
                async_tool_request_id: l,
              }),
            });
          },
          [i, g, h],
        );
      return (
        d(
          function () {
            if (
              !(
                l == null ||
                i.sacRemediationCampaignGroupID == null ||
                i.sacRemediationContextID == null
              )
            ) {
              var e = i.sacRemediationCampaignGroupID,
                t = i.sacRemediationContextID,
                n = i.draftID + ":" + l + ":" + t;
              s.current !== n &&
                ((s.current = n),
                _({
                  variables: {
                    input: {
                      ad_account_id: i.accountID,
                      ad_draft_id: i.draftID,
                      campaign_group_id: e,
                      fragment_id: l,
                      ad_ids: i.sacRemediationAdIDs.join(","),
                      remediation_context_id: t,
                      external_conversation_id: g != null ? g : "",
                      client_mutation_id: r("uuidv4")(),
                    },
                  },
                  onCompleted: function (r) {
                    var n = r.maiba_sac_remediation_publish;
                    if (
                      (n == null ? void 0 : n.validation_status) ===
                      "feature_disabled"
                    ) {
                      var s;
                      (y(
                        "sac_remediation_feature_disabled",
                        (s = n.guidance) != null
                          ? s
                          : "This Special Ad Category remediation experience is not currently available.",
                        [],
                        n.guidance,
                      ),
                        a(!1, !0));
                      return;
                    }
                    if (
                      (n == null ? void 0 : n.validation_status) ===
                      "validation_failed"
                    ) {
                      var u, c;
                      (y(
                        "sac_remediation_publish_validation_failed",
                        (u = n.guidance) != null
                          ? u
                          : "The campaign does not satisfy Special Ad Category requirements.",
                        (c = n.violation_codes) != null ? c : [],
                        n.guidance,
                      ),
                        a(!1));
                      return;
                    }
                    if (
                      (n == null ? void 0 : n.success) !== !0 ||
                      n.publish_id == null
                    ) {
                      (y(
                        "sac_remediation_publish_failed",
                        "The Special Ad Category changes could not be published. Please try again.",
                      ),
                        a(!1));
                      return;
                    }
                    var d = n.publish_id,
                      m = n.async_tool_request_id;
                    if (m == null) {
                      (y(
                        "sac_remediation_publish_status_unknown",
                        "The publish request was accepted, but its status tracker could not be created. Do not submit the campaign changes again yet.",
                        [],
                        null,
                        d,
                      ),
                        a(!1));
                      return;
                    }
                    (o(
                      "MAIBAAsyncSupportLobbyStateStore",
                    ).applyAsyncSupportLobbyState(g != null ? g : "", {
                      adAccountId: i.accountID,
                      adIds: i.sacRemediationAdIDs.join(","),
                      assetId: e,
                      assetType: "campaign_group",
                      campaignGroupId: e,
                      draftId: i.draftID,
                      fragmentId: l,
                      operationId: m,
                      operationType: "sac_remediation_publish",
                      operationVersion: "1",
                      publishId: d,
                      remediationContextId: t,
                      stageKey: "publishing",
                      status: "IN_PROGRESS",
                    }),
                      a(!1));
                  },
                  onError: function () {
                    (y(
                      "sac_remediation_publish_status_unknown",
                      "The publish request outcome could not be confirmed. Do not submit the campaign changes again yet.",
                    ),
                      a(!1));
                  },
                }));
            }
          },
          [i, g, l, a, _, y],
        ),
        null
      );
    }
    ((l.dispatchPublish = _), (l.MAIBACanvasPublishLifecycleTracker = f));
  },
  98,
);
