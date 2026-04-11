__d(
  "CometErrorBoundary.react",
  [
    "ErrorBoundary.react",
    "fb-error",
    "react",
    "useCometErrorHandler",
    "useHeroErrorMetadata",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["ref"],
      s = ["augmentError", "onError", "shouldSkipFailingToHeroTracing", "type"],
      u,
      c = u || (u = o("react")),
      d = u.useCallback;
    function m(t) {
      "use no forget";
      var n = t.ref,
        o = babelHelpers.objectWithoutPropertiesLoose(t, e),
        a = r("useHeroErrorMetadata")(),
        i = o.augmentError,
        l = o.onError,
        u = o.shouldSkipFailingToHeroTracing,
        m = o.type,
        p = babelHelpers.objectWithoutPropertiesLoose(o, s),
        _ = r("useCometErrorHandler")(l, u),
        f = d(
          function (e) {
            if ((i == null || i(e), a(e), m != null)) {
              var t;
              e.type = m;
              var n =
                (t = e.metadata) != null
                  ? t
                  : new (r("fb-error").ErrorMetadata)();
              ((e.metadata = n),
                n.addEntry(
                  "COMET_INFRA",
                  "EXPLICITLY_MARKED_ERROR_BOUNDARY",
                  "true",
                ));
            }
          },
          [i, a, m],
        );
      return c.jsx(
        r("ErrorBoundary.react"),
        babelHelpers.extends({}, p, {
          augmentError: f,
          fallback: o.fallback,
          onError: _,
        }),
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  98,
);
