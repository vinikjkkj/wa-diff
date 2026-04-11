__d(
  "relay-runtime/query/GraphQLTag",
  ["invariant", "relay-runtime/util/RelayConcreteNode", "warning"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      l(0, 28205);
    }
    function s(e) {
      var t = e;
      return (
        typeof t == "function"
          ? ((t = t()),
            n("warning")(
              !1,
              "RelayGraphQLTag: node `%s` unexpectedly wrapped in a function.",
              t.kind === "Fragment" ? t.name : t.operation.name,
            ))
          : t.default && (t = t.default),
        t
      );
    }
    function u(e) {
      var t = s(e);
      return (
        typeof t == "object" &&
        t !== null &&
        t.kind === n("relay-runtime/util/RelayConcreteNode").FRAGMENT
      );
    }
    function c(e) {
      var t = s(e);
      return (
        typeof t == "object" &&
        t !== null &&
        t.kind === n("relay-runtime/util/RelayConcreteNode").REQUEST
      );
    }
    function d(e) {
      var t = s(e);
      return (
        typeof t == "object" &&
        t !== null &&
        t.kind === n("relay-runtime/util/RelayConcreteNode").UPDATABLE_QUERY
      );
    }
    function m(e) {
      var t = s(e);
      return (
        typeof t == "object" &&
        t !== null &&
        t.kind ===
          n("relay-runtime/util/RelayConcreteNode").INLINE_DATA_FRAGMENT
      );
    }
    function p(e) {
      var t = s(e);
      return (u(t) || l(0, 20130, JSON.stringify(t)), t);
    }
    function _(e) {
      var t,
        n = p(e),
        r = (t = n.metadata) == null ? void 0 : t.refetch,
        o = r == null ? void 0 : r.connection;
      return r === null ||
        typeof r != "object" ||
        o === null ||
        typeof o != "object"
        ? null
        : n;
    }
    function f(e) {
      var t,
        n = p(e),
        r = (t = n.metadata) == null ? void 0 : t.refetch;
      return r === null || typeof r != "object" ? null : n;
    }
    function g(e) {
      var t = s(e);
      return (c(t) || l(0, 20129, JSON.stringify(t)), t);
    }
    function h(e) {
      var t = s(e);
      return (d(t) || l(0, 20129, JSON.stringify(t)), t);
    }
    function y(e) {
      var t = s(e);
      return (m(t) || l(0, 20131, JSON.stringify(t)), t);
    }
    a.exports = {
      getFragment: p,
      getInlineDataFragment: y,
      getNode: s,
      getPaginationFragment: _,
      getRefetchableFragment: f,
      getRequest: g,
      getUpdatableQuery: h,
      graphql: e,
      isFragment: u,
      isInlineDataFragment: m,
      isRequest: c,
      isUpdatableQuery: d,
    };
  },
  null,
);
