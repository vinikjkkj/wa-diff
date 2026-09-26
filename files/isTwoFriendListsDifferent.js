__d(
  "isTwoFriendListsDifferent",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      if (t.length !== e.length) return !0;
      var n = new Set(e);
      for (var r of t) if (!n.has(r)) return !0;
      return !1;
    }
    i.default = e;
  },
  66,
);
