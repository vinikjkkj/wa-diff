__d(
  "CometAIHTSChat_product.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [
        {
          defaultValue: null,
          kind: "LocalArgument",
          name: "messaging_user_id",
        },
        {
          defaultValue: null,
          kind: "LocalArgument",
          name: "messaging_user_token",
        },
      ],
      kind: "Fragment",
      metadata: null,
      name: "CometAIHTSChat_product",
      selections: [
        {
          kind: "Defer",
          selections: [
            {
              args: [
                {
                  kind: "Variable",
                  name: "messaging_user_id",
                  variableName: "messaging_user_id",
                },
                {
                  kind: "Variable",
                  name: "messaging_user_token",
                  variableName: "messaging_user_token",
                },
              ],
              kind: "FragmentSpread",
              name: "CometAIHTSChat_threadMessages",
            },
          ],
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "CometAIHTSChatHeader_content",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "CometAIHTSChatEmptyState_content",
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "speech_auth_token",
          storageKey: null,
        },
      ],
      type: "XFBCometAIHTSChatProduct",
      abstractKey: "__isXFBCometAIHTSChatProduct",
    };
    a.exports = e;
  },
  null,
);
