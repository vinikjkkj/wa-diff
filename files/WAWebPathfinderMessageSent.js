__d(
  "WAWebPathfinderMessageSent",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WAWebBoolFunc",
    "WAWebMsgType",
    "WAWebNullFunc",
    "WAWebPathfinderDeferredEmitter",
    "WAWebPathfinderScreenName",
    "WAWebWamEnumMediaType",
    "WAWebWamMsgUtils",
    "getErrorSafe",
    "ifRequireable",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m = r("JSResourceForInteraction")(
        "WAWebPathfinderMessageSentEmitter",
      ).__setRef("WAWebPathfinderMessageSent"),
      p = o("WAWebPathfinderDeferredEmitter").createPathfinderDeferredEmitter(
        m,
        function (e, t) {
          e.emitPathfinderMessageSent(t);
        },
        "pathfinder-message-sent-load-failed",
      ),
      _ = { isCounted: h, takeSendMethod: D, isHiddenPayment: R, emit: p };
    function f(e) {
      g(e, _);
    }
    function g(t, n) {
      try {
        var a = n.takeSendMethod(t.id);
        if (!n.isCounted(t)) return;
        var i = o("WAWebPathfinderScreenName").getCurrentScreenName();
        if (S(i)) return;
        var l = {
          type: t.type,
          subtype: t.subtype,
          chatKind: b(t),
          pairedMediaType: t.pairedMediaType,
          associationType: t.associationType,
          mediaType: L(t),
          sendMethod: a,
          capturedAt: {
            timestampMs: Date.now(),
            screenName: i,
            unifiedSessionId: v(),
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
    function h(e) {
      return (
        (e.local === !0 || e.type === o("WAWebMsgType").MSG_TYPE.ALBUM) &&
        e.isScheduledMsg !== !0 &&
        y(e)
      );
    }
    function y(e) {
      return (
        e.id.fromMe &&
        (e.type !== o("WAWebMsgType").MSG_TYPE.PROTOCOL ||
          e.subtype === "share_phone_number")
      );
    }
    var C = new Set(["bot", "c.us", "hosted", "hosted.lid", "lid"]);
    function b(e) {
      var t = e.id.remote.server;
      return t === "g.us" ? "group" : C.has(t) ? "user" : "other";
    }
    function v() {
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
    function S(e) {
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
    function R(e) {
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
    function L(e) {
      var t,
        n = E[e.type];
      if (n != null) return n;
      if (
        e.type === o("WAWebMsgType").MSG_TYPE.ALBUM &&
        ((t = e.expectedVideoCount) != null ? t : 0) > 0
      )
        return o("WAWebWamEnumMediaType").MEDIA_TYPE.MIXED_COLLECTION;
      var r = o("WAWebWamMsgUtils").getWamMediaType(e);
      return e.type === o("WAWebMsgType").MSG_TYPE.CHAT &&
        r === o("WAWebWamEnumMediaType").MEDIA_TYPE.NONE
        ? o("WAWebWamEnumMediaType").MEDIA_TYPE.TEXT
        : r;
    }
    var E =
        ((u = {}),
        (u[(c = o("WAWebMsgType")).MSG_TYPE.COMMENT] = (d = o(
          "WAWebWamEnumMediaType",
        )).MEDIA_TYPE.COMMENT),
        (u[c.MSG_TYPE.INSTANT_IMAGE] = d.MEDIA_TYPE.PHOTO),
        (u[c.MSG_TYPE.MUSIC] = d.MEDIA_TYPE.MUSIC),
        (u[c.MSG_TYPE.RICH_RESPONSE] = d.MEDIA_TYPE.RICH_RESPONSE),
        (u[c.MSG_TYPE.SHARABLE_EVENT_INVITE] = d.MEDIA_TYPE.EVENT_INVITE),
        u),
      k = 100,
      I = new Map();
    function T(e, t) {
      if (t != null && (I.set(e.toString(), t), I.size > k)) {
        var n = I.keys().next().value;
        n != null && I.delete(n);
      }
    }
    function D(e) {
      var t = e.toString(),
        n = I.get(t);
      return (I.delete(t), n);
    }
    ((l.recordPathfinderMessageSentAfterCommit = f),
      (l.getPathfinderMessageSentMediaType = L),
      (l.labelPathfinderSendMethod = T));
  },
  98,
);
