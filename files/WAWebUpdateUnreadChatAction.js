__d(
  "WAWebUpdateUnreadChatAction",
  [
    "fbt",
    "WAExponentialBackoff",
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
    "getErrorSafe",
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
      g,
      h,
      y = h || (h = o("react")),
      C = { maxTimeout: 8e3, minTimeout: 1e3, retries: 3 },
      b = 3,
      v = new WeakSet();
    function S(e, t) {
      var n = t.allowAction,
        r = n === void 0 ? !0 : n,
        a = t.showToast,
        i = a === void 0 ? !0 : a,
        l = t.unread;
      return x({
        allowAction: r,
        chat: o("WAWebStateUtils").unproxy(e),
        showToast: i,
        unread: l,
      });
    }
    function R(t) {
      o("WALogger")
        .WARN(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "Debounced sendSeen failed",
            ])),
        )
        .catching(r("getErrorSafe")(t))
        .sendLogs("debounced-send-seen-failed");
    }
    function L() {
      var e = null,
        t = new (o("WAShiftTimer").ShiftTimer)(function (t) {
          (I(t).catch(R), (e = null));
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
          u !== c && (t.cancel(), I(s).catch(R), (e = null));
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
    var E = L();
    function k(e) {
      return o("WAWebCmd").Cmd.isOfflineDeliveryEnd ? I(e) : E(e);
    }
    async function I(e) {
      var t = e.afterAvailable,
        n = t === void 0 ? !0 : t,
        r = e.chat,
        a = e.threadId,
        i = a === void 0 ? null : a;
      if (o("WAWebCurrentUser").isEmployee() && o("WAWebUim").isCmdPressed()) {
        o("WALogger").LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "sendSeen: skip since cmd is pressed",
            ])),
        );
        return;
      }
      var l = o("WAWebStateUtils").unproxy(r),
        s = "organic";
      await Promise.all([
        N({ chat: l, threadId: i, afterAvailable: n, readOrigin: s }),
        G({ chat: l, threadId: i, afterAvailable: n, readOrigin: s }),
      ]).catch(
        o("WAFilteredCatch").filteredCatch(
          o("WAWebBackendErrors").ServerStatusCodeError,
          function (e) {
            o("WALogger").WARN(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "sendSeen: got status ",
                  "",
                ])),
              e.status,
            );
          },
        ),
      );
    }
    function T(e, t, n) {
      return w({
        chat: o("WAWebStateUtils").unproxy(e),
        seenCount: t,
        shouldUpdatePendingSeenCount: n,
      });
    }
    function D(e) {
      return A(o("WAWebStateUtils").unproxy(e));
    }
    function x(e) {
      var t = e.allowAction,
        n = e.chat,
        a = e.showToast,
        i = a === void 0 ? !0 : a,
        l = e.toastId,
        u = l === void 0 ? o("WAWebActionToast.react").genId() : l,
        c = e.unread;
      c ? n.active && (n.markedUnread = !0) : (n.markedUnread = !1);
      var m = n.promises;
      if (m.markUnread) return m.markUnread;
      var p = (m.markUnread = c
          ? M(n)
          : Promise.all([
              N({ chat: n, readOrigin: "manual" }),
              G({ chat: n, readOrigin: "manual" }),
            ])),
        _ = c
          ? new (o("WAWebActionToast.react").ActionType)(s._(/*BTDS*/ ""))
          : new (o("WAWebActionToast.react").ActionType)(s._(/*BTDS*/ "")),
        f = p
          .then(function () {
            var e = c ? s._(/*BTDS*/ "") : s._(/*BTDS*/ "");
            return t
              ? new (o("WAWebActionToast.react").ActionType)(e, {
                  actionText: s._(/*BTDS*/ ""),
                  actionHandler: function () {
                    return x({
                      allowAction: t,
                      chat: n,
                      toastId: u,
                      unread: !c,
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
                  return c
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
            var e = c ? s._(/*BTDS*/ "") : s._(/*BTDS*/ "");
            return t
              ? new (o("WAWebActionToast.react").ActionType)(e, {
                  actionText: s._(/*BTDS*/ ""),
                  actionHandler: function () {
                    return x({
                      allowAction: t,
                      chat: n,
                      toastId: u,
                      unread: c,
                    });
                  },
                })
              : new (o("WAWebActionToast.react").ActionType)(e);
          });
      return (
        i &&
          o("WAWebToastManager").ToastManager.open(
            y.jsx(o("WAWebActionToast.react").ActionToast, {
              id: u,
              initialAction: _,
              pendingAction: f,
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
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
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
    function $(e) {
      r("gkx")("26258") ||
        o("WALogger").LOG(
          m ||
            (m = babelHelpers.taggedTemplateLiteralLoose([
              "[update-unread]: ",
              "",
            ])),
          e,
        );
    }
    function P(e) {
      var t = e.chat,
        n = e.readOrigin,
        r = e.threadId;
      q(t, function () {
        return N({ chat: t, threadId: r, readOrigin: n, claimNewOrigins: !1 });
      });
    }
    function N(e) {
      var t,
        n,
        r = e.afterAvailable,
        a = r === void 0 ? !0 : r,
        i = e.chat,
        l = e.claimNewOrigins,
        s = l === void 0 ? !0 : l,
        u = e.readOrigin,
        c = e.threadId,
        d = c === void 0 ? null : c;
      $("sendSeen: start");
      var m =
        d != null &&
        ((t =
          (n = i.aiThreads) == null || (n = n.get(d)) == null
            ? void 0
            : n.unreadCount) != null
          ? t
          : 0) > 0;
      if (i.markedUnread || (i.unreadCount === 0 && !m))
        return (
          $("markedUnread: " + String(i.markedUnread)),
          $("unreadCount: " + i.unreadCount),
          $("threadHasUnread: " + String(m)),
          $("sendSeen: end-1"),
          Promise.resolve()
        );
      if (!o("WAWebStreamModel").Stream.available && a) {
        $("stream unavailable");
        var _ = s
          ? o("WAWebSendReadReceiptJob").prepareChatReadReceiptOrigins(
              i.id,
              u,
              U(i, d),
              d != null ? d : void 0,
            )
          : null;
        return (
          i.listenToOnce(
            o("WAWebStreamModel").Stream,
            "change:available",
            function () {
              return j(
                _,
                function () {
                  return P({ chat: i, readOrigin: u, threadId: d });
                },
                function () {
                  return N({ chat: i, threadId: d, readOrigin: u });
                },
              );
            },
          ),
          $("sendSeen: end-2"),
          K(_)
        );
      }
      ($("stream available"),
        $("unreadCount: " + i.unreadCount),
        $("pendingSeenCount: " + i.pendingSeenCount));
      var f = i.unreadCount - i.pendingSeenCount;
      $("unreadCountDelta: " + f);
      var g = i.unreadCount === -1 && f === -1;
      if (f <= 0 && !g && d == null)
        return ($("sendSeen: end-3"), Promise.resolve());
      ((i.disableUnreadAnchor = !0),
        (i.pendingSeenCount = i.unreadCount),
        $("pendingSeenCount set to: " + i.unreadCount));
      var h = function () {
          ((i.pendingSeenCount -= f),
            $("pendingSeenCount set to " + i.pendingSeenCount),
            i.pendingSeenCount < 0 &&
              (o("WALogger").WARN(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "models:chat:sendSeen unread ",
                    " pending: ",
                    " delta: ",
                    "",
                  ])),
                i.unreadCount,
                i.pendingSeenCount,
                f,
              ),
              (i.pendingSeenCount = 0)));
        },
        y = U(i, d);
      return (
        o("WAWebBackendRuntime").isWebDiBackendEnabled()
          ? o("WAWebBackendRuntime").runtime(
              o("WAWebChatReadService").ChatReadService,
            ).sendConversationSeen
          : o("WAWebChatSendConversationSeen").sendConversationSeen
      )({
        chat: i,
        claimNewOrigins: s,
        key: y,
        readOrigin: u,
        threadId: d != null ? d : void 0,
        unreadDelta: f,
      })
        .then(async function (e) {
          var t = e.chatUnreadUpdate,
            n = e.fullyReadThreadIds;
          t != null ? O(i, t) : await F(i, f);
          for (var r of n) {
            var o,
              a = (o = i.aiThreads) == null ? void 0 : o.get(r);
            a && a.set({ unreadCount: 0 });
          }
        })
        .catch(
          o("WAFilteredCatch").filteredCatch(
            o("WAWebBackendErrors").ServerStatusCodeError,
            function (e) {
              throw (h(), e);
            },
          ),
        )
        .then(function () {
          $("sendSeen: end-4");
        });
    }
    async function M(e) {
      var t = e.getLastMsgKeyForAction();
      try {
        (await (
          o("WAWebBackendRuntime").isWebDiBackendEnabled()
            ? o("WAWebBackendRuntime").runtime(
                o("WAWebChatReadService").ChatReadService,
              ).sendConversationUnseen
            : o("WAWebChatSeenBridge").sendConversationUnseen
        )(e.id, t),
          await D(e));
      } catch (t) {
        return o("WAFilteredCatch").filteredCatch(
          o("WAWebBackendErrors").ServerStatusCodeError,
          function (t) {
            return ((e.markedUnread = !1), Promise.reject(t));
          },
        )(t);
      }
    }
    async function w(e) {
      var t = e.chat,
        n = e.seenCount,
        r = e.shouldUpdatePendingSeenCount,
        a = r === void 0 ? !1 : r;
      $("markSeen: start - " + String(n));
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
          $("pendingSeenCount set to " + t.pendingSeenCount));
      }
      (i != null && ((t.unreadCount = i), $("unreadCount set to " + i)),
        (t.unreadMsgAnchor = void 0),
        (t.markedUnread = !1),
        (t.unreadDividerOffset = 0),
        $("markSeen: end"));
    }
    async function A(e) {
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
    async function F(e, t, n) {
      n === void 0 && (n = !0);
      var r = await o("WAWebApiChat").getChatMeta(e.id),
        a = r.unreadCount;
      if (
        ($("updateUnreadCount: old " + e.unreadCount + ", new " + a),
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
    function O(e, t) {
      ((e.unreadCount = t.unreadCount),
        (e.unreadDividerOffset = t.unreadDividerOffset));
      var n = e.pendingSeenCount - t.markedAsReadCount;
      ((e.pendingSeenCount = Math.max(0, n)),
        $("sendSeen: updated chat unread count to " + t.unreadCount));
    }
    function B(e) {
      e.unreadMentionMetadata.reset();
    }
    function W(e) {
      o("WALogger")
        .WARN(
          _ ||
            (_ = babelHelpers.taggedTemplateLiteralLoose([
              "Deferred read receipt failed",
            ])),
        )
        .catching(r("getErrorSafe")(e))
        .sendLogs("deferred-read-receipt-failed");
    }
    function q(e, t) {
      if (v.has(e)) return;
      var n = { active: !1, cleared: !1, controller: null, exhaustedRuns: 0 };
      (e.once("remove", i), u());
      function a() {
        n.cleared ||
          ((n.cleared = !0),
          e.stopListening(o("WAWebStreamModel").Stream, "change:available", s),
          e.off("remove", i));
      }
      function i() {
        var t;
        n.cleared || (v.add(e), a(), (t = n.controller) == null || t.abort());
      }
      function l() {
        return o("WAWebStreamModel").Stream.available
          ? (n.exhaustedRuns++, n.exhaustedRuns >= b)
          : !1;
      }
      function s() {
        o("WAWebStreamModel").Stream.available && u();
      }
      function u() {
        if (!(n.cleared || n.active)) {
          if (
            (e.stopListening(
              o("WAWebStreamModel").Stream,
              "change:available",
              s,
            ),
            !o("WAWebStreamModel").Stream.available)
          ) {
            e.listenTo(o("WAWebStreamModel").Stream, "change:available", s);
            return;
          }
          ((n.active = !0),
            (n.controller = new AbortController()),
            o("WAExponentialBackoff")
              .exponentialBackoff(
                babelHelpers.extends({}, C, { signal: n.controller.signal }),
                function (e) {
                  return t().catch(function (t) {
                    var n = r("getErrorSafe")(t);
                    if (!o("WAWebStreamModel").Stream.available) throw n;
                    return e(n);
                  });
                },
              )
              .then(a)
              .catch(function (t) {
                if (!n.cleared) {
                  if (((n.active = !1), W(t), l())) {
                    a();
                    return;
                  }
                  e.listenTo(
                    o("WAWebStreamModel").Stream,
                    "change:available",
                    s,
                  );
                }
              }));
        }
      }
    }
    function U(e, t) {
      var n = r("gkx")("26258")
        ? e.getLastMsgKeyForAction()
        : e.lastReceivedKey;
      if (t != null) {
        var o,
          a = (o = e.aiThreads) == null ? void 0 : o.get(t);
        (a == null ? void 0 : a.lastReceivedKey) != null &&
          ((n = a.lastReceivedKey),
          $(
            "using thread-specific lastReceivedKey: " +
              a.lastReceivedKey.toString(),
          ));
      }
      return n;
    }
    function V(e) {
      r("gkx")("26258") ||
        o("WALogger").LOG(
          f ||
            (f = babelHelpers.taggedTemplateLiteralLoose([
              "[message-edit/send-seen] ",
              "",
            ])),
          e,
        );
    }
    var H = new (o("WAWebPromiseQueue").PromiseQueue)();
    async function G(e) {
      var t,
        n = e.afterAvailable,
        r = n === void 0 ? !0 : n,
        a = e.chat,
        i = e.claimNewOrigins,
        l = i === void 0 ? !0 : i,
        s = e.readOrigin,
        u = e.threadId,
        c = u === void 0 ? null : u,
        d = c != null ? ((t = a.aiThreads) == null ? void 0 : t.get(c)) : null,
        m = d != null ? d.unreadEditTimestampMs : a.unreadEditTimestampMs;
      if (m != null) {
        if (
          (V("sendSeen: start - " + String(m)),
          !o("WAWebStreamModel").Stream.available && r)
        ) {
          var p = l
            ? o("WAWebSendReadReceiptJob").prepareEditedReadReceiptOrigins(
                a.id,
                s,
                c != null ? c : void 0,
              )
            : null;
          return (
            a.listenToOnce(
              o("WAWebStreamModel").Stream,
              "change:available",
              function () {
                return j(
                  p,
                  function () {
                    return Q({ chat: a, readOrigin: s, threadId: c });
                  },
                  function () {
                    return G({ chat: a, threadId: c, readOrigin: s });
                  },
                );
              },
            ),
            V("sendSeen: end - stream unavailable"),
            K(p)
          );
        }
        await H.enqueue(function () {
          return X(a, d, c, s, m, l);
        });
      }
    }
    function z(e, t, n) {
      return !n || t !== e.unreadEditTimestampMs;
    }
    function j(e, t, n) {
      if (e == null) {
        t();
        return;
      }
      e.then(t, function () {
        return n().catch(W);
      });
    }
    function K(e) {
      return (e != null ? e : Promise.resolve()).catch(function (e) {
        o("WALogger")
          .WARN(
            g ||
              (g = babelHelpers.taggedTemplateLiteralLoose([
                "Deferred read origin claim failed",
              ])),
          )
          .catching(r("getErrorSafe")(e))
          .sendLogs("deferred-read-origin-claim-failed");
      });
    }
    function Q(e) {
      var t = e.chat,
        n = e.readOrigin,
        r = e.threadId;
      q(t, function () {
        return G({ chat: t, threadId: r, readOrigin: n, claimNewOrigins: !1 });
      });
    }
    async function X(e, t, n, r, a, i) {
      var l = t != null ? t.unreadEditTimestampMs : e.unreadEditTimestampMs;
      if (l == null) {
        V("sendSeen: end - no unread edits");
        return;
      }
      var s = await (
          o("WAWebBackendRuntime").isWebDiBackendEnabled()
            ? o("WAWebBackendRuntime").runtime(
                o("WAWebChatReadService").ChatReadService,
              ).markEditedMsgsRead
            : o("WAWebSendReadReceiptJob").markEditedMsgsRead
        )(
          e.id,
          babelHelpers.extends(
            { trusted: e.trusted, readOrigin: r },
            i ? {} : { claimNewOrigins: !1 },
          ),
          n != null ? n : void 0,
        ),
        u = s.chatUnreadUpdate,
        c = s.fullyReadThreadIds;
      if ((u != null && O(e, u), c.length > 0)) {
        for (var d of c) {
          var m;
          (m = e.aiThreads) == null ||
            (m = m.get(d)) == null ||
            m.set({ unreadCount: 0, unreadEditTimestampMs: null });
        }
        V(
          "sendSeen: updated " +
            c.length +
            " thread unread counts and cleared timestamps",
        );
      }
      if ((V("sendSeen: marked edit as read"), n == null)) {
        if (z(e, a, i)) {
          V("sendSeen: end - may have unmarked unread edits");
          return;
        }
        ((e.unreadEditTimestampMs = null),
          await (
            o("WAWebBackendRuntime").isWebDiBackendEnabled()
              ? o("WAWebBackendRuntime").runtime(
                  o("WAWebChatStoreService").ChatStoreService,
                ).updateChatTable
              : o("WAWebDBUpdateChatTable").updateChatTable
          )(e.id, { unreadEditTimestampMs: null }),
          V("sendSeen: end - all edits are marked as read"));
      } else V("sendSeen: end - thread edits marked as read");
    }
    ((l.markUnread = S),
      (l.sendSeenDebounced = k),
      (l.sendSeen = I),
      (l.markSeen = T),
      (l.markUnseen = D),
      (l.updateUnreadCountMD = F),
      (l.clearUnreadMentions = B));
  },
  226,
);
