__d(
  "WAWebMessageUiUtils",
  [
    "fbt",
    "WAUnicodeUtils",
    "WAWebAlbumMessageUtils",
    "WAWebBotDisplayNameOverride",
    "WAWebClock",
    "WAWebContactGetters",
    "WAWebDropdown.react",
    "WAWebElevatedPushNamesFlag",
    "WAWebFbtCommon",
    "WAWebFbtIntlList",
    "WAWebFileUtils",
    "WAWebFrontendContactGetters",
    "WAWebFrontendMsgGetters",
    "WAWebL10nFilesize",
    "WAWebMediaTypes",
    "WAWebMessageMeta.react",
    "WAWebMessagePluginGetAriaLabelForMsgTextComponent",
    "WAWebMimeTypes",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebQuotedMsgModelUtils",
    "WAWebQuotedMsgUtils",
    "WAWebReactionsCollection",
    "WAWebReactionsUtils",
    "WAWebStatusUtils",
    "WAWebUserUtils",
    "WAWebWid",
    "WAWebWidFormat",
    "WAWebWorkDirectoryMemberName",
    "compactMap",
    "escapeRegex",
    "fbs",
    "isEmptyObject",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = new Set([
      o("WAWebMediaTypes").MediaDataStage.FETCHING,
      o("WAWebMediaTypes").MediaDataStage.UPLOADING,
    ]);
    function u(e, t) {
      if (r("isEmptyObject")(t)) return e;
      var n = Object.keys(t).map(r("escapeRegex")).join("|");
      return e.replace(new RegExp("(" + n + ")(?!\\d)", "g"), function (e) {
        var n,
          r = t[e];
        return (n = o(
          "WAWebWorkDirectoryMemberName",
        ).getWorkDirectoryMemberName(r)) != null
          ? n
          : o("WAWebFrontendContactGetters").getDisplayName(r);
      });
    }
    function c(e) {
      return e == null ? null : e ? s._(/*BTDS*/ "") : s._(/*BTDS*/ "");
    }
    c.displayName = c.name + " [from " + i.id + "]";
    function d(e) {
      var t,
        n,
        r = o("WAWebFrontendMsgGetters").getMediaData(e),
        a = {
          type: o("WAWebMsgGetters").getType(e),
          subtype: o("WAWebMsgGetters").getSubtype(e),
          isGif: r == null ? void 0 : r.isGif,
          quotedMsg: o("WAWebQuotedMsgModelUtils").getQuotedMsgObj(e),
          senderWid: o("WAWebMsgGetters").getSender(e),
        },
        i = b(a),
        l = (t = r == null ? void 0 : r.filename) != null ? t : null,
        u = o("WAWebFrontendMsgGetters").getSenderObj(e),
        c =
          (n = o("WAWebBotDisplayNameOverride").getBotDisplayNameOverride(
            u.id,
          )) != null
            ? n
            : o("WAWebFrontendContactGetters").getFormattedShortName(u);
      return s._(/*BTDS*/ "", [
        s._param("type", i),
        s._param("filename", l),
        s._param("sender", c),
        s._param("caption", e.caption),
      ]);
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m(e) {
      var t = e.optionsWithCounts,
        n = e.pollName;
      return s._(/*BTDS*/ "", [
        s._param("poll-name", n),
        s._param("poll-results", t),
      ]);
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p(e) {
      return s._(/*BTDS*/ "", [s._param("name", e)]);
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _(e, t) {
      if (e != null) return e;
      var n =
        t != null && t.length > 0
          ? s._(/*BTDS*/ "", [s._param("emojis", t)])
          : s._(/*BTDS*/ "");
      return n;
    }
    function f(e) {
      var t,
        n = e.filename,
        a = e.mimetype,
        i = e.pageCount,
        l = r("fbs")._(/*BTDS*/ "").toString();
      n != null && n !== "" && (l = n);
      var u = null,
        c = null,
        d = null;
      i > 0 && (u = s._(/*BTDS*/ "", [s._plural(i, "count")]));
      var m = n ? o("WAWebFileUtils").getFileExtension(n) : null,
        p = null;
      if (Object.hasOwn(o("WAWebMimeTypes").DOCUMENT_MIMETYPES, a)) {
        var _;
        p =
          (_ = o("WAWebMimeTypes").DOCUMENT_MIMETYPES[a]) == null
            ? void 0
            : _.ext;
      }
      ((p == null || (m != null && p !== m)) && (p = m),
        p != null && (c = p.toUpperCase()),
        (d = o("WAWebL10nFilesize").getL10nFilesize(
          (t = e.size) != null ? t : 0,
        )));
      var f = "\u2022",
        g = u != null ? f : null,
        h = c != null ? f : null;
      return s._(/*BTDS*/ "", [
        s._param("file-name", l),
        s._param("page-count", u),
        s._param("page-separator", g),
        s._param("file-type", c),
        s._param("type-separator", h),
        s._param("file-size", d),
      ]);
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g(e, t) {
      switch (e) {
        case o("WAWebMsgType").MSG_TYPE.POLL_CREATION:
        case o("WAWebMsgType").MSG_TYPE.POLL_RESULT_SNAPSHOT:
          return t ? m(t) : null;
        case o("WAWebMsgType").MSG_TYPE.STICKER: {
          var n,
            a,
            i =
              t == null || (n = t.mediaData) == null
                ? void 0
                : n.accessibilityLabel,
            l =
              t == null || (a = t.mediaData) == null || (a = a.emojis) == null
                ? void 0
                : a.join(" ");
          return i != null || l != null ? _(i, l) : null;
        }
        case o("WAWebMsgType").MSG_TYPE.PTT:
        case o("WAWebMsgType").MSG_TYPE.PTV:
        case o("WAWebMsgType").MSG_TYPE.AUDIO: {
          var u,
            c =
              (t == null || (u = t.mediaData) == null ? void 0 : u.duration) !=
              null
                ? o("WAWebClock").Clock.durationStr(t.mediaData.duration)
                : null;
          return c != null
            ? s._(/*BTDS*/ "", [s._param("media-duration", c)])
            : null;
        }
        case o("WAWebMsgType").MSG_TYPE.DOCUMENT: {
          if (t == null || (t == null ? void 0 : t.mediaData) == null)
            return null;
          var d = t.mediaData;
          return f(d);
        }
        case o("WAWebMsgType").MSG_TYPE.REVOKED:
          return t == null ? void 0 : t.revokedLabel;
        case o("WAWebMsgType").MSG_TYPE.ALBUM:
          return t
            ? S(
                r("compactMap")(t.associatedMessages, function (e) {
                  return o("WAWebFrontendMsgGetters").getAsAlbumAsset(
                    e.unsafe(),
                  );
                }),
              )
            : null;
        case o("WAWebMsgType").MSG_TYPE.VIDEO: {
          var p;
          if (
            (t == null || (p = t.mediaData) == null ? void 0 : p.isGif) ===
              !0 &&
            t.mediaData.accessibilityLabel != null
          )
            return t.mediaData.accessibilityLabel;
          break;
        }
        default:
          return null;
      }
    }
    function h(e, t) {
      if (o("WAUnicodeUtils").numCodepoints(e) > t) {
        var n = o("WAUnicodeUtils").substring(e, 0, t);
        return s._(/*BTDS*/ "", [s._param("text-content", n)]);
      }
      return e;
    }
    function y(e) {
      var t = e.ariaLabelMessageType,
        n = e.ariaMessageSpecific,
        r = e.initialPageSize,
        a = e.mentionMap,
        i = e.messageText,
        l = g(t.type, n);
      if (l != null) return l;
      if (i != null && i !== "") {
        var s = i;
        return (a != null && (s = u(i, a)), h(s, r));
      }
      var c = o(
        "WAWebMessagePluginGetAriaLabelForMsgTextComponent",
      ).getAriaLabelForMsgTextComponent({
        type: t.type,
        subtype: t.subtype,
        isGif: t.isGif,
      });
      return c != null ? c : "";
    }
    function C(e, t) {
      if (e != null) {
        var n = v({
            contact: e.senderObj,
            isElevatedPushNamesEnabled: t,
            sender: e.author,
          }),
          r = o("WAWebQuotedMsgUtils").formatQuotedMsg(e);
        return s._(/*BTDS*/ "", [
          s._param("quoted-message-author", n),
          s._param("quoted-message-body", r),
        ]);
      }
      return "";
    }
    function b(e) {
      var t = e.isGif,
        n = t === void 0 ? !1 : t,
        r = e.quotedMsg,
        a = e.senderWid,
        i = e.subtype,
        l = e.type,
        u = null,
        c = o(
          "WAWebMessagePluginGetAriaLabelForMsgTextComponent",
        ).getAriaLabelForMsgTextComponent({ type: l, subtype: i, isGif: n });
      if (r != null) {
        var d = o("WAWebUserUtils").isMeAccount(a);
        u = d ? s._(/*BTDS*/ "") : s._(/*BTDS*/ "");
      }
      return u != null || c != null
        ? s._(/*BTDS*/ "", [
            s._param("reply-message", u),
            s._param("msg-type", c),
          ])
        : null;
    }
    function v(e) {
      var t = e.contact,
        n = e.hideYou,
        a = n === void 0 ? !1 : n,
        i = e.isElevatedPushNamesEnabled,
        l = e.sender,
        u = o("WAWebUserUtils").isMeAccount(l),
        c = "";
      if (t != null) {
        var d = o("WAWebBotDisplayNameOverride").getBotDisplayNameOverride(
          t.id,
        );
        if (u) {
          if (a) return "";
          c = r("WAWebFbtCommon")("You");
        } else if (
          d != null ||
          o("WAWebContactGetters").getName(t) ||
          (o("WAWebContactGetters").getVerifiedName(t) &&
            o("WAWebContactGetters").getVerifiedLevel(t) !== 0) ||
          o("WAWebContactGetters").getIsSupportAccount(t)
        ) {
          var m;
          c =
            d != null
              ? d
              : o("WAWebContactGetters").getIsSupportAccount(t)
                ? o("WAWebFrontendContactGetters").getFormattedName(t)
                : (m = t.name) != null
                  ? m
                  : t.verifiedName;
        } else if (r("WAWebWid").isPSA(t.id)) c = "WhatsApp";
        else if (i) {
          var _,
            f,
            g =
              (_ = o("WAWebContactGetters").getNotifyName(t)) != null
                ? _
                : t.pushname,
            h = p(g),
            y =
              (f = t.id) != null && f.isLid()
                ? o("WAWebFrontendContactGetters").getUserDisplayNameForLid(t)
                : o("WAWebWidFormat").widToFormattedUser(t.id);
          c = s._(/*BTDS*/ "", [
            s._param("pushname-label", h),
            s._param("number-label", y),
          ]);
        } else {
          var C;
          c =
            (C = t.id) != null && C.isLid()
              ? o("WAWebFrontendContactGetters").getUserDisplayNameForLid(t)
              : o("WAWebWidFormat").widToFormattedUser(t.id);
          var b = o("WAWebContactGetters").getNotifyName(t),
            v = b != null && b !== "" ? b : t.pushname;
          c = c + " " + v;
        }
      }
      return c;
    }
    function S(e) {
      return r("WAWebFbtIntlList")(
        o("WAWebAlbumMessageUtils").getAlbumPhotoAndVideoCountText(
          e.map(function (e) {
            return e.unsafe();
          }),
        ),
        r("WAWebFbtIntlList").CONJUNCTIONS.NONE,
        r("WAWebFbtIntlList").DELIMITERS.COMMA,
      ).toString();
    }
    async function R(e) {
      var t = e[0],
        n = o("WAWebMsgGetters").getSender(t),
        r = o("WAWebFrontendMsgGetters").getSenderObj(t.unsafe());
      if (n != null) {
        var a = o("WAWebFrontendMsgGetters").getMaybeChat(t.unsafe()),
          i = o("WAWebElevatedPushNamesFlag").elevatedPushNamesEnabled(a),
          l = v({ contact: r, isElevatedPushNamesEnabled: i, sender: n }),
          u = e.map(function (e) {
            return o("WAWebReactionsCollection").ReactionsCollection.find(e.id);
          }),
          c = await Promise.all(u),
          d = o("WAWebReactionsUtils").getReactionEmojisAndSum(c);
        if (
          e.length > 0 &&
          o("WAWebFrontendMsgGetters").getAsAlbumAsset(e[0].unsafe())
        ) {
          var m = s._(/*BTDS*/ ""),
            p = S(e),
            _ = null;
          return (
            d.numberOfSenderReactions > 0 && (_ = E(d.numberOfSenderReactions)),
            L({
              authorName: l,
              messageTypeString: m,
              messageTextLocal: p,
              replyMsgSummary: null,
              time: null,
              messageStatusText: null,
              messageEditedText: null,
              hasReactionText: _,
            })
          );
        }
      }
    }
    function L(e) {
      var t = e.authorName,
        n = e.hasReactionText,
        r = e.messageEditedText,
        o = e.messageStatusText,
        a = e.messageTextLocal,
        i = e.messageTypeString,
        l = e.replyMsgSummary,
        u = e.time;
      return s._(/*BTDS*/ "", [
        s._param("author-name", t),
        s._param("message-type", i),
        s._param("message-text", a),
        s._param("reply-msg-summary", l),
        s._param("time-sent", u),
        s._param("message-status", o),
        s._param("message-edited", r),
        s._param("has-reaction", n),
      ]);
    }
    L.displayName = L.name + " [from " + i.id + "]";
    function E(e) {
      return e === 1 ? s._(/*BTDS*/ "") : s._(/*BTDS*/ "");
    }
    function k(e) {
      var t = e.ack,
        n = e.ariaLabelMessageType,
        r = e.asRevoked,
        a = e.isElevatedPushNamesEnabled,
        i = e.isSentByMe,
        l = e.messageDescription,
        s = e.numberReactions,
        u = e.senderContact,
        c = e.senderWid,
        d = e.shouldShowEditedIndicator,
        m = e.t,
        p = C(n.quotedMsg, a),
        _ = b(n),
        f = o("WAWebClock").Clock.timestampStr(m),
        g = i && !r,
        h = null,
        y = null,
        S = null;
      if (g) {
        var R = o("WAWebStatusUtils").getMessageStatusLabel(t);
        y = R;
      }
      d === !0 && !r && (S = o("WAWebMessageMeta.react").getEditedLabel());
      var k = v({
        contact: u,
        hideYou: !!r,
        isElevatedPushNamesEnabled: a,
        sender: c,
      });
      return (
        s && (h = E(s)),
        L({
          authorName: k,
          messageTypeString: _,
          messageTextLocal: l,
          replyMsgSummary: p,
          time: f,
          messageStatusText: y,
          messageEditedText: S,
          hasReactionText: h,
        })
      );
    }
    function I(e, t) {
      var n = document.createElement("div");
      return (
        (n.style.position = "fixed"),
        (n.style.left = e + "px"),
        (n.style.top = t + "px"),
        (n.style.width = "0px"),
        (n.style.height = "0px"),
        (n.style.pointerEvents = "none"),
        n
      );
    }
    function T(e) {
      var t = window.innerWidth,
        n = 300,
        r = 90,
        a = 4,
        i = e.top >= r + a,
        l = e.left + e.width / 2 >= n / 2,
        s = t - (e.left + e.width / 2) >= n / 2,
        u = function (n, r) {
          return l && s
            ? {
                anchorX: e.left + e.width / 2,
                anchorY: n,
                dirX: o("WAWebDropdown.react").DirX.CENTER,
                dirY: r,
              }
            : l && !s
              ? {
                  anchorX: e.right,
                  anchorY: n,
                  dirX: o("WAWebDropdown.react").DirX.LEFT,
                  dirY: r,
                }
              : !l && s
                ? {
                    anchorX: e.left,
                    anchorY: n,
                    dirX: o("WAWebDropdown.react").DirX.RIGHT,
                    dirY: r,
                  }
                : {
                    anchorX: e.left + e.width / 2,
                    anchorY: n,
                    dirX: o("WAWebDropdown.react").DirX.CENTER,
                    dirY: r,
                  };
        };
      return i
        ? u(e.top - a, o("WAWebDropdown.react").DirY.TOP)
        : u(e.bottom + a, o("WAWebDropdown.react").DirY.BOTTOM);
    }
    ((l.ETA_SUPPORTED_STATES = e),
      (l.getMediaCheckBoxAriaLabel = c),
      (l.getMediaAriaLabel = d),
      (l.getAriaLabelForMaybeName = p),
      (l.getStickerCustomLabel = _),
      (l.getMessageTextLabel = y),
      (l.getMessageTypeAriaLabel = b),
      (l.getAuthorName = v),
      (l.getLegacyAlbumRowAriaLabel = R),
      (l.getMessageAriaLabel = k),
      (l.createVirtualAnchor = I),
      (l.calculateReactionTrayPosition = T));
  },
  226,
);
