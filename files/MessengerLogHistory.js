__d(
  "MessengerLogHistory",
  ["MessengerSimpleLogHistoryFactory"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {},
      s = o("MessengerSimpleLogHistoryFactory").simpleFactory;
    function u(e) {
      s = e;
    }
    function c(t) {
      return (e[t] || (e[t] = s.getInstance(t)), e[t]);
    }
    ((l.setLogHistoryFactory = u), (l.getInstance = c));
  },
  98,
);
