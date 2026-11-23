__d(
  "WAWebUpdatePhoneNumberSharingListMutation.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        t = [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "dhash",
            storageKey: null,
          },
        ],
        n = [
          {
            alias: null,
            args: [{ kind: "Variable", name: "input", variableName: "input" }],
            concreteType: null,
            kind: "LinkedField",
            name: "xwa2_privacy_phone_number_sharing_update",
            plural: !1,
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
                    concreteType: "XWA2PrivacyPhoneNumberSharingListResult",
                    kind: "LinkedField",
                    name: "deny_list",
                    plural: !1,
                    selections: t,
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    concreteType: "XWA2PrivacyPhoneNumberSharingListResult",
                    kind: "LinkedField",
                    name: "allow_list",
                    plural: !1,
                    selections: t,
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    concreteType: "XWA2PrivacyPhoneNumberSharingListResult",
                    kind: "LinkedField",
                    name: "contact_exclude_list",
                    plural: !1,
                    selections: t,
                    storageKey: null,
                  },
                ],
                type: "XWA2PrivacyPhoneNumberSharingUpdateSuccess",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "error_code",
                    storageKey: null,
                  },
                ],
                type: "XWA2PrivacyPhoneNumberSharingUpdateFailure",
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
          name: "WAWebUpdatePhoneNumberSharingListMutation",
          selections: n,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "WAWebUpdatePhoneNumberSharingListMutation",
          selections: n,
        },
        params: {
          id: "29343057798711615",
          metadata: {},
          name: "WAWebUpdatePhoneNumberSharingListMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
