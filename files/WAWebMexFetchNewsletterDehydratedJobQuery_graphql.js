__d(
  "WAWebMexFetchNewsletterDehydratedJobQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "fetch_wamo_sub",
        },
        t = { defaultValue: null, kind: "LocalArgument", name: "input" },
        n = [
          {
            alias: null,
            args: [{ kind: "Variable", name: "input", variableName: "input" }],
            concreteType: "XWA2Newsletter",
            kind: "LinkedField",
            name: "xwa2_newsletter",
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
                concreteType: "XWA2NewsletterThreadMetadata",
                kind: "LinkedField",
                name: "thread_metadata",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "subscribers_count",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "verification",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    concreteType: "XWA2NewsletterThreadSettings",
                    kind: "LinkedField",
                    name: "settings",
                    plural: !1,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        concreteType: "XWA2NewsletterReactionCodesSetting",
                        kind: "LinkedField",
                        name: "reaction_codes",
                        plural: !1,
                        selections: [
                          {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "value",
                            storageKey: null,
                          },
                        ],
                        storageKey: null,
                      },
                    ],
                    storageKey: null,
                  },
                  {
                    condition: "fetch_wamo_sub",
                    kind: "Condition",
                    passingValue: !0,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        concreteType: "XWA2NewsletterWamoSubMetadata",
                        kind: "LinkedField",
                        name: "wamo_sub",
                        plural: !1,
                        selections: [
                          {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "plan_id",
                            storageKey: null,
                          },
                        ],
                        storageKey: null,
                      },
                    ],
                  },
                ],
                storageKey: null,
              },
              {
                condition: "fetch_wamo_sub",
                kind: "Condition",
                passingValue: !0,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: "XWA2NewsletterViewerMetadata",
                    kind: "LinkedField",
                    name: "viewer_metadata",
                    plural: !1,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "wamo_sub_status",
                        storageKey: null,
                      },
                    ],
                    storageKey: null,
                  },
                ],
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
          name: "WAWebMexFetchNewsletterDehydratedJobQuery",
          selections: n,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [t, e],
          kind: "Operation",
          name: "WAWebMexFetchNewsletterDehydratedJobQuery",
          selections: n,
        },
        params: {
          id: "30328461880085868",
          metadata: {},
          name: "WAWebMexFetchNewsletterDehydratedJobQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
