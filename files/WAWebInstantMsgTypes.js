__d(
  "WAWebInstantMsgTypes",
  ["WAWebABProps", "WAWebMsgType"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return (
        e === o("WAWebMsgType").MSG_TYPE.INSTANT_IMAGE ||
        e === o("WAWebMsgType").MSG_TYPE.INSTANT_VIDEO
      );
    }
    function s(t) {
      return !e(t) ||
        !o("WAWebABProps").getABPropConfigValue("instants_receiver_enabled")
        ? !1
        : t !== o("WAWebMsgType").MSG_TYPE.INSTANT_VIDEO ||
            o("WAWebABProps").getABPropConfigValue(
              "android_instants_video_enabled",
            );
    }
    ((l.isInstantMsgType = e), (l.isInstantTypeReceiverEnabled = s));
  },
  98,
);
