__d(
  "WAWebAltDeviceLinkingIq",
  [
    "WASmaxMdCompanionFinishRPC",
    "WASmaxMdCompanionHelloRPC",
    "WAWebBrowserInfo",
    "WAWebCompanionRegClientUtils",
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
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.companionServerAuthKeyPub,
            a = t.linkCodePairingWrappedCompanionEphemeralPub,
            i = t.phone,
            l = t.shouldPush,
            s = r("WAWebBrowserInfo")(),
            u = yield o("WASmaxMdCompanionHelloRPC").sendCompanionHelloRPC({
              linkCodePairingNonceArgs: {
                linkCodePairingNonceElementValue: new Uint8Array(1),
              },
              linkCodeCompanionRegJid: i,
              linkCodePairingWrappedCompanionEphemeralPubElementValue:
                new Uint8Array(a),
              companionServerAuthKeyPubElementValue: new Uint8Array(n),
              companionPlatformIdElMixinArgs: {
                companionPlatformIdElementValue: o(
                  "WAWebCompanionRegClientUtils",
                ).DEVICE_PLATFORM,
              },
              companionPlatformDisplayElMixinArgs: {
                companionPlatformDisplayElementValue:
                  s.name + " (" + s.os + ")",
              },
              linkCodeCompanionRegShouldShowPushNotification: l
                ? "true"
                : "false",
            });
          if (u.name === "CompanionHelloResponseNotifyCompanion")
            return u.value.linkCodeCompanionRegLinkCodePairingRefElementValue;
          throw u.name === "CompanionHelloResponseError"
            ? new e(
                "alt pairing: Got an error from alt paring: companion hello: " +
                  u.value.errorIqMixinErrors.name,
                u.value.errorIqMixinErrors,
              )
            : new e(
                "alt pairing: Got an unknown error from alt paring: companion hello",
              );
        })),
        c.apply(this, arguments)
      );
    }
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.cachedRef,
            n = e.companionIdentityPublic,
            r = e.linkCodeCompanionRegJid,
            a = e.linkCodePairingWrappedKeyBundle,
            i = yield o("WASmaxMdCompanionFinishRPC").sendCompanionFinishRPC({
              linkCodeCompanionRegJid: r,
              linkCodePairingWrappedKeyBundleElementValue: new Uint8Array(a),
              companionIdentityPublicElementValue: new Uint8Array(n),
              linkCodePairingRefElementValue: t,
            });
          if (i.name !== "CompanionFinishResponseSuccess")
            throw new s(
              "alt pairing: Got an error from alt paring: companion finish",
            );
        })),
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
