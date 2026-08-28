__d(
  "ZenonMWTranslatorUtils",
  ["CurrentUser", "IGDWebUtils", "RpWebMqttEnabledAppIds.experimental"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Set(r("RpWebMqttEnabledAppIds.experimental").APP_IDS),
      s = "signalingDominantSpeakerUpdate",
      u = "signalingVideoUploadUpdate";
    function c() {
      var t = r("CurrentUser").getAppID();
      if (t != null && o("IGDWebUtils").isInstagramWebSupportedApp(Number(t)))
        return t;
      var n = t != null ? t : (0xc815778a650a).toString();
      return e.has(Number(n)) ? n : (0xc815778a650a).toString();
    }
    function d(e) {
      var t,
        n = (t = e.message.body) != null ? t : {},
        r = n.dominantSpeakerSignalingInfo,
        o = n.genericMessage,
        a = n.videoUploadSignalingInfo;
      return o ? o.topic : r ? s : a ? u : null;
    }
    ((l.getMWAppID = c), (l.getGenericDataMessageTopic = d));
  },
  98,
);
