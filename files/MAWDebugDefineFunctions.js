__d(
  "MAWDebugDefineFunctions",
  ["MAWDebug", "MAWDebugSendMultipleMsgs"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return { desc: e, execute: t, name: e, serializedArgs: [] };
    }
    function s() {
      var t = Object.keys(o("MAWDebug").MAWDebugFuncs).reduce(function (t, n) {
        var r;
        return Object.assign(
          t,
          ((r = {}), (r[n] = e(n, o("MAWDebug").MAWDebugFuncs[n])), r),
        );
      }, {});
      return babelHelpers.extends({}, t, {
        sendMultipleMsgs: o("MAWDebugSendMultipleMsgs").sendMultipleMsgs,
      });
    }
    l.getAllDebugFunctions = s;
  },
  98,
);
