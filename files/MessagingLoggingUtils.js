__d(
  "MessagingLoggingUtils",
  ["FBLogger", "I64", "MessagingAttachmentType"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t) {
      var n = (e || (e = o("I64"))).to_int32(t);
      switch (n) {
        case r("MessagingAttachmentType").NONE:
          return 1;
        case r("MessagingAttachmentType").STICKER:
          return 4;
        case r("MessagingAttachmentType").IMAGE:
          return 8;
        case r("MessagingAttachmentType").ANIMATED_IMAGE:
          return 6;
        case r("MessagingAttachmentType").VIDEO:
          return 10;
        case r("MessagingAttachmentType").AUDIO:
          return 11;
        case r("MessagingAttachmentType").FILE:
          return 9;
        case r("MessagingAttachmentType").XMA:
          return 13;
        case r("MessagingAttachmentType").EPHEMERAL_IMAGE:
          return 8;
        case r("MessagingAttachmentType").EPHEMERAL_VIDEO:
          return 5;
        case r("MessagingAttachmentType").SELFIE_STICKER:
          return 22;
        case r("MessagingAttachmentType").SOUND_BITE:
          return 23;
        default:
          return 1;
      }
    }
    var u = 1,
      c = 2,
      d = 3,
      m = 4,
      p = 5,
      _ = 6,
      f = 7,
      g = 8,
      h = 9,
      y = 10;
    function C(e) {
      switch (e) {
        case 8:
        case 108:
        case 19:
          return [u];
        case 10:
        case 5:
          return [c];
        case 4:
        case 22:
        case 97:
        case 79:
        case 45:
        case 59:
        case 49:
        case 100:
          return [d];
        case 6:
          return [m];
        case 11:
        case 23:
        case 2:
        case 109:
        case 75:
          return [p];
        case 55:
        case 16:
        case 48:
          return [_];
        case 7:
        case 14:
          return [f];
        case 28:
          return [g];
        case 9:
        case 34:
          return [h];
        case 13:
        case 21:
        case 115:
        case 121:
        case 62:
          return [y];
        default:
          return [];
      }
    }
    var b = "@g.us";
    function v(e, t, n) {
      if (e != null && e !== "") {
        var o = e.endsWith(b) ? e.slice(0, -b.length) : e;
        if (/^\d+$/.test(o)) return o;
        r("FBLogger")("mw_log_send").warn(
          "deriveTransportThreadFbid: dropping non-numeric group jid (interop or malformed), thread_fbid falling back",
        );
      }
      return t.length === 1 ? t[0] : n;
    }
    ((l.convertI64ToAttachmentType = s),
      (l.mapAttachmentTypeToFbSendVec = C),
      (l.deriveTransportThreadFbid = v));
  },
  98,
);
