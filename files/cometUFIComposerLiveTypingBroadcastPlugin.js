__d(
  "cometUFIComposerLiveTypingBroadcastPlugin",
  [
    "CometRelay",
    "CometUFILiveTypingBroadcastComposerPluginInner.react",
    "cometUFIComposerLiveTypingBroadcastPlugin_plugin.graphql",
    "cometUFIComposerLiveTypingBroadcastPlugin_pluginData.graphql",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    e !== void 0 ||
      (e = n("cometUFIComposerLiveTypingBroadcastPlugin_plugin.graphql"));
    function u(e) {
      var t = e.environment,
        a = e.fragmentKey,
        i = o("CometRelay").readInlineData(
          s !== void 0
            ? s
            : (s = n(
                "cometUFIComposerLiveTypingBroadcastPlugin_pluginData.graphql",
              )),
          a,
        ),
        l = { id: i.feedback_id, viewer_actor: i.viewer_actor };
      return {
        above: null,
        action: null,
        below: r("CometUFILiveTypingBroadcastComposerPluginInner.react"),
        id: "typing_broadcast",
        inside: null,
        props: { feedback: l, relayEnvironment: t },
      };
    }
    l.default = u;
  },
  98,
);
