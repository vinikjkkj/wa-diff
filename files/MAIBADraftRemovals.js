__d(
  "MAIBADraftRemovals",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = new Set();
    function l(t) {
      if (t.size !== 0) for (var n of e) n(t);
    }
    function s(t) {
      return (
        e.add(t),
        function () {
          e.delete(t);
        }
      );
    }
    function u(e) {
      var t, n;
      try {
        n = JSON.parse(e);
      } catch (e) {
        return new Set();
      }
      var r = (t = n) == null ? void 0 : t.changes;
      if (!Array.isArray(r)) return new Set();
      var o = new Set();
      for (var a of r) {
        var i = a == null ? void 0 : a.admarket_id;
        (a == null ? void 0 : a.op) === "remove" &&
          typeof i == "string" &&
          o.add(i);
      }
      return o;
    }
    ((i.announceMAIBADraftRemovals = l),
      (i.subscribeToMAIBADraftRemovals = s),
      (i.getEditExistingAdDraftRemovals = u));
  },
  66,
);
