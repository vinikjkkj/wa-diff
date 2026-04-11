__d(
  "WAWebMaybeGetBotModeSelection",
  [
    "WAWebBotBaseGating",
    "WAWebBotModeSelectionTypes",
    "WAWebBotUtils",
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
      var n = t.to;
      if (
        !(
          !o("WAWebBotUtils").isMetaAiBot(n) ||
          !o("WAWebBotBaseGating").isDynamicModeSelectorEnabled()
        )
      ) {
        var r = o("WAWebThreadMsgUtils").getMsgAiThread(t);
        if (r != null) {
          var a,
            i = (a = e.aiThreads) == null ? void 0 : a.get(r);
          if ((i == null ? void 0 : i.botModeOverride) != null)
            return i.botModeOverride;
        }
        var l = h();
        return l != null ? l : _;
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
