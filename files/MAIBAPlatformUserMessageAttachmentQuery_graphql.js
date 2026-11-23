__d(
  "MAIBAPlatformUserMessageAttachmentQuery.graphql",
  ["MAIBAPlatformUserMessageAttachmentQuery_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          { defaultValue: null, kind: "LocalArgument", name: "attachments" },
          { defaultValue: null, kind: "LocalArgument", name: "skipQuery" },
        ],
        t = [
          {
            condition: "skipQuery",
            kind: "Condition",
            passingValue: !1,
            selections: [
              {
                alias: null,
                args: [
                  {
                    kind: "Variable",
                    name: "attachments",
                    variableName: "attachments",
                  },
                ],
                kind: "ScalarField",
                name: "xfb_user_media_attachment_urls",
                storageKey: null,
              },
            ],
          },
        ];
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "MAIBAPlatformUserMessageAttachmentQuery",
          selections: t,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "MAIBAPlatformUserMessageAttachmentQuery",
          selections: t,
        },
        params: {
          id: n(
            "MAIBAPlatformUserMessageAttachmentQuery_facebookRelayOperation",
          ),
          metadata: {},
          name: "MAIBAPlatformUserMessageAttachmentQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
