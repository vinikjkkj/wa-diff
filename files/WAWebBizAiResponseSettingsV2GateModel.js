__d(
  "WAWebBizAiResponseSettingsV2GateModel",
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
    ((l.BizAiResponseSettingsV2GateEventBus = e),
      (l.applyBizAiResponseSettingsV2Gate = u),
      (l.isBizAiResponseSettingsV2GateEnabled = c));
  },
  98,
);
