__d(
  "AdsALReactUtils",
  ["ALReactUtils", "AutoLoggingComponentNameValidator"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = o("AutoLoggingComponentNameValidator").getComponentNameValidator(
      "ads",
    );
    function s(t, n) {
      var r;
      return (
        n === void 0 && (n = null),
        o("ALReactUtils").getReactComponentName_THIS_CAN_BREAK(
          t,
          ((r = n) == null ? void 0 : r.skipValidator) === !0
            ? function () {
                return !0;
              }
            : e,
        )
      );
    }
    function u(t) {
      return !e(t);
    }
    ((l.getReactComponentName_THIS_CAN_BREAK = s),
      (l.isComponentNameBlocked = u));
  },
  98,
);
