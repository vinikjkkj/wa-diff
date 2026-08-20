__d(
  "MAWXMAUtils",
  ["I64", "LSIntEnum", "LSXmaContentType", "WAArmadilloXMA.pb", "WATimeUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u(t) {
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
    function c(e) {
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
    function d(e) {
      return (
        e ===
        o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE
          .MSG_EXTERNAL_LINK_SHARE
      );
    }
    function m(t) {
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
    function p(e) {
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
    function _(e) {
      return (
        e ===
        o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE
          .FB_FEED_POST_PRIVATE_REPLY
      );
    }
    function f(e, t) {
      return (e != null && e) || (t != null && t < o("WATimeUtils").unixTime());
    }
    function g(e) {
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
    function h(e) {
      return (
        e ===
        o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE
          .FB_PRODUCER_STORY_REPLY
      );
    }
    function y(e) {
      return (
        e ===
        o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE
          .IG_STORY_REACTION
      );
    }
    function C(e) {
      return (
        e ===
        o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE
          .FB_STORY_MENTION
      );
    }
    function b(e) {
      return (
        e ===
        o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE
          .FB_POST_MENTION
      );
    }
    function v(e) {
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
    function S(e) {
      return C(e) || v(e);
    }
    function R(e) {
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
    function L(e) {
      return (
        e ===
          o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE
            .IG_STORY_PHOTO_HIGHLIGHT_SHARE ||
        e ===
          o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE
            .IG_STORY_VIDEO_HIGHLIGHT_SHARE
      );
    }
    function E(e) {
      return (
        e ===
        o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE
          .MSG_HIGHLIGHTS_TAB_FRIEND_UPDATES_REPLY
      );
    }
    ((l.isXMAFBStory = u),
      (l.isXMAStoryShare = c),
      (l.isXMAExternalLinkShare = d),
      (l.isXMAContactShare = m),
      (l.isIGXMAStoryShare = p),
      (l.isXMAPostPrivateReply = _),
      (l.isXMAExpired = f),
      (l.isXMAStoryReply = g),
      (l.isXMAStoryProducerReply = h),
      (l.isXMAStoryReaction = y),
      (l.isFBXMAStoryMention = C),
      (l.isFBXMAPostMention = b),
      (l.isIGXMAStoryMention = v),
      (l.isXMAStoryMention = S),
      (l.isIGXMAPostShare = R),
      (l.isXMAStoryHighlightShare = L),
      (l.isXMAMsgHighlightsTabFriendUpdatesReply = E));
  },
  98,
);
