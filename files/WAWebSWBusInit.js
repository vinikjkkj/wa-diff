__d(
  "WAWebSWBusInit",
  [
    "Promise",
    "WALogger",
    "WAWebCmd",
    "WAWebCrashlog",
    "WAWebFeatureDetectionSwSupport",
    "WAWebLoggerImpl",
    "WAWebNoop",
    "WAWebSWBus",
    "WAWebSWBusActions",
    "WAWebSocketConstants",
    "WAWebSocketModel",
    "WAWebSwNotificationBannerRegistry",
    "WAWebUserPrefsGeneral",
    "WAWebVoipNotificationActionBus",
    "asyncToGeneratorRuntime",
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
      p,
      _ = r("requireDeferred")("WAWebPipVideoStreaming").__setRef(
        "WAWebSWBusInit",
      ),
      f = r("requireDeferred")(
        "WAWebVoipIncomingCallNotificationStateStore",
      ).__setRef("WAWebSWBusInit");
    function g() {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return (yield _.load()).handleVideoStreamingRequest;
        })),
        h.apply(this, arguments)
      );
    }
    if (r("WAWebFeatureDetectionSwSupport").supported) {
      var y = function () {
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
        var C = navigator.serviceWorker;
        C &&
          C.addEventListener("controllerchange", function (e) {
            y();
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
        var b = navigator.serviceWorker;
        b &&
          b.addEventListener("error", function (e) {
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
      y();
      var v = function (t, n) {
          t.buffer.forEach(function (e) {
            var t,
              r = (t = e.message[0]) != null ? t : "",
              a = "ServiceWorker (" + n + "): " + r,
              i = e.level.match(/^(.*?)(?:Verbose)?$/i),
              l = L(i[1]);
            o("WAWebLoggerImpl").Logger.logImpl(
              l,
              a,
              e.error,
              e.attachedToSendLogs,
              e.extraTags,
            );
          });
        },
        S = new (r("WAWebSWBus"))(function (e) {
          var t,
            a = e.action,
            i = e.message,
            l = e.version;
          switch (a) {
            case r("WAWebSWBusActions").REQUEST_STREAMING_INFO:
            case r("WAWebSWBusActions").EXP_BACKOFF:
            case r("WAWebSWBusActions").REQUEST_RMR:
            case r("WAWebSWBusActions").SEND_STREAMING_CHUNK:
              return (t = g()) == null
                ? void 0
                : t.then(function (e) {
                    return e == null ? void 0 : e({ action: a, message: i });
                  });
            case r("WAWebSWBusActions").LOG:
              return o("WAWebSocketModel").Socket.state ===
                o("WAWebSocketConstants").SOCKET_STATE.UNLAUNCHED
                ? void 0
                : (i && v(i, l), { test: !0 });
            case r("WAWebSWBusActions").UPLOAD_LOGS:
              return (
                i && v(i, l),
                o("WAWebCrashlog")
                  .upload({ reason: "Requested by Service Worker" })
                  .then(r("WAWebNoop"))
              );
            case r("WAWebSWBusActions").HEARTBEAT:
              return i;
            case r("WAWebSWBusActions").ACCEPT_CALL_FROM_NOTIFICATION:
              return { handled: R("accept_call", i) };
            case r("WAWebSWBusActions").DECLINE_CALL_FROM_NOTIFICATION:
              return { handled: R("decline_call", i) };
            case r("WAWebSWBusActions").NOTIFICATION_BANNER_CLICKED:
              return {
                handled: o(
                  "WAWebSwNotificationBannerRegistry",
                ).handleSwNotificationBannerClick(
                  i == null ? void 0 : i.bannerKey,
                ),
              };
            case r("WAWebSWBusActions").NOTIFICATION_BANNER_CLOSED:
              return {
                handled: o(
                  "WAWebSwNotificationBannerRegistry",
                ).handleSwNotificationBannerClose(
                  i == null ? void 0 : i.bannerKey,
                  (i == null ? void 0 : i.isUserClose) === !0,
                ),
              };
            case r("WAWebSWBusActions").CALL_NOTIFICATION_INTERACTION:
              return f.load().then(function (e) {
                return {
                  handled: e.recordServiceWorkerCallNotificationInteraction(
                    i == null ? void 0 : i.callId,
                    i == null ? void 0 : i.interaction,
                  ),
                };
              });
            default:
              return (p || (p = n("Promise"))).reject(
                r("err")("Invalid Action: " + a),
              );
          }
        });
      (S.init(),
        o("WAWebCmd").Cmd.on("logout_from_bridge", function () {
          var e = navigator.serviceWorker;
          e != null &&
            e.controller &&
            r("WAWebSWBus")
              .request(e.controller, r("WAWebSWBusActions").LOGOUT)
              .catch(r("WAWebNoop"));
        }));
    }
    function R(e, t) {
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
    function L(e) {
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
