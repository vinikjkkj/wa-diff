__d(
  "SecuredActionCreatePasswordText_node.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "SecuredActionCreatePasswordText_node",
      selections: [
        {
          kind: "RequiredField",
          field: {
            alias: null,
            args: null,
            concreteType: "XFBFXTextWithEntitiesAndStyles",
            kind: "LinkedField",
            name: "create_password_text_with_inline_style",
            plural: !0,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "content",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "style",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
          action: "THROW",
          path: "create_password_text_with_inline_style",
        },
      ],
      type: "XFBPasswordType",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
