__d(
  "WAWebExportChatMarkdownFormatter",
  [
    "fbt",
    "WAWebExportChatSystemMsgFormatter",
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
      return t.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    }
    function p(e) {
      var t = new Date(e * 1e3);
      return t.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: !0,
      });
    }
    function _(e) {
      var t = new Date(e * 1e3);
      return t.getFullYear() + "-" + t.getMonth() + "-" + t.getDate();
    }
    function f(e) {
      if (o("WAWebMsgGetters").getIsSentByMe(e)) return "You";
      var t = o("WAWebMsgGetters").getSender(e);
      return t != null
        ? o("WAWebExportChatSystemMsgFormatter").getPlainTextName(t)
        : "Unknown";
    }
    function g(e) {
      switch (e) {
        case o("WAWebMsgType").MSG_TYPE.IMAGE:
          return "Image";
        case o("WAWebMsgType").MSG_TYPE.VIDEO:
          return "Video";
        case o("WAWebMsgType").MSG_TYPE.AUDIO:
          return "Audio";
        case o("WAWebMsgType").MSG_TYPE.PTT:
          return "Voice message";
        case o("WAWebMsgType").MSG_TYPE.PTV:
          return "Video message";
        case o("WAWebMsgType").MSG_TYPE.DOCUMENT:
          return "Document";
        case o("WAWebMsgType").MSG_TYPE.STICKER:
          return "Sticker";
        default:
          return "Media";
      }
    }
    function h(e) {
      var t = e.quotedStanzaID;
      if (t == null) return "";
      var n = o("WAWebQuotedMsgModelUtils").getQuotedMsgObj(e);
      if (n == null) return "> _[Original message not available]_\n\n";
      var a = n.unsafe(),
        i = o("WAWebMsgGetters").getBody(a),
        l = o("WAWebMsgGetters").getType(a),
        s = o("WAWebMsgGetters").getSender(a),
        c =
          s != null
            ? o("WAWebExportChatSystemMsgFormatter").getPlainTextName(s)
            : null,
        d = c != null ? c + ": " : "",
        m = "";
      if (l === o("WAWebMsgType").MSG_TYPE.REVOKED)
        m = "This message was deleted";
      else if (u.has(l)) {
        var p = g(l),
          _ = o("WAWebMsgGetters").getCaption(a);
        m = _ != null && _ !== "" ? p + ": " + r("WAWebUnformatMsg")(a, _) : p;
      } else
        m = i
          ? r("WAWebUnformatMsg")(a, i)
          : "[" + String(l != null ? l : "message") + "]";
      return "> _" + d + m + "_\n\n";
    }
    function y(e, t, n, a) {
      var i = o("WAWebMsgGetters").getType(e),
        l = o("WAWebMsgGetters").getBody(e),
        m = o("WAWebMsgGetters").getCaption(e);
      if (i === o("WAWebMsgType").MSG_TYPE.REVOKED) {
        var p = e.subtype;
        if (p === "admin") {
          var _ = o("WAWebMsgGetters").getRevokeSender(e);
          return _ != null
            ? o("WAWebMsgGetters").getIsRevokedByMe(e)
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
                          _,
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
        return o("WAWebMsgGetters").getIsSentByMe(e)
          ? "_" + s._(/*BTDS*/ "You deleted this message").toString() + "_"
          : "_" + s._(/*BTDS*/ "This message was deleted").toString() + "_";
      }
      if (d.has(i))
        return (
          "__" +
          o("WAWebExportChatSystemMsgFormatter").formatSystemMsgForExport(e) +
          "__"
        );
      if (i === o("WAWebMsgType").MSG_TYPE.CIPHERTEXT)
        return "_Waiting for this message. This may take a while._";
      if (u.has(i)) {
        var f,
          h,
          y = g(i),
          C = o("WAWebMsgGetters").getIsGif(e),
          b = c.has(i) || C,
          v =
            ((f = e.mediaData) == null ? void 0 : f.filename) ||
            e.filename ||
            "" + y.toLowerCase(),
          S = (h = e.id) == null ? void 0 : h.toString(),
          R = t && a != null && S != null && a.has(S);
        if (b) {
          var L = C ? "GIF" : y;
          return R ? "[" + L + "](" + n + "/" + v + ")" : "[" + L + "]";
        }
        if (R) {
          var E = n + "/" + v,
            k = "[" + y + "](" + E + ")";
          return m != null && m !== ""
            ? k + " " + r("WAWebUnformatMsg")(e, m)
            : k;
        }
        return m != null && m !== ""
          ? "[" + y + "] " + r("WAWebUnformatMsg")(e, m)
          : "[" + y + "]";
      }
      if (i === o("WAWebMsgType").MSG_TYPE.LOCATION) {
        var I = o("WAWebMsgGetters").getLat(e),
          T = o("WAWebMsgGetters").getLng(e),
          D = o("WAWebMsgGetters").getIsLive(e),
          x = D
            ? s._(/*BTDS*/ "Live location").toString()
            : s._(/*BTDS*/ "Location").toString();
        if (I != null && T != null) {
          var $ = l ? l + ": " : "";
          return (
            "" +
            $ +
            x +
            ": " +
            I +
            ", " +
            T +
            " \u2014 https://maps.google.com/?q=" +
            I +
            "," +
            T
          );
        }
        return "[" + x + "]";
      }
      if (i === o("WAWebMsgType").MSG_TYPE.VCARD)
        return l ? "[Contact: " + l + "]" : "[Contact card]";
      if (i === o("WAWebMsgType").MSG_TYPE.MULTI_VCARD) {
        var P = o("WAWebMsgGetters").getVcardList(e),
          N = P.length;
        return N > 0
          ? "[" +
              s
                ._(/*BTDS*/ '_j{"*":"{number} contacts","_1":"1 contact"}', [
                  s._plural(N, "number"),
                ])
                .toString() +
              "]"
          : l
            ? "[Contact: " + l + "]"
            : "[Contact card]";
      }
      if (i === o("WAWebMsgType").MSG_TYPE.POLL_CREATION) {
        var M,
          w = (M = o("WAWebMsgGetters").getPollName(e)) != null ? M : "Poll",
          A = o("WAWebMsgGetters").getPollOptions(e),
          F = "**Poll: " + w + "**";
        if (A != null) for (var O of A) F += "\n- " + O.name;
        return F;
      }
      return i === o("WAWebMsgType").MSG_TYPE.CHAT || l
        ? r("WAWebUnformatMsg")(e, l)
        : "[" + i + " message]";
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
        C = new Date().toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "numeric",
          minute: "2-digit",
        });
      (g.push("# WhatsApp Chat Export: " + t),
        g.push("Export date: " + C),
        g.push(""),
        a &&
          (g.push("---"),
          g.push("_Some earlier messages may not be available._"),
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
            var I = y(v, i, u, n);
            (g.push("[" + E + "] " + I), g.push(""));
            continue;
          }
          var T = f(v),
            D = h(v),
            x = y(v, i, u, n),
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
