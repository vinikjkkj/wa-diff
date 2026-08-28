__d(
  "SecuredActionBlockDialogMetaWithRedirect_content.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "SecuredActionBlockDialogMetaWithRedirect_content",
      selections: [
        {
          kind: "RequiredField",
          field: {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "action_uri",
            storageKey: null,
          },
          action: "THROW",
          path: "action_uri",
        },
        {
          kind: "RequiredField",
          field: {
            alias: null,
            args: null,
            concreteType: "XFBSecuredActionContent",
            kind: "LinkedField",
            name: "content",
            plural: !1,
            selections: [
              {
                kind: "RequiredField",
                field: {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "block_link_to_accounts_center_message",
                  storageKey: null,
                },
                action: "THROW",
                path: "content.block_link_to_accounts_center_message",
              },
              {
                kind: "RequiredField",
                field: {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "block_link_to_accounts_center_title",
                  storageKey: null,
                },
                action: "THROW",
                path: "content.block_link_to_accounts_center_title",
              },
            ],
            storageKey: null,
          },
          action: "THROW",
          path: "content",
        },
      ],
      type: "XFBSecuredAction",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
