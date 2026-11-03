__d(
  "WAWebSetPushConfigJob",
  [
    "WABase64",
    "WALogger",
    "WAPromiseTimeout",
    "WASmaxPushConfigSetRPC",
    "WAWebBackendApi",
    "asyncToGeneratorRuntime",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = 3e4;
    function c(e, t) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var a = yield o("WAWebBackendApi").frontendSendAndReceive(
              "getDeviceInfo",
              void 0,
            ),
            i = o("WASmaxPushConfigSetRPC").sendSetRPC(
              {
                setSetConfigOrSetClearMixinGroupArgs: {
                  setSetConfig: {
                    configMixinsArgs: {
                      webClient: {
                        configEndpoint: t.endpoint,
                        configAuth: o("WABase64").encodeB64(
                          r("nullthrows")(t.getKey("auth")),
                        ),
                        configP256dh: o("WABase64").encodeB64(
                          r("nullthrows")(t.getKey("p256dh")),
                        ),
                        configLg: a.lg,
                        configLc: a.lc,
                        configPushPreferences: n,
                      },
                    },
                  },
                },
              },
              n != null ? { withoutRetry: !0 } : void 0,
            ),
            l = yield n == null
              ? i
              : o("WAPromiseTimeout").promiseTimeout(
                  i,
                  u,
                  "setPushConfig: no reply",
                ),
            c = (function (e) {
              if (
                ((typeof e == "object" && e !== null) ||
                  typeof e == "function") &&
                e.name === "SetResponseSuccess"
              )
                return null;
              if (
                ((typeof e == "object" && e !== null) ||
                  typeof e == "function") &&
                e.name === "SetResponseBadRequest" &&
                "value" in e
              ) {
                var t = e.value;
                return t.errorIQErrorBadRequestMixin;
              }
              if (
                ((typeof e == "object" && e !== null) ||
                  typeof e == "function") &&
                e.name === "SetResponseInternalServerError" &&
                "value" in e
              ) {
                var n = e.value;
                return n.errorIQErrorInternalServerErrorMixin;
              }
              if (
                ((typeof e == "object" && e !== null) ||
                  typeof e == "function") &&
                e.name === "SetResponseConflict" &&
                "value" in e
              ) {
                var r = e.value;
                return r.errorIQErrorConflictMixin;
              }
              throw Error(
                "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                  e,
              );
            })(l);
          if (c == null) {
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
          var d = c.code,
            m = c.text;
          return (
            o("WALogger")
              .WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "setPushConfig: server response with ",
                    ", ",
                    "",
                  ])),
                d,
                m,
              )
              .tags("push-notification"),
            { errorCode: d, errorText: m }
          );
        })),
        d.apply(this, arguments)
      );
    }
    l.setPushConfig = c;
  },
  98,
);
