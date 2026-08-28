__d(
  "AdsLoadStateUtils_LEGACY",
  [
    "invariant",
    "AdsCachedLoadState_LEGACY",
    "AdsLoadState_LEGACY",
    "LoadObject",
    "err",
    "immutable",
    "isEmpty",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = ["loadState"],
      u;
    function c(e) {
      return e.loadState === r("AdsLoadState_LEGACY").LOADING;
    }
    function d(e) {
      return !!e && e.loadState === r("AdsLoadState_LEGACY").LOADED;
    }
    function m(e) {
      return e.loadState === r("AdsLoadState_LEGACY").DELETING;
    }
    function p(e) {
      return !!e && e.loadState === r("AdsLoadState_LEGACY").ERROR;
    }
    function _(e) {
      return e.loadState === r("AdsLoadState_LEGACY").PENDING_WRITE;
    }
    function f(e) {
      return (
        e.loadState === r("AdsLoadState_LEGACY").LOADED ||
          s(0, 5733, e.loadState),
        e
      );
    }
    function g() {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      return R(r("AdsLoadState_LEGACY").LOADING, t);
    }
    function h() {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      return R(r("AdsLoadState_LEGACY").LOADED, t);
    }
    function y() {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      return R(r("AdsLoadState_LEGACY").ERROR, t);
    }
    function C() {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      return S(r("AdsLoadState_LEGACY").LOADED, t);
    }
    function b(e) {
      var t = e.reduce(
        function (e, t) {
          return Math.min(e, F(t));
        },
        F(r("AdsLoadState_LEGACY").LOADED),
      );
      return A(t);
    }
    function v(e) {
      var t = F(r("AdsLoadState_LEGACY").LOADED);
      return (
        e.forEach(function (e) {
          t = Math.min(t, F(e.loadState));
        }),
        A(t)
      );
    }
    function S(e, t) {
      return t.every(function (t) {
        if (!t) return !0;
        for (var n = t.values(), r = n.next(); !r.done; ) {
          if (r.value && r.value.loadState !== e) return !1;
          r = n.next();
        }
        return !0;
      });
    }
    function R(e, t) {
      return t.some(function (t) {
        if (!t) return !1;
        for (var n = t.values(), r = n.next(); !r.done; ) {
          if (r.value && r.value.loadState === e) return !0;
          r = n.next();
        }
        return !1;
      });
    }
    function L(e) {
      return p(e) ? e.error : null;
    }
    function E() {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      var r = t.map(k);
      return [].concat.apply([], r);
    }
    function k(e) {
      var t = [];
      return (
        e &&
          e.forEach(function (e) {
            var n = L(e);
            n && t.push(n);
          }),
        t
      );
    }
    function I() {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      var r = t.map(T);
      return [].concat.apply([], r);
    }
    function T(e) {
      var t = [];
      return (
        e &&
          e.forEach(function (e) {
            e && e.loadState === r("AdsLoadState_LEGACY").LOADED && t.push(e);
          }),
        t
      );
    }
    function D(t) {
      var n = t.loadState,
        o = babelHelpers.objectWithoutPropertiesLoose(t, e),
        a = !(u || (u = r("isEmpty")))(o);
      switch (n) {
        case r("AdsLoadState_LEGACY").ERROR:
          return r("LoadObject")
            .empty({ creatorModuleID: i.id })
            .setError(o.error || r("err")(""));
        case r("AdsLoadState_LEGACY").LOADED:
          return a
            ? r("LoadObject").withValue(o, { creatorModuleID: i.id })
            : r("LoadObject").empty({ creatorModuleID: i.id });
        case r("AdsLoadState_LEGACY").LOADING:
          return a
            ? r("LoadObject").loading({ creatorModuleID: i.id }).setValue(o)
            : r("LoadObject").loading({ creatorModuleID: i.id });
        case r("AdsLoadState_LEGACY").NOT_LOADED:
          return r("LoadObject").empty({ creatorModuleID: i.id });
        case r("AdsLoadState_LEGACY").PENDING_WRITE:
          return a
            ? r("LoadObject").updating({ creatorModuleID: i.id }).setValue(o)
            : r("LoadObject").updating({ creatorModuleID: i.id });
        case r("AdsLoadState_LEGACY").DELETING:
          return a
            ? r("LoadObject").deleting({ creatorModuleID: i.id }).setValue(o)
            : r("LoadObject").deleting({ creatorModuleID: i.id });
        default:
          return s(!1, "Invalid load state %s", n);
      }
    }
    function x(e) {
      if (e.isEmpty()) return r("AdsCachedLoadState_LEGACY").NOT_LOADED;
      if (e.isLoading()) return r("AdsCachedLoadState_LEGACY").LOADING;
      if (e.hasError())
        return {
          loadState: r("AdsLoadState_LEGACY").ERROR,
          error: e.getError(),
        };
      if (e.isUpdating())
        return babelHelpers.extends(
          { loadState: r("AdsLoadState_LEGACY").PENDING_WRITE },
          e.getValue(),
        );
      if (e.isDeleting())
        return babelHelpers.extends(
          { loadState: r("AdsLoadState_LEGACY").DELETING },
          e.getValue(),
        );
      var t = e.getValue() || {};
      return babelHelpers.extends(
        { loadState: r("AdsLoadState_LEGACY").LOADED },
        t,
      );
    }
    function $(e) {
      var t = x(e);
      return t.loadState === r("AdsLoadState_LEGACY").NOT_LOADED
        ? r("AdsCachedLoadState_LEGACY").LOADING
        : t;
    }
    function P(e) {
      var t = new Map();
      return (
        e.forEach(function (e, n) {
          t.set(n, $(e));
        }),
        t
      );
    }
    function N(e) {
      if (e.isEmpty()) return r("AdsCachedLoadState_LEGACY").NOT_LOADED;
      if (e.isLoading()) return r("AdsCachedLoadState_LEGACY").LOADING;
      if (e.hasError())
        return {
          loadState: r("AdsLoadState_LEGACY").ERROR,
          list: [],
          error: e.getError(),
        };
      var t = e.getValue() || [],
        n = t.slice();
      return e.isUpdating()
        ? { loadState: r("AdsLoadState_LEGACY").PENDING_WRITE, list: n }
        : e.isDeleting()
          ? { loadState: r("AdsLoadState_LEGACY").DELETING, list: n }
          : { loadState: r("AdsLoadState_LEGACY").LOADED, list: n };
    }
    function M(e) {
      var t = N(e);
      return t.loadState === r("AdsLoadState_LEGACY").NOT_LOADED
        ? r("AdsCachedLoadState_LEGACY").LOADING
        : t;
    }
    function w(e) {
      var t = e.list,
        n = e.loadState,
        o = r("immutable").List(t);
      switch (n) {
        case r("AdsLoadState_LEGACY").ERROR:
          return r("LoadObject").withError(r("err")(""), {
            creatorModuleID: i.id,
          });
        case r("AdsLoadState_LEGACY").LOADED:
          return r("LoadObject").withValue(o, { creatorModuleID: i.id });
        case r("AdsLoadState_LEGACY").LOADING:
          return r("LoadObject")
            .withValue(o, { creatorModuleID: i.id })
            .loading();
        case r("AdsLoadState_LEGACY").NOT_LOADED:
          return r("LoadObject").empty({ creatorModuleID: i.id });
        case r("AdsLoadState_LEGACY").PENDING_WRITE:
          return r("LoadObject")
            .withValue(o, { creatorModuleID: i.id })
            .updating();
        default:
          return s(!1, "Invalid load state");
      }
    }
    function A(e) {
      switch (e) {
        case 0:
          return r("AdsLoadState_LEGACY").NOT_LOADED;
        case 1:
          return r("AdsLoadState_LEGACY").LOADING;
        case 2:
          return r("AdsLoadState_LEGACY").PENDING_WRITE;
        case 3:
          return r("AdsLoadState_LEGACY").ERROR;
        case 4:
          return r("AdsLoadState_LEGACY").LOADED;
        default:
          s(0, 5734);
      }
    }
    function F(e) {
      switch (e) {
        case r("AdsLoadState_LEGACY").NOT_LOADED:
          return 0;
        case r("AdsLoadState_LEGACY").LOADING:
          return 1;
        case r("AdsLoadState_LEGACY").PENDING_WRITE:
          return 2;
        case r("AdsLoadState_LEGACY").ERROR:
          return 3;
        case r("AdsLoadState_LEGACY").LOADED:
          return 4;
        default:
          return;
      }
    }
    function O(e) {
      return e.isEmpty()
        ? r("AdsLoadState_LEGACY").NOT_LOADED
        : e.isLoading()
          ? r("AdsLoadState_LEGACY").LOADING
          : e.hasError()
            ? r("AdsLoadState_LEGACY").ERROR
            : r("AdsLoadState_LEGACY").LOADED;
    }
    function B(e) {
      if (e === r("AdsLoadState_LEGACY").NOT_LOADED)
        return r("LoadObject").empty({ creatorModuleID: i.id });
      if (
        e === r("AdsLoadState_LEGACY").LOADING ||
        e === r("AdsLoadState_LEGACY").DELETING ||
        e === r("AdsLoadState_LEGACY").PENDING_WRITE
      )
        return r("LoadObject").loading({ creatorModuleID: i.id });
      if (e === r("AdsLoadState_LEGACY").ERROR)
        return r("LoadObject").withError(r("err")(""), {
          creatorModuleID: i.id,
        });
      s(0, 5735, e);
    }
    function W(e) {
      return e === r("AdsLoadState_LEGACY").LOADED
        ? r("LoadObject").withValue(null, { creatorModuleID: i.id })
        : B(e);
    }
    ((l.isLoading = c),
      (l.isLoaded = d),
      (l.isDeleting = m),
      (l.isError = p),
      (l.isPendingWrite = _),
      (l.enforceLoaded = f),
      (l.anyLoading = g),
      (l.anyLoaded = h),
      (l.anyError = y),
      (l.allLoaded = C),
      (l.mergeLoadStates = b),
      (l.mergeLoadStatesForMap = v),
      (l.allHaveLoadState = S),
      (l.anyHasLoadState = R),
      (l.getError = L),
      (l.getErrorValues = E),
      (l.getErrorValuesSingleMap = k),
      (l.getLoadedValues = I),
      (l.getLoadedValuesSingleMap = T),
      (l.toLoadObject = D),
      (l.fromLoadObject = x),
      (l.fromLoadObjectTreatEmptyAsLoading = $),
      (l.fromLoadObjectMapTreatEmptyAsLoading = P),
      (l.fromLoadObjectToListObject = N),
      (l.fromLoadObjectToListObjectTreatEmptyAsLoading = M),
      (l.listObjectToLoadObject = w),
      (l.fromIndex = A),
      (l.toIndex = F),
      (l.getLoadStateForLoadObject = O),
      (l.getLoadObjectForNotLoadedState = B),
      (l.getLoadObjectForLoadState = W));
  },
  98,
);
