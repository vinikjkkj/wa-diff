__d(
  "WAWebFormatRestrictNotification",
  ["fbt", "WAWebSystemMessagesUtils"],
  function (t, n, r, o, a, i, l, s) {
    var e = 256;
    function u(t) {
      var n = t.author,
        r = t.authorClickable,
        a = t.templateParams,
        i = a[0];
      if (i === "on") {
        if (a[1] != null) {
          var l = parseInt(a[1], 10) || e;
          return s._(
            /*BTDS*/ '_j{"*":"This group has over {threshold} members so now only admins can edit the group settings","_1":"This group has over 1 member so now only admins can edit the group settings"}',
            [s._plural(l, "threshold")],
          );
        }
        return o("WAWebSystemMessagesUtils").isMe(n)
          ? s._(
              /*BTDS*/ "You changed the settings so only admins can edit the group settings",
            )
          : r != null
            ? s._(
                /*BTDS*/ "{user_name} changed the settings so only admins can edit the group settings",
                [s._param("user_name", r)],
              )
            : s._(
                /*BTDS*/ "A member changed the settings so only admins can edit the group settings",
              );
      } else if (o("WAWebSystemMessagesUtils").isMe(n))
        return s._(
          /*BTDS*/ "You changed the settings so all members can edit the group settings",
        );
      return r != null
        ? s._(
            /*BTDS*/ "{user_name} changed the settings so all members can edit the group settings",
            [s._param("user_name", r)],
          )
        : s._(
            /*BTDS*/ "A member changed the settings so all members can edit the group settings",
          );
    }
    l.formatRestrictNotification = u;
  },
  226,
);
