__d(
  "WAWebMexRevokeNewsletterAdminInviteJobMutation.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          { defaultValue: null, kind: "LocalArgument", name: "newsletter_id" },
          { defaultValue: null, kind: "LocalArgument", name: "user_id" },
        ],
        t = [
          {
            kind: "Variable",
            name: "newsletter_id",
            variableName: "newsletter_id",
          },
          { kind: "Variable", name: "user_id", variableName: "user_id" },
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
          name: "WAWebMexRevokeNewsletterAdminInviteJobMutation",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: "XWA2NewsletterMutationResponse",
              kind: "LinkedField",
              name: "xwa2_newsletter_admin_invite_revoke",
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
          name: "WAWebMexRevokeNewsletterAdminInviteJobMutation",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: "XWA2NewsletterMutationResponse",
              kind: "LinkedField",
              name: "xwa2_newsletter_admin_invite_revoke",
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
          id: "9656078347839416",
          metadata: {},
          name: "WAWebMexRevokeNewsletterAdminInviteJobMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
