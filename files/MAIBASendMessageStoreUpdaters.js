__d(
  "MAIBASendMessageStoreUpdaters",
  [
    "FBLogger",
    "isEmpty",
    "isMAIBAPreserveAgentOutputOnErrorEnabled",
    "react-relay",
    "relay-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u(e, t, n, r, o, a, i, l, s, u, c) {
      var d = E(e, r);
      if (d == null) return null;
      var _ = p(e, o, a, r, t, i, l, s, u, c);
      R(d, e, _);
      var f = m(e, r, n, u);
      return (R(d, e, f), d);
    }
    function c(e, t, n, r) {
      var o = E(e, n);
      if (o == null) return null;
      var a = m(e, n, t, r);
      return (R(o, e, a), o);
    }
    function d(e, t, n, r, o, a, i, l, s, u) {
      var c = E(e, n);
      if (c == null) return null;
      var d = p(e, r, o, n, t, a, i, l, s, u);
      return (R(c, e, d), c);
    }
    function m(e, t, n, r) {
      var o = _(e, t, n, "assistant", r);
      return (h(e, o), g(e, o, null, "ASSISTANT"), o);
    }
    function p(e, t, n, o, a, i, l, u, c, d) {
      var m = _(e, o, a, "user", c);
      return (
        f(e, m),
        g(e, m, t, "USER"),
        b(e, m, d != null ? d : []),
        l != null && y(e, m, l),
        i != null && C(e, m, i),
        n != null && !(s || (s = r("isEmpty")))(n) && v(e, m, n),
        u != null && S(e, m, u),
        m
      );
    }
    function _(e, t, n, r, o) {
      var a = t + "_" + n + "_" + r,
        i = e
          .create(a, "XFBMAIBAMessage")
          .setValue(a, "id")
          .setValue(o, "created_timestamp")
          .setValue(t, "external_conversation_id")
          .setValue(r.toUpperCase(), "role")
          .setValue(n, "offline_threading_id")
          .setValue(null, "maiba_client_message_error")
          .setValue(
            r === "user" ? "OVERALL_DONE" : "CLIENT_INIT",
            "streaming_state",
          ),
        l = e
          .getRoot()
          .getLinkedRecord("fetch__XFBMAIBAConversation", { id: t });
      return (
        l != null && i.setLinkedRecord(l, "conversation"),
        e.getRoot().setLinkedRecord(i, "fetch__XFBMAIBAMessage", { id: a }),
        i
      );
    }
    function f(e, t) {
      var n = e.create(
          o("relay-runtime").generateClientID(t.getDataID(), "sender"),
          "XFBMAIBAMessageUserSender",
        ),
        r = e.getRoot().getLinkedRecord("xfb_viewer");
      (r != null && n.setLinkedRecord(r, "user"),
        t.setLinkedRecord(n, "sender"),
        n.setLinkedRecord(t, "message"));
    }
    function g(e, t, n, r) {
      var a = e.create(
        o("relay-runtime").generateClientID(t.getDataID(), "content"),
        "XFBMAIBAMessagePlainTextContent",
      );
      (t.setValue(n, "snippet"),
        t.setValue(r, "role"),
        a.setValue(n, "snippet"),
        a.setLinkedRecord(t, "message"),
        t.setLinkedRecord(a, "content"));
    }
    function h(e, t) {
      var n = e.create(
        o("relay-runtime").generateClientID(t.getDataID(), "sender"),
        "XFBMAIBAMessageBotSender",
      );
      (t.setLinkedRecord(n, "sender"), n.setLinkedRecord(t, "message"));
    }
    function y(e, t, n) {
      var r = e.create(
          o("relay-runtime").generateClientID(t.getDataID(), "admin_text"),
          "XFBMAIBAAdminTextAttachment",
        ),
        a = e.create(
          o("relay-runtime").generateClientID(r.getDataID(), "render_payload"),
          "XFBMAIBAAdminTextRenderPayload",
        );
      (a.setValue(n, "text"),
        r.setLinkedRecord(a, "render_payload"),
        t.setLinkedRecord(r, "admin_text"));
    }
    function C(e, t, n) {
      var r = n.map(function (n, r) {
        return e
          .create(
            o("relay-runtime").generateClientID(
              t.getDataID(),
              "selected_assets",
              r,
            ),
            "XFBMAIBASelectedAsset",
          )
          .setValue(n.asset_id, "asset_id")
          .setValue(n.asset_type, "asset_type")
          .setValue(n.asset_name, "asset_name");
      });
      t.setLinkedRecords(r, "selected_assets");
    }
    function b(e, t, n) {
      var r = n.map(function (n, r) {
        return e
          .create(
            o("relay-runtime").generateClientID(
              t.getDataID(),
              "context_chips",
              r,
            ),
            "XFBMAIBAContextChip",
          )
          .setValue(n.entity_type, "entity_type")
          .setValue(n.entity_id, "entity_id")
          .setValue(n.display_name, "display_name")
          .setValue(n.matched_text, "matched_text");
      });
      t.setLinkedRecords(r, "context_chips");
    }
    function v(e, t, n) {
      var r = n.map(function (n, r) {
        var a = n.account_id,
          i = n.file_metadata,
          l = n.image_hash,
          s = n.maiba_internal_kind,
          u = n.media_id,
          c = n.media_type,
          d = n.media_url,
          m = n.mime_type,
          p = e
            .create(
              o("relay-runtime").generateClientID(
                t.getDataID(),
                "user_media_attachments",
                r,
              ),
              "XFBMAIBAUserAttachmentInput",
            )
            .setValue(u, "media_id")
            .setValue(c, "media_type")
            .setValue(d != null ? d : null, "media_url")
            .setValue(m != null ? m : null, "mime_type")
            .setValue(a != null ? a : null, "account_id")
            .setValue(l != null ? l : null, "image_hash")
            .setValue(s != null ? s : null, "maiba_internal_kind");
        if (i != null) {
          var _ = e
            .create(
              o("relay-runtime").generateClientID(
                p.getDataID(),
                "file_metadata",
              ),
              "XFBMAIBAUserMediaFileMetadata",
            )
            .setValue(i.filename, "filename")
            .setValue(i.file_size, "file_size");
          p.setLinkedRecord(_, "file_metadata");
        }
        return p;
      });
      t.setLinkedRecords(r, "user_media_attachments");
    }
    function S(e, t, n) {
      var r = e.create(
        o("relay-runtime").generateClientID(t.getDataID(), "selected_text"),
        "XFBMAIBASelectedTextOutput",
      );
      (r.setValue(n.selected_text, "selected_text"),
        n.source != null && r.setValue(n.source, "source"),
        t.setLinkedRecord(r, "selected_text"));
    }
    function R(e, t, n) {
      var r = t.get(e);
      if (!r) return "connection_missing";
      var a = r.getLinkedRecords("edges"),
        i =
          a != null &&
          a.some(function (e) {
            var t;
            return (
              (e == null || (t = e.getLinkedRecord("node")) == null
                ? void 0
                : t.getDataID()) === n.getDataID()
            );
          });
      if (i) return "already_present";
      var l = o("react-relay").ConnectionHandler.createEdge(
        t,
        r,
        n,
        "XFBMAIBAGenAICharmanderConversationMaibaMessageListEdge",
      );
      return (
        o("react-relay").ConnectionHandler.insertEdgeAfter(r, l),
        "inserted"
      );
    }
    function L(e, t, n, r) {
      if (t != null) {
        var o = e.get(t);
        if (o) {
          var a = o.getLinkedRecords("edges");
          if (r != null) {
            var i =
              a == null
                ? void 0
                : a.find(function (e) {
                    var t;
                    return (
                      (e == null || (t = e.getLinkedRecord("node")) == null
                        ? void 0
                        : t.getValue("offline_threading_id")) === r
                    );
                  });
            n(i == null ? void 0 : i.getLinkedRecord("node"));
            return;
          }
          if (a && a.length > 0) {
            var l = a[a.length - 1];
            n(l == null ? void 0 : l.getLinkedRecord("node"));
          }
        }
      }
    }
    function E(e, t) {
      var n = e
        .getRoot()
        .getLinkedRecord("fetch__XFBMAIBAConversation", { id: t });
      if (n != null) {
        var r = o("react-relay").ConnectionHandler.getConnectionID(
          n.getDataID(),
          "MAIBAMessageListFragment__maiba_messages",
        );
        return r;
      }
    }
    function k(t, n, a, i) {
      L(t, n, function (n) {
        var l, s;
        if (n != null) {
          if (
            (n == null ? void 0 : n.getValue("streaming_state")) === "SEARCHING"
          )
            if (r("isMAIBAPreserveAgentOutputOnErrorEnabled")()) {
              var u = n == null ? void 0 : n.getLinkedRecord("content"),
                c = u == null ? void 0 : u.getValue("snippet");
              (c == null || String(c).trim().length === 0) &&
                (n == null || n.setValue(null, "content"));
            } else n == null || n.setValue(null, "content");
          n.setValue("ERROR", "streaming_state");
          var d = t.create(
            o("relay-runtime").generateClientID(
              n.getDataID(),
              "maiba_client_message_error",
            ),
            "MAIBAClientErrorDetails",
          );
          (n.setLinkedRecord(d, "maiba_client_message_error"),
            d.setValue(a.message, "message"),
            d.setValue(i, "user_message"));
          var m =
            (l = (s = a.source) == null ? void 0 : s.errors) != null ? l : [];
          if (m.length > 0) {
            var p, _, f;
            (d.setValue(
              (p = m[0].exception) == null ? void 0 : p.message,
              "exception_message",
            ),
              r("FBLogger")("axp_maiba_foundations_ux").WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "MAIBA response resulted in error. ",
                    "",
                  ])),
                (_ = m[0].exception) == null ? void 0 : _.message,
              ),
              d.setValue(
                (f = m[0].exception) == null ? void 0 : f.stack_trace,
                "stack_trace",
              ));
          }
        }
      });
    }
    ((l.insertNewUserAndBotMessages = u),
      (l.insertBotMessageOnly = c),
      (l.insertUserMessageOnly = d),
      (l.insertMessage = R),
      (l.updateLastBotResponseRecord = L),
      (l.getMessageListConnectionID = E),
      (l.updateErrorDetailsForMessage = k));
  },
  98,
);
