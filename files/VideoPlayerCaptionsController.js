__d(
  "VideoPlayerCaptionsController",
  ["FBLogger", "JSResourceForInteraction"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("JSResourceForInteraction")(
        "VideoPlayerHTML5ApiCea608State",
      ).__setRef("VideoPlayerCaptionsController"),
      s = r("JSResourceForInteraction")(
        "VideoPlayerHTML5ApiWebVttState",
      ).__setRef("VideoPlayerCaptionsController");
    function u(t) {
      var n = t.captionsUrl,
        o = t.inbandCaptionsExpected,
        a = t.onCaptionsLoaded,
        i = null,
        l = null,
        u = null,
        c = null;
      function d(e) {
        var t = s
          .load()
          .then(function (n) {
            t === u &&
              (i = new n({
                captionsDisplay: null,
                onCaptionsLoaded: a,
                onReady: function (n) {
                  n.loadFromUrl(e);
                },
              }));
          })
          .catch(function (e) {
            t === u &&
              r("FBLogger")("comet_video_player")
                .catching(e)
                .mustfix(
                  "Failed to load the VideoPlayerHTML5ApiWebVttState module",
                );
          });
        return t;
      }
      function m() {
        var t = e
          .load()
          .then(function (e) {
            t === c &&
              (l = new e({
                captionsDisplay: null,
                onCaptionsLoaded: a,
                onReady: function (t) {
                  t.processQueue();
                },
              }));
          })
          .catch(function (e) {
            t === c &&
              r("FBLogger")("comet_video_player")
                .catching(e)
                .mustfix(
                  "Failed to load the VideoPlayerHTML5ApiCea608State module",
                );
          });
        return t;
      }
      return (
        n != null ? (u = d(n)) : o === !0 && (c = m()),
        {
          destroy: function () {
            (i && (i.destroy(), (i = null)),
              l && (l.destroy(), (l = null)),
              u && (u = null),
              c && (c = null));
          },
          getCaptionFormat: function () {
            return i ? "webvtt" : l ? "cea608" : null;
          },
          handleCea608BytesReceived: function (t) {
            l && l.enqueueBytes(t);
          },
          handleTimeUpdate: function (t) {
            if (i) {
              var e, n;
              return (
                i.source && i.source.handleTimeUpdate(t),
                (e =
                  (n = i) == null
                    ? void 0
                    : n.getCurrentScreenRepresentation()) != null
                  ? e
                  : null
              );
            } else if (l) {
              var r, o;
              return (
                l.source && l.source.handleTimeUpdate(t),
                (r =
                  (o = l) == null
                    ? void 0
                    : o.getCurrentScreenRepresentation()) != null
                  ? r
                  : null
              );
            }
            return null;
          },
          updateCaptionsUrl: function (t) {
            (i && (i.destroy(), (i = null)), t != null && (u = d(t)));
          },
          updateInbandCaptionsExpected: function (t) {
            (l && (l.destroy(), (l = null)), t && (c = m()));
          },
        }
      );
    }
    l.createCaptionsController = u;
  },
  98,
);
