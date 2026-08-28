__d(
  "AdsUnifiedCreativeAPIFieldFactory",
  ["invariant", "AdsUEditorSelectorUtils"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e) {
      var t = function (t) {
        return t;
      };
      return {
        name: e,
        cast: t,
        aggregate: c(e),
        getPath: d.bind(null, e),
        getPathOrThrow: m.bind(null, e),
        getValue: p.bind(null, e),
        isSupported: _.bind(null, e),
      };
    }
    function u(e, t) {
      var n = d.bind(null, e),
        r = m.bind(null, e),
        o = p.bind(null, e),
        a = _.bind(null, e),
        i = t({ getPath: n, getPathOrThrow: r, getValue: o, isSupported: a });
      return {
        name: e,
        cast: function (t) {
          return t;
        },
        aggregate: i.aggregate,
        getPath: n,
        getPathOrThrow: r,
        getValue: o,
        isSupported: a,
      };
    }
    function c(e) {
      return o("AdsUEditorSelectorUtils").memoizeBulkAggregation(function (t) {
        return t.map(function (t) {
          var n = t.adgroup,
            r = t.adgroupSpecPathPlugin;
          return p(e, n, r);
        });
      });
    }
    function d(e, t, n) {
      var r = n.getUnifiedCreativeAPIFieldMapping(t);
      return r[e];
    }
    function m(e, t, n) {
      var r = d(e, t, n);
      return (r || s(0, 4097, e, n.type, n.key, JSON.stringify(n.pivots)), r);
    }
    function p(e, t, n) {
      var r = d(e, t, n);
      if (r) return t.getIn(r);
    }
    function _(e, t, n) {
      return !!d(e, t, n);
    }
    ((l.create = e), (l.createCustom = u));
  },
  98,
);
