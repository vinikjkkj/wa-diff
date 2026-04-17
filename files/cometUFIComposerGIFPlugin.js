__d(
  "cometUFIComposerGIFPlugin",
  [
    "CometRelay",
    "CometUFIGIFComposerPluginInner.react",
    "CometUFIInsertGIFComposerActionForLexical.react",
    "cometUFIComposerGIFPlugin_plugin.graphql",
    "cometUFIComposerGIFPlugin_pluginData.graphql",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    e !== void 0 || (e = n("cometUFIComposerGIFPlugin_plugin.graphql"));
    function u(e) {
      var t = e.pluginProps,
        n = t.composerState;
      return !n || !n.attachment
        ? r("CometUFIInsertGIFComposerActionForLexical.react")
        : null;
    }
    function c(e) {
      var t = e.fragmentKey,
        a = o("CometRelay").readInlineData(
          s !== void 0
            ? s
            : (s = n("cometUFIComposerGIFPlugin_pluginData.graphql")),
          t,
        );
      return {
        above: null,
        action: u,
        below: r("CometUFIGIFComposerPluginInner.react"),
        id: "gifs",
        inside: null,
        props: { ftentidentifier: a.feedback_id },
      };
    }
    l.default = c;
  },
  98,
);
