__d(
  "AdsDataAtomDebugger",
  ["URI"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = ["actionType", "type"],
      l,
      s = {
        shouldLog: !!new (l || (l = n("URI")))(
          window.location.href,
        ).getQueryData().dispatcherevents,
        toggleLogging: function () {
          s.shouldLog = !s.shouldLog;
        },
        isLogging: function () {
          return s.shouldLog;
        },
        attach: function (n) {
          n.register(function (t) {
            var n = t.action;
            if (
              n &&
              (console.timeStamp && console.timeStamp(n.type), s.shouldLog)
            ) {
              var r = n.actionType,
                o = n.type,
                a = babelHelpers.objectWithoutPropertiesLoose(n, e);
              (console.groupCollapsed(o || r, a),
                console.trace(),
                console.groupEnd());
            }
          });
        },
      },
      u = s;
    i.default = u;
  },
  66,
);
