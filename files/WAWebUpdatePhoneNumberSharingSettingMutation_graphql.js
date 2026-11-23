__d(
  "WAWebUpdatePhoneNumberSharingSettingMutation.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        t = [
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
                    kind: "ScalarField",
                    name: "setting",
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
          name: "WAWebUpdatePhoneNumberSharingSettingMutation",
          selections: t,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "WAWebUpdatePhoneNumberSharingSettingMutation",
          selections: t,
        },
        params: {
          id: "40772000519053545",
          metadata: {},
          name: "WAWebUpdatePhoneNumberSharingSettingMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
