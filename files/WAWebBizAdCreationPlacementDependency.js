__d(
  "WAWebBizAdCreationPlacementDependency",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = "INSTAGRAM",
      l = "WHATSAPP";
    function s(t, n, r) {
      var o = new Set(t);
      return o.has(n)
        ? (o.delete(n), r ? p(o) : o)
        : r
          ? (n === l && o.add(e), o.add(n), o)
          : (o.add(n), o);
    }
    function u(e, t, n) {
      return n
        ? Array.from(s(new Set(e), t, !0))
        : e.includes(t)
          ? e.filter(function (e) {
              return e !== t;
            })
          : [].concat(e, [t]);
    }
    function c(e, t, n) {
      return n ? d(e, t).length === 0 : e.length < 2;
    }
    function d(e, t) {
      var n = new Set(e);
      return (n.delete(t), Array.from(p(n)));
    }
    function m(e, t) {
      return t ? Array.from(_(new Set(e))) : e;
    }
    function p(t) {
      var n = new Set(t);
      return (n.has(l) && !n.has(e) && n.delete(l), n);
    }
    function _(t) {
      if (!t.has(l) || t.has(e)) return new Set(t);
      var n = new Set();
      for (var r of t) (r === l && n.add(e), n.add(r));
      return n;
    }
    ((i.togglePlatform = s),
      (i.getPlatformsAfterToggle = u),
      (i.wouldLeaveNoPlatforms = c),
      (i.getPlatformsAfterUnchecking = d),
      (i.applyDependencyToPlatformList = m));
  },
  66,
);
