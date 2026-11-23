__d(
  "AdsCreativeFlexPushUploadEndedLoggingUtils",
  ["AdsInterfacesLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "push_model";
    function s(t, n, o) {
      var a,
        i = t.droppedAdgroupIDs,
        l = t.uploaderKey,
        s = t.videoID,
        u = JSON.stringify(
          Object.freeze({
            reason: n,
            error_callsite: o != null ? o : "none",
            video_id: s,
            uploader_key: l,
            dropped_selection: i.length > 0,
            dropped_adgroup_ids: i,
          }),
        );
      r("AdsInterfacesLogger").log({
        eventName: "creative_flex_debug",
        data:
          ((a = {}),
          (a.adgroup_id = i[0]),
          (a.targeting_ui_event_data = "upload_ended_before_encoding"),
          (a.subsequent_data = u),
          (a.event_source = e),
          a),
      });
    }
    l.logPushModelUploadEndedBeforeEncoding = s;
  },
  98,
);
