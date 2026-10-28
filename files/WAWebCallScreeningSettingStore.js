__d(
  "WAWebCallScreeningSettingStore",
  ["WAWebEventEmitter", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    var e = new (r("WAWebEventEmitter"))(),
      s = !1;
    function u() {
      return s;
    }
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          t !== s && ((s = t), e.trigger("change"));
        })),
        d.apply(this, arguments)
      );
    }
    ((l.callScreeningSettingEventEmitter = e),
      (l.getIsLiveCallScreeningEnabled = u),
      (l.saveIsLiveCallScreeningEnabled = c));
  },
  98,
);
