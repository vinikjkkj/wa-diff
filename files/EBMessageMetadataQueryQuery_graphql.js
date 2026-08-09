__d(
  "EBMessageMetadataQueryQuery.graphql",
  ["EBMessageMetadataQueryQuery_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "data" }],
        t = {
          alias: null,
          args: null,
          concreteType: "XFBEncryptedBackupMailbox",
          kind: "LinkedField",
          name: "mailbox",
          plural: !1,
          selections: [
            {
              alias: null,
              args: [{ kind: "Variable", name: "data", variableName: "data" }],
              concreteType: "XFBTDeanonMessagesResponse",
              kind: "LinkedField",
              name: "deanon_messages_metadata",
              plural: !0,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "offline_threading_id",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "sort_order_ms",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "sender_id",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "is_admin_message",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "admin_message",
                  storageKey: null,
                },
              ],
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
          name: "EBMessageMetadataQueryQuery",
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "Viewer",
              kind: "LinkedField",
              name: "viewer",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "XFBEncryptedBackup",
                  kind: "LinkedField",
                  name: "encrypted_backup",
                  plural: !1,
                  selections: [t],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "EBMessageMetadataQueryQuery",
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "Viewer",
              kind: "LinkedField",
              name: "viewer",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "XFBEncryptedBackup",
                  kind: "LinkedField",
                  name: "encrypted_backup",
                  plural: !1,
                  selections: [
                    t,
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
        params: {
          id: n("EBMessageMetadataQueryQuery_facebookRelayOperation"),
          metadata: {},
          name: "EBMessageMetadataQueryQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
