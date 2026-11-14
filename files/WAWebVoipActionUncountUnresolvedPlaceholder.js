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
    "WAWebVoipPlaceholderUnreadRows",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d = 3e5;
    function m(t) {
      o("WAPromiseDelays")
        .delayMs(d)
        .then(function () {
          return o("WAWebMessageQueue")
            .onMessageQueue({
              chatWid: t.remote,
              isOffline: !1,
              msgCategory: null,
              action: function () {
                return _(t);
              },
            })
            .catch(function (e) {
              return o("WAWebMessageQueueTimeout").handleMessageQueueTimeout(
                e,
                "voip_placeholder_unread",
              );
            });
        })
        .catch(function (n) {
          p(n) ||
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
        });
    }
    function p(e) {
      return (
        e instanceof o("WAWebDbErrors").DbOnLogoutAbort ||
        e instanceof o("WAWebDbErrors").DbClosedOnTakeover ||
        e instanceof o("WAWebDbErrors").DbNotFoundOnTakeover
      );
    }
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield g(e),
            n = t.isStopped,
            r = t.storedViewMode,
            a = t.wasUnread;
          if (
            (o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
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
              s = i != null && l != null && l.isActiveUnreadMsg(i);
            (i == null ||
              i.set({
                viewMode:
                  o("WAWebViewMode.flow").ViewModeType
                    .CALL_LOG_OFFLINE_RESUME_UNCOUNTED,
              }),
              l != null && y(l, a, s),
              o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[voip] placeholder ",
                    ": no longer counted as unread",
                  ])),
                e.id,
              ));
          }
        })),
        f.apply(this, arguments)
      );
    }
    function g(e) {
      var t = e.toString(),
        r = e.remote.toString();
      return o("WAWebModelStorageUtils")
        .getStorage()
        .lock(
          ["message", "chat"],
          (function () {
            var a = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (n) {
                var a,
                  i,
                  l,
                  u = n[0],
                  c = n[1],
                  d = (a = yield u.get(t, !1)) == null ? void 0 : a.viewMode;
                if (!h(d, o("WAWebMsgCollection").MsgCollection.get(e)))
                  return { isStopped: !1, storedViewMode: d, wasUnread: !1 };
                var m =
                  (i = (l = yield c.get(r)) == null ? void 0 : l.unreadCount) !=
                  null
                    ? i
                    : 0;
                if (
                  o("WAWebVoipPlaceholderUnreadRows").hasTooManyUnreadToWalk(m)
                )
                  return (
                    o("WALogger").LOG(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "[voip] placeholder ",
                          ": left counted, ",
                          " unread",
                        ])),
                      e.id,
                      m,
                    ),
                    { isStopped: !1, storedViewMode: d, wasUnread: !1 }
                  );
                var p = yield o(
                  "WAWebVoipPlaceholderUnreadRows",
                ).isAmongLastUnreadRows(u, r, t, m);
                return (
                  yield u.merge(t, {
                    viewMode:
                      o("WAWebViewMode.flow").ViewModeType
                        .CALL_LOG_OFFLINE_RESUME_UNCOUNTED,
                    pendingReadReceipt: null,
                  }),
                  p && (yield c.merge(r, { unreadCount: m - 1 })),
                  { isStopped: !0, storedViewMode: d, wasUnread: p }
                );
              },
            );
            return function (e) {
              return a.apply(this, arguments);
            };
          })(),
        );
    }
    function h(e, t) {
      return (
        e === o("WAWebViewMode.flow").ViewModeType.CALL_LOG_OFFLINE_RESUME &&
        (t == null ||
          t.viewMode ===
            o("WAWebViewMode.flow").ViewModeType.CALL_LOG_OFFLINE_RESUME)
      );
    }
    function y(e, t, n) {
      (t && e.unreadCount > 0 && (e.unreadCount -= 1),
        n && e.activeUnreadCount > 0 && (e.activeUnreadCount -= 1));
    }
    ((l.scheduleUnresolvedPlaceholderCheck = m),
      (l.isSessionEndingDbError = p));
  },
  98,
);
