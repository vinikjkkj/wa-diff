__d(
  "HiddenSubtreePassiveContext",
  ["react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.createContext({
        getCurrentState: function () {
          return {
            backgrounded: !1,
            hidden: !1,
            hiddenOrBackgrounded: !1,
            hiddenOrBackgrounded_FIXME: !1,
            visibleForAnimation: !1,
          };
        },
        subscribeToChanges: function (t) {
          return { remove: function () {} };
        },
      });
    l.default = u;
  },
  98,
);
