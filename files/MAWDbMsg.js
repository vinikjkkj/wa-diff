__d(
  "MAWDbMsg",
  [
    "FBLogger",
    "I64",
    "MAWDbChatId__UNSAFE_DO_NOT_USE",
    "MAWHexUtils",
    "MAWMsgType",
    "WAMsg",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = [
        (s = o("MAWMsgType")).MSG_TYPE.REVOKED,
        s.MSG_TYPE.EPHEMERAL_SYNC_RESPONSE,
        s.MSG_TYPE.EPHEMERAL_SETTING_CHANGE_FROM_CURRENT_DEVICE,
        s.MSG_TYPE.GROUP_INVITE,
        s.MSG_TYPE.SK_DISTRIBUTION,
        s.MSG_TYPE.RAVEN_ACTION,
      ],
      c = 0,
      d = Number.MAX_SAFE_INTEGER;
    function m(e) {
      return e;
    }
    function p(e) {
      return e;
    }
    function _(e) {
      return T(e) ? e : null;
    }
    function f(e) {
      return e;
    }
    function g(e) {
      return e;
    }
    var h = "futureproof",
      y = "futureproof_spam",
      C = "spam",
      b = "toBeRead",
      v = "e2ee_admin_msg",
      S = "cutover_admin_msg";
    function R(e, t) {
      return (
        o("MAWHexUtils").orderPreservingHex(e) +
        "_" +
        o("MAWHexUtils").orderPreservingHex(t) +
        "_m"
      );
    }
    function L(e, t, n) {
      var r =
        o("MAWHexUtils").orderPreservingHex(e) +
        "_" +
        o("MAWHexUtils").orderPreservingHex(t) +
        "_m";
      return r + "_" + n.externalId;
    }
    function E(e, t) {
      return (
        o("MAWHexUtils").orderPreservingHex(e) +
        "_" +
        o("MAWHexUtils").orderPreservingHex(t) +
        "_r"
      );
    }
    function k(e, t, n) {
      var r =
        n != null
          ? n
          : o("MAWHexUtils").orderPreservingHex(
              Math.floor(Math.random() * 1e4),
            );
      return (
        o("MAWHexUtils").orderPreservingHex(e) +
        "_" +
        o("MAWHexUtils").orderPreservingHex(t) +
        "_DEBUG_" +
        r +
        ")}"
      );
    }
    function I(e) {
      var t = e.split("_");
      return t.length >= 3 && t[0] !== "" && t[1] !== "" && t[2] === "m";
    }
    function T(e) {
      var t = /^(.*)\..*?$/,
        n = t.test(e);
      return I(e) || n;
    }
    function D(e) {
      return o("MAWDbChatId__UNSAFE_DO_NOT_USE").craftAltIndex__DEPRECATED(
        e,
        b,
      );
    }
    function x(e) {
      return o("MAWDbChatId__UNSAFE_DO_NOT_USE").craftAltIndex__DEPRECATED(
        e,
        v,
      );
    }
    function $(e) {
      return o("MAWDbChatId__UNSAFE_DO_NOT_USE").craftAltIndex__DEPRECATED(
        e,
        S,
      );
    }
    function P(e) {
      if (!I(e)) return 0;
      var t = e.split("_"),
        n = t[0],
        r = t[1];
      return o("MAWHexUtils").reverseOrderPreservingHex(r);
    }
    function N(e) {
      return o("MAWHexUtils").orderPreservingHex(e) + "_";
    }
    function M(e) {
      return o("MAWHexUtils").orderPreservingHex(e) + "_z";
    }
    function w(e) {
      switch (e.type) {
        case o("MAWMsgType").MSG_TYPE.XMA:
          return !0;
        case o("MAWMsgType").MSG_TYPE.IMAGE:
        case o("MAWMsgType").MSG_TYPE.VIDEO:
        case o("MAWMsgType").MSG_TYPE.PTT:
        case o("MAWMsgType").MSG_TYPE.GIF:
        case o("MAWMsgType").MSG_TYPE.STICKER:
        case o("MAWMsgType").MSG_TYPE.DOCUMENT_FILE:
        case o("MAWMsgType").MSG_TYPE.TEXT:
        case o("MAWMsgType").MSG_TYPE.FUTUREPROOF:
        case o("MAWMsgType").MSG_TYPE.CIPHERTEXT:
        case o("MAWMsgType").MSG_TYPE.UNAVAILABLE:
        case o("MAWMsgType").MSG_TYPE.ADMIN:
        case o("MAWMsgType").MSG_TYPE.REVOKED:
        case o("MAWMsgType").MSG_TYPE.EXPIRED_EPHEMERAL:
        case o("MAWMsgType").MSG_TYPE.EPHEMERAL_SETTING_ADMIN:
        case o("MAWMsgType").MSG_TYPE.EPHEMERAL_SYNC_RESPONSE:
        case o("MAWMsgType").MSG_TYPE.EPHEMERAL_SCREENSHOT_ACTION:
        case o("MAWMsgType").MSG_TYPE.GROUP_INVITE:
        case o("MAWMsgType").MSG_TYPE.RAVEN:
        case o("MAWMsgType").MSG_TYPE.BUMP_EXISTING_MESSAGE:
        case o("MAWMsgType").MSG_TYPE.RECEIVER_FETCH:
        case o("MAWMsgType").MSG_TYPE.GROUP_POLL_CREATE:
        case o("MAWMsgType").MSG_TYPE.GROUP_POLL_UPDATE:
          return !1;
      }
      throw r("FBLogger")("messenger_web").mustfixThrow(
        'Invalid msg type for isXMAMsg check: "%s"',
        e.type,
      );
    }
    function A(e) {
      switch (e.type) {
        case o("MAWMsgType").MSG_TYPE.IMAGE:
        case o("MAWMsgType").MSG_TYPE.VIDEO:
        case o("MAWMsgType").MSG_TYPE.PTT:
        case o("MAWMsgType").MSG_TYPE.GIF:
        case o("MAWMsgType").MSG_TYPE.STICKER:
        case o("MAWMsgType").MSG_TYPE.DOCUMENT_FILE:
        case o("MAWMsgType").MSG_TYPE.RAVEN:
          return !0;
        case o("MAWMsgType").MSG_TYPE.TEXT:
        case o("MAWMsgType").MSG_TYPE.FUTUREPROOF:
        case o("MAWMsgType").MSG_TYPE.CIPHERTEXT:
        case o("MAWMsgType").MSG_TYPE.UNAVAILABLE:
        case o("MAWMsgType").MSG_TYPE.ADMIN:
        case o("MAWMsgType").MSG_TYPE.REVOKED:
        case o("MAWMsgType").MSG_TYPE.EXPIRED_EPHEMERAL:
        case o("MAWMsgType").MSG_TYPE.EPHEMERAL_SETTING_ADMIN:
        case o("MAWMsgType").MSG_TYPE.EPHEMERAL_SYNC_RESPONSE:
        case o("MAWMsgType").MSG_TYPE.EPHEMERAL_SCREENSHOT_ACTION:
        case o("MAWMsgType").MSG_TYPE.GROUP_INVITE:
        case o("MAWMsgType").MSG_TYPE.XMA:
        case o("MAWMsgType").MSG_TYPE.BUMP_EXISTING_MESSAGE:
        case o("MAWMsgType").MSG_TYPE.RECEIVER_FETCH:
        case o("MAWMsgType").MSG_TYPE.GROUP_POLL_CREATE:
        case o("MAWMsgType").MSG_TYPE.GROUP_POLL_UPDATE:
          return !1;
      }
      throw r("FBLogger")("messenger_web").mustfixThrow(
        'Invalid msg type for isMediaMsg check: "%s"',
        e.type,
      );
    }
    function F(e) {
      return e.type === o("MAWMsgType").MSG_TYPE.RECEIVER_FETCH;
    }
    function O(e) {
      switch (e.type) {
        case o("MAWMsgType").MSG_TYPE.IMAGE:
        case o("MAWMsgType").MSG_TYPE.VIDEO:
          return !0;
        case o("MAWMsgType").MSG_TYPE.PTT:
        case o("MAWMsgType").MSG_TYPE.GIF:
        case o("MAWMsgType").MSG_TYPE.STICKER:
        case o("MAWMsgType").MSG_TYPE.DOCUMENT_FILE:
        case o("MAWMsgType").MSG_TYPE.RAVEN:
        case o("MAWMsgType").MSG_TYPE.TEXT:
        case o("MAWMsgType").MSG_TYPE.FUTUREPROOF:
        case o("MAWMsgType").MSG_TYPE.CIPHERTEXT:
        case o("MAWMsgType").MSG_TYPE.UNAVAILABLE:
        case o("MAWMsgType").MSG_TYPE.ADMIN:
        case o("MAWMsgType").MSG_TYPE.REVOKED:
        case o("MAWMsgType").MSG_TYPE.EXPIRED_EPHEMERAL:
        case o("MAWMsgType").MSG_TYPE.EPHEMERAL_SETTING_ADMIN:
        case o("MAWMsgType").MSG_TYPE.EPHEMERAL_SYNC_RESPONSE:
        case o("MAWMsgType").MSG_TYPE.EPHEMERAL_SCREENSHOT_ACTION:
        case o("MAWMsgType").MSG_TYPE.GROUP_INVITE:
        case o("MAWMsgType").MSG_TYPE.XMA:
        case o("MAWMsgType").MSG_TYPE.BUMP_EXISTING_MESSAGE:
        case o("MAWMsgType").MSG_TYPE.RECEIVER_FETCH:
        case o("MAWMsgType").MSG_TYPE.GROUP_POLL_CREATE:
          return !1;
        default:
          return (
            r("FBLogger")("messenger_web").mustfix(
              'Invalid msg type for isPhotoOrVideoMediaMsg check: "%s"',
              e.type,
            ),
            !1
          );
      }
    }
    function B(e) {
      switch (e.type) {
        case o("MAWMsgType").MSG_TYPE.DOCUMENT_FILE:
          return !0;
        case o("MAWMsgType").MSG_TYPE.IMAGE:
        case o("MAWMsgType").MSG_TYPE.VIDEO:
        case o("MAWMsgType").MSG_TYPE.PTT:
        case o("MAWMsgType").MSG_TYPE.GIF:
        case o("MAWMsgType").MSG_TYPE.STICKER:
        case o("MAWMsgType").MSG_TYPE.RAVEN:
        case o("MAWMsgType").MSG_TYPE.TEXT:
        case o("MAWMsgType").MSG_TYPE.FUTUREPROOF:
        case o("MAWMsgType").MSG_TYPE.CIPHERTEXT:
        case o("MAWMsgType").MSG_TYPE.UNAVAILABLE:
        case o("MAWMsgType").MSG_TYPE.ADMIN:
        case o("MAWMsgType").MSG_TYPE.REVOKED:
        case o("MAWMsgType").MSG_TYPE.EXPIRED_EPHEMERAL:
        case o("MAWMsgType").MSG_TYPE.EPHEMERAL_SETTING_ADMIN:
        case o("MAWMsgType").MSG_TYPE.EPHEMERAL_SYNC_RESPONSE:
        case o("MAWMsgType").MSG_TYPE.EPHEMERAL_SCREENSHOT_ACTION:
        case o("MAWMsgType").MSG_TYPE.GROUP_INVITE:
        case o("MAWMsgType").MSG_TYPE.XMA:
        case o("MAWMsgType").MSG_TYPE.BUMP_EXISTING_MESSAGE:
        case o("MAWMsgType").MSG_TYPE.RECEIVER_FETCH:
        case o("MAWMsgType").MSG_TYPE.GROUP_POLL_CREATE:
          return !1;
        default:
          return (
            r("FBLogger")("messenger_web").mustfix(
              'Invalid msg type for isDocumentFileMediaMsg check: "%s"',
              e.type,
            ),
            !1
          );
      }
    }
    function W(e) {
      switch (e.type) {
        case o("MAWMsgType").MSG_TYPE.TEXT:
        case o("MAWMsgType").MSG_TYPE.IMAGE:
        case o("MAWMsgType").MSG_TYPE.VIDEO:
        case o("MAWMsgType").MSG_TYPE.PTT:
        case o("MAWMsgType").MSG_TYPE.GIF:
        case o("MAWMsgType").MSG_TYPE.STICKER:
        case o("MAWMsgType").MSG_TYPE.DOCUMENT_FILE:
        case o("MAWMsgType").MSG_TYPE.REVOKED:
        case o("MAWMsgType").MSG_TYPE.DELETE_FOR_ME:
        case o("MAWMsgType").MSG_TYPE.XMA:
        case o("MAWMsgType").MSG_TYPE.RAVEN:
        case o("MAWMsgType").MSG_TYPE.BUMP_EXISTING_MESSAGE:
        case o("MAWMsgType").MSG_TYPE.RECEIVER_FETCH:
        case o("MAWMsgType").MSG_TYPE.GROUP_POLL_CREATE:
          return !0;
        case o("MAWMsgType").MSG_TYPE.FUTUREPROOF:
        case o("MAWMsgType").MSG_TYPE.CIPHERTEXT:
        case o("MAWMsgType").MSG_TYPE.UNAVAILABLE:
        case o("MAWMsgType").MSG_TYPE.ADMIN:
        case o("MAWMsgType").MSG_TYPE.EXPIRED_EPHEMERAL:
        case o("MAWMsgType").MSG_TYPE.EPHEMERAL_SETTING_ADMIN:
        case o("MAWMsgType").MSG_TYPE.EPHEMERAL_SYNC_RESPONSE:
        case o("MAWMsgType").MSG_TYPE.EPHEMERAL_SCREENSHOT_ACTION:
        case o("MAWMsgType").MSG_TYPE
          .EPHEMERAL_SETTING_CHANGE_FROM_CURRENT_DEVICE:
        case o("MAWMsgType").MSG_TYPE.GROUP_INVITE:
        case o("MAWMsgType").MSG_TYPE.SK_DISTRIBUTION:
        case o("MAWMsgType").MSG_TYPE.RAVEN_ACTION:
        case o("MAWMsgType").MSG_TYPE.EDIT_ACTION:
          return !1;
      }
      throw r("FBLogger")("messenger_web").mustfixThrow(
        'Invalid msg type for isContentMsg check: "%s"',
        e.type,
      );
    }
    function q(e) {
      return V(e.type);
    }
    function U(e) {
      return e.type === o("MAWMsgType").MSG_TYPE.ADMIN;
    }
    function V(e) {
      return (
        e === "EphemeralSyncResponse" ||
        e === "EphemeralSettingChangeFromCurrentDevice" ||
        e === "GroupInvite" ||
        e === "SenderKeyDistribution" ||
        e === "RavenAction" ||
        e === "EditAction"
      );
    }
    function H(e) {
      return e === "RavenAction";
    }
    function G(e) {
      return e.originalTs != null ? e.originalTs : z(e);
    }
    function z(e) {
      return e.serverTs != null ? e.serverTs : e.ts;
    }
    function j(e) {
      return e.sortOrderMs != null ? e.sortOrderMs : z(e) * 1e3;
    }
    function K(e, t) {
      return e.serverTs != null ? Math.max(t + 1, e.serverTs * 1e3) : t + 1;
    }
    function Q(e) {
      switch (e.type) {
        case o("MAWMsgType").MSG_TYPE.TEXT:
          return e.msgContent;
        case o("MAWMsgType").MSG_TYPE.EDIT_ACTION:
          return e.editMsgContent;
        case o("MAWMsgType").MSG_TYPE.IMAGE:
        case o("MAWMsgType").MSG_TYPE.VIDEO:
        case o("MAWMsgType").MSG_TYPE.PTT:
        case o("MAWMsgType").MSG_TYPE.GIF:
        case o("MAWMsgType").MSG_TYPE.STICKER:
        case o("MAWMsgType").MSG_TYPE.DOCUMENT_FILE:
        case o("MAWMsgType").MSG_TYPE.REVOKED:
        case o("MAWMsgType").MSG_TYPE.DELETE_FOR_ME:
        case o("MAWMsgType").MSG_TYPE.FUTUREPROOF:
        case o("MAWMsgType").MSG_TYPE.CIPHERTEXT:
        case o("MAWMsgType").MSG_TYPE.UNAVAILABLE:
        case o("MAWMsgType").MSG_TYPE.ADMIN:
        case o("MAWMsgType").MSG_TYPE.EXPIRED_EPHEMERAL:
        case o("MAWMsgType").MSG_TYPE.EPHEMERAL_SETTING_ADMIN:
        case o("MAWMsgType").MSG_TYPE.EPHEMERAL_SYNC_RESPONSE:
        case o("MAWMsgType").MSG_TYPE.EPHEMERAL_SCREENSHOT_ACTION:
        case o("MAWMsgType").MSG_TYPE
          .EPHEMERAL_SETTING_CHANGE_FROM_CURRENT_DEVICE:
        case o("MAWMsgType").MSG_TYPE.GROUP_INVITE:
        case o("MAWMsgType").MSG_TYPE.XMA:
        case o("MAWMsgType").MSG_TYPE.RAVEN:
        case o("MAWMsgType").MSG_TYPE.BUMP_EXISTING_MESSAGE:
        case o("MAWMsgType").MSG_TYPE.RECEIVER_FETCH:
        case o("MAWMsgType").MSG_TYPE.GROUP_POLL_CREATE:
          return;
      }
      throw r("FBLogger")("messenger_web").mustfixThrow(
        'Invalid msg type for getMsgContent check: "%s"',
        e.type,
      );
    }
    function X(e) {
      return o("WAMsg").craftWAMsgIdString({
        author: e.author,
        chat: e.threadJid,
        externalId: e.externalId,
      });
    }
    function Y(t) {
      return (e || (e = o("I64"))).to_float(t);
    }
    ((l.NO_CONTENT_MESSAGE_TYPES_ALLOWLIST = u),
      (l.MIN_MSG_SORT_ORDER = c),
      (l.MAX_MSG_SORT_ORDER = d),
      (l.toCachedMsgId__UNSAFE_DO_NOT_USE = m),
      (l.toMsgId__UNSAFE_DO_NOT_USE = p),
      (l.toMsgId = _),
      (l.stanzaIdToMsgId = f),
      (l.instamadilloMsgIdToMsgId = g),
      (l.FUTUREPROOF_ALT_INDEX = h),
      (l.FUTUREPROOF_SPAM_ALT_INDEX = y),
      (l.SPAM_ALT_INDEX = C),
      (l.craftMsgId__DEPRECATED = R),
      (l.craftMsgIdV2 = L),
      (l.craftReactionId = E),
      (l.craftDebugMsgId = k),
      (l.isValidMsgId = T),
      (l.craftToBeReadAltIndex = D),
      (l.craftE2eeAdminMsgAltIndex = x),
      (l.craftCutoverAdminMsgAltIndex = $),
      (l.getInChatMsgIdFromMsgId = P),
      (l.msgIdsInChatLowerBound = N),
      (l.msgIdsInChatUpperBound = M),
      (l.isXMAMsg = w),
      (l.isMediaMsg = A),
      (l.isReceiverFetchStickerMsg = F),
      (l.isPhotoOrVideoMediaMsg = O),
      (l.isDocumentFileMediaMsg = B),
      (l.isContentMsg = W),
      (l.isUnrenderedMsg = q),
      (l.isAdminMsg = U),
      (l.isUnrenderedMsgType = V),
      (l.isRavenActionMsgType = H),
      (l.getOriginalTsFromMsg = G),
      (l.getCanonicalTsFromMsg = z),
      (l.getSortOrderWithFallback = j),
      (l.getSortOrderFromPrevious = K),
      (l.getMsgContent = Q),
      (l.getWAMsgId = X),
      (l.convertMsgRowId64 = Y));
  },
  98,
);
