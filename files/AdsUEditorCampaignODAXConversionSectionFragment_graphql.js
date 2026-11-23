__d(
  "AdsUEditorCampaignODAXConversionSectionFragment.graphql",
  [
    "relay-runtime/experimental",
    "ClientAdAccount____relay_model_instance.graphql",
    "AdsIAdAccountClientFields",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "AdsUEditorCampaignODAXConversionSectionFragment",
      selections: [
        {
          kind: "InlineFragment",
          selections: [
            {
              alias: "account_id",
              args: null,
              kind: "ScalarField",
              name: "legacy_account_id",
              storageKey: null,
            },
          ],
          type: "AdAccount",
          abstractKey: null,
        },
        {
          kind: "ClientExtension",
          selections: [
            {
              kind: "InlineFragment",
              selections: [
                {
                  alias: "account_id",
                  args: null,
                  fragment: {
                    args: null,
                    kind: "FragmentSpread",
                    name: "ClientAdAccount____relay_model_instance",
                  },
                  kind: "RelayResolver",
                  name: "legacy_account_id",
                  resolverModule: n(
                    "relay-runtime/experimental",
                  ).resolverDataInjector(
                    n("ClientAdAccount____relay_model_instance.graphql"),
                    n("AdsIAdAccountClientFields").legacy_account_id,
                    "__relay_model_instance",
                    !0,
                  ),
                  path: "account_id",
                },
              ],
              type: "ClientAdAccount",
              abstractKey: null,
            },
          ],
        },
      ],
      type: "IAdAccount",
      abstractKey: "__isIAdAccount",
    };
    a.exports = e;
  },
  null,
);
