__d(
  "MAIBAChatMessageDraftStore",
  ["MAIBAReactiveMap", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useCallback,
      c = s.useSyncExternalStore,
      d = { selectedAssets: [], stagedVariantAttachments: [], text: "" },
      m = "__new_chat__";
    function p(e) {
      return e != null ? e : m;
    }
    var _ = new (r("MAIBAReactiveMap"))();
    function f(e) {
      var t;
      return (t = _.get(p(e))) != null ? t : d;
    }
    function g(e, t) {
      var n,
        r = p(e);
      _.set(
        r,
        babelHelpers.extends({}, (n = _.get(r)) != null ? n : d, { text: t }),
      );
    }
    function h(e, t) {
      var n,
        r = p(e);
      _.set(
        r,
        babelHelpers.extends({}, (n = _.get(r)) != null ? n : d, {
          selectedAssets: t,
        }),
      );
    }
    function y(e, t) {
      var n,
        r = p(e);
      _.set(
        r,
        babelHelpers.extends({}, (n = _.get(r)) != null ? n : d, {
          stagedVariantAttachments: t,
        }),
      );
    }
    function C(e) {
      _.delete(p(e));
    }
    function b(e) {
      var t = p(e),
        n = c(
          function (e) {
            return _.subscribe(t, e);
          },
          function () {
            return f(e).text;
          },
        ),
        r = u(
          function (t) {
            return g(e, t);
          },
          [e],
        );
      return [n, r];
    }
    function v(e) {
      var t = p(e);
      return c(
        function (e) {
          return _.subscribe(t, e);
        },
        function () {
          return f(e).selectedAssets;
        },
      );
    }
    function S(e) {
      var t = p(e);
      return c(
        function (e) {
          return _.subscribe(t, e);
        },
        function () {
          return f(e).stagedVariantAttachments;
        },
      );
    }
    ((l.getMAIBAChatMessageDraft = f),
      (l.updateMAIBAChatMessageDraftText = g),
      (l.updateMAIBAChatMessageDraftAssets = h),
      (l.updateMAIBAChatMessageDraftStagedVariantAttachments = y),
      (l.deleteMAIBAChatMessageDraft = C),
      (l.useMAIBAChatMessageDraftText = b),
      (l.useMAIBAChatMessageDraftAssets = v),
      (l.useMAIBAChatMessageDraftStagedVariantAttachments = S));
  },
  98,
);
