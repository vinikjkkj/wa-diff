__d(
  "WAWebShowNewsletterRoleChangeNotification",
  [
    "Promise",
    "WAWebCommonNewsletterEnums",
    "WAWebNotificationController",
    "WAWebNotificationsNewsletterRoleChangeNotification",
    "WAWebUserPrefsMeUser",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t) {
      var r,
        a = t.admin,
        i = t.chat,
        l = t.mode,
        s = t.newRole,
        u = t.user,
        c = i.newsletterMetadata;
      if (c == null) return (e || (e = n("Promise"))).resolve();
      var d =
        l === "promote" &&
        o("WAWebUserPrefsMeUser").isMeAccount(u) &&
        s === o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Owner;
      if (d)
        return o(
          "WAWebNotificationController",
        ).WANotificationController.triggerNotification(
          new (o(
            "WAWebNotificationsNewsletterRoleChangeNotification",
          ).WANewsletterRoleChangeNotification)({
            mode: "ownership",
            chat: i,
            admin: a,
            user: u,
          }),
        );
      var m =
          ((r = c == null ? void 0 : c.iAmOwner()) != null ? r : !1) &&
          l === "promote" &&
          s ===
            o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Admin &&
          !o("WAWebUserPrefsMeUser").isMeAccount(u),
        p =
          l === "demote" &&
          s ===
            o("WAWebCommonNewsletterEnums").NewsletterMembershipType
              .Subscriber &&
          !o("WAWebUserPrefsMeUser").isMeAccount(u) &&
          u.toJid() === (a == null ? void 0 : a.toJid()),
        _ =
          l === "demote" &&
          o("WAWebUserPrefsMeUser").isMeAccount(u) &&
          u.toJid() !== (a == null ? void 0 : a.toJid());
      return m || p || _
        ? o(
            "WAWebNotificationController",
          ).WANotificationController.triggerNotification(
            new (o(
              "WAWebNotificationsNewsletterRoleChangeNotification",
            ).WANewsletterRoleChangeNotification)({
              mode: l,
              chat: i,
              admin: a,
              user: u,
            }),
          )
        : (e || (e = n("Promise"))).resolve();
    }
    l.showNewsletterRoleChangeNotification = s;
  },
  98,
);
