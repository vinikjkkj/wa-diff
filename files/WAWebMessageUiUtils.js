__d(
  "WAWebMessageUiUtils",
  [
    "fbt",
    "Promise",
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
    "asyncToGeneratorRuntime",
    "compactMap",
    "fbs",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = new Set([
        o("WAWebMediaTypes").MediaDataStage.FETCHING,
        o("WAWebMediaTypes").MediaDataStage.UPLOADING,
      ]);
    function c(e, t) {
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
    function d(e) {
      return e == null
        ? null
        : e
          ? s._(/*BTDS*/ "Deselect message")
          : s._(/*BTDS*/ "Select message");
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m(e) {
      var t,
        n = o("WAWebFrontendMsgGetters").getMediaData(e),
        r = {
          type: o("WAWebMsgGetters").getType(e),
          subtype: o("WAWebMsgGetters").getSubtype(e),
          isGif: n == null ? void 0 : n.isGif,
          quotedMsg: o("WAWebQuotedMsgModelUtils").getQuotedMsgObj(e),
          senderWid: o("WAWebMsgGetters").getSender(e),
        },
        a = v(r),
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
    m.displayName = m.name + " [from " + i.id + "]";
    function p(e) {
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
    p.displayName = p.name + " [from " + i.id + "]";
    function _(e) {
      return s._(/*BTDS*/ "Maybe {name}", [s._param("name", e)]);
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f(e, t) {
      if (e != null) return e;
      var n =
        t != null && t.length > 0
          ? s._(/*BTDS*/ "Sticker with: {emojis}", [s._param("emojis", t)])
          : s._(/*BTDS*/ "Sticker with no label");
      return n;
    }
    function g(e) {
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
    g.displayName = g.name + " [from " + i.id + "]";
    function h(e, t) {
      switch (e) {
        case o("WAWebMsgType").MSG_TYPE.POLL_CREATION:
        case o("WAWebMsgType").MSG_TYPE.POLL_RESULT_SNAPSHOT:
          return t ? p(t) : null;
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
          return i != null || l != null ? f(i, l) : null;
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
          return g(d);
        }
        case o("WAWebMsgType").MSG_TYPE.REVOKED:
          return t == null ? void 0 : t.revokedLabel;
        case o("WAWebMsgType").MSG_TYPE.ALBUM:
          return t
            ? R(
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
    function y(e, t) {
      if (o("WAUnicodeUtils").numCodepoints(e) > t) {
        var n = o("WAUnicodeUtils").substring(e, 0, t);
        return s._(/*BTDS*/ "{text-content}\u2026 Read more", [
          s._param("text-content", n),
        ]);
      }
      return e;
    }
    function C(e) {
      var t = e.ariaLabelMessageType,
        n = e.ariaMessageSpecific,
        r = e.initialPageSize,
        a = e.mentionMap,
        i = e.messageText,
        l = h(t.type, n);
      if (l != null) return l;
      if (i != null && i !== "") {
        var s = i;
        return (a != null && (s = c(i, a)), y(s, r));
      }
      var u = o(
        "WAWebMessagePluginGetAriaLabelForMsgTextComponent",
      ).getAriaLabelForMsgTextComponent({
        type: t.type,
        subtype: t.subtype,
        isGif: t.isGif,
      });
      return u != null ? u : "";
    }
    function b(e, t) {
      if (e != null) {
        var n = S(e.author, e.senderObj, t),
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
    function v(e) {
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
    function S(e, t, n, a) {
      a === void 0 && (a = !1);
      var i = o("WAWebUserPrefsMeUser").isMeAccount(e),
        l = "";
      if (t != null)
        if (i) {
          if (a) return "";
          l = s._(/*BTDS*/ "You");
        } else if (
          o("WAWebContactGetters").getName(t) ||
          (o("WAWebContactGetters").getVerifiedName(t) &&
            o("WAWebContactGetters").getVerifiedLevel(t) !== 0) ||
          o("WAWebContactGetters").getIsSupportAccount(t)
        ) {
          var u;
          l = o("WAWebContactGetters").getIsSupportAccount(t)
            ? o("WAWebFrontendContactGetters").getFormattedName(t)
            : (u = t.name) != null
              ? u
              : t.verifiedName;
        } else if (r("WAWebWid").isPSA(t.id)) l = "WhatsApp";
        else if (n) {
          var c,
            d,
            m =
              (c = o("WAWebContactGetters").getNotifyName(t)) != null
                ? c
                : t.pushname,
            p = _(m),
            f =
              (d = t.id) != null && d.isLid()
                ? o("WAWebFrontendContactGetters").getUserDisplayNameForLid(t)
                : o("WAWebWidFormat").widToFormattedUser(t.id);
          l = s._(/*BTDS*/ "{pushname-label} {number-label}", [
            s._param("pushname-label", p),
            s._param("number-label", f),
          ]);
        } else {
          var g;
          l =
            (g = t.id) != null && g.isLid()
              ? o("WAWebFrontendContactGetters").getUserDisplayNameForLid(t)
              : o("WAWebWidFormat").widToFormattedUser(t.id);
          var h = o("WAWebContactGetters").getNotifyName(t),
            y = h != null && h !== "" ? h : t.pushname;
          l = l + " " + y;
        }
      return l;
    }
    function R(e) {
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
    function L(e) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var r = t[0],
            a = o("WAWebMsgGetters").getSender(r),
            i = o("WAWebFrontendMsgGetters").getSenderObj(r.unsafe());
          if (a != null) {
            var l = o("WAWebFrontendMsgGetters").getMaybeChat(r.unsafe()),
              u = o("WAWebElevatedPushNamesFlag").elevatedPushNamesEnabled(l),
              c = S(a, i, u),
              d = t.map(function (e) {
                return o("WAWebReactionsCollection").ReactionsCollection.find(
                  e.id,
                );
              }),
              m = yield (e || (e = n("Promise"))).all(d),
              p = o("WAWebReactionsUtils").getReactionEmojisAndSum(m);
            if (
              t.length > 0 &&
              o("WAWebFrontendMsgGetters").getAsAlbumAsset(t[0].unsafe())
            ) {
              var _ = s._(/*BTDS*/ "Media album"),
                f = R(t),
                g = null;
              return (
                p.numberOfSenderReactions > 0 &&
                  (g = I(p.numberOfSenderReactions)),
                k({
                  authorName: c,
                  messageTypeString: _,
                  messageTextLocal: f,
                  replyMsgSummary: null,
                  time: null,
                  messageStatusText: null,
                  messageEditedText: null,
                  hasReactionText: g,
                })
              );
            }
          }
        })),
        E.apply(this, arguments)
      );
    }
    function k(e) {
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
    k.displayName = k.name + " [from " + i.id + "]";
    function I(e) {
      return e === 1
        ? s._(/*BTDS*/ "has reaction")
        : s._(/*BTDS*/ "has reactions");
    }
    function T(e) {
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
        p = b(n.quotedMsg, i),
        _ = v(n),
        f = o("WAWebClock").Clock.timestampStr(m),
        g = l && !r,
        h = null,
        y = null,
        C = null;
      if (g) {
        var R = o("WAWebStatusUtils").getMessageStatusLabel(t);
        y = R;
      }
      a === !0 && !r && (C = o("WAWebMessageMeta.react").getEditedLabel());
      var L = S(d, c, i, !!r);
      return (
        u && (h = I(u)),
        k({
          authorName: L,
          messageTypeString: _,
          messageTextLocal: s,
          replyMsgSummary: p,
          time: f,
          messageStatusText: y,
          messageEditedText: C,
          hasReactionText: h,
        })
      );
    }
    function D(e, t) {
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
    function x(e) {
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
    ((l.ETA_SUPPORTED_STATES = u),
      (l.getMediaCheckBoxAriaLabel = d),
      (l.getMediaAriaLabel = m),
      (l.getAriaLabelForMaybeName = _),
      (l.getStickerCustomLabel = f),
      (l.getMessageTextLabel = C),
      (l.getMessageTypeAriaLabel = v),
      (l.getAuthorName = S),
      (l.getLegacyAlbumRowAriaLabel = L),
      (l.getMessageAriaLabel = T),
      (l.createVirtualAnchor = D),
      (l.calculateReactionTrayPosition = x));
  },
  226,
);
