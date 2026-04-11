__d(
  "WAWebUpdateUnreadChatAction",
  [
    "fbt",
    "Promise",
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
    "asyncToGeneratorRuntime",
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
      f,
      g = f || (f = o("react"));
    function h(e, t, n) {
      return (
        n === void 0 && (n = !0),
        E(o("WAWebStateUtils").unproxy(e), t, n)
      );
    }
    function y() {
      var e = null,
        t = new (o("WAShiftTimer").ShiftTimer)(function (t) {
          (v(t), (e = null));
        });
      return (function () {
        var r = n("asyncToGeneratorRuntime").asyncToGenerator(function* (n) {
          var r = n.afterAvailable,
            a = r === void 0 ? !0 : r,
            i = n.chat,
            l = n.threadId,
            s = e;
          if (s != null) {
            var u = s.chat.id.toString(),
              c = i.id.toString();
            u !== c && (t.cancel(), v(s), (e = null));
          }
          if (!t.isScheduled()) {
            var d = o("WAWebABProps").getABPropConfigValue(
              "web_resume_optimized_read_receipt_send_interval",
            );
            t.onOrAfter(d, { chat: i, threadId: l, afterAvailable: a });
          }
          e = { chat: i, threadId: l, afterAvailable: a };
        });
        return function (e) {
          return r.apply(this, arguments);
        };
      })();
    }
    var C = y(),
      b = function (t) {
        return o("WAWebCmd").Cmd.isOfflineDeliveryEnd ? v(t) : C(t);
      };
    function v(e) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.afterAvailable,
            r = t === void 0 ? !0 : t,
            a = e.chat,
            i = e.threadId,
            l = i === void 0 ? null : i;
          if (
            o("WAWebCurrentUser").isEmployee() &&
            o("WAWebUim").isCmdPressed()
          ) {
            o("WALogger").LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "sendSeen: skip since cmd is pressed",
                ])),
            );
            return;
          }
          var s = o("WAWebStateUtils").unproxy(a);
          yield (_ || (_ = n("Promise")))
            .all([
              I({ chat: s, threadId: l, afterAvailable: r }),
              W({ chat: s, threadId: l, afterAvailable: r }),
            ])
            .catch(
              o("WAFilteredCatch").filteredCatch(
                o("WAWebBackendErrors").ServerStatusCodeError,
                function (e) {
                  o("WALogger").WARN(
                    p ||
                      (p = babelHelpers.taggedTemplateLiteralLoose([
                        "sendSeen: got status ",
                        "",
                      ])),
                    e.status,
                  );
                },
              ),
            );
        })),
        S.apply(this, arguments)
      );
    }
    function R(e, t, n) {
      return x(o("WAWebStateUtils").unproxy(e), t, n);
    }
    function L(e) {
      return P(o("WAWebStateUtils").unproxy(e));
    }
    function E(t, a, i, l) {
      (l === void 0 && (l = o("WAWebActionToast.react").genId()),
        a ? t.active && (t.markedUnread = !0) : (t.markedUnread = !1));
      var u = t.promises;
      if (u.markUnread) return u.markUnread;
      var c = (u.markUnread = a
          ? T(t)
          : (_ || (_ = n("Promise"))).all([I({ chat: t }), W({ chat: t })])),
        d = a
          ? new (o("WAWebActionToast.react").ActionType)(
              s._(/*BTDS*/ "Marking as unread"),
            )
          : new (o("WAWebActionToast.react").ActionType)(
              s._(/*BTDS*/ "Marking as read"),
            ),
        m = c
          .then(function () {
            var e = a
              ? s._(/*BTDS*/ "Marked as unread")
              : s._(/*BTDS*/ "Marked as read");
            return i
              ? new (o("WAWebActionToast.react").ActionType)(e, {
                  actionText: s._(/*BTDS*/ "Undo"),
                  actionHandler: function () {
                    return E(t, !a, i, l);
                  },
                })
              : new (o("WAWebActionToast.react").ActionType)(e);
          })
          .catch(
            o("WAFilteredCatch").filteredCatch(
              o("WAWebBackendErrors").ServerStatusCodeError,
              function (e) {
                if (e.status >= 400)
                  return a
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
            var e = a
              ? s._(/*BTDS*/ "Couldn't mark chat as unread.")
              : s._(/*BTDS*/ "Couldn't mark chat as read.");
            return i
              ? new (o("WAWebActionToast.react").ActionType)(e, {
                  actionText: s._(/*BTDS*/ "Try again."),
                  actionHandler: function () {
                    return E(t, a, i, l);
                  },
                })
              : new (o("WAWebActionToast.react").ActionType)(e);
          });
      return (
        o("WAWebToastManager").ToastManager.open(
          g.jsx(o("WAWebActionToast.react").ActionToast, {
            id: l,
            initialAction: d,
            pendingAction: m,
          }),
        ),
        c
          .then(r("WAWebNoop"))
          .catch(
            o("WAFilteredCatch").filteredCatch(
              o("WAWebBackendErrors").ServerStatusCodeError,
              function (t) {
                o("WALogger").WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "markUnread: got status ",
                      "",
                    ])),
                  t.status,
                );
              },
            ),
          )
          .finally(function () {
            u.markUnread = null;
          })
      );
    }
    function k(e) {
      r("gkx")("26258") ||
        o("WALogger").LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "[update-unread]: ",
              "",
            ])),
          e,
        );
    }
    function I(e) {
      var t = e.afterAvailable,
        a = t === void 0 ? !0 : t,
        i = e.chat,
        l = e.threadId,
        s = l === void 0 ? null : l;
      if ((k("sendSeen: start"), i.markedUnread || i.unreadCount === 0))
        return (
          k("markedUnread: " + String(i.markedUnread)),
          k("unreadCount: " + i.unreadCount),
          k("sendSeen: end-1"),
          (_ || (_ = n("Promise"))).resolve()
        );
      if (!o("WAWebStreamModel").Stream.available && a)
        return (
          k("stream unavailable"),
          i.listenToOnce(
            o("WAWebStreamModel").Stream,
            "change:available",
            function () {
              return I({ chat: i, threadId: s });
            },
          ),
          k("sendSeen: end-2"),
          (_ || (_ = n("Promise"))).resolve()
        );
      (k("stream available"),
        k("unreadCount: " + i.unreadCount),
        k("pendingSeenCount: " + i.pendingSeenCount));
      var u = i.unreadCount - i.pendingSeenCount;
      k("unreadCountDelta: " + u);
      var d = i.unreadCount === -1 && u === -1;
      if (u <= 0 && !d && s == null)
        return (k("sendSeen: end-3"), (_ || (_ = n("Promise"))).resolve());
      ((i.disableUnreadAnchor = !0),
        (i.pendingSeenCount = i.unreadCount),
        k("pendingSeenCount set to: " + i.unreadCount));
      var m = function () {
          ((i.pendingSeenCount -= u),
            k("pendingSeenCount set to " + i.pendingSeenCount),
            i.pendingSeenCount < 0 &&
              (o("WALogger").WARN(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "models:chat:sendSeen unread ",
                    " pending: ",
                    " delta: ",
                    "",
                  ])),
                i.unreadCount,
                i.pendingSeenCount,
                u,
              ),
              (i.pendingSeenCount = 0)));
        },
        p = r("gkx")("26258") ? i.getLastMsgKeyForAction() : i.lastReceivedKey;
      if (s != null) {
        var f,
          g = (f = i.aiThreads) == null ? void 0 : f.get(s);
        (g == null ? void 0 : g.lastReceivedKey) != null &&
          ((p = g.lastReceivedKey),
          k(
            "using thread-specific lastReceivedKey: " +
              g.lastReceivedKey.toString(),
          ));
      }
      return o("WAWebChatSeenBridge")
        .sendConversationSeen(i, p, u, s != null ? s : void 0)
        .then(
          (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = e.chatUnreadUpdate,
                  n = e.fullyReadThreadIds;
                t != null ? A(i, t) : yield M(i, u);
                for (var r of n) {
                  var o,
                    a = (o = i.aiThreads) == null ? void 0 : o.get(r);
                  a && a.set({ unreadCount: 0 });
                }
              },
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
        )
        .catch(
          o("WAFilteredCatch").filteredCatch(
            o("WAWebBackendErrors").ServerStatusCodeError,
            function (e) {
              return (m(), (_ || (_ = n("Promise"))).reject(e));
            },
          ),
        )
        .then(function () {
          k("sendSeen: end-4");
        });
    }
    function T(e) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.getLastMsgKeyForAction();
          try {
            (yield o("WAWebChatSeenBridge").sendConversationUnseen(e.id, t),
              yield L(e));
          } catch (t) {
            return o("WAFilteredCatch").filteredCatch(
              o("WAWebBackendErrors").ServerStatusCodeError,
              function (t) {
                return (
                  (e.markedUnread = !1),
                  (_ || (_ = n("Promise"))).reject(t)
                );
              },
            )(t);
          }
        })),
        D.apply(this, arguments)
      );
    }
    function x(e, t, n) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, r) {
          (r === void 0 && (r = !1), k("markSeen: start - " + String(t)));
          var a = null;
          t != null
            ? t > 0 && t <= e.unreadCount
              ? (a = e.unreadCount - t)
              : t === -1 && e.unreadCount <= 0 && (a = 0)
            : (a = 0);
          var i =
            a == null
              ? (_ || (_ = n("Promise"))).resolve()
              : o("WAWebChatSeenBridge").markConversationSeen(e.id, a);
          if ((yield i, t != null && r)) {
            var l = e.pendingSeenCount - t;
            ((e.pendingSeenCount = Math.max(0, l)),
              k("pendingSeenCount set to " + e.pendingSeenCount));
          }
          (a != null && ((e.unreadCount = a), k("unreadCount set to " + a)),
            (e.unreadMsgAnchor = void 0),
            (e.markedUnread = !1),
            (e.unreadDividerOffset = 0),
            k("markSeen: end"));
        })),
        $.apply(this, arguments)
      );
    }
    function P(e) {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (
            e.unreadCount === 0 ||
            e.unreadCount === r("WAWebConstantsDeprecated").MARKED_AS_UNREAD
          )
            return (
              e.active && (e.markedUnread = !0),
              o("WAWebChatSeenBridge")
                .markConversationUnseen(e.id)
                .then(function () {
                  e.unreadCount = r(
                    "WAWebConstantsDeprecated",
                  ).MARKED_AS_UNREAD;
                })
            );
        })),
        N.apply(this, arguments)
      );
    }
    function M(e, t, n) {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          n === void 0 && (n = !0);
          var r = yield o("WAWebApiChat").getChatMeta(e.id),
            a = r.unreadCount;
          if (
            (k("updateUnreadCount: old " + e.unreadCount + ", new " + a),
            (e.unreadCount = a),
            (e.unreadDividerOffset = 0),
            (e.unreadMsgAnchor = void 0),
            (e.markedUnread = !1),
            n)
          ) {
            var i = e.pendingSeenCount - t;
            e.pendingSeenCount = Math.max(0, i);
          }
        })),
        w.apply(this, arguments)
      );
    }
    function A(e, t) {
      ((e.unreadCount = t.unreadCount),
        (e.unreadDividerOffset = t.unreadDividerOffset));
      var n = e.pendingSeenCount - t.markedAsReadCount;
      ((e.pendingSeenCount = Math.max(0, n)),
        k("sendSeen: updated chat unread count to " + t.unreadCount));
    }
    function F(e) {
      if (o("WAWebChatGetters").getIsGroup(e)) {
        var t;
        (t = e.groupMetadata) == null || t.unreadMentionMetadata.reset();
      }
    }
    function O(e) {
      r("gkx")("26258") ||
        o("WALogger").LOG(
          d ||
            (d = babelHelpers.taggedTemplateLiteralLoose([
              "[message-edit/send-seen] ",
              "",
            ])),
          e,
        );
    }
    var B = new (o("WAWebPromiseQueue").PromiseQueue)();
    function W(e) {
      return q.apply(this, arguments);
    }
    function q() {
      return (
        (q = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            r = e.afterAvailable,
            a = r === void 0 ? !0 : r,
            i = e.chat,
            l = e.threadId,
            s = l === void 0 ? null : l,
            u =
              s != null
                ? (t = i.aiThreads) == null
                  ? void 0
                  : t.get(s)
                : null,
            c = u != null ? u.unreadEditTimestampMs : i.unreadEditTimestampMs;
          if (c != null) {
            if (
              (O("sendSeen: start - " + String(c)),
              !o("WAWebStreamModel").Stream.available && a)
            ) {
              (i.listenToOnce(
                o("WAWebStreamModel").Stream,
                "change:available",
                function () {
                  return W({ chat: i, threadId: s });
                },
              ),
                O("sendSeen: end - stream unavailable"));
              return;
            }
            yield B.enqueue(
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                var e =
                  u != null ? u.unreadEditTimestampMs : i.unreadEditTimestampMs;
                if (e == null) {
                  O("sendSeen: end - no unread edits");
                  return;
                }
                var t = yield o("WAWebSendReadReceiptJob").markEditedMsgsRead(
                    i.id,
                    { trusted: i.trusted },
                    s != null ? s : void 0,
                  ),
                  n = t.chatUnreadUpdate,
                  r = t.fullyReadThreadIds;
                if ((n != null && A(i, n), r.length > 0)) {
                  for (var a of r) {
                    var l;
                    (l = i.aiThreads) == null ||
                      (l = l.get(a)) == null ||
                      l.set({ unreadCount: 0, unreadEditTimestampMs: null });
                  }
                  O(
                    "sendSeen: updated " +
                      r.length +
                      " thread unread counts and cleared timestamps",
                  );
                }
                if ((O("sendSeen: marked edit as read"), s == null)) {
                  if (c !== i.unreadEditTimestampMs) {
                    O("sendSeen: end - has new unread edits");
                    return;
                  }
                  ((i.unreadEditTimestampMs = null),
                    yield o("WAWebDBUpdateChatTable").updateChatTable(i.id, {
                      unreadEditTimestampMs: null,
                    }),
                    O("sendSeen: end - all edits are marked as read"));
                } else O("sendSeen: end - thread edits marked as read");
              }),
            );
          }
        })),
        q.apply(this, arguments)
      );
    }
    ((l.markUnread = h),
      (l.sendSeenDebounced = b),
      (l.sendSeen = v),
      (l.markSeen = R),
      (l.markUnseen = L),
      (l.updateUnreadCountMD = M),
      (l.clearUnreadMentions = F));
  },
  226,
);
