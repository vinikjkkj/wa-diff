__d(
  "WAWebUpdateUnreadChatAction",
  [
    "fbt",
    "WAFilteredCatch",
    "WALogger",
    "WAShiftTimer",
    "WAWebABProps",
    "WAWebActionToast.react",
    "WAWebApiChat",
    "WAWebBackendErrors",
    "WAWebChatGetters",
    "WAWebChatSeenBridge",
    "WAWebCmd",
    "WAWebConstantsDeprecated",
    "WAWebCurrentUser",
    "WAWebDBUpdateChatTable",
    "WAWebNoop",
    "WAWebPromiseQueue",
    "WAWebSendReadReceiptJob",
    "WAWebStateUtils",
    "WAWebStreamModel",
    "WAWebToastManager",
    "WAWebUim",
    "err",
    "gkx",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d,
      m,
      p,
      _,
      f = _ || (_ = o("react"));
    function g(e, t, n) {
      return (
        n === void 0 && (n = !0),
        R(o("WAWebStateUtils").unproxy(e), t, n)
      );
    }
    function h() {
      var e = null,
        t = new (o("WAShiftTimer").ShiftTimer)(function (t) {
          (b(t), (e = null));
        });
      return async function (n) {
        var r = n.afterAvailable,
          a = r === void 0 ? !0 : r,
          i = n.chat,
          l = n.threadId,
          s = e;
        if (s != null) {
          var u = s.chat.id.toString(),
            c = i.id.toString();
          u !== c && (t.cancel(), b(s), (e = null));
        }
        if (!t.isScheduled()) {
          var d = o("WAWebABProps").getABPropConfigValue(
            "web_resume_optimized_read_receipt_send_interval",
          );
          t.onOrAfter(d, { chat: i, threadId: l, afterAvailable: a });
        }
        e = { chat: i, threadId: l, afterAvailable: a };
      };
    }
    var y = h();
    function C(e) {
      return o("WAWebCmd").Cmd.isOfflineDeliveryEnd ? b(e) : y(e);
    }
    async function b(t) {
      var n = t.afterAvailable,
        r = n === void 0 ? !0 : n,
        a = t.chat,
        i = t.threadId,
        l = i === void 0 ? null : i;
      if (o("WAWebCurrentUser").isEmployee() && o("WAWebUim").isCmdPressed()) {
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "sendSeen: skip since cmd is pressed",
            ])),
        );
        return;
      }
      var s = o("WAWebStateUtils").unproxy(a);
      await Promise.all([
        E({ chat: s, threadId: l, afterAvailable: r }),
        M({ chat: s, threadId: l, afterAvailable: r }),
      ]).catch(
        o("WAFilteredCatch").filteredCatch(
          o("WAWebBackendErrors").ServerStatusCodeError,
          function (e) {
            o("WALogger").WARN(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "sendSeen: got status ",
                  "",
                ])),
              e.status,
            );
          },
        ),
      );
    }
    function v(e, t, n) {
      return I(o("WAWebStateUtils").unproxy(e), t, n);
    }
    function S(e) {
      return T(o("WAWebStateUtils").unproxy(e));
    }
    function R(e, t, n, a) {
      (a === void 0 && (a = o("WAWebActionToast.react").genId()),
        t ? e.active && (e.markedUnread = !0) : (e.markedUnread = !1));
      var i = e.promises;
      if (i.markUnread) return i.markUnread;
      var l = (i.markUnread = t
          ? k(e)
          : Promise.all([E({ chat: e }), M({ chat: e })])),
        u = t
          ? new (o("WAWebActionToast.react").ActionType)(
              s._(/*BTDS*/ "Marking as unread"),
            )
          : new (o("WAWebActionToast.react").ActionType)(
              s._(/*BTDS*/ "Marking as read"),
            ),
        d = l
          .then(function () {
            var r = t
              ? s._(/*BTDS*/ "Marked as unread")
              : s._(/*BTDS*/ "Marked as read");
            return n
              ? new (o("WAWebActionToast.react").ActionType)(r, {
                  actionText: s._(/*BTDS*/ "Undo"),
                  actionHandler: function () {
                    return R(e, !t, n, a);
                  },
                })
              : new (o("WAWebActionToast.react").ActionType)(r);
          })
          .catch(
            o("WAFilteredCatch").filteredCatch(
              o("WAWebBackendErrors").ServerStatusCodeError,
              function (e) {
                if (e.status >= 400)
                  return t
                    ? new (o("WAWebActionToast.react").ActionType)(
                        s._(/*BTDS*/ "Couldn't mark chat as unread."),
                      )
                    : new (o("WAWebActionToast.react").ActionType)(
                        s._(/*BTDS*/ "Couldn't mark chat as read."),
                      );
                throw r("err")("invalid response status");
              },
            ),
          )
          .catch(function () {
            var r = t
              ? s._(/*BTDS*/ "Couldn't mark chat as unread.")
              : s._(/*BTDS*/ "Couldn't mark chat as read.");
            return n
              ? new (o("WAWebActionToast.react").ActionType)(r, {
                  actionText: s._(/*BTDS*/ "Try again."),
                  actionHandler: function () {
                    return R(e, t, n, a);
                  },
                })
              : new (o("WAWebActionToast.react").ActionType)(r);
          });
      return (
        o("WAWebToastManager").ToastManager.open(
          f.jsx(o("WAWebActionToast.react").ActionToast, {
            id: a,
            initialAction: u,
            pendingAction: d,
          }),
        ),
        l
          .then(r("WAWebNoop"))
          .catch(
            o("WAFilteredCatch").filteredCatch(
              o("WAWebBackendErrors").ServerStatusCodeError,
              function (e) {
                o("WALogger").WARN(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "markUnread: got status ",
                      "",
                    ])),
                  e.status,
                );
              },
            ),
          )
          .finally(function () {
            i.markUnread = null;
          })
      );
    }
    function L(e) {
      r("gkx")("26258") ||
        o("WALogger").LOG(
          d ||
            (d = babelHelpers.taggedTemplateLiteralLoose([
              "[update-unread]: ",
              "",
            ])),
          e,
        );
    }
    function E(e) {
      var t,
        n,
        a = e.afterAvailable,
        i = a === void 0 ? !0 : a,
        l = e.chat,
        s = e.threadId,
        u = s === void 0 ? null : s;
      L("sendSeen: start");
      var c =
        u != null &&
        ((t =
          (n = l.aiThreads) == null || (n = n.get(u)) == null
            ? void 0
            : n.unreadCount) != null
          ? t
          : 0) > 0;
      if (l.markedUnread || (l.unreadCount === 0 && !c))
        return (
          L("markedUnread: " + String(l.markedUnread)),
          L("unreadCount: " + l.unreadCount),
          L("threadHasUnread: " + String(c)),
          L("sendSeen: end-1"),
          Promise.resolve()
        );
      if (!o("WAWebStreamModel").Stream.available && i)
        return (
          L("stream unavailable"),
          l.listenToOnce(
            o("WAWebStreamModel").Stream,
            "change:available",
            function () {
              return E({ chat: l, threadId: u });
            },
          ),
          L("sendSeen: end-2"),
          Promise.resolve()
        );
      (L("stream available"),
        L("unreadCount: " + l.unreadCount),
        L("pendingSeenCount: " + l.pendingSeenCount));
      var d = l.unreadCount - l.pendingSeenCount;
      L("unreadCountDelta: " + d);
      var p = l.unreadCount === -1 && d === -1;
      if (d <= 0 && !p && u == null)
        return (L("sendSeen: end-3"), Promise.resolve());
      ((l.disableUnreadAnchor = !0),
        (l.pendingSeenCount = l.unreadCount),
        L("pendingSeenCount set to: " + l.unreadCount));
      var _ = function () {
          ((l.pendingSeenCount -= d),
            L("pendingSeenCount set to " + l.pendingSeenCount),
            l.pendingSeenCount < 0 &&
              (o("WALogger").WARN(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "models:chat:sendSeen unread ",
                    " pending: ",
                    " delta: ",
                    "",
                  ])),
                l.unreadCount,
                l.pendingSeenCount,
                d,
              ),
              (l.pendingSeenCount = 0)));
        },
        f = r("gkx")("26258") ? l.getLastMsgKeyForAction() : l.lastReceivedKey;
      if (u != null) {
        var g,
          h = (g = l.aiThreads) == null ? void 0 : g.get(u);
        (h == null ? void 0 : h.lastReceivedKey) != null &&
          ((f = h.lastReceivedKey),
          L(
            "using thread-specific lastReceivedKey: " +
              h.lastReceivedKey.toString(),
          ));
      }
      return o("WAWebChatSeenBridge")
        .sendConversationSeen({
          chat: l,
          key: f,
          threadId: u != null ? u : void 0,
          unreadDelta: d,
        })
        .then(async function (e) {
          var t = e.chatUnreadUpdate,
            n = e.fullyReadThreadIds;
          t != null ? x(l, t) : await D(l, d);
          for (var r of n) {
            var o,
              a = (o = l.aiThreads) == null ? void 0 : o.get(r);
            a && a.set({ unreadCount: 0 });
          }
        })
        .catch(
          o("WAFilteredCatch").filteredCatch(
            o("WAWebBackendErrors").ServerStatusCodeError,
            function (e) {
              return (_(), Promise.reject(e));
            },
          ),
        )
        .then(function () {
          L("sendSeen: end-4");
        });
    }
    async function k(e) {
      var t = e.getLastMsgKeyForAction();
      try {
        (await o("WAWebChatSeenBridge").sendConversationUnseen(e.id, t),
          await S(e));
      } catch (t) {
        return o("WAFilteredCatch").filteredCatch(
          o("WAWebBackendErrors").ServerStatusCodeError,
          function (t) {
            return ((e.markedUnread = !1), Promise.reject(t));
          },
        )(t);
      }
    }
    async function I(e, t, n) {
      (n === void 0 && (n = !1), L("markSeen: start - " + String(t)));
      var r = null;
      t != null
        ? t > 0 && t <= e.unreadCount
          ? (r = e.unreadCount - t)
          : t === -1 && e.unreadCount <= 0 && (r = 0)
        : (r = 0);
      var a =
        r == null
          ? Promise.resolve()
          : o("WAWebChatSeenBridge").markConversationSeen(e.id, r);
      if ((await a, t != null && n)) {
        var i = e.pendingSeenCount - t;
        ((e.pendingSeenCount = Math.max(0, i)),
          L("pendingSeenCount set to " + e.pendingSeenCount));
      }
      (r != null && ((e.unreadCount = r), L("unreadCount set to " + r)),
        (e.unreadMsgAnchor = void 0),
        (e.markedUnread = !1),
        (e.unreadDividerOffset = 0),
        L("markSeen: end"));
    }
    async function T(e) {
      if (
        e.unreadCount === 0 ||
        e.unreadCount === r("WAWebConstantsDeprecated").MARKED_AS_UNREAD
      )
        return (
          e.active && (e.markedUnread = !0),
          o("WAWebChatSeenBridge")
            .markConversationUnseen(e.id)
            .then(function () {
              e.unreadCount = r("WAWebConstantsDeprecated").MARKED_AS_UNREAD;
            })
        );
    }
    async function D(e, t, n) {
      n === void 0 && (n = !0);
      var r = await o("WAWebApiChat").getChatMeta(e.id),
        a = r.unreadCount;
      if (
        (L("updateUnreadCount: old " + e.unreadCount + ", new " + a),
        (e.unreadCount = a),
        (e.unreadDividerOffset = 0),
        (e.unreadMsgAnchor = void 0),
        (e.markedUnread = !1),
        n)
      ) {
        var i = e.pendingSeenCount - t;
        e.pendingSeenCount = Math.max(0, i);
      }
    }
    function x(e, t) {
      ((e.unreadCount = t.unreadCount),
        (e.unreadDividerOffset = t.unreadDividerOffset));
      var n = e.pendingSeenCount - t.markedAsReadCount;
      ((e.pendingSeenCount = Math.max(0, n)),
        L("sendSeen: updated chat unread count to " + t.unreadCount));
    }
    function $(e) {
      if (o("WAWebChatGetters").getIsGroup(e)) {
        var t;
        (t = e.groupMetadata) == null || t.unreadMentionMetadata.reset();
      }
    }
    function P(e) {
      r("gkx")("26258") ||
        o("WALogger").LOG(
          p ||
            (p = babelHelpers.taggedTemplateLiteralLoose([
              "[message-edit/send-seen] ",
              "",
            ])),
          e,
        );
    }
    var N = new (o("WAWebPromiseQueue").PromiseQueue)();
    async function M(e) {
      var t,
        n = e.afterAvailable,
        r = n === void 0 ? !0 : n,
        a = e.chat,
        i = e.threadId,
        l = i === void 0 ? null : i,
        s = l != null ? ((t = a.aiThreads) == null ? void 0 : t.get(l)) : null,
        u = s != null ? s.unreadEditTimestampMs : a.unreadEditTimestampMs;
      if (u != null) {
        if (
          (P("sendSeen: start - " + String(u)),
          !o("WAWebStreamModel").Stream.available && r)
        ) {
          (a.listenToOnce(
            o("WAWebStreamModel").Stream,
            "change:available",
            function () {
              return M({ chat: a, threadId: l });
            },
          ),
            P("sendSeen: end - stream unavailable"));
          return;
        }
        await N.enqueue(async function () {
          var e = s != null ? s.unreadEditTimestampMs : a.unreadEditTimestampMs;
          if (e == null) {
            P("sendSeen: end - no unread edits");
            return;
          }
          var t = await o("WAWebSendReadReceiptJob").markEditedMsgsRead(
              a.id,
              { trusted: a.trusted },
              l != null ? l : void 0,
            ),
            n = t.chatUnreadUpdate,
            r = t.fullyReadThreadIds;
          if ((n != null && x(a, n), r.length > 0)) {
            for (var i of r) {
              var c;
              (c = a.aiThreads) == null ||
                (c = c.get(i)) == null ||
                c.set({ unreadCount: 0, unreadEditTimestampMs: null });
            }
            P(
              "sendSeen: updated " +
                r.length +
                " thread unread counts and cleared timestamps",
            );
          }
          if ((P("sendSeen: marked edit as read"), l == null)) {
            if (u !== a.unreadEditTimestampMs) {
              P("sendSeen: end - has new unread edits");
              return;
            }
            ((a.unreadEditTimestampMs = null),
              await o("WAWebDBUpdateChatTable").updateChatTable(a.id, {
                unreadEditTimestampMs: null,
              }),
              P("sendSeen: end - all edits are marked as read"));
          } else P("sendSeen: end - thread edits marked as read");
        });
      }
    }
    ((l.markUnread = g),
      (l.sendSeenDebounced = C),
      (l.sendSeen = b),
      (l.markSeen = v),
      (l.markUnseen = S),
      (l.updateUnreadCountMD = D),
      (l.clearUnreadMentions = $));
  },
  226,
);
