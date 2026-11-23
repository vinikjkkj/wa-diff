__d(
  "WAFlowsRegisterNativeFormValueCallback",
  ["WAFlowsNativeState", "WAFlowsWebToNativeEvents"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      o("WAFlowsNativeState").NativeStateChangeEventEmitter.on(
        "WAFOnNativeComponentValueChange",
        function (r) {
          if (
            r != null &&
            o("WAFlowsWebToNativeEvents").isWAFNativeInputValueChangeEvent(r) &&
            (r == null ? void 0 : r.input_name) != null &&
            (r == null ? void 0 : r.input_type) != null
          ) {
            var a = r.input_name,
              i = r.input_type,
              l = r.value,
              s = ["DatePicker", "CalendarPicker"];
            if (s.includes(i)) {
              var u,
                c = l != null ? String(l) : null,
                d =
                  c != null && (u = n == null ? void 0 : n(c)) != null ? u : c;
              (e.setValue(a, d), t == null || t());
            }
          }
        },
      );
    }
    function s(e) {
      o("WAFlowsNativeState").NativeStateChangeEventEmitter.on(
        "WAFOnNativeComponentValueCancel",
        function () {
          e == null || e();
        },
      );
    }
    ((l.WAFlowsRegisterNativeFormValueChangeCallback = e),
      (l.WAFlowsRegisterNativeFormValueCancelCallback = s));
  },
  98,
);
