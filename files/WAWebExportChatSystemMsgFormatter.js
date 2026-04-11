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
      if (o("WAWebUserPrefsMeUser").isMeAccount(e)) return "You";
      var t = o("WAWebContactCollection").ContactCollection.get(e);
      if (t != null) {
        var n = o("WAWebFrontendContactGetters").getFormattedName(t);
        if (n !== "") return n;
      }
      return o("WAWebWidFormat").widToFormattedUser(e) || "Unknown";
    }
    function u(t) {
      var n = t.map(e);
      return n.length === 0
        ? ""
        : n.length === 1
          ? n[0]
          : n.length === 2
            ? n[0] + " and " + n[1]
            : n.slice(0, -1).join(", ") + ", and " + n[n.length - 1];
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
      return n != null ? e(n) : "Someone";
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
        ? r + " added " + a
        : t === "remove"
          ? r + " removed " + a
          : t === "leave"
            ? a + " left"
            : t === "subject"
              ? r + " changed the group name to '" + n + "'"
              : t === "desc_add"
                ? r + " changed the group description"
                : t === "desc_remove"
                  ? r + " cleared the group description"
                  : t === "promote"
                    ? r + " made " + a + " an admin"
                    : t === "demote"
                      ? r + " removed " + a + " as admin"
                      : t === "picture"
                        ? r + " changed the group icon"
                        : t === "create"
                          ? r + " created the group"
                          : t === "invite"
                            ? a + " joined via invite link"
                            : t === "ephemeral"
                              ? n !== "" && n !== "0"
                                ? r +
                                  " turned on disappearing messages (" +
                                  m(Number(n)) +
                                  ")"
                                : r + " turned off disappearing messages"
                              : t === "announce"
                                ? r +
                                  " changed settings: only admins can send messages"
                                : t === "restrict"
                                  ? r +
                                    " changed settings: only admins can edit group info"
                                  : n || "[System notification]";
    }
    function _(e) {
      var t = o("WAWebMsgGetters").getSubtype(e),
        n = o("WAWebMsgGetters").getBody(e);
      return t === "identity"
        ? n !== ""
          ? c(n) + "'s security code changed. Tap to learn more."
          : "Security code changed. Tap to learn more."
        : t === "encrypt" || t === "encrypt_now"
          ? "Messages and calls are end-to-end encrypted. No one outside of this chat, not even WhatsApp, can read or listen to them. Tap to learn more."
          : n || "[System notification]";
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
                ? "[Call: " + n + "]"
                : "[Call]"
              : t === o("WAWebMsgType").MSG_TYPE.NOTIFICATION_TEMPLATE
                ? r("WAWebFormatNotificationTemplateText")(e).text.toString()
                : n || "[System notification]";
      } catch (e) {
        return n || "[System notification]";
      }
    }
    ((l.getPlainTextName = e), (l.formatSystemMsgForExport = f));
  },
  226,
);
