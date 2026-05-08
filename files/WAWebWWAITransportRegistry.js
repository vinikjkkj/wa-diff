__d(
  "WAWebWWAITransportRegistry",
  ["WALogger"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = null;
    function u(e) {
      s = e;
    }
    function c() {
      return s;
    }
    function d() {
      return s != null && s.isAvailable();
    }
    function m() {
      s == null &&
        o("WALogger")
          .WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[WWAI] No transport registered. TEE connection not available.",
              ])),
          )
          .sendLogs("wwai-transport-missing");
    }
    function p() {
      s = null;
    }
    ((l.registerTransport = u),
      (l.getTransport = c),
      (l.isTransportAvailable = d),
      (l.logTransportMissing = m),
      (l.resetForTesting = p));
  },
  98,
);
