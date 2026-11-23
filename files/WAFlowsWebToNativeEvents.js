__d(
  "WAFlowsWebToNativeEvents",
  [],
  function (t, n, r, o, a, i) {
    var e = Object.freeze({
      WAFOnKeyboardStateChange: "onkeyboardStateChange",
      WAFOnHardwareBack: "navigateBack",
      WAFOnNativeComponentValueChange: "onNativeComponentValueChange",
      WAFOnNativeComponentValueCancel: "onNativeComponentValueCancel",
      WAFOnOutsideClick: "onOutsideClick",
    });
    function l(e) {
      return (
        Object.prototype.hasOwnProperty.call(e, "value") &&
        Object.prototype.hasOwnProperty.call(e, "input_type") &&
        Object.prototype.hasOwnProperty.call(e, "input_name")
      );
    }
    var s = function (t) {
      return Object.prototype.hasOwnProperty.call(t, "change");
    };
    ((i.WAFlowsWebToNativeEventNames = e),
      (i.isWAFNativeInputValueChangeEvent = l),
      (i.isKeyboardEvent = s));
  },
  66,
);
