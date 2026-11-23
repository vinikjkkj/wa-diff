__d(
  "MAIBAChatAppUnreadCountQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "currentAdAccountID",
          },
          {
            defaultValue: !1,
            kind: "LocalArgument",
            name: "includeRecommendationUnreadCount",
          },
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "recommendationAdAccountID",
          },
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "shouldFetchActionNeededTasks",
          },
        ],
        t = [
          {
            kind: "Variable",
            name: "current_ad_account_id",
            variableName: "currentAdAccountID",
          },
        ],
        n = {
          alias: null,
          args: t,
          kind: "ScalarField",
          name: "maiba_handover_unread_thread_count",
          storageKey: null,
        },
        r = {
          alias: null,
          args: t,
          kind: "ScalarField",
          name: "maiba_unread_thread_count",
          storageKey: null,
        },
        o = {
          alias: null,
          args: t,
          kind: "ScalarField",
          name: "maiba_reminder_unread_thread_count",
          storageKey: null,
        },
        a = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        i = {
          alias: null,
          args: [
            {
              kind: "Variable",
              name: "ad_account_id",
              variableName: "recommendationAdAccountID",
            },
            { kind: "Literal", name: "only_unread", value: !0 },
          ],
          concreteType: "MAIBAFabRecommendationNotification",
          kind: "LinkedField",
          name: "maiba_fab_recommendation_notifications",
          plural: !0,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "read_time",
              storageKey: null,
            },
            a,
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "ad_account_id",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "conversation_id",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "creation_time",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "snippet",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "title",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "toast_id",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        l = [
          {
            kind: "Variable",
            name: "ad_account_id",
            variableName: "currentAdAccountID",
          },
        ],
        s = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "action_needed",
          storageKey: null,
        },
        u = {
          alias: null,
          args: null,
          concreteType: "XFBMAIBAViewerFields",
          kind: "LinkedField",
          name: "maiba_viewer",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "is_cmo_internal_eligible",
              storageKey: null,
            },
          ],
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "MAIBAChatAppUnreadCountQuery",
          selections: [
            n,
            r,
            o,
            {
              condition: "includeRecommendationUnreadCount",
              kind: "Condition",
              passingValue: !0,
              selections: [{ kind: "CatchField", field: i, to: "NULL" }],
            },
            {
              condition: "shouldFetchActionNeededTasks",
              kind: "Condition",
              passingValue: !0,
              selections: [
                {
                  alias: null,
                  args: l,
                  concreteType: "MaibaAsyncTasksConnection",
                  kind: "LinkedField",
                  name: "maiba_async_tasks",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: "XFBMAIBAAsyncTask",
                      kind: "LinkedField",
                      name: "nodes",
                      plural: !0,
                      selections: [s],
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
              ],
            },
            u,
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "MAIBAChatAppUnreadCountQuery",
          selections: [
            n,
            r,
            o,
            {
              condition: "includeRecommendationUnreadCount",
              kind: "Condition",
              passingValue: !0,
              selections: [i],
            },
            {
              condition: "shouldFetchActionNeededTasks",
              kind: "Condition",
              passingValue: !0,
              selections: [
                {
                  alias: null,
                  args: l,
                  concreteType: "MaibaAsyncTasksConnection",
                  kind: "LinkedField",
                  name: "maiba_async_tasks",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: "XFBMAIBAAsyncTask",
                      kind: "LinkedField",
                      name: "nodes",
                      plural: !0,
                      selections: [s, a],
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
              ],
            },
            u,
          ],
        },
        params: {
          id: "28651346067878367",
          metadata: {},
          name: "MAIBAChatAppUnreadCountQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
