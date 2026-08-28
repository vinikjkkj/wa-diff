__d(
  "WebrtcSignalingCommonTypes",
  ["$InternalEnum"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e,
      l = (e = n("$InternalEnum"))({
        DEFAULT_AUDIO: 0,
        DEFAULT_VIDEO: 1,
        SCREEN_AUDIO: 2,
        SCREEN_VIDEO: 3,
        CUSTOM_VIDEO: 4,
        CUSTOM_AUDIO: 5,
      }),
      s = e({
        OLD_CLIENT_PLATFORM_STACK: 0,
        RSYS_X: 1,
        IG_OLD_STACK: 2,
        MLITE_OLD_STACK: 3,
        SCOTCH: 4,
        ZENON: 5,
      }),
      u = e({
        NONE: 0,
        AVATAR: 1,
        AUGMENTED_CALLING: 2,
        SCENE_COMPOSITION: 3,
        STEREO_VIDEO: 4,
        SHARED_STATE: 5,
        CODEC_AVATAR_2D: 6,
        CODEC_AVATAR_2D_IMU: 7,
        CV_CAMERA_FRAMES: 8,
        CODEC_AVATAR_3D_FACE: 9,
        CODEC_AVATAR_3D_BODY: 10,
        CODEC_AVATAR_SELF_VIEW: 11,
        CODEC_AVATAR_3D_MESH: 12,
        CODEC_AVATAR_3D_TEXTURE: 13,
      }),
      c = e({
        NONE: 0,
        AMBISONIC: 1,
        CONVERSATION_BOT: 2,
        MONOMIX: 3,
        MONOSTREAM: 4,
      });
    a.exports = {
      ClientStack: s,
      CustomAudioContentType: c,
      CustomVideoContentType: u,
      TrackLabel: l,
    };
  },
  null,
);
