__d(
  "WAWebCustomerManagerAccessStateQuery.graphql",
  ["WAWebCustomerManagerAccessStateQuery_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
        {
          alias: null,
          args: null,
          concreteType: "XFBWAContactManagerAccessState",
          kind: "LinkedField",
          name: "xfb_wa_contact_manager_access_state",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "state",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "trial_end_time",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ];
      return {
        fragment: {
          argumentDefinitions: [],
          kind: "Fragment",
          metadata: null,
          name: "WAWebCustomerManagerAccessStateQuery",
          selections: e,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [],
          kind: "Operation",
          name: "WAWebCustomerManagerAccessStateQuery",
          selections: e,
        },
        params: {
          id: n("WAWebCustomerManagerAccessStateQuery_facebookRelayOperation"),
          metadata: {},
          name: "WAWebCustomerManagerAccessStateQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
