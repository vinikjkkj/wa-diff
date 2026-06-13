__d(
  "WAWebBizAiLargeScreensGateModel",
  ["WAWebEventEmitter"],
  function (t, n, r, o, a, i, l) {
    var e = new (r("WAWebEventEmitter"))(),
      s = !1;
    function u(t) {
      ((s = t), e.trigger("updated"));
    }
    function c() {
      return s;
    }
    ((l.BizAiLargeScreensGateEventBus = e),
      (l.applyBizAiLargeScreensGate = u),
      (l.isBizAiLargeScreensGateEnabled = c));
  },
  98,
);
