__d(
  "cometUFIComposerMentionsPlugin",
  [
    "CometRelay",
    "cometUFIComposerMentionsPlugin_plugin.graphql",
    "cometUFIComposerMentionsPlugin_pluginData.graphql",
    "react",
    "react-compiler-runtime",
    "requireDeferred",
    "useDeferredModuleOnReady",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = u || (u = o("react")),
      d = r("requireDeferred")(
        "createUpgradedUFI2MentionsComposerPluginForLexical",
      ).__setRef("cometUFIComposerMentionsPlugin");
    e !== void 0 || (e = n("cometUFIComposerMentionsPlugin_plugin.graphql"));
    function m(e) {
      var t = o("react-compiler-runtime").c(4),
        n = e.pluginProps,
        a = e.config,
        i = e.upgradedPluginDeferred_FOR_DRAFTJS_AND_OUTLINE,
        l = r("useDeferredModuleOnReady")(i);
      if (l == null) return null;
      var s;
      return (
        t[0] !== l || t[1] !== a || t[2] !== n
          ? ((s = c.jsx(l, { config: a, pluginProps: n })),
            (t[0] = l),
            (t[1] = a),
            (t[2] = n),
            (t[3] = s))
          : (s = t[3]),
        s
      );
    }
    function p(e) {
      var t = e.fragmentKey,
        r = o("CometRelay").readInlineData(
          s !== void 0
            ? s
            : (s = n("cometUFIComposerMentionsPlugin_pluginData.graphql")),
          t,
        ),
        a = r.context_id,
        i = r.post_id;
      return {
        above: null,
        action: null,
        below: m,
        id: "mentions",
        inside: null,
        props: {
          config: { contextID: a, groupID: null, postID: i },
          upgradedPluginDeferred_FOR_DRAFTJS_AND_OUTLINE: d,
        },
      };
    }
    l.default = p;
  },
  98,
);
