__d(
  "WAWebVoipHandleCallActiveDeeplink",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WAWebABProps",
    "WAWebBoolFunc",
    "WAWebLazyLoadedRetriable",
    "WAWebVoipGatingUtils",
    "WAWebVoipOngoingCallCollection",
    "WAWebVoipStartCall",
    "WAWebWamEnumLobbyEntryPointType",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d = r("WAWebLazyLoadedRetriable")(
        async function () {
          var e = await r("JSResourceForInteraction")(
            "WAWebVoipCallActiveOneOnOneTransfer",
          )
            .__setRef("WAWebVoipHandleCallActiveDeeplink")
            .load();
          return e.transferOneOnOneCallHere;
        },
        "WAWebVoipCallActiveOneOnOneTransfer",
        {
          isTerminalError: o("WAWebBoolFunc").returnTrue,
          onFinalFailure: function (n) {
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: callActive: loading the 1:1 transfer failed",
                  ])),
              )
              .catching(n)
              .sendLogs("voip-call-active-1on1-transfer-load-failed");
          },
        },
      );
    function m() {
      var e =
        o("WAWebABProps").getABPropConfigValue(
          "enable_1on1_call_transfer_entry_point",
        ) === !0;
      return !o("WAWebVoipGatingUtils").isDeviceSwitchingEnabled() && !e
        ? !1
        : (p(e), !0);
    }
    async function p(e) {
      await o(
        "WAWebVoipOngoingCallCollection",
      ).WAWebVoipOngoingCallCollection.waitUntilLoaded();
      var t = o(
        "WAWebVoipOngoingCallCollection",
      ).WAWebVoipOngoingCallCollection.findOngoingCallActiveOnOtherSelfDevice();
      if (t != null) {
        _(t);
        return;
      }
      e && (await f());
    }
    function _(e) {
      try {
        o("WAWebVoipStartCall")
          .joinOngoingCallByCallId(
            e.id.id,
            o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE
              .XDR_CALL_TRANSFER,
          )
          .catch(function (e) {
            o("WALogger").ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "callActive joinOngoingCall failed",
                ])),
            );
          });
      } catch (e) {
        o("WALogger").ERROR(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "callActive joinOngoingCall failed",
            ])),
        );
      }
    }
    async function f() {
      var e;
      try {
        e = await d();
      } catch (e) {
        return;
      }
      try {
        await e();
      } catch (e) {
        o("WALogger")
          .ERROR(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "voip: callActive: 1:1 transfer failed",
              ])),
          )
          .catching(r("getErrorSafe")(e))
          .sendLogs("voip-call-active-1on1-transfer-failed");
      }
    }
    l.handleCallActiveDeeplink = m;
  },
  98,
);
