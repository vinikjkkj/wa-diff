__d(
  "WAWebBizAiSmartComposerSuggestionFetcherQuery.graphql",
  ["WAWebBizAiSmartComposerSuggestionFetcherQuery_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "consumer_lid",
        },
        t = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "consumer_phone_number",
        },
        r = { defaultValue: null, kind: "LocalArgument", name: "stanza_id" },
        o = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "text",
          storageKey: null,
        },
        a = [
          {
            alias: null,
            args: [
              {
                kind: "Variable",
                name: "consumer_lid",
                variableName: "consumer_lid",
              },
              {
                kind: "Variable",
                name: "consumer_phone_number",
                variableName: "consumer_phone_number",
              },
              {
                kind: "Variable",
                name: "stanza_id",
                variableName: "stanza_id",
              },
            ],
            concreteType: "WhatsAppSMBSuggestedReplyResponse",
            kind: "LinkedField",
            name: "meta_ai_biz_agent_wa_suggested_reply",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "bot_response_id",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "error_code",
                storageKey: null,
              },
              o,
              {
                alias: null,
                args: null,
                concreteType: "WhatsAppSMBSuggestedReplyProductMessage",
                kind: "LinkedField",
                name: "product",
                plural: !1,
                selections: [
                  o,
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "catalog_id",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "product_retailer_ids",
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ];
      return {
        fragment: {
          argumentDefinitions: [e, t, r],
          kind: "Fragment",
          metadata: null,
          name: "WAWebBizAiSmartComposerSuggestionFetcherQuery",
          selections: a,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [r, e, t],
          kind: "Operation",
          name: "WAWebBizAiSmartComposerSuggestionFetcherQuery",
          selections: a,
        },
        params: {
          id: n(
            "WAWebBizAiSmartComposerSuggestionFetcherQuery_facebookRelayOperation",
          ),
          metadata: {},
          name: "WAWebBizAiSmartComposerSuggestionFetcherQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
