__d(
  "WAWebCommsSendPing",
  [
    "WAComms",
    "WACustomError",
    "WALogger",
    "WAPromiseTimeout",
    "WATimeUtils",
    "WAWebABProps",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = null;
    async function m() {
      if (d != null) return d;
      var t = o("WAWebABProps").getABPropConfigValue(
        "web_offline_resume_wait_for_ping_timeout_seconds",
      );
      async function n() {
        try {
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "blockSendPing: sending ping...",
              ])),
          );
          var n = await o("WAPromiseTimeout").promiseTimeout(
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
      }
      return ((d = n()), d);
    }
    function p(e) {
      o("WATimeUtils").setClockSkew(e);
    }
    ((l.blockSendPing = m), (l.updateClockSkew = p));
  },
  98,
);
