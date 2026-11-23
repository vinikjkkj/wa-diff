__d(
  "WAWebCommsSendPing",
  [
    "WAComms",
    "WACustomError",
    "WALogger",
    "WAPromiseTimeout",
    "WATimeUtils",
    "WAWebABProps",
    "cr:2960",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = null;
    async function m(t) {
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
    async function p() {
      if (d != null) return d;
      var e = o("WAWebABProps").getABPropConfigValue(
        "web_offline_resume_wait_for_ping_timeout_seconds",
      );
      return ((d = m(e)), d);
    }
    function _(e) {
      (o("WATimeUtils").setClockSkew(e),
        n("cr:2960") == null || n("cr:2960").reportServerTimeFromPing(e));
    }
    ((l.blockSendPing = p), (l.updateClockSkew = _));
  },
  98,
);
