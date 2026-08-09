__d(
  "MAWMiActOnActThreadReadyWithoutValidator",
  [
    "I64",
    "MAWMiActGetThreadLifecycleState__DO_NOT_USE",
    "MAWMiActOnActThreadReadyInstrumentation",
    "MAWMiActOnActThreadReadyQueue",
    "MAWMiActThreadLifecycleState__DO_NOT_USE",
    "MWFBLogger",
    "Promise",
    "asyncToGeneratorRuntime",
    "emptyFunction",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d = o("MWFBLogger").MWLogger().tags(["Occam", "MiActMapping"]);
    function m(e, t, n, r, o, a) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, n, a, i, l, u) {
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
              u ||
              (yield o(
                "MAWMiActGetThreadLifecycleState__DO_NOT_USE",
              ).getThreadLifecycleStateByThreadKey(t, n, a));
            switch (
              (o("MAWMiActOnActThreadReadyInstrumentation").addPointQPL(
                m,
                "get_thread_lifecycle_state_by_thread_key_end",
              ),
              o("MAWMiActOnActThreadReadyInstrumentation").addAnnotationsQPL(
                m,
                { string: { threadState: p.type } },
              ),
              p.type)
            ) {
              case o("MAWMiActThreadLifecycleState__DO_NOT_USE")
                .MiActThreadStatesEnum.MI_AND_ACT_THREAD_COMPLETE:
              case o("MAWMiActThreadLifecycleState__DO_NOT_USE")
                .MiActThreadStatesEnum.OPTIMISTIC_THREAD_WITH_ACT:
              case o("MAWMiActThreadLifecycleState__DO_NOT_USE")
                .MiActThreadStatesEnum.CLIENT_PARTIAL_MI_THREAD_WITH_ACT:
                return (
                  d.DEBUG(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[MiActMapping] Executing thread action: ",
                        ", threadState: ",
                        ", threadKey: ",
                        " on act thread ready",
                      ])),
                    a,
                    p.type,
                    (c || (c = o("I64"))).to_string(n),
                  ),
                  o("MAWMiActOnActThreadReadyInstrumentation").endSuccessQPL(m),
                  i(n, p.jid)
                );
              case o("MAWMiActThreadLifecycleState__DO_NOT_USE")
                .MiActThreadStatesEnum.THREAD_KEY_ONLY:
              case o("MAWMiActThreadLifecycleState__DO_NOT_USE")
                .MiActThreadStatesEnum.AUTHORITATIVE_THREAD_MISSING_MAPPING_ROW:
              case o("MAWMiActThreadLifecycleState__DO_NOT_USE")
                .MiActThreadStatesEnum.OPTIMISTIC_THREAD_NO_ACT:
              case o("MAWMiActThreadLifecycleState__DO_NOT_USE")
                .MiActThreadStatesEnum.AUTHORITATIVE_THREAD_ONLY:
              case o("MAWMiActThreadLifecycleState__DO_NOT_USE")
                .MiActThreadStatesEnum.CLIENT_PARTIAL_MI_THREAD:
              case o("MAWMiActThreadLifecycleState__DO_NOT_USE")
                .MiActThreadStatesEnum.SERVER_PARTIAL_MI_THREAD:
                return (
                  d.DEBUG(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[MiActMapping] Enqueue by thread key: ",
                        ", threadState: ",
                        ", threadKey: ",
                        " on act thread ready",
                      ])),
                    a,
                    p.type,
                    (c || (c = o("I64"))).to_string(n),
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
              case o("MAWMiActThreadLifecycleState__DO_NOT_USE")
                .MiActThreadStatesEnum.JID_MISSING_MI_THREAD:
              case o("MAWMiActThreadLifecycleState__DO_NOT_USE")
                .MiActThreadStatesEnum.JID_MISSING_MAPPING_ROW:
                throw (
                  o("MAWMiActOnActThreadReadyInstrumentation").endFailureQPL(
                    m,
                    "jid_missing_mi_or_mapping_state",
                  ),
                  d.mustfixThrow(
                    "Unhandled onActThreadReady for threadKey:%s, thread action: %s",
                    (c || (c = o("I64"))).to_string(n),
                    a,
                  )
                );
              default:
                throw (
                  p.type,
                  d.mustfixThrow(
                    " Unreachable miActThreadState.type: %s",
                    p.type,
                  )
                );
            }
          },
        )),
        p.apply(this, arguments)
      );
    }
    function _(e, t, o) {
      return new (u || (u = n("Promise")))(function (a, i) {
        m(
          e,
          t,
          o,
          function (e, t) {
            return (
              a({ chatJid: t, serverThreadKey: e }),
              (u || (u = n("Promise"))).resolve()
            );
          },
          function (e) {
            return i(
              r("err")(
                "Timed out waiting for ACT thread to be ready in %s. Thread state: %s",
                o,
                e,
              ),
            );
          },
        ).catch(function () {
          return i();
        });
      });
    }
    ((l.onActThreadReadyWithoutValidator = m),
      (l.waitForACTThreadReadyWithoutValidator = _));
  },
  98,
);
