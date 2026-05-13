__d(
  "WAWebMaybeGetBotModeSelection",
  [
    "WAWebBotBaseGating",
    "WAWebBotGating",
    "WAWebBotModeSelectionTypes",
    "WAWebBotUtils",
    "WAWebDynamicAIModesCache",
    "WAWebThreadMsgUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = null,
      s = [];
    function u() {
      s.forEach(function (e) {
        return e();
      });
    }
    function c(e) {
      return (
        s.push(e),
        function () {
          var t = s.indexOf(e);
          t !== -1 && s.splice(t, 1);
        }
      );
    }
    function d(t) {
      ((e = t), u());
    }
    function m() {
      return e;
    }
    function p() {
      e != null && ((e = null), u());
    }
    var _ = [0],
      f = null;
    function g(e) {
      ((f = e), u());
    }
    function h() {
      return f;
    }
    function y() {
      f != null && ((f = null), u());
    }
    function C(e, t) {
      if (t != null) {
        var n,
          r = (n = e.aiThreads) == null ? void 0 : n.get(t);
        if ((r == null ? void 0 : r.botModeSelection) != null)
          return r.botModeSelection;
      }
    }
    function b(e, t) {
      var n = t.to;
      if (
        o("WAWebBotUtils").isMetaAiBot(n) &&
        o("WAWebBotBaseGating").isAiModeSelectorMessagingEnabled()
      ) {
        var r = o("WAWebThreadMsgUtils").getMsgAiThread(t);
        if (r != null) {
          var a = C(e, r);
          if (a !== void 0) return a;
        }
        var i = m();
        return i != null
          ? i
          : [o("WAWebBotModeSelectionTypes").BotUserSelectionMode.Default];
      }
    }
    function v(e, t) {
      var n,
        r = t.to;
      if (
        !(
          !o("WAWebBotUtils").isMetaAiBot(r) ||
          !o("WAWebBotBaseGating").isDynamicModeSelectorEnabled()
        ) &&
        o("WAWebBotGating").isAiModeSelectorInteractive()
      ) {
        var a =
          (n = o("WAWebDynamicAIModesCache").getStaleCachedDynamicAIModes()) !=
          null
            ? n
            : [];
        if (a.length !== 0) {
          if (a.length === 1) return [a[0].modeId];
          var i = o("WAWebThreadMsgUtils").getMsgAiThread(t);
          if (i != null) {
            var l,
              s = (l = e.aiThreads) == null ? void 0 : l.get(i);
            if ((s == null ? void 0 : s.botModeOverride) != null)
              return s.botModeOverride;
          }
          var u = h();
          return u != null ? u : _;
        }
      }
    }
    ((l.subscribeToBotModeSelection = c),
      (l.storeInMemoryBotMode = d),
      (l.getInMemoryBotMode = m),
      (l.clearInMemoryBotMode = p),
      (l.storeInMemoryBotModeOverride = g),
      (l.getInMemoryBotModeOverride = h),
      (l.clearInMemoryBotModeOverride = y),
      (l.maybeGetBotModeSelection = b),
      (l.maybeGetBotDynamicModeSelection = v));
  },
  98,
);
