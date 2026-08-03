__d(
  "WAWebBloksSendFieldStat",
  [
    "WALogger",
    "WAWebA2UIRenderTiming",
    "WAWebBloksSendFieldStatUtils",
    "WAWebWamCodegenWamEvent",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t, n, r, a, i, l) {
      var s = o("WAWebBloksSendFieldStatUtils").parseFieldStatFields(l);
      if (s == null) {
        o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "WAWebBloksSendFieldStat: malformed fields payload",
              ])),
          )
          .sendLogs("wa-web-bloks-send-field-stat-malformed");
        return;
      }
      (new (o("WAWebWamCodegenWamEvent").RawWamEvent)(
        babelHelpers.extends({}, s, { id: r }),
      ).commit(),
        o("WAWebA2UIRenderTiming").maybeEndA2UIRenderMarkerFromFieldStat(r, s));
    }
    l.default = s;
  },
  98,
);
