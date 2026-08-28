__d(
  "isMAIBAChatOpen",
  ["MAIBAChatAppStore", "MAIBAChatAppUIProvider"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return o("MAIBAChatAppStore").shouldUseLaminarForMAIBA()
        ? r("MAIBAChatAppUIProvider")().isMAIBAChatAppOpen
        : o("MAIBAChatAppStore").getState().isMAIBAChatAppOpen;
    }
    l.default = e;
  },
  98,
);
