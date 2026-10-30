__d(
  "WAWebExportChatPlainTextFormatter",
  [
    "fbt",
    "WAWebExportChatFormatFailures",
    "WAWebExportChatMarkdownFormatter",
    "WAWebExportChatSystemMsgFormatter",
    "WAWebGetPlainTextFromBotMsg",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebUnformatMsg",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = new Set(o("WAWebMsgType").SYSTEM_MESSAGE_TYPES);
    function u(e) {
      var t = new Date(e * 1e3),
        n = t.getMonth() + 1,
        r = t.getDate(),
        o = String(t.getFullYear()).slice(-2),
        a = t.getHours(),
        i = String(t.getMinutes()).padStart(2, "0"),
        l = String(t.getSeconds()).padStart(2, "0"),
        s = a >= 12 ? "PM" : "AM",
        u = a % 12 || 12;
      return n + "/" + r + "/" + o + ", " + u + ":" + i + ":" + l + " " + s;
    }
    function c(e) {
      if (o("WAWebMsgGetters").getIsSentByMe(e))
        return s._(/*BTDS*/ "You").toString();
      var t = o("WAWebMsgGetters").getSender(e);
      return t != null
        ? o("WAWebExportChatSystemMsgFormatter").getPlainTextName(t)
        : s._(/*BTDS*/ "Unknown").toString();
    }
    function d(e) {
      switch (e) {
        case o("WAWebMsgType").MSG_TYPE.IMAGE:
          return s._(/*BTDS*/ "image").toString();
        case o("WAWebMsgType").MSG_TYPE.VIDEO:
          return s._(/*BTDS*/ "video").toString();
        case o("WAWebMsgType").MSG_TYPE.AUDIO:
          return s._(/*BTDS*/ "audio").toString();
        case o("WAWebMsgType").MSG_TYPE.PTT:
          return s._(/*BTDS*/ "voice message").toString();
        case o("WAWebMsgType").MSG_TYPE.PTV:
          return s._(/*BTDS*/ "video message").toString();
        case o("WAWebMsgType").MSG_TYPE.DOCUMENT:
          return s._(/*BTDS*/ "document").toString();
        case o("WAWebMsgType").MSG_TYPE.STICKER:
          return s._(/*BTDS*/ "sticker").toString();
        default:
          return s._(/*BTDS*/ "media").toString();
      }
    }
    function m(e) {
      switch (e) {
        case o("WAWebMsgType").MSG_TYPE.IMAGE:
          return s._(/*BTDS*/ "image omitted").toString();
        case o("WAWebMsgType").MSG_TYPE.VIDEO:
          return s._(/*BTDS*/ "video omitted").toString();
        case o("WAWebMsgType").MSG_TYPE.AUDIO:
          return s._(/*BTDS*/ "audio omitted").toString();
        case o("WAWebMsgType").MSG_TYPE.PTT:
          return s._(/*BTDS*/ "voice message omitted").toString();
        case o("WAWebMsgType").MSG_TYPE.PTV:
          return s._(/*BTDS*/ "video message omitted").toString();
        case o("WAWebMsgType").MSG_TYPE.DOCUMENT:
          return s._(/*BTDS*/ "document omitted").toString();
        case o("WAWebMsgType").MSG_TYPE.STICKER:
          return s._(/*BTDS*/ "sticker omitted").toString();
        default:
          return s._(/*BTDS*/ "media omitted").toString();
      }
    }
    function p(t, n, a) {
      var i = o("WAWebMsgGetters").getType(t),
        l = o("WAWebMsgGetters").getBody(t),
        u = o("WAWebMsgGetters").getCaption(t);
      if (i === o("WAWebMsgType").MSG_TYPE.REVOKED) {
        var c = t.subtype;
        if (c === "admin") {
          var p = o("WAWebMsgGetters").getRevokeSender(t);
          return p != null
            ? o("WAWebMsgGetters").getIsRevokedByMe(t)
              ? s._(/*BTDS*/ "You deleted this message as admin").toString()
              : s
                  ._(
                    /*BTDS*/ "This message was deleted by admin {admin-name}",
                    [
                      s._param(
                        "admin-name",
                        o("WAWebExportChatSystemMsgFormatter").getPlainTextName(
                          p,
                        ),
                      ),
                    ],
                  )
                  .toString()
            : s._(/*BTDS*/ "This message was deleted by an admin").toString();
        }
        return o("WAWebMsgGetters").getIsSentByMe(t)
          ? s._(/*BTDS*/ "You deleted this message").toString()
          : s._(/*BTDS*/ "This message was deleted").toString();
      }
      if (e.has(i))
        return o("WAWebExportChatSystemMsgFormatter").formatSystemMsgForExport(
          t,
        );
      if (i === o("WAWebMsgType").MSG_TYPE.CIPHERTEXT)
        return s
          ._(/*BTDS*/ "Waiting for this message. This may take a while.")
          .toString();
      if (o("WAWebExportChatMarkdownFormatter").MEDIA_TYPES.has(i)) {
        var _,
          f,
          g = d(i),
          h = o("WAWebMsgGetters").getIsGif(t),
          y =
            ((_ = t.mediaData) == null ? void 0 : _.filename) ||
            t.filename ||
            g,
          C = (f = t.id) == null ? void 0 : f.toString(),
          b = n && a != null && C != null && a.has(C);
        if (h)
          return b
            ? s._(/*BTDS*/ "GIF attached").toString()
            : "<" + s._(/*BTDS*/ "GIF omitted").toString() + ">";
        var v = s._(/*BTDS*/ "file attached").toString();
        if (b)
          return u != null && u !== ""
            ? y + " (" + v + ") " + r("WAWebUnformatMsg")(t, u)
            : y + " (" + v + ")";
        var S = m(i);
        return u != null && u !== ""
          ? "<" + S + "> " + r("WAWebUnformatMsg")(t, u)
          : "<" + S + ">";
      }
      if (i === o("WAWebMsgType").MSG_TYPE.LOCATION) {
        var R = o("WAWebMsgGetters").getLat(t),
          L = o("WAWebMsgGetters").getLng(t),
          E = o("WAWebMsgGetters").getIsLive(t),
          k = E
            ? s._(/*BTDS*/ "Live location").toString()
            : s._(/*BTDS*/ "Location").toString();
        if (R != null && L != null) {
          var I = l ? l + ": " : "";
          return (
            "" +
            I +
            k +
            ": " +
            R +
            ", " +
            L +
            " - https://maps.google.com/?q=" +
            R +
            "," +
            L
          );
        }
        return E
          ? "<" + s._(/*BTDS*/ "Live location omitted").toString() + ">"
          : "<" + s._(/*BTDS*/ "Location omitted").toString() + ">";
      }
      if (i === o("WAWebMsgType").MSG_TYPE.VCARD)
        return l
          ? s._(/*BTDS*/ "Contact").toString() + ": " + l
          : "<" + s._(/*BTDS*/ "Contact card omitted").toString() + ">";
      if (i === o("WAWebMsgType").MSG_TYPE.MULTI_VCARD) {
        var T = o("WAWebMsgGetters").getVcardList(t),
          D = T.length;
        return D > 0
          ? s
              ._(
                /*BTDS*/ '_j{"*":"{number} contacts shared","_1":"1 contact shared"}',
                [s._plural(D, "number")],
              )
              .toString()
          : l
            ? s._(/*BTDS*/ "Contact").toString() + ": " + l
            : "<" + s._(/*BTDS*/ "Contact card omitted").toString() + ">";
      }
      if (i === o("WAWebMsgType").MSG_TYPE.POLL_CREATION) {
        var x = s._(/*BTDS*/ "Poll").toString(),
          $ = o("WAWebMsgGetters").getPollName(t),
          P = o("WAWebMsgGetters").getPollOptions(t),
          N = $ != null ? x + ": " + $ : x;
        if (P != null) for (var M of P) N += "\n    - " + M.name;
        return N;
      }
      if (i === o("WAWebMsgType").MSG_TYPE.PAYMENT)
        return o("WAWebExportChatMarkdownFormatter").formatPaymentForExport(t);
      if (i === o("WAWebMsgType").MSG_TYPE.CHAT)
        return r("WAWebUnformatMsg")(t, l);
      if (i === o("WAWebMsgType").MSG_TYPE.RICH_RESPONSE) {
        var w = o("WAWebGetPlainTextFromBotMsg").getPlainTextFromBotMsg(t, {
          includeBodyFallback: !1,
        });
        return w != null && w !== ""
          ? w
          : "<" + s._(/*BTDS*/ "AI message").toString() + ">";
      }
      return l
        ? r("WAWebUnformatMsg")(t, l)
        : "<" +
            s._(/*BTDS*/ "{type} message", [s._param("type", i)]).toString() +
            ">";
    }
    function _(e) {
      var t = e.downloadedMediaMsgIds,
        n = e.hasMoreHistory,
        r = e.includeMedia,
        a = e.messages,
        i = [];
      (a.length > 0 &&
        i.push(
          s
            ._(
              /*BTDS*/ "Messages and calls are end-to-end encrypted. No one outside of this chat, not even WhatsApp, can read or listen to them.",
            )
            .toString(),
        ),
        n === !0 &&
          i.push(
            s
              ._(/*BTDS*/ "Some earlier messages may not be available.")
              .toString(),
          ));
      var l = { count: 0, first: null };
      for (var u of a)
        try {
          f({
            downloadedMediaMsgIds: t,
            failures: l,
            includeMedia: r,
            lines: i,
            msg: u,
          });
        } catch (e) {
          (o("WAWebExportChatFormatFailures").recordFailure(l, e),
            i.push(
              "<" +
                o("WAWebExportChatFormatFailures").unexportableMessageText() +
                ">",
            ));
        }
      return (
        o("WAWebExportChatFormatFailures").reportFormatFailures(
          l,
          "plain_text",
        ),
        i.join("\n") + "\n"
      );
    }
    function f(t) {
      var n = t.downloadedMediaMsgIds,
        r = t.failures,
        a = t.includeMedia,
        i = t.lines,
        l = t.msg,
        d = o("WAWebMsgGetters").getT(l),
        m = o("WAWebMsgGetters").getType(l);
      if (
        !(
          m === o("WAWebMsgType").MSG_TYPE.PROTOCOL ||
          m === o("WAWebMsgType").MSG_TYPE.REACTION ||
          m === o("WAWebMsgType").MSG_TYPE.REACTION_ENC ||
          m === o("WAWebMsgType").MSG_TYPE.POLL_UPDATE ||
          m === o("WAWebMsgType").MSG_TYPE.KEEP_IN_CHAT ||
          m === o("WAWebMsgType").MSG_TYPE.PIN_MESSAGE
        )
      ) {
        var _ = u(d),
          f = e.has(m);
        try {
          if (f) {
            var g = p(l, a, n);
            i.push("[" + _ + "] - " + g);
            return;
          }
          var h = c(l),
            y = p(l, a, n);
          if (o("WAWebMsgGetters").getIsForwarded(l)) {
            var C = o("WAWebMsgGetters").getIsFrequentlyForwarded(l)
              ? "[" + s._(/*BTDS*/ "Forwarded many times").toString() + "] "
              : "[" + s._(/*BTDS*/ "Forwarded").toString() + "] ";
            y = C + y;
          }
          i.push("[" + _ + "] " + h + ": " + y);
        } catch (e) {
          (o("WAWebExportChatFormatFailures").recordFailure(r, e),
            i.push(
              "[" +
                _ +
                "] <" +
                o("WAWebExportChatFormatFailures").unexportableMessageText() +
                ">",
            ));
        }
      }
    }
    l.formatChatAsPlainText = _;
  },
  226,
);
