__d(
  "WebBloksCurrentTimeMillisV2",
  [],
  function (t, n, r, o, a, i) {
    function e(e) {
      return e.getScriptMode() === "BIND"
        ? e.getBindTimeSnapshotMs()
        : Date.now();
    }
    i.default = e;
  },
  66,
);
