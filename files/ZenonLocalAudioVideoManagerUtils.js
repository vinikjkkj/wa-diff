__d(
  "ZenonLocalAudioVideoManagerUtils",
  [
    "$InternalEnum",
    "FBLogger",
    "ODS",
    "ZenonMediaActionLogger",
    "ZenonMediaLoggingUtils",
    "ZenonMediaUtils",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["deviceId"],
      s = ["deviceId"],
      u,
      c = "zenon_local_media_manager_v3",
      d = n("$InternalEnum")({
        ENDED: "ended",
        MUTE: "mute",
        UNMUTE: "unmute",
      }),
      m = n("$InternalEnum")({ DISPLAY: "display", USER: "user" });
    function p(e, t, n, o, a) {
      return (
        o === void 0 && (o = !1),
        e.getTracks().map(function (i) {
          var l = {
            contentHint: i.kind === "audio" ? t.contentHint : n.contentHint,
            isRemote: !1,
            isUserMuted: !1,
            stream: e,
            trackType:
              o && i.kind === "video"
                ? "screen"
                : o && i.kind === "audio"
                  ? "screen_audio"
                  : void 0,
          };
          return r("ZenonMediaUtils").convertToZenonImmutableMediaTrack(
            i,
            l,
            null,
            a != null ? a : "",
          );
        })
      );
    }
    function _(e) {
      var t = e.aspectRatio,
        n = e.frameRate,
        o = e.height,
        a = e.width;
      if (
        ((n == null ? void 0 : n.exact) != null &&
          ((n == null ? void 0 : n.exact) < 0 ||
            (n == null ? void 0 : n.exact) > 60)) ||
        ((n == null ? void 0 : n.min) != null &&
          ((n == null ? void 0 : n.min) < 0 ||
            (n == null ? void 0 : n.min) > 60)) ||
        ((n == null ? void 0 : n.max) != null &&
          ((n == null ? void 0 : n.max) < 0 ||
            (n == null ? void 0 : n.max) > 60)) ||
        ((n == null ? void 0 : n.ideal) != null &&
          ((n == null ? void 0 : n.ideal) < 0 ||
            (n == null ? void 0 : n.ideal) > 60))
      )
        throw r("err")("The frame rate must be between: 0 and 60");
      if (
        ((o == null ? void 0 : o.exact) != null &&
          (o == null ? void 0 : o.exact) < 1) ||
        ((o == null ? void 0 : o.min) != null &&
          (o == null ? void 0 : o.min) < 1) ||
        ((o == null ? void 0 : o.max) != null &&
          (o == null ? void 0 : o.max) < 1) ||
        ((o == null ? void 0 : o.ideal) != null &&
          (o == null ? void 0 : o.ideal) < 1)
      )
        throw r("err")("The height of the video must be at least 1");
      if (
        ((a == null ? void 0 : a.exact) != null &&
          (a == null ? void 0 : a.exact) < 1) ||
        ((a == null ? void 0 : a.min) != null &&
          (a == null ? void 0 : a.min) < 1) ||
        ((a == null ? void 0 : a.max) != null &&
          (a == null ? void 0 : a.max) < 1) ||
        ((a == null ? void 0 : a.ideal) != null &&
          (a == null ? void 0 : a.ideal) < 1)
      )
        throw r("err")("The width of the video must be at least 1");
      if (
        ((t == null ? void 0 : t.exact) != null &&
          (t == null ? void 0 : t.exact) < 0) ||
        ((t == null ? void 0 : t.min) != null &&
          (t == null ? void 0 : t.min) < 0) ||
        ((t == null ? void 0 : t.max) != null &&
          (t == null ? void 0 : t.max) < 0) ||
        ((t == null ? void 0 : t.ideal) != null &&
          (t == null ? void 0 : t.ideal) < 1)
      )
        throw r("err")("The aspect ratio cannot be negative");
    }
    function f(t) {
      var n,
        r,
        o = JSON.parse(JSON.stringify(t)),
        a = !1;
      if (
        (o == null || (n = o.audio) == null || (n = n.deviceId) == null
          ? void 0
          : n.ideal) != null
      ) {
        var i = o.audio,
          l = i.deviceId,
          u = babelHelpers.objectWithoutPropertiesLoose(i, e);
        ((o.audio = babelHelpers.extends({}, u, {
          deviceId: { exact: l.ideal },
        })),
          (a = !0));
      }
      if (
        o.video != null &&
        typeof o.video != "boolean" &&
        ((r = o.video.deviceId) == null ? void 0 : r.ideal) != null
      ) {
        var c = o.video,
          d = c.deviceId,
          m = babelHelpers.objectWithoutPropertiesLoose(c, s);
        ((o.video = babelHelpers.extends({}, m, {
          deviceId: { exact: d.ideal },
        })),
          (a = !0));
      }
      return { constraints: o, hasIdealConstraints: a };
    }
    function g(e, t, n) {
      t.getTracks().forEach(function (t) {
        var o = t.id,
          a = t.kind;
        t.addEventListener(e, function () {
          r("ZenonMediaActionLogger").logEvent({
            checkpoint:
              a + ": " + o + " fired " + e + " event for " + n + " media",
          });
        });
      });
    }
    function h(e, t, n) {
      (v(e), S(e), R(e), b(e, t, n));
    }
    function y(e, t, n) {
      (r("ZenonMediaActionLogger").logErrorToFbLogger(
        t,
        "GetUserMedia",
        n,
        "warn",
      ),
        typeof n == "object" &&
          ((n == null ? void 0 : n.name) === "Error" ||
            (n == null ? void 0 : n.name) === "TypeError") &&
          r("FBLogger")("rtc_www")
            .catching(n)
            .mustfix("TypeError in getUserMedia"));
      var o =
        e === "Audio"
          ? "GetUserMedia_Audio_Error"
          : e === "Video"
            ? "GetUserMedia_Video_Error"
            : "GetUserMedia_No_Media_Error";
      r("ZenonMediaActionLogger").logErrorToFbLogger(t, o, n, "warn");
    }
    function C(e) {
      var t =
          "Supported capabilities: " +
          JSON.stringify(
            e.getCapabilities == null ? void 0 : e.getCapabilities(),
          ),
        n =
          "Applied settings: " +
          JSON.stringify(e.getSettings == null ? void 0 : e.getSettings());
      return [t, n].join(" - ");
    }
    function b(e, t, n) {
      e.getTracks().forEach(function (e) {
        r("ZenonMediaActionLogger").logEvent({ checkpoint: C(e) });
        var a = e.getSettings == null ? void 0 : e.getSettings();
        if (a != null) {
          var i = [];
          if (e.kind === "audio" && t !== void 0) {
            if (
              t.echoCancellation !== void 0 &&
              a.echoCancellation !== t.echoCancellation
            ) {
              var l;
              (i.push(
                "echoCancellation given(" +
                  JSON.stringify(t.echoCancellation) +
                  ") actual(" +
                  JSON.stringify(
                    (l = a.echoCancellation) != null ? l : "undefined",
                  ) +
                  ")",
              ),
                (u || (u = o("ODS"))).bumpEntityKey(
                  4272,
                  c,
                  "non_matching_constraints.audio",
                ));
            }
          } else if (e.kind === "video" && n !== void 0) {
            var s, d;
            if (
              a.frameRate !== void 0 &&
              ((s = n.frameRate) == null ? void 0 : s.ideal) !== a.frameRate
            ) {
              var m, p;
              (i.push(
                "frameRate given(" +
                  ((m = (p = n.frameRate) == null ? void 0 : p.ideal) != null
                    ? m
                    : "undefined") +
                  ") actual(" +
                  a.frameRate +
                  ")",
              ),
                (u || (u = o("ODS"))).bumpEntityKey(
                  4272,
                  c,
                  "non_matching_constraints.video",
                ));
            }
            if (
              a.aspectRatio !== void 0 &&
              ((d = n.aspectRatio) == null ? void 0 : d.ideal) !== a.aspectRatio
            ) {
              var _, f;
              (i.push(
                "aspectRatio given(" +
                  ((_ = (f = n.aspectRatio) == null ? void 0 : f.ideal) != null
                    ? _
                    : "undefined") +
                  ") actual(" +
                  a.aspectRatio +
                  ")",
              ),
                (u || (u = o("ODS"))).bumpEntityKey(
                  4272,
                  c,
                  "non_matching_constraints.video",
                ));
            }
          }
          i.length &&
            r("ZenonMediaActionLogger").logCheckpoint(
              "WARNING: Requested and applied constraints do not match for " +
                i.join("-"),
            );
        }
      });
    }
    function v(e) {
      e.getVideoTracks().some(function (e) {
        return "canvas" in e;
      }) &&
        r("ZenonMediaActionLogger").logEvent({
          checkpoint:
            "[ZP] CanvasCaptureMediaStreamTrack is present which indicates an extension",
        });
    }
    function S(e) {
      var t = e
        .getTracks()
        .map(r("ZenonMediaLoggingUtils").serializeMediaStreamTrack);
      r("ZenonMediaActionLogger").logEvent({
        checkpoint:
          'GetUserMedia returned stream with id "' +
          e.id +
          '" and tracks: [' +
          t.join(", ") +
          "]",
        mediaID: e.id,
      });
    }
    function R(e) {
      var t = e.getVideoTracks(),
        n = t[0];
      (n == null ? void 0 : n.muted) === !0 &&
        r("ZenonMediaActionLogger").logErrorToFbLogger(
          'GetUserMedia returned muted video track with id "' + n.id + '"',
          "MutedVideoTrack",
          r("err")("MutedVideoTrack"),
          "info",
        );
    }
    ((l.LocalMediaEvents = d),
      (l.LocalMediaTypeCheckpoint = m),
      (l.convertToZenonImmutableMediaTrack = p),
      (l.validateVideoConstraints = _),
      (l.cloneConstraintsWithExactDeviceId = f),
      (l.addEventListenerForEvent = g),
      (l.logEventsForMediaStream = h),
      (l.logMediaErrors = y));
  },
  98,
);
