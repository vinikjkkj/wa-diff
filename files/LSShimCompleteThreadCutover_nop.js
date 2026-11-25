__d(
  "LSShimCompleteThreadCutover.nop",
  [
    "ArmadilloCutoverClientFalcoEvent",
    "I64",
    "MessagingArmadilloThreadCutoverNonTALClientDomain",
    "MessagingArmadilloThreadCutoverNonTALClientEvent",
    "MessagingArmadilloThreadCutoverNonTALClientEventDetails",
    "ReQL",
    "getChatJidForLSDBJid",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t, n, a, i, l) {
      r("ArmadilloCutoverClientFalcoEvent").log(function () {
        return {
          armadillo_thread_id: (e || (e = o("I64"))).to_string(t),
          domain: r("MessagingArmadilloThreadCutoverNonTALClientDomain")
            .ARMADILLO_CUTOVER_CLIENT_DOMAIN_MESSENGER_CUTOVER_DASM_NATIVE_OPERATIONS,
          event: r("MessagingArmadilloThreadCutoverNonTALClientEvent")
            .ARMADILLO_CUTOVER_CLIENT_EVENT_COMPLETE_CUTOVER,
          event_details: i,
          open_thread_id: e.to_string(n),
          success: l,
          trace_id: a,
        };
      });
    }
    var u = async function (n, a, i, l, u) {
      var t = await o("ReQL").firstAsync(
        o("ReQL").fromTableAscending(n.cutover_threads).getKeyRange(l),
      );
      if (t != null) {
        var c = t.showOpenMessageHistory === !1;
        if (c) return [(e || (e = o("I64"))).one];
        var d = await o("ReQL").firstAsync(
          o("ReQL")
            .fromTableAscending(n.mi_act_mapping_table.index("jid"))
            .getKeyRange(t.armadilloThreadId),
        );
        if (d != null) {
          var m = await o("getChatJidForLSDBJid").getMaybeChatJidForLSDBJid(
            n,
            d.serverThreadKey,
            d.jid,
          );
          return m == null
            ? (s(
                d.jid,
                l,
                u,
                r("MessagingArmadilloThreadCutoverNonTALClientEventDetails")
                  .ARMADILLO_CUTOVER_CLIENT_EVENT_DETAILS_MISSING_ACT_THREAD,
                !1,
              ),
              [(e || (e = o("I64"))).one])
            : (s(
                d.jid,
                l,
                u,
                r("MessagingArmadilloThreadCutoverNonTALClientEventDetails")
                  .ARMADILLO_CUTOVER_CLIENT_EVENT_DETAILS_SUCCESS,
                !0,
              ),
              [(e || (e = o("I64"))).zero]);
        }
        return [(e || (e = o("I64"))).one];
      }
      return [(e || (e = o("I64"))).one];
    };
    ((u.__nop_name__ = "LSShimCompleteThreadCutover"), (l.default = u));
  },
  98,
);
