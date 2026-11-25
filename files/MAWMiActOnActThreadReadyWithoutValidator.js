__d(
  "MAWMiActOnActThreadReadyWithoutValidator",
  [
    "I64",
    "MAWMiActGetThreadLifecycleState__DO_NOT_USE",
    "MAWMiActOnActThreadReadyInstrumentation",
    "MAWMiActOnActThreadReadyQueue",
    "MAWMiActThreadLifecycleState__DO_NOT_USE",
    "MWFBLogger",
    "emptyFunction",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = o("MWFBLogger").MWLogger().tags(["Occam", "MiActMapping"]);
    async function d(t, n, a, i, l, d) {
      var m = o(
        "MAWMiActOnActThreadReadyInstrumentation",
      ).getOnActThreadReadyInstanceKey(a);
      (o("MAWMiActOnActThreadReadyInstrumentation").startQPL(
        m,
        a,
        n,
        "onActThreadReady",
      ),
        o("MAWMiActOnActThreadReadyInstrumentation").addPointQPL(
          m,
          "get_thread_lifecycle_state_by_thread_key_start",
        ));
      var p =
        d ||
        (await o(
          "MAWMiActGetThreadLifecycleState__DO_NOT_USE",
        ).getThreadLifecycleStateByThreadKey(t, n, a));
      switch (
        (o("MAWMiActOnActThreadReadyInstrumentation").addPointQPL(
          m,
          "get_thread_lifecycle_state_by_thread_key_end",
        ),
        o("MAWMiActOnActThreadReadyInstrumentation").addAnnotationsQPL(m, {
          string: { threadState: p.type },
        }),
        p.type)
      ) {
        case o("MAWMiActThreadLifecycleState__DO_NOT_USE").MiActThreadStatesEnum
          .MI_AND_ACT_THREAD_COMPLETE:
        case o("MAWMiActThreadLifecycleState__DO_NOT_USE").MiActThreadStatesEnum
          .OPTIMISTIC_THREAD_WITH_ACT:
        case o("MAWMiActThreadLifecycleState__DO_NOT_USE").MiActThreadStatesEnum
          .CLIENT_PARTIAL_MI_THREAD_WITH_ACT:
          return (
            c.DEBUG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[MiActMapping] Executing thread action: ",
                  ", threadState: ",
                  ", threadKey: ",
                  " on act thread ready",
                ])),
              a,
              p.type,
              (u || (u = o("I64"))).to_string(n),
            ),
            o("MAWMiActOnActThreadReadyInstrumentation").endSuccessQPL(m),
            i(n, p.jid)
          );
        case o("MAWMiActThreadLifecycleState__DO_NOT_USE").MiActThreadStatesEnum
          .THREAD_KEY_ONLY:
        case o("MAWMiActThreadLifecycleState__DO_NOT_USE").MiActThreadStatesEnum
          .AUTHORITATIVE_THREAD_MISSING_MAPPING_ROW:
        case o("MAWMiActThreadLifecycleState__DO_NOT_USE").MiActThreadStatesEnum
          .OPTIMISTIC_THREAD_NO_ACT:
        case o("MAWMiActThreadLifecycleState__DO_NOT_USE").MiActThreadStatesEnum
          .AUTHORITATIVE_THREAD_ONLY:
        case o("MAWMiActThreadLifecycleState__DO_NOT_USE").MiActThreadStatesEnum
          .CLIENT_PARTIAL_MI_THREAD:
        case o("MAWMiActThreadLifecycleState__DO_NOT_USE").MiActThreadStatesEnum
          .SERVER_PARTIAL_MI_THREAD:
          return (
            c.DEBUG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[MiActMapping] Enqueue by thread key: ",
                  ", threadState: ",
                  ", threadKey: ",
                  " on act thread ready",
                ])),
              a,
              p.type,
              (u || (u = o("I64"))).to_string(n),
            ),
            o("MAWMiActOnActThreadReadyQueue").enqueueByThreadKey(
              n,
              i,
              l != null ? l : r("emptyFunction"),
              a,
              p.type,
              m,
            )
          );
        case o("MAWMiActThreadLifecycleState__DO_NOT_USE").MiActThreadStatesEnum
          .JID_MISSING_MI_THREAD:
        case o("MAWMiActThreadLifecycleState__DO_NOT_USE").MiActThreadStatesEnum
          .JID_MISSING_MAPPING_ROW:
          throw (
            o("MAWMiActOnActThreadReadyInstrumentation").endFailureQPL(
              m,
              "jid_missing_mi_or_mapping_state",
            ),
            c.mustfixThrow(
              "Unhandled onActThreadReady for threadKey:%s, thread action: %s",
              (u || (u = o("I64"))).to_string(n),
              a,
            )
          );
        default:
          throw (
            p.type,
            c.mustfixThrow(" Unreachable miActThreadState.type: %s", p.type)
          );
      }
    }
    function m(e, t, n) {
      return new Promise(function (o, a) {
        d(
          e,
          t,
          n,
          function (e, t) {
            return (o({ chatJid: t, serverThreadKey: e }), Promise.resolve());
          },
          function (e) {
            return a(
              r("err")(
                "Timed out waiting for ACT thread to be ready in %s. Thread state: %s",
                n,
                e,
              ),
            );
          },
        ).catch(function () {
          return a();
        });
      });
    }
    ((l.onActThreadReadyWithoutValidator = d),
      (l.waitForACTThreadReadyWithoutValidator = m));
  },
  98,
);
