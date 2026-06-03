__d(
  "WAWebDebugSmax",
  ["JSResourceForInteraction", "WAComms", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = e.mockFilePath,
            o = e.mockName,
            a = e.response,
            i = e.variables,
            l = yield r("JSResourceForInteraction")(
              "WAWebCommsE2ESmaxMockInjector",
            )
              .__setRef("WAWebDebugSmax")
              .load(),
            s = l,
            u = a == null ? {} : ((t = {}), (t[o] = a), t);
          (yield s.init({ mockFilePaths: [n], responseMap: u, variables: i }),
            s.start(o));
        })),
        s.apply(this, arguments)
      );
    }
    e.doc = "Initialize a smax runner instance in debug";
    function u() {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield r("JSResourceForInteraction")(
            "WAWebCommsE2ESmaxMockInjector",
          )
            .__setRef("WAWebDebugSmax")
            .load();
          return e;
        })),
        c.apply(this, arguments)
      );
    }
    u.doc = "Get the global smax runner instance in debug";
    var d = {
      initSmaxRunner: e,
      getSmaxRunner: u,
      sendSmaxStanza: o("WAComms").sendSmaxStanza,
    };
    l.default = d;
  },
  98,
);
