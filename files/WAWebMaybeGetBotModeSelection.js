__d(
  "WAWebMaybeGetBotModeSelection",
  [
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
    var p = [0],
      _ = null;
    function f(e) {
      ((_ = e), u());
    }
    function g() {
      return _;
    }
    function h() {
      _ != null && ((_ = null), u());
    }
    function y(e, t) {
      if (t != null) {
        var n,
          r = (n = e.aiThreads) == null ? void 0 : n.get(t);
        if ((r == null ? void 0 : r.botModeSelection) != null)
          return r.botModeSelection;
      }
    }
    function C(e, t) {
      var n = t.to;
      if (o("WAWebBotUtils").isMetaAiBot(n)) {
        var r = o("WAWebThreadMsgUtils").getMsgAiThread(t);
        if (r != null) {
          var a = y(e, r);
          if (a !== void 0) return a;
        }
        var i = m();
        return i != null
          ? i
          : [o("WAWebBotModeSelectionTypes").BotUserSelectionMode.Default];
      }
    }
    function b(e, t) {
      var n,
        r = t.to;
      if (
        o("WAWebBotUtils").isMetaAiBot(r) &&
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
          var u = g();
          return u != null ? u : p;
        }
      }
    }
    ((l.subscribeToBotModeSelection = c),
      (l.storeInMemoryBotMode = d),
      (l.getInMemoryBotMode = m),
      (l.storeInMemoryBotModeOverride = f),
      (l.getInMemoryBotModeOverride = g),
      (l.clearInMemoryBotModeOverride = h),
      (l.maybeGetBotModeSelection = C),
      (l.maybeGetBotDynamicModeSelection = b));
  },
  98,
);
