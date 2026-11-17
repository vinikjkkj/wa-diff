__d(
  "WAWebVoipActionUncountUnresolvedPlaceholder",
  [
    "Promise",
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
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m = 3e5,
      p = new Set();
    function _(e) {
      (p.add(e.toString()),
        o("WAPromiseDelays")
          .delayMs(m)
          .then(function () {
            return (p.delete(e.toString()), h(e));
          })
          .catch(function (t) {
            return y(e, t);
          }));
    }
    function f(e) {
      return e
        .filter(function (e) {
          return !p.has(e.toString());
        })
        .reduce(
          function (e, t) {
            return e.then(function () {
              return h(t).then(
                function () {},
                function (e) {
                  throw (y(t, e), e);
                },
              );
            });
          },
          (d || (d = n("Promise"))).resolve(),
        )
        .catch(function () {});
    }
    function g(e) {
      return (
        e instanceof o("WAWebDbErrors").DbOnLogoutAbort ||
        e instanceof o("WAWebDbErrors").DbClosedOnTakeover ||
        e instanceof o("WAWebDbErrors").DbNotFoundOnTakeover
      );
    }
    function h(e) {
      return o("WAWebMessageQueue")
        .onMessageQueue({
          chatWid: e.remote,
          isOffline: !1,
          msgCategory: null,
          action: function () {
            return C(e);
          },
        })
        .catch(function (e) {
          return o("WAWebMessageQueueTimeout").handleMessageQueueTimeout(
            e,
            "voip_placeholder_unread",
          );
        });
    }
    function y(t, n) {
      g(n) ||
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
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield v(e),
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
              l != null && L(l, a, s),
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
        b.apply(this, arguments)
      );
    }
    function v(e) {
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
                  d = (a = yield u.get(t, !1)) == null ? void 0 : a.viewMode,
                  m = { isStopped: !1, storedViewMode: d, wasUnread: !1 };
                if (!S(e, d)) return m;
                var p =
                  (i = (l = yield c.get(r)) == null ? void 0 : l.unreadCount) !=
                  null
                    ? i
                    : 0;
                if (
                  o("WAWebVoipPlaceholderUnreadRows").hasTooManyUnreadToWalk(p)
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
                      p,
                    ),
                    m
                  );
                var _ = yield o(
                  "WAWebVoipPlaceholderUnreadRows",
                ).isAmongLastUnreadRows(u, r, t, p);
                return S(e, d)
                  ? (yield u.merge(t, {
                      viewMode:
                        o("WAWebViewMode.flow").ViewModeType
                          .CALL_LOG_OFFLINE_RESUME_UNCOUNTED,
                      pendingReadReceipt: null,
                    }),
                    _ && (yield c.merge(r, { unreadCount: p - 1 })),
                    { isStopped: !0, storedViewMode: d, wasUnread: _ })
                  : m;
              },
            );
            return function (e) {
              return a.apply(this, arguments);
            };
          })(),
        );
    }
    function S(e, t) {
      return (
        !o("WAWebVoipCallLogPlaceholderTracker").isPlaceholderPending(e.id) &&
        R(t, o("WAWebMsgCollection").MsgCollection.get(e))
      );
    }
    function R(e, t) {
      return (
        e === o("WAWebViewMode.flow").ViewModeType.CALL_LOG_OFFLINE_RESUME &&
        (t == null ||
          t.viewMode ===
            o("WAWebViewMode.flow").ViewModeType.CALL_LOG_OFFLINE_RESUME)
      );
    }
    function L(e, t, n) {
      (t && e.unreadCount > 0 && (e.unreadCount -= 1),
        n && e.activeUnreadCount > 0 && (e.activeUnreadCount -= 1));
    }
    ((l.UNRESOLVED_PLACEHOLDER_GRACE_MS = m),
      (l.scheduleUnresolvedPlaceholderCheck = _),
      (l.checkUnresolvedPlaceholdersNow = f),
      (l.isSessionEndingDbError = g));
  },
  98,
);
