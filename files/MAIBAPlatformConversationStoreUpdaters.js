__d(
  "MAIBAPlatformConversationStoreUpdaters",
  ["CometRelay3DUtils", "JSResourceForInteraction", "relay-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "MAIBAConversationNode",
      s = "MAIBAConversationThreadMessagesEdge",
      u = r("JSResourceForInteraction")(
        "MAIBAGeoTextRenderer_component$normalization.graphql",
      ).__setRef("MAIBAPlatformConversationStoreUpdaters"),
      c = r("JSResourceForInteraction")("MAIBAGeoTextRenderer.react").__setRef(
        "MAIBAPlatformConversationStoreUpdaters",
      ),
      d = "2jHxmp";
    function m(t, n, r, o, a, i, l) {
      var s = "maiba_" + n + "_" + r + "_" + o,
        u = t
          .create(s, e)
          .setValue(s, "id")
          .setValue(String(Date.now()), "timestamp")
          .setValue(n, "conversation_id")
          .setValue(o, "role")
          .setValue(r, "offline_threading_id")
          .setValue(a != null ? a : null, "prompt")
          .setValue(
            i != null ? i : o === "user" ? "done" : "client_init",
            "streaming_state",
          );
      return (
        u.setLinkedRecords(l != null ? [p(t, s, l)] : [], "responses"),
        u
      );
    }
    function p(e, t, n) {
      var r = t + "_admin_text_response",
        a = e
          .create(r + "_text", "MAIBATextWithEntities")
          .setValue(n, "text")
          .setLinkedRecords([], "entities"),
        i = e.create(r + "_text_component", "MAIBAContentComponentText");
      return (
        o("CometRelay3DUtils").setRelay3DValue(
          i,
          "MAIBAGeoComponentMatchResolver_components",
          u,
          c,
        ),
        e
          .create(r, "MAIBAResponseData")
          .setValue(r, "id")
          .setValue(
            JSON.stringify({
              status: [],
              layout: {
                sections: [
                  {
                    id: null,
                    blocks: [
                      {
                        type: "MAIBAContentComponentText",
                        id: null,
                        properties: { content: { $t: 0 } },
                      },
                    ],
                  },
                ],
              },
            }),
            "response_json",
          )
          .setLinkedRecords([a], "texts_with_entities")
          .setLinkedRecords([i], "content_components", { supported: d })
      );
    }
    function _(e, t, n) {
      var r = e.get(t);
      if (r != null) {
        var a = o("relay-runtime").ConnectionHandler.createEdge(e, r, n, s);
        o("relay-runtime").ConnectionHandler.insertEdgeAfter(r, a);
      }
    }
    function f(e, t, n) {
      if (t != null) {
        var r = e.get(t);
        r != null && o("relay-runtime").ConnectionHandler.deleteNode(r, n);
      }
    }
    function g(e, t, n) {
      var r = e.get(t);
      if (r != null) {
        var a = e.get(n);
        if (a != null) {
          var i = r.getLinkedRecords("edges");
          if (i != null)
            for (var l of i) {
              var u = l == null ? void 0 : l.getLinkedRecord("node");
              if (u != null && u.getValue("id") === n) return;
            }
          var c = o("relay-runtime").ConnectionHandler.createEdge(e, r, a, s);
          o("relay-runtime").ConnectionHandler.insertEdgeAfter(r, c);
        }
      }
    }
    function h(e, t, n) {
      var r,
        o = String((r = t.getValue("id")) != null ? r : "unknown"),
        a = n.map(function (t, n) {
          var r,
            a,
            i,
            l,
            s,
            u,
            c = o + "_attachment_" + n,
            d = e.create(c, "MAIBAConversationUserMediaAttachment");
          (d.setValue(t.media_id, "media_id"),
            d.setValue(t.media_type, "media_type"),
            d.setValue(
              (r = t.attachment_id) != null ? r : null,
              "attachment_id",
            ),
            d.setValue((a = t.media_url) != null ? a : null, "media_url"),
            d.setValue((i = t.mime_type) != null ? i : null, "mime_type"));
          var m = t.file_metadata;
          return (
            d.setValue(
              (l = m == null ? void 0 : m.filename) != null ? l : null,
              "filename",
            ),
            d.setValue(
              (s = m == null ? void 0 : m.file_size) != null ? s : null,
              "file_size",
            ),
            d.setValue(
              (u = m == null ? void 0 : m.upload_blocked_reason) != null
                ? u
                : null,
              "upload_blocked_reason",
            ),
            d
          );
        });
      t.setLinkedRecords(a, "user_media_attachments");
    }
    function y(e, t, n) {
      var r,
        o = String((r = t.getValue("id")) != null ? r : "unknown"),
        a = n.map(function (t, n) {
          var r,
            a = o + "_selected_asset_" + n,
            i = e.create(a, "MAIBAConversationSelectedAsset");
          return (
            i.setValue(t.asset_id, "asset_id"),
            i.setValue(t.asset_name, "asset_name"),
            i.setValue(t.asset_type, "asset_type"),
            i.setValue(
              (r = t.additional_payload) != null ? r : null,
              "additional_payload",
            ),
            i
          );
        });
      t.setLinkedRecords(a, "selected_assets");
    }
    ((l.createMessageRecord = m),
      (l.insertMessageIntoConnection = _),
      (l.deleteMessageFromThread = f),
      (l.mergeServerNodeIntoConnection = g),
      (l.createAttachmentRecords = h),
      (l.createSelectedAssetRecords = y));
  },
  98,
);
