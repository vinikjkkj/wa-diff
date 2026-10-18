__d(
  "WAWebMexOrgMemberUpdateNotificationHandlerQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
        {
          alias: null,
          args: null,
          concreteType: "XWA2OrgNotificationMemberUpdateInfo",
          kind: "LinkedField",
          name: "xwa2_notify_org_on_member_update",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "org_id",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "org_member_updated_ts_usec",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              concreteType: "XWA2OrgNotificationMemberInfo",
              kind: "LinkedField",
              name: "members",
              plural: !0,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "member_lid",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "member_action",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "display_name",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "role",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "member_tag",
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
          argumentDefinitions: [],
          kind: "Fragment",
          metadata: null,
          name: "WAWebMexOrgMemberUpdateNotificationHandlerQuery",
          selections: e,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [],
          kind: "Operation",
          name: "WAWebMexOrgMemberUpdateNotificationHandlerQuery",
          selections: e,
        },
        params: {
          id: "29119014437722960",
          metadata: {},
          name: "WAWebMexOrgMemberUpdateNotificationHandlerQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
