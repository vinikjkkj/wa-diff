__d(
  "WAWebBizProfileFacebookPagesJobQuery.graphql",
  ["WAWebBizProfileFacebookPagesJobQuery_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        t = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "name",
          storageKey: null,
        },
        r = {
          alias: null,
          args: [
            { kind: "Literal", name: "height", value: 100 },
            { kind: "Literal", name: "width", value: 100 },
          ],
          concreteType: "Image",
          kind: "LinkedField",
          name: "profile_picture",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "uri",
              storageKey: null,
            },
          ],
          storageKey: "profile_picture(height:100,width:100)",
        },
        o = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "follower_count",
          storageKey: null,
        },
        a = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_verified",
          storageKey: null,
        },
        i = [
          { kind: "CatchField", field: o, to: "NULL" },
          { kind: "CatchField", field: a, to: "NULL" },
        ],
        l = [o, a];
      return {
        fragment: {
          argumentDefinitions: [],
          kind: "Fragment",
          metadata: { throwOnFieldError: !0 },
          name: "WAWebBizProfileFacebookPagesJobQuery",
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "EligiblePagesForWhatsappLinkingConnection",
              kind: "LinkedField",
              name: "eligible_pages_for_whatsapp_linking",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: null,
                  kind: "LinkedField",
                  name: "nodes",
                  plural: !0,
                  selections: [
                    e,
                    t,
                    r,
                    {
                      kind: "InlineFragment",
                      selections: i,
                      type: "User",
                      abstractKey: null,
                    },
                    {
                      kind: "InlineFragment",
                      selections: i,
                      type: "Page",
                      abstractKey: null,
                    },
                  ],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [],
          kind: "Operation",
          name: "WAWebBizProfileFacebookPagesJobQuery",
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "EligiblePagesForWhatsappLinkingConnection",
              kind: "LinkedField",
              name: "eligible_pages_for_whatsapp_linking",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: null,
                  kind: "LinkedField",
                  name: "nodes",
                  plural: !0,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "__typename",
                      storageKey: null,
                    },
                    e,
                    t,
                    r,
                    {
                      kind: "InlineFragment",
                      selections: l,
                      type: "User",
                      abstractKey: null,
                    },
                    {
                      kind: "InlineFragment",
                      selections: l,
                      type: "Page",
                      abstractKey: null,
                    },
                  ],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: n("WAWebBizProfileFacebookPagesJobQuery_facebookRelayOperation"),
          metadata: {},
          name: "WAWebBizProfileFacebookPagesJobQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
