__d(
  "WAWebFormatPromoteDemoteNotification",
  ["fbt", "WALogger", "WAWebSystemMessagesUtils"],
  function (t, n, r, o, a, i, l, s) {
    var e;
    function u(t) {
      var n = t.participantsClickable,
        r = t.participantsCount,
        a = t.subject,
        i = t.subjectClickable,
        l = t.subtype;
      switch (l) {
        case "promote":
          return r === 1 && o("WAWebSystemMessagesUtils").isMe(a)
            ? s._(/*BTDS*/ "You're now an admin")
            : s._(
                /*BTDS*/ '_j{"*":"{participant_names} are now admins","_1":"{participant_names} is now an admin"}',
                [s._plural(r), s._param("participant_names", n)],
              );
        case "demote":
          return r === 1 && o("WAWebSystemMessagesUtils").isMe(a)
            ? s._(/*BTDS*/ "You're no longer an admin")
            : s._(
                /*BTDS*/ '_j{"*":"{participant_names} are no longer admins","_1":"{participant_names} is no longer an admin"}',
                [s._plural(r), s._param("participant_names", n)],
              );
        case "linked_group_promote":
          return o("WAWebSystemMessagesUtils").isMe(a)
            ? s._(/*BTDS*/ "You're now a community admin")
            : s._(/*BTDS*/ "{name} is now a community admin", [
                s._param("name", i),
              ]);
        case "linked_group_demote":
          return o("WAWebSystemMessagesUtils").isMe(a)
            ? s._(/*BTDS*/ "You're no longer a community admin")
            : s._(/*BTDS*/ "{name} is no longer a community admin", [
                s._param("name", i),
              ]);
        default:
          return (
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "wa:formatPromoteDemoteNotification:unknown message subtype: ",
                  "",
                ])),
              l,
            ),
            ""
          );
      }
    }
    l.formatPromoteDemoteNotification = u;
  },
  226,
);
