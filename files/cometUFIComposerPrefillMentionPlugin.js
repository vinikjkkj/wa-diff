__d(
  "cometUFIComposerPrefillMentionPlugin",
  [
    "CometUFIComposerPrefillMentionPluginUtils",
    "cometUFIComposerPrefillMentionPlugin_plugin.graphql",
    "react",
    "react-compiler-runtime",
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = (s || (s = o("react"))).useLayoutEffect,
      c = r("requireDeferred")("UFIODSLogger").__setRef(
        "cometUFIComposerPrefillMentionPlugin",
      );
    e !== void 0 ||
      (e = n("cometUFIComposerPrefillMentionPlugin_plugin.graphql"));
    function d(e) {
      var t = o("react-compiler-runtime").c(7),
        n = e.pluginProps,
        r = n.addCommandListener,
        a = n.editor,
        i = n.setComposerState,
        l;
      t[0] !== r || t[1] !== a
        ? ((l = function () {
            r(function (e) {
              return e.__type === "PrefillMention"
                ? (c.onReady(m),
                  a.update(function () {
                    o(
                      "CometUFIComposerPrefillMentionPluginUtils",
                    ).$addMentionIfEditorIsEmptyAndDoesNotHaveMention(
                      a,
                      e.mentionableEntity,
                    );
                  }),
                  "handled")
                : "not-handled";
            });
          }),
          (t[0] = r),
          (t[1] = a),
          (t[2] = l))
        : (l = t[2]);
      var s;
      return (
        t[3] !== r || t[4] !== a || t[5] !== i
          ? ((s = [r, a, i]), (t[3] = r), (t[4] = a), (t[5] = i), (t[6] = s))
          : (s = t[6]),
        u(l, s),
        null
      );
    }
    function m(e) {
      e.bump(
        "prefill_mention_plugin.prefill_requested.with_implementation",
        "relay",
      );
    }
    function p(e) {
      return {
        above: null,
        action: null,
        below: d,
        id: "prefill_mentions",
        inside: null,
        props: Object.freeze({}),
      };
    }
    l.default = p;
  },
  98,
);
