__d(
  "CometAIHTSMemorializationLegacyContactDataSourceQuery.graphql",
  [
    "CometAIHTSMemorializationLegacyContactDataSourceQuery_facebookRelayOperation",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = { defaultValue: null, kind: "LocalArgument", name: "first" },
        t = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "identity_identifier",
        },
        r = { defaultValue: null, kind: "LocalArgument", name: "interface" },
        o = { defaultValue: null, kind: "LocalArgument", name: "query" },
        a = [{ kind: "Literal", name: "is_cds", value: !0 }],
        i = [
          { kind: "Variable", name: "interface", variableName: "interface" },
          {
            kind: "Literal",
            name: "selected_node_id",
            value: "MEMORIALIZATION",
          },
        ],
        l = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        s = {
          kind: "InlineFragment",
          selections: [
            {
              alias: null,
              args: [
                { kind: "Variable", name: "first", variableName: "first" },
                {
                  kind: "Variable",
                  name: "search_query",
                  variableName: "query",
                },
                {
                  kind: "Variable",
                  name: "user_identifier",
                  variableName: "identity_identifier",
                },
              ],
              concreteType: "XFBFXSettingsEligibleLegacyContactsDataV2",
              kind: "LinkedField",
              name: "eligible_legacy_contacts_for_account_v2",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "XFBEligibleLegacyContact",
                  kind: "LinkedField",
                  name: "eligible_legacy_contacts",
                  plural: !0,
                  selections: [
                    l,
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "name",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "profile_picture_uri",
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          type: "XFBFXSettingsMemorialization",
          abstractKey: null,
        },
        u = [l];
      return {
        fragment: {
          argumentDefinitions: [e, t, r, o],
          kind: "Fragment",
          metadata: null,
          name: "CometAIHTSMemorializationLegacyContactDataSourceQuery",
          selections: [
            {
              alias: null,
              args: a,
              concreteType: "FXCALSettings",
              kind: "LinkedField",
              name: "fxcal_settings",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: i,
                  concreteType: null,
                  kind: "LinkedField",
                  name: "node",
                  plural: !1,
                  selections: [s],
                  storageKey: null,
                },
              ],
              storageKey: "fxcal_settings(is_cds:true)",
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [t, r, o, e],
          kind: "Operation",
          name: "CometAIHTSMemorializationLegacyContactDataSourceQuery",
          selections: [
            {
              alias: null,
              args: a,
              concreteType: "FXCALSettings",
              kind: "LinkedField",
              name: "fxcal_settings",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: i,
                  concreteType: null,
                  kind: "LinkedField",
                  name: "node",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "__typename",
                      storageKey: null,
                    },
                    s,
                    {
                      kind: "InlineFragment",
                      selections: u,
                      type: "XFBFXSettingsAdPreferences",
                      abstractKey: null,
                    },
                    {
                      kind: "InlineFragment",
                      selections: u,
                      type: "XFBFXSettingsMetaSecurityCheckupConfig",
                      abstractKey: null,
                    },
                    {
                      kind: "InlineFragment",
                      selections: u,
                      type: "XFBFXSettingsSecurityAndLogin",
                      abstractKey: null,
                    },
                  ],
                  storageKey: null,
                },
              ],
              storageKey: "fxcal_settings(is_cds:true)",
            },
          ],
        },
        params: {
          id: n(
            "CometAIHTSMemorializationLegacyContactDataSourceQuery_facebookRelayOperation",
          ),
          metadata: {},
          name: "CometAIHTSMemorializationLegacyContactDataSourceQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
