__d(
  "WAWebOfflineSimulator",
  [
    "WAComms",
    "WALogger",
    "WAWebOfflineSimulatorGenerator",
    "WAWebOfflineSimulatorTraffic",
    "WAWebOfflineSimulatorTypes.flow",
    "WAWebUserPrefsMultiDeviceDebug",
    "WAWebWid",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "compactMap",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e) {
      var t,
        n,
        a,
        i,
        l =
          (t = o(
            "WAWebOfflineSimulatorTypes.flow",
          ).OfflineSimuilatorItemType.cast(e.type)) != null
            ? t
            : o("WAWebOfflineSimulatorTypes.flow").OfflineSimuilatorItemType
                .Msg,
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
    function c() {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = m(),
            t = {};
          for (var n in e)
            if (Object.prototype.hasOwnProperty.call(e, n)) {
              var a = e[n];
              t[n] = r("compactMap")(a, u);
            }
          var i = yield o(
            "WAWebOfflineSimulatorGenerator",
          ).createTrafficHandler(r("nullthrows")(o("WAComms").getComms()), t);
          yield i.receiveAll();
        })),
        d.apply(this, arguments)
      );
    }
    function m() {
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
    l.default = c;
  },
  98,
);
