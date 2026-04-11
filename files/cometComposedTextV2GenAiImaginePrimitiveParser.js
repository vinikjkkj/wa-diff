__d(
  "cometComposedTextV2GenAiImaginePrimitiveParser",
  [
    "CometComposedTextV2CustomNode.react",
    "CometComposedTextV2CustomNodeRenderer.react",
    "MSGDataclassTypes.flow",
    "cometComposedTextV2NodeBuilders",
    "cometComposedTextV2NodeKey",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = "imagine";
      return new (o(
        "CometComposedTextV2CustomNode.react",
      ).CometComposedTextV2CustomNode)(
        {
          key: r("cometComposedTextV2NodeKey")(),
          rendererArgs: e,
          rendererKey: t,
        },
        r("CometComposedTextV2CustomNodeRenderer.react"),
      );
    }
    function s(t) {
      var n,
        r,
        a = (n = t.status) == null ? void 0 : n.status,
        i = (r = t.status) == null ? void 0 : r.update_text,
        l = o("cometComposedTextV2NodeBuilders").buildRootNode();
      if (
        a ===
          o("MSGDataclassTypes.flow").GenAiImaginePrimitiveStatus.Generating &&
        i != null
      )
        return l.append(
          o("cometComposedTextV2NodeBuilders")
            .buildProgressStatusNode(null, !0, null, null, null)
            .append(o("cometComposedTextV2NodeBuilders").buildTextNode(i)),
        );
      var s;
      return l.append(
        e({
          imagineType: t.imagine_type,
          mediaUrl: (s = t.media.url) != null ? s : t.media.url_fallback,
          nodeType: "imagine",
          status: a,
          updateText: i,
        }),
      );
    }
    l.default = s;
  },
  98,
);
