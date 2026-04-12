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
      var e,
        t = d(null),
        n = function () {
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
        };
      (c(function () {
        n();
      }, []),
        (e = o("useWAWebListener")).useListener(
          o("WAWebCmd").Cmd,
          "alert_new_msg",
          function (e) {
            return o("WAWebNotificationBackend").showMsgNotification(e);
          },
        ),
        e.useListener(
          r("WAWebCallNotificationBus"),
          "alert_call",
          o("WAWebNotificationsCallNotification").showCallNotification,
        ),
        e.useListener(
          r("WAWebCallNotificationBus"),
          "cancel_call",
          function (e) {
            return o(
              "WAWebNotificationsCallNotification",
            ).cancelCallNotification(e.wid);
          },
        ),
        e.useListener(
          r("WAWebCallNotificationBus"),
          "missed_call",
          o("WAWebNotificationsCallNotification").showMissedCallNotification,
        ),
        e.useListener(
          o("WAWebChatCollection").ChatCollection,
          "add remove reset change:showUnreadInTitle",
          n,
        ),
        e.useListener(
          o("WAWebChatCollection").ChatCollection,
          "change:unreadCount",
          o("WAWebNotificationBackend").closeNotifications,
        ),
        e.useListener(o("WAWebStreamModel").Stream, "change:displayInfo", n));
      var a = o("WAWebAppContext.react").useAppContext();
      return (
        o("WAWebNotificationBackend").setAppContext(function () {
          return {
            isChatsSurfaceActive:
              a.activeNavBarItem === o("WAWebNavBarTypes").NavBarItems.Chats,
          };
        }),
        null
      );
    }
    l.default = _;
  },
  98,
);
