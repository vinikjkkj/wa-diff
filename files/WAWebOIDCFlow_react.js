__d(
  "WAWebOIDCFlow.react",
  [
    "fbt",
    "FBLogger",
    "PopupWindow",
    "URI",
    "WAWebCommonAdsTypes",
    "WAWebFetchOIDCState",
    "WAWebGetAccessTokenFromOIDCCode",
    "WAWebResolveAccountTypeAndAdPage",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUserPrefsCTWA",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = u || (u = o("react")),
      d = u.useEffect;
    function m() {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var t = 1e3,
            n = 800,
            a = 656096963291760,
            i = "https://www.facebook.com/oidc/";
          try {
            var l = yield r("WAWebFetchOIDCState")(),
              u = new (e || (e = r("URI")))(i),
              d = window.location.origin + "/oidc_callback/";
            (u.addQueryData({
              app_id: a,
              redirect_uri: d,
              response_type: "code",
              scope: "openid expiring_offline_token",
              state: l,
            }),
              o("PopupWindow").open(u.toString(), n, t));
          } catch (e) {
            (r("FBLogger")("wa_ctwa_web")
              .catching(r("getErrorSafe")(e))
              .mustfix("OIDC flow failed to fetch CSRF token"),
              o("WAWebToastManager").ToastManager.open(
                c.jsx(o("WAWebToast.react").Toast, {
                  msg: s._(
                    /*BTDS*/ "Unable to initiate login, please try again later",
                  ),
                }),
                o("WAWebToastManager").ToastPosition.LEFT,
              ));
          }
        })),
        p.apply(this, arguments)
      );
    }
    function _(e) {
      var t = o("react-compiler-runtime").c(3),
        n = e.onSuccess,
        a,
        i;
      return (
        t[0] !== n
          ? ((a = function () {
              var e = function (t) {
                  var e = t.data;
                  if (
                    typeof e == "object" &&
                    e != null &&
                    e.message === "wa_web_oidc_flow_complete" &&
                    t.origin === window.location.origin
                  ) {
                    var a = e.code,
                      i = e.state;
                    typeof a == "string" &&
                      a &&
                      typeof i == "string" &&
                      r("WAWebGetAccessTokenFromOIDCCode")(a, i)
                        .then(function (e) {
                          var t = o("WAWebCommonAdsTypes").asAdAccountToken(
                            e.token,
                            e.bp_id,
                            "FB",
                          );
                          (o("WAWebUserPrefsCTWA").setFbIdentity(t),
                            o(
                              "WAWebResolveAccountTypeAndAdPage",
                            ).clearSavedOIDCLoginPreference(t),
                            n != null && n());
                        })
                        .catch(f);
                  }
                },
                t = new BroadcastChannel("wa_web_oidc_channel");
              return (
                t.addEventListener("message", e),
                function () {
                  (t.removeEventListener("message", e), t.close());
                }
              );
            }),
            (i = [n]),
            (t[0] = n),
            (t[1] = a),
            (t[2] = i))
          : ((a = t[1]), (i = t[2])),
        d(a, i),
        null
      );
    }
    function f(e) {
      (r("FBLogger")("wa_ctwa_web")
        .catching(r("getErrorSafe")(e))
        .mustfix("OIDC flow failed to get access token"),
        o("WAWebToastManager").ToastManager.open(
          c.jsx(o("WAWebToast.react").Toast, {
            msg: s._(
              /*BTDS*/ "Unable to get access token, please try again later",
            ),
          }),
          o("WAWebToastManager").ToastPosition.LEFT,
        ));
    }
    ((l.launchOIDCFlow = m), (l.OIDCEventListener = _));
  },
  226,
);
