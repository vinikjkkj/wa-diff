__d(
  "WAWebDebugSmax",
  ["JSResourceForInteraction", "WAComms"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    async function e(e) {
      var t,
        n = e.mockFilePath,
        o = e.mockName,
        a = e.response,
        i = e.variables,
        l = await r("JSResourceForInteraction")("WAWebCommsE2ESmaxMockInjector")
          .__setRef("WAWebDebugSmax")
          .load(),
        s = l,
        u = a == null ? {} : ((t = {}), (t[o] = a), t);
      (await s.init({ mockFilePaths: [n], responseMap: u, variables: i }),
        s.start(o));
    }
    e.doc = "Initialize a smax runner instance in debug";
    async function s() {
      var e = await r("JSResourceForInteraction")(
        "WAWebCommsE2ESmaxMockInjector",
      )
        .__setRef("WAWebDebugSmax")
        .load();
      return e;
    }
    s.doc = "Get the global smax runner instance in debug";
    var u = {
      initSmaxRunner: e,
      getSmaxRunner: s,
      sendSmaxStanza: o("WAComms").sendSmaxStanza,
    };
    l.default = u;
  },
  98,
);
