__d(
  "WAWebSWBusInit",
  [
    "WALogger",
    "WAWebCmd",
    "WAWebCrashlog",
    "WAWebFeatureDetectionSwSupport",
    "WAWebLoggerImpl",
    "WAWebNoop",
    "WAWebRecordNotificationInteraction",
    "WAWebSWBus",
    "WAWebSWBusActions",
    "WAWebSocketConstants",
    "WAWebSocketModel",
    "WAWebSwNotificationBannerRegistry",
    "WAWebUserPrefsGeneral",
    "WAWebVoipNotificationActionBus",
    "err",
    "getErrorSafe",
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p = r("requireDeferred")("WAWebPipVideoStreaming").__setRef(
        "WAWebSWBusInit",
      ),
      _ = r("requireDeferred")(
        "WAWebVoipIncomingCallNotificationStateStore",
      ).__setRef("WAWebSWBusInit");
    async function f() {
      return (await p.load()).handleVideoStreamingRequest;
    }
    if (r("WAWebFeatureDetectionSwSupport").supported) {
      var g = function () {
        try {
          var t = navigator.serviceWorker;
          t != null &&
            t.controller &&
            t.controller.addEventListener("error", function (t) {
              o("WAWebSocketModel").Socket.state !==
                o("WAWebSocketConstants").SOCKET_STATE.UNLAUNCHED &&
                o("WALogger").WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "ServiceWorker controller error: ",
                      "",
                    ])),
                  t.error,
                );
            });
        } catch (e) {
          o("WALogger").WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                '[sw] add "error" listener failed: ',
                "",
              ])),
            e,
          );
        }
      };
      try {
        var h = navigator.serviceWorker;
        h &&
          h.addEventListener("controllerchange", function (e) {
            g();
          });
      } catch (e) {
        o("WALogger").WARN(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              '[sw] add "controllerchange" listener failed: ',
              "",
            ])),
          e,
        );
      }
      try {
        var y = navigator.serviceWorker;
        y &&
          y.addEventListener("error", function (e) {
            o("WAWebSocketModel").Socket.state !==
              o("WAWebSocketConstants").SOCKET_STATE.UNLAUNCHED &&
              o("WALogger").WARN(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "ServiceWorker container error: ",
                    "",
                  ])),
                e.error,
              );
          });
      } catch (e) {
        o("WALogger").WARN(
          d ||
            (d = babelHelpers.taggedTemplateLiteralLoose([
              '[sw container] add "error" listener failed: ',
              "",
            ])),
          e,
        );
      }
      g();
      var C = function (t, n) {
          t.buffer.forEach(function (e) {
            var t,
              r = (t = e.message[0]) != null ? t : "",
              a = "ServiceWorker (" + n + "): " + r,
              i = e.level.match(/^(.*?)(?:Verbose)?$/i),
              l = S(i[1]);
            o("WAWebLoggerImpl").Logger.logImpl(
              l,
              a,
              e.error,
              e.attachedToSendLogs,
              e.extraTags,
            );
          });
        },
        b = new (r("WAWebSWBus"))(function (e) {
          var t,
            n = e.action,
            a = e.message,
            i = e.version;
          switch (n) {
            case r("WAWebSWBusActions").REQUEST_STREAMING_INFO:
            case r("WAWebSWBusActions").EXP_BACKOFF:
            case r("WAWebSWBusActions").REQUEST_RMR:
            case r("WAWebSWBusActions").SEND_STREAMING_CHUNK:
            case r("WAWebSWBusActions").SCREEN_VIDEO_STREAM:
              return (t = f()) == null
                ? void 0
                : t.then(function (e) {
                    return e == null ? void 0 : e({ action: n, message: a });
                  });
            case r("WAWebSWBusActions").LOG:
              return o("WAWebSocketModel").Socket.state ===
                o("WAWebSocketConstants").SOCKET_STATE.UNLAUNCHED
                ? void 0
                : (a && C(a, i), { test: !0 });
            case r("WAWebSWBusActions").UPLOAD_LOGS:
              return (
                a && C(a, i),
                o("WAWebCrashlog")
                  .upload({ reason: "Requested by Service Worker" })
                  .then(r("WAWebNoop"))
              );
            case r("WAWebSWBusActions").HEARTBEAT:
              return a;
            case r("WAWebSWBusActions").ACCEPT_CALL_FROM_NOTIFICATION:
              return { handled: v("accept_call", a) };
            case r("WAWebSWBusActions").DECLINE_CALL_FROM_NOTIFICATION:
              return { handled: v("decline_call", a) };
            case r("WAWebSWBusActions").NOTIFICATION_BANNER_CLICKED:
              return (
                o(
                  "WAWebRecordNotificationInteraction",
                ).recordNotificationInteraction(),
                {
                  handled: o(
                    "WAWebSwNotificationBannerRegistry",
                  ).handleSwNotificationBannerClick(
                    a == null ? void 0 : a.bannerKey,
                  ),
                }
              );
            case r("WAWebSWBusActions").NOTIFICATION_BANNER_CLOSED:
              return (
                (a == null ? void 0 : a.isUserClose) === !0 &&
                  o(
                    "WAWebRecordNotificationInteraction",
                  ).recordNotificationInteraction(),
                {
                  handled: o(
                    "WAWebSwNotificationBannerRegistry",
                  ).handleSwNotificationBannerClose(
                    a == null ? void 0 : a.bannerKey,
                    (a == null ? void 0 : a.isUserClose) === !0,
                  ),
                }
              );
            case r("WAWebSWBusActions").NOTIFICATION_INTERACTION:
              return (
                o(
                  "WAWebRecordNotificationInteraction",
                ).recordNotificationInteraction(),
                { handled: !0 }
              );
            case r("WAWebSWBusActions").CALL_NOTIFICATION_INTERACTION:
              return (
                o(
                  "WAWebRecordNotificationInteraction",
                ).recordNotificationInteraction(),
                _.load().then(function (e) {
                  return {
                    handled: e.recordServiceWorkerCallNotificationInteraction(
                      a == null ? void 0 : a.callId,
                      a == null ? void 0 : a.interaction,
                    ),
                  };
                })
              );
            default:
              return Promise.reject(r("err")("Invalid Action: " + n));
          }
        });
      (b.init(),
        o("WAWebCmd").Cmd.on("logout_from_bridge", function () {
          var e = navigator.serviceWorker;
          e != null &&
            e.controller &&
            r("WAWebSWBus")
              .request(e.controller, r("WAWebSWBusActions").LOGOUT)
              .catch(r("WAWebNoop"));
        }));
    }
    function v(e, t) {
      o("WAWebRecordNotificationInteraction").recordNotificationInteraction();
      var n = !1;
      return (
        r("WAWebVoipNotificationActionBus").trigger(e, {
          callId: t == null ? void 0 : t.callId,
          claim: function () {
            return n ? !1 : ((n = !0), !0);
          },
        }),
        n &&
          o("WAWebUserPrefsGeneral")
            .addToNotificationEngagement(
              e === "accept_call"
                ? { totalNotifRtcVoipAccept: 1 }
                : { totalNotifRtcVoipDecline: 1 },
            )
            .catch(function (t) {
              o("WALogger")
                .ERROR(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "[sw] failed to count call notification action ",
                      "",
                    ])),
                  e,
                )
                .catching(r("getErrorSafe")(t))
                .sendLogs("count-call-notification-action-failed");
            }),
        n
      );
    }
    function S(e) {
      switch (e) {
        case "info":
          return 1;
        case "log":
          return 2;
        case "warn":
          return 3;
        case "error":
          return 4;
      }
      throw r("err")("Invalid level: " + e);
    }
  },
  34,
);
