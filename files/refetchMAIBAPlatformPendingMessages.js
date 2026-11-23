__d(
  "refetchMAIBAPlatformPendingMessages",
  [
    "Base64",
    "FBLogger",
    "MAIBAPlatformAsyncStop",
    "MAIBAPlatformTurnComplete",
    "hasMAIBAPlatformResponseText",
    "refetchMAIBAPlatformPendingMessagesQuery.graphql",
    "relay-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = "MAIBAConversationNode",
      u = 3e5,
      c =
        e !== void 0
          ? e
          : (e = n("refetchMAIBAPlatformPendingMessagesQuery.graphql")),
      d = new WeakMap();
    function m(e) {
      var t = d.get(e);
      return (t == null && ((t = new Set()), d.set(e, t)), t);
    }
    function p(e) {
      var t = e.getStore().getSource(),
        n = m(e),
        r = [];
      for (var a of t.getRecordIDs()) {
        var i = t.get(a);
        if (
          !(
            i == null ||
            o("relay-runtime").Record.getType(i) !== s ||
            n.has(a) ||
            !o("MAIBAPlatformTurnComplete").isMAIBAPlatformNodeInFlight(e, a)
          )
        ) {
          var l = o("relay-runtime").Record.getValue(i, "conversation_id"),
            c = o("relay-runtime").Record.getValue(i, "offline_threading_id"),
            d = o("relay-runtime").Record.getValue(i, "role"),
            p = Number(o("relay-runtime").Record.getValue(i, "timestamp")),
            _ = o("relay-runtime").Record.getValue(
              i,
              "bot_invocation_message_otid",
            );
          typeof l == "string" &&
            typeof c == "string" &&
            typeof d == "string" &&
            p > 0 &&
            Date.now() - p < u &&
            r.push({
              botInvocationMessageOTID: typeof _ == "string" ? _ : null,
              conversationId: l,
              isDoneReceived:
                o("relay-runtime").Record.getValue(i, "streaming_state") ===
                "done",
              offlineThreadingId: c,
              relayRecordId: a,
              role: d,
            });
        }
      }
      return r;
    }
    function _(e) {
      var t = e.conversationId,
        n = e.offlineThreadingId,
        o = e.role,
        a = e.surface;
      return r("Base64").encode(
        JSON.stringify({ ecid: t, otid: n, role: o, surface: a }),
      );
    }
    function f(e, t, n, a) {
      var i = p(e),
        l = m(e);
      return (
        i.forEach(function (i) {
          var s,
            u = i.conversationId,
            d = i.offlineThreadingId,
            m = i.relayRecordId,
            p = i.role,
            f =
              (s = n.getInteractionIDForMessageOTID(d)) != null
                ? s
                : n.getInteractionIDForMessageOTID(i.botInvocationMessageOTID);
          l.add(m);
          var g = function (t) {
            (l.delete(m), f != null && n.onRecoveryOutcome(f, a, t));
          };
          o("relay-runtime")
            .fetchQuery(e, c, {
              id: _({
                conversationId: u,
                offlineThreadingId: d,
                role: p,
                surface: t,
              }),
            })
            .subscribe({
              complete: function () {
                l.delete(m);
              },
              error: function (t) {
                (r("FBLogger")("axp_maiba_platform")
                  .catching(t)
                  .warn(
                    "MAIBA platform recovery fetch failed for otid %s trigger %s",
                    d,
                    a,
                  ),
                  g("fail"));
              },
              next: function (t) {
                var e = t.fetch__MAIBAConversationNode;
                if (e == null) {
                  g("not_found");
                  return;
                }
                (g("success"),
                  o("MAIBAPlatformTurnComplete").isMAIBAPlatformTurnComplete(
                    e.streaming_state,
                    null,
                    e.message_origin,
                  ) &&
                    (f != null &&
                      p === "assistant" &&
                      !i.isDoneReceived &&
                      e.streaming_state === "done" &&
                      o(
                        "hasMAIBAPlatformResponseText",
                      ).hasMAIBAPlatformResponseText(e.responses) &&
                      n.onResponseReceived(f),
                    o("MAIBAPlatformAsyncStop").releaseMAIBAPlatformAsyncStop(
                      m,
                    )));
              },
            });
        }),
        i
      );
    }
    l.default = f;
  },
  98,
);
