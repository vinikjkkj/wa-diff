__d(
  "LSShimGetServerThreadKeyFromJIDV2.nop",
  ["ReQL", "RetUtil", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      var e = n("asyncToGeneratorRuntime").asyncToGenerator(
        function* (e, t, n) {
          var r = yield o("ReQL").firstAsync(
            o("ReQL")
              .fromTableAscending(e.mi_act_mapping_table.index("jid"))
              .getKeyRange(n),
          );
          return o("RetUtil").getNullableRetResult(
            r == null ? void 0 : r.serverThreadKey,
          );
        },
      );
      function t(t, n, r) {
        return e.apply(this, arguments);
      }
      return t;
    })();
    ((e.__nop_name__ = "LSShimGetServerThreadKeyFromJIDV2"), (l.default = e));
  },
  98,
);
