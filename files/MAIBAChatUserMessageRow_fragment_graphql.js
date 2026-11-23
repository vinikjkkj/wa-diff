__d(
  "MAIBAChatUserMessageRow_fragment.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "snippet",
        storageKey: null,
      };
      return {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: null,
        name: "MAIBAChatUserMessageRow_fragment",
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
          e,
          {
            alias: null,
            args: null,
            concreteType: "XFBMAIBASelectedTextOutput",
            kind: "LinkedField",
            name: "selected_text",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "selected_text",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "XFBMAIBAContextChip",
            kind: "LinkedField",
            name: "context_chips",
            plural: !0,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "entity_type",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "entity_id",
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
                name: "matched_text",
                storageKey: null,
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
                fragment: {
                  kind: "InlineFragment",
                  selections: [e],
                  type: "XFBMAIBAMessagePlainTextContent",
                  abstractKey: null,
                },
                kind: "AliasedInlineFragmentSpread",
                name: "plain_text",
              },
            ],
            storageKey: null,
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "MAIBAChatUserMessageSelectedAssets_fragment",
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
                concreteType: "XFBShibaSMAGXMAT",
                kind: "LinkedField",
                name: "render_payload",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "text",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    concreteType: "XFBMAIBACTA",
                    kind: "LinkedField",
                    name: "cta",
                    plural: !1,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "__typename",
                        storageKey: null,
                      },
                    ],
                    storageKey: null,
                  },
                ],
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
            args: null,
            kind: "FragmentSpread",
            name: "MAIBAChatUserMessageRowAttachment_fragment",
          },
        ],
        type: "XFBMAIBAMessage",
        abstractKey: null,
      };
    })();
    a.exports = e;
  },
  null,
);
