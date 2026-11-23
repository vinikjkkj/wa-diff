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
    "WAWebBackendRuntime",
    "WAWebChatReadService",
    "WAWebChatSeenBridge",
    "WAWebChatSendConversationSeen",
    "WAWebChatStoreService",
    "WAWebChatUnreadConstants",
    "WAWebCmd",
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
    function g(e, t) {
      var n = t.allowAction,
        r = n === void 0 ? !0 : n,
        a = t.showToast,
        i = a === void 0 ? !0 : a,
        l = t.unread;
      return R({
        allowAction: r,
        chat: o("WAWebStateUtils").unproxy(e),
        showToast: i,
        unread: l,
      });
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
      return I({
        chat: o("WAWebStateUtils").unproxy(e),
        seenCount: t,
        shouldUpdatePendingSeenCount: n,
      });
    }
    function S(e) {
      return T(o("WAWebStateUtils").unproxy(e));
    }
    function R(e) {
      var t = e.allowAction,
        n = e.chat,
        a = e.showToast,
        i = a === void 0 ? !0 : a,
        l = e.toastId,
        u = l === void 0 ? o("WAWebActionToast.react").genId() : l,
        d = e.unread;
      d ? n.active && (n.markedUnread = !0) : (n.markedUnread = !1);
      var m = n.promises;
      if (m.markUnread) return m.markUnread;
      var p = (m.markUnread = d
          ? k(n)
          : Promise.all([E({ chat: n }), M({ chat: n })])),
        _ = d
          ? new (o("WAWebActionToast.react").ActionType)(s._(/*BTDS*/ ""))
          : new (o("WAWebActionToast.react").ActionType)(s._(/*BTDS*/ "")),
        g = p
          .then(function () {
            var e = d ? s._(/*BTDS*/ "") : s._(/*BTDS*/ "");
            return t
              ? new (o("WAWebActionToast.react").ActionType)(e, {
                  actionText: s._(/*BTDS*/ ""),
                  actionHandler: function () {
                    return R({
                      allowAction: t,
                      chat: n,
                      toastId: u,
                      unread: !d,
                    });
                  },
                })
              : new (o("WAWebActionToast.react").ActionType)(e);
          })
          .catch(
            o("WAFilteredCatch").filteredCatch(
              o("WAWebBackendErrors").ServerStatusCodeError,
              function (e) {
                if (e.status >= 400)
                  return d
                    ? new (o("WAWebActionToast.react").ActionType)(
                        s._(/*BTDS*/ ""),
                      )
                    : new (o("WAWebActionToast.react").ActionType)(
                        s._(/*BTDS*/ ""),
                      );
                throw r("err")("invalid response status");
              },
            ),
          )
          .catch(function () {
            var e = d ? s._(/*BTDS*/ "") : s._(/*BTDS*/ "");
            return t
              ? new (o("WAWebActionToast.react").ActionType)(e, {
                  actionText: s._(/*BTDS*/ ""),
                  actionHandler: function () {
                    return R({
                      allowAction: t,
                      chat: n,
                      toastId: u,
                      unread: d,
                    });
                  },
                })
              : new (o("WAWebActionToast.react").ActionType)(e);
          });
      return (
        i &&
          o("WAWebToastManager").ToastManager.open(
            f.jsx(o("WAWebActionToast.react").ActionToast, {
              id: u,
              initialAction: _,
              pendingAction: g,
            }),
          ),
        p
          .then(r("WAWebNoop"))
          .catch(
            o("WAFilteredCatch").filteredCatch(
              o("WAWebBackendErrors").ServerStatusCodeError,
              function (e) {
                if (
                  (o("WALogger").WARN(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "markUnread: got status ",
                        "",
                      ])),
                    e.status,
                  ),
                  !i)
                )
                  throw e;
              },
            ),
          )
          .finally(function () {
            m.markUnread = null;
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
      return (
        o("WAWebBackendRuntime").isWebDiBackendEnabled()
          ? o("WAWebBackendRuntime").runtime(
              o("WAWebChatReadService").ChatReadService,
            ).sendConversationSeen
          : o("WAWebChatSendConversationSeen").sendConversationSeen
      )({ chat: l, key: f, threadId: u != null ? u : void 0, unreadDelta: d })
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
        (await (
          o("WAWebBackendRuntime").isWebDiBackendEnabled()
            ? o("WAWebBackendRuntime").runtime(
                o("WAWebChatReadService").ChatReadService,
              ).sendConversationUnseen
            : o("WAWebChatSeenBridge").sendConversationUnseen
        )(e.id, t),
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
    async function I(e) {
      var t = e.chat,
        n = e.seenCount,
        r = e.shouldUpdatePendingSeenCount,
        a = r === void 0 ? !1 : r;
      L("markSeen: start - " + String(n));
      var i = null;
      n != null
        ? n > 0 && n <= t.unreadCount
          ? (i = t.unreadCount - n)
          : n === -1 && t.unreadCount <= 0 && (i = 0)
        : (i = 0);
      var l =
        i == null
          ? Promise.resolve()
          : (o("WAWebBackendRuntime").isWebDiBackendEnabled()
              ? o("WAWebBackendRuntime").runtime(
                  o("WAWebChatReadService").ChatReadService,
                ).markConversationSeen
              : o("WAWebChatSeenBridge").markConversationSeen)(t.id, i);
      if ((await l, n != null && a)) {
        var s = t.pendingSeenCount - n;
        ((t.pendingSeenCount = Math.max(0, s)),
          L("pendingSeenCount set to " + t.pendingSeenCount));
      }
      (i != null && ((t.unreadCount = i), L("unreadCount set to " + i)),
        (t.unreadMsgAnchor = void 0),
        (t.markedUnread = !1),
        (t.unreadDividerOffset = 0),
        L("markSeen: end"));
    }
    async function T(e) {
      if (
        e.unreadCount === 0 ||
        e.unreadCount === o("WAWebChatUnreadConstants").MARKED_AS_UNREAD
      )
        return (
          e.active && (e.markedUnread = !0),
          (o("WAWebBackendRuntime").isWebDiBackendEnabled()
            ? o("WAWebBackendRuntime").runtime(
                o("WAWebChatReadService").ChatReadService,
              ).markConversationUnseen
            : o("WAWebChatSeenBridge").markConversationUnseen)(e.id).then(
            function () {
              e.unreadCount = o("WAWebChatUnreadConstants").MARKED_AS_UNREAD;
            },
          )
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
      e.unreadMentionMetadata.reset();
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
          var t = await (
              o("WAWebBackendRuntime").isWebDiBackendEnabled()
                ? o("WAWebBackendRuntime").runtime(
                    o("WAWebChatReadService").ChatReadService,
                  ).markEditedMsgsRead
                : o("WAWebSendReadReceiptJob").markEditedMsgsRead
            )(a.id, { trusted: a.trusted }, l != null ? l : void 0),
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
              await (
                o("WAWebBackendRuntime").isWebDiBackendEnabled()
                  ? o("WAWebBackendRuntime").runtime(
                      o("WAWebChatStoreService").ChatStoreService,
                    ).updateChatTable
                  : o("WAWebDBUpdateChatTable").updateChatTable
              )(a.id, { unreadEditTimestampMs: null }),
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
