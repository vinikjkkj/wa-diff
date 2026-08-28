__d(
  "CometComposedText3DUpdaters",
  [
    "CometComposedTextUpdaters",
    "CometRelay3DUtils",
    "JSResourceForInteraction",
    "nullthrows",
    "relay-runtime",
    "uuidv4",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = "3XyxGD",
      u = (e = r("JSResourceForInteraction"))(
        "CometComposedTextUnstyledBlockRenderer_renderer$normalization.graphql",
      ).__setRef("CometComposedText3DUpdaters"),
      c = e("CometComposedTextUnstyledBlockRenderer.react").__setRef(
        "CometComposedText3DUpdaters",
      ),
      d = e("cometComposedTextV2RootNodeRelay").__setRef(
        "CometComposedText3DUpdaters",
      ),
      m = e(
        "cometComposedTextV2RootNodeRelay_node$normalization.graphql",
      ).__setRef("CometComposedText3DUpdaters"),
      p = e("cometComposedTextV2ParagraphNodeRelay").__setRef(
        "CometComposedText3DUpdaters",
      ),
      _ = e(
        "cometComposedTextV2ParagraphNodeRelay_node$normalization.graphql",
      ).__setRef("CometComposedText3DUpdaters"),
      f = e("cometComposedTextV2TextNodeRelay").__setRef(
        "CometComposedText3DUpdaters",
      ),
      g = e(
        "cometComposedTextV2TextNodeRelay_node$normalization.graphql",
      ).__setRef("CometComposedText3DUpdaters");
    function h(e) {
      var t = e.documentName,
        n = e.id,
        a = e.record,
        i = e.store,
        l = e.text,
        d = n != null ? n : r("uuidv4")();
      o("CometComposedTextUpdaters").setPlainTextLinkedRecord({
        id: d,
        record: a,
        store: i,
        text: l,
      });
      var m = r("nullthrows")(
          i.get(o("relay-runtime").generateClientID(d, "composed_text")),
        ),
        p = i.create(
          o("relay-runtime").generateClientID(d, "unstyled_renderer"),
          "ComposedUnstyledBlockWithEntitiesRenderer",
        );
      (o("CometRelay3DUtils").setRelay3DValue(p, t, u, c),
        m.setLinkedRecord(p, "renderer", { supported: s }));
    }
    function y(e) {
      var t = e.documentName,
        n = e.id,
        r = e.record,
        a = e.store,
        i = e.text,
        l = o("CometComposedTextUpdaters").setPlainTextLinkedRecordV2({
          id: n,
          record: r,
          store: a,
          text: i,
        }),
        s = l.paragraphNodeRenderer,
        u = l.rootNodeRenderer,
        c = l.textNodeRenderer;
      (o("CometRelay3DUtils").setRelay3DValue(u, t, m, d),
        o("CometRelay3DUtils").setRelay3DValue(s, t, _, p),
        o("CometRelay3DUtils").setRelay3DValue(c, t, g, f));
    }
    ((l.setPlainTextLinkedRecord = h), (l.setPlainTextLinkedRecordV2 = y));
  },
  98,
);
