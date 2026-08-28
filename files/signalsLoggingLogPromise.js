__d(
  "signalsLoggingLogPromise",
  [
    "Promise",
    "signalsLogAction",
    "signalsLogError",
    "signalsLoggingAssertComplete",
    "signalsLoggingMakeTimer",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t, o, a) {
      (r("signalsLoggingAssertComplete")(t), r("signalsLogAction")(t, o));
      var i = r("signalsLoggingMakeTimer")(t, o);
      return (
        i.start(),
        a
          .then(function (e) {
            return (i.end(), e);
          })
          .catch(function (a) {
            return (
              i.end(),
              r("signalsLogError")({ action: o, config: t, error: a }),
              (e || (e = n("Promise"))).reject(a)
            );
          })
      );
    }
    l.default = s;
  },
  98,
);
