__d(
  "MAWXMAUtils",
  [
    "I64",
    "LSIntEnum",
    "LSXmaContentType",
    "MAWMsgType",
    "WAArmadilloXMA.pb",
    "WATimeUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u(e) {
      return !e || e.type !== o("MAWMsgType").MSG_TYPE.XMA ? null : e;
    }
    function c(t) {
      return (
        t != null &&
        ((e || (e = o("I64"))).equal(
          t,
          (s || (s = o("LSIntEnum"))).ofNumber(
            r("LSXmaContentType").FB_STORY_REPLY,
          ),
        ) ||
          (e || (e = o("I64"))).equal(
            t,
            (s || (s = o("LSIntEnum"))).ofNumber(
              r("LSXmaContentType").FB_STORY_SHARE,
            ),
          ) ||
          (e || (e = o("I64"))).equal(
            t,
            (s || (s = o("LSIntEnum"))).ofNumber(
              r("LSXmaContentType").FB_STORY_MENTION,
            ),
          ) ||
          (e || (e = o("I64"))).equal(
            t,
            (s || (s = o("LSIntEnum"))).ofNumber(
              r("LSXmaContentType").FB_PRODUCER_STORY_REPLY,
            ),
          ))
      );
    }
    function d(e) {
      return (
        e ===
          o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE
            .FB_STORY_SHARE ||
        e ===
          o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE
            .IG_STORY_PHOTO_SHARE ||
        e ===
          o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE
            .IG_STORY_VIDEO_SHARE
      );
    }
    function m(e) {
      return (
        e ===
        o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE
          .MSG_EXTERNAL_LINK_SHARE
      );
    }
    function p(t) {
      return (
        t != null &&
        (e || (e = o("I64"))).equal(
          t,
          (s || (s = o("LSIntEnum"))).ofNumber(
            r("LSXmaContentType").MSG_CONTACT,
          ),
        )
      );
    }
    function _(e) {
      return (
        e ===
        o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE
          .MSG_RECEIVER_FETCH
      );
    }
    function f(e) {
      return e == null
        ? !1
        : e ===
            o("WAArmadilloXMA.pb")
              .EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE
              .IG_STORY_PHOTO_SHARE ||
            e ===
              o("WAArmadilloXMA.pb")
                .EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE
                .IG_STORY_VIDEO_SHARE;
    }
    function g(e) {
      return (
        e ===
        o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE
          .FB_FEED_POST_PRIVATE_REPLY
      );
    }
    function h(e, t) {
      return (e != null && e) || (t != null && t < o("WATimeUtils").unixTime());
    }
    function y(e) {
      return babelHelpers.extends({}, e, {
        ctas: void 0,
        defaultCTA: void 0,
        headerTitle: void 0,
        isTombstoned: !0,
        maxSubtitleNumOfLines: void 0,
        maxTitleNumOfLines: void 0,
        overlayDescription: void 0,
        overlayIconGlyph: void 0,
        overlayTitle: void 0,
        subtitleText: void 0,
        targetId: void 0,
        targetUsername: void 0,
        titleText: void 0,
      });
    }
    function C(e) {
      var t = babelHelpers.extends({}, e, {
        ctas: void 0,
        defaultCTA: void 0,
        defaultPreviewMediaId: void 0,
        defaultPreviewMediaPlaintextHash: void 0,
        faviconMediaId: void 0,
        faviconPlaintextHash: void 0,
        headerMediaId: void 0,
        headerMediaPlaintextHash: void 0,
        headerTitle: void 0,
        isTombstoned: !0,
        maxSubtitleNumOfLines: void 0,
        maxTitleNumOfLines: void 0,
        overlayDescription: void 0,
        overlayIconGlyph: void 0,
        overlayTitle: void 0,
        previewMediaIds: void 0,
        subtitleText: void 0,
        targetId: void 0,
        targetUsername: void 0,
        titleText: void 0,
      });
      return ((t.targetExpiringAtSec = void 0), t);
    }
    function b(e) {
      switch (e) {
        case o("WAArmadilloXMA.pb")
          .EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.FB_STORY_REPLY:
        case o("WAArmadilloXMA.pb")
          .EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.IG_STORY_REPLY:
        case o("WAArmadilloXMA.pb")
          .EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE
          .FB_PRODUCER_STORY_REPLY:
          return !0;
        default:
          return !1;
      }
    }
    function v(e) {
      return (
        e ===
        o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE
          .FB_PRODUCER_STORY_REPLY
      );
    }
    function S(e) {
      return (
        e ===
        o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE
          .IG_STORY_REACTION
      );
    }
    function R(e) {
      return (
        e ===
        o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE
          .FB_STORY_MENTION
      );
    }
    function L(e) {
      return (
        e ===
        o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE
          .FB_POST_MENTION
      );
    }
    function E(e) {
      switch (e) {
        case o("WAArmadilloXMA.pb")
          .EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE
          .IG_STORY_PHOTO_MENTION:
        case o("WAArmadilloXMA.pb")
          .EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE
          .IG_STORY_VIDEO_MENTION:
          return !0;
        default:
          return !1;
      }
    }
    function k(e) {
      return R(e) || E(e);
    }
    function I(e) {
      return (
        e ===
          o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE
            .IG_SINGLE_IMAGE_POST_SHARE ||
        e ===
          o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE
            .IG_MULTIPOST_SHARE ||
        e ===
          o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE
            .IG_SINGLE_VIDEO_POST_SHARE
      );
    }
    function T(e) {
      return (
        e ===
          o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE
            .IG_STORY_PHOTO_HIGHLIGHT_SHARE ||
        e ===
          o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE
            .IG_STORY_VIDEO_HIGHLIGHT_SHARE
      );
    }
    function D(e) {
      return (
        e ===
        o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE
          .MSG_HIGHLIGHTS_TAB_FRIEND_UPDATES_REPLY
      );
    }
    ((l.maybeXMAMessage = u),
      (l.isXMAFBStory = c),
      (l.isXMAStoryShare = d),
      (l.isXMAExternalLinkShare = m),
      (l.isXMAContactShare = p),
      (l.isReceiverFetchXMA = _),
      (l.isIGXMAStoryShare = f),
      (l.isXMAPostPrivateReply = g),
      (l.isXMAExpired = h),
      (l.buildUnstoredTombstonedXMA = y),
      (l.buildTombstonedDbXMA = C),
      (l.isXMAStoryReply = b),
      (l.isXMAStoryProducerReply = v),
      (l.isXMAStoryReaction = S),
      (l.isFBXMAStoryMention = R),
      (l.isFBXMAPostMention = L),
      (l.isIGXMAStoryMention = E),
      (l.isXMAStoryMention = k),
      (l.isIGXMAPostShare = I),
      (l.isXMAStoryHighlightShare = T),
      (l.isXMAMsgHighlightsTabFriendUpdatesReply = D));
  },
  98,
);
