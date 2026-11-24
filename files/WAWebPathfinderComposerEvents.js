__d(
  "WAWebPathfinderComposerEvents",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WAWebLexicalUtils",
    "WAWebPathfinderDeferredEmitter",
    "WAWebPathfinderHeldBackScreen",
    "WAWebPathfinderHeldBackSurface",
    "WAWebPathfinderScreenName",
    "WAWebUnifiedSession",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = /\u200B/g;
    function c(e) {
      return e.replace(u, "").trim() === "";
    }
    function d(e) {
      return (
        e.has(o("WAWebLexicalUtils").TEXT_SEND_CLEAR_UPDATE_TAG) ||
        e.has(o("WAWebLexicalUtils").PROGRAMMATIC_TEXT_UPDATE_TAG)
      );
    }
    function m(e, t) {
      var n = c(e != null ? e : ""),
        r = !1;
      return {
        onEditorUpdate: function (t, a, i) {
          if (a.has(o("WAWebLexicalUtils").TEXT_SEND_CLEAR_UPDATE_TAG)) {
            ((n = c(t)), (r = !1));
            return;
          }
          if (a.has(o("WAWebLexicalUtils").PROGRAMMATIC_TEXT_UPDATE_TAG)) {
            ((n = c(t)), n && (r = !1));
            return;
          }
          if (!i) {
            r = !0;
            var e = c(t);
            e !== n && ((n = e), f(e ? 21 : 20));
          }
        },
        onUserPointerDown: function () {
          r = !0;
        },
        onExit: function () {
          (t && r && !n && f(22), (r = !1));
        },
      };
    }
    var p = r("JSResourceForInteraction")(
        "WAWebPathfinderComposerEventsEmitter",
      ).__setRef("WAWebPathfinderComposerEvents"),
      _ = o("WAWebPathfinderDeferredEmitter").createPathfinderDeferredEmitter(
        p,
        function (e, t) {
          e.emitPathfinderComposerEvent(t);
        },
        "pathfinder-composer-event-load-failed",
      );
    function f(t) {
      try {
        var n = o("WAWebPathfinderScreenName").getCurrentScreenName();
        if (g(n)) return;
        var r = {
          customEventType: t,
          capturedAt: {
            timestampMs: Date.now(),
            screenName: n,
            unifiedSessionId: y(),
            heldBackSurface: null,
          },
        };
        _(r);
      } catch (t) {
        o("WALogger")
          .WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[pathfinder] composer event not recorded (",
                ")",
              ])),
            h(t),
          )
          .sendLogs("pathfinder-composer-event-record-failed");
      }
    }
    function g(e) {
      try {
        return (
          o("WAWebPathfinderHeldBackSurface").isHeldBackEvent({
            screenName: e,
          }) ||
          o("WAWebPathfinderHeldBackScreen").claimedLeavingVerdict(e) != null
        );
      } catch (e) {
        return (
          o("WALogger")
            .WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[pathfinder] held-back verdict unreadable (",
                  ")",
                ])),
              h(e),
            )
            .sendLogs("pathfinder-composer-event-held-back-unreadable"),
          !0
        );
      }
    }
    function h(e) {
      return e instanceof Error ? e.name : typeof e;
    }
    function y() {
      var e = o("WAWebUnifiedSession").UnifiedSessionManager.getSessionId();
      return e !== "" ? e : null;
    }
    ((l.isComposerTextBlank = c),
      (l.isComposerAppWrite = d),
      (l.createComposerPathfinderTracker = m));
  },
  98,
);
