__d(
  "MAIBASACRemediationTrackingProviderStatusQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "adAccountID",
        },
        t = { defaultValue: null, kind: "LocalArgument", name: "adDraftID" },
        n = { defaultValue: null, kind: "LocalArgument", name: "adIDs" },
        r = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "asyncToolRequestID",
        },
        o = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "campaignGroupID",
        },
        a = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "externalConversationID",
        },
        i = { defaultValue: null, kind: "LocalArgument", name: "fragmentID" },
        l = { defaultValue: null, kind: "LocalArgument", name: "publishID" },
        s = [
          {
            alias: null,
            args: [
              {
                kind: "Variable",
                name: "ad_account_id",
                variableName: "adAccountID",
              },
              {
                kind: "Variable",
                name: "ad_draft_id",
                variableName: "adDraftID",
              },
              { kind: "Variable", name: "ad_ids", variableName: "adIDs" },
              {
                kind: "Variable",
                name: "async_tool_request_id",
                variableName: "asyncToolRequestID",
              },
              {
                kind: "Variable",
                name: "campaign_group_id",
                variableName: "campaignGroupID",
              },
              {
                kind: "Variable",
                name: "external_conversation_id",
                variableName: "externalConversationID",
              },
              {
                kind: "Variable",
                name: "fragment_id",
                variableName: "fragmentID",
              },
              {
                kind: "Variable",
                name: "publish_id",
                variableName: "publishID",
              },
            ],
            concreteType: "MAIBASACRemediationPublishStatus",
            kind: "LinkedField",
            name: "maiba_sac_remediation_publish_status",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "live_validation_status",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "request_status",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "violation_codes",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "guidance",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ];
      return {
        fragment: {
          argumentDefinitions: [e, t, n, r, o, a, i, l],
          kind: "Fragment",
          metadata: null,
          name: "MAIBASACRemediationTrackingProviderStatusQuery",
          selections: s,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [e, t, l, i, o, n, r, a],
          kind: "Operation",
          name: "MAIBASACRemediationTrackingProviderStatusQuery",
          selections: s,
        },
        params: {
          id: "27571401135858749",
          metadata: {},
          name: "MAIBASACRemediationTrackingProviderStatusQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
