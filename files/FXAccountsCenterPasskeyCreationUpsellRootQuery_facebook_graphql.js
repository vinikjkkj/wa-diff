__d(
  "FXAccountsCenterPasskeyCreationUpsellRootQuery.facebook.graphql",
  [
    "FXAccountsCenterPasskeyCreationUpsellRootQuery_facebookRelayOperation",
    "relay-runtime",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          { defaultValue: null, kind: "LocalArgument", name: "entrypoint" },
        ],
        t = [
          { kind: "Variable", name: "entry_point", variableName: "entrypoint" },
        ];
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "FXAccountsCenterPasskeyCreationUpsellRootQuery",
          selections: [
            {
              kind: "RequiredField",
              field: {
                alias: null,
                args: t,
                concreteType: "XFBPasskeyUpsellContent",
                kind: "LinkedField",
                name: "xfb_passkey_upsell_screen_content",
                plural: !1,
                selections: [
                  {
                    args: null,
                    kind: "FragmentSpread",
                    name: "FXAccountsCenterPasskeyCreationUpsellContent_fragment",
                  },
                ],
                storageKey: null,
              },
              action: "THROW",
              path: "xfb_passkey_upsell_screen_content",
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "FXAccountsCenterPasskeyCreationUpsellRootQuery",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: "XFBPasskeyUpsellContent",
              kind: "LinkedField",
              name: "xfb_passkey_upsell_screen_content",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "cancel_button_text",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "create_button_text",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "hero_image",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "headline",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "headline_subtitle",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "learn_more_text",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "learn_more_url",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "value_props",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "value_props_icons",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "skip_dialog_title",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "skip_dialog_body",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "skip_dialog_secondary_button_label",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "should_enable_1_tap_creation",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "show_meta_logo",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "existing_passkey_name",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "existing_passkey_created_time",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "show_existing_passkey_card",
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: n(
            "FXAccountsCenterPasskeyCreationUpsellRootQuery_facebookRelayOperation",
          ),
          metadata: {},
          name: "FXAccountsCenterPasskeyCreationUpsellRootQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    (n("relay-runtime").PreloadableQueryRegistry.set(e.params.id, e),
      (a.exports = e));
  },
  null,
);
