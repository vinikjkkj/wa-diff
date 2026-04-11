__d(
  "useWAWebExternalBetaOptIn",
  [
    "fbt",
    "WALogger",
    "WAWebABProps",
    "WAWebBuildType",
    "WAWebCmd",
    "WAWebDesktopUpsellPlatformAwareHooks",
    "WAWebDesktopUpsellUtils",
    "WAWebEnvironment",
    "WAWebExternalBetaEvents",
    "WAWebExternalBetaOptInAction",
    "WAWebModalSingleActionOpener",
    "WAWebUserPrefsGeneral",
    "asyncToGeneratorRuntime",
    "cr:9565",
    "react",
    "react-compiler-runtime",
    "useWAWebABPropConfigValue",
    "useWAWebAsync",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d,
      m = (d || (d = o("react"))).useState,
      p = (e = n("cr:9565")) != null ? e : {},
      _ = p.getWindowsBuildType;
    function f() {
      var e = m(function () {
          return _
            ? _() === o("WAWebBuildType").BuildType.BETA
            : o("WAWebABProps").getABPropConfigValue(
                  "wa_web_reduce_cascading_updates_chat_open",
                )
              ? o("WAWebUserPrefsGeneral").getWhatsAppWebExternalBetaJoinedIdb()
              : !1;
        }),
        t = e[0],
        a = e[1],
        i = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            if (!_) {
              var e = o("WAWebABProps").getABPropConfigValue(
                "wa_web_reduce_cascading_updates_chat_open",
              )
                ? o(
                    "WAWebUserPrefsGeneral",
                  ).getWhatsAppWebExternalBetaJoinedIdb()
                : yield o(
                    "WAWebUserPrefsGeneral",
                  ).getWhatsAppWebExternalBetaJoinedIdb();
              a(e);
            }
          });
          return function () {
            return e.apply(this, arguments);
          };
        })();
      (r("useWAWebAsync")(
        i,
        [],
        !o("WAWebABProps").getABPropConfigValue(
          "wa_web_reduce_cascading_updates_chat_open",
        ),
      ),
        o("useWAWebListener").useListener(
          o("WAWebExternalBetaEvents").WAWebExternalBetaEvents,
          "external_beta_events:opt_in_status_changed",
          i,
        ));
      var l = (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (!_) {
            a(!t);
            try {
              yield o("WAWebExternalBetaOptInAction").setOptInBetaAction(!t);
            } catch (e) {
              (o("WALogger")
                .ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "Web Beta: Error while opting in: ",
                      "",
                    ])),
                  e,
                )
                .sendLogs("web beta failed to change opt-in status"),
                o("WAWebModalSingleActionOpener").openSingleActionModal({
                  body: s._(
                    /*BTDS*/ "Something went wrong while joining the beta. Please try again.",
                  ),
                }));
            }
          }
        });
        return function () {
          return e.apply(this, arguments);
        };
      })();
      return [t, l];
    }
    function g() {
      o("useWAWebListener").useListener(
        o("WAWebCmd").Cmd,
        "on_ab_props_update_from_bridge",
        h,
      );
    }
    function h() {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield o(
              "WAWebUserPrefsGeneral",
            ).getWhatsAppWebExternalBetaJoinedIdb(),
            t = o("WAWebABProps").getABPropConfigValue(
              "external_beta_can_join",
            );
          e &&
            !t &&
            (o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "useExternalBetaOptIn: AB prop does not allow user to join beta. Leaving beta...",
                ])),
            ),
            yield o("WAWebExternalBetaOptInAction").setOptInBetaAction(!1));
        })),
        y.apply(this, arguments)
      );
    }
    function C() {
      var e = o("react-compiler-runtime").c(1),
        t = f(),
        n = t[0],
        a = o(
          "WAWebDesktopUpsellPlatformAwareHooks",
        ).useWAWebDesktopUpsellPlatformCheck(),
        i = o("useWAWebABPropConfigValue").useABPropConfigValue(
          "web_mac_beta_upsell",
        ),
        l;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = o("WAWebDesktopUpsellUtils").getUserDesktopOs()), (e[0] = l))
        : (l = e[0]);
      var s = l,
        u = !1;
      return (
        i &&
          (u =
            r("WAWebEnvironment").isWeb &&
            n &&
            s === o("WAWebDesktopUpsellUtils").UserDesktopOs.MACOS &&
            a),
        u
      );
    }
    ((l.useExternalBetaOptIn = f),
      (l.useExternalBetaValidator = g),
      (l.useMacBetaUpsellOnWeb = C));
  },
  226,
);
