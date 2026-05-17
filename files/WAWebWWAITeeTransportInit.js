__d(
  "WAWebWWAITeeTransportInit",
  ["WALogger", "WAWebWWAITeeTransport", "WAWebWWAITransportRegistry"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = !1;
    function c() {
      if (!u) {
        var t = new (r("WAWebWWAITeeTransport"))();
        t.isAvailable()
          ? ((u = !0),
            o("WAWebWWAITransportRegistry").registerTransport(t),
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[WWAI][TEE] TEE transport registered",
                ])),
            ))
          : o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[WWAI][TEE] TEE transport not available, keeping current transport",
                ])),
            );
      }
    }
    l.default = c;
  },
  98,
);
