__d(
  "WAWebMexNewsletterAddPaidPartnershipLabelJobMutation.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "message_type",
        },
        t = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "newsletter_id",
        },
        n = { defaultValue: null, kind: "LocalArgument", name: "server_id" },
        r = [
          {
            alias: null,
            args: [
              {
                kind: "Variable",
                name: "message_type",
                variableName: "message_type",
              },
              {
                kind: "Variable",
                name: "newsletter_id",
                variableName: "newsletter_id",
              },
              {
                kind: "Variable",
                name: "server_id",
                variableName: "server_id",
              },
            ],
            concreteType: "XWA2NewsletterMutationResponse",
            kind: "LinkedField",
            name: "xwa2_newsletter_label_paid_partnership",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "id",
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
          name: "WAWebMexNewsletterAddPaidPartnershipLabelJobMutation",
          selections: r,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [t, n, e],
          kind: "Operation",
          name: "WAWebMexNewsletterAddPaidPartnershipLabelJobMutation",
          selections: r,
        },
        params: {
          id: "26102375079404865",
          metadata: {},
          name: "WAWebMexNewsletterAddPaidPartnershipLabelJobMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
