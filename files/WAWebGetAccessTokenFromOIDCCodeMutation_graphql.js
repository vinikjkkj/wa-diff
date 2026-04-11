__d(
  "WAWebGetAccessTokenFromOIDCCodeMutation.graphql",
  ["WAWebGetAccessTokenFromOIDCCodeMutation_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          { defaultValue: null, kind: "LocalArgument", name: "code" },
          { defaultValue: null, kind: "LocalArgument", name: "state" },
        ],
        t = [
          {
            alias: null,
            args: [
              { kind: "Variable", name: "code", variableName: "code" },
              { kind: "Variable", name: "state", variableName: "state" },
            ],
            concreteType: "WhatsAppCTWAOIDCGetAccessTokenResponse",
            kind: "LinkedField",
            name: "xfb_wa_biz_get_token_from_oidc_code",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "access_token",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "fb_user_id",
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
          name: "WAWebGetAccessTokenFromOIDCCodeMutation",
          selections: t,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "WAWebGetAccessTokenFromOIDCCodeMutation",
          selections: t,
        },
        params: {
          id: n(
            "WAWebGetAccessTokenFromOIDCCodeMutation_facebookRelayOperation",
          ),
          metadata: {},
          name: "WAWebGetAccessTokenFromOIDCCodeMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
