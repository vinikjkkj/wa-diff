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
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          try {
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "blockSendPing: sending ping...",
                ])),
            );
            var n = yield o("WAPromiseTimeout").promiseTimeout(
              o("WAComms").sendPing(),
              t * 1e3,
            );
            return (
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "blockSendPing: is connected: ",
                    "",
                  ])),
                n,
              ),
              n
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
                  t,
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
        })),
        p.apply(this, arguments)
      );
    }
    function _() {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (d != null) return d;
          var e = o("WAWebABProps").getABPropConfigValue(
            "web_offline_resume_wait_for_ping_timeout_seconds",
          );
          return ((d = m(e)), d);
        })),
        f.apply(this, arguments)
      );
    }
    function g(e) {
      o("WATimeUtils").setClockSkew(e);
    }
    ((l.blockSendPing = _), (l.updateClockSkew = g));
  },
  98,
);
