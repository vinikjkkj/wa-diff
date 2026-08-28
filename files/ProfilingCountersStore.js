__d(
  "ProfilingCountersStore",
  ["IntervalTrackingBoundedBuffer"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new (r("IntervalTrackingBoundedBuffer"))();
    function s() {
      return e;
    }
    function u(e) {
      var t = {};
      return (
        e.forEach(function (e) {
          return (t[e.getTimeSliceContextID()] = e);
        }),
        t
      );
    }
    function c(e, t, n) {
      var r = n;
      if (
        (e.hasActiveCounters() && (r = t(e, r)),
        e.processedNestedContexts != null)
      )
        for (var o of e.processedNestedContexts) r = c(o, t, r);
      return r;
    }
    function d(e, t) {
      if (e.length === 0) return null;
      for (var n of e)
        if (t.propagatedAttributions && t.propagatedAttributions[n] != null)
          return n;
      var r = null,
        o = null;
      for (var a of e)
        if (t.newAttributions && t.newAttributions[a] != null) {
          var i = t.newAttributions[a].newCounterIdx;
          (o == null || i < o) && ((r = a), (o = i));
        }
      return r;
    }
    function m(e, t) {
      return c(
        e,
        function (e, n) {
          var r = d(t, e);
          if (r != null) {
            var o = p(r, e),
              a = o.attributed,
              i = o.unattributed;
            (a != null && _(n.attributed, a),
              i != null && _(n.unattributed, i));
          } else _(n.unattributed, e.getActiveCounters().getTotals());
          return n;
        },
        { attributed: {}, unattributed: {} },
      );
    }
    function p(e, t) {
      var n = t.getActiveCounters().getTotals();
      if (
        t.propagatedAttributions != null &&
        t.propagatedAttributions[e] != null
      )
        return { attributed: n, unattributed: null };
      if (t.newAttributions != null && t.newAttributions[e] != null) {
        var r = t.newAttributions[e].snapshotAtStart;
        if (r != null) {
          for (var o = Object.entries(r), a = 0; a < o.length; a++) {
            var i = o[a],
              l = i[0],
              s = i[1],
              u = n[l] - s;
            u === 0 ? delete n[l] : (n[l] = u);
          }
          return { attributed: n, unattributed: r };
        } else return { attributed: n, unattributed: null };
      } else return { attributed: null, unattributed: n };
    }
    function _(e, t) {
      for (var n of Object.entries(t)) {
        var r = n[0],
          o = n[1];
        e[r] = (e[r] || 0) + o;
      }
    }
    ((l.getInstance = s),
      (l.toMap = u),
      (l.accumulateOverNestedActiveCounters = c),
      (l.getMaximumAttribution = d),
      (l.getNestedTotalsByAttributions = m),
      (l.getAttributedAndUnattributedForThisContext = p),
      (l.addOnto = _));
  },
  98,
);
