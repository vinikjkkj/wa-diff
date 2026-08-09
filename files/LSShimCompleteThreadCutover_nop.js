__d(
  "LSShimCompleteThreadCutover.nop",
  [
    "I64",
    "MAWBridgeFireAndForget",
    "ReQL",
    "asyncToGeneratorRuntime",
    "getChatJidForLSDBJid",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (function () {
        var t = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, n, r, a, i) {
            var l = yield o("ReQL").firstAsync(
              o("ReQL").fromTableAscending(t.cutover_threads).getKeyRange(a),
            );
            if (l != null) {
              var s = l.showOpenMessageHistory === !1;
              if (s) return [(e || (e = o("I64"))).one];
              var u = yield o("ReQL").firstAsync(
                o("ReQL")
                  .fromTableAscending(t.mi_act_mapping_table.index("jid"))
                  .getKeyRange(l.armadilloThreadId),
              );
              if (u != null) {
                var c = yield o(
                  "getChatJidForLSDBJid",
                ).getMaybeChatJidForLSDBJid(t, u.serverThreadKey, u.jid);
                return c == null
                  ? [(e || (e = o("I64"))).one]
                  : (o("MAWBridgeFireAndForget").fireAndForget(
                      "backend",
                      "insertAdminMessageInCutoverThreads",
                      {
                        openThreadId: (e || (e = o("I64"))).to_string(a),
                        threadJid: c,
                        traceId: i,
                      },
                    ),
                    [e.zero]);
              }
              return [(e || (e = o("I64"))).one];
            }
            return [(e || (e = o("I64"))).one];
          },
        );
        function r(e, n, r, o, a) {
          return t.apply(this, arguments);
        }
        return r;
      })();
    ((s.__nop_name__ = "LSShimCompleteThreadCutover"), (l.default = s));
  },
  98,
);
