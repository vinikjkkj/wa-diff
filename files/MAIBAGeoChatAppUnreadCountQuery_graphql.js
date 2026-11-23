__d(
  "MAIBAGeoChatAppUnreadCountQuery.graphql",
  ["MAIBAGeoChatAppUnreadCountQuery_facebookRelayOperation"],
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
        r = {
          alias: null,
          args: t,
          kind: "ScalarField",
          name: "maiba_handover_unread_thread_count",
          storageKey: null,
        },
        o = {
          alias: null,
          args: t,
          kind: "ScalarField",
          name: "maiba_unread_thread_count",
          storageKey: null,
        },
        a = {
          alias: null,
          args: t,
          kind: "ScalarField",
          name: "maiba_reminder_unread_thread_count",
          storageKey: null,
        },
        i = [
          {
            kind: "Variable",
            name: "ad_account_id",
            variableName: "currentAdAccountID",
          },
        ],
        l = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "action_needed",
          storageKey: null,
        },
        s = {
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
          name: "MAIBAGeoChatAppUnreadCountQuery",
          selections: [
            r,
            o,
            a,
            {
              condition: "shouldFetchActionNeededTasks",
              kind: "Condition",
              passingValue: !0,
              selections: [
                {
                  alias: null,
                  args: i,
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
                      selections: [l],
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
              ],
            },
            s,
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "MAIBAGeoChatAppUnreadCountQuery",
          selections: [
            r,
            o,
            a,
            {
              condition: "shouldFetchActionNeededTasks",
              kind: "Condition",
              passingValue: !0,
              selections: [
                {
                  alias: null,
                  args: i,
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
                      selections: [
                        l,
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
                  storageKey: null,
                },
              ],
            },
            s,
          ],
        },
        params: {
          id: n("MAIBAGeoChatAppUnreadCountQuery_facebookRelayOperation"),
          metadata: {},
          name: "MAIBAGeoChatAppUnreadCountQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
