__d(
  "WAWebShowNewsletterRoleChangeNotification",
  [
    "Promise",
    "WAWebCommonNewsletterEnums",
    "WAWebNewsletterMembershipUtil",
    "WAWebNotificationController",
    "WAWebNotificationsNewsletterRoleChangeNotification",
    "WAWebUserPrefsMeUser",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t) {
      var r = t.admin,
        a = t.chat,
        i = t.mode,
        l = t.newRole,
        s = t.user,
        u = a.newsletterMetadata;
      if (u == null) return (e || (e = n("Promise"))).resolve();
      var c =
        i === "promote" &&
        o("WAWebUserPrefsMeUser").isMeAccount(s) &&
        l === o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Owner;
      if (c)
        return o(
          "WAWebNotificationController",
        ).WANotificationController.triggerNotification(
          new (o(
            "WAWebNotificationsNewsletterRoleChangeNotification",
          ).WANewsletterRoleChangeNotification)({
            mode: "ownership",
            chat: a,
            admin: r,
            user: s,
          }),
        );
      var d =
          o("WAWebNewsletterMembershipUtil").iAmOwner(u) &&
          i === "promote" &&
          l ===
            o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Admin &&
          !o("WAWebUserPrefsMeUser").isMeAccount(s),
        m =
          i === "demote" &&
          l ===
            o("WAWebCommonNewsletterEnums").NewsletterMembershipType
              .Subscriber &&
          !o("WAWebUserPrefsMeUser").isMeAccount(s) &&
          s.toJid() === (r == null ? void 0 : r.toJid()),
        p =
          i === "demote" &&
          o("WAWebUserPrefsMeUser").isMeAccount(s) &&
          s.toJid() !== (r == null ? void 0 : r.toJid());
      return d || m || p
        ? o(
            "WAWebNotificationController",
          ).WANotificationController.triggerNotification(
            new (o(
              "WAWebNotificationsNewsletterRoleChangeNotification",
            ).WANewsletterRoleChangeNotification)({
              mode: i,
              chat: a,
              admin: r,
              user: s,
            }),
          )
        : (e || (e = n("Promise"))).resolve();
    }
    l.showNewsletterRoleChangeNotification = s;
  },
  98,
);
