__d(
  "MAIBAChatAdminMessageRow_fragment.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "MAIBAChatAdminMessageRow_fragment",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "external_conversation_id",
          storageKey: null,
        },
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
          concreteType: "XFBMAIBAAdminTextAttachment",
          kind: "LinkedField",
          name: "admin_text",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "__typename",
              storageKey: null,
            },
            {
              args: null,
              kind: "FragmentSpread",
              name: "MAIBAAdminText_fragment",
            },
          ],
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          concreteType: null,
          kind: "LinkedField",
          name: "content",
          plural: !1,
          selections: [
            {
              kind: "InlineFragment",
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "XFBMAIBAMessage",
                  kind: "LinkedField",
                  name: "message",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "snippet",
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
              ],
              type: "XFBMAIBAMessageComposedTextContent",
              abstractKey: null,
            },
          ],
          storageKey: null,
        },
      ],
      type: "XFBMAIBAMessage",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
