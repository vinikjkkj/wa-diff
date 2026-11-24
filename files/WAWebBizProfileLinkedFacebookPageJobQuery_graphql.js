__d(
  "WAWebBizProfileLinkedFacebookPageJobQuery.graphql",
  ["WAWebBizProfileLinkedFacebookPageJobQuery_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
        {
          alias: null,
          args: [
            {
              kind: "Literal",
              name: "show_fb_add_whatsapp_btn_status",
              value: !0,
            },
          ],
          concreteType: "XFBWhatsAppBizLinkedAccountsResponse",
          kind: "LinkedField",
          name: "xfb_wa_biz_linked_accounts",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "XFBWhatsAppBizLinkedAccounts",
              kind: "LinkedField",
              name: "linked_accounts",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "XFBWaBizLinkedAccountsFBPage",
                  kind: "LinkedField",
                  name: "fb_page",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "id",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "display_name",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "shown_on_profile",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "fb_add_whatsapp_btn_enabled",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: "XFBWaBizLinkedAccountsProfilePicture",
                      kind: "LinkedField",
                      name: "profile_picture",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "url",
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
          ],
          storageKey:
            "xfb_wa_biz_linked_accounts(show_fb_add_whatsapp_btn_status:true)",
        },
      ];
      return {
        fragment: {
          argumentDefinitions: [],
          kind: "Fragment",
          metadata: null,
          name: "WAWebBizProfileLinkedFacebookPageJobQuery",
          selections: e,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [],
          kind: "Operation",
          name: "WAWebBizProfileLinkedFacebookPageJobQuery",
          selections: e,
        },
        params: {
          id: n(
            "WAWebBizProfileLinkedFacebookPageJobQuery_facebookRelayOperation",
          ),
          metadata: {},
          name: "WAWebBizProfileLinkedFacebookPageJobQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
