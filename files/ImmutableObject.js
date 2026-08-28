__d(
  "ImmutableObject",
  ["invariant", "ImmutableValue", "mergeHelpers"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = n("mergeHelpers").checkMergeObjectArgs,
      s = n("mergeHelpers").isTerminal,
      u = "_DONT_EVER_TYPE_THIS_SECRET_KEY";
    function c(e) {
      e instanceof n("ImmutableValue") || l(0, 3884);
    }
    var d = (function (e) {
      function t() {
        var t;
        t = e.call(this, n("ImmutableValue")[u]) || this;
        for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++)
          o[a] = arguments[a];
        return (n("ImmutableValue").mergeAllPropertiesInto(t, o), t);
      }
      return (
        babelHelpers.inheritsLoose(t, e),
        (t.set = function (n, r) {
          return (
            c(n),
            (typeof r == "object" && r !== void 0 && !Array.isArray(r)) ||
              l(0, 3885),
            new t(n, r)
          );
        }),
        (t.setProperty = function (n, r, o) {
          var e = {};
          return ((e[r] = o), t.set(n, e));
        }),
        (t.deleteProperty = function (n, r) {
          var e = {};
          for (var o in n)
            o !== r &&
              Object.prototype.hasOwnProperty.call(n, o) &&
              (e[o] = n[o]);
          return new t(e);
        }),
        (t.setDeep = function (t, n) {
          return (c(t), m(t, n));
        }),
        (t.values = function (t) {
          return Object.keys(t).map(function (e) {
            return t[e];
          });
        }),
        t
      );
    })(n("ImmutableValue"));
    function m(t, r) {
      e(t, r);
      for (var o = {}, a = Object.keys(t), i = 0; i < a.length; i++) {
        var l = a[i];
        Object.prototype.hasOwnProperty.call(r, l)
          ? s(t[l]) || s(r[l])
            ? (o[l] = r[l])
            : (o[l] = m(t[l], r[l]))
          : (o[l] = t[l]);
      }
      var u = Object.keys(r);
      for (i = 0; i < u.length; i++) {
        var c = u[i];
        Object.prototype.hasOwnProperty.call(t, c) || (o[c] = r[c]);
      }
      return t instanceof n("ImmutableValue")
        ? new d(o)
        : r instanceof n("ImmutableValue")
          ? new d(o)
          : o;
    }
    a.exports = d;
  },
  null,
);
