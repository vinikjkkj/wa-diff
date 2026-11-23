__d(
  "MAIBAChatExpandInboxOnOpenStore",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = !1;
    function l(t) {
      e = t;
    }
    function s() {
      return e;
    }
    function u() {
      e = !1;
    }
    ((i.setExpandInboxOnOpen = l),
      (i.getExpandInboxOnOpen = s),
      (i.clearExpandInboxOnOpen = u));
  },
  66,
);
