__d(
  "WAWebBizProfileFacebookPageVisibilityJobMutation.graphql",
  ["WAWebBizProfileFacebookPageVisibilityJobMutation_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "visible" }],
        t = [
          {
            alias: null,
            args: [
              {
                fields: [
                  {
                    kind: "Variable",
                    name: "is_facebook_page_visible",
                    variableName: "visible",
                  },
                ],
                kind: "ObjectValue",
                name: "data",
              },
            ],
            concreteType: "XFBSmbBusinessSettingsSetResponsePayload",
            kind: "LinkedField",
            name: "xfb_smb_business_settings_set",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "is_facebook_page_visible",
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
          name: "WAWebBizProfileFacebookPageVisibilityJobMutation",
          selections: t,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "WAWebBizProfileFacebookPageVisibilityJobMutation",
          selections: t,
        },
        params: {
          id: n(
            "WAWebBizProfileFacebookPageVisibilityJobMutation_facebookRelayOperation",
          ),
          metadata: {},
          name: "WAWebBizProfileFacebookPageVisibilityJobMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
