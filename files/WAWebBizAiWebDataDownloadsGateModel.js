__d(
  "WAWebBizAiWebDataDownloadsGateModel",
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
    ((l.BizAiWebDataDownloadsGateEventBus = e),
      (l.applyBizAiWebDataDownloadsGate = u),
      (l.isBizAiWebDataDownloadsGateEnabled = c));
  },
  98,
);
