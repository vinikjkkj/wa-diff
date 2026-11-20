__d(
  "WorkerSyncedMessagePortWithErrored",
  ["SimpleHook", "VideoPlayerNextgendashMP4Capture", "WorkerMessagePort"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
      function t(t, n) {
        var r;
        ((r = e.call(this, t, n) || this),
          (r.$WorkerSyncedMessagePortWithErrored$p_1 = !1),
          (r.mp4InspectorCapture = new (o("SimpleHook").SimpleHook)()),
          (r.$WorkerSyncedMessagePortWithErrored$p_2 = t));
        var a = function () {
          r.$WorkerSyncedMessagePortWithErrored$p_1 = !0;
        };
        return (r.onError.add(a), r.fullyConnected.catch(a), r);
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.onMessageHandler = function (n) {
          var t = n;
          if (
            t != null &&
            typeof t == "object" &&
            "type" in t &&
            t.type ===
              "comet_video_player_nextgendash__worker_to_main_mp4_capture"
          ) {
            var r = o(
              "VideoPlayerNextgendashMP4Capture",
            ).parseMP4CaptureMessage(t);
            if (r != null)
              try {
                var a;
                (a = this.mp4InspectorCapture) == null || a.call(r);
              } catch (e) {}
            return;
          }
          e.prototype.onMessageHandler.call(this, n);
        }),
        (n.postMP4InspectorCapture = function (t) {
          this.$WorkerSyncedMessagePortWithErrored$p_2.postMessage(
            {
              event: t,
              type: "comet_video_player_nextgendash__worker_to_main_mp4_capture",
            },
            t.entry == null ? [] : [t.entry.data.buffer],
          );
        }),
        (n.hasErrored = function () {
          return this.$WorkerSyncedMessagePortWithErrored$p_1;
        }),
        t
      );
    })(o("WorkerMessagePort").WorkerSyncedMessagePort);
    l.WorkerSyncedMessagePortWithErrored = e;
  },
  98,
);
