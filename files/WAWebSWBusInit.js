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
    "WAWebSafariTakeover",
    "WAWebSocketConstants",
    "WAWebSocketModel",
    "asyncToGeneratorRuntime",
    "err",
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
      );
    function _() {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return (yield p.load()).handleVideoStreamingRequest;
        })),
        f.apply(this, arguments)
      );
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
                'Unable to add "error" event listener to service worker, error: ',
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
              'Unable to add "controllerchange" event listener to service worker container, error: ',
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
              'Unable to add "error" event listener to service worker container, error: ',
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
              l = v(i[1]);
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
            a = e.action,
            i = e.message,
            l = e.version;
          switch (a) {
            case r("WAWebSWBusActions").REQUEST_STREAMING_INFO:
            case r("WAWebSWBusActions").EXP_BACKOFF:
            case r("WAWebSWBusActions").REQUEST_RMR:
            case r("WAWebSWBusActions").SEND_STREAMING_CHUNK:
              return (t = _()) == null
                ? void 0
                : t.then(function (e) {
                    return e == null ? void 0 : e({ action: a, message: i });
                  });
            case r("WAWebSWBusActions").LOG:
              return o("WAWebSocketModel").Socket.state ===
                o("WAWebSocketConstants").SOCKET_STATE.UNLAUNCHED
                ? void 0
                : (i && C(i, l), { test: !0 });
            case r("WAWebSWBusActions").UPLOAD_LOGS:
              return (
                i && C(i, l),
                o("WAWebCrashlog")
                  .upload({ reason: "Requested by Service Worker" })
                  .then(r("WAWebNoop"))
              );
            case r("WAWebSWBusActions").ACTIVE_TAB:
              return { isActive: o("WAWebSafariTakeover").getIsTabActive() };
            case r("WAWebSWBusActions").HEARTBEAT:
              return i;
            default:
              return (m || (m = n("Promise"))).reject(
                r("err")("Invalid Action: " + a),
              );
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
    function v(e) {
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
