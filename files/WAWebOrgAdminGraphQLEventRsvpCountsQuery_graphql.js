__d(
  "WAWebOrgAdminGraphQLEventRsvpCountsQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "eventID" }],
        t = [
          {
            alias: null,
            args: [
              {
                fields: [
                  {
                    kind: "Variable",
                    name: "event_id",
                    variableName: "eventID",
                  },
                ],
                kind: "ObjectValue",
                name: "input",
              },
            ],
            concreteType: "XWAWAGetEventResponse",
            kind: "LinkedField",
            name: "xwa_event_get",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "XWAWAPrivacyAwareEventInvitationMetadata",
                kind: "LinkedField",
                name: "privacy_aware_invitation",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: "XWAWAPrivacyAwareInvitationRsvpStatusCounts",
                    kind: "LinkedField",
                    name: "count_by_rsvp_status",
                    plural: !1,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "going",
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "maybe",
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "no_response",
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
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "WAWebOrgAdminGraphQLEventRsvpCountsQuery",
          selections: t,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "WAWebOrgAdminGraphQLEventRsvpCountsQuery",
          selections: t,
        },
        params: {
          id: "30041328192122316",
          metadata: {},
          name: "WAWebOrgAdminGraphQLEventRsvpCountsQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
