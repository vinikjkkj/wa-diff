__d(
  "WAWebBizProfileFacebookConnectPageJobConnectMutation.graphql",
  [
    "WAWebBizProfileFacebookConnectPageJobConnectMutation_facebookRelayOperation",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = { defaultValue: null, kind: "LocalArgument", name: "code" },
        t = { defaultValue: null, kind: "LocalArgument", name: "pageId" },
        r = { defaultValue: null, kind: "LocalArgument", name: "request" },
        o = [
          { kind: "Variable", name: "code", variableName: "code" },
          { kind: "Literal", name: "enable_fb_add_whatsapp_btn", value: !1 },
          { kind: "Variable", name: "profile_id", variableName: "pageId" },
          { kind: "Variable", name: "request", variableName: "request" },
        ],
        a = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: [e, t, r],
          kind: "Fragment",
          metadata: null,
          name: "WAWebBizProfileFacebookConnectPageJobConnectMutation",
          selections: [
            {
              alias: null,
              args: o,
              concreteType: null,
              kind: "LinkedField",
              name: "profile_whatsapp_business_connect",
              plural: !1,
              selections: [a],
              storageKey: null,
            },
          ],
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [t, r, e],
          kind: "Operation",
          name: "WAWebBizProfileFacebookConnectPageJobConnectMutation",
          selections: [
            {
              alias: null,
              args: o,
              concreteType: null,
              kind: "LinkedField",
              name: "profile_whatsapp_business_connect",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "__typename",
                  storageKey: null,
                },
                a,
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: n(
            "WAWebBizProfileFacebookConnectPageJobConnectMutation_facebookRelayOperation",
          ),
          metadata: {},
          name: "WAWebBizProfileFacebookConnectPageJobConnectMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
