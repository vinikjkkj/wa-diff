__d(
  "WAWebFetchPhoneNumberSharingSettingsQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        t = [{ kind: "Variable", name: "input", variableName: "input" }],
        n = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "setting",
          storageKey: null,
        },
        r = [
          {
            args: null,
            kind: "FragmentSpread",
            name: "WAWebFetchPhoneNumberSharingSettings_list",
          },
        ],
        o = [
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
        ];
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "WAWebFetchPhoneNumberSharingSettingsQuery",
          selections: [
            {
              kind: "RequiredField",
              field: {
                alias: null,
                args: t,
                concreteType: "XWA2PrivacyPhoneNumberSharingGetResponse",
                kind: "LinkedField",
                name: "xwa2_privacy_phone_number_sharing_get",
                plural: !1,
                selections: [
                  { kind: "RequiredField", field: n, action: "THROW" },
                  {
                    alias: null,
                    args: null,
                    concreteType: "XWA2PrivacyPhoneNumberSharingListContents",
                    kind: "LinkedField",
                    name: "deny_list",
                    plural: !1,
                    selections: r,
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    concreteType: "XWA2PrivacyPhoneNumberSharingListContents",
                    kind: "LinkedField",
                    name: "allow_list",
                    plural: !1,
                    selections: r,
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    concreteType: "XWA2PrivacyPhoneNumberSharingListContents",
                    kind: "LinkedField",
                    name: "contact_exclude_list",
                    plural: !1,
                    selections: r,
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
              action: "THROW",
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "WAWebFetchPhoneNumberSharingSettingsQuery",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: "XWA2PrivacyPhoneNumberSharingGetResponse",
              kind: "LinkedField",
              name: "xwa2_privacy_phone_number_sharing_get",
              plural: !1,
              selections: [
                n,
                {
                  alias: null,
                  args: null,
                  concreteType: "XWA2PrivacyPhoneNumberSharingListContents",
                  kind: "LinkedField",
                  name: "deny_list",
                  plural: !1,
                  selections: o,
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: "XWA2PrivacyPhoneNumberSharingListContents",
                  kind: "LinkedField",
                  name: "allow_list",
                  plural: !1,
                  selections: o,
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: "XWA2PrivacyPhoneNumberSharingListContents",
                  kind: "LinkedField",
                  name: "contact_exclude_list",
                  plural: !1,
                  selections: o,
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "39968776652767233",
          metadata: {},
          name: "WAWebFetchPhoneNumberSharingSettingsQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
