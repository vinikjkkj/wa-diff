__d(
  "MAWEBSwitch",
  ["ExecutionEnvironment", "MAWEBEnabledStateManager", "requireDeferred"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = r("requireDeferred")("EBIsEbEnabledSubscriber").__setRef(
        "MAWEBSwitch",
      ),
      u = new (o("MAWEBEnabledStateManager").MAWEBEnabledStateManager)();
    (e || (e = r("ExecutionEnvironment"))).isInMainThread === !0 &&
      s.load().then(function (e) {
        return e.subscribeToEbChanges(function (e) {
          u.set(e);
        });
      });
    var c = u;
    l.default = c;
  },
  98,
);
