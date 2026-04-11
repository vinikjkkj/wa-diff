__d(
  "WAWebKmpBridgeResultWrappers",
  ["getErrorSafe", "wa-kmp-syncd-engine-api"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return e().catch(function (e) {
        return o("wa-kmp-syncd-engine-api").KmpResult.failure(
          t(r("getErrorSafe")(e)),
        );
      });
    }
    function s(e, t) {
      return e().then(
        function (e) {
          return o("wa-kmp-syncd-engine-api").KmpResult.success(e);
        },
        function (e) {
          return o("wa-kmp-syncd-engine-api").KmpResult.failure(
            t(r("getErrorSafe")(e)),
          );
        },
      );
    }
    function u(e) {
      return e instanceof o("wa-kmp-syncd-engine-api").KmpSyncdInterfaceError
        ? e
        : c(e);
    }
    function c(e) {
      if (
        e instanceof
        o("wa-kmp-syncd-engine-api").KmpSyncdInterfaceError
          .KmpSyncdUnexpectedError
      )
        return e;
      var t = r("getErrorSafe")(e);
      return new (o(
        "wa-kmp-syncd-engine-api",
      ).KmpSyncdInterfaceError.KmpSyncdUnexpectedError)(
        String(t.message),
        t.name,
        null,
        null,
        t.stackTrace,
      );
    }
    function d(t) {
      return e(t, u);
    }
    function m(e) {
      return s(e, u);
    }
    function p(e) {
      return s(e, c);
    }
    function _(e, t) {
      try {
        return e();
      } catch (e) {
        return o("wa-kmp-syncd-engine-api").KmpResult.failure(
          t(r("getErrorSafe")(e)),
        );
      }
    }
    function f(e, t) {
      try {
        return o("wa-kmp-syncd-engine-api").KmpResult.success(e());
      } catch (e) {
        return o("wa-kmp-syncd-engine-api").KmpResult.failure(
          t(r("getErrorSafe")(e)),
        );
      }
    }
    function g(e) {
      return _(e, u);
    }
    function h(e) {
      return f(e, u);
    }
    function y(e) {
      return f(e, c);
    }
    ((l.wrapKmpResult = e),
      (l.wrapKmpSuccess = s),
      (l.wrapInterfaceKmpResult = d),
      (l.wrapInterfaceKmpSuccess = m),
      (l.wrapUnexpectedKmpSuccess = p),
      (l.wrapKmpResultSync = _),
      (l.wrapKmpSuccessSync = f),
      (l.wrapInterfaceKmpResultSync = g),
      (l.wrapInterfaceKmpSuccessSync = h),
      (l.wrapUnexpectedKmpSuccessSync = y));
  },
  98,
);
