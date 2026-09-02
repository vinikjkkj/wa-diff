__d(
  "WAWebMexUpdateNewsletterAdminProfileSettingJobMutation.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          { defaultValue: null, kind: "LocalArgument", name: "newsletter_id" },
          { defaultValue: null, kind: "LocalArgument", name: "updates" },
        ],
        t = [
          {
            alias: null,
            args: [
              {
                kind: "Variable",
                name: "newsletter_id",
                variableName: "newsletter_id",
              },
              { kind: "Variable", name: "updates", variableName: "updates" },
            ],
            concreteType: "XWA2Newsletter",
            kind: "LinkedField",
            name: "xwa2_newsletter_update",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "id",
                storageKey: null,
              },
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
            ],
            storageKey: null,
          },
        ];
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "WAWebMexUpdateNewsletterAdminProfileSettingJobMutation",
          selections: t,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "WAWebMexUpdateNewsletterAdminProfileSettingJobMutation",
          selections: t,
        },
        params: {
          id: "28226671310350649",
          metadata: {},
          name: "WAWebMexUpdateNewsletterAdminProfileSettingJobMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
