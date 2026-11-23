__d(
  "MAIBAPreviewPublishEnrichmentStatusStore",
  ["fbt", "react"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = u.useLayoutEffect,
      d = u.useSyncExternalStore,
      m = new Map(),
      p = new Set(),
      _ = 0;
    function f() {
      _++;
      for (var e of p) e();
    }
    function g(e) {
      return (
        p.add(e),
        function () {
          p.delete(e);
        }
      );
    }
    function h() {
      return _;
    }
    function y() {
      return 0;
    }
    function C(e, t) {
      m.get(e) !== t && (m.set(e, t), f());
    }
    function b(e, t) {
      c(
        function () {
          e == null || e === "" || C(e, t);
        },
        [e, t],
      );
    }
    function v() {
      m.size !== 0 && (m.clear(), f());
    }
    function S(e) {
      return e === "RUNNING"
        ? s._(/*BTDS*/ "")
        : e === "COMPLETED"
          ? s._(/*BTDS*/ "")
          : e === "FAILED"
            ? s._(/*BTDS*/ "")
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    e,
                );
              })();
    }
    function R(e) {
      return (
        d(g, h, y),
        e.map(function (e) {
          var t = m.get(e.key);
          return t == null || t === e.status
            ? e
            : babelHelpers.extends({}, e, { status: t, title: S(t) });
        })
      );
    }
    ((l.updateMAIBAPreviewPublishEnrichmentStatus = C),
      (l.useMAIBAPreviewPublishEnrichmentStatusWriter = b),
      (l.clearMAIBAPreviewPublishEnrichmentStatuses = v),
      (l.getMAIBAPreviewPublishStatusTitle = S),
      (l.useActionabilityStepsWithPreviewPublishStatus = R));
  },
  226,
);
