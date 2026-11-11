__d(
  "WAWebFetchPhoneNumberSharingSettingsQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "setting",
        storageKey: null,
      };
      return {
        fragment: {
          argumentDefinitions: [],
          kind: "Fragment",
          metadata: null,
          name: "WAWebFetchPhoneNumberSharingSettingsQuery",
          selections: [
            {
              kind: "RequiredField",
              field: {
                alias: null,
                args: null,
                concreteType: "XWA2PrivacyPhoneNumberSharingGetResponse",
                kind: "LinkedField",
                name: "xwa2_privacy_phone_number_sharing_get",
                plural: !1,
                selections: [
                  { kind: "RequiredField", field: e, action: "THROW" },
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
          argumentDefinitions: [],
          kind: "Operation",
          name: "WAWebFetchPhoneNumberSharingSettingsQuery",
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "XWA2PrivacyPhoneNumberSharingGetResponse",
              kind: "LinkedField",
              name: "xwa2_privacy_phone_number_sharing_get",
              plural: !1,
              selections: [e],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "41004700485795872",
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
