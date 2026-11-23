__d(
  "WAWebNewsletterStatusCardRenderer",
  [
    "fbt",
    "WALogger",
    "WAPromiseTimeout",
    "WAWebABProps",
    "WAWebCanvasUtils",
    "WAWebCommonNewsletterStrings",
    "WAWebContactCollection",
    "WAWebEmoji",
    "WAWebForwardUtils",
    "WAWebFrontendMsgGetters",
    "WAWebGetNewsletterContextForForwardedMsg",
    "WAWebGetUserMediaErrors",
    "WAWebL10N",
    "WAWebL10NNumbersPluginRegistry",
    "WAWebMediaLoad",
    "WAWebMiscGatingUtils",
    "WAWebMsgGetters",
    "WAWebMsgMentionMap",
    "WAWebMsgType",
    "WAWebNewsletterMetadataCollection",
    "WAWebNewsletterPollVotesModelCollection",
    "WAWebNewsletterPollsUtils",
    "WAWebNewsletterReactionCollection",
    "WAWebNewsletterReactionFrontendUtils",
    "WAWebNewsletterStatusCardAdminProfile",
    "WAWebNewsletterStatusCardAlbum",
    "WAWebNewsletterStatusCardCount",
    "WAWebNewsletterStatusCardDoodle",
    "WAWebNewsletterStatusCardEmoji",
    "WAWebNewsletterStatusCardFontWeights",
    "WAWebNewsletterStatusCardLayout",
    "WAWebNewsletterStatusCardLinkPreview",
    "WAWebNewsletterStatusCardMedia",
    "WAWebNewsletterStatusCardMirror",
    "WAWebNewsletterStatusCardPainter",
    "WAWebNewsletterStatusCardPalette",
    "WAWebNewsletterStatusCardRichText",
    "WAWebNewsletterStatusCardTapAreas",
    "WAWebNewsletterStatusCardText",
    "WAWebNewsletterStatusCardVoice",
    "WAWebPollCreationUtils",
    "WAWebPollResultSnapshotUtils",
    "WAWebProfilePicThumbCollection",
    "WAWebProfilePicThumbGetters",
    "WAWebReactionsUtils",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d,
      m = "#0085F4",
      p = "#1DAA61",
      _ = 200,
      f = 2e3,
      g = 1e4,
      h = "sans-serif",
      y = "--font-family-monospace",
      C = "monospace",
      b = 2,
      v = { width: 1, height: 1 };
    async function S(e, t, n) {
      var a, i, l, u, c, d;
      n === void 0 && (n = null);
      var m = o(
          "WAWebGetNewsletterContextForForwardedMsg",
        ).getNewsletterContextForNewsletterMsg(e),
        p = m == null ? void 0 : m.newsletterId;
      if (m == null || p == null)
        throw r("err")(
          "renderNewsletterStatusCard: the message is not a channel update",
        );
      var _ = r("WAWebNewsletterMetadataCollection").get(p),
        f =
          (a = U(m.newsletterName)) != null
            ? a
            : U(_ == null ? void 0 : _.name);
      if (f == null)
        throw r("err")(
          "renderNewsletterStatusCard: the channel has no name to show yet",
        );
      var g = L(),
        h = (i = (l = n) == null ? void 0 : l.media) != null ? i : [],
        y = o(
          "WAWebNewsletterStatusCardAdminProfile",
        ).getNewsletterStatusCardAdminProfile(e),
        C = await Promise.all([
          t != null
            ? o("WAWebNewsletterStatusCardMedia").loadCardPhoto(t)
            : null,
          o("WAWebNewsletterStatusCardAlbum").loadCardAlbumTiles(
            (u = (c = n) == null ? void 0 : c.tileBlobs) != null ? u : [],
          ),
          X(q(p)),
          Q(e),
          o("WAWebNewsletterStatusCardDoodle").loadNewsletterStatusCardDoodle(
            g,
          ),
          V([e].concat(h)),
          x(e),
          X(y == null ? void 0 : y.pictureUrl),
        ]),
        b = C[0],
        v = C[1],
        S = C[2],
        R = C[3],
        $ = C[4],
        P = C[5],
        M = C[6],
        H = C[7],
        G = F(
          (d = o("WAWebNewsletterStatusCardAlbum").getCardAlbumCaptionMsg(h)) !=
            null
            ? d
            : e,
        ),
        z = w(e),
        j = o(
          "WAWebNewsletterStatusCardRichText",
        ).getCardRichTextAccessibleString(G, T()),
        Y = _ == null ? void 0 : _.size,
        Z = babelHelpers.extends(
          {
            channelName: f,
            followersText: Y != null ? B(Y) : null,
            isVerified: (_ == null ? void 0 : _.verified) === !0,
            text: G,
            readMoreText: String(s._(/*BTDS*/ "")),
            fontFamily: O(),
            monospaceFontFamily: W(),
          },
          k(e, b, h),
          {
            link: o("WAWebNewsletterStatusCardLinkPreview").getCardLinkPreview(
              e,
              R,
            ),
            reactions: P,
            poll: M,
            voice: o("WAWebNewsletterStatusCardVoice").getCardVoiceContent(e),
            emoji: z,
            forwarded: N(e, z),
            adminProfile: y == null ? void 0 : y.content,
            actionButtonLabel: A(e),
          },
        ),
        ee = babelHelpers.extends({}, Z, {
          fontWeights: o(
            "WAWebNewsletterStatusCardFontWeights",
          ).getNewsletterStatusCardFontWeights(Z),
        }),
        te = {
          adminProfilePicture: H,
          albumTiles: v,
          avatar: S,
          doodle: $,
          linkThumbnail: R,
          media: b,
          emojis: await K(
            o("WAWebNewsletterStatusCardLayout").getCardContentTexts(Z),
            Z.emoji,
          ),
        },
        ne = await E(ee, g, te, J(e, te)),
        re = ne.blob,
        oe = ne.canvas,
        ae = ne.layout;
      return {
        blob: re,
        interactiveAnnotations: r("WAWebNewsletterStatusCardTapAreas")(ae, {
          newsletterWid: p,
          serverMessageId: m.serverMessageId,
          newsletterName: ee.channelName,
          accessibilityText: D(I(e, j, ee)),
        }),
        video: o("WAWebNewsletterStatusCardMedia").getCardVideoScene({
          canvas: oe,
          layout: ae,
          msg: e,
          scale: g,
        }),
        voice: o("WAWebNewsletterStatusCardVoice").getCardVoiceScene({
          canvas: oe,
          layout: ae,
          scale: g,
        }),
      };
    }
    function R(e) {
      var t = [],
        n = 0;
      for (var r of o("WAWebNewsletterStatusCardText").splitCardCharacters(e)) {
        if (((n += Array.from(r).length), n > _)) break;
        t.push(r);
      }
      return t.join("");
    }
    function L() {
      var e = o("WAWebABProps").getABPropConfigValue(
        "rasterize_text_status_pixel_width",
      );
      if (!Number.isFinite(e) || e <= 0)
        throw r("err")(
          "renderNewsletterStatusCard: rasterize_text_status_pixel_width is not a positive width",
        );
      return e / o("WAWebNewsletterStatusCardLayout").CARD_CANVAS.width;
    }
    async function E(e, t, n, a) {
      var i = o("WAWebCanvasUtils").createCanvas(
          Math.round(
            o("WAWebNewsletterStatusCardLayout").CARD_CANVAS.width * t,
          ),
          Math.round(
            o("WAWebNewsletterStatusCardLayout").CARD_CANVAS.height * t,
          ),
        ),
        l = i.getContext("2d");
      if (l == null)
        throw r("err")("renderNewsletterStatusCard: no 2D canvas context");
      l.scale(t, t);
      var s = o("WAWebNewsletterStatusCardLayout").layoutNewsletterStatusCard(
          e,
          o("WAWebNewsletterStatusCardEmoji").measureWithCardEmoji(function (
            e,
            t,
          ) {
            return ((l.font = t), l.measureText(e).width);
          }, n.emojis),
        ),
        u = r("WAWebL10N").isRTL()
          ? o(
              "WAWebNewsletterStatusCardMirror",
            ).mirrorNewsletterStatusCardLayout(s)
          : s;
      return (
        r("WAWebNewsletterStatusCardPainter")(l, u, n, {
          background: o("WAWebNewsletterStatusCardPalette").getCardBackground(
            Z(a),
          ),
          verifiedBadgeColor: o("WAWebMiscGatingUtils").isBlueEnabled() ? m : p,
        }),
        {
          blob: await o("WAWebCanvasUtils").canvasToBlob(i, "image/jpeg"),
          canvas: i,
          layout: u,
        }
      );
    }
    function k(e, t, n) {
      if (n.length > 0)
        return {
          media: v,
          album: o("WAWebNewsletterStatusCardAlbum").getCardAlbumContent(n),
          sticker: null,
          videoNote: null,
        };
      var r = t != null ? { width: t.width, height: t.height } : null;
      return e.type === o("WAWebMsgType").MSG_TYPE.STICKER
        ? { media: null, album: null, sticker: r, videoNote: null }
        : e.type === o("WAWebMsgType").MSG_TYPE.PTV
          ? { media: null, album: null, sticker: null, videoNote: r }
          : { media: r, album: null, sticker: null, videoNote: null };
    }
    function I(e, t, n) {
      var r,
        a = n.link,
        i = n.poll;
      return t !== ""
        ? t
        : i != null
          ? o(
              "WAWebNewsletterStatusCardRichText",
            ).getCardRichTextAccessibleString(i.title, T())
          : e.type === o("WAWebMsgType").MSG_TYPE.STICKER_PACK &&
              (r = a == null ? void 0 : a.title) != null
            ? r
            : "";
    }
    function T() {
      return String(s._(/*BTDS*/ ""));
    }
    function D(e) {
      return e != null && e !== "" ? R(e) : null;
    }
    async function x(e) {
      var t;
      if (e.type === o("WAWebMsgType").MSG_TYPE.POLL_RESULT_SNAPSHOT) {
        var n,
          r,
          a =
            (n = (r = e.pollVotesSnapshot) == null ? void 0 : r.pollVotes) !=
            null
              ? n
              : [];
        return $({
          msg: e,
          options: a.map(function (e) {
            var t = e.option;
            return t;
          }),
          results: o("WAWebPollResultSnapshotUtils").aggegateVoteSnapshot(a),
          areVotesKnown: !0,
        });
      }
      if (e.type !== o("WAWebMsgType").MSG_TYPE.POLL_CREATION) return null;
      var i = (t = e.pollOptions) != null ? t : [],
        l = await z(e),
        s = l.areVotesKnown,
        u = l.votes;
      return $({
        msg: e,
        options: i,
        results: o("WAWebNewsletterPollsUtils").aggregateNewsletterVotes(
          u,
          i,
          o("WAWebContactCollection").ContactCollection.getMeContact(),
        ),
        areVotesKnown: s,
      });
    }
    function $(e) {
      var t = e.areVotesKnown,
        n = e.msg,
        r = e.options,
        a = e.results;
      return {
        title: P(n, n.pollName, !1),
        options: r.map(function (e) {
          var t,
            r,
            i = a.get(e);
          return {
            title: P(n, e.name, !1),
            countText: o(
              "WAWebNewsletterStatusCardCount",
            ).formatNewsletterStatusCardCount(
              (t = i == null ? void 0 : i.count) != null ? t : 0,
            ),
            voteRatio:
              (r = i == null ? void 0 : i.percentageOfMostVotedForOption) !=
              null
                ? r
                : 0,
          };
        }),
        showsResults:
          n.pollType !== o("WAWebPollCreationUtils").PollType.QUIZ && t,
        getMoreOptionsText: function (t) {
          return String(s._(/*BTDS*/ "", [s._plural(t, "count")]));
        },
      };
    }
    function P(e, t, n) {
      var r = o("WAWebMsgMentionMap").calculateKnownMsgMentions(
          e,
          t != null ? t : "",
        ),
        a = r.mentions,
        i = r.text;
      return o("WAWebNewsletterStatusCardRichText").trimCardRichText(
        o("WAWebNewsletterStatusCardRichText").parseCardRichText(i, {
          groupMentions: o("WAWebMsgMentionMap").calculateMsgGroupMentionMap(e),
          hasSpoiler: o("WAWebMsgGetters").getIsSpoiler(e),
          mentions: a,
          withParagraphs: n,
        }),
      );
    }
    function N(e, t) {
      var n;
      if (t != null || !o("WAWebFrontendMsgGetters").getShouldShowForwarded(e))
        return null;
      var r = o("WAWebMsgGetters").getIsFrequentlyForwarded(e),
        a =
          (n = e.forwardedNewsletterMessageInfo) == null
            ? void 0
            : n.newsletterName;
      return {
        label: String(o("WAWebForwardUtils").getForwardedIndicatorText(r)),
        isFrequentlyForwarded: r,
        isMediaUpdate: M(e),
        channelName: a != null && a !== "" ? a : null,
      };
    }
    function M(e) {
      return (
        e.type === o("WAWebMsgType").MSG_TYPE.IMAGE ||
        e.type === o("WAWebMsgType").MSG_TYPE.VIDEO ||
        e.type === o("WAWebMsgType").MSG_TYPE.PTV ||
        e.type === o("WAWebMsgType").MSG_TYPE.PTT ||
        e.type === o("WAWebMsgType").MSG_TYPE.STICKER ||
        e.type === o("WAWebMsgType").MSG_TYPE.STICKER_PACK
      );
    }
    function w(e) {
      var t,
        n = e.type === o("WAWebMsgType").MSG_TYPE.CHAT ? e.body : null;
      return n == null ||
        o("WAWebMsgGetters").getIsQuestion(e) ||
        o("WAWebMsgGetters").getIsQuestionReply(e)
        ? null
        : ((t = o("WAWebEmoji").EmojiUtil.matchLargeEmojiPattern(n)) == null
              ? void 0
              : t.length) === 1
          ? n
          : null;
    }
    function A(e) {
      return o("WAWebMsgGetters").getIsQuestion(e)
        ? String(s._(/*BTDS*/ ""))
        : null;
    }
    function F(e) {
      return o("WAWebNewsletterStatusCardRichText").markCardRichTextLinks(
        P(
          e,
          e.type === o("WAWebMsgType").MSG_TYPE.CHAT ? e.body : e.caption,
          !0,
        ),
      );
    }
    function O() {
      var e = document.body,
        t = e != null ? window.getComputedStyle(e).fontFamily : "";
      return t !== "" ? t : h;
    }
    function B(e) {
      if (
        !o("WAWebNewsletterStatusCardCount").isNewsletterStatusCardInEnglish()
      )
        return String(
          o("WAWebCommonNewsletterStrings").getNewsletterFollowersText(e),
        );
      var t = o("WAWebNewsletterStatusCardCount").roundNewsletterFollowerCount(
          e,
        ),
        n = o("WAWebNewsletterStatusCardCount").formatNewsletterStatusCardCount(
          t,
        );
      return String(
        e >= o("WAWebL10NNumbersPluginRegistry").M
          ? s._(/*BTDS*/ "", [s._plural(t, "number", n)])
          : s._(/*BTDS*/ "", [s._plural(t, "number", n)]),
      );
    }
    function W() {
      var e = document.body,
        t =
          e != null
            ? window.getComputedStyle(e).getPropertyValue(y).trim()
            : "";
      return t !== "" ? t : C;
    }
    function q(e) {
      var t,
        n = o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection.get(
          e,
        );
      return (t = o("WAWebProfilePicThumbGetters").getMaybeImg(n)) != null
        ? t
        : o("WAWebProfilePicThumbGetters").getMaybeImgFull(n);
    }
    function U(e) {
      return e != null && e !== "" ? e : null;
    }
    async function V(e) {
      var t = await Promise.all(e.map(H));
      return G(
        t.flatMap(function (e) {
          return e != null ? [e] : [];
        }),
      );
    }
    async function H(t) {
      var n = t.id.toString();
      try {
        var a;
        return (a = o(
          "WAWebNewsletterReactionCollection",
        ).NewsletterMessageReactionsCollection.get(n)) != null
          ? a
          : await o(
              "WAWebNewsletterReactionCollection",
            ).NewsletterMessageReactionsCollection.find(n);
      } catch (t) {
        return (
          t instanceof o("WAWebGetUserMediaErrors").NotFoundError ||
            o("WALogger")
              .WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[newsletter-status-card] drawing the card without the update's reactions, which could not be read",
                  ])),
              )
              .catching(r("getErrorSafe")(t))
              .sendLogs("newsletter-status-card-reactions-failed"),
          null
        );
      }
    }
    function G(e) {
      var t = o(
          "WAWebNewsletterReactionFrontendUtils",
        ).aggregateAndSortReactions(e),
        n = t.count,
        r = t.reactions;
      return n === 0
        ? null
        : {
            emojis: r
              .slice(0, o("WAWebReactionsUtils").getMaxReactionsInBubble())
              .map(function (e) {
                var t = e[0];
                return j(t.reactionAggregate);
              }),
            countText:
              n >= b
                ? o(
                    "WAWebNewsletterStatusCardCount",
                  ).formatNewsletterStatusCardCount(n)
                : null,
          };
    }
    async function z(e) {
      try {
        var t;
        return {
          votes:
            (t = o(
              "WAWebNewsletterPollVotesModelCollection",
            ).NewsletterPollVotesModelCollection.get(e.id)) != null
              ? t
              : await o(
                  "WAWebNewsletterPollVotesModelCollection",
                ).NewsletterPollVotesModelCollection.find(e.id),
          areVotesKnown: !0,
        };
      } catch (e) {
        var n = e instanceof o("WAWebGetUserMediaErrors").NotFoundError;
        return (
          n ||
            o("WALogger")
              .WARN(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[newsletter-status-card] drawing the poll without its results, as its votes could not be loaded",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("newsletter-status-card-poll-votes-failed"),
          { votes: null, areVotesKnown: n }
        );
      }
    }
    function j(e) {
      var t;
      return (t = o("WAWebEmoji").EmojiUtil.normalizeEmojiFromString(e)) != null
        ? t
        : e;
    }
    async function K(e, t) {
      var n = await Promise.all(
        Array.from(
          o("WAWebNewsletterStatusCardEmoji").getCardEmojiGlyphPaths(e, t),
          async function (e) {
            var t = e[0],
              n = e[1];
            return { emoji: t, image: await X(n, g) };
          },
        ),
      );
      return new Map(
        n.map(function (e) {
          var t = e.emoji,
            n = e.image;
          return [t, n];
        }),
      );
    }
    function Q(e) {
      var t = o(
        "WAWebNewsletterStatusCardLinkPreview",
      ).downloadCardLinkThumbnail(e);
      return t != null
        ? t.then(function () {
            return X(
              o("WAWebNewsletterStatusCardLinkPreview").getCardLinkThumbnailUrl(
                e,
              ),
            );
          })
        : X(
            o("WAWebNewsletterStatusCardLinkPreview").getCardLinkThumbnailUrl(
              e,
            ),
          );
    }
    async function X(e, t) {
      if ((t === void 0 && (t = f), e == null)) return null;
      try {
        return Y(
          await o("WAPromiseTimeout").promiseTimeout(
            o("WAWebMediaLoad").loadImage(e),
            t,
          ),
        );
      } catch (e) {
        return (
          o("WALogger")
            .WARN(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[newsletter-status-card] drawing the card without an optional image that did not load",
                ])),
            )
            .catching(r("getErrorSafe")(e)),
          null
        );
      }
    }
    function Y(e) {
      return { source: e, width: e.naturalWidth, height: e.naturalHeight };
    }
    function J(e, t) {
      var n,
        r,
        a = t.albumTiles,
        i = t.avatar,
        l = t.linkThumbnail,
        s = t.media,
        u = e.type === o("WAWebMsgType").MSG_TYPE.CHAT ? l : null;
      return (n =
        (r =
          s != null
            ? s
            : a == null
              ? void 0
              : a.find(function (e) {
                  return e != null;
                })) != null
          ? r
          : u) != null
        ? n
        : i;
    }
    function Z(e) {
      var t,
        n = e != null ? ee(e) : null;
      return n == null
        ? o("WAWebNewsletterStatusCardPalette").FALLBACK_CARD_COLOR
        : (t = o("WAWebNewsletterStatusCardPalette").getDominantColor(n)) !=
            null
          ? t
          : o("WAWebNewsletterStatusCardPalette").NO_SWATCH_CARD_COLOR;
    }
    function ee(e) {
      var t = o("WAWebNewsletterStatusCardPalette").getPaletteSampleSize(
          e.width,
          e.height,
        ),
        n = t.height,
        a = t.width,
        i = o("WAWebCanvasUtils").createCanvas(a, n).getContext("2d");
      if (i == null) return null;
      i.imageSmoothingEnabled = !1;
      try {
        return (
          i.drawImage(e.source, 0, 0, a, n),
          i.getImageData(0, 0, a, n).data
        );
      } catch (e) {
        return (
          o("WALogger")
            .WARN(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "[newsletter-status-card] drawing the card on the default background, as an image's colours could not be read",
                ])),
            )
            .catching(r("getErrorSafe")(e)),
          null
        );
      }
    }
    l.default = S;
  },
  226,
);
