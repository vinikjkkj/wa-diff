__d(
  "VideoUploadFileValidator",
  ["errorCode", "fbt", "cr:909496", "cr:909497", "react", "vulture"],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = n("react")),
      c = 250,
      d = [
        1363019, 1363020, 1363021, 1363022, 1363023, 1363024, 1363025, 1363026,
        1363027, 1363030, 1363031, 1363032, 1363033, 1363038, 1363039, 1363040,
        1363048, 1363143,
      ],
      m = ["VIDEO__INVALID_GUIDE_DATA"],
      p = (function () {
        "use strict";
        function e(e) {
          this.$1 = e;
        }
        var t = e.prototype;
        return (
          (t.validate = function (t, n) {
            return (
              this.$2(t) &&
              this.$3(t) &&
              this.$4(t) &&
              this.$5(t.getExtension() === "gif", n)
            );
          }),
          (t.getValidationErrorMessage = function (t, n) {
            return (
              this.$6(t) ||
              this.$7(t) ||
              this.$8(t) ||
              this.$9(t.getExtension() === "gif", n)
            );
          }),
          (e.canReplaceVideoForError = function (t) {
            return (
              n("vulture")("GXIBEX7SKQtgztutRnjhZ9IvfSk="),
              t ? (m.indexOf(t) > -1 ? !1 : d.indexOf(t) > -1) : !0
            );
          }),
          (t.$2 = function (t) {
            var e = this.$6(t);
            return e
              ? (n("cr:909496") !== null &&
                  n("cr:909496").show(e.summary, e.description),
                !1)
              : !0;
          }),
          (t.$6 = function (t) {
            var e;
            if (
              !this.$1.extensions[
                (e = t.getExtension()) == null ? void 0 : e.toLowerCase()
              ]
            ) {
              var r = "http://www.facebook.com/help/218673814818907/",
                o = u.jsx(n("cr:909497"), {
                  target: "_blank",
                  href: r,
                  children: s._(/*BTDS*/ "recommended formats"),
                });
              return {
                summary: s._(/*BTDS*/ "Unsupported File Format"),
                description: s._(
                  /*BTDS*/ "Sorry, the file you selected is in a format that we don't support. Please use one of our {link} for video files.",
                  [s._param("link", o)],
                ),
              };
            }
          }),
          (t.$3 = function (t) {
            var e = this.$7(t);
            return e
              ? (n("cr:909496") !== null &&
                  n("cr:909496").show(e.summary, e.description),
                !1)
              : !0;
          }),
          (t.$7 = function (t) {
            var e = t.getFile && t.getFile();
            if (!(e == null || e.name == null)) {
              var n = e.name,
                r = n.lastIndexOf("\\");
              r === -1 && (r = n.lastIndexOf("/"));
              var o = r === -1 ? n : n.substring(r + 1);
              if (!(o.length <= c))
                return {
                  summary: s._(/*BTDS*/ "Video filename too long"),
                  description: s._(
                    /*BTDS*/ "The filename of the video you tried to upload is too long. The maximum length is {max-length} characters. Please rename the file and try again.",
                    [s._param("max-length", c)],
                  ),
                };
            }
          }),
          (t.$4 = function (t) {
            var e = this.$8(t);
            return e
              ? (n("cr:909496") !== null &&
                  n("cr:909496").show(e.summary, e.description),
                !1)
              : !0;
          }),
          (t.$8 = function (t) {
            var e;
            if (t.getSize() !== null)
              return (
                t.getSize() < this.$1.minSize && (e = this.$10()),
                t.getSize() > this.$1.maxSize && (e = this.$11()),
                e
              );
          }),
          (t.$10 = function () {
            var e = Math.round(this.$1.minSize / 1024);
            return {
              summary: s._(/*BTDS*/ "Video File Too Small"),
              description: s._(
                /*BTDS*/ "The video file you tried to upload is too small. The minimum size for a video file is {min-size} KB. Please try again with a larger file.",
                [s._param("min-size", e)],
              ),
            };
          }),
          (t.$11 = function () {
            var e = Math.floor(this.$1.maxSize / 1024 / 1024);
            return {
              summary: s._(/*BTDS*/ "Video File Too Large"),
              description: s._(
                /*BTDS*/ "The video file you tried to upload is too large. The maximum size for a video file is {max-size} MB. Please try again with a smaller file.",
                [s._param("max-size", e)],
              ),
            };
          }),
          (t.$5 = function (t, r) {
            var e = this.$9(t, r);
            return e
              ? (n("cr:909496") !== null &&
                  n("cr:909496").show(e.summary, e.description),
                !1)
              : !0;
          }),
          (t.$9 = function (t, n) {
            var e;
            if (n) {
              var r = n.format.duration;
              if (
                (r &&
                  (r > this.$1.maxLength && (e = this.$12()),
                  r < this.$1.minLength && !t && (e = this.$13())),
                !(!n.streams || !n.streams.primaryVideo))
              ) {
                var o = n.streams.primaryVideo.width,
                  a = n.streams.primaryVideo.height,
                  i = 0,
                  l = 0;
                (n.videoPlayerData !== null &&
                  ((i = n.videoPlayerData.height),
                  (l = n.videoPlayerData.width)),
                  this.$1.acceptDimensionsFromPlayer &&
                    l !== 0 &&
                    i !== 0 &&
                    ((o = l), (a = i)),
                  !n.streams.primaryVideo &&
                    n.streams.primaryAudio &&
                    (e = this.$14()),
                  o < this.$1.minWidth && (e = this.$15()),
                  a < this.$1.minHeight && (e = this.$16()));
                var s = o / a;
                return (
                  this.$1.require16to9AspectRatio &&
                    (s > 2 || s < 1.6) &&
                    (e = this.$17()),
                  this.$1.minAspectRatio &&
                    s < this.$1.minAspectRatio &&
                    (e = this.$18()),
                  this.$1.maxAspectRatio &&
                    s > this.$1.maxAspectRatio &&
                    (e = this.$19()),
                  e
                );
              }
            }
          }),
          (t.$12 = function () {
            return this.$1.source === "profile_video"
              ? {
                  summary: s._(/*BTDS*/ "Profile Video Duration Too Long"),
                  description: s._(
                    /*BTDS*/ "The maximum length is {max-length} seconds. Please upload a shorter video.",
                    [s._param("max-length", this.$1.maxLength)],
                  ),
                }
              : this.$1.source === "event_cover_video"
                ? {
                    summary: s._(
                      /*BTDS*/ "Event Cover Video Duration Too Long",
                    ),
                    description: s._(
                      /*BTDS*/ "Videos can't be longer than {max-length} seconds.",
                      [s._param("max-length", this.$1.maxLength)],
                    ),
                  }
                : {
                    summary: s._(/*BTDS*/ "Video Duration Too Long"),
                    description: s._(
                      /*BTDS*/ "The duration of the video you tried to upload is too long. The maximum duration for a video is {max-length} minutes. Please upload a shorter video.",
                      [
                        s._param(
                          "max-length",
                          Math.round(this.$1.maxLength / 60),
                        ),
                      ],
                    ),
                  };
          }),
          (t.$13 = function () {
            return {
              summary: s._(/*BTDS*/ "Video File Too Short"),
              description: s._(
                /*BTDS*/ '_j{"second":"The duration of the video you tried to upload is too short. The minimum length for a video is {min-length} second. Please upload a longer video.","seconds":"The duration of the video you tried to upload is too short. The minimum length for a video is {min-length} seconds. Please upload a longer video."}',
                [
                  s._enum(this.$1.minLength === 1 ? "second" : "seconds", {
                    second: "second",
                    seconds: "seconds",
                  }),
                  s._param("min-length", this.$1.minLength),
                ],
              ),
            };
          }),
          (t.$14 = function () {
            n("vulture")("INKG3L69H5R65NZ1WJ71126FvrI=");
            var e =
                "http://www.facebook.com/help/?faq=218673814818907#What-formats-of-video-files-can-I-upload?",
              t = u.jsx(n("cr:909497"), {
                href: e,
                children: s._(/*BTDS*/ "supported video format"),
              });
            return {
              summary: s._(/*BTDS*/ "No Video Detected"),
              description: s._(
                /*BTDS*/ "It looks like you're trying to upload a file that isn't a video. Please try uploading a {supported-video-format link}",
                [s._param("supported-video-format link", t)],
              ),
            };
          }),
          (t.$15 = function () {
            return {
              summary: s._(/*BTDS*/ "Video Width Too Narrow"),
              description: s._(
                /*BTDS*/ "The width of the video you tried to upload is too short. The minimum width for a video is {min-width}. Please upload a wider video.",
                [s._param("min-width", this.$1.minWidth)],
              ),
            };
          }),
          (t.$17 = function () {
            return (
              n("vulture")("uxlnhk-6pEg8Fk9bfORWCRp4alE="),
              {
                summary: s._(/*BTDS*/ "Problem Uploading Video"),
                description: s._(
                  /*BTDS*/ "Videos look best when they have a 16:9 aspect ratio. Please edit your video and upload again.",
                ),
              }
            );
          }),
          (t.$16 = function () {
            return {
              summary: s._(/*BTDS*/ "Video Height Too Short"),
              description: s._(
                /*BTDS*/ "The height of the video you tried to upload is too short. The minimum height for a video is {min-height}. Please upload a taller video.",
                [s._param("min-height", this.$1.minHeight)],
              ),
            };
          }),
          (t.$19 = function () {
            return {
              summary: s._(/*BTDS*/ "Video Too Wide"),
              description: s._(
                /*BTDS*/ "The video you selected is too wide. Aspect ratios for videos need to be between {max_aspect_ratio} and {min_aspect_ratio}. Please record and upload a taller video.",
                [
                  s._param("max_aspect_ratio", this.$1.maxAspectRatio + ":1"),
                  s._param("min_aspect_ratio", this.$1.minAspectRatio + ":1"),
                ],
              ),
            };
          }),
          (t.$18 = function () {
            return {
              summary: s._(/*BTDS*/ "Video Too Tall"),
              description: s._(
                /*BTDS*/ "The video you selected is too tall. Aspect ratios for videos need to be between {max_aspect_ratio} and {min_aspect_ratio}. Please record and upload a narrower video.",
                [
                  s._param("max_aspect_ratio", this.$1.maxAspectRatio + ":1"),
                  s._param("min_aspect_ratio", this.$1.minAspectRatio + ":1"),
                ],
              ),
            };
          }),
          e
        );
      })();
    a.exports = p;
  },
  130,
);
