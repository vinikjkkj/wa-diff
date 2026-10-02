__d(
  "WAHandleUnavailableIndividualMsg",
  [
    "Promise",
    "WABuildMpsPayload",
    "WAGlobals",
    "WALogger",
    "WAMPSFlushable",
    "WAMessageLoggingPublisher",
    "WAMsgLogger",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u(t, r, a, i) {
      var l = o("WAMessageLoggingPublisher").getWAIncomingMsgLoggingId(
        t.stanzaId,
      );
      if (
        (o("WAMessageLoggingPublisher").messageLoggingPublisher.publish({
          commonMessageBase: t,
          id: l,
          msg: r,
          type: "new-message",
        }),
        r.contentType === "reaction")
      )
        return (
          o("WAMsgLogger").endWAMessageReceiveFailure(i, "unavailable"),
          o("WAMessageLoggingPublisher").messageLoggingPublisher.publish({
            id: l,
            type: "unavailable-reaction",
          }),
          (s || (s = n("Promise"))).resolve(a())
        );
      if (t.hideDecryptionFailure)
        return (
          o("WAMsgLogger").logInvisibleMsg(i),
          o("WAMsgLogger").endWAMessageReceiveFailure(i, "unavailable"),
          (s || (s = n("Promise"))).resolve(a())
        );
      var u = o("WABuildMpsPayload").buildMpsMessageFromIncomingMessage(t, r, {
        type: "unavailable",
      });
      return o("WAGlobals").getConfig().isWaiMpsWriteSuppressed()
        ? (o("WAMsgLogger").endWAMessageReceiveFailure(i, "unavailable"),
          (s || (s = n("Promise"))).resolve(a()))
        : (i.addPoint("mps_flush_start"),
          o("WAMPSFlushable").mpsFlushable.enqueue(
            u,
            function (t) {
              if (t != null) {
                var n;
                (i.addPoint("mps_flush_fail", {
                  string: {
                    mpsError:
                      (n = t == null ? void 0 : t.message) != null
                        ? n
                        : "unknown",
                  },
                }),
                  i.endFail("persistence-error"),
                  o("WALogger").ERROR(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "Failed to save unavailable msg: ",
                        "",
                      ])),
                    t,
                  ));
                return;
              }
              (i.addPoint("mps_flush_end"), i.endFail("unavailable"));
            },
            "handle_unavailable_msg",
          ),
          o("WAMsgLogger").endWAMessageReceiveFailure(i, "unavailable"),
          (s || (s = n("Promise"))).resolve(a()));
    }
    l.handleUnavailableMsg = u;
  },
  98,
);
