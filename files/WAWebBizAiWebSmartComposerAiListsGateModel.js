__d(
  "WAWebBizAiWebSmartComposerAiListsGateModel",
  ["WAWebEventEmitter"],
  function (t, n, r, o, a, i, l) {
    var e = new (r("WAWebEventEmitter"))(),
      s = !1;
    function u(t) {
      s !== t && ((s = t), e.trigger("updated"));
    }
    function c() {
      return s;
    }
    ((l.BizAiWebSmartComposerAiListsGateEventBus = e),
      (l.applyBizAiWebSmartComposerAiListsGate = u),
      (l.isBizAiWebSmartComposerAiListsGateEnabled = c));
  },
  98,
);
