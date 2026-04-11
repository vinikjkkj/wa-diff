__d(
  "WAWebAltDeviceLinkingIq",
  [
    "WASmaxMdCompanionFinishRPC",
    "WASmaxMdCompanionHelloRPC",
    "WAWebCompanionRegClientUtils",
    "WAWebMiscBrowserUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
        function t(t, n) {
          var r;
          return (
            (r = e.call(this, t) || this),
            (r.name = "CompanionHelloError"),
            (r.type = n),
            r
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(babelHelpers.wrapNativeSuper(Error)),
      s = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            (t = e.call.apply(e, [this].concat(r)) || this),
            (t.name = "CompanionFinishError"),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(babelHelpers.wrapNativeSuper(Error));
    function u(e, t, n, r) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, n, a, i) {
            var l = yield o("WASmaxMdCompanionHelloRPC").sendCompanionHelloRPC({
              linkCodePairingNonceArgs: {
                linkCodePairingNonceElementValue: new Uint8Array(1),
              },
              linkCodeCompanionRegJid: t,
              linkCodePairingWrappedCompanionEphemeralPubElementValue:
                new Uint8Array(n),
              companionServerAuthKeyPubElementValue: new Uint8Array(a),
              companionPlatformIdElMixinArgs: {
                companionPlatformIdElementValue: o(
                  "WAWebCompanionRegClientUtils",
                ).DEVICE_PLATFORM,
              },
              companionPlatformDisplayElMixinArgs: {
                companionPlatformDisplayElementValue:
                  r("WAWebMiscBrowserUtils").info().name +
                  " (" +
                  r("WAWebMiscBrowserUtils").info().os +
                  ")",
              },
              linkCodeCompanionRegShouldShowPushNotification: i
                ? "true"
                : "false",
            });
            if (l.name === "CompanionHelloResponseNotifyCompanion")
              return l.value.linkCodeCompanionRegLinkCodePairingRefElementValue;
            throw l.name === "CompanionHelloResponseError"
              ? new e(
                  "alt pairing: Got an error from alt paring: companion hello: " +
                    l.value.errorIqMixinErrors.name,
                  l.value.errorIqMixinErrors,
                )
              : new e(
                  "alt pairing: Got an unknown error from alt paring: companion hello",
                );
          },
        )),
        c.apply(this, arguments)
      );
    }
    function d(e, t, n, r) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            var a = yield o(
              "WASmaxMdCompanionFinishRPC",
            ).sendCompanionFinishRPC({
              linkCodeCompanionRegJid: r,
              linkCodePairingWrappedKeyBundleElementValue: new Uint8Array(e),
              companionIdentityPublicElementValue: new Uint8Array(t),
              linkCodePairingRefElementValue: n,
            });
            if (a.name !== "CompanionFinishResponseSuccess")
              throw new s(
                "alt pairing: Got an error from alt paring: companion finish",
              );
          },
        )),
        m.apply(this, arguments)
      );
    }
    ((l.CompanionHelloError = e),
      (l.CompanionFinishError = s),
      (l.sendCompanionHello = u),
      (l.sendCompanionFinish = d));
  },
  98,
);
