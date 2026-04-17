__d(
  "cometUFIComposerEmoticonPlugin",
  [
    "CometRelay",
    "CometUFIEmoticonsComposerPluginInner.react",
    "cometUFIComposerEmoticonPlugin_plugin.graphql",
    "cometUFIComposerEmoticonPlugin_pluginData.graphql",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    e !== void 0 || (e = n("cometUFIComposerEmoticonPlugin_plugin.graphql"));
    function u(e) {
      var t,
        a = e.fragmentKey,
        i = o("CometRelay").readInlineData(
          s !== void 0
            ? s
            : (s = n("cometUFIComposerEmoticonPlugin_pluginData.graphql")),
          a,
        );
      return {
        above: null,
        action: null,
        below: r("CometUFIEmoticonsComposerPluginInner.react"),
        id: "emoticons",
        inside: null,
        props: { size: (t = i.emoji_size) != null ? t : 16 },
      };
    }
    l.default = u;
  },
  98,
);
