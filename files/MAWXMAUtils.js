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
    function f(e) {
      return (
        e ===
        o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE
          .FB_FEED_POST_PRIVATE_REPLY
      );
    }
    function g(e, t) {
      return (e != null && e) || (t != null && t < o("WATimeUtils").unixTime());
    }
    function h(e) {
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
    function y(e) {
      return (
        e ===
        o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE
          .FB_PRODUCER_STORY_REPLY
      );
    }
    function C(e) {
      return (
        e ===
        o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE
          .IG_STORY_REACTION
      );
    }
    function b(e) {
      return (
        e ===
        o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE
          .FB_STORY_MENTION
      );
    }
    function v(e) {
      return (
        e ===
        o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE
          .FB_POST_MENTION
      );
    }
    function S(e) {
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
    function R(e) {
      return b(e) || S(e);
    }
    function L(e) {
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
    function E(e) {
      return (
        e ===
          o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE
            .IG_STORY_PHOTO_HIGHLIGHT_SHARE ||
        e ===
          o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE
            .IG_STORY_VIDEO_HIGHLIGHT_SHARE
      );
    }
    function k(e) {
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
      (l.isIGXMAStoryShare = _),
      (l.isXMAPostPrivateReply = f),
      (l.isXMAExpired = g),
      (l.isXMAStoryReply = h),
      (l.isXMAStoryProducerReply = y),
      (l.isXMAStoryReaction = C),
      (l.isFBXMAStoryMention = b),
      (l.isFBXMAPostMention = v),
      (l.isIGXMAStoryMention = S),
      (l.isXMAStoryMention = R),
      (l.isIGXMAPostShare = L),
      (l.isXMAStoryHighlightShare = E),
      (l.isXMAMsgHighlightsTabFriendUpdatesReply = k));
  },
  98,
);
