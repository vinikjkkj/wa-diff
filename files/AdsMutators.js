__d(
  "AdsMutators",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e() {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      return function (e) {
        return t.reduce(function (e, t) {
          return t(e);
        }, e);
      };
    }
    function l(e, t, n, r) {
      return e.withMutations(function (e) {
        for (var o of t) {
          var a = e.get(o);
          if (!a || !a.hasValue()) {
            r && r(a, o);
            continue;
          }
          var i = a.getValueEnforcing(),
            l = n(i, o);
          i !== l && e.set(o, a.setValue(l));
        }
      });
    }
    function s(e, t, n) {
      return e.withMutations(function (e) {
        for (var r of t) {
          var o = e.get(r);
          if (!(!o || !o.hasValue())) {
            var a = o.getValueEnforcing(),
              i = n(a, a, r);
            a !== i && e.set(r, o.setValue(i));
          }
        }
      });
    }
    function u(e, t, n) {
      var r = {};
      for (var o of t) {
        var a = e.get(o);
        !a || !a.hasValue() || (r[o] = n(a.getValueEnforcing(), o));
      }
      return r;
    }
    function c(e, t, n) {
      return t === void 0 || n.getIn(e) !== void 0 ? n : n.setIn(e, t);
    }
    ((i.chain = e),
      (i.mutateEach = l),
      (i.mutateEachAdgroup = s),
      (i.mapExistingValues = u),
      (i.setIfEmpty = c));
  },
  66,
);
