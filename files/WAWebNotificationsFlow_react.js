__d(
  "WAWebNotificationsFlow.react",
  [
    "$InternalEnum",
    "WAWebCallsNotificationsDrawer.react",
    "WAWebDirectMessagesNotificationsDrawer.react",
    "WAWebGroupMessagesNotificationsDrawer.react",
    "WAWebNotificationsDrawer.react",
    "WAWebStatusUpdatesNotificationsDrawer.react",
    "react",
    "useWAWebFlow",
    "useWAWebFocusOnMount",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = n("$InternalEnum").Mirrored([
        "Notifications",
        "DirectMessages",
        "GroupMessages",
        "StatusUpdates",
        "Calls",
      ]);
    function c(e) {
      var t = e.onEnd,
        n = o("useWAWebFlow").useFlow(u.Notifications, {
          transitions: o("useWAWebFlow").FlowTransitions.DrawerRight,
          onEnd: t,
        }),
        a = n[0],
        i = n[1],
        l = r("useWAWebFocusOnMount")();
      if (!i.step) return null;
      var c = function () {
          i.pop();
        },
        d;
      switch (i.step) {
        case u.Notifications:
          d = s.jsx(r("WAWebNotificationsDrawer.react"), {
            onClose: c,
            onCancel: c,
            onOpenDirectMessages: function () {
              return i.push(u.DirectMessages);
            },
            onOpenGroupMessages: function () {
              return i.push(u.GroupMessages);
            },
            onOpenStatusUpdates: function () {
              return i.push(u.StatusUpdates);
            },
            onOpenCalls: function () {
              return i.push(u.Calls);
            },
          });
          break;
        case u.DirectMessages:
          d = s.jsx(r("WAWebDirectMessagesNotificationsDrawer.react"), {
            onClose: c,
          });
          break;
        case u.GroupMessages:
          d = s.jsx(r("WAWebGroupMessagesNotificationsDrawer.react"), {
            onClose: c,
          });
          break;
        case u.StatusUpdates:
          d = s.jsx(r("WAWebStatusUpdatesNotificationsDrawer.react"), {
            onClose: c,
          });
          break;
        case u.Calls:
          d = s.jsx(r("WAWebCallsNotificationsDrawer.react"), { onClose: c });
          break;
      }
      return s.jsx(a, { ref: l, flow: i, children: d });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"),
      (l.NotificationsFlow = c));
  },
  98,
);
