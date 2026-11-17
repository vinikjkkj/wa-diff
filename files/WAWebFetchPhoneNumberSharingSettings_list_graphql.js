__d(
  "WAWebFetchPhoneNumberSharingSettings_list.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "WAWebFetchPhoneNumberSharingSettings_list",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "dhash",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          concreteType: null,
          kind: "LinkedField",
          name: "entries",
          plural: !0,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "__typename",
              storageKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "user_jid",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "pn_jid",
                  storageKey: null,
                },
              ],
              type: "XWA2PrivacyPhoneNumberSharingUserEntry",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "group_jid",
                  storageKey: null,
                },
              ],
              type: "XWA2PrivacyPhoneNumberSharingGroupEntry",
              abstractKey: null,
            },
          ],
          storageKey: null,
        },
      ],
      type: "XWA2PrivacyPhoneNumberSharingListContents",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
