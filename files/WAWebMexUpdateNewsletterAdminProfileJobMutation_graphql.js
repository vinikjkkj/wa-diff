__d(
  "WAWebMexUpdateNewsletterAdminProfileJobMutation.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "admin_profile",
        },
        t = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "newsletter_id",
        },
        n = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        r = [
          {
            alias: null,
            args: [
              {
                kind: "Variable",
                name: "admin_profile",
                variableName: "admin_profile",
              },
              {
                kind: "Variable",
                name: "newsletter_id",
                variableName: "newsletter_id",
              },
            ],
            concreteType: "XWA2NewsletterAdminProfileResponse",
            kind: "LinkedField",
            name: "xwa2_newsletter_admin_profile_update",
            plural: !1,
            selections: [
              n,
              {
                alias: null,
                args: null,
                concreteType: "XWA2NewsletterState",
                kind: "LinkedField",
                name: "state",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "type",
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                concreteType: "XWA2NewsletterAdminProfile",
                kind: "LinkedField",
                name: "admin_profile",
                plural: !1,
                selections: [
                  n,
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "name",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    concreteType: "XWA2Picture",
                    kind: "LinkedField",
                    name: "picture",
                    plural: !1,
                    selections: [
                      n,
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "direct_path",
                        storageKey: null,
                      },
                    ],
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ];
      return {
        fragment: {
          argumentDefinitions: [e, t],
          kind: "Fragment",
          metadata: null,
          name: "WAWebMexUpdateNewsletterAdminProfileJobMutation",
          selections: r,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [t, e],
          kind: "Operation",
          name: "WAWebMexUpdateNewsletterAdminProfileJobMutation",
          selections: r,
        },
        params: {
          id: "27871895895845117",
          metadata: {},
          name: "WAWebMexUpdateNewsletterAdminProfileJobMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
