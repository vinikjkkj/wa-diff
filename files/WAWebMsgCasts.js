__d(
  "WAWebMsgCasts",
  ["invariant", "WAWebMsgType"],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      var t;
      return Y(e, [
        (t = o("WAWebMsgType")).MSG_TYPE.CHAT,
        t.MSG_TYPE.HSM,
        t.MSG_TYPE.TEMPLATE_BUTTON_REPLY,
        t.MSG_TYPE.AUTOMATED_GREETING_MESSAGE,
        t.MSG_TYPE.INTERACTIVE,
      ]);
    }
    function u(e) {
      return Y(e, [o("WAWebMsgType").MSG_TYPE.DOCUMENT]);
    }
    function c(e) {
      return Y(e, [
        o("WAWebMsgType").MSG_TYPE.DOCUMENT,
        o("WAWebMsgType").MSG_TYPE.INTERACTIVE,
      ]);
    }
    function d(e) {
      return Y(e, [o("WAWebMsgType").MSG_TYPE.STICKER]);
    }
    function m(e) {
      var t;
      return Y(e, [
        (t = o("WAWebMsgType")).MSG_TYPE.STICKER,
        t.MSG_TYPE.CHAT,
        t.MSG_TYPE.HSM,
        t.MSG_TYPE.TEMPLATE_BUTTON_REPLY,
        t.MSG_TYPE.MUSIC,
      ]);
    }
    function p(e) {
      return Y(e, [
        o("WAWebMsgType").MSG_TYPE.IMAGE,
        o("WAWebMsgType").MSG_TYPE.PRODUCT,
        o("WAWebMsgType").MSG_TYPE.INTERACTIVE,
      ]);
    }
    function _(e) {
      return Y(e, [
        o("WAWebMsgType").MSG_TYPE.PRODUCT,
        o("WAWebMsgType").MSG_TYPE.INTERACTIVE,
      ]);
    }
    function f(e) {
      return Y(e, [o("WAWebMsgType").MSG_TYPE.POLL_RESULT_SNAPSHOT]);
    }
    function g(e) {
      return Y(e, [
        o("WAWebMsgType").MSG_TYPE.POLL_CREATION,
        o("WAWebMsgType").MSG_TYPE.POLL_RESULT_SNAPSHOT,
      ]);
    }
    function h(e) {
      return Y(e, [
        o("WAWebMsgType").MSG_TYPE.INTERACTIVE,
        o("WAWebMsgType").MSG_TYPE.NATIVE_FLOW,
      ]);
    }
    function y(e) {
      return Y(e, [o("WAWebMsgType").MSG_TYPE.RICH_RESPONSE]);
    }
    function C(e) {
      return Y(e, [o("WAWebMsgType").MSG_TYPE.PTV]);
    }
    function b(e) {
      return Y(e, [o("WAWebMsgType").MSG_TYPE.INTERACTIVE]);
    }
    function v(e) {
      return Y(e, [o("WAWebMsgType").MSG_TYPE.NATIVE_FLOW]);
    }
    function S(e) {
      return Y(e, [o("WAWebMsgType").MSG_TYPE.INTERACTIVE_RESPONSE]);
    }
    function R(e) {
      return Y(e, [
        o("WAWebMsgType").MSG_TYPE.INTERACTIVE,
        o("WAWebMsgType").MSG_TYPE.NATIVE_FLOW,
        o("WAWebMsgType").MSG_TYPE.INTERACTIVE_RESPONSE,
      ]);
    }
    function L(e) {
      return Y(e, [o("WAWebMsgType").MSG_TYPE.AUDIO]);
    }
    function E(e) {
      return Y(e, [
        o("WAWebMsgType").MSG_TYPE.AUDIO,
        o("WAWebMsgType").MSG_TYPE.PTT,
      ]);
    }
    function k(e) {
      return Y(e, [
        o("WAWebMsgType").MSG_TYPE.IMAGE,
        o("WAWebMsgType").MSG_TYPE.VIDEO,
        o("WAWebMsgType").MSG_TYPE.PTT,
      ]);
    }
    function I(e) {
      return Y(e, [o("WAWebMsgType").MSG_TYPE.ALBUM]);
    }
    function T(e) {
      return Y(e, [o("WAWebMsgType").MSG_TYPE.LOCATION]);
    }
    function D(e) {
      return Y(e, [
        o("WAWebMsgType").MSG_TYPE.VCARD,
        o("WAWebMsgType").MSG_TYPE.DOCUMENT,
      ]);
    }
    function x(e) {
      return Y(e, [
        o("WAWebMsgType").MSG_TYPE.MULTI_VCARD,
        o("WAWebMsgType").MSG_TYPE.DOCUMENT,
      ]);
    }
    function $(e) {
      return Y(e, [o("WAWebMsgType").MSG_TYPE.PAYMENT]);
    }
    function P(e) {
      return Y(e, [o("WAWebMsgType").MSG_TYPE.ORDER]);
    }
    function N(e) {
      return Y(e, [o("WAWebMsgType").MSG_TYPE.REVOKED]);
    }
    function M(e) {
      return Y(e, [o("WAWebMsgType").MSG_TYPE.CIPHERTEXT]);
    }
    function w(e) {
      return Y(e, [o("WAWebMsgType").MSG_TYPE.LOADING_MEDIA]);
    }
    function A(e) {
      return Y(e, [o("WAWebMsgType").MSG_TYPE.DEBUG_PLACEHOLDER]);
    }
    function F(e) {
      return Y(e, [o("WAWebMsgType").MSG_TYPE.QUARANTINED]);
    }
    function O(e) {
      return Y(e, [o("WAWebMsgType").MSG_TYPE.GROUPS_V4_INVITE]);
    }
    function B(e) {
      return Y(e, [o("WAWebMsgType").MSG_TYPE.REQUEST_PHONE_NUMBER]);
    }
    function W(e) {
      return Y(e, [o("WAWebMsgType").MSG_TYPE.BROADCAST_NOTIFICATION]);
    }
    function q(e) {
      return Y(e, [o("WAWebMsgType").MSG_TYPE.NEWSLETTER_NOTIFICATION]);
    }
    function U(e) {
      return Y(e, [o("WAWebMsgType").MSG_TYPE.MESSAGE_HISTORY_NOTICE]);
    }
    function V(e) {
      return Y(e, [o("WAWebMsgType").MSG_TYPE.MESSAGE_HISTORY_BUNDLE]);
    }
    function H(e) {
      return Y(e, [o("WAWebMsgType").MSG_TYPE.STICKER_PACK]);
    }
    function G(e) {
      return Y(e, [o("WAWebMsgType").MSG_TYPE.SHARABLE_EVENT_INVITE]);
    }
    function z(e) {
      return J(e, "GIF", function (e) {
        return e.type === o("WAWebMsgType").MSG_TYPE.VIDEO && e.isGif === !0;
      });
    }
    function j(e) {
      return J(e, "non-GIF video", Z);
    }
    function K(e) {
      return J(e, "non-GIF video or interactive", function (e) {
        return Z(e) || e.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE;
      });
    }
    function Q(e) {
      return J(
        e,
        "album media (non-GIF video, image or revoked)",
        function (e) {
          return (
            Z(e) ||
            e.type === o("WAWebMsgType").MSG_TYPE.IMAGE ||
            e.type === o("WAWebMsgType").MSG_TYPE.REVOKED
          );
        },
      );
    }
    function X(e) {
      return J(e, "live location", function (e) {
        return (
          e.type === o("WAWebMsgType").MSG_TYPE.LOCATION && e.isLive === !0
        );
      });
    }
    function Y(e, t) {
      return J(e, t.join(" or "), function (e) {
        return t.includes(e.type);
      });
    }
    function J(e, t, n) {
      return e;
    }
    function Z(e) {
      return e.type === o("WAWebMsgType").MSG_TYPE.VIDEO && e.isGif !== !0;
    }
    ((l.castToTextBodyMsg = e),
      (l.castToDocumentMsg = u),
      (l.castToDocumentOrInteractiveMsg = c),
      (l.castToStickerMsg = d),
      (l.castToStickerLikeMsg = m),
      (l.castToImageProductOrInteractiveMsg = p),
      (l.castToProductOrInteractiveMsg = _),
      (l.castToPollResultSnapshotMsg = f),
      (l.castToPollMsg = g),
      (l.castToInteractiveOrNativeFlowMsg = h),
      (l.castToRichResponseMsg = y),
      (l.castToPtvMsg = C),
      (l.castToInteractiveMsg = b),
      (l.castToNativeFlowMsg = v),
      (l.castToInteractiveResponseMsg = S),
      (l.castToInteractiveBubbleMsg = R),
      (l.castToAudioMsg = L),
      (l.castToAudioOrPttMsg = E),
      (l.castToViewOnceMsg = k),
      (l.castToAlbumMsg = I),
      (l.castToLocationMsg = T),
      (l.castToVcardOrDocumentMsg = D),
      (l.castToMultiVcardOrDocumentMsg = x),
      (l.castToPaymentMsg = $),
      (l.castToOrderMsg = P),
      (l.castToRevokedMsg = N),
      (l.castToCiphertextMsg = M),
      (l.castToLoadingMediaMsg = w),
      (l.castToDebugPlaceholderMsg = A),
      (l.castToQuarantinedMsg = F),
      (l.castToGroupsV4InviteMsg = O),
      (l.castToRequestPhoneNumberMsg = B),
      (l.castToBroadcastNotificationMsg = W),
      (l.castToNewsletterNotificationMsg = q),
      (l.castToMessageHistoryNoticeMsg = U),
      (l.castToMessageHistoryBundleMsg = V),
      (l.castToStickerPackMsg = H),
      (l.castToSharableEventInviteMsg = G),
      (l.castToGifMsg = z),
      (l.castToNonGifVideoMsg = j),
      (l.castToNonGifVideoOrInteractiveMsg = K),
      (l.castToAlbumMediaMsg = Q),
      (l.castToLiveLocationMsg = X));
  },
  98,
);
