__d(
  "WAWebCoexV2HostedContactUtils",
  ["WALogger", "WAWebApiContact", "asyncToGeneratorRuntime", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          try {
            var n = yield o("WAWebApiContact").getContactRecord(t);
            return (n == null ? void 0 : n.isHosted) === !0;
          } catch (t) {
            return (
              o("WALogger")
                .WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[coexv2] relay: failed to read peer contact record",
                    ])),
                )
                .catching(r("getErrorSafe")(t))
                .sendLogs("coexv2-peer-hosted-read-failed"),
              !1
            );
          }
        })),
        u.apply(this, arguments)
      );
    }
    l.isPeerCoexV2Hosted = s;
  },
  98,
);
