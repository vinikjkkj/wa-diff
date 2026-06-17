__d(
  "WAWebExportChatMarkdownFormatter",
  [
    "fbt",
    "WAWebExportChatSystemMsgFormatter",
    "WAWebGetPlainTextFromBotMsg",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebQuotedMsgModelUtils",
    "WAWebUnformatMsg",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = new Set([
        (e = o("WAWebMsgType")).MSG_TYPE.IMAGE,
        e.MSG_TYPE.VIDEO,
        e.MSG_TYPE.AUDIO,
        e.MSG_TYPE.PTT,
        e.MSG_TYPE.PTV,
        e.MSG_TYPE.DOCUMENT,
        e.MSG_TYPE.STICKER,
      ]),
      c = new Set([e.MSG_TYPE.STICKER]),
      d = new Set(e.SYSTEM_MESSAGE_TYPES);
    function m(e) {
      var t = new Date(e * 1e3);
      return t.toLocaleDateString(void 0, {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    }
    function p(e) {
      var t = new Date(e * 1e3);
      return t.toLocaleTimeString(void 0, {
        hour: "numeric",
        minute: "2-digit",
      });
    }
    function _(e) {
      var t = new Date(e * 1e3);
      return t.getFullYear() + "-" + t.getMonth() + "-" + t.getDate();
    }
    function f(e) {
      if (o("WAWebMsgGetters").getIsSentByMe(e))
        return s._(/*BTDS*/ "You").toString();
      var t = o("WAWebMsgGetters").getSender(e);
      return t != null
        ? o("WAWebExportChatSystemMsgFormatter").getPlainTextName(t)
        : s._(/*BTDS*/ "Unknown").toString();
    }
    function g(e) {
      switch (e) {
        case o("WAWebMsgType").MSG_TYPE.IMAGE:
          return s._(/*BTDS*/ "Image").toString();
        case o("WAWebMsgType").MSG_TYPE.VIDEO:
          return s._(/*BTDS*/ "Video").toString();
        case o("WAWebMsgType").MSG_TYPE.AUDIO:
          return s._(/*BTDS*/ "Audio").toString();
        case o("WAWebMsgType").MSG_TYPE.PTT:
          return s._(/*BTDS*/ "Voice message").toString();
        case o("WAWebMsgType").MSG_TYPE.PTV:
          return s._(/*BTDS*/ "Video message").toString();
        case o("WAWebMsgType").MSG_TYPE.DOCUMENT:
          return s._(/*BTDS*/ "Document").toString();
        case o("WAWebMsgType").MSG_TYPE.STICKER:
          return s._(/*BTDS*/ "Sticker").toString();
        default:
          return s._(/*BTDS*/ "Media").toString();
      }
    }
    function h(e) {
      var t = e.quotedStanzaID;
      if (t == null) return "";
      var n = o("WAWebQuotedMsgModelUtils").getQuotedMsgObj(e);
      if (n == null)
        return (
          "> _[" +
          s._(/*BTDS*/ "Original message not available").toString() +
          "]_\n\n"
        );
      var a = n.unsafe(),
        i = o("WAWebMsgGetters").getBody(a),
        l = o("WAWebMsgGetters").getType(a),
        c = o("WAWebMsgGetters").getSender(a),
        d =
          c != null
            ? o("WAWebExportChatSystemMsgFormatter").getPlainTextName(c)
            : null,
        m = d != null ? d + ": " : "",
        p = "";
      if (l === o("WAWebMsgType").MSG_TYPE.REVOKED)
        p = s._(/*BTDS*/ "This message was deleted").toString();
      else if (u.has(l)) {
        var _ = g(l),
          f = o("WAWebMsgGetters").getCaption(a);
        p = f != null && f !== "" ? _ + ": " + r("WAWebUnformatMsg")(a, f) : _;
      } else
        p = i
          ? r("WAWebUnformatMsg")(a, i)
          : "[" + String(l != null ? l : "message") + "]";
      return "> _" + m + p + "_\n\n";
    }
    function y(e) {
      var t = e.downloadedMediaMsgIds,
        n = e.includeMedia,
        a = e.mediaFolder,
        i = e.msg,
        l = o("WAWebMsgGetters").getType(i),
        m = o("WAWebMsgGetters").getBody(i),
        p = o("WAWebMsgGetters").getCaption(i);
      if (l === o("WAWebMsgType").MSG_TYPE.REVOKED) {
        var _ = i.subtype;
        if (_ === "admin") {
          var f = o("WAWebMsgGetters").getRevokeSender(i);
          return f != null
            ? o("WAWebMsgGetters").getIsRevokedByMe(i)
              ? "_" +
                s._(/*BTDS*/ "You deleted this message as admin").toString() +
                "_"
              : "_" +
                s
                  ._(
                    /*BTDS*/ "This message was deleted by admin {admin-name}",
                    [
                      s._param(
                        "admin-name",
                        o("WAWebExportChatSystemMsgFormatter").getPlainTextName(
                          f,
                        ),
                      ),
                    ],
                  )
                  .toString() +
                "_"
            : "_" +
                s
                  ._(/*BTDS*/ "This message was deleted by an admin")
                  .toString() +
                "_";
        }
        return o("WAWebMsgGetters").getIsSentByMe(i)
          ? "_" + s._(/*BTDS*/ "You deleted this message").toString() + "_"
          : "_" + s._(/*BTDS*/ "This message was deleted").toString() + "_";
      }
      if (d.has(l))
        return (
          "__" +
          o("WAWebExportChatSystemMsgFormatter").formatSystemMsgForExport(i) +
          "__"
        );
      if (l === o("WAWebMsgType").MSG_TYPE.CIPHERTEXT)
        return (
          "_" +
          s
            ._(/*BTDS*/ "Waiting for this message. This may take a while.")
            .toString() +
          "_"
        );
      if (u.has(l)) {
        var h,
          y,
          C = g(l),
          b = o("WAWebMsgGetters").getIsGif(i),
          v = c.has(l) || b,
          S =
            ((h = i.mediaData) == null ? void 0 : h.filename) ||
            i.filename ||
            "" + C.toLowerCase(),
          R = (y = i.id) == null ? void 0 : y.toString(),
          L = n && t != null && R != null && t.has(R);
        if (v) {
          var E = b ? s._(/*BTDS*/ "GIF").toString() : C;
          return L ? "[" + E + "](" + a + "/" + S + ")" : "[" + E + "]";
        }
        if (L) {
          var k = a + "/" + S,
            I = "[" + C + "](" + k + ")";
          return p != null && p !== ""
            ? I + " " + r("WAWebUnformatMsg")(i, p)
            : I;
        }
        return p != null && p !== ""
          ? "[" + C + "] " + r("WAWebUnformatMsg")(i, p)
          : "[" + C + "]";
      }
      if (l === o("WAWebMsgType").MSG_TYPE.LOCATION) {
        var T = o("WAWebMsgGetters").getLat(i),
          D = o("WAWebMsgGetters").getLng(i),
          x = o("WAWebMsgGetters").getIsLive(i),
          $ = x
            ? s._(/*BTDS*/ "Live location").toString()
            : s._(/*BTDS*/ "Location").toString();
        if (T != null && D != null) {
          var P = m ? m + ": " : "";
          return (
            "" +
            P +
            $ +
            ": " +
            T +
            ", " +
            D +
            " \u2014 https://maps.google.com/?q=" +
            T +
            "," +
            D
          );
        }
        return "[" + $ + "]";
      }
      if (l === o("WAWebMsgType").MSG_TYPE.VCARD)
        return m
          ? "[" + s._(/*BTDS*/ "Contact").toString() + ": " + m + "]"
          : "[" + s._(/*BTDS*/ "Contact card").toString() + "]";
      if (l === o("WAWebMsgType").MSG_TYPE.MULTI_VCARD) {
        var N = o("WAWebMsgGetters").getVcardList(i),
          M = N.length;
        return M > 0
          ? "[" +
              s
                ._(/*BTDS*/ '_j{"*":"{number} contacts","_1":"1 contact"}', [
                  s._plural(M, "number"),
                ])
                .toString() +
              "]"
          : m
            ? "[" + s._(/*BTDS*/ "Contact").toString() + ": " + m + "]"
            : "[" + s._(/*BTDS*/ "Contact card").toString() + "]";
      }
      if (l === o("WAWebMsgType").MSG_TYPE.POLL_CREATION) {
        var w = s._(/*BTDS*/ "Poll").toString(),
          A = o("WAWebMsgGetters").getPollName(i),
          F = o("WAWebMsgGetters").getPollOptions(i),
          O = A != null ? "**" + w + ": " + A + "**" : "**" + w + "**";
        if (F != null) for (var B of F) O += "\n- " + B.name;
        return O;
      }
      if (l === o("WAWebMsgType").MSG_TYPE.CHAT)
        return r("WAWebUnformatMsg")(i, m);
      if (l === o("WAWebMsgType").MSG_TYPE.RICH_RESPONSE) {
        var W = o("WAWebGetPlainTextFromBotMsg").getPlainTextFromBotMsg(i, {
          includeBodyFallback: !1,
        });
        return W != null && W !== ""
          ? W
          : "[" + s._(/*BTDS*/ "AI message").toString() + "]";
      }
      return m
        ? r("WAWebUnformatMsg")(i, m)
        : "[" +
            s._(/*BTDS*/ "{type} message", [s._param("type", l)]).toString() +
            "]";
    }
    function C(e) {
      var t = e.chatTitle,
        n = e.downloadedMediaMsgIds,
        r = e.hasMoreHistory,
        a = r === void 0 ? !1 : r,
        i = e.includeMedia,
        l = e.mediaFolder,
        u = l === void 0 ? "media" : l,
        c = e.messages,
        g = [],
        C = new Date().toLocaleDateString(void 0, {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "numeric",
          minute: "2-digit",
        });
      (g.push(
        "# " + s._(/*BTDS*/ "WhatsApp Chat Export").toString() + ": " + t,
      ),
        g.push(s._(/*BTDS*/ "Export date").toString() + ": " + C),
        g.push(""),
        a &&
          (g.push("---"),
          g.push(
            "_" +
              s
                ._(/*BTDS*/ "Some earlier messages may not be available.")
                .toString() +
              "_",
          ),
          g.push("---"),
          g.push("")));
      var b = "";
      for (var v of c) {
        var S = o("WAWebMsgGetters").getT(v),
          R = o("WAWebMsgGetters").getType(v);
        if (
          !(
            R === o("WAWebMsgType").MSG_TYPE.PROTOCOL ||
            R === o("WAWebMsgType").MSG_TYPE.REACTION ||
            R === o("WAWebMsgType").MSG_TYPE.REACTION_ENC ||
            R === o("WAWebMsgType").MSG_TYPE.POLL_UPDATE ||
            R === o("WAWebMsgType").MSG_TYPE.KEEP_IN_CHAT ||
            R === o("WAWebMsgType").MSG_TYPE.PIN_MESSAGE
          )
        ) {
          var L = _(S);
          L !== b &&
            (g.push("---"),
            g.push(""),
            g.push("## " + m(S)),
            g.push(""),
            (b = L));
          var E = p(S),
            k = d.has(R);
          if (k) {
            var I = y({
              downloadedMediaMsgIds: n,
              includeMedia: i,
              mediaFolder: u,
              msg: v,
            });
            (g.push("[" + E + "] " + I), g.push(""));
            continue;
          }
          var T = f(v),
            D = h(v),
            x = y({
              downloadedMediaMsgIds: n,
              includeMedia: i,
              mediaFolder: u,
              msg: v,
            }),
            $ = x;
          if (o("WAWebMsgGetters").getIsForwarded(v)) {
            var P = o("WAWebMsgGetters").getIsFrequentlyForwarded(v)
              ? "[" + s._(/*BTDS*/ "Forwarded many times").toString() + "] "
              : "[" + s._(/*BTDS*/ "Forwarded").toString() + "] ";
            $ = P + x;
          }
          (D
            ? (g.push("[" + E + "] **" + T + ":**"),
              g.push(D.trimEnd()),
              g.push($))
            : g.push("[" + E + "] **" + T + ":** " + $),
            g.push(""));
        }
      }
      return g.join("\n");
    }
    ((l.MEDIA_TYPES = u), (l.formatChatAsMarkdown = C));
  },
  226,
);
