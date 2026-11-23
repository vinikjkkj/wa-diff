__d(
  "WAWebOfflineSimulator",
  [
    "WAComms",
    "WALogger",
    "WAWebOfflineSimulatorGenerator",
    "WAWebOfflineSimulatorTraffic",
    "WAWebOfflineSimulatorTypes",
    "WAWebUserPrefsMultiDeviceDebug",
    "WAWebWid",
    "WAWebWidFactory",
    "compactMap",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    async function u() {
      var e = d(),
        t = {};
      for (var n in e)
        if (Object.hasOwn(e, n)) {
          var a = e[n];
          t[n] = r("compactMap")(a, c);
        }
      var i = await o("WAWebOfflineSimulatorGenerator").createTrafficHandler(
        r("nullthrows")(o("WAComms").getComms()),
        t,
      );
      await i.receiveAll();
    }
    function c(e) {
      var t,
        n,
        a,
        i,
        l =
          (t = o("WAWebOfflineSimulatorTypes").OfflineSimuilatorItemType.cast(
            e.type,
          )) != null
            ? t
            : o("WAWebOfflineSimulatorTypes").OfflineSimuilatorItemType.Msg,
        s =
          e.from instanceof r("WAWebWid")
            ? e.from
            : o("WAWebWidFactory").createWid(e.from),
        u = e.to != null ? o("WAWebWidFactory").createWid(e.to) : void 0,
        c =
          e.reactionFrom != null
            ? o("WAWebWidFactory").createWid(e.reactionFrom)
            : void 0,
        d = e.count;
      if (typeof d == "number")
        return {
          count: d,
          from: s,
          to: u,
          type: l,
          randomLid: (n = e.randomLid) != null ? n : !1,
          randomNotify: (a = e.randomNotify) != null ? a : !1,
          randomSender: (i = e.randomSender) != null ? i : !1,
          reactionFrom: c,
        };
    }
    function d() {
      var t = o("WAWebUserPrefsMultiDeviceDebug").getDebugOfflineMockTraffic();
      return t != null
        ? (o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "mockOfflineTraffic: found traffic config in user prefs",
              ])),
          ),
          t)
        : (o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "mockOfflineTraffic: using default traffic.js",
              ])),
          ),
          r("WAWebOfflineSimulatorTraffic"));
    }
    l.default = u;
  },
  98,
);
