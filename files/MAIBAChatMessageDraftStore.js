__d(
  "MAIBAChatMessageDraftStore",
  ["MAIBAReactiveMap", "react", "react-compiler-runtime"],
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
      var t = o("react-compiler-runtime").c(11),
        n;
      t[0] !== e ? ((n = p(e)), (t[0] = e), (t[1] = n)) : (n = t[1]);
      var r = n,
        a;
      t[2] !== r
        ? ((a = function (t) {
            return _.subscribe(r, t);
          }),
          (t[2] = r),
          (t[3] = a))
        : (a = t[3]);
      var i;
      t[4] !== e
        ? ((i = function () {
            return f(e).text;
          }),
          (t[4] = e),
          (t[5] = i))
        : (i = t[5]);
      var l = c(a, i),
        s;
      t[6] !== e
        ? ((s = function (n) {
            return g(e, n);
          }),
          (t[6] = e),
          (t[7] = s))
        : (s = t[7]);
      var u = s,
        d;
      return (
        t[8] !== u || t[9] !== l
          ? ((d = [l, u]), (t[8] = u), (t[9] = l), (t[10] = d))
          : (d = t[10]),
        d
      );
    }
    function v(e) {
      var t = o("react-compiler-runtime").c(6),
        n;
      t[0] !== e ? ((n = p(e)), (t[0] = e), (t[1] = n)) : (n = t[1]);
      var r = n,
        a;
      t[2] !== r
        ? ((a = function (t) {
            return _.subscribe(r, t);
          }),
          (t[2] = r),
          (t[3] = a))
        : (a = t[3]);
      var i;
      return (
        t[4] !== e
          ? ((i = function () {
              return f(e).selectedAssets;
            }),
            (t[4] = e),
            (t[5] = i))
          : (i = t[5]),
        c(a, i)
      );
    }
    function S(e) {
      var t = o("react-compiler-runtime").c(6),
        n;
      t[0] !== e ? ((n = p(e)), (t[0] = e), (t[1] = n)) : (n = t[1]);
      var r = n,
        a;
      t[2] !== r
        ? ((a = function (t) {
            return _.subscribe(r, t);
          }),
          (t[2] = r),
          (t[3] = a))
        : (a = t[3]);
      var i;
      return (
        t[4] !== e
          ? ((i = function () {
              return f(e).stagedVariantAttachments;
            }),
            (t[4] = e),
            (t[5] = i))
          : (i = t[5]),
        c(a, i)
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
