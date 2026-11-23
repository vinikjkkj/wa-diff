__d(
  "WAWebIncompatibleAgentRequestsRejectTriggers",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WAWebBackendEventBus",
    "WAWebRuntimeEnvironmentUtils",
    "WAWebSentGroupAgentRequests",
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
          p(function (t) {
            return t.rejectIncompatibleAgentRequestsOfJoinedAgents(e, o);
          });
        return;
      }
      p(function (o) {
        return o.rejectIncompatibleAgentRequestsAfterAnswer(e, t, n, r);
      });
    }
    function c(e, t) {
      o("WAWebRuntimeEnvironmentUtils").isServiceWorker() ||
        !t.some(function (e) {
          return e.isFbidBot();
        }) ||
        p(function (n) {
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
    async function m() {
      try {
        var e = await o(
          "WAWebSentGroupAgentRequests",
        ).getSentGroupAgentRequestGroupWids();
        e.length > 0 &&
          (await p(function (t) {
            return t.rejectIncompatibleAgentRequestsOfStoredSentAgents(e);
          }));
      } catch (e) {
        _(e);
      }
    }
    async function p(e) {
      try {
        await e(await s.load());
      } catch (e) {
        _(e);
      }
    }
    function _(t) {
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
