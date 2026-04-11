__d(
  "ReactiveExecutorExecTimeResolverTransformer",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = new WeakMap();
    function l(t) {
      return (e.has(t) || e.set(t, s(t)), e.get(t));
    }
    function s(e) {
      var t,
        n,
        r,
        o =
          (t = e.operation.use_exec_time_resolvers) != null
            ? t
            : ((n = e.operation.exec_time_resolvers_enabled_provider) == null
                ? void 0
                : n.get()) === !0;
      return babelHelpers.extends({}, e, {
        fragment: o ? e.fragment : m(e.fragment),
        operation: o ? e.operation : u(e.operation),
        params: babelHelpers.extends({}, e.params, {
          metadata: babelHelpers.extends(
            {},
            (r = e.params) == null ? void 0 : r.metadata,
            { is_ls_relay_request: !0, live: !0, operation: e.operation },
          ),
        }),
      });
    }
    function u(t) {
      return (e.has(t) || e.set(t, c(t)), e.get(t));
    }
    function c(e) {
      var t = babelHelpers.extends({}, e);
      return (
        (t.selections = t.selections.map(function (e) {
          return d(e);
        })),
        t
      );
    }
    function d(e) {
      var t = babelHelpers.extends({}, e);
      return (
        t.kind === "ClientEdgeToClientObject" &&
          (t = babelHelpers.extends({}, t.linkedField)),
        t.selections != null &&
          (t = babelHelpers.extends({}, t, {
            selections: t.selections.map(function (e) {
              return d(e);
            }),
          })),
        (t.kind === "RelayResolver" || t.kind === "RelayLiveResolver") &&
          (t = {
            args: t.args,
            kind: "ScalarField",
            name: t.name,
            storageKey: t.storageKey,
          }),
        t
      );
    }
    function m(t) {
      return (e.has(t) || e.set(t, p(t)), e.get(t));
    }
    function p(e) {
      var t = babelHelpers.extends({}, e, {
        metadata: babelHelpers.extends({}, e.metadata, { hasClientEdges: !1 }),
      });
      return (
        (t.selections = t.selections.map(function (e) {
          return _(e);
        })),
        t
      );
    }
    function _(e) {
      var t = babelHelpers.extends({}, e);
      return (
        t.kind === "ClientEdgeToClientObject" &&
          (t = babelHelpers.extends({}, t.linkedField)),
        t.kind === "RequiredField" && (t.field = _(t.field)),
        t.selections != null &&
          (t.selections = t.selections.map(function (e) {
            return _(e);
          })),
        (t.kind === "RelayResolver" || t.kind === "RelayLiveResolver") &&
          (t = {
            alias: t.alias,
            args: t.args,
            kind: "ScalarField",
            name: t.name,
            storageKey: null,
          }),
        t
      );
    }
    ((i.getTransformedFragmentForExecTimeMode = m),
      (i.getTransformedQueryForExecTimeMode = l));
  },
  66,
);
