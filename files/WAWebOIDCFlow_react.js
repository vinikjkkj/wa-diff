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
      var t = e.onSuccess,
        n = "wa_web_oidc_flow_complete",
        a = "wa_web_oidc_channel";
      return (
        d(
          function () {
            var e = function (a) {
                var e = a.data;
                if (
                  typeof e == "object" &&
                  e != null &&
                  e.message === n &&
                  a.origin === window.location.origin
                ) {
                  var i = e.code,
                    l = e.state;
                  typeof i == "string" &&
                    i &&
                    typeof l == "string" &&
                    r("WAWebGetAccessTokenFromOIDCCode")(i, l)
                      .then(function (e) {
                        var n = o("WAWebCommonAdsTypes").asAdAccountToken(
                          e.token,
                          e.bp_id,
                          "FB",
                        );
                        (o("WAWebUserPrefsCTWA").setFbIdentity(n),
                          o(
                            "WAWebResolveAccountTypeAndAdPage",
                          ).clearSavedOIDCLoginPreference(n),
                          t != null && t());
                      })
                      .catch(function (e) {
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
                      });
                }
              },
              i = new BroadcastChannel(a);
            return (
              i.addEventListener("message", e),
              function () {
                (i.removeEventListener("message", e), i.close());
              }
            );
          },
          [t],
        ),
        null
      );
    }
    ((_.displayName = _.name + " [from " + i.id + "]"),
      (l.launchOIDCFlow = m),
      (l.OIDCEventListener = _));
  },
  226,
);
