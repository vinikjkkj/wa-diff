__d(
  "FXIMIdentityProfilePicV2_identity.facebook.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "FXIMIdentityProfilePicV2_identity",
      selections: [
        {
          kind: "InlineDataFragmentSpread",
          name: "fximGetIdentityPictureV2_identity",
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "LinkedIdentityDataProfilePictureInfo",
              kind: "LinkedField",
              name: "profile_picture_info",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "profile_picture_url",
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "avatar_preview_url",
              storageKey: null,
            },
          ],
          args: null,
          argumentDefinitions: [],
        },
        {
          kind: "RequiredField",
          field: {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "detailed_identity_type",
            storageKey: null,
          },
          action: "THROW",
          path: "detailed_identity_type",
        },
        {
          kind: "RequiredField",
          field: {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "identity_type",
            storageKey: null,
          },
          action: "THROW",
          path: "identity_type",
        },
      ],
      type: "ILinkedIdentityData",
      abstractKey: "__isILinkedIdentityData",
    };
    a.exports = e;
  },
  null,
);
