__d(
  "WAWebCommsSendPing",
  [
    "WAComms",
    "WACustomError",
    "WALogger",
    "WAPromiseTimeout",
    "WATimeUtils",
    "WAWebABProps",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = null;
    function m() {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (
            o("WAWebABProps").getABPropConfigValue(
              "web_offline_resume_wait_for_ping_response_enabled",
            )
          ) {
            var t = (function () {
              var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* () {
                  try {
                    o("WALogger").LOG(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "blockSendPing: sending ping...",
                        ])),
                    );
                    var t = yield o("WAPromiseTimeout").promiseTimeout(
                      o("WAComms").sendPing(),
                      r * 1e3,
                    );
                    return (
                      o("WALogger").LOG(
                        s ||
                          (s = babelHelpers.taggedTemplateLiteralLoose([
                            "blockSendPing: is connected: ",
                            "",
                          ])),
                        t,
                      ),
                      t
                    );
                  } catch (e) {
                    if (e instanceof o("WACustomError").TimeoutError)
                      return (
                        o("WALogger").LOG(
                          u ||
                            (u = babelHelpers.taggedTemplateLiteralLoose([
                              "blockSendPing: no response in ",
                              "s",
                            ])),
                          r,
                        ),
                        !1
                      );
                    throw (
                      o("WALogger").WARN(
                        c ||
                          (c = babelHelpers.taggedTemplateLiteralLoose([
                            "blockSendPing: failed to send ping: ",
                            "",
                          ])),
                        e,
                      ),
                      e
                    );
                  } finally {
                    d = null;
                  }
                },
              );
              return function () {
                return t.apply(this, arguments);
              };
            })();
            if (d != null) return d;
            var r = o("WAWebABProps").getABPropConfigValue(
              "web_offline_resume_wait_for_ping_timeout_seconds",
            );
            return ((d = t()), d);
          }
          return o("WAComms").sendPing();
        })),
        p.apply(this, arguments)
      );
    }
    function _(e) {
      o("WATimeUtils").setClockSkew(e);
    }
    ((l.blockSendPing = m), (l.updateClockSkew = _));
  },
  98,
);
