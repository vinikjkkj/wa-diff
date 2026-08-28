__d(
  "shadowValidateReverseInteropUtil",
  [
    "AndromedaValidatorConfigReverseInterop",
    "FBLogger",
    "Promise",
    "mergeAnnotations",
    "performanceAbsoluteNow",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u(t) {
      var o = t.extraAnnotations,
        a = t.fetchCurrentValuePromise,
        l = t.fetchShadowValidationPromise,
        u = t.getComparisonObjects,
        c = t.ids,
        d = t.moduleId,
        m = (s || (s = r("performanceAbsoluteNow")))(),
        p = (e || (e = n("Promise")))
          .allSettled([
            a.then(function (e) {
              return {
                data: e,
                duration: (s || (s = r("performanceAbsoluteNow")))() - m,
              };
            }),
            l.then(function (e) {
              return {
                data: e,
                duration: (s || (s = r("performanceAbsoluteNow")))() - m,
              };
            }),
          ])
          .then(function (e) {
            var t = e[0],
              n = e[1];
            if (n.status === "fulfilled" && t.status === "fulfilled") {
              var a,
                l,
                s = u(
                  (a = t.value) == null ? void 0 : a.data,
                  (l = n.value) == null ? void 0 : l.data,
                ),
                m = s.current,
                p = s.shadow;
              r("AndromedaValidatorConfigReverseInterop").compareState(
                d,
                c,
                p,
                m,
                r("mergeAnnotations")(
                  {
                    int: {
                      grapqlDuration: t.value.duration,
                      shadowValidationDuration: n.value.duration,
                    },
                  },
                  o,
                ),
              );
            } else
              n.status === "rejected" && t.status === "rejected"
                ? r("FBLogger")("relay_ads_manager").warn(
                    "[%s] Received shadowValidation call error %s and GraphQL error %s",
                    i.id,
                    n.reason,
                    t.reason,
                  )
                : n.status === "rejected"
                  ? r("FBLogger")("relay_ads_manager").warn(
                      "[%s] Received shadowValidation call error: %s",
                      i.id,
                      n.reason,
                    )
                  : t.status === "rejected" &&
                    r("FBLogger")("relay_ads_manager").warn(
                      "[%s] Received GraphQL error: %s",
                      i.id,
                      t.reason,
                    );
          });
      r("promiseDone")(p);
    }
    l.shadowValidate = u;
  },
  98,
);
