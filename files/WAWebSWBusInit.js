__d(
  "WAWebSWBusInit",
  [
    "WALogger",
    "WAWebCmd",
    "WAWebCrashlog",
    "WAWebFeatureDetectionSwSupport",
    "WAWebLoggerImpl",
    "WAWebNoop",
    "WAWebSWBus",
    "WAWebSWBusActions",
    "WAWebSafariTakeover",
    "WAWebSocketConstants",
    "WAWebSocketModel",
    "err",
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m = r("requireDeferred")("WAWebPipVideoStreaming").__setRef(
        "WAWebSWBusInit",
      );
    async function p() {
      return (await m.load()).handleVideoStreamingRequest;
    }
    if (r("WAWebFeatureDetectionSwSupport").supported) {
      var _ = function () {
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
        var f = navigator.serviceWorker;
        f &&
          f.addEventListener("controllerchange", function (e) {
            _();
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
        var g = navigator.serviceWorker;
        g &&
          g.addEventListener("error", function (e) {
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
      _();
      var h = function (t, n) {
          t.buffer.forEach(function (e) {
            var t,
              r = (t = e.message[0]) != null ? t : "",
              a = "ServiceWorker (" + n + "): " + r,
              i = e.level.match(/^(.*?)(?:Verbose)?$/i),
              l = C(i[1]);
            o("WAWebLoggerImpl").Logger.logImpl(
              l,
              a,
              e.error,
              e.attachedToSendLogs,
              e.extraTags,
            );
          });
        },
        y = new (r("WAWebSWBus"))(function (e) {
          var t,
            n = e.action,
            a = e.message,
            i = e.version;
          switch (n) {
            case r("WAWebSWBusActions").REQUEST_STREAMING_INFO:
            case r("WAWebSWBusActions").EXP_BACKOFF:
            case r("WAWebSWBusActions").REQUEST_RMR:
            case r("WAWebSWBusActions").SEND_STREAMING_CHUNK:
              return (t = p()) == null
                ? void 0
                : t.then(function (e) {
                    return e == null ? void 0 : e({ action: n, message: a });
                  });
            case r("WAWebSWBusActions").LOG:
              return o("WAWebSocketModel").Socket.state ===
                o("WAWebSocketConstants").SOCKET_STATE.UNLAUNCHED
                ? void 0
                : (a && h(a, i), { test: !0 });
            case r("WAWebSWBusActions").UPLOAD_LOGS:
              return (
                a && h(a, i),
                o("WAWebCrashlog")
                  .upload({ reason: "Requested by Service Worker" })
                  .then(r("WAWebNoop"))
              );
            case r("WAWebSWBusActions").ACTIVE_TAB:
              return { isActive: o("WAWebSafariTakeover").getIsTabActive() };
            case r("WAWebSWBusActions").HEARTBEAT:
              return a;
            default:
              return Promise.reject(r("err")("Invalid Action: " + n));
          }
        });
      (y.init(),
        o("WAWebCmd").Cmd.on("logout_from_bridge", function () {
          var e = navigator.serviceWorker;
          e != null &&
            e.controller &&
            r("WAWebSWBus")
              .request(e.controller, r("WAWebSWBusActions").LOGOUT)
              .catch(r("WAWebNoop"));
        }));
    }
    function C(e) {
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
