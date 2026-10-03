__d(
  "LSShimCompleteThreadCutover.nop",
  [
    "ArmadilloCutoverClientFalcoEvent",
    "I64",
    "MessagingArmadilloThreadCutoverNonTALClientDomain",
    "MessagingArmadilloThreadCutoverNonTALClientEvent",
    "MessagingArmadilloThreadCutoverNonTALClientEventDetails",
    "ReQL",
    "asyncToGeneratorRuntime",
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
    var u = (function () {
      var t = n("asyncToGeneratorRuntime").asyncToGenerator(
        function* (t, n, a, i, l) {
          var u = yield o("ReQL").firstAsync(
            o("ReQL").fromTableAscending(t.cutover_threads).getKeyRange(i),
          );
          if (u != null) {
            var c = u.showOpenMessageHistory === !1;
            if (c) return [(e || (e = o("I64"))).one];
            var d = yield o("ReQL").firstAsync(
              o("ReQL")
                .fromTableAscending(t.mi_act_mapping_table.index("jid"))
                .getKeyRange(u.armadilloThreadId),
            );
            if (d != null) {
              var m = yield o("getChatJidForLSDBJid").getMaybeChatJidForLSDBJid(
                t,
                d.serverThreadKey,
                d.jid,
              );
              return m == null
                ? (s(
                    d.jid,
                    i,
                    l,
                    r("MessagingArmadilloThreadCutoverNonTALClientEventDetails")
                      .ARMADILLO_CUTOVER_CLIENT_EVENT_DETAILS_MISSING_ACT_THREAD,
                    !1,
                  ),
                  [(e || (e = o("I64"))).one])
                : (s(
                    d.jid,
                    i,
                    l,
                    r("MessagingArmadilloThreadCutoverNonTALClientEventDetails")
                      .ARMADILLO_CUTOVER_CLIENT_EVENT_DETAILS_SUCCESS,
                    !0,
                  ),
                  [(e || (e = o("I64"))).zero]);
            }
            return [(e || (e = o("I64"))).one];
          }
          return [(e || (e = o("I64"))).one];
        },
      );
      function a(e, n, r, o, a) {
        return t.apply(this, arguments);
      }
      return a;
    })();
    ((u.__nop_name__ = "LSShimCompleteThreadCutover"), (l.default = u));
  },
  98,
);
