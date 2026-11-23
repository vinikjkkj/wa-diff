__d(
  "WAWebVoipActionUncountUnresolvedPlaceholder",
  [
    "WALogger",
    "WAPromiseDelays",
    "WAWebDbErrors",
    "WAWebFrontendMsgGetters",
    "WAWebMessageQueue",
    "WAWebMessageQueueTimeout",
    "WAWebModelStorageUtils",
    "WAWebMsgCollection",
    "WAWebViewMode.flow",
    "WAWebVoipCallLogPlaceholderTracker",
    "WAWebVoipPlaceholderUnreadRows",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d = 3e5,
      m = new Set();
    function p(e) {
      (m.add(e.toString()),
        o("WAPromiseDelays")
          .delayMs(d)
          .then(function () {
            return (m.delete(e.toString()), g(e));
          })
          .catch(function (t) {
            return h(e, t);
          }));
    }
    function _(e) {
      return e
        .filter(function (e) {
          return !m.has(e.toString());
        })
        .reduce(function (e, t) {
          return e.then(function () {
            return g(t).then(
              function () {},
              function (e) {
                throw (h(t, e), e);
              },
            );
          });
        }, Promise.resolve())
        .catch(function () {});
    }
    function f(e) {
      return (
        e instanceof o("WAWebDbErrors").DbOnLogoutAbort ||
        e instanceof o("WAWebDbErrors").DbClosedOnTakeover ||
        e instanceof o("WAWebDbErrors").DbNotFoundOnTakeover
      );
    }
    function g(e) {
      return o("WAWebMessageQueue")
        .onMessageQueue({
          chatWid: e.remote,
          isOffline: !1,
          msgCategory: null,
          action: function () {
            return y(e);
          },
        })
        .catch(function (e) {
          return o("WAWebMessageQueueTimeout").handleMessageQueueTimeout(
            e,
            "voip_placeholder_unread",
          );
        });
    }
    function h(t, n) {
      f(n) ||
        o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[voip] placeholder ",
                ": unread update failed",
              ])),
            t.id,
          )
          .catching(r("getErrorSafe")(n))
          .sendLogs("voip-placeholder-unread-update-fail");
    }
    async function y(e) {
      var t = await C(e),
        n = t.isStopped,
        r = t.storedViewMode,
        a = t.wasUnread;
      if (
        (o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "[voip] placeholder ",
              ": ",
              " after its merge",
            ])),
          e.id,
          String(r),
        ),
        !!n)
      ) {
        var i = o("WAWebMsgCollection").MsgCollection.get(e),
          l = o("WAWebFrontendMsgGetters").getMaybeChatByMsgKey(e, !1),
          c = i != null && l != null && l.isActiveUnreadMsg(i);
        (i == null ||
          i.set({
            viewMode:
              o("WAWebViewMode.flow").ViewModeType
                .CALL_LOG_OFFLINE_RESUME_UNCOUNTED,
          }),
          l != null && S(l, a, c),
          o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[voip] placeholder ",
                ": no longer counted as unread",
              ])),
            e.id,
          ));
      }
    }
    function C(e) {
      var t = e.toString(),
        n = e.remote.toString();
      return o("WAWebModelStorageUtils")
        .getStorage()
        .lock(["message", "chat"], async function (r) {
          var a,
            i,
            l,
            s = r[0],
            u = r[1],
            d = (a = await s.get(t, !1)) == null ? void 0 : a.viewMode,
            m = { isStopped: !1, storedViewMode: d, wasUnread: !1 };
          if (!b(e, d)) return m;
          var p =
            (i = (l = await u.get(n)) == null ? void 0 : l.unreadCount) != null
              ? i
              : 0;
          if (o("WAWebVoipPlaceholderUnreadRows").hasTooManyUnreadToWalk(p))
            return (
              o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[voip] placeholder ",
                    ": left counted, ",
                    " unread",
                  ])),
                e.id,
                p,
              ),
              m
            );
          var _ = await o(
            "WAWebVoipPlaceholderUnreadRows",
          ).isAmongLastUnreadRows(s, n, t, p);
          return b(e, d)
            ? (await s.merge(t, {
                viewMode:
                  o("WAWebViewMode.flow").ViewModeType
                    .CALL_LOG_OFFLINE_RESUME_UNCOUNTED,
                pendingReadReceipt: null,
              }),
              _ && (await u.merge(n, { unreadCount: p - 1 })),
              { isStopped: !0, storedViewMode: d, wasUnread: _ })
            : m;
        });
    }
    function b(e, t) {
      return (
        !o("WAWebVoipCallLogPlaceholderTracker").isPlaceholderPending(e.id) &&
        v(t, o("WAWebMsgCollection").MsgCollection.get(e))
      );
    }
    function v(e, t) {
      return (
        e === o("WAWebViewMode.flow").ViewModeType.CALL_LOG_OFFLINE_RESUME &&
        (t == null ||
          t.viewMode ===
            o("WAWebViewMode.flow").ViewModeType.CALL_LOG_OFFLINE_RESUME)
      );
    }
    function S(e, t, n) {
      (t && e.unreadCount > 0 && (e.unreadCount -= 1),
        n && e.activeUnreadCount > 0 && (e.activeUnreadCount -= 1));
    }
    ((l.UNRESOLVED_PLACEHOLDER_GRACE_MS = d),
      (l.scheduleUnresolvedPlaceholderCheck = p),
      (l.checkUnresolvedPlaceholdersNow = _),
      (l.isSessionEndingDbError = f));
  },
  98,
);
