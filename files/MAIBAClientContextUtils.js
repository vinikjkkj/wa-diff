__d(
  "MAIBAClientContextUtils",
  [
    "AdsAIContextLightweightUtils",
    "FBLogger",
    "MAIBAResponsePersonaEnabled",
    "MAIBAResponsePersonaMode",
    "MAIBAResponseStyleClientContextUtils",
    "Promise",
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = r("requireDeferred")("AdsAIContextUtils").__setRef(
        "MAIBAClientContextUtils",
      ),
      u = r("requireDeferred")("MAIBAInlinedContext").__setRef(
        "MAIBAClientContextUtils",
      ),
      c = r("FBLogger")("axp_maiba_foundations_ux");
    function d(e) {
      return o("MAIBAResponseStyleClientContextUtils").addResponseStyleSignal(
        e,
        o("MAIBAResponsePersonaMode").getMAIBAResponseStyle(),
        o("MAIBAResponsePersonaEnabled").isMAIBAResponsePersonaEnabled(),
      );
    }
    var m = null;
    s.onReadyImmediately(function (e) {
      m = e;
    });
    function p(e, t) {
      var n = o(
          "AdsAIContextLightweightUtils",
        ).getAdsAIClientContextWithoutAssetsInfo(e),
        r = u.getModuleIfRequired(),
        a = null;
      return (
        r != null &&
          (a = r.getInlinedContext(
            babelHelpers.extends({}, e != null ? { ad_account_id: e } : null, {
              message_type: t,
            }),
          )),
        babelHelpers.extends({}, n, {
          context: { ad_spec: [], visual_context_surface_data: "{}" },
          inlined_context: a,
        })
      );
    }
    var _ = {
        getClientContext: function (r, o) {
          return new (e || (e = n("Promise")))(function (e) {
            s.onReadyImmediately(function (t) {
              ((m = t), e(d(t.getAdsAIClientContext(r, o))));
            });
          });
        },
        getClientContextSync: function (t, n) {
          var e,
            r = (e = m) == null ? void 0 : e.getAdsAIClientContext(t, n);
          return r == null ? null : d(r);
        },
        getPartialClientContextSync: function (t, n) {
          var e = null;
          try {
            var r;
            e = (r = m) == null ? void 0 : r.getAdsAIClientContext(t, n);
          } catch (e) {
            e instanceof Error
              ? c
                  .catching(e)
                  .warn(
                    "Failed to build full MAIBA client context, using minimal fallback",
                  )
              : c.warn(
                  "Failed to build full MAIBA client context, using minimal fallback",
                );
          }
          return d(e != null ? e : p(t, n));
        },
      },
      f = _;
    l.default = f;
  },
  98,
);
