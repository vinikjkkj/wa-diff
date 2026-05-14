__d(
  "WAWebExportChatSystemMsgFormatter",
  [
    "fbt",
    "WAWebContactCollection",
    "WAWebEphemeralConstants",
    "WAWebFormatNotificationTemplateText",
    "WAWebFrontendContactGetters",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
    "WAWebWidFormat",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e) {
      if (o("WAWebUserPrefsMeUser").isMeAccount(e))
        return s._(/*BTDS*/ "You").toString();
      var t = o("WAWebContactCollection").ContactCollection.get(e);
      if (t != null) {
        var n = o("WAWebFrontendContactGetters").getFormattedName(t);
        if (n !== "") return n;
      }
      return (
        o("WAWebWidFormat").widToFormattedUser(e) ||
        s._(/*BTDS*/ "Unknown").toString()
      );
    }
    function u(t) {
      var n = t.map(e);
      return n.length === 0
        ? ""
        : n.length === 1
          ? n[0]
          : n.length === 2
            ? s
                ._(/*BTDS*/ "{name1} and {name2}", [
                  s._param("name1", n[0]),
                  s._param("name2", n[1]),
                ])
                .toString()
            : s
                ._(/*BTDS*/ "{names}, and {last-name}", [
                  s._param("names", n.slice(0, -1).join(", ")),
                  s._param("last-name", n[n.length - 1]),
                ])
                .toString();
    }
    function c(t) {
      try {
        return e(o("WAWebWidFactory").createUserWidOrThrow(t));
      } catch (e) {
        return o("WAWebWidFormat").widToFormattedUser(t) || t;
      }
    }
    function d(t) {
      var n = o("WAWebMsgGetters").getAuthor(t);
      return n != null ? e(n) : s._(/*BTDS*/ "Someone").toString();
    }
    function m(e) {
      if (e <= 0) return s._(/*BTDS*/ "off").toString();
      var t = o("WAWebEphemeralConstants").getDurationForString(e),
        n = t.duration,
        r = t.unit;
      switch (r) {
        case o("WAWebEphemeralConstants").DurationUnit.Days:
          return s
            ._(/*BTDS*/ '_j{"*":"{number} days","_1":"1 day"}', [
              s._plural(n, "number"),
            ])
            .toString();
        case o("WAWebEphemeralConstants").DurationUnit.Hours:
          return s
            ._(/*BTDS*/ '_j{"*":"{number} hours","_1":"1 hour"}', [
              s._plural(n, "number"),
            ])
            .toString();
        case o("WAWebEphemeralConstants").DurationUnit.Minutes:
          return s
            ._(/*BTDS*/ '_j{"*":"{number} minutes","_1":"1 minute"}', [
              s._plural(n, "number"),
            ])
            .toString();
        default:
          return s
            ._(/*BTDS*/ '_j{"*":"{number} seconds","_1":"1 second"}', [
              s._plural(n, "number"),
            ])
            .toString();
      }
    }
    function p(e) {
      var t = o("WAWebMsgGetters").getSubtype(e),
        n = o("WAWebMsgGetters").getBody(e),
        r = d(e),
        a = u(o("WAWebMsgGetters").getRecipients(e));
      return t === "add"
        ? s
            ._(/*BTDS*/ "{author} added {participants}", [
              s._param("author", r),
              s._param("participants", a),
            ])
            .toString()
        : t === "remove"
          ? s
              ._(/*BTDS*/ "{author} removed {participants}", [
                s._param("author", r),
                s._param("participants", a),
              ])
              .toString()
          : t === "leave"
            ? s
                ._(/*BTDS*/ "{participants} left", [
                  s._param("participants", a),
                ])
                .toString()
            : t === "subject"
              ? s
                  ._(/*BTDS*/ "{author} changed the group name to '{name}'", [
                    s._param("author", r),
                    s._param("name", n),
                  ])
                  .toString()
              : t === "desc_add"
                ? s
                    ._(/*BTDS*/ "{author} changed the group description", [
                      s._param("author", r),
                    ])
                    .toString()
                : t === "desc_remove"
                  ? s
                      ._(/*BTDS*/ "{author} cleared the group description", [
                        s._param("author", r),
                      ])
                      .toString()
                  : t === "promote"
                    ? s
                        ._(/*BTDS*/ "{author} made {participants} an admin", [
                          s._param("author", r),
                          s._param("participants", a),
                        ])
                        .toString()
                    : t === "demote"
                      ? s
                          ._(
                            /*BTDS*/ "{author} removed {participants} as admin",
                            [
                              s._param("author", r),
                              s._param("participants", a),
                            ],
                          )
                          .toString()
                      : t === "picture"
                        ? s
                            ._(/*BTDS*/ "{author} changed the group icon", [
                              s._param("author", r),
                            ])
                            .toString()
                        : t === "create"
                          ? s
                              ._(/*BTDS*/ "{author} created the group", [
                                s._param("author", r),
                              ])
                              .toString()
                          : t === "invite"
                            ? s
                                ._(
                                  /*BTDS*/ "{participants} joined via invite link",
                                  [s._param("participants", a)],
                                )
                                .toString()
                            : t === "ephemeral"
                              ? n !== "" && n !== "0"
                                ? s
                                    ._(
                                      /*BTDS*/ "{author} turned on disappearing messages ({duration})",
                                      [
                                        s._param("author", r),
                                        s._param("duration", m(Number(n))),
                                      ],
                                    )
                                    .toString()
                                : s
                                    ._(
                                      /*BTDS*/ "{author} turned off disappearing messages",
                                      [s._param("author", r)],
                                    )
                                    .toString()
                              : t === "announce"
                                ? s
                                    ._(
                                      /*BTDS*/ "{author} changed settings: only admins can send messages",
                                      [s._param("author", r)],
                                    )
                                    .toString()
                                : t === "restrict"
                                  ? s
                                      ._(
                                        /*BTDS*/ "{author} changed settings: only admins can edit group info",
                                        [s._param("author", r)],
                                      )
                                      .toString()
                                  : n ||
                                    "[" +
                                      s
                                        ._(/*BTDS*/ "System notification")
                                        .toString() +
                                      "]";
    }
    function _(e) {
      var t = o("WAWebMsgGetters").getSubtype(e),
        n = o("WAWebMsgGetters").getBody(e);
      return t === "identity"
        ? n !== ""
          ? s
              ._(
                /*BTDS*/ "{name}'s security code changed. Tap to learn more.",
                [s._param("name", c(n))],
              )
              .toString()
          : s._(/*BTDS*/ "Security code changed. Tap to learn more.").toString()
        : t === "encrypt" || t === "encrypt_now"
          ? s
              ._(
                /*BTDS*/ "Messages and calls are end-to-end encrypted. No one outside of this chat, not even WhatsApp, can read or listen to them. Tap to learn more.",
              )
              .toString()
          : n || "[" + s._(/*BTDS*/ "System notification").toString() + "]";
    }
    function f(e) {
      var t = o("WAWebMsgGetters").getType(e),
        n = o("WAWebMsgGetters").getBody(e);
      try {
        return t === o("WAWebMsgType").MSG_TYPE.GP2
          ? p(e)
          : t === o("WAWebMsgType").MSG_TYPE.E2E_NOTIFICATION
            ? _(e)
            : t === o("WAWebMsgType").MSG_TYPE.CALL_LOG
              ? n !== ""
                ? "[" + s._(/*BTDS*/ "Call").toString() + ": " + n + "]"
                : "[" + s._(/*BTDS*/ "Call").toString() + "]"
              : t === o("WAWebMsgType").MSG_TYPE.NOTIFICATION_TEMPLATE
                ? r("WAWebFormatNotificationTemplateText")(e).text.toString()
                : n ||
                  "[" + s._(/*BTDS*/ "System notification").toString() + "]";
      } catch (e) {
        return n || "[" + s._(/*BTDS*/ "System notification").toString() + "]";
      }
    }
    ((l.getPlainTextName = e), (l.formatSystemMsgForExport = f));
  },
  226,
);
