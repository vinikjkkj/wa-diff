__d(
  "cometUFIComposerStickersPlugin.next",
  [
    "CometRelay",
    "CometUFIInsertStickerComposerActionForLexical.react",
    "CometUFIStickersComposerPluginInner.react",
    "cometUFIComposerStickersPlugin_next_plugin.graphql",
    "cometUFIComposerStickersPlugin_next_pluginData.graphql",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    e !== void 0 ||
      (e = n("cometUFIComposerStickersPlugin_next_plugin.graphql"));
    function u(e) {
      var t = e.pluginProps,
        n = t.composerState;
      return !n || !n.attachment
        ? r("CometUFIInsertStickerComposerActionForLexical.react")
        : null;
    }
    function c(e) {
      var t = e.environment,
        a = e.fragmentKey,
        i = o("CometRelay").readInlineData(
          s !== void 0
            ? s
            : (s = n("cometUFIComposerStickersPlugin_next_pluginData.graphql")),
          a,
        );
      return i.feedback_id == null
        ? null
        : {
            above: null,
            action: u,
            below: r("CometUFIStickersComposerPluginInner.react"),
            id: "stickers",
            inside: null,
            props: {
              environment: t,
              feedbackID: i.feedback_id,
              targetID: i.owning_profile_id,
            },
          };
    }
    l.default = c;
  },
  98,
);
