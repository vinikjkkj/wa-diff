__d(
  "MAWGetAttachmentTypeForSendWrittenMsg",
  ["MAWCommonSetupBridge"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, r, a, i, l, s, u) {
      if (e === "ephemeralSettingMsg") return 24;
      if (a) return 43;
      if (e === "revokeMsg") return 26;
      if (i != null) return i;
      if (n) return 3;
      if ((r && l === !1) || s === !0) return 13;
      if (u === !0) return 6;
      var c =
        t != null
          ? o("MAWCommonSetupBridge").MEDIA_TYPE_TO_ATTACHMENT_TYPE.get(t)
          : null;
      return c != null ? c : 0;
    }
    l.getAttachmentTypeForSendWrittenMsg = e;
  },
  98,
);
