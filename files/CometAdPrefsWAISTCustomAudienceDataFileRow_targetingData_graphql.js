__d(
  "CometAdPrefsWAISTCustomAudienceDataFileRow_targetingData.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [
        { defaultValue: null, kind: "LocalArgument", name: "ad_id" },
      ],
      kind: "Fragment",
      metadata: null,
      name: "CometAdPrefsWAISTCustomAudienceDataFileRow_targetingData",
      selections: [
        {
          kind: "RequiredField",
          field: {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "id",
            storageKey: null,
          },
          action: "THROW",
        },
        {
          kind: "RequiredField",
          field: {
            alias: null,
            args: [{ kind: "Variable", name: "ad_id", variableName: "ad_id" }],
            concreteType: "TWAISTDFCAData",
            kind: "LinkedField",
            name: "dfca_data",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "business_id",
                storageKey: null,
              },
              {
                kind: "RequiredField",
                field: {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "ca_owner_name",
                  storageKey: null,
                },
                action: "THROW",
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "ca_owner_page_url",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "ca_owner_opt_out_url",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "ca_owner_page_profile_picture_url",
                storageKey: null,
              },
              {
                kind: "RequiredField",
                field: {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "is_using_advertiser_identifier",
                  storageKey: null,
                },
                action: "THROW",
              },
              {
                kind: "RequiredField",
                field: {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "is_opted_out",
                  storageKey: null,
                },
                action: "THROW",
              },
            ],
            storageKey: null,
          },
          action: "THROW",
        },
        {
          kind: "RequiredField",
          field: {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "serialized_data",
            storageKey: null,
          },
          action: "THROW",
        },
      ],
      type: "WAISTUICustomAudienceType",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
