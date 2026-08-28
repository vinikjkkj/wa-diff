__d(
  "MAIBAConversationStoreUpdaters",
  [
    "fbt",
    "FBLogger",
    "MAIBAChatMessageDebuggingUtils",
    "MAIBAChatThreadQuery.graphql",
    "MAIBALocalConversationStore",
    "MAIBAThreadsInboxConstants",
    "react-relay",
    "relay-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = s._(/*BTDS*/ "New chat");
    function u(e, t) {
      var n = o("relay-runtime").getRequest(r("MAIBAChatThreadQuery.graphql")),
        a = {
          externalConversationId: t,
          shouldFetchMessageDebugInfo: o(
            "MAIBAChatMessageDebuggingUtils",
          ).isMAIBAMessageDebuggingAllowed(),
        },
        i = o("relay-runtime").createOperationDescriptor(n, a);
      e.retain(i);
    }
    function c(t, n, r, a, i) {
      var l = t
        .create(
          "client:conversation:" + r,
          "XFBMAIBAGenAICharmanderConversation",
        )
        .setValue(!0, "relay_record_initially_created_locally")
        .setValue(!1, "exists_serverside")
        .setValue(r, "external_conversation_id")
        .setValue(String(e), "display_title")
        .setValue(Date.now(), "last_send_timestamp_ms")
        .setValue("ACTIVE", "thread_status")
        .setValue(n, "linked_ad_account");
      (i != null && l.setValue(i, "entry_point"), a !== !0 && f(t, n, l));
      var s = o("react-relay").ConnectionHandler.getConnectionID(
          l.getDataID(),
          "MAIBAMessageListFragment__maiba_messages",
        ),
        u = t.create(
          s,
          "XFBMAIBAGenAICharmanderConversationMaibaMessageListConnection",
        );
      u.setLinkedRecords([], "edges");
      var c = t
        .create(
          o("relay-runtime").generateClientID(u.getDataID(), "page_info"),
          "PageInfo",
        )
        .setValue(!1, "has_next_page")
        .setValue(!1, "has_previous_page")
        .setValue(null, "end_cursor")
        .setValue(null, "start_cursor");
      (u.setLinkedRecord(c, "page_info"),
        u.setValue(0, "__connection_next_edge_index"),
        l.setLinkedRecord(
          u,
          "__MAIBAMessageListFragment__maiba_messages_connection",
        ));
      var d = t.create(
        o("relay-runtime").generateClientID(
          l.getDataID(),
          "maiba_message_list(first:10)",
        ),
        "XFBMAIBAGenAICharmanderConversationMaibaMessageListConnection",
      );
      d.setLinkedRecords([], "edges");
      var m = t
        .create(
          o("relay-runtime").generateClientID(d.getDataID(), "page_info"),
          "PageInfo",
        )
        .setValue(!1, "has_next_page")
        .setValue(!1, "has_previous_page")
        .setValue(null, "end_cursor")
        .setValue(null, "start_cursor");
      (d.setLinkedRecord(m, "page_info"),
        l.setLinkedRecord(d, "maiba_message_list(first:10)"),
        t
          .getRoot()
          .setLinkedRecord(l, "fetch__XFBMAIBAConversation", { id: r }));
    }
    function d(e, t) {
      var n,
        r =
          (n = e.getRoot()) == null
            ? void 0
            : n.getLinkedRecord("maiba_viewer");
      return r
        ? o("react-relay").ConnectionHandler.getConnection(
            r,
            o("MAIBAThreadsInboxConstants").NEW_INBOX_THREAD_LIST_KEY,
            { current_ad_account_id: t },
          )
        : null;
    }
    function m(e, t) {
      var n,
        r =
          (n = e.getRoot()) == null
            ? void 0
            : n.getLinkedRecord("maiba_viewer");
      return r
        ? o("react-relay").ConnectionHandler.getConnection(
            r,
            o("MAIBAThreadsInboxConstants")
              .FAB_MINI_INBOX_UNREAD_THREAD_LIST_KEY,
            { current_ad_account_id: t },
          )
        : null;
    }
    function p(e, t) {
      var n = e.getLinkedRecords("edges");
      if (n != null)
        for (var r of n) {
          var o = r == null ? void 0 : r.getLinkedRecord("node");
          if (o != null && o.getValue("external_conversation_id") === t)
            return o;
        }
      return null;
    }
    function _(e, t, n, r, a, i) {
      var l = m(e, t);
      if (l != null) {
        var s = p(l, n);
        if (!r) {
          s != null &&
            o("react-relay").ConnectionHandler.deleteNode(l, s.getDataID());
          return;
        }
        if (s != null) {
          (s.setValue(!0, "is_unread"),
            a != null && s.setValue(a, "last_message_snippet"));
          return;
        }
        var u = d(e, t),
          c = u != null ? p(u, n) : null;
        (c == null &&
          ((c = e.create(
            "client:maiba_fab_unread_thread_node:" + n,
            "XFBMAIBAGenAICharmanderConversation",
          )),
          c.setValue(n, "external_conversation_id"),
          c.setValue(Date.now(), "last_send_timestamp_ms"),
          c.setValue(t, "linked_ad_account"),
          i != null && c.setValue(i, "display_title")),
          c.setValue(!0, "is_unread"),
          a != null && c.setValue(a, "last_message_snippet"));
        var _ = o("react-relay").ConnectionHandler.createEdge(
          e,
          l,
          c,
          "XFBMAIBAViewerFieldsMaibaThreadListEdge",
        );
        o("react-relay").ConnectionHandler.insertEdgeBefore(l, _);
      }
    }
    function f(e, t, n) {
      var r = d(e, t);
      if (r) {
        var a = o("react-relay").ConnectionHandler.createEdge(
          e,
          r,
          n,
          "XFBMAIBAViewerFieldsMaibaThreadListEdge",
        );
        o("react-relay").ConnectionHandler.insertEdgeBefore(r, a);
      }
    }
    function g(e, t, n) {
      o("MAIBALocalConversationStore").unregisterMAIBALocalConversation(t, n);
      var r = d(e, t);
      if (r) {
        var a = r.getLinkedRecords("edges");
        if (a)
          for (var i of a) {
            var l = i == null ? void 0 : i.getLinkedRecord("node");
            if (
              (l == null ? void 0 : l.getValue("external_conversation_id")) ===
              n
            ) {
              var s = l == null ? void 0 : l.getDataID();
              s != null &&
                (o("react-relay").ConnectionHandler.deleteNode(r, s),
                e.delete(s));
              break;
            }
          }
      }
    }
    function h(e, t, n, r, a) {
      (o("MAIBALocalConversationStore").registerMAIBALocalConversation(t, n),
        e.commitUpdate(function (e) {
          c(e, t, n, r, a);
        }),
        u(e, n));
    }
    function y(e, t, n) {
      e.commitUpdate(function (e) {
        var o = e
          .getRoot()
          .getLinkedRecord("fetch__XFBMAIBAConversation", { id: n });
        o != null
          ? b(e, t, n, o)
          : r("FBLogger")("axp_maiba_foundations_ux").warn(
              "insertConversationIntoThreadList: conversation not found for externalConversationId: %s",
              n,
            );
      });
    }
    function C(e, t, n, r, o, a, i, l, s) {
      var u = e
        .getRoot()
        .getLinkedRecord("fetch__XFBMAIBAConversation", { id: t });
      (r != null && (u == null || u.setValue(r, "display_title")),
        n != null && (u == null || u.setValue(n, "id")),
        o != null && (u == null || u.setValue(o, "thread_status")),
        a != null && (u == null || u.setValue(a, "exists_serverside")),
        i === !0 &&
          (u == null || u.setValue(Date.now(), "last_send_timestamp_ms")),
        s != null &&
          (u == null || u.setValue(s, "is_conversation_eligible_for_csat")),
        u != null && l != null && b(e, l, t, u));
    }
    function b(e, t, n, r) {
      var a = d(e, t);
      if (a != null) {
        var i = a.getLinkedRecords("edges");
        if (i != null)
          for (var l of i) {
            var s = l == null ? void 0 : l.getLinkedRecord("node");
            if (
              (s == null ? void 0 : s.getValue("external_conversation_id")) ===
              n
            )
              return;
          }
        var u = o("react-relay").ConnectionHandler.createEdge(
          e,
          a,
          r,
          "XFBMAIBAViewerFieldsMaibaThreadListEdge",
        );
        o("react-relay").ConnectionHandler.insertEdgeBefore(a, u);
      }
    }
    function v(e, t) {
      var n = t.adAccountId,
        r = t.conversationId;
      e.commitUpdate(function (e) {
        var t = e
          .getRoot()
          .getLinkedRecord("fetch__XFBMAIBAConversation", { id: r });
        (t == null &&
          (c(e, n, r, !0, null),
          (t = e
            .getRoot()
            .getLinkedRecord("fetch__XFBMAIBAConversation", { id: r }))),
          t != null && b(e, n, r, t));
      });
    }
    function S(e, t, n) {
      var r = e.getRoot(),
        o = [
          t != null
            ? 'maiba_unread_thread_count(current_ad_account_id:"' + t + '")'
            : "maiba_unread_thread_count(current_ad_account_id:null)",
        ];
      t != null &&
        o.push("maiba_unread_thread_count(current_ad_account_id:null)");
      for (var a of o) {
        var i = r.getValue(a);
        typeof i == "number" && r.setValue(Math.max(0, i + n), a);
      }
    }
    function R(e, t, n) {
      var r = e.getRoot(),
        o = [
          t != null
            ? 'maiba_reminder_unread_thread_count(current_ad_account_id:"' +
              t +
              '")'
            : "maiba_reminder_unread_thread_count(current_ad_account_id:null)",
        ];
      t != null &&
        o.push(
          "maiba_reminder_unread_thread_count(current_ad_account_id:null)",
        );
      for (var a of o) {
        var i = r.getValue(a);
        typeof i == "number" && r.setValue(Math.max(0, i + n), a);
      }
    }
    function L(e, t, n, r, a, i) {
      var l,
        s = e
          .getRoot()
          .getLinkedRecord("fetch__XFBMAIBAConversation", { id: n }),
        u = ((l = s) == null ? void 0 : l.getValue("is_unread")) === !0;
      if (s == null) {
        var c = d(e, t),
          f = c != null ? p(c, n) : null;
        f != null && (u = f.getValue("is_unread") === !0);
      }
      if (!u) {
        var g = m(e, t),
          h = g != null ? p(g, n) : null;
        h != null && (u = h.getValue("is_unread") === !0);
      }
      s != null
        ? s.setValue(r, "is_unread")
        : r &&
          ((s = e.create(
            "client:fetch__XFBMAIBAConversation:" + n,
            "XFBMAIBAConversation",
          )),
          s.setValue(n, "id"),
          s.setValue(r, "is_unread"),
          e
            .getRoot()
            .setLinkedRecord(s, "fetch__XFBMAIBAConversation", { id: n }));
      var y = r !== u;
      (y && S(e, t, r ? 1 : -1), _(e, t, n, r, a, i));
      var C = d(e, t);
      if (C == null) return y;
      var b = C.getLinkedRecords("edges");
      if (b == null) return y;
      for (var v of b) {
        var R = v == null ? void 0 : v.getLinkedRecord("node");
        if (R != null && R.getValue("external_conversation_id") === n)
          return (R.setValue(r, "is_unread"), y);
      }
      if (!r) return y;
      var L = "client:maiba_thread_list_node:" + n,
        E = e.create(L, "XFBMAIBAConversation");
      (E.setValue(n, "external_conversation_id"), E.setValue(r, "is_unread"));
      var k = o("react-relay").ConnectionHandler.createEdge(
        e,
        C,
        E,
        "XFBMAIBAViewerFieldsMaibaThreadListEdge",
      );
      return (o("react-relay").ConnectionHandler.insertEdgeBefore(C, k), y);
    }
    var E = "client:maiba_fab_promo";
    function k(e, t, n, r) {
      var a,
        i = m(e, t);
      if (i == null) {
        S(e, t, 1);
        return;
      }
      var l = "client:maiba_fab_promo_thread_node:" + E,
        s =
          (a = e.get(l)) != null
            ? a
            : e.create(l, "XFBMAIBAGenAICharmanderConversation");
      if (
        (s.setValue(E, "external_conversation_id"),
        s.setValue(!0, "is_unread"),
        s.setValue(Date.now(), "last_send_timestamp_ms"),
        s.setValue(t, "linked_ad_account"),
        n != null && s.setValue(n, "display_title"),
        r != null && s.setValue(r, "last_message_snippet"),
        p(i, E) == null)
      ) {
        S(e, t, 1);
        var u = o("react-relay").ConnectionHandler.createEdge(
          e,
          i,
          s,
          "XFBMAIBAViewerFieldsMaibaThreadListEdge",
        );
        o("react-relay").ConnectionHandler.insertEdgeBefore(i, u);
      }
    }
    function I(e, t) {
      var n = d(e, t);
      if (n != null) {
        var r = n.getLinkedRecords("edges");
        if (r != null)
          for (var o of r) {
            var a = o == null ? void 0 : o.getLinkedRecord("node");
            if (a != null && a.getValue("is_unread") === !0) {
              a.setValue(!1, "is_unread");
              var i = a.getValue("external_conversation_id");
              if (typeof i == "string") {
                var l = e
                  .getRoot()
                  .getLinkedRecord("fetch__XFBMAIBAConversation", { id: i });
                l == null || l.setValue(!1, "is_unread");
              }
            }
          }
      }
      var s = e.getRoot(),
        u =
          t != null
            ? 'maiba_unread_thread_count(current_ad_account_id:"' + t + '")'
            : "maiba_unread_thread_count(current_ad_account_id:null)";
      (s.setValue(0, u),
        t != null &&
          s.setValue(
            0,
            "maiba_unread_thread_count(current_ad_account_id:null)",
          ));
    }
    function T(e, t, n) {
      var r = d(e, t);
      if (r) {
        var o = r.getLinkedRecords("edges");
        if (o)
          for (var a of o) {
            var i = a == null ? void 0 : a.getLinkedRecord("node");
            if (
              (i == null ? void 0 : i.getValue("external_conversation_id")) ===
              n
            )
              return (i == null ? void 0 : i.getValue("is_unread")) === !0;
          }
      }
      return !1;
    }
    ((l.NEW_CHAT_LABEL = e),
      (l.deleteConversationRecord = g),
      (l.createRecordsForNewConversation = h),
      (l.insertConversationIntoThreadList = y),
      (l.updateConversationRecord = C),
      (l.ensureConversationInThreadList = b),
      (l.ensureNewConversationInThreadListOnSend = v),
      (l.updateUnreadThreadCount = S),
      (l.updateReminderUnreadThreadCount = R),
      (l.updateThreadIsUnreadInThreadList = L),
      (l.MAIBA_FAB_PROMO_MINI_INBOX_ROW_KEY = E),
      (l.insertPromoThreadIntoMiniInbox = k),
      (l.markAllThreadsAsReadInThreadList = I),
      (l.isThreadUnreadInConnection = T));
  },
  226,
);
