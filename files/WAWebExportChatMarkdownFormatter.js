__d(
  "WAWebExportChatMarkdownFormatter",
  [
    "fbt",
    "WALogger",
    "WAWebExportChatFormatFailures",
    "WAWebExportChatSystemMsgFormatter",
    "WAWebFormatMsgTextUtils",
    "WAWebFormatPaymentMsg",
    "WAWebForwardedBotMaskedText",
    "WAWebGetPlainTextFromBotMsg",
    "WAWebInstantMsgTypes",
    "WAWebInstantsStrings",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebPaymentStatusText",
    "WAWebQuotedMsgModelUtils",
    "WAWebUnformatMsg",
    "WAWebUserUtils",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = new Set([
        (u = o("WAWebMsgType")).MSG_TYPE.IMAGE,
        u.MSG_TYPE.VIDEO,
        u.MSG_TYPE.AUDIO,
        u.MSG_TYPE.PTT,
        u.MSG_TYPE.PTV,
        u.MSG_TYPE.DOCUMENT,
        u.MSG_TYPE.STICKER,
      ]),
      d = new Set([u.MSG_TYPE.STICKER]),
      m = new Set(u.SYSTEM_MESSAGE_TYPES);
    function p(e) {
      var t = new Date(e * 1e3);
      return t.toLocaleDateString(void 0, {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    }
    function _(e) {
      var t = new Date(e * 1e3);
      return t.toLocaleTimeString(void 0, {
        hour: "numeric",
        minute: "2-digit",
      });
    }
    function f(e) {
      var t = new Date(e * 1e3);
      return t.getFullYear() + "-" + t.getMonth() + "-" + t.getDate();
    }
    function g(e) {
      if (o("WAWebMsgGetters").getIsSentByMe(e))
        return s._(/*BTDS*/ "").toString();
      var t = o("WAWebMsgGetters").getSender(e);
      return t != null
        ? o("WAWebExportChatSystemMsgFormatter").getPlainTextName(t)
        : s._(/*BTDS*/ "").toString();
    }
    function h(e) {
      switch (e) {
        case o("WAWebMsgType").MSG_TYPE.IMAGE:
          return s._(/*BTDS*/ "").toString();
        case o("WAWebMsgType").MSG_TYPE.VIDEO:
          return s._(/*BTDS*/ "").toString();
        case o("WAWebMsgType").MSG_TYPE.AUDIO:
          return s._(/*BTDS*/ "").toString();
        case o("WAWebMsgType").MSG_TYPE.PTT:
          return s._(/*BTDS*/ "").toString();
        case o("WAWebMsgType").MSG_TYPE.PTV:
          return s._(/*BTDS*/ "").toString();
        case o("WAWebMsgType").MSG_TYPE.DOCUMENT:
          return s._(/*BTDS*/ "").toString();
        case o("WAWebMsgType").MSG_TYPE.STICKER:
          return s._(/*BTDS*/ "").toString();
        default:
          return s._(/*BTDS*/ "").toString();
      }
    }
    function y(e) {
      var t = e.quotedStanzaID;
      if (t == null) return "";
      var n = o("WAWebQuotedMsgModelUtils").getQuotedMsgObj(e);
      if (n == null) return "> _[" + s._(/*BTDS*/ "").toString() + "]_\n\n";
      var a = n.unsafe(),
        i = o("WAWebMsgGetters").getBody(a),
        l = o("WAWebMsgGetters").getType(a),
        u = o("WAWebMsgGetters").getSender(a),
        d =
          u != null
            ? o("WAWebExportChatSystemMsgFormatter").getPlainTextName(u)
            : null,
        m = d != null ? d + ": " : "",
        p = "";
      if (l === o("WAWebMsgType").MSG_TYPE.REVOKED)
        p = s._(/*BTDS*/ "").toString();
      else if (o("WAWebInstantMsgTypes").isInstantMsgType(l))
        p = o("WAWebInstantsStrings").getInstantLabel();
      else if (c.has(l)) {
        var _ = h(l),
          f = o("WAWebMsgGetters").getCaption(a);
        p = f != null && f !== "" ? _ + ": " + r("WAWebUnformatMsg")(a, f) : _;
      } else
        p = i
          ? r("WAWebUnformatMsg")(a, i)
          : "[" + String(l != null ? l : "message") + "]";
      return "> _" + m + p + "_\n\n";
    }
    function C(e, t) {
      return e == null
        ? null
        : o("WAWebUserUtils").isMeAccount(e)
          ? o("WAWebFormatPaymentMsg").getPaymentTypeTextForSelf(t)
          : o("WAWebFormatPaymentMsg").getPaymentTypeText(
              t,
              o("WAWebExportChatSystemMsgFormatter").getPlainTextName(e),
            );
    }
    function b(t) {
      var n = null;
      try {
        n = C(
          o("WAWebMsgGetters").getPaymentMessageReceiverJid(t),
          o("WAWebMsgGetters").getSubtype(t),
        );
      } catch (t) {
        ((n = null),
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[export_chat] could not resolve the payment direction",
                ])),
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("export-chat-payment-direction", { sampling: 0.01 }));
      }
      var a = o("WAWebFormatMsgTextUtils").formatPayment(t),
        i = o("WAWebPaymentStatusText").getPaymentStatusTextForRecord(
          o("WAWebMsgGetters").getPaymentStatus(t),
          o("WAWebMsgGetters").getPaymentTxnStatus(t),
        ),
        l = i.str;
      return n == null
        ? l == null
          ? a.toString()
          : s
              ._(/*BTDS*/ "", [s._param("payment", a), s._param("status", l)])
              .toString()
        : l == null
          ? s
              ._(/*BTDS*/ "", [
                s._param("direction", n),
                s._param("payment", a),
              ])
              .toString()
          : s
              ._(/*BTDS*/ "", [
                s._param("direction", n),
                s._param("payment", a),
                s._param("status", l),
              ])
              .toString();
    }
    function v(e) {
      var t = e.downloadedMediaMsgIds,
        n = e.includeMedia,
        a = e.mediaFolder,
        i = e.msg,
        l = o("WAWebMsgGetters").getType(i),
        u = o("WAWebMsgGetters").getBody(i),
        p = o("WAWebMsgGetters").getCaption(i);
      if (l === o("WAWebMsgType").MSG_TYPE.REVOKED) {
        var _ = i.subtype;
        if (_ === "admin") {
          var f = o("WAWebMsgGetters").getRevokeSender(i);
          return f != null
            ? o("WAWebMsgGetters").getIsRevokedByMe(i)
              ? "_" + s._(/*BTDS*/ "").toString() + "_"
              : "_" +
                s
                  ._(/*BTDS*/ "", [
                    s._param(
                      "admin-name",
                      o("WAWebExportChatSystemMsgFormatter").getPlainTextName(
                        f,
                      ),
                    ),
                  ])
                  .toString() +
                "_"
            : "_" + s._(/*BTDS*/ "").toString() + "_";
        }
        return o("WAWebMsgGetters").getIsSentByMe(i)
          ? "_" + s._(/*BTDS*/ "").toString() + "_"
          : "_" + s._(/*BTDS*/ "").toString() + "_";
      }
      if (m.has(l))
        return (
          "__" +
          o("WAWebExportChatSystemMsgFormatter").formatSystemMsgForExport(i) +
          "__"
        );
      if (o("WAWebInstantMsgTypes").isInstantMsgType(l))
        return "_" + o("WAWebInstantsStrings").getInstantLabel() + "_";
      if (l === o("WAWebMsgType").MSG_TYPE.CIPHERTEXT)
        return "_" + s._(/*BTDS*/ "").toString() + "_";
      if (c.has(l)) {
        var g,
          y,
          C = h(l),
          v = o("WAWebMsgGetters").getIsGif(i),
          S = d.has(l) || v,
          R =
            ((g = i.mediaData) == null ? void 0 : g.filename) ||
            i.filename ||
            "" + C.toLowerCase(),
          L = (y = i.id) == null ? void 0 : y.toString(),
          E = n && t != null && L != null && t.has(L);
        if (S) {
          var k = v ? s._(/*BTDS*/ "").toString() : C;
          return E ? "[" + k + "](" + a + "/" + R + ")" : "[" + k + "]";
        }
        if (E) {
          var I = a + "/" + R,
            T = "[" + C + "](" + I + ")";
          return p != null && p !== ""
            ? T + " " + r("WAWebUnformatMsg")(i, p)
            : T;
        }
        return p != null && p !== ""
          ? "[" + C + "] " + r("WAWebUnformatMsg")(i, p)
          : "[" + C + "]";
      }
      if (l === o("WAWebMsgType").MSG_TYPE.LOCATION) {
        var D = o("WAWebMsgGetters").getLat(i),
          x = o("WAWebMsgGetters").getLng(i),
          $ = o("WAWebMsgGetters").getIsLive(i),
          P = $ ? s._(/*BTDS*/ "").toString() : s._(/*BTDS*/ "").toString();
        if (D != null && x != null) {
          var N = u ? u + ": " : "";
          return (
            "" +
            N +
            P +
            ": " +
            D +
            ", " +
            x +
            " \u2014 https://maps.google.com/?q=" +
            D +
            "," +
            x
          );
        }
        return "[" + P + "]";
      }
      if (l === o("WAWebMsgType").MSG_TYPE.VCARD)
        return u
          ? "[" + s._(/*BTDS*/ "").toString() + ": " + u + "]"
          : "[" + s._(/*BTDS*/ "").toString() + "]";
      if (l === o("WAWebMsgType").MSG_TYPE.MULTI_VCARD) {
        var M = o("WAWebMsgGetters").getVcardList(i),
          w = M.length;
        return w > 0
          ? "[" + s._(/*BTDS*/ "", [s._plural(w, "number")]).toString() + "]"
          : u
            ? "[" + s._(/*BTDS*/ "").toString() + ": " + u + "]"
            : "[" + s._(/*BTDS*/ "").toString() + "]";
      }
      if (l === o("WAWebMsgType").MSG_TYPE.POLL_CREATION) {
        var A = s._(/*BTDS*/ "").toString(),
          F = o("WAWebMsgGetters").getPollName(i),
          O = o("WAWebMsgGetters").getPollOptions(i),
          B = F != null ? "**" + A + ": " + F + "**" : "**" + A + "**";
        if (O != null) for (var W of O) B += "\n- " + W.name;
        return B;
      }
      if (l === o("WAWebMsgType").MSG_TYPE.PAYMENT) return b(i);
      if (l === o("WAWebMsgType").MSG_TYPE.CHAT)
        return r("WAWebUnformatMsg")(i, u);
      if (l === o("WAWebMsgType").MSG_TYPE.RICH_RESPONSE) {
        var q = o("WAWebGetPlainTextFromBotMsg").getPlainTextFromBotMsg(i, {
          includeBodyFallback: !1,
        });
        return q != null && q !== ""
          ? q
          : "[" + s._(/*BTDS*/ "").toString() + "]";
      }
      return u
        ? r("WAWebUnformatMsg")(i, u)
        : "[" + s._(/*BTDS*/ "", [s._param("type", l)]).toString() + "]";
    }
    function S(e) {
      var t = e.chatTitle,
        n = e.downloadedMediaMsgIds,
        r = e.hasMoreHistory,
        a = r === void 0 ? !1 : r,
        i = e.includeMedia,
        l = e.mediaFolder,
        u = l === void 0 ? "media" : l,
        c = e.messages,
        d = [],
        m = new Date().toLocaleDateString(void 0, {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "numeric",
          minute: "2-digit",
        });
      (d.push("# " + s._(/*BTDS*/ "").toString() + ": " + t),
        d.push(s._(/*BTDS*/ "").toString() + ": " + m),
        d.push(""),
        a &&
          (d.push("---"),
          d.push("_" + s._(/*BTDS*/ "").toString() + "_"),
          d.push("---"),
          d.push("")));
      var p = "",
        _ = { count: 0, first: null };
      for (var f of c)
        try {
          p = R({
            downloadedMediaMsgIds: n,
            failures: _,
            includeMedia: i,
            lastDateKey: p,
            lines: d,
            mediaFolder: u,
            msg: f,
          });
        } catch (e) {
          (o("WAWebExportChatFormatFailures").recordFailure(_, e),
            d.push(
              "[" +
                o("WAWebExportChatFormatFailures").unexportableMessageText() +
                "]",
            ),
            d.push(""));
        }
      return (
        o("WAWebExportChatFormatFailures").reportFormatFailures(_, "markdown"),
        d.join("\n")
      );
    }
    function R(e) {
      var t = e.downloadedMediaMsgIds,
        n = e.failures,
        r = e.includeMedia,
        a = e.lastDateKey,
        i = e.lines,
        l = e.mediaFolder,
        s = e.msg,
        u = o("WAWebMsgGetters").getT(s),
        c = o("WAWebMsgGetters").getType(s);
      if (
        c === o("WAWebMsgType").MSG_TYPE.PROTOCOL ||
        c === o("WAWebMsgType").MSG_TYPE.REACTION ||
        c === o("WAWebMsgType").MSG_TYPE.REACTION_ENC ||
        c === o("WAWebMsgType").MSG_TYPE.POLL_UPDATE ||
        c === o("WAWebMsgType").MSG_TYPE.KEEP_IN_CHAT ||
        c === o("WAWebMsgType").MSG_TYPE.PIN_MESSAGE
      )
        return a;
      var d = f(u),
        m = p(u),
        g = _(u),
        h = a;
      d !== a &&
        (i.push("---"), i.push(""), i.push("## " + m), i.push(""), (h = d));
      try {
        L({
          downloadedMediaMsgIds: t,
          includeMedia: r,
          lines: i,
          mediaFolder: l,
          msg: s,
          time: g,
          type: c,
        });
      } catch (e) {
        (o("WAWebExportChatFormatFailures").recordFailure(n, e),
          i.push(
            "[" +
              g +
              "] [" +
              o("WAWebExportChatFormatFailures").unexportableMessageText() +
              "]",
          ),
          i.push(""));
      }
      return h;
    }
    function L(e) {
      var t,
        n = e.downloadedMediaMsgIds,
        r = e.includeMedia,
        a = e.lines,
        i = e.mediaFolder,
        l = e.msg,
        u = e.time,
        c = e.type;
      if (m.has(c)) {
        (a.push(
          "[" +
            u +
            "] " +
            v({
              downloadedMediaMsgIds: n,
              includeMedia: r,
              mediaFolder: i,
              msg: l,
            }),
        ),
          a.push(""));
        return;
      }
      var d = g(l),
        p = y(l),
        _ =
          (t = o("WAWebForwardedBotMaskedText").getMaskedForwardedBotCopyText(
            l,
          )) != null
            ? t
            : v({
                downloadedMediaMsgIds: n,
                includeMedia: r,
                mediaFolder: i,
                msg: l,
              }),
        f = _;
      if (o("WAWebMsgGetters").getIsForwarded(l)) {
        var h = o("WAWebMsgGetters").getIsFrequentlyForwarded(l)
          ? "[" + s._(/*BTDS*/ "").toString() + "] "
          : "[" + s._(/*BTDS*/ "").toString() + "] ";
        f = h + _;
      }
      (p
        ? (a.push("[" + u + "] **" + d + ":**"), a.push(p.trimEnd()), a.push(f))
        : a.push("[" + u + "] **" + d + ":** " + f),
        a.push(""));
    }
    ((l.MEDIA_TYPES = c),
      (l.formatPaymentForExport = b),
      (l.formatChatAsMarkdown = S));
  },
  226,
);
