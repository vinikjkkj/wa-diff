__d(
  "WAWebAltDeviceLinkingIq",
  [
    "WASmaxMdCompanionFinishRPC",
    "WASmaxMdCompanionHelloRPC",
    "WAWebBrowserInfo",
    "WAWebCompanionRegClientUtils",
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
    async function u(t, n, a, i) {
      var l = r("WAWebBrowserInfo")(),
        s = await o("WASmaxMdCompanionHelloRPC").sendCompanionHelloRPC({
          linkCodePairingNonceArgs: {
            linkCodePairingNonceElementValue: new Uint8Array(1),
          },
          linkCodeCompanionRegJid: t,
          linkCodePairingWrappedCompanionEphemeralPubElementValue:
            new Uint8Array(n),
          companionServerAuthKeyPubElementValue: new Uint8Array(a),
          companionPlatformIdElMixinArgs: {
            companionPlatformIdElementValue: o("WAWebCompanionRegClientUtils")
              .DEVICE_PLATFORM,
          },
          companionPlatformDisplayElMixinArgs: {
            companionPlatformDisplayElementValue: l.name + " (" + l.os + ")",
          },
          linkCodeCompanionRegShouldShowPushNotification: i ? "true" : "false",
        });
      if (s.name === "CompanionHelloResponseNotifyCompanion")
        return s.value.linkCodeCompanionRegLinkCodePairingRefElementValue;
      throw s.name === "CompanionHelloResponseError"
        ? new e(
            "alt pairing: Got an error from alt paring: companion hello: " +
              s.value.errorIqMixinErrors.name,
            s.value.errorIqMixinErrors,
          )
        : new e(
            "alt pairing: Got an unknown error from alt paring: companion hello",
          );
    }
    async function c(e) {
      var t = e.cachedRef,
        n = e.companionIdentityPublic,
        r = e.linkCodeCompanionRegJid,
        a = e.linkCodePairingWrappedKeyBundle,
        i = await o("WASmaxMdCompanionFinishRPC").sendCompanionFinishRPC({
          linkCodeCompanionRegJid: r,
          linkCodePairingWrappedKeyBundleElementValue: new Uint8Array(a),
          companionIdentityPublicElementValue: new Uint8Array(n),
          linkCodePairingRefElementValue: t,
        });
      if (i.name !== "CompanionFinishResponseSuccess")
        throw new s(
          "alt pairing: Got an error from alt paring: companion finish",
        );
    }
    ((l.CompanionHelloError = e),
      (l.CompanionFinishError = s),
      (l.sendCompanionHello = u),
      (l.sendCompanionFinish = c));
  },
  98,
);
