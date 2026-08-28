__d(
  "CometAIHTSChatHeader_content.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [{ kind: "RootArgument", name: "scale" }],
      kind: "Fragment",
      metadata: null,
      name: "CometAIHTSChatHeader_content",
      selections: [
        {
          alias: null,
          args: [{ kind: "Variable", name: "scale", variableName: "scale" }],
          concreteType: "XFBCometAIHTSChatHeaderContent",
          kind: "LinkedField",
          name: "header_content",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "title",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "logo_uri",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "bot_type_name",
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
