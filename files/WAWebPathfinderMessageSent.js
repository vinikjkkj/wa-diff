__d(
  "WAWebPathfinderMessageSent",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WAWebBoolFunc",
    "WAWebMsgType",
    "WAWebNullFunc",
    "WAWebPathfinderAccountToken",
    "WAWebPathfinderDeferredEmitter",
    "WAWebPathfinderMessageSentFields",
    "WAWebPathfinderScreenName",
    "getErrorSafe",
    "ifRequireable",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = r("JSResourceForInteraction")(
        "WAWebPathfinderMessageSentEmitter",
      ).__setRef("WAWebPathfinderMessageSent"),
      d = o("WAWebPathfinderDeferredEmitter").createPathfinderDeferredEmitter(
        c,
        function (e, t) {
          e.emitPathfinderMessageSent(t);
        },
        "pathfinder-message-sent-load-failed",
      ),
      m = 100,
      p = o("WAWebPathfinderDeferredEmitter").createPathfinderDeferredEmitter(
        c,
        function (e, t) {
          e.emitPathfinderMessageSent(t);
        },
        "pathfinder-scheduled-message-sent-load-failed",
        m,
      ),
      _ = { isCounted: y, takeSendMethod: k, isHiddenPayment: S, emit: d };
    function f(e, t) {
      h(e, t, _);
    }
    function g(t) {
      try {
        var n = o("WAWebPathfinderScreenName").getCurrentScreenName();
        if (v(n)) return;
        p(
          babelHelpers.extends({}, t, {
            sendMethod: void 0,
            capturedAt: C(
              n,
              o(
                "WAWebPathfinderAccountToken",
              ).getPathfinderCaptureAccountToken(),
            ),
            hiddenPayment: !1,
          }),
        );
      } catch (t) {
        o("WALogger")
          .WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[pathfinder] scheduled message_sent not recorded",
              ])),
          )
          .catching(r("getErrorSafe")(t))
          .sendLogs("pathfinder-message-sent-record-failed");
      }
    }
    function h(e, t, n) {
      try {
        var a = n.takeSendMethod(e.id);
        if (!n.isCounted(e)) return;
        var i = o("WAWebPathfinderScreenName").getCurrentScreenName();
        if (v(i)) return;
        var l = {
          type: e.type,
          subtype: e.subtype,
          chatKind: o("WAWebPathfinderMessageSentFields").getChatKind(e),
          pairedMediaType: e.pairedMediaType,
          associationType: e.associationType,
          mediaType: o(
            "WAWebPathfinderMessageSentFields",
          ).getPathfinderMessageSentMediaType(e),
          sendMethod: a,
          capturedAt: C(i, t),
          hiddenPayment: n.isHiddenPayment(e),
        };
        n.emit(l);
      } catch (e) {
        o("WALogger")
          .WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[pathfinder] message_sent not recorded",
              ])),
          )
          .catching(r("getErrorSafe")(e))
          .sendLogs("pathfinder-message-sent-record-failed");
      }
    }
    function y(e) {
      return (
        (e.local === !0 || e.type === o("WAWebMsgType").MSG_TYPE.ALBUM) &&
        e.isScheduledMsg !== !0 &&
        o("WAWebPathfinderMessageSentFields").isUserSend(e)
      );
    }
    function C(e, t) {
      return {
        timestampMs: Date.now(),
        screenName: e,
        unifiedSessionId: b(),
        heldBackSurface: null,
        accountToken: t,
      };
    }
    function b() {
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
    function v(e) {
      try {
        return (
          r("ifRequireable")(
            "WAWebPathfinderHeldBackSurface",
            function (t) {
              var n = t.isHeldBackEvent;
              return n({ screenName: e });
            },
            o("WAWebBoolFunc").returnFalse,
          ) ||
          r("ifRequireable")(
            "WAWebPathfinderHeldBackScreen",
            function (t) {
              var n = t.claimedLeavingVerdict;
              return n(e) != null;
            },
            o("WAWebBoolFunc").returnFalse,
          )
        );
      } catch (e) {
        return (
          o("WALogger")
            .WARN(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[pathfinder] held-back verdict unreadable",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("pathfinder-message-sent-held-back-unreadable"),
          !0
        );
      }
    }
    function S(e) {
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
    var R = 100,
      L = new Map();
    function E(e, t) {
      if (t != null && (L.set(e.toString(), t), L.size > R)) {
        var n = L.keys().next().value;
        n != null && L.delete(n);
      }
    }
    function k(e) {
      var t = e.toString(),
        n = L.get(t);
      return (L.delete(t), n);
    }
    ((l.recordPathfinderMessageSentAfterCommit = f),
      (l.recordPathfinderScheduledMessageSentOnPost = g),
      (l.labelPathfinderSendMethod = E));
  },
  98,
);
