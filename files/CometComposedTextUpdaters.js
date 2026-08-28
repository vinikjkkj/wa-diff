__d(
  "CometComposedTextUpdaters",
  ["relay-runtime", "uuidv4"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.id,
        n = e.record,
        a = e.store,
        i = e.text,
        l = t != null ? t : r("uuidv4")(),
        s = a
          .create(
            o("relay-runtime").generateClientID(l, "composed_text"),
            "ComposedBlockWithEntities",
          )
          .setValue("UNSTYLED", "block_type")
          .setValue("{}", "data")
          .setValue(0, "depth")
          .setValue(i, "text")
          .setLinkedRecords([], "entity_ranges")
          .setLinkedRecords([], "inline_style_ranges");
      n.setLinkedRecords([s], "composed_text");
    }
    function s(e) {
      var t,
        n = e.id,
        a = e.record,
        i = e.store,
        l = e.text,
        s = r("uuidv4")(),
        u = r("uuidv4")(),
        c = r("uuidv4")(),
        d = i
          .create(
            (t = o("relay-runtime")).generateUniqueClientID(),
            "ComposedTextRootNodeRenderer",
          )
          .setLinkedRecord(
            i
              .create(t.generateUniqueClientID(), "ComposedTextRootNode")
              .setValue(s, "key")
              .setLinkedRecords(
                [
                  i
                    .create(
                      t.generateUniqueClientID(),
                      "ComposedTextParagraphNode",
                    )
                    .setValue(u, "key"),
                ],
                "children",
              ),
            "node",
          ),
        m = i
          .create(
            t.generateUniqueClientID(),
            "ComposedTextParagraphNodeRenderer",
          )
          .setLinkedRecord(
            i
              .create(t.generateUniqueClientID(), "ComposedTextParagraphNode")
              .setValue(u, "key")
              .setLinkedRecords(
                [
                  i
                    .create(t.generateUniqueClientID(), "ComposedTextTextNode")
                    .setValue(c, "key"),
                ],
                "children",
              ),
            "node",
          ),
        p = i
          .create(t.generateUniqueClientID(), "ComposedTextTextNodeRenderer")
          .setLinkedRecord(
            i
              .create(t.generateUniqueClientID(), "ComposedTextTextNode")
              .setValue(c, "key")
              .setValue(l, "text")
              .setValue(0, "format"),
            "node",
          );
      return (
        a.setLinkedRecord(
          i
            .create(
              t.generateClientID(
                n != null ? n : r("uuidv4")(),
                "composed_text_v2",
              ),
              "ComposedTextInstance",
            )
            .setLinkedRecords([d, m, p], "nodes_js"),
          "composed_text_v2",
        ),
        { paragraphNodeRenderer: m, rootNodeRenderer: d, textNodeRenderer: p }
      );
    }
    ((l.setPlainTextLinkedRecord = e), (l.setPlainTextLinkedRecordV2 = s));
  },
  98,
);
