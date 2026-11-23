__d(
  "WAWebExportChatSystemMsgFormatter",
  [
    "fbt",
    "WAWebContactCollection",
    "WAWebEphemeralConstants",
    "WAWebFbtCommon",
    "WAWebFormatNotificationTemplateText",
    "WAWebFrontendContactGetters",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebUserUtils",
    "WAWebWidFactory",
    "WAWebWidFormat",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e) {
      if (o("WAWebUserUtils").isMeAccount(e))
        return r("WAWebFbtCommon")("You").toString();
      var t = o("WAWebContactCollection").ContactCollection.get(e);
      if (t != null) {
        var n = o("WAWebFrontendContactGetters").getContactFormattedName(t);
        if (n !== "") return n;
      }
      return (
        o("WAWebWidFormat").widToFormattedUser(e) || s._(/*BTDS*/ "").toString()
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
                ._(/*BTDS*/ "", [
                  s._param("name1", n[0]),
                  s._param("name2", n[1]),
                ])
                .toString()
            : s
                ._(/*BTDS*/ "", [
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
      return n != null ? e(n) : s._(/*BTDS*/ "").toString();
    }
    function m(e) {
      if (e <= 0) return s._(/*BTDS*/ "").toString();
      var t = o("WAWebEphemeralConstants").getDurationForString(e),
        n = t.duration,
        r = t.unit;
      switch (r) {
        case o("WAWebEphemeralConstants").DurationUnit.Days:
          return s._(/*BTDS*/ "", [s._plural(n, "number")]).toString();
        case o("WAWebEphemeralConstants").DurationUnit.Hours:
          return s._(/*BTDS*/ "", [s._plural(n, "number")]).toString();
        case o("WAWebEphemeralConstants").DurationUnit.Minutes:
          return s._(/*BTDS*/ "", [s._plural(n, "number")]).toString();
        default:
          return s._(/*BTDS*/ "", [s._plural(n, "number")]).toString();
      }
    }
    function p(e) {
      var t = o("WAWebMsgGetters").getSubtype(e),
        n = o("WAWebMsgGetters").getBody(e),
        r = d(e),
        a = u(o("WAWebMsgGetters").getRecipients(e));
      return t === "add"
        ? s
            ._(/*BTDS*/ "", [
              s._param("author", r),
              s._param("participants", a),
            ])
            .toString()
        : t === "remove"
          ? s
              ._(/*BTDS*/ "", [
                s._param("author", r),
                s._param("participants", a),
              ])
              .toString()
          : t === "leave"
            ? s._(/*BTDS*/ "", [s._param("participants", a)]).toString()
            : t === "subject"
              ? s
                  ._(/*BTDS*/ "", [s._param("author", r), s._param("name", n)])
                  .toString()
              : t === "desc_add"
                ? s._(/*BTDS*/ "", [s._param("author", r)]).toString()
                : t === "desc_remove"
                  ? s._(/*BTDS*/ "", [s._param("author", r)]).toString()
                  : t === "promote"
                    ? s
                        ._(/*BTDS*/ "", [
                          s._param("author", r),
                          s._param("participants", a),
                        ])
                        .toString()
                    : t === "demote"
                      ? s
                          ._(/*BTDS*/ "", [
                            s._param("author", r),
                            s._param("participants", a),
                          ])
                          .toString()
                      : t === "picture"
                        ? s._(/*BTDS*/ "", [s._param("author", r)]).toString()
                        : t === "create"
                          ? s._(/*BTDS*/ "", [s._param("author", r)]).toString()
                          : t === "invite"
                            ? s
                                ._(/*BTDS*/ "", [s._param("participants", a)])
                                .toString()
                            : t === "ephemeral"
                              ? n !== "" && n !== "0"
                                ? s
                                    ._(/*BTDS*/ "", [
                                      s._param("author", r),
                                      s._param("duration", m(Number(n))),
                                    ])
                                    .toString()
                                : s
                                    ._(/*BTDS*/ "", [s._param("author", r)])
                                    .toString()
                              : t === "announce"
                                ? s
                                    ._(/*BTDS*/ "", [s._param("author", r)])
                                    .toString()
                                : t === "restrict"
                                  ? s
                                      ._(/*BTDS*/ "", [s._param("author", r)])
                                      .toString()
                                  : n ||
                                    "[" + s._(/*BTDS*/ "").toString() + "]";
    }
    function _(e) {
      var t = o("WAWebMsgGetters").getSubtype(e),
        n = o("WAWebMsgGetters").getBody(e);
      return t === "identity"
        ? n !== ""
          ? s._(/*BTDS*/ "", [s._param("name", c(n))]).toString()
          : s._(/*BTDS*/ "").toString()
        : t === "encrypt" || t === "encrypt_now"
          ? s._(/*BTDS*/ "").toString()
          : n || "[" + s._(/*BTDS*/ "").toString() + "]";
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
                ? "[" + s._(/*BTDS*/ "").toString() + ": " + n + "]"
                : "[" + s._(/*BTDS*/ "").toString() + "]"
              : t === o("WAWebMsgType").MSG_TYPE.NOTIFICATION_TEMPLATE
                ? r("WAWebFormatNotificationTemplateText")(e).text.toString()
                : n || "[" + s._(/*BTDS*/ "").toString() + "]";
      } catch (e) {
        return n || "[" + s._(/*BTDS*/ "").toString() + "]";
      }
    }
    ((l.getPlainTextName = e), (l.formatSystemMsgForExport = f));
  },
  226,
);
