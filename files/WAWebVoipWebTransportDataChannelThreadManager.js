__d(
  "WAWebVoipWebTransportDataChannelThreadManager",
  [
    "WALogger",
    "WAWebVoipWebTransportDataChannelThread",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = null,
      c = null;
    function d() {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (c != null && c.isActive()) return !0;
          u == null &&
            (o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [WebTransportThread] Creating dedicated WebTransport pthread",
                ])),
            ),
            (u = r("WAWebVoipWebTransportDataChannelThread").create()));
          try {
            return ((c = yield u), c.isActive());
          } catch (e) {
            return (
              o("WALogger").ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [WebTransportThread] Failed to create pthread: ",
                    "",
                  ])),
                e,
              ),
              (u = null),
              !1
            );
          }
        })),
        m.apply(this, arguments)
      );
    }
    function p() {
      return c != null && c.isActive() ? c : null;
    }
    function _() {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          u = null;
          var e = c;
          ((c = null), e != null && e.isActive() && (yield e.shutdown()));
        })),
        f.apply(this, arguments)
      );
    }
    ((l.initWebTransportDataChannelWorker = d),
      (l.getWebTransportDataChannelThread = p),
      (l.stopWebTransportDataChannelWorker = _));
  },
  98,
);
