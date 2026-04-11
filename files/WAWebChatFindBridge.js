__d(
  "WAWebChatFindBridge",
  ["WAWebApiHydrateWidsUtil", "WAWebSchemaChat", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebSchemaChat").getChatTable().get(e, !1);
          return t ? o("WAWebApiHydrateWidsUtil").hydrateWids(t) : null;
        })),
        s.apply(this, arguments)
      );
    }
    l.findLocal = e;
  },
  98,
);
