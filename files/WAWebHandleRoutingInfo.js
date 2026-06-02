__d(
  "WAWebHandleRoutingInfo",
  ["WAHex", "WALogger", "WAWebUserPrefsMultiDevice"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = { fb: "fb", sl: "sl" };
    async function u(t) {
      var n = t.domain;
      if (!n) {
        var r = await o("WAWebUserPrefsMultiDevice").getRoutingInfo();
        n = r ? r.domain : s.fb;
      }
      var a = o("WAHex").bytesToBuffer(t.edgeRouting);
      (await o("WAWebUserPrefsMultiDevice").setRoutingInfo({
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
    }
    ((l.DOMAINS = s), (l.handleRoutingInfo = u));
  },
  98,
);
