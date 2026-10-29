__d(
  "WAWebMexSharableEventGuestJoinedWaNotificationsQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
        {
          alias: null,
          args: null,
          concreteType: "XWA2EventNotificationGuestJoinedWaInfo",
          kind: "LinkedField",
          name: "xwa2_notify_event_on_guest_joined_wa",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "guest_lid",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "is_user_visible",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "event_id",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "event_name",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "username",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "pn",
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
          name: "WAWebMexSharableEventGuestJoinedWaNotificationsQuery",
          selections: e,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [],
          kind: "Operation",
          name: "WAWebMexSharableEventGuestJoinedWaNotificationsQuery",
          selections: e,
        },
        params: {
          id: "28828665613459115",
          metadata: {},
          name: "WAWebMexSharableEventGuestJoinedWaNotificationsQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
