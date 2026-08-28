__d(
  "AdsDraftFragmentValidationReducerPlugins",
  ["invariant", "AdDraftFragmentValidationStatus"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e) {
      switch (e) {
        case r("AdDraftFragmentValidationStatus").VALIDATED:
          return r("AdDraftFragmentValidationStatus").VALIDATED;
        case r("AdDraftFragmentValidationStatus").NEEDS_VALIDATION:
          return r("AdDraftFragmentValidationStatus").NEEDS_VALIDATION;
        case r("AdDraftFragmentValidationStatus").HAS_ERRORS:
          return r("AdDraftFragmentValidationStatus").HAS_ERRORS;
        default:
          s(0, 17755);
      }
    }
    var u = {
        reduce: function (t, n) {
          return t.filter(function (e, t) {
            return !n.fragments.has(t);
          });
        },
      },
      c = {
        reduce: function (n, r) {
          return n.withMutations(function (t) {
            r.fragments.forEach(function (n) {
              t.set(n.id, {
                active_errors: n.active_errors,
                fragment_version: n.fragment_version.toString(),
                validation_status: e(n.validation_status),
                validation_failed: !1,
                branded_content_errors: n.branded_content_errors,
              });
            });
          });
        },
      },
      d = {
        reduce: function (n, r) {
          return n.withMutations(function (t) {
            r.fragments.forEach(function (n, r) {
              t.set(r, {
                active_errors: n.active_errors,
                fragment_version: n.fragment_version.toString(),
                validation_status: e(n.validation_status),
                validation_failed: !1,
                branded_content_errors: n.branded_content_errors,
              });
            });
          });
        },
      },
      m = {
        reduce: function (t, n) {
          return t.withMutations(function (e) {
            n.fragments.forEach(function (t, n) {
              e.set(n, {
                active_errors: t.active_errors,
                validation_request_error:
                  t == null ? void 0 : t.validation_request_error,
                fragment_version: t.fragment_version.toString(),
                validation_status: r("AdDraftFragmentValidationStatus")
                  .NEEDS_VALIDATION,
                validation_failed: !0,
                branded_content_errors: t.branded_content_errors,
              });
            });
          });
        },
      };
    ((l.handleFragmentBatchDeleted = u),
      (l.handleFragmentValidationUpdatedAsList = c),
      (l.handleFragmentValidationUpdatedAsMap = d),
      (l.handleFragmentValidationFailed = m));
  },
  98,
);
