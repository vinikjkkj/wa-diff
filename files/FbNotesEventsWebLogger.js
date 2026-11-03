__d(
  "FbNotesEventsWebLogger",
  ["requireDeferred"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("requireDeferred")("FbNotesEventsFalcoEvent").__setRef(
        "FbNotesEventsWebLogger",
      ),
      s = "2220391788200892";
    function u(t) {
      var n = t.action,
        r = t.audioClusterId,
        o = t.creationSessionId,
        a = t.entrypoint,
        i = t.errorCode,
        l = t.errorMessage,
        u = t.extras,
        c = t.hasText,
        d = t.noteContentTypes,
        m = t.noteId,
        p = t.noteOriginAppId,
        _ = p === void 0 ? s : p,
        f = t.noteType,
        g = t.noteVisibility,
        h = t.textLength;
      e.onReady(function (e) {
        var t = {
          action: n,
          audio_cluster_id: r,
          creation_session_id: o,
          entrypoint: a,
          error_code: i,
          error_message: l,
          extras: u,
          has_text: c,
          note_content_types: d,
          note_id: m,
          note_origin_app_id: _,
          note_type: f,
          note_visibility: g,
          text_length: h,
        };
        e.log(function () {
          return t;
        });
      });
    }
    l.logFbNotesEvent = u;
  },
  98,
);
