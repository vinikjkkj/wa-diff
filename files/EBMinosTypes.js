__d(
  "EBMinosTypes",
  ["$InternalEnum", "WAJids", "WALongInt"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e;
    }
    function s(e) {
      return e.endsWith(o("WAJids").MSGR_USER_DOMAIN)
        ? e.slice(0, -o("WAJids").MSGR_USER_DOMAIN.length)
        : null;
    }
    var u = o("WAJids").createJidUtils({ platform: "msgr" });
    function c(e) {
      return u.toUserJid(e);
    }
    function d(e) {
      return e;
    }
    function m(e) {
      return e;
    }
    function p(e) {
      return e;
    }
    function _(e) {
      return e;
    }
    function f(e) {
      return e;
    }
    function g(e) {
      return o("WALongInt").decimalStringToLongInt(new TextDecoder().decode(e));
    }
    function h(e) {
      return e;
    }
    function y(e) {
      return e;
    }
    function C(e) {
      return e;
    }
    function b(e) {
      return e;
    }
    function v(e) {
      return e;
    }
    function S(e) {
      return e;
    }
    function R(e) {
      return e;
    }
    function L(e) {
      return e;
    }
    function E(e) {
      return e;
    }
    function k(e) {
      return e;
    }
    function I(e) {
      return e;
    }
    function T(e) {
      return e;
    }
    function D(e) {
      return e;
    }
    function x(e) {
      return e;
    }
    function $(e) {
      return e;
    }
    function P(e) {
      return e;
    }
    function N(e) {
      return e;
    }
    function M(e) {
      return e;
    }
    function w(e) {
      return e;
    }
    function A(e) {
      return e;
    }
    function F(e) {
      return e;
    }
    function O(e) {
      return e;
    }
    function B(e) {
      return e;
    }
    function W(e) {
      return e;
    }
    function q(e) {
      return e;
    }
    function U(e) {
      return e;
    }
    function V(e) {
      return e;
    }
    function H(e) {
      return e;
    }
    var G = n("$InternalEnum")({
      INVALID: "-1",
      IMAGE: "0",
      PTT: "1",
      DOCUMENT: "3",
      VIDEO: "4",
      GIF: "5",
      STICKER: "6",
      XMA: "22",
      MESSENGER_PREVIEW: "25",
    });
    ((l.unsafeCastToUserFbId = e),
      (l.userJidToUserFbId = s),
      (l.userFbidToUserJid = c),
      (l.unsafeCastToMinosThreadId = d),
      (l.unsafeCastToEpochHead = m),
      (l.unsafeCastToEpochSelfSig = p),
      (l.unsafeCastToEpochPrevSig = _),
      (l.unsafeCastToEpochNumber = f),
      (l.unsafeCastToBase64StringIntToEpochNumber = g),
      (l.unsafeCastToEpochCreationTime = h),
      (l.unsafeCastToExportRootKey = y),
      (l.unsafeCastToMekId = C),
      (l.unsafeCastMekKey = b),
      (l.unsafeCastMekRosterHash = v),
      (l.unsafeCastToEncryptedMek = S),
      (l.unsafeCastToMekFbId = R),
      (l.unsafeCastToMekMiThreadId = L),
      (l.unsafeCastToBackupFbid = E),
      (l.unsafeCastToDeviceId = k),
      (l.unsafeCastToEncryptedMessage = I),
      (l.unsafeCastToEncryptedMessageSignature = T),
      (l.unsafeCastToDecryptedMessage = D),
      (l.unsafeCastToMailboxFbId = x),
      (l.unsafeCastToMailboxSigningPK = $),
      (l.unsafeCastToMailboxSigningSK = P),
      (l.unsafeCastToMailboxEncryptionPK = N),
      (l.unsafeCastToMailboxEncryptionSK = M),
      (l.unsafeCastToMailboxAuthPK = w),
      (l.unsafeCastToMailboxAuthSK = A),
      (l.unsafeCastToTransportSenderEphemeralPK = F),
      (l.unsafeCastToTransportSenderEphemeralKeySig = O),
      (l.unsafeCastToTransportSigningPK = B),
      (l.unsafeCastToTransportSigningSK = W),
      (l.unsafeCastToEpochFbId = q),
      (l.castToSupplementalOpToken = U),
      (l.unsafeCastToAttachmentAccessTokenSecret = V),
      (l.unsafeCastToAttachmentPrimaryKeySecret = H),
      (l.MinosAttachmentMediaType = G));
  },
  98,
);
