__d(
  "WAWebBizProfileFacebookUnlinkPageJobMutation.graphql",
  ["WAWebBizProfileFacebookUnlinkPageJobMutation_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "pageId" }],
        t = [
          {
            alias: null,
            args: [
              {
                fields: [
                  {
                    fields: [
                      {
                        kind: "Variable",
                        name: "account_id",
                        variableName: "pageId",
                      },
                      {
                        kind: "Literal",
                        name: "account_type",
                        value: "FB_PAGE",
                      },
                    ],
                    kind: "ObjectValue",
                    name: "linked_account",
                  },
                ],
                kind: "ObjectValue",
                name: "request",
              },
            ],
            concreteType: "XFBWhatsAppBizUnlinkAccountResponse",
            kind: "LinkedField",
            name: "xfb_wa_biz_unlink_account",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "success",
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
          name: "WAWebBizProfileFacebookUnlinkPageJobMutation",
          selections: t,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "WAWebBizProfileFacebookUnlinkPageJobMutation",
          selections: t,
        },
        params: {
          id: n(
            "WAWebBizProfileFacebookUnlinkPageJobMutation_facebookRelayOperation",
          ),
          metadata: {},
          name: "WAWebBizProfileFacebookUnlinkPageJobMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
