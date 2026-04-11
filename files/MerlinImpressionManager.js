__d(
  "MerlinImpressionManager",
  ["$InternalEnum"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("$InternalEnum").Mirrored(["Enter", "Exit", "Update"]);
    function l(t, n, r, o, a) {
      var i = { itemId: r, status: e.Enter, time: t };
      c(i, o, a);
      var l = { itemId: r, status: e.Exit, time: n };
      c(l, o, a);
    }
    function s(e, t) {
      if (t[e] == null) return !1;
      var n = t[e].entries;
      if (n.length === 0) return !1;
      var r = n[n.length - 1];
      return r.exit !== 0;
    }
    function u(t, n) {
      var r = { entries: [], itemId: n.itemId };
      switch (n.status) {
        case e.Enter:
          r = d(t, n);
          break;
        case e.Exit:
          r = m(t, n);
          break;
        case e.Update:
          break;
      }
      return r;
    }
    function c(e, t, n) {
      var r = e.itemId,
        o = t[r];
      (o == null && (o = { entries: [], itemId: r }),
        (t[r] = u(o, e)),
        s(r, t) && (n(t[r].entries), delete t[r]));
    }
    function d(e, t) {
      var n = { enter: t.time, exit: 0 };
      return babelHelpers.extends({}, e, { entries: e.entries.concat(n) });
    }
    function m(e, t) {
      var n = [].concat(e.entries),
        r = n[n.length - 1];
      if (r == null) return e;
      if (r.enter !== 0 && r.exit === 0) {
        var o = { enter: r.enter, exit: t.time };
        n[n.length - 1] = o;
      }
      return babelHelpers.extends({}, e, { entries: n });
    }
    ((i.MerlinImpressionStatus = e),
      (i.logVisibilityTimestamps = l),
      (i.mergeVPVData = u));
  },
  66,
);
