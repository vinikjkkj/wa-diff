__d(
  "EBSourceTypes",
  ["LSMEBTaskCreationSource"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      switch (e) {
        case "media_gallery_restore":
          return r("LSMEBTaskCreationSource").MEDIA_GALLERY_RESTORE;
        case "file_gallery_restore":
          return r("LSMEBTaskCreationSource").FILE_GALLERY_RESTORE;
        case "ignition_delta":
          return r("LSMEBTaskCreationSource").E2EE_IGNITION;
        case "ignition_recovery_probe":
          return r("LSMEBTaskCreationSource").UNKNOWN;
        case "messenger_dyi":
          return r("LSMEBTaskCreationSource").MSGR_DYI;
        case "message_probe":
          return r("LSMEBTaskCreationSource").UNKNOWN;
        case "unknown":
          return r("LSMEBTaskCreationSource").UNKNOWN;
        default:
          return r("LSMEBTaskCreationSource").UNKNOWN;
      }
    }
    l.castTaskCreationSourceToLSTaskSource = e;
  },
  98,
);
