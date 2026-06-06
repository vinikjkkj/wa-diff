__d(
  "WAWebSetPushConfigJob",
  [
    "WABase64",
    "WALogger",
    "WANullthrows",
    "WASmaxPushConfigSetRPC",
    "WAWebBackendApi",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = yield o("WAWebBackendApi").frontendSendAndReceive(
              "getDeviceInfo",
              void 0,
            ),
            a = yield o("WASmaxPushConfigSetRPC").sendSetRPC({
              setSetConfigOrSetClearMixinGroupArgs: {
                setSetConfig: {
                  configMixinsArgs: {
                    webClient: {
                      configEndpoint: t.endpoint,
                      configAuth: o("WABase64").encodeB64(
                        r("WANullthrows")(t.getKey("auth")),
                      ),
                      configP256dh: o("WABase64").encodeB64(
                        r("WANullthrows")(t.getKey("p256dh")),
                      ),
                      configLg: n.lg,
                      configLc: n.lc,
                    },
                  },
                },
              },
            });
          if (a.name === "SetResponseSuccess") {
            o("WALogger")
              .LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "setPushConfig: success",
                  ])),
              )
              .tags("push-notification");
            return;
          }
          if (a.name === "SetResponseInternalServerError") {
            var i = a.value.errorIQErrorInternalServerErrorMixin,
              l = i.code,
              c = i.text;
            return (
              o("WALogger")
                .WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "setPushConfig: server response with ",
                      ", ",
                      "",
                    ])),
                  l,
                  c,
                )
                .tags("push-notification"),
              { errorCode: l, errorText: c }
            );
          }
          if (a.name === "SetResponseConflict") {
            var d = a.value.errorIQErrorConflictMixin,
              m = d.code,
              p = d.text;
            return (
              o("WALogger")
                .WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "setPushConfig: server response with ",
                      ", ",
                      "",
                    ])),
                  m,
                  p,
                )
                .tags("push-notification"),
              { errorCode: m, errorText: p }
            );
          }
        })),
        d.apply(this, arguments)
      );
    }
    l.setPushConfig = c;
  },
  98,
);
