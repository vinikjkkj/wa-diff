__d(
  "WAWebWorkerHandleStanza",
  [
    "WALogger",
    "WAWebCommsHandleWorkerCompatibleStanza",
    "WAWebOfflineHandler",
    "WAWebOneQueue",
    "WAWebPassiveModeManager",
    "WAWebRegisterPassiveTasksForConnectWorkerCompatible",
    "WAWebStanzasInFlight",
    "WAWebVoipBackendSwCallPlaceholderWriter",
    "WAWebWorkerHandleFailureApi",
    "WAWebWorkerHandleInfoBulletin",
    "WAWebWorkerHandleSuccessApi",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s(e, t, n) {
      n === void 0 && (n = 0);
      var r = Promise.resolve(u(e, t, n));
      o("WAWebStanzasInFlight").trackStanzaInFlight(r, e.attrs.offline != null);
      var a = o("WAWebOneQueue").countOfflineStanzaForPullMode(e),
        i = o("WAWebOfflineHandler").OfflineMessageHandler.countOfflineEnvelope(
          e,
        );
      try {
        var l;
        return (l = await r) != null ? l : "NO_ACK";
      } finally {
        (a(), i());
      }
    }
    function u(t, n, a) {
      var i = t.attrs;
      if (i.offline) {
        var l = parseInt(String(i.t), 10),
          s = parseInt(String(i.offline), 10);
        o("WAWebOfflineHandler").OfflineMessageHandler.newOfflineStanza(
          l,
          a,
          s,
        );
      }
      var u = o(
        "WAWebCommsHandleWorkerCompatibleStanza",
      ).handleWorkerCompatibleStanza(t);
      if (u != null) return u;
      e: {
        if (t.tag === "ib") return r("WAWebWorkerHandleInfoBulletin")(t);
        if (t.tag === "failure") return r("WAWebWorkerHandleFailureApi")(t);
        if (t.tag === "success") return c(t);
        if (t.tag === "call")
          return o("WAWebVoipBackendSwCallPlaceholderWriter")
            .maybeWriteSwOfflineCallPlaceholder(t)
            .then(function () {
              return "NO_ACK";
            });
        {
          o("WALogger").DEV_XMPP(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[worker]Comms.handleStanza unrecognized stanza ",
                "",
              ])),
            t,
          );
          break e;
        }
      }
    }
    async function c(e) {
      (await r("WAWebWorkerHandleSuccessApi")(e),
        (await o(
          "WAWebRegisterPassiveTasksForConnectWorkerCompatible",
        ).shouldConnectAsPassiveMode()) &&
          o(
            "WAWebPassiveModeManager",
          ).PassiveTaskManager.executePassiveTasks());
    }
    l.default = s;
  },
  98,
);
