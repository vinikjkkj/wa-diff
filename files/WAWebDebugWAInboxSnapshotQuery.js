__d(
  "WAWebDebugWAInboxSnapshotQuery",
  [
    "WAWebDebugWAInboxSnapshotQuery.graphql",
    "WAWebRelayClient",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e !== void 0 ? e : (e = n("WAWebDebugWAInboxSnapshotQuery.graphql"));
    function u() {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield o("WAWebRelayClient").fetchQuery(
              s,
              {},
              { environmentType: "whatsapp_web" },
            ),
            t = e == null ? void 0 : e.get_wa_mailbox;
          return t == null
            ? null
            : {
                __typename: t.__typename,
                encrypted_backup_id: t.encrypted_backup_id,
                snapshot_timestamp_ms: t.snapshot_timestamp_ms,
              };
        })),
        c.apply(this, arguments)
      );
    }
    l.fetchWAInboxSnapshot = u;
  },
  98,
);
