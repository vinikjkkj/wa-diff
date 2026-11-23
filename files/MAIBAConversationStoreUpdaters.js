__d(
  "MAIBAConversationStoreUpdaters",
  [
    "fbt",
    "FBLogger",
    "MAIBAChatMessageDebuggingUtils",
    "MAIBAChatThreadQuery.graphql",
    "MAIBALocalConversationStore",
    "MAIBAPlatformThreadRecordID",
    "MAIBAThreadsInboxConstants",
    "react-relay",
    "relay-runtime",
    "relay-runtime/store/RelayStoreUtils",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = s._(/*BTDS*/ "");
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
      (i != null && l.setValue(i, "entry_point"), a !== !0 && h(t, n, l));
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
    function d(e, t, n) {
      var r = e.getRoot();
      if (r.getLinkedRecord("fetch__XFBMAIBAConversation", { id: n }) == null) {
        var o = e.get("client:conversation:" + n);
        if (o != null) {
          r.setLinkedRecord(o, "fetch__XFBMAIBAConversation", { id: n });
          return;
        }
        c(e, t, n, !0, null);
      }
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
            o("MAIBAThreadsInboxConstants").NEW_INBOX_THREAD_LIST_KEY,
            { current_ad_account_id: t },
          )
        : null;
    }
    function p(e, t, n, r) {
      var a,
        i =
          (a = e.getRoot()) == null
            ? void 0
            : a.getLinkedRecord("maiba_viewer");
      return i
        ? o("react-relay").ConnectionHandler.getConnection(
            i,
            o("MAIBAThreadsInboxConstants")
              .FAB_MINI_INBOX_UNREAD_THREAD_LIST_KEY,
            {
              current_ad_account_id: t,
              entry_point: n,
              thread_scope: r != null ? r : null,
            },
          )
        : null;
    }
    function _(e, t) {
      var n = e.getLinkedRecords("edges");
      if (n != null)
        for (var r of n) {
          var o = r == null ? void 0 : r.getLinkedRecord("node");
          if (o != null && o.getValue("external_conversation_id") === t)
            return o;
        }
      return null;
    }
    function f(e, t, n) {
      for (var r of ["display_title", "last_message_snippet"])
        t.getValue(r) === void 0 && t.setValue(null, r);
      if (t.getLinkedRecord("proactive_task_origin") === void 0)
        t.setValue(null, "proactive_task_origin");
      else {
        var a = t.getLinkedRecord("proactive_task_origin");
        if (a != null)
          for (var i of ["notification_category", "template_key", "use_case"])
            a.getValue(i) === void 0 && a.setValue(null, i);
      }
      t.getValue("is_handover_active") === void 0 &&
        t.setValue(!1, "is_handover_active");
      var l = t.getLinkedRecord("async_task_execution");
      n != null
        ? (l == null &&
            ((l = e.create(
              o("relay-runtime").generateClientID(
                t.getDataID(),
                "async_task_execution",
              ),
              "MAIBAAsyncTaskExecution",
            )),
            t.setLinkedRecord(l, "async_task_execution")),
          l.setValue(n, "action_needed"))
        : l === void 0 && t.setValue(null, "async_task_execution");
    }
    function g(e, t, n, r, a, i, l, s, u) {
      var c = p(e, t, l != null ? l : null, s);
      if (c != null) {
        var d = _(c, n);
        if (!r) {
          d != null &&
            o("react-relay").ConnectionHandler.deleteNode(c, d.getDataID());
          return;
        }
        if (d != null) {
          (f(e, d, u),
            d.setValue(!0, "is_unread"),
            a != null && d.setValue(a, "last_message_snippet"),
            l != null && d.setValue(l, "entry_point"));
          return;
        }
        var g = m(e, t),
          h = g != null ? _(g, n) : null;
        (h == null &&
          ((h = e.create(
            "client:maiba_fab_unread_thread_node:" + n,
            "XFBMAIBAGenAICharmanderConversation",
          )),
          h.setValue(n, "external_conversation_id"),
          h.setValue(Date.now(), "last_send_timestamp_ms"),
          h.setValue(t, "linked_ad_account"),
          i != null && h.setValue(i, "display_title"),
          l != null && h.setValue(l, "entry_point")),
          f(e, h, u),
          h.setValue(!0, "is_unread"),
          a != null && h.setValue(a, "last_message_snippet"));
        var y = o("react-relay").ConnectionHandler.createEdge(
          e,
          c,
          h,
          "XFBMAIBAViewerFieldsMaibaThreadListEdge",
        );
        o("react-relay").ConnectionHandler.insertEdgeBefore(c, y);
      }
    }
    function h(e, t, n) {
      var r = m(e, t);
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
    function y(e, t, n) {
      o("MAIBALocalConversationStore").unregisterMAIBALocalConversation(t, n);
      var r = m(e, t);
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
    function C(e, t, n, r, a) {
      (o("MAIBALocalConversationStore").registerMAIBALocalConversation(t, n),
        e.commitUpdate(function (e) {
          c(e, t, n, r, a);
        }),
        u(e, n));
    }
    function b(e, t, n) {
      e.commitUpdate(function (e) {
        var o = e
          .getRoot()
          .getLinkedRecord("fetch__XFBMAIBAConversation", { id: n });
        o != null
          ? S(e, t, n, o)
          : r("FBLogger")("axp_maiba_foundations_ux").warn(
              "insertConversationIntoThreadList: conversation not found for externalConversationId: %s",
              n,
            );
      });
    }
    function v(e, t, n, r, a, i, l, s, u) {
      var c = e
          .getRoot()
          .getLinkedRecord("fetch__XFBMAIBAConversation", { id: t }),
        d = e.get(
          o("MAIBAPlatformThreadRecordID").maibaGeoPlatformThreadRecordID(t),
        );
      if (
        (r != null && (c == null || c.setValue(r, "display_title")),
        n != null && (c == null || c.setValue(n, "id")),
        a != null && (c == null || c.setValue(a, "thread_status")),
        a != null && (d == null || d.setValue(a, "thread_status")),
        i != null && (c == null || c.setValue(i, "exists_serverside")),
        l === !0)
      ) {
        var m = Date.now();
        (c == null || c.setValue(m, "last_send_timestamp_ms"),
          d == null || d.setValue(m, "last_send_timestamp_ms"));
      }
      (u != null &&
        (c == null || c.setValue(u, "is_conversation_eligible_for_csat")),
        c != null && s != null && S(e, s, t, c));
    }
    function S(e, t, n, r) {
      var a = m(e, t);
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
    function R(e, t) {
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
          t != null && S(e, n, r, t));
      });
    }
    function L(e, t, n, r, o) {
      var a = e.getRoot(),
        i = new Set([E(t)]);
      (t != null && i.add(E(null)),
        r != null && (i.add(E(t, r)), t != null && i.add(E(null, r))),
        o != null && i.add(E(t, null, String(o))));
      for (var l of i) {
        var s = a.getValue(l);
        typeof s == "number" && a.setValue(Math.max(0, s + n), l);
      }
    }
    function E(e, t, n) {
      return o("relay-runtime/store/RelayStoreUtils").getStableStorageKey(
        "maiba_unread_thread_count",
        { current_ad_account_id: e, entry_point: t, thread_scope: n },
      );
    }
    function k(e, t, n) {
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
    function I(e, t, n, r, a, i, l, s, u, c) {
      var d,
        f = e
          .getRoot()
          .getLinkedRecord("fetch__XFBMAIBAConversation", { id: n }),
        h =
          u != null
            ? u
            : ((d = f) == null ? void 0 : d.getValue("is_unread")) === !0;
      if (f == null) {
        var y = m(e, t),
          C = y != null ? _(y, n) : null;
        C != null && (h = C.getValue("is_unread") === !0);
      }
      if (!h) {
        var b = p(e, t, l != null ? l : null, s),
          v = b != null ? _(b, n) : null;
        v != null && (h = v.getValue("is_unread") === !0);
      }
      f != null
        ? f.setValue(r, "is_unread")
        : r &&
          ((f = e.create(
            "client:fetch__XFBMAIBAConversation:" + n,
            "XFBMAIBAConversation",
          )),
          f.setValue(n, "id"),
          f.setValue(r, "is_unread"),
          e
            .getRoot()
            .setLinkedRecord(f, "fetch__XFBMAIBAConversation", { id: n }));
      var S = r !== h;
      (S && L(e, t, r ? 1 : -1, l, s), g(e, t, n, r, a, i, l, s, c));
      var R = m(e, t);
      if (R == null) return S;
      var E = R.getLinkedRecords("edges");
      if (E == null) return S;
      for (var k of E) {
        var I = k == null ? void 0 : k.getLinkedRecord("node");
        if (I != null && I.getValue("external_conversation_id") === n)
          return (I.setValue(r, "is_unread"), S);
      }
      if (!r) return S;
      var T = "client:maiba_thread_list_node:" + n,
        D = e.create(T, "XFBMAIBAConversation");
      (D.setValue(n, "external_conversation_id"), D.setValue(r, "is_unread"));
      var x = o("react-relay").ConnectionHandler.createEdge(
        e,
        R,
        D,
        "XFBMAIBAViewerFieldsMaibaThreadListEdge",
      );
      return (o("react-relay").ConnectionHandler.insertEdgeBefore(R, x), S);
    }
    var T = "client:maiba_fab_promo";
    function D(e, t, n, r) {
      var a,
        i = p(e, t, null);
      if (i == null) {
        L(e, t, 1);
        return;
      }
      var l = "client:maiba_fab_promo_thread_node:" + T,
        s =
          (a = e.get(l)) != null
            ? a
            : e.create(l, "XFBMAIBAGenAICharmanderConversation");
      if (
        (f(e, s),
        s.setValue(T, "external_conversation_id"),
        s.setValue(!0, "is_unread"),
        s.setValue(Date.now(), "last_send_timestamp_ms"),
        s.setValue(t, "linked_ad_account"),
        n != null && s.setValue(n, "display_title"),
        r != null && s.setValue(r, "last_message_snippet"),
        _(i, T) == null)
      ) {
        L(e, t, 1);
        var u = o("react-relay").ConnectionHandler.createEdge(
          e,
          i,
          s,
          "XFBMAIBAViewerFieldsMaibaThreadListEdge",
        );
        o("react-relay").ConnectionHandler.insertEdgeBefore(i, u);
      }
    }
    function x(e, t, n) {
      var r = n != null ? String(n) : null,
        o = 0,
        a = m(e, t);
      if (a != null) {
        var i = a.getLinkedRecords("edges");
        if (i != null)
          for (var l of i) {
            var s = l == null ? void 0 : l.getLinkedRecord("node"),
              u = s == null ? void 0 : s.getValue("entry_point"),
              c = u === null || typeof u == "string",
              d = u === "SEYMOUR" || u === "SEYMOUR_SCHEDULED_TASK",
              _ =
                r == null ||
                r === "ALL" ||
                (r === "ORDINARY" && c && !d) ||
                (r === "CMO_ALL" && d) ||
                (r === "CMO_SCHEDULED_TASK" && u === "SEYMOUR_SCHEDULED_TASK");
            if (s != null && _ && s.getValue("is_unread") === !0) {
              (s.setValue(!1, "is_unread"), o++);
              var f = s.getValue("external_conversation_id");
              if (typeof f == "string") {
                var g = e
                  .getRoot()
                  .getLinkedRecord("fetch__XFBMAIBAConversation", { id: f });
                g == null || g.setValue(!1, "is_unread");
              }
            }
          }
      }
      if (r != null) {
        var h = p(e, t, null, r);
        h == null || h.setLinkedRecords([], "edges");
      }
      var y = e.getRoot();
      if (r != null) {
        var C = E(t, null, r);
        if ((y.setValue(0, C), o > 0)) {
          var b = new Set([E(t)]);
          t != null && b.add(E(null));
          for (var v of b) {
            var S = y.getValue(v);
            typeof S == "number" && y.setValue(Math.max(0, S - o), v);
          }
        }
        return;
      }
      var R = E(t);
      (y.setValue(0, R), t != null && y.setValue(0, E(null)));
    }
    function $(e, t, n) {
      var r = m(e, t);
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
      (l.ensureMAIBALocalConversationRecord = d),
      (l.deleteConversationRecord = y),
      (l.createRecordsForNewConversation = C),
      (l.insertConversationIntoThreadList = b),
      (l.updateConversationRecord = v),
      (l.ensureConversationInThreadList = S),
      (l.ensureNewConversationInThreadListOnSend = R),
      (l.updateUnreadThreadCount = L),
      (l.updateReminderUnreadThreadCount = k),
      (l.updateThreadIsUnreadInThreadList = I),
      (l.MAIBA_FAB_PROMO_MINI_INBOX_ROW_KEY = T),
      (l.insertPromoThreadIntoMiniInbox = D),
      (l.markAllThreadsAsReadInThreadList = x),
      (l.isThreadUnreadInConnection = $));
  },
  226,
);
