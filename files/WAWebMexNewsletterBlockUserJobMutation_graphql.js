__d(
  "WAWebMexNewsletterBlockUserJobMutation.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "newsletter_id",
        },
        t = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "response_server_id",
        },
        n = { defaultValue: null, kind: "LocalArgument", name: "server_id" },
        r = [
          {
            alias: null,
            args: [
              {
                kind: "Variable",
                name: "newsletter_id",
                variableName: "newsletter_id",
              },
              {
                kind: "Variable",
                name: "response_server_id",
                variableName: "response_server_id",
              },
              {
                kind: "Variable",
                name: "server_id",
                variableName: "server_id",
              },
            ],
            concreteType: "XWA2NewsletterBlockUserResponse",
            kind: "LinkedField",
            name: "xwa2_newsletter_block_user",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "newsletter_id",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ];
      return {
        fragment: {
          argumentDefinitions: [e, t, n],
          kind: "Fragment",
          metadata: null,
          name: "WAWebMexNewsletterBlockUserJobMutation",
          selections: r,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [e, n, t],
          kind: "Operation",
          name: "WAWebMexNewsletterBlockUserJobMutation",
          selections: r,
        },
        params: {
          id: "24021389470875463",
          metadata: {},
          name: "WAWebMexNewsletterBlockUserJobMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
