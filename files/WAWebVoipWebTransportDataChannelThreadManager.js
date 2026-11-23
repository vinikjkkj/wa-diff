__d(
  "WAWebVoipWebTransportDataChannelThreadManager",
  [
    "WACustomError",
    "WALogger",
    "WAWebCoreActionsODS",
    "WAWebNoop",
    "WAWebVoipPthreadHardening",
    "WAWebVoipWebTransportDataChannelThread",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d = null,
      m = null,
      p = 0;
    async function _(e) {
      var t = m;
      if (t != null) {
        if (t.isActive()) return !0;
        ((m = null), (d = null), p++, await h(t));
      }
      var n = d;
      if (n == null) {
        var r = p;
        ((n = Promise.resolve().then(function () {
          return f(r, e);
        })),
          (d = n));
      }
      var o = await n;
      return o == null || !o.isActive() ? (d === n && (d = null), !1) : !0;
    }
    async function f(t, n) {
      o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [WebTransportThread] Creating dedicated WebTransport pthread",
          ])),
      );
      var a;
      try {
        a = await r("WAWebVoipWebTransportDataChannelThread").create(n);
      } catch (e) {
        return (
          o("WALogger")
            .ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [WebTransportThread] Failed to create pthread",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("webtransport-pthread-create-failed"),
          t === p && (d = null),
          null
        );
      }
      return t !== p || !a.isActive()
        ? (o(
            "WAWebVoipPthreadHardening",
          ).isVoipWorkerLifecycleHardeningEnabled()
            ? h(a)
            : await h(a),
          null)
        : ((m = a), a);
    }
    function g() {
      return m != null && m.isActive() ? m : null;
    }
    async function h(e) {
      e.registerStateHandler(r("WAWebNoop"));
      try {
        await e.shutdown();
      } catch (e) {
        if (e instanceof o("WACustomError").TimeoutError) {
          (o("WAWebCoreActionsODS").logCallWebtransportJsWorkerJoinTimeout(),
            o("WALogger").WARN(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [WebTransportThread] pthread join timed out: ",
                  "",
                ])),
              String(e),
            ));
          return;
        }
        o("WALogger")
          .ERROR(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [WebTransportThread] Failed to shut down pthread",
              ])),
          )
          .catching(r("getErrorSafe")(e))
          .sendLogs("webtransport-pthread-shutdown-failed");
      }
    }
    async function y() {
      (p++, (d = null));
      var e = m;
      ((m = null), e != null && (await h(e)));
    }
    ((l.initWebTransportDataChannelWorker = _),
      (l.getWebTransportDataChannelThread = g),
      (l.stopWebTransportDataChannelWorker = y));
  },
  98,
);
