__d(
  "WAWebPathfinderMessageSent",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WAWebMsgType",
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
      );
    function _(t) {
      try {
        if (!f(t)) return;
        var n = o("WAWebPathfinderScreenName").getCurrentScreenName();
        if (y(n)) return;
        var a = {
          type: t.type,
          subtype: t.subtype,
          chatKind: g(t),
          pairedMediaType: t.pairedMediaType,
          associationType: t.associationType,
          mediaType: b(t),
          capturedAt: {
            timestampMs: Date.now(),
            screenName: n,
            unifiedSessionId: h(),
            heldBackSurface: null,
          },
          hiddenPayment: C(t),
        };
        p(a);
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
    function f(e) {
      return (
        e.id.fromMe &&
        (e.local === !0 || e.type === o("WAWebMsgType").MSG_TYPE.ALBUM) &&
        e.isScheduledMsg !== !0 &&
        (e.type !== o("WAWebMsgType").MSG_TYPE.PROTOCOL ||
          e.subtype === "share_phone_number")
      );
    }
    function g(e) {
      var t = e.id.remote;
      return t.isGroup() ? "group" : t.isUser() ? "user" : "other";
    }
    function h() {
      try {
        var e = r("ifRequireable")(
          "WAWebUnifiedSession",
          function (e) {
            var t = e.UnifiedSessionManager;
            return t.getSessionId();
          },
          function () {
            return null;
          },
        );
        return e !== "" ? e : null;
      } catch (e) {
        return null;
      }
    }
    function y(e) {
      try {
        return r("ifRequireable")(
          "WAWebPathfinderHeldBackSurface",
          function (t) {
            var n = t.isHeldBackEvent;
            return n({ screenName: e });
          },
          function () {
            return !1;
          },
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
    function C(e) {
      try {
        return r("ifRequireable")(
          "WAWebSilentPaymentMsg",
          function (t) {
            var n = t.isSilentPaymentMsg;
            return n(e);
          },
          function () {
            return !1;
          },
        );
      } catch (e) {
        return !1;
      }
    }
    function b(e) {
      var t,
        n = v[e.type];
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
    var v =
      ((u = {}),
      (u[(c = o("WAWebMsgType")).MSG_TYPE.COMMENT] = (d = o(
        "WAWebWamEnumMediaType",
      )).MEDIA_TYPE.COMMENT),
      (u[c.MSG_TYPE.INSTANT_IMAGE] = d.MEDIA_TYPE.PHOTO),
      (u[c.MSG_TYPE.MUSIC] = d.MEDIA_TYPE.MUSIC),
      (u[c.MSG_TYPE.RICH_RESPONSE] = d.MEDIA_TYPE.RICH_RESPONSE),
      (u[c.MSG_TYPE.SHARABLE_EVENT_INVITE] = d.MEDIA_TYPE.EVENT_INVITE),
      u);
    ((l.recordPathfinderMessageSentAfterCommit = _),
      (l.getPathfinderMessageSentMediaType = b));
  },
  98,
);
