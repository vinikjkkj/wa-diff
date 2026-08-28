__d(
  "AdsDataDispatchUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = Object.freeze([]);
    function l(e, t) {
      return t.isDisabled || e.has(t.provider) ? e : e.set(t.provider, t);
    }
    function s(e, t, n, r, o, a) {
      return babelHelpers.extends({}, r, {
        type: e,
        _dataReducers: t,
        _dataLoggers: n,
        _dispatchConvention: o,
        _dispatchModuleID: a == null ? void 0 : a.moduleID,
      });
    }
    function u(t) {
      return t._dataReducers ? t._dataReducers : e;
    }
    function c(t) {
      return t._dataLoggers ? t._dataLoggers : e;
    }
    function d(e, t) {
      return Array.from(t.reduce(l, e.reduce(l, new Map())).values());
    }
    function m(e) {
      return e._dispatchConvention === "laminar";
    }
    function p(e) {
      return e.actionType;
    }
    ((i.mergeParameters = s),
      (i.getDataReducers = u),
      (i.getDataLoggers = c),
      (i.mergeReducers = d),
      (i.shouldSkipLegacyFluxDispatch = m),
      (i.getActionType = p));
  },
  66,
);
