__d(
  "cometUFIComposerEmojiPlugin",
  [
    "CometRelay",
    "CometUFIComposerEmojiPluginInner.react",
    "CometUFIInsertEmojiComposerActionForLexical.react",
    "cometUFIComposerEmojiPlugin_plugin.graphql",
    "cometUFIComposerEmojiPlugin_pluginData.graphql",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    e !== void 0 || (e = n("cometUFIComposerEmojiPlugin_plugin.graphql"));
    function u(e) {
      var t,
        a = e.fragmentKey,
        i = o("CometRelay").readInlineData(
          s !== void 0
            ? s
            : (s = n("cometUFIComposerEmojiPlugin_pluginData.graphql")),
          a,
        ),
        l = { size: (t = i.emoji_size) != null ? t : 16 };
      return {
        above: null,
        action: function () {
          return r("CometUFIInsertEmojiComposerActionForLexical.react");
        },
        below: r("CometUFIComposerEmojiPluginInner.react"),
        id: "emoji",
        inside: null,
        props: l,
      };
    }
    l.default = u;
  },
  98,
);
