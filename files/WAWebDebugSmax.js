__d(
  "WAWebDebugSmax",
  ["JSResourceForInteraction", "WAComms", "vulture"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    async function e(e) {
      var t;
      r("vulture")("Aqh2JCiORSjecuV7cWz7upUIiaY=");
      var n = e.mockFilePath,
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
      r("vulture")("SBHnKY5SrMyTkdpt07DysJerC6A=");
      var e = await r("JSResourceForInteraction")(
        "WAWebCommsE2ESmaxMockInjector",
      )
        .__setRef("WAWebDebugSmax")
        .load();
      return e;
    }
    s.doc = "Get the global smax runner instance in debug";
    async function u(e) {
      r("vulture")("vre7-iQyYAZc7iSfQ_-kF0-sWm8=");
      var t = await r("JSResourceForInteraction")(
        "WAWebCommsE2ESmaxMockInjector",
      )
        .__setRef("WAWebDebugSmax")
        .load();
      return t.receiveServerStanzaXml(e);
    }
    u.doc =
      "Inject a server stanza from XML into the inbound pipeline (WAP-encodes via smax, decodes, then handleStanza)";
    var c = {
      initSmaxRunner: e,
      getSmaxRunner: s,
      receiveServerStanzaXml: u,
      sendSmaxStanza: o("WAComms").sendSmaxStanza,
    };
    l.default = c;
  },
  98,
);
