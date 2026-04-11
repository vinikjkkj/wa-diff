__d(
  "WAWebNotificationManager.react",
  [
    "WAWebAppContext.react",
    "WAWebCallNotificationBus",
    "WAWebChatCollection",
    "WAWebCmd",
    "WAWebEnvironment",
    "WAWebNavBarTypes",
    "WAWebNotificationBackend",
    "WAWebNotificationIcon",
    "WAWebNotificationsCallNotification",
    "WAWebStreamModel",
    "cr:8852",
    "react",
    "react-compiler-runtime",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = u.useEffect,
      d = u.useRef,
      m = (e = n("cr:8852")) != null ? e : {},
      p = m.WATaskbarController;
    function _() {
      var e = o("react-compiler-runtime").c(3),
        t = d(null),
        n;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = function () {
            var e;
            (o("WAWebStreamModel").Stream.displayInfo ===
              o("WAWebStreamModel").StreamInfo.OFFLINE &&
            !r("WAWebEnvironment").isWindows
              ? (e = -1)
              : (e = o("WAWebChatCollection").ChatCollection.getUnreadCount()),
              t.current !== e &&
                ((t.current = e),
                o("WAWebNotificationIcon").setTitleAndIcon(e),
                p == null || p.UpdateTaskbarBadge(e)));
          }),
          (e[0] = n))
        : (n = e[0]);
      var a = n,
        i,
        l;
      (e[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = function () {
            a();
          }),
          (l = []),
          (e[1] = i),
          (e[2] = l))
        : ((i = e[1]), (l = e[2])),
        c(i, l),
        o("useWAWebListener").useListener(
          o("WAWebCmd").Cmd,
          "alert_new_msg",
          g,
        ),
        o("useWAWebListener").useListener(
          r("WAWebCallNotificationBus"),
          "alert_call",
          o("WAWebNotificationsCallNotification").showCallNotification,
        ),
        o("useWAWebListener").useListener(
          r("WAWebCallNotificationBus"),
          "cancel_call",
          f,
        ),
        o("useWAWebListener").useListener(
          r("WAWebCallNotificationBus"),
          "missed_call",
          o("WAWebNotificationsCallNotification").showMissedCallNotification,
        ),
        o("useWAWebListener").useListener(
          o("WAWebChatCollection").ChatCollection,
          "add remove reset change:showUnreadInTitle",
          a,
        ),
        o("useWAWebListener").useListener(
          o("WAWebChatCollection").ChatCollection,
          "change:unreadCount",
          o("WAWebNotificationBackend").closeNotifications,
        ),
        o("useWAWebListener").useListener(
          o("WAWebStreamModel").Stream,
          "change:displayInfo",
          a,
        ));
      var s = o("WAWebAppContext.react").useAppContext();
      return (
        o("WAWebNotificationBackend").setAppContext(function () {
          return {
            isChatsSurfaceActive:
              s.activeNavBarItem === o("WAWebNavBarTypes").NavBarItems.Chats,
          };
        }),
        null
      );
    }
    function f(e) {
      return o("WAWebNotificationsCallNotification").cancelCallNotification(
        e.wid,
      );
    }
    function g(e) {
      return o("WAWebNotificationBackend").showMsgNotification(e);
    }
    l.default = _;
  },
  98,
);
