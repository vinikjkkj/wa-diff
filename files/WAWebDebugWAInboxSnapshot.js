__d(
  "WAWebDebugWAInboxSnapshot",
  ["WAWebDebugWAInboxSnapshotQuery", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return o("WAWebDebugWAInboxSnapshotQuery").fetchWAInboxSnapshot();
        })),
        s.apply(this, arguments)
      );
    }
    ((e.doc =
      "Runs WAInboxSnapshotQuery and returns get_wa_mailbox snapshot metadata."),
      (e.paramsToExecute = []));
    var u = { waInboxSnapshot: e };
    l.default = u;
  },
  98,
);
