__d(
  "isMAIBAChatFullScreen",
  ["MAIBAChatAppStore", "MAIBAChatAppUIProvider"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return o("MAIBAChatAppStore").shouldUseLaminarForMAIBA()
        ? r("MAIBAChatAppUIProvider")().isFullScreen
        : o("MAIBAChatAppStore").getState().isFullScreen;
    }
    l.default = e;
  },
  98,
);
