__d(
  "WAWebNewsletterStatusCardLayout",
  [
    "WAWebNewsletterStatusCardActionButtonLayout",
    "WAWebNewsletterStatusCardAdminProfileLayout",
    "WAWebNewsletterStatusCardAlbumLayout",
    "WAWebNewsletterStatusCardForwardedLayout",
    "WAWebNewsletterStatusCardParagraphs",
    "WAWebNewsletterStatusCardPollLayout",
    "WAWebNewsletterStatusCardRichText",
    "WAWebNewsletterStatusCardText",
    "WAWebNewsletterStatusCardTextLine",
    "WAWebNewsletterStatusCardTypography",
    "WAWebNewsletterStatusCardVoiceLayout",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = { width: 376, height: 667 },
      u = 8,
      c = 94,
      d = s.height - c * 2,
      m = 12,
      p = 36,
      _ = 10,
      f = 20,
      g = 16,
      h = 16,
      y = 4,
      C = 20,
      b = m * 2 + p,
      v = 12,
      S = (e = o("WAWebNewsletterStatusCardTypography")).CARD_WIDTH - v * 2,
      R = 4,
      L = S - R * 2,
      E = 1 / 3,
      k = 292 / 288,
      I = e.fromAndroidDp(120),
      T = 10,
      D = 6,
      x = 8,
      $ = S - T * 2,
      P = 20,
      N = P - e.CARD_TYPE.body.size * e.ROBOTO_LAST_LINE_HEIGHT,
      M = 2,
      w = 18,
      A = 16,
      F = 16,
      O = 2,
      B = 10,
      W = 4,
      q = L - B * 2,
      U = 288 / 180,
      V = 3,
      H = " ",
      G = e.fromAndroidDp(80),
      z = L - G - B * 2,
      j = { topLeft: u, topRight: u, bottomRight: u, bottomLeft: u },
      K = babelHelpers.extends({}, j, { bottomRight: 0, bottomLeft: 0 }),
      Q = babelHelpers.extends({}, j, { topLeft: 0, topRight: 0 }),
      X = babelHelpers.extends({}, j, { topLeft: 0, bottomLeft: 0 }),
      Y = 26,
      J = 6,
      Z = 11,
      ee = 8,
      te = 3,
      ne = 4,
      re = e.fromAndroidDp(2),
      oe = 125,
      ae = 8,
      ie = L,
      le = e.CARD_TYPE.singleEmoji.size * e.ROBOTO_PADDED_LINE_HEIGHT,
      se = 4,
      ue = R * 2 + le + se;
    function ce(e, t) {
      var n = Re(e),
        r = _e(e, n, t);
      if (r != null) return r;
      var a = o("WAWebNewsletterStatusCardRichText").trimCardRichText(e.text),
        i =
          a.length === 0
            ? []
            : o("WAWebNewsletterStatusCardRichText").wrapCardRichText(
                a,
                n.body,
                $,
                t,
                function (e, r) {
                  return o(
                    "WAWebNewsletterStatusCardParagraphs",
                  ).getCardParagraphIndent(e, r, He(n, t));
                },
              ),
        l = e.link != null ? Te(e.link, n, t) : null,
        u = e.media != null ? Le(e.media) : 0,
        c = o(
          "WAWebNewsletterStatusCardAdminProfileLayout",
        ).getCardAdminProfileHeight(e.adminProfile, !0),
        m =
          c +
          o("WAWebNewsletterStatusCardForwardedLayout").getCardForwardedHeight(
            e.forwarded,
          ),
        p =
          Ee({
            hasMedia: e.media != null,
            linkHeight: l == null ? void 0 : l.height,
            hasText: i.length > 0,
            hasReactions: e.reactions != null,
          }) +
          m +
          Oe(e.actionButtonLabel, i.length > 0),
        _ = ke(d - p, i.length, u),
        f = p + _.mediaHeight + _.visibleLineCount * P,
        g = {
          x:
            (s.width - o("WAWebNewsletterStatusCardTypography").CARD_WIDTH) / 2,
          y: Math.round((s.height - f) / 2),
          width: o("WAWebNewsletterStatusCardTypography").CARD_WIDTH,
          height: f,
        },
        h = {
          x: g.x,
          y: g.y + b,
          width: o("WAWebNewsletterStatusCardTypography").CARD_WIDTH,
          height: f - b,
        },
        y = Ae({
          bubbleX: h.x + v,
          bubbleY: h.y + v + m,
          content: e,
          fit: _,
          fonts: n,
          lines: i,
          link: l,
          measure: t,
        }),
        C = { x: h.x + v, y: h.y + v, width: S, height: y.bottom - (h.y + v) };
      return babelHelpers.extends({}, Ie(g, e, n, t), {
        card: g,
        body: h,
        bubble: C,
        media: y.media,
        album:
          e.album != null && y.media != null
            ? o("WAWebNewsletterStatusCardAlbumLayout").layoutCardAlbum({
                album: e.album,
                area: y.media,
                font: n.albumMore,
                measure: t,
              })
            : null,
        link: y.link,
        textLines: y.textLines,
        textMarks: y.textMarks,
        readMore: y.readMore,
        actionButton: y.actionButton,
        reactions: e.reactions != null ? je(e.reactions, C, n, t) : null,
        poll: null,
        sticker: null,
        videoNote: null,
        voice: null,
        emoji: null,
        forwarded: pe(e, n, C.x, C.y + c + R, t),
        adminProfile: de(e, n, C, !0, t),
        showsBubble: !0,
      });
    }
    function de(e, t, n, r, a) {
      var i = e.adminProfile;
      return i != null
        ? o(
            "WAWebNewsletterStatusCardAdminProfileLayout",
          ).layoutCardAdminProfile({
            adminProfile: i,
            bubble: n,
            fonts: t.adminProfile,
            measure: a,
            showsBubble: r,
          })
        : null;
    }
    function me(e) {
      var t = e.adminProfile,
        n = o(
          "WAWebNewsletterStatusCardAdminProfileLayout",
        ).getCardAdminProfileHeight(t, !1);
      return n > 0 ? n + R : 0;
    }
    function pe(e, t, n, r, a) {
      var i = e.forwarded;
      if (i == null) return null;
      var l = i.isMediaUpdate ? R : T;
      return o("WAWebNewsletterStatusCardForwardedLayout").layoutCardForwarded({
        fonts: t.forwarded,
        forwarded: i,
        left: n + l,
        measure: a,
        top: r,
        width: S - l * 2,
      });
    }
    function _e(e, t, n) {
      var r = e.emoji,
        o = e.poll,
        a = e.sticker,
        i = e.videoNote,
        l = e.voice;
      return i != null
        ? ye(e, t, n)
        : l != null
          ? Ce(e, l, t, n)
          : a != null
            ? ge(e, a, t, n)
            : r != null
              ? he(e, r, t, n)
              : o != null
                ? be(e, o, t, n)
                : null;
    }
    function fe(e) {
      var t,
        n,
        r,
        a,
        i,
        l,
        s,
        u = e.link,
        c = e.poll,
        d = e.reactions;
      return [
        e.channelName,
        e.followersText,
        e.readMoreText,
        (t = e.forwarded) == null ? void 0 : t.label,
        (n = e.forwarded) == null ? void 0 : n.channelName,
        (r = e.adminProfile) == null ? void 0 : r.name,
        (a = e.adminProfile) == null ? void 0 : a.initials,
        e.actionButtonLabel,
        (i = e.album) == null ? void 0 : i.moreText,
        d == null ? void 0 : d.countText,
      ].concat(
        (l = d == null ? void 0 : d.emojis) != null ? l : [],
        [
          c != null
            ? o("WAWebNewsletterStatusCardRichText").getCardRichTextString(
                c.title,
              )
            : null,
        ],
        ((s = c == null ? void 0 : c.options) != null ? s : []).flatMap(
          function (e) {
            return [
              o("WAWebNewsletterStatusCardRichText").getCardRichTextString(
                e.title,
              ),
              e.countText,
            ];
          },
        ),
        [
          u == null ? void 0 : u.title,
          u == null ? void 0 : u.description,
          u == null ? void 0 : u.domain,
          o("WAWebNewsletterStatusCardRichText").getCardRichTextString(e.text),
        ],
      );
    }
    function ge(e, t, n, r) {
      var a = me(e),
        i =
          a +
          o("WAWebNewsletterStatusCardForwardedLayout").getCardForwardedHeight(
            e.forwarded,
          ),
        l = b + v + i + oe + ae + ve(e) + v,
        s = Se(l),
        u = s.body,
        c = s.card,
        d = { x: u.x + v, y: u.y + v, width: S, height: i + oe + ae },
        m = Math.min(oe / Math.max(t.width, 1), oe / Math.max(t.height, 1)),
        p = t.width * m,
        _ = t.height * m;
      return babelHelpers.extends({}, Ie(c, e, n, r), {
        card: c,
        body: u,
        bubble: d,
        media: null,
        album: null,
        link: null,
        textLines: [],
        readMore: null,
        reactions: e.reactions != null ? je(e.reactions, d, n, r) : null,
        poll: null,
        sticker: {
          x: u.x + (u.width - p) / 2,
          y: d.y + i + (oe - _) / 2,
          width: p,
          height: _,
        },
        videoNote: null,
        voice: null,
        emoji: null,
        forwarded: pe(e, n, d.x, d.y + a, r),
        adminProfile: de(e, n, d, !1, r),
        showsBubble: !1,
      });
    }
    function he(e, t, n, r) {
      var a = o(
          "WAWebNewsletterStatusCardAdminProfileLayout",
        ).getCardAdminProfileHeight(e.adminProfile, !1),
        i = b + v + a + ue + ve(e) + v,
        l = Se(i),
        s = l.body,
        u = l.card,
        c = { x: s.x + v, y: s.y + v, width: S, height: a + ue },
        d = r(t, n.emoji);
      return babelHelpers.extends({}, Ie(u, e, n, r), {
        card: u,
        body: s,
        bubble: c,
        media: null,
        album: null,
        link: null,
        textLines: [],
        readMore: null,
        reactions: e.reactions != null ? je(e.reactions, c, n, r) : null,
        poll: null,
        sticker: null,
        videoNote: null,
        voice: null,
        emoji: Ke(t, c.x + (c.width - d) / 2, c.y + a + R + le / 2, n.emoji),
        adminProfile: de(e, n, c, !1, r),
        showsBubble: !1,
      });
    }
    function ye(e, t, n) {
      var r = me(e),
        a =
          r +
          o("WAWebNewsletterStatusCardForwardedLayout").getCardForwardedHeight(
            e.forwarded,
          ),
        i = b + v + a + ie + ae + ve(e) + v,
        l = Se(i),
        s = l.body,
        u = l.card,
        c = { x: s.x + v, y: s.y + v, width: S, height: a + ie + ae };
      return babelHelpers.extends({}, Ie(u, e, t, n), {
        card: u,
        body: s,
        bubble: c,
        media: null,
        album: null,
        link: null,
        textLines: [],
        readMore: null,
        reactions: e.reactions != null ? je(e.reactions, c, t, n) : null,
        poll: null,
        sticker: null,
        videoNote: {
          x: s.x + (s.width - ie) / 2,
          y: c.y + a,
          width: ie,
          height: ie,
        },
        voice: null,
        emoji: null,
        forwarded: pe(e, t, c.x, c.y + r, n),
        adminProfile: de(e, t, c, !1, n),
        showsBubble: !1,
      });
    }
    function Ce(e, t, n, r) {
      var a = o(
          "WAWebNewsletterStatusCardAdminProfileLayout",
        ).getCardAdminProfileHeight(e.adminProfile, !0),
        i =
          a +
          o("WAWebNewsletterStatusCardForwardedLayout").getCardForwardedHeight(
            e.forwarded,
          ),
        l =
          o("WAWebNewsletterStatusCardVoiceLayout").CARD_VOICE_ROW_HEIGHT +
          R * 2,
        s = b + v + i + l + ve(e) + v,
        u = Se(s),
        c = u.body,
        d = u.card,
        m = { x: c.x + v, y: c.y + v, width: S, height: i + l };
      return babelHelpers.extends({}, Ie(d, e, n, r), {
        card: d,
        body: c,
        bubble: m,
        media: null,
        album: null,
        link: null,
        textLines: [],
        readMore: null,
        reactions: e.reactions != null ? je(e.reactions, m, n, r) : null,
        poll: null,
        sticker: null,
        videoNote: null,
        voice: o("WAWebNewsletterStatusCardVoiceLayout").layoutCardVoice({
          bubble: {
            x: m.x + R,
            y: m.y + i + R,
            width: m.width - R * 2,
            height: o("WAWebNewsletterStatusCardVoiceLayout")
              .CARD_VOICE_ROW_HEIGHT,
          },
          font: n.voiceDuration,
          measure: r,
          voice: t,
        }),
        emoji: null,
        forwarded: pe(e, n, m.x, m.y + a + R, r),
        adminProfile: de(e, n, m, !0, r),
        showsBubble: !0,
      });
    }
    function be(e, t, n, r) {
      var a = o(
          "WAWebNewsletterStatusCardAdminProfileLayout",
        ).getCardAdminProfileHeight(e.adminProfile, !0),
        i =
          a +
          o("WAWebNewsletterStatusCardForwardedLayout").getCardForwardedHeight(
            e.forwarded,
          ),
        l = b + v * 2 + i + ve(e),
        u = {
          fontFamily: e.fontFamily,
          fontWeights: e.fontWeights,
          monospaceFontFamily: e.monospaceFontFamily,
          maxHeight: d - l,
          measure: r,
          poll: t,
          width: S,
          x:
            (s.width - o("WAWebNewsletterStatusCardTypography").CARD_WIDTH) /
              2 +
            v,
        },
        c = o("WAWebNewsletterStatusCardPollLayout").layoutCardPoll(
          babelHelpers.extends({}, u, { y: 0 }),
        ).height,
        m = Se(l + c),
        p = m.body,
        _ = m.card,
        f = { x: p.x + v, y: p.y + v, width: S, height: i + c };
      return babelHelpers.extends({}, Ie(_, e, n, r), {
        card: _,
        body: p,
        bubble: f,
        media: null,
        album: null,
        link: null,
        textLines: [],
        readMore: null,
        reactions: e.reactions != null ? je(e.reactions, f, n, r) : null,
        poll: o("WAWebNewsletterStatusCardPollLayout").layoutCardPoll(
          babelHelpers.extends({}, u, { y: f.y + i }),
        ).layout,
        sticker: null,
        videoNote: null,
        voice: null,
        emoji: null,
        forwarded: pe(e, n, f.x, f.y + a + R, r),
        adminProfile: de(e, n, f, !0, r),
        showsBubble: !0,
      });
    }
    function ve(e) {
      return e.reactions != null ? Y - J : 0;
    }
    function Se(e) {
      var t = {
        x: (s.width - o("WAWebNewsletterStatusCardTypography").CARD_WIDTH) / 2,
        y: Math.round((s.height - e) / 2),
        width: o("WAWebNewsletterStatusCardTypography").CARD_WIDTH,
        height: e,
      };
      return {
        card: t,
        body: {
          x: t.x,
          y: t.y + b,
          width: o("WAWebNewsletterStatusCardTypography").CARD_WIDTH,
          height: e - b,
        },
      };
    }
    function Re(e) {
      var t,
        n = e.fontFamily,
        r = e.fontWeights,
        a = e.monospaceFontFamily,
        i = r.medium,
        l = r.regular;
      return {
        name: (t = o("WAWebNewsletterStatusCardTypography")).getCardFont(
          i,
          t.CARD_TYPE.channelName,
          n,
        ),
        followers: t.getCardFont(l, t.CARD_TYPE.followers, n),
        body: function (t) {
          return o("WAWebNewsletterStatusCardTypography").getStyledCardFont({
            boldWeight: r.bold,
            fontFamily: n,
            monospaceFontFamily: a,
            style: t,
            type: o("WAWebNewsletterStatusCardTypography").CARD_TYPE.body,
            weight: l,
          });
        },
        readMore: t.getCardFont(i, t.CARD_TYPE.body, n),
        linkTitle: t.getCardFont(l, t.CARD_TYPE.linkTitle, n),
        linkDescription: t.getCardFont(l, t.CARD_TYPE.linkDescription, n),
        linkDomain: t.getCardFont(l, t.CARD_TYPE.linkDomain, n),
        reactionEmoji: t.getCardFont(l, t.CARD_TYPE.reactionEmoji, n),
        reactionCount: t.getCardFont(l, t.CARD_TYPE.reactionCount, n),
        albumMore: t.getCardFont(r.bold, t.CARD_TYPE.albumMore, n),
        voiceDuration: t.getCardFont(l, t.CARD_TYPE.voiceDuration, n),
        emoji: t.getCardFont(l, t.CARD_TYPE.singleEmoji, n),
        forwarded: {
          label: "italic " + t.getCardFont(l, t.CARD_TYPE.forwarded, n),
          channelName: t.getCardFont(i, t.CARD_TYPE.forwarded, n),
        },
        adminProfile: {
          name: t.getCardFont(i, t.CARD_TYPE.adminProfile, n),
          initials: t.getCardFont(i, t.CARD_TYPE.adminProfile, n),
        },
        actionButton: t.getCardFont(i, t.CARD_TYPE.actionButton, n),
      };
    }
    function Le(e) {
      var t = e.width > 0 ? e.height / e.width : 1,
        n = Math.min(k, Math.max(E, t));
      return Math.round(L * n);
    }
    function Ee(e) {
      var t = e.hasMedia,
        n = e.hasReactions,
        r = e.hasText,
        o = e.linkHeight,
        a = t ? R : 0,
        i = o != null ? R + o : 0,
        l = r ? D + x : R,
        s = n ? Y - J + v : v;
      return b + v + a + i + l + s;
    }
    function ke(e, t, n) {
      var r = Math.min(t, M),
        o = Math.floor((e - n) / P);
      return o >= r
        ? { mediaHeight: n, visibleLineCount: Math.min(t, o) }
        : {
            mediaHeight: Math.min(n, Math.max(I, e - r * P)),
            visibleLineCount: r,
          };
    }
    function Ie(e, t, n, r) {
      var a = { x: e.x + m, y: e.y + m, width: p, height: p },
        i = {
          x: e.x + e.width - m - C,
          y: a.y + (p - C) / 2,
          width: C,
          height: C,
        },
        l = a.x + p + _,
        s = i.x - _ - l,
        u = t.isVerified ? y + h : 0,
        c = o("WAWebNewsletterStatusCardTypography").CARD_TYPE.channelName
          .letterSpacing,
        d = o("WAWebNewsletterStatusCardTypography").CARD_TYPE.followers
          .letterSpacing,
        b = o("WAWebNewsletterStatusCardTypography").withLetterSpacing(r, c),
        v = o("WAWebNewsletterStatusCardText").truncateToWidth(
          t.channelName,
          n.name,
          s - u,
          b,
        ),
        S = t.followersText != null ? a.y + f / 2 : a.y + p / 2;
      return {
        avatar: a,
        channelsIcon: i,
        channelName: Ke(v, l, S, n.name, c),
        verifiedBadge: t.isVerified
          ? { x: l + b(v, n.name) + y, y: S - h / 2, width: h, height: h }
          : null,
        followers:
          t.followersText != null
            ? Ke(
                o("WAWebNewsletterStatusCardText").truncateToWidth(
                  t.followersText,
                  n.followers,
                  s,
                  o("WAWebNewsletterStatusCardTypography").withLetterSpacing(
                    r,
                    d,
                  ),
                ),
                l,
                a.y + f + g / 2,
                n.followers,
                d,
              )
            : null,
      };
    }
    function Te(e, t, n) {
      return e.isStickerPack ? De(e, t, n) : xe(e, t, n);
    }
    function De(e, t, n) {
      var r = Me(
          e.title,
          t.linkTitle,
          o("WAWebNewsletterStatusCardTypography").CARD_TYPE.linkTitle,
          z,
          n,
        ),
        a = Me(
          e.description,
          t.linkDescription,
          o("WAWebNewsletterStatusCardTypography").CARD_TYPE.linkDescription,
          z,
          n,
        );
      return {
        height: Math.max(G, Ne(r.length, a.length) + B * 2),
        isStickerPack: !0,
        hasThumbnail: e.thumbnail != null,
        thumbnailHeight: G,
        titleLines: r,
        descriptionLines: a,
        domain: "",
      };
    }
    function xe(e, t, n) {
      var r = e.thumbnail,
        a = r != null ? $e(r) : 0,
        i = Me(
          e.title,
          t.linkTitle,
          o("WAWebNewsletterStatusCardTypography").CARD_TYPE.linkTitle,
          q,
          n,
        ),
        l = Me(
          e.description,
          t.linkDescription,
          o("WAWebNewsletterStatusCardTypography").CARD_TYPE.linkDescription,
          q,
          n,
        );
      return {
        height: a + Pe(i.length, l.length),
        isStickerPack: !1,
        hasThumbnail: r != null,
        thumbnailHeight: a,
        titleLines: i,
        descriptionLines: l,
        domain: o("WAWebNewsletterStatusCardText").truncateToWidth(
          e.domain,
          t.linkDomain,
          q,
          o("WAWebNewsletterStatusCardTypography").withLetterSpacing(
            n,
            o("WAWebNewsletterStatusCardTypography").CARD_TYPE.linkDomain
              .letterSpacing,
          ),
        ),
      };
    }
    function $e(e) {
      var t = e.height > 0 ? e.width / e.height : U,
        n = Math.min(V, Math.max(U, t));
      return Math.round(L / n);
    }
    function Pe(e, t) {
      return B * 2 + Ne(e, t) + W + F;
    }
    function Ne(e, t) {
      var n = t > 0 ? W + t * A : 0;
      return e * w + n;
    }
    function Me(e, t, n, r, a) {
      if (e.trim() === "") return [];
      var i = o("WAWebNewsletterStatusCardTypography").withLetterSpacing(
          a,
          n.letterSpacing,
        ),
        l = e.split("\n").map(function (e) {
          return e.split(H).filter(Boolean).join(H);
        }),
        s = l.flatMap(function (e, n) {
          return we(
            e,
            n,
            o("WAWebNewsletterStatusCardText").wrapCardText(e, t, r, i),
          );
        });
      if (s.length <= O)
        return s.map(function (e) {
          return e.text;
        });
      var u = s[O - 1],
        c = s[O],
        d =
          c.paragraph === u.paragraph && u.start >= 0 && c.start >= 0
            ? l[u.paragraph].slice(u.start, c.start + c.text.length)
            : u.text;
      return [].concat(
        s.slice(0, O - 1).map(function (e) {
          return e.text;
        }),
        [
          o("WAWebNewsletterStatusCardText").shortenWithSuffix(
            d,
            t,
            r,
            i,
            o("WAWebNewsletterStatusCardText").ELLIPSIS,
          ),
        ],
      );
    }
    function we(e, t, n) {
      var r = 0;
      return n.map(function (n) {
        var o,
          a =
            r < 0
              ? -1
              : (o = [r, r + H.length].find(function (t) {
                    return e.startsWith(n, t);
                  })) != null
                ? o
                : -1;
        return (
          (r = a < 0 ? -1 : a + n.length),
          { text: n, paragraph: t, start: a }
        );
      });
    }
    function Ae(e) {
      var t = e.bubbleX,
        n = e.bubbleY,
        r = e.content,
        o = e.fit,
        a = e.fonts,
        i = e.lines,
        l = e.link,
        s = e.measure,
        u = n,
        c = null;
      r.media != null &&
        ((u += R),
        (c = { x: t + R, y: u, width: L, height: o.mediaHeight }),
        (u += o.mediaHeight));
      var d = null;
      l != null && ((u += R), (d = Be(l, t + R, u, a)), (u += l.height));
      var m =
        i.length === 0
          ? { textLines: [], readMore: null, bottom: u + R }
          : Ge({
              fonts: a,
              lines: i,
              measure: s,
              readMoreText: r.readMoreText,
              top: u,
              visibleLineCount: o.visibleLineCount,
              x: t + T,
            });
      return babelHelpers.extends(
        {},
        m,
        { media: c, link: d },
        Fe({
          bubbleX: t,
          fonts: a,
          hasText: i.length > 0,
          label: r.actionButtonLabel,
          measure: s,
          textBottom: m.bottom,
        }),
      );
    }
    function Fe(e) {
      var t = e.bubbleX,
        n = e.fonts,
        r = e.hasText,
        a = e.label,
        i = e.measure,
        l = e.textBottom;
      return a == null
        ? { actionButton: null, bottom: l }
        : {
            actionButton: o(
              "WAWebNewsletterStatusCardActionButtonLayout",
            ).layoutCardActionButton({
              bodyLineHeight: P,
              font: n.actionButton,
              label: a,
              left: t + R,
              measure: i,
              top: l - R - (r ? N : 0),
              width: L,
            }),
            bottom: l + Oe(a, r),
          };
    }
    function Oe(e, t) {
      return e == null
        ? 0
        : o(
            "WAWebNewsletterStatusCardActionButtonLayout",
          ).getCardActionButtonHeight(e) - (t ? N : 0);
    }
    function Be(e, t, n, r) {
      return e.isStickerPack ? We(e, t, n, r) : qe(e, t, n, r);
    }
    function We(e, t, n, r) {
      var o = t + G,
        a = Ue(
          e,
          o + B,
          n +
            (e.height - Ne(e.titleLines.length, e.descriptionLines.length)) / 2,
          r,
        );
      return {
        box: { x: o, y: n, width: L - G, height: e.height },
        boxCorners: X,
        thumbnail: e.hasThumbnail
          ? { x: t, y: n + (e.height - G) / 2, width: G, height: G }
          : null,
        thumbnailCorners: K,
        titleLines: a.titleLines,
        descriptionLines: a.descriptionLines,
        domain: null,
      };
    }
    function qe(e, t, n, r) {
      var a = e.thumbnailHeight,
        i = t + B,
        l = Ue(e, i, n + a + B, r);
      return {
        box: { x: t, y: n, width: L, height: e.height },
        boxCorners: e.hasThumbnail ? j : Q,
        thumbnail: e.hasThumbnail ? { x: t, y: n, width: L, height: a } : null,
        thumbnailCorners: K,
        titleLines: l.titleLines,
        descriptionLines: l.descriptionLines,
        domain: Ke(
          e.domain,
          i,
          l.bottom + W + F / 2,
          r.linkDomain,
          o("WAWebNewsletterStatusCardTypography").CARD_TYPE.linkDomain
            .letterSpacing,
        ),
      };
    }
    function Ue(e, t, n, r) {
      var a = e.descriptionLines,
        i = e.titleLines,
        l = n + i.length * w,
        s = a.length > 0 ? l + W : l;
      return {
        titleLines: Ve(
          i,
          t,
          n,
          r.linkTitle,
          o("WAWebNewsletterStatusCardTypography").CARD_TYPE.linkTitle,
          w,
        ),
        descriptionLines: Ve(
          a,
          t,
          s,
          r.linkDescription,
          o("WAWebNewsletterStatusCardTypography").CARD_TYPE.linkDescription,
          A,
        ),
        bottom: s + a.length * A,
      };
    }
    function Ve(e, t, n, r, o, a) {
      return e.map(function (e, i) {
        return Ke(e, t, n + i * a + a / 2, r, o.letterSpacing);
      });
    }
    function He(e, t) {
      return function (n) {
        return t(
          n,
          e.body(o("WAWebNewsletterStatusCardRichText").PLAIN_TEXT_STYLE),
        );
      };
    }
    function Ge(e) {
      var t = e.fonts,
        n = e.lines,
        r = e.measure,
        a = e.readMoreText,
        i = e.top,
        l = e.visibleLineCount,
        s = e.x,
        u = l < n.length,
        c = n.slice(0, l),
        d = u ? r(a, t.readMore) : 0,
        m = function (n) {
          return o(
            "WAWebNewsletterStatusCardParagraphs",
          ).getCardParagraphIndent(
            n.paragraph,
            n.isParagraphStart !== !1,
            He(t, r),
          );
        };
      if (u && c.length > 0) {
        var p = c.length - 1;
        c[p] = babelHelpers.extends({}, c[p], {
          spans: o("WAWebNewsletterStatusCardRichText").shortenCardRichText(
            c[p],
            t.body,
            $ - m(c[p]) - d,
            o("WAWebNewsletterStatusCardText").measureInDirection(
              r,
              c[p].isRtl,
            ),
            o("WAWebNewsletterStatusCardText").ELLIPSIS + " ",
          ),
        });
      }
      var _ = i + D,
        f = function (t) {
          return _ + t * P + P / 2;
        },
        g = c.map(function (e, n) {
          var a,
            i = m(e),
            l = o("WAWebNewsletterStatusCardTextLine").positionCardRichTextLine(
              {
                fontFor: t.body,
                left: e.isRtl ? s : s + i,
                line: e,
                lineHeight: P,
                measure: r,
                width: $ - i,
                y: f(n),
              },
            ),
            u = l.endX,
            c = l.runs;
          return {
            endX: u,
            runs:
              ((a = e.paragraph) == null ? void 0 : a.kind) === "quote"
                ? c.map(function (e) {
                    return babelHelpers.extends({}, e, { isQuoted: !0 });
                  })
                : c,
          };
        }),
        h = c.length - 1;
      return {
        textLines: g.flatMap(function (e) {
          var t = e.runs;
          return t;
        }),
        textMarks: o("WAWebNewsletterStatusCardParagraphs").layoutCardTextMarks(
          { left: s, lineHeight: P, lineY: f, lines: c, width: $ },
        ),
        readMore:
          u && h >= 0
            ? ze({
                endX: g[h].endX,
                isRtl: c[h].isRtl,
                readMoreFont: t.readMore,
                readMoreText: a,
                readMoreWidth: d,
                y: f(h),
              })
            : null,
        bottom: _ + c.length * P + x,
      };
    }
    function ze(e) {
      var t = e.endX,
        n = e.isRtl,
        r = e.readMoreFont,
        o = e.readMoreText,
        a = e.readMoreWidth,
        i = e.y,
        l = n ? t - a : t;
      return {
        run: {
          text: o,
          x: t,
          y: i,
          font: r,
          align: n ? "right" : "left",
          isRtl: n,
        },
        tapArea: {
          x: l - ne,
          y: i - P / 2 - ne,
          width: a + ne * 2,
          height: P + ne * 2,
        },
      };
    }
    function je(e, t, n, r) {
      var o = t.x + Z,
        a = t.y + t.height - J,
        i = a + Y / 2,
        l = o + ee,
        s = e.emojis.map(function (e) {
          l += re;
          var t = Ke(e, l, i, n.reactionEmoji);
          return ((l += r(e, n.reactionEmoji) + re), t);
        }),
        u = e.countText,
        c = null;
      return (
        u != null &&
          ((l += te),
          (c = Ke(u, l, i, n.reactionCount)),
          (l += r(u, n.reactionCount))),
        {
          pill: { x: o, y: a, width: l + ee - o, height: Y },
          emojis: s,
          count: c,
        }
      );
    }
    function Ke(e, t, n, r, a) {
      a === void 0 && (a = 0);
      var i = {
          text: e,
          x: t,
          y: n,
          font: r,
          align: "left",
          isRtl: o("WAWebNewsletterStatusCardText").isRtlText(e),
        },
        l = o("WAWebNewsletterStatusCardTypography").getDrawnLetterSpacing(a);
      return l === 0 ? i : babelHelpers.extends({}, i, { letterSpacing: l });
    }
    ((l.CARD_CANVAS = s),
      (l.CARD_MEDIA_RADIUS = u),
      (l.layoutNewsletterStatusCard = ce),
      (l.getCardContentTexts = fe));
  },
  98,
);
