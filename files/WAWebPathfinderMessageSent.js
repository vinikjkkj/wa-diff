__d(
  "WAWebPathfinderMessageSent",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WAWebBoolFunc",
    "WAWebMsgType",
    "WAWebNullFunc",
    "WAWebPathfinderDeferredEmitter",
    "WAWebPathfinderMessageSentFields",
    "WAWebPathfinderScreenName",
    "getErrorSafe",
    "ifRequireable",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = r("JSResourceForInteraction")(
        "WAWebPathfinderMessageSentEmitter",
      ).__setRef("WAWebPathfinderMessageSent"),
      c = o("WAWebPathfinderDeferredEmitter").createPathfinderDeferredEmitter(
        u,
        function (e, t) {
          e.emitPathfinderMessageSent(t);
        },
        "pathfinder-message-sent-load-failed",
      ),
      d = { isCounted: _, takeSendMethod: v, isHiddenPayment: h, emit: c };
    function m(e) {
      p(e, d);
    }
    function p(t, n) {
      try {
        var a = n.takeSendMethod(t.id);
        if (!n.isCounted(t)) return;
        var i = o("WAWebPathfinderScreenName").getCurrentScreenName();
        if (g(i)) return;
        var l = {
          type: t.type,
          subtype: t.subtype,
          chatKind: o("WAWebPathfinderMessageSentFields").getChatKind(t),
          pairedMediaType: t.pairedMediaType,
          associationType: t.associationType,
          mediaType: o(
            "WAWebPathfinderMessageSentFields",
          ).getPathfinderMessageSentMediaType(t),
          sendMethod: a,
          capturedAt: {
            timestampMs: Date.now(),
            screenName: i,
            unifiedSessionId: f(),
            heldBackSurface: null,
          },
          hiddenPayment: n.isHiddenPayment(t),
        };
        n.emit(l);
      } catch (t) {
        o("WALogger")
          .WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[pathfinder] message_sent not recorded",
              ])),
          )
          .catching(r("getErrorSafe")(t))
          .sendLogs("pathfinder-message-sent-record-failed");
      }
    }
    function _(e) {
      return (
        (e.local === !0 || e.type === o("WAWebMsgType").MSG_TYPE.ALBUM) &&
        e.isScheduledMsg !== !0 &&
        o("WAWebPathfinderMessageSentFields").isUserSend(e)
      );
    }
    function f() {
      try {
        var e = r("ifRequireable")(
          "WAWebUnifiedSession",
          function (e) {
            var t = e.UnifiedSessionManager;
            return t.getSessionId();
          },
          o("WAWebNullFunc").returnNull,
        );
        return e !== "" ? e : null;
      } catch (e) {
        return null;
      }
    }
    function g(e) {
      try {
        return r("ifRequireable")(
          "WAWebPathfinderHeldBackSurface",
          function (t) {
            var n = t.isHeldBackEvent;
            return n({ screenName: e });
          },
          o("WAWebBoolFunc").returnFalse,
        );
      } catch (e) {
        return (
          o("WALogger")
            .WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[pathfinder] held-back verdict unreadable",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("pathfinder-message-sent-held-back-unreadable"),
          !0
        );
      }
    }
    function h(e) {
      try {
        return r("ifRequireable")(
          "WAWebSilentPaymentMsg",
          function (t) {
            var n = t.isSilentPaymentMsg;
            return n(e);
          },
          o("WAWebBoolFunc").returnFalse,
        );
      } catch (e) {
        return !1;
      }
    }
    var y = 100,
      C = new Map();
    function b(e, t) {
      if (t != null && (C.set(e.toString(), t), C.size > y)) {
        var n = C.keys().next().value;
        n != null && C.delete(n);
      }
    }
    function v(e) {
      var t = e.toString(),
        n = C.get(t);
      return (C.delete(t), n);
    }
    ((l.recordPathfinderMessageSentAfterCommit = m),
      (l.labelPathfinderSendMethod = b));
  },
  98,
);
