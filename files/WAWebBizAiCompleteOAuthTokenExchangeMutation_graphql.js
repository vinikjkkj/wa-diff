__d(
  "WAWebBizAiCompleteOAuthTokenExchangeMutation.graphql",
  ["WAWebBizAiCompleteOAuthTokenExchangeMutation_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          { defaultValue: null, kind: "LocalArgument", name: "callback_url" },
        ],
        t = [
          {
            alias: null,
            args: [
              {
                kind: "Variable",
                name: "callback_url",
                variableName: "callback_url",
              },
            ],
            concreteType: "BizAICompleteOAuthTokenExchangeResponse",
            kind: "LinkedField",
            name: "complete_oauth_token_exchange",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "success",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "error_message",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                concreteType: "BizAICompleteOAuthTokenExchangeResponseData",
                kind: "LinkedField",
                name: "data",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType:
                      "BizAICompleteOAuthTokenExchangeResponseStatus",
                    kind: "LinkedField",
                    name: "status",
                    plural: !1,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "code",
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "failure_code",
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "message",
                        storageKey: null,
                      },
                    ],
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
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "WAWebBizAiCompleteOAuthTokenExchangeMutation",
          selections: t,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "WAWebBizAiCompleteOAuthTokenExchangeMutation",
          selections: t,
        },
        params: {
          id: n(
            "WAWebBizAiCompleteOAuthTokenExchangeMutation_facebookRelayOperation",
          ),
          metadata: {},
          name: "WAWebBizAiCompleteOAuthTokenExchangeMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
