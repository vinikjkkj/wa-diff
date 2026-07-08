__d(
  "relay-runtime/store/RelayModernSelector",
  [
    "invariant",
    "areEqual",
    "relay-runtime/store/RelayConcreteVariables",
    "relay-runtime/store/RelayStoreUtils",
    "warning",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = n("relay-runtime/store/RelayConcreteVariables").getFragmentVariables,
      c = (s = n("relay-runtime/store/RelayStoreUtils")).FRAGMENT_OWNER_KEY,
      d = s.FRAGMENT_POINTER_IS_WITHIN_UNMATCHED_TYPE_REFINEMENT,
      m = s.FRAGMENTS_KEY,
      p = s.ID_KEY,
      _ = s.PARENT_CLIENT_EDGE;
    function f(e, t) {
      (typeof t == "object" && t !== null && !Array.isArray(t)) ||
        l(0, 4618, e.name, JSON.stringify(t));
      var n = t[p],
        r = t[m],
        o = t[c],
        a = t[_];
      if (
        typeof n == "string" &&
        typeof r == "object" &&
        r !== null &&
        typeof r[e.name] == "object" &&
        r[e.name] !== null &&
        typeof o == "object" &&
        o !== null &&
        (a == null || typeof a == "object")
      ) {
        var i = o,
          s = a,
          f = r[e.name],
          g = u(e, i.variables, f),
          h = f[d] === !0;
        return $(e, n, g, i, h, s);
      }
      return null;
    }
    function g(e, t) {
      var n = null;
      return (
        t.forEach(function (t, r) {
          var o = t != null ? f(e, t) : null;
          o != null && ((n = n || []), n.push(o));
        }),
        n == null ? null : { kind: "PluralReaderSelector", selectors: n }
      );
    }
    function h(e, t) {
      return t == null
        ? t
        : e.metadata && e.metadata.plural === !0
          ? (Array.isArray(t) || l(0, 13882, e.name, JSON.stringify(t), e.name),
            g(e, t))
          : (!Array.isArray(t) ||
              l(0, 13879, e.name, JSON.stringify(t), e.name),
            f(e, t));
    }
    function y(e, t) {
      var n = {};
      for (var r in e)
        if (Object.prototype.hasOwnProperty.call(e, r)) {
          var o = e[r],
            a = t[r];
          n[r] = h(o, a);
        }
      return n;
    }
    function C(e, t) {
      var n = {};
      for (var r in e)
        if (Object.prototype.hasOwnProperty.call(e, r)) {
          var o = e[r],
            a = t[r];
          n[r] = b(o, a);
        }
      return n;
    }
    function b(e, t) {
      return t == null
        ? t
        : e.metadata && e.metadata.plural === !0
          ? (Array.isArray(t) || l(0, 13882, e.name, JSON.stringify(t), e.name),
            v(e, t))
          : (!Array.isArray(t) ||
              l(0, 13881, e.name, JSON.stringify(t), e.name),
            S(e, t));
    }
    function v(e, t) {
      var n = null;
      return (
        t.forEach(function (t) {
          var r = t != null ? S(e, t) : null;
          r != null && ((n = n || []), n.push(r));
        }),
        n
      );
    }
    function S(e, t) {
      (typeof t == "object" && t !== null && !Array.isArray(t)) ||
        l(0, 4618, e.name, JSON.stringify(t));
      var r = t[p];
      return typeof r == "string"
        ? r
        : (n("warning")(
            !1,
            "RelayModernSelector: Expected object to contain data for fragment `%s`, got `%s`. Make sure that the parent operation/fragment included fragment `...%s` without `@relay(mask: false)`, or `null` is passed as the fragment reference for `%s` if it's conditonally included and the condition isn't met.",
            e.name,
            JSON.stringify(t),
            e.name,
            e.name,
          ),
          null);
    }
    function R(e, t) {
      var n = {};
      for (var r in e)
        if (Object.prototype.hasOwnProperty.call(e, r)) {
          var o = e[r],
            a = t[r],
            i = L(o, a);
          Object.assign(n, i);
        }
      return n;
    }
    function L(e, t) {
      var n;
      return t == null
        ? {}
        : ((n = e.metadata) == null ? void 0 : n.plural) === !0
          ? (Array.isArray(t) || l(0, 13882, e.name, JSON.stringify(t), e.name),
            k(e, t))
          : (!Array.isArray(t) ||
              l(0, 13881, e.name, JSON.stringify(t), e.name),
            E(e, t) || {});
    }
    function E(e, t) {
      var n = f(e, t);
      return n ? n.variables : null;
    }
    function k(e, t) {
      var n = {};
      return (
        t.forEach(function (t, r) {
          if (t != null) {
            var o = E(e, t);
            o != null && Object.assign(n, o);
          }
        }),
        n
      );
    }
    function I(t, r) {
      return (
        t.dataID === r.dataID &&
        t.node === r.node &&
        (e || (e = n("areEqual")))(t.variables, r.variables) &&
        T(t.owner, r.owner) &&
        t.isWithinUnmatchedTypeRefinement ===
          r.isWithinUnmatchedTypeRefinement &&
        D(t.parentClientEdge, r.parentClientEdge)
      );
    }
    function T(t, r) {
      return t === r
        ? !0
        : t.identifier === r.identifier &&
            (e || (e = n("areEqual")))(t.cacheConfig, r.cacheConfig);
    }
    function D(e, t) {
      return e === t
        ? !0
        : e == null || t == null
          ? !1
          : e.clientEdgeDestinationID === t.clientEdgeDestinationID &&
            e.readerClientEdge === t.readerClientEdge;
    }
    function x(e, t) {
      return e === t
        ? !0
        : e == null
          ? t == null
          : t == null
            ? e == null
            : e.kind === "SingularReaderSelector" &&
                t.kind === "SingularReaderSelector"
              ? I(e, t)
              : e.kind === "PluralReaderSelector" &&
                  t.kind === "PluralReaderSelector"
                ? e.selectors.length === t.selectors.length &&
                  e.selectors.every(function (e, n) {
                    return I(e, t.selectors[n]);
                  })
                : !1;
    }
    function $(e, t, n, r, o, a) {
      return (
        o === void 0 && (o = !1),
        {
          parentClientEdge: a != null ? a : null,
          dataID: t,
          isWithinUnmatchedTypeRefinement: o,
          kind: "SingularReaderSelector",
          node: e,
          owner: r,
          variables: n,
        }
      );
    }
    function P(e, t, n) {
      return { dataID: t, node: e, variables: n };
    }
    a.exports = {
      areEqualSelectors: x,
      createNormalizationSelector: P,
      createReaderSelector: $,
      getDataIDsFromFragment: b,
      getDataIDsFromObject: C,
      getPluralSelector: g,
      getSelector: h,
      getSelectorsFromObject: y,
      getSingularSelector: f,
      getVariablesFromFragment: L,
      getVariablesFromObject: R,
      getVariablesFromPluralFragment: k,
      getVariablesFromSingularFragment: E,
    };
  },
  null,
);
