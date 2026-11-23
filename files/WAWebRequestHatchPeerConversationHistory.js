__d(
  "WAWebRequestHatchPeerConversationHistory",
  [
    "WALogger",
    "WAWebHatchPeerConversationDecoder",
    "WAWebHatchVmConnection",
    "WAWebHatchVmSubscription",
    "WAWebNoop",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 50,
      u = 15e3,
      c = 404;
    async function d(e, t) {
      var n = o("WAWebHatchVmConnection").getHatchVmAccountGeneration(),
        r = await p();
      if (n !== o("WAWebHatchVmConnection").getHatchVmAccountGeneration())
        return { kind: "failed" };
      if (r == null) return f("no_vm");
      var a = function () {
          return r.chatHistory(e, s, t, { timeoutMs: u });
        },
        i = await a();
      return n !== o("WAWebHatchVmConnection").getHatchVmAccountGeneration()
        ? { kind: "failed" }
        : (i.kind === "Failure" && i.reason !== "TIMEOUT" && (i = await a()),
          n === o("WAWebHatchVmConnection").getHatchVmAccountGeneration()
            ? _(i, e)
            : { kind: "failed" });
    }
    function m(e, t, n) {
      var a = new (r("WAWebHatchVmSubscription"))({
        connect: p,
        kind: "peer_conversation",
        onEvent: function (r) {
          var n = o(
            "WAWebHatchPeerConversationDecoder",
          ).decodeHatchPeerConversationEvent(r.payload, e);
          n != null && t(n);
        },
        onResubscribed: r("WAWebNoop"),
        open: function (r, o) {
          return r.openChatSubscription(
            e,
            babelHelpers.extends({}, o, {
              onResponse: function (t) {
                (o.onResponse(t), t >= 200 && t <= 299 && n());
              },
            }),
          );
        },
      });
      return (
        a.start(),
        function () {
          return a.stop();
        }
      );
    }
    async function p() {
      var e = await o("WAWebHatchVmConnection").connectHatchVmApiWithResult(
        new AbortController().signal,
      );
      return e.kind === "ready" ? e.api : null;
    }
    function _(e, t) {
      if (e.kind === "Rejected" && e.statusCode === c)
        return { kind: "not_found" };
      if (e.kind !== "Ok") return f(e.kind.toLowerCase());
      var n = o(
        "WAWebHatchPeerConversationDecoder",
      ).decodeHatchPeerConversationHistory(e.value, t);
      return n != null ? { kind: "ok", page: n } : f("malformed");
    }
    function f(t) {
      return (
        o("WALogger")
          .WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "hatch-peer-conversation: history read failed reason=",
                "",
              ])),
            t,
          )
          .sendLogs("hatch-peer-conversation-history-failed"),
        { kind: "failed" }
      );
    }
    ((l.requestHatchPeerConversationHistory = d),
      (l.subscribeToHatchPeerConversation = m));
  },
  98,
);
