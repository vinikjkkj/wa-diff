__d(
  "WAWebMexAcceptNewsletterAdminInviteJobMutation.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          { defaultValue: null, kind: "LocalArgument", name: "newsletter_id" },
        ],
        t = [
          {
            kind: "Variable",
            name: "newsletter_id",
            variableName: "newsletter_id",
          },
        ],
        n = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "WAWebMexAcceptNewsletterAdminInviteJobMutation",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: "XWA2NewsletterMutationResponse",
              kind: "LinkedField",
              name: "xwa2_newsletter_admin_invite_accept",
              plural: !1,
              selections: [n],
              storageKey: null,
            },
          ],
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "WAWebMexAcceptNewsletterAdminInviteJobMutation",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: "XWA2NewsletterMutationResponse",
              kind: "LinkedField",
              name: "xwa2_newsletter_admin_invite_accept",
              plural: !1,
              selections: [
                n,
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
          ],
        },
        params: {
          id: "9580828702035549",
          metadata: {},
          name: "WAWebMexAcceptNewsletterAdminInviteJobMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
