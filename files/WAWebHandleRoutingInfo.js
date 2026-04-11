__d(
  "WAWebHandleRoutingInfo",
  ["WAHex", "WALogger", "WAWebUserPrefsMultiDevice", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = { fb: "fb", sl: "sl" };
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.domain;
          if (!n) {
            var r = yield o("WAWebUserPrefsMultiDevice").getRoutingInfo();
            n = r ? r.domain : s.fb;
          }
          var a = o("WAHex").bytesToBuffer(t.edgeRouting);
          (yield o("WAWebUserPrefsMultiDevice").setRoutingInfo({
            domain: n,
            edgeRouting: a,
          }),
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "handleInfoBulletin setting and domain: ",
                  " and edgeRouting:",
                ])),
              n,
            ));
        })),
        c.apply(this, arguments)
      );
    }
    ((l.DOMAINS = s), (l.handleRoutingInfo = u));
  },
  98,
);
