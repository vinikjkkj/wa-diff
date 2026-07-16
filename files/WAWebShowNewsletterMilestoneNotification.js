__d(
  "WAWebShowNewsletterMilestoneNotification",
  [
    "WAWebNotificationController",
    "WAWebNotificationsNewsletterMilestoneNotification",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return o(
        "WAWebNotificationController",
      ).WANotificationController.triggerNotification(
        new (o(
          "WAWebNotificationsNewsletterMilestoneNotification",
        ).WANewsletterMilestoneNotification)(e),
      );
    }
    l.showNewsletterMilestoneNotification = e;
  },
  98,
);
