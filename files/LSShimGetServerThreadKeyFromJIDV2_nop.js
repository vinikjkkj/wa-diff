__d(
  "LSShimGetServerThreadKeyFromJIDV2.nop",
  ["ReQL", "RetUtil"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = async function (t, n, r) {
      var e = await o("ReQL").firstAsync(
        o("ReQL")
          .fromTableAscending(t.mi_act_mapping_table.index("jid"))
          .getKeyRange(r),
      );
      return o("RetUtil").getNullableRetResult(
        e == null ? void 0 : e.serverThreadKey,
      );
    };
    ((e.__nop_name__ = "LSShimGetServerThreadKeyFromJIDV2"), (l.default = e));
  },
  98,
);
