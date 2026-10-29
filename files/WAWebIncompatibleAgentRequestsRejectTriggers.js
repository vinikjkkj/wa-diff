__d(
  "WAWebIncompatibleAgentRequestsRejectTriggers",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WAWebBackendEventBus",
    "WAWebRuntimeEnvironmentUtils",
    "WAWebSentGroupAgentRequests",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = r("JSResourceForInteraction")(
        "WAWebIncompatibleAgentRequestsRejectJob",
      ).__setRef("WAWebIncompatibleAgentRequestsRejectTriggers");
    function u(e, t, n, r) {
      if (t == null) {
        var o = r.filter(function (e) {
          return e.isFbidBot();
        });
        o.length > 0 &&
          _(function (t) {
            return t.rejectIncompatibleAgentRequestsOfJoinedAgents(e, o);
          });
        return;
      }
      _(function (o) {
        return o.rejectIncompatibleAgentRequestsAfterAnswer(e, t, n, r);
      });
    }
    function c(e, t) {
      o("WAWebRuntimeEnvironmentUtils").isServiceWorker() ||
        !t.some(function (e) {
          return e.isFbidBot();
        }) ||
        _(function (n) {
          return n.rejectIncompatibleAgentRequestsAfterAddNotification(e, t);
        });
    }
    function d() {
      o("WAWebRuntimeEnvironmentUtils").isServiceWorker() ||
        o("WAWebBackendEventBus").BackendEventBus.onOfflineDeliveryEnd(
          function () {
            m();
          },
        );
    }
    function m() {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            var e = yield o(
              "WAWebSentGroupAgentRequests",
            ).getSentGroupAgentRequestGroupWids();
            e.length > 0 &&
              (yield _(function (t) {
                return t.rejectIncompatibleAgentRequestsOfStoredSentAgents(e);
              }));
          } catch (e) {
            g(e);
          }
        })),
        p.apply(this, arguments)
      );
    }
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            yield e(yield s.load());
          } catch (e) {
            g(e);
          }
        })),
        f.apply(this, arguments)
      );
    }
    function g(t) {
      o("WALogger")
        .ERROR(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "incompatible agent request reject trigger failed",
            ])),
        )
        .catching(r("getErrorSafe")(t))
        .sendLogs("incompatible-agent-request-reject-trigger-failed");
    }
    ((l.startIncompatibleAgentRequestRejectsAfterAnswer = u),
      (l.startIncompatibleAgentRequestRejectsAfterAddNotification = c),
      (l.registerIncompatibleAgentRequestRejectsOnResume = d));
  },
  98,
);
