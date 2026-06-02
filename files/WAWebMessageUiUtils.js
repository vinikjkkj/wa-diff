__d(
  "WAWebMessageUiUtils",
  [
    "fbt",
    "WAUnicodeUtils",
    "WAWebAlbumMessageUtils",
    "WAWebClock",
    "WAWebContactGetters",
    "WAWebDropdown.react",
    "WAWebElevatedPushNamesFlag",
    "WAWebFbtIntlList",
    "WAWebFileUtils",
    "WAWebFrontendContactGetters",
    "WAWebFrontendMsgGetters",
    "WAWebL10nFilesize",
    "WAWebMediaTypes",
    "WAWebMessageMeta.react",
    "WAWebMessagePluginGetAriaLabelForMsgTextComponent",
    "WAWebMimeTypes",
    "WAWebMiscGatingUtils",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebQuotedMsgModelUtils",
    "WAWebQuotedMsgUtils",
    "WAWebReactionsCollection",
    "WAWebReactionsUtils",
    "WAWebStatusUtils",
    "WAWebUserPrefsMeUser",
    "WAWebWid",
    "WAWebWidFormat",
    "compactMap",
    "fbs",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = new Set([
      o("WAWebMediaTypes").MediaDataStage.FETCHING,
      o("WAWebMediaTypes").MediaDataStage.UPLOADING,
    ]);
    function u(e, t) {
      var n = e;
      return (
        Object.keys(t).forEach(function (e) {
          var r = t[e];
          n = n.replaceAll(
            e,
            o("WAWebFrontendContactGetters").getDisplayName(r),
          );
        }),
        n
      );
    }
    function c(e) {
      return e == null
        ? null
        : e
          ? s._(/*BTDS*/ "Deselect message")
          : s._(/*BTDS*/ "Select message");
    }
    c.displayName = c.name + " [from " + i.id + "]";
    function d(e) {
      var t,
        n = o("WAWebFrontendMsgGetters").getMediaData(e),
        r = {
          type: o("WAWebMsgGetters").getType(e),
          subtype: o("WAWebMsgGetters").getSubtype(e),
          isGif: n == null ? void 0 : n.isGif,
          quotedMsg: o("WAWebQuotedMsgModelUtils").getQuotedMsgObj(e),
          senderWid: o("WAWebMsgGetters").getSender(e),
        },
        a = b(r),
        i = (t = n.filename) != null ? t : null,
        l = o("WAWebFrontendContactGetters").getFormattedShortName(
          o("WAWebFrontendMsgGetters").getSenderObj(e),
        );
      return s._(/*BTDS*/ "{type}{filename} from {sender}{caption}", [
        s._param("type", a),
        s._param("filename", i),
        s._param("sender", l),
        s._param("caption", e.caption),
      ]);
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m(e) {
      var t = e.optionsWithCounts,
        n = e.pollName,
        r = o("WAWebMiscGatingUtils").messageListA11yRedesignEnabled()
          ? ""
          : s._(/*BTDS*/ "Keyboard interaction with polls is not available.");
      return s._(
        /*BTDS*/ "{poll-name} top vote counts: {poll-results}. {no-kb-navigation}",
        [
          s._param("poll-name", n),
          s._param("poll-results", t),
          s._param("no-kb-navigation", r),
        ],
      );
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p(e) {
      return s._(/*BTDS*/ "Maybe {name}", [s._param("name", e)]);
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _(e, t) {
      if (e != null) return e;
      var n =
        t != null && t.length > 0
          ? s._(/*BTDS*/ "Sticker with: {emojis}", [s._param("emojis", t)])
          : s._(/*BTDS*/ "Sticker with no label");
      return n;
    }
    function f(e) {
      var t,
        n = e.filename,
        a = e.mimetype,
        i = e.pageCount,
        l = r("fbs")._(/*BTDS*/ "Untitled").toString();
      n != null && n !== "" && (l = n);
      var u = null,
        c = null,
        d = null;
      i > 0 &&
        (u = s._(/*BTDS*/ '_j{"*":"{count} pages","_1":"1 page"}', [
          s._plural(i, "count"),
        ]));
      var m = n ? o("WAWebFileUtils").getFileExtension(n) : null,
        p = null;
      if (
        Object.prototype.hasOwnProperty.call(
          o("WAWebMimeTypes").DOCUMENT_MIMETYPES,
          a,
        )
      ) {
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
      return s._(
        /*BTDS*/ "Document name: {file-name}. {page-count}{page-separator}{file-type}{type-separator}{file-size}",
        [
          s._param("file-name", l),
          s._param("page-count", u),
          s._param("page-separator", g),
          s._param("file-type", c),
          s._param("type-separator", h),
          s._param("file-size", d),
        ],
      );
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
              t == null || (a = t.mediaData.emojis) == null
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
            ? s._(/*BTDS*/ "Duration: {media-duration}", [
                s._param("media-duration", c),
              ])
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
          if (
            (t == null ? void 0 : t.mediaData.isGif) === !0 &&
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
        return s._(/*BTDS*/ "{text-content}\u2026 Read more", [
          s._param("text-content", n),
        ]);
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
        return s._(
          /*BTDS*/ "to quoted message from {quoted-message-author}: {quoted-message-body}",
          [
            s._param("quoted-message-author", n),
            s._param("quoted-message-body", r),
          ],
        );
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
        var d = o("WAWebUserPrefsMeUser").isMeAccount(a);
        u = d ? s._(/*BTDS*/ "replied") : s._(/*BTDS*/ "replied");
      }
      return u != null || c != null
        ? s._(/*BTDS*/ "{reply-message} {msg-type}", [
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
        u = o("WAWebUserPrefsMeUser").isMeAccount(l),
        c = "";
      if (t != null)
        if (u) {
          if (a) return "";
          c = s._(/*BTDS*/ "You");
        } else if (
          o("WAWebContactGetters").getName(t) ||
          (o("WAWebContactGetters").getVerifiedName(t) &&
            o("WAWebContactGetters").getVerifiedLevel(t) !== 0) ||
          o("WAWebContactGetters").getIsSupportAccount(t)
        ) {
          var d;
          c = o("WAWebContactGetters").getIsSupportAccount(t)
            ? o("WAWebFrontendContactGetters").getFormattedName(t)
            : (d = t.name) != null
              ? d
              : t.verifiedName;
        } else if (r("WAWebWid").isPSA(t.id)) c = "WhatsApp";
        else if (i) {
          var m,
            _,
            f =
              (m = o("WAWebContactGetters").getNotifyName(t)) != null
                ? m
                : t.pushname,
            g = p(f),
            h =
              (_ = t.id) != null && _.isLid()
                ? o("WAWebFrontendContactGetters").getUserDisplayNameForLid(t)
                : o("WAWebWidFormat").widToFormattedUser(t.id);
          c = s._(/*BTDS*/ "{pushname-label} {number-label}", [
            s._param("pushname-label", g),
            s._param("number-label", h),
          ]);
        } else {
          var y;
          c =
            (y = t.id) != null && y.isLid()
              ? o("WAWebFrontendContactGetters").getUserDisplayNameForLid(t)
              : o("WAWebWidFormat").widToFormattedUser(t.id);
          var C = o("WAWebContactGetters").getNotifyName(t),
            b = C != null && C !== "" ? C : t.pushname;
          c = c + " " + b;
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
          var m = s._(/*BTDS*/ "Media album"),
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
      return s._(
        /*BTDS*/ "{author-name} {message-type} {message-text} {reply-msg-summary} {time-sent} {message-status} {message-edited} {has-reaction}",
        [
          s._param("author-name", t),
          s._param("message-type", i),
          s._param("message-text", a),
          s._param("reply-msg-summary", l),
          s._param("time-sent", u),
          s._param("message-status", o),
          s._param("message-edited", r),
          s._param("has-reaction", n),
        ],
      );
    }
    L.displayName = L.name + " [from " + i.id + "]";
    function E(e) {
      return e === 1
        ? s._(/*BTDS*/ "has reaction")
        : s._(/*BTDS*/ "has reactions");
    }
    function k(e) {
      var t = e.ack,
        n = e.ariaLabelMessageType,
        r = e.asRevoked,
        a = e.isEdited,
        i = e.isElevatedPushNamesEnabled,
        l = e.isSentByMe,
        s = e.messageDescription,
        u = e.numberReactions,
        c = e.senderContact,
        d = e.senderWid,
        m = e.t,
        p = C(n.quotedMsg, i),
        _ = b(n),
        f = o("WAWebClock").Clock.timestampStr(m),
        g = l && !r,
        h = null,
        y = null,
        S = null;
      if (g) {
        var R = o("WAWebStatusUtils").getMessageStatusLabel(t);
        y = R;
      }
      a === !0 && !r && (S = o("WAWebMessageMeta.react").getEditedLabel());
      var k = v({
        contact: c,
        hideYou: !!r,
        isElevatedPushNamesEnabled: i,
        sender: d,
      });
      return (
        u && (h = E(u)),
        L({
          authorName: k,
          messageTypeString: _,
          messageTextLocal: s,
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
        a = e.top >= r,
        i = e.left + e.width / 2 >= n / 2,
        l = t - (e.left + e.width / 2) >= n / 2,
        s = function (n, r) {
          return i && l
            ? {
                anchorX: e.left + e.width / 2,
                anchorY: n,
                dirX: o("WAWebDropdown.react").DirX.CENTER,
                dirY: r,
              }
            : i && !l
              ? {
                  anchorX: e.right,
                  anchorY: n,
                  dirX: o("WAWebDropdown.react").DirX.LEFT,
                  dirY: r,
                }
              : !i && l
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
      return a
        ? s(e.top, o("WAWebDropdown.react").DirY.TOP)
        : s(e.bottom, o("WAWebDropdown.react").DirY.BOTTOM);
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
