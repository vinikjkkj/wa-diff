__d(
  "MAIBAClientContextUtils",
  [
    "AdsAIContextLightweightUtils",
    "FBLogger",
    "MAIBAResponsePersonaEnabled",
    "MAIBAResponsePersonaMode",
    "MAIBAResponseStyleClientContextUtils",
    "Promise",
    "gkx",
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = r("requireDeferred")("MAIBAInlinedContext").__setRef(
        "MAIBAClientContextUtils",
      ),
      u = r("requireDeferred")("getMAIBAClientContext").__setRef(
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
    u.onReadyImmediately(function (e) {
      m = e;
    });
    function p(e, t) {
      var n = o(
          "AdsAIContextLightweightUtils",
        ).getAdsAIClientContextWithoutAssetsInfo(e),
        r = s.getModuleIfRequired(),
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
    function _(e) {
      var t =
        "Failed to build full MAIBA client context, using minimal fallback";
      e instanceof Error ? c.catching(e).warn(t) : c.warn(t);
    }
    function f(t, r, o) {
      return new (e || (e = n("Promise")))(function (e) {
        u.onReadyImmediately(function (n) {
          m = n;
          var a = null;
          try {
            a = n(t, r);
          } catch (e) {
            (_(e), o == null || o("error"), (a = p(t, r)));
          }
          e(d(a));
        });
      });
    }
    var g = {
        getClientContext: function (o, a, i) {
          return r("gkx")("25503")
            ? f(o, a, i)
            : new (e || (e = n("Promise")))(function (e) {
                u.onReadyImmediately(function (t) {
                  ((m = t), e(d(t(o, a))));
                });
              });
        },
        getClientContextSync: function (t, n) {
          var e = m == null ? void 0 : m(t, n);
          return e == null ? null : d(e);
        },
        getMinimalClientContextSync: p,
        getPartialClientContextSync: function (t, n) {
          var e = null;
          try {
            e = m == null ? void 0 : m(t, n);
          } catch (e) {
            _(e);
          }
          return d(e != null ? e : p(t, n));
        },
      },
      h = g;
    l.default = h;
  },
  98,
);
