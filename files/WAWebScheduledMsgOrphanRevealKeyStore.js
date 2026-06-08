__d(
  "WAWebScheduledMsgOrphanRevealKeyStore",
  ["WAWebSchemaScheduledMsgOrphanRevealKey", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o(
            "WAWebSchemaScheduledMsgOrphanRevealKey",
          ).getScheduledMsgOrphanRevealKeyTable();
          yield t.createOrReplace(e);
        })),
        s.apply(this, arguments)
      );
    }
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o(
            "WAWebSchemaScheduledMsgOrphanRevealKey",
          ).getScheduledMsgOrphanRevealKeyTable();
          return t.get(e);
        })),
        c.apply(this, arguments)
      );
    }
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o(
            "WAWebSchemaScheduledMsgOrphanRevealKey",
          ).getScheduledMsgOrphanRevealKeyTable();
          yield t.remove(e);
        })),
        m.apply(this, arguments)
      );
    }
    ((l.storeOrphanRevealKey = e),
      (l.getOrphanRevealKeyByRevealKeyId = u),
      (l.deleteOrphanRevealKey = d));
  },
  98,
);
