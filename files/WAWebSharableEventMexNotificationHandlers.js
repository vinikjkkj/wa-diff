__d(
  "WAWebSharableEventMexNotificationHandlers",
  ["WAWebSharableEventNotificationHandler"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = {
        NotificationEventInvite: (e = o(
          "WAWebSharableEventNotificationHandler",
        )).mexHandleSharableEventInviteNotification,
        NotificationEventUpdate: e.mexHandleSharableEventUpdateNotification,
        NotificationEventRsvp: e.mexHandleSharableEventRsvpNotification,
        NotificationEventDelete: e.mexHandleSharableEventDeleteNotification,
        NotificationEventReminder: e.mexHandleSharableEventReminderNotification,
        NotificationEventInviteRemove:
          e.mexHandleSharableEventInviteRemoveNotification,
        NotificationEventGuestJoinedWa:
          e.mexHandleSharableEventGuestJoinedWaNotification,
        NotificationEventHostPushNamePublish:
          e.mexHandleSharableEventHostPushNamePublishNotification,
      };
    l.default = s;
  },
  98,
);
