__d(
  "ZenonStateMachineBase",
  [
    "ZenonAuditedCheckpointLogId",
    "ZenonDebugLogger",
    "ZenonDeferrableStateMachine",
    "ZenonInfraActionsLogger",
    "ZenonMWMessageReliabilityLogTypes",
    "ZenonMWMessageReliabilityLogger",
    "ZenonMWThriftMessageReliabilityLogger",
    "xstate",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = { actions: ["defer"] },
      s = (function () {
        function e(e) {
          var t = e.base,
            n = e.logging,
            a = e.machine;
          ((this.$1 = n.name),
            (this.$2 = t.initState),
            (this.loggingId = n.loggingId),
            (this.$3 = n.getTransactionId),
            (this.$4 = n.loggingStateName),
            (this.$5 = n.loggableEvents));
          var i = {
              context: a.context,
              initial: a.initialState,
              states: a.states,
            },
            l = { guards: t.guards },
            s = {
              onDeferTimeout: function (t) {
                r("ZenonInfraActionsLogger").logCheckpoint({
                  auditId: r("ZenonAuditedCheckpointLogId")
                    .RP_ROOMS_INFRA_WWW__ERROR,
                  checkpoint:
                    "[" +
                    n.shortname +
                    "] " +
                    t.type +
                    " was deferred for too long",
                });
              },
            },
            u = o("xstate").Machine(i, l);
          this.sm = o("ZenonDeferrableStateMachine").interpret(u, s);
        }
        var t = e.prototype;
        return (
          (t.processEvent = function (t) {
            (this.logEvent(t), this.sm.send(t));
          }),
          (t.logEvent = function (t, n) {
            if (
              (r("ZenonDebugLogger")
                .getInstance()
                .logStateMachine(
                  this.$1,
                  this.getState(),
                  t.type,
                  this.loggingId.toString(),
                  n,
                ),
              this.$5.includes(t.type))
            ) {
              var e = this.$3(t);
              if (e != null) {
                var a = { smEvent: this.$1 + "." + t.type };
                (o("ZenonMWMessageReliabilityLogger").logEventForTxid(
                  e,
                  o("ZenonMWMessageReliabilityLogTypes")
                    .ZenonMWMessageReliabilityEvent.SENT_SM_EVENT,
                  a,
                ),
                  o("ZenonMWThriftMessageReliabilityLogger").logEventForTxid(
                    e,
                    o("ZenonMWMessageReliabilityLogTypes")
                      .ZenonMWMessageReliabilityEvent.SENT_SM_EVENT,
                    a,
                  ));
              }
            }
          }),
          (t.logTransaction = function (t, n) {
            var e, r;
            if (
              (o("ZenonMWMessageReliabilityLogger").updateState(
                ((e = {}), (e[this.$4] = this.getState()), e),
              ),
              o("ZenonMWThriftMessageReliabilityLogger").updateState(
                ((r = {}), (r[this.$4] = this.getState()), r),
              ),
              this.$5.includes(t.type))
            ) {
              var a = this.$3(t);
              if (a != null) {
                var i = { smEvent: this.$1 + "." + t.type };
                (o("ZenonMWMessageReliabilityLogger").logEventForTxid(a, n, i),
                  o("ZenonMWThriftMessageReliabilityLogger").logEventForTxid(
                    a,
                    n,
                    i,
                  ));
              }
            }
          }),
          (t.logTransition = function (t, n) {
            var e;
            r("ZenonDebugLogger")
              .getInstance()
              .logStateMachineTransition(
                this.$1,
                t.changed,
                t.value,
                (e = t.history) == null ? void 0 : e.value,
                t.event.type,
                t.actions,
                this.loggingId.toString(),
                n,
              );
          }),
          (t.getContext = function () {
            return this.sm.state.context;
          }),
          (t.getState = function () {
            var e = this.sm.state.toStrings();
            return e.length > 0 ? e[0] : this.$2;
          }),
          (t.ifDroppedEvent = function (t, n) {
            var e,
              r = t.actions,
              o = t.changed,
              a = t.event,
              i = t.value,
              l = (e = t.history) == null ? void 0 : e.value;
            (r == null || r.length === 0) && i === l && !o && n(a);
          }),
          e
        );
      })();
    ((l.defer = e), (l.ZenonStateMachineBase = s));
  },
  98,
);
