__d(
  "WAWebStartChatContextGateLazy",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WAPromiseTimeout",
    "WAWebNoop",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 5e3;
    function u() {
      return r("JSResourceForInteraction")("WAWebStartChatContextGate")
        .__setRef("WAWebStartChatContextGateLazy")
        .load();
    }
    function c() {
      u().catch(r("WAWebNoop"));
    }
    async function d(t) {
      var n;
      try {
        n = await o("WAPromiseTimeout").promiseTimeout(u(), s);
      } catch (t) {
        return (
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[start-chat-context] gate load failed, opening the chat",
                ])),
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("start-chat-context-gate-load-failed"),
          "open_chat"
        );
      }
      return n.getStartChatContextDecision(t);
    }
    ((l.preloadStartChatContextGate = c), (l.getStartChatContextDecision = d));
  },
  98,
);
