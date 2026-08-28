__d(
  "AdsDMLUtils",
  [
    "AdsDML",
    "AdsDMLQueryHandler_DerivedDataBase",
    "LoadObject",
    "err",
    "immutable",
    "memoizeByFirstArgReference",
    "memoizeByReference",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("memoizeByReference")(s);
    function s(e) {
      if (e == null) return r("LoadObject").loading({ creatorModuleID: i.id });
      switch (e.status) {
        case "loading":
          return r("LoadObject").loading({ creatorModuleID: i.id });
        case "error":
          return r("LoadObject").withError(e.error, { creatorModuleID: i.id });
        case "loaded":
          return r("LoadObject").withValue(e.data, { creatorModuleID: i.id });
        case "pending":
          return r("LoadObject").empty({ creatorModuleID: i.id });
        default:
          throw (e.status, r("err")("exhaustive switch case"));
      }
    }
    function u(e) {
      return {
        parent: null,
        vars: null,
        queryBuilder: null,
        status: "loaded",
        data: e,
      };
    }
    function c(e, t, n) {
      switch (e.status) {
        case "loading":
          return t.loading(n);
        case "error":
          return t.error(e.error, n);
        case "loaded":
          return t.loaded(e.data, n);
        case "pending":
        default:
          return t.pending ? t.pending(n) : t.error(r("err")("No value"), n);
      }
    }
    function d(e, t) {
      if (e.status === "loaded") {
        var n = e.data,
          r = t(n);
        return u(r);
      } else return e;
    }
    function m(e) {
      var t = {
        parent: null,
        vars: null,
        queryBuilder: null,
        status: "pending",
      };
      return e.isLoading()
        ? babelHelpers.extends({}, t, { status: "loading", isLoading: !0 })
        : e.hasError()
          ? babelHelpers.extends({}, t, {
              status: "error",
              error: e.getErrorEnforcing(),
            })
          : e.hasValue()
            ? babelHelpers.extends({}, t, {
                status: "loaded",
                data: e.getValueEnforcing(),
              })
            : t;
    }
    function p(e) {
      return e == null
        ? r("immutable").Map()
        : e.status === "loaded" && typeof e.data == "object"
          ? r("immutable")
              .Map()
              .withMutations(function (t) {
                Object.entries(e.data).forEach(function (e) {
                  var n = e[0],
                    o = e[1];
                  return t.set(
                    n,
                    r("LoadObject").withValue(o, { creatorModuleID: i.id }),
                  );
                });
              })
          : r("immutable").Map();
    }
    function _(e, t) {
      if (e.status === "loaded" && typeof e.data == "object")
        for (var n of e.data) {
          var r = n[0],
            o = n[1];
          t(o);
        }
    }
    function f(e) {
      var t = [];
      return (
        _(e, function (e) {
          return t.push(e);
        }),
        t
      );
    }
    function g(e, t) {
      e.status === "loaded" &&
        typeof e.data == "object" &&
        Object.keys(e.data).forEach(function (n) {
          var r = e.data[n];
          t(r);
        });
    }
    function h(e) {
      var t = [];
      return (
        g(e, function (e) {
          return t.push(e);
        }),
        t
      );
    }
    var y = function (t, n) {
        var e = o("AdsDMLQueryHandler_DerivedDataBase").modularLoader(function (
          e,
        ) {
          return t.getStores(e);
        }, t);
        return o("AdsDML")
          .Query(n)
          .Derived(function (t) {
            return e(t.vars);
          });
      },
      C = r("memoizeByFirstArgReference")(y);
    function b(e, t) {
      var n = e.dataGetter,
        r = e.store,
        a = o("AdsDMLQueryHandler_DerivedDataBase").modularLoader(
          function (e) {
            return [r];
          },
          function (e) {
            return n(e, r);
          },
        );
      return o("AdsDML")
        .Query(t)
        .Derived(function (e) {
          return a(e.vars);
        });
    }
    var v = r("memoizeByFirstArgReference")(b);
    ((l.toLoadObject = e),
      (l.toLoadObjectImpl = s),
      (l.queryWithData = u),
      (l.match = c),
      (l.map = d),
      (l.fromLoadObject = m),
      (l.allToLoadObjectMap = p),
      (l.forEachDataInMap = _),
      (l.getLoadedValuesFromMap = f),
      (l.forEachDataInObject = g),
      (l.getLoadedValuesFromObject = h),
      (l.selectorToQuery = C),
      (l.storeToQuery = v));
  },
  98,
);
