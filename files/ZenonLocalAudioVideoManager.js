__d(
  "ZenonLocalAudioVideoManager",
  [
    "CancelablePromise",
    "EventEmitter",
    "Log",
    "ODS",
    "ZenonActorHooks",
    "ZenonAppFeaturesUtils",
    "ZenonLocalAudioVideoManagerUtils",
    "ZenonLocalAudioVideoTypes",
    "ZenonLocalMediaSDK",
    "ZenonMediaActionLogger",
    "ZenonMediaDevicesUtils",
    "ZenonODSLogger",
    "ZenonVideoConstraintUtils",
    "ZenonWebRTCWrapper",
    "asyncToGeneratorRuntime",
    "err",
    "promiseDone",
    "uuidv4",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["requestAudio"],
      s = ["requestVideo"],
      u = ["facingMode"],
      c,
      d = 1,
      m = "zenon_local_audio_video_manager",
      p = "ZenonLocalAudioVideoManager",
      _ = (function (t) {
        function a() {
          var e;
          return (
            (e = t.call(this) || this),
            (e.$ZenonLocalAudioVideoManager$p_5 = {
              audioConstraints: Object.freeze({}),
              videoConstraints: Object.freeze({}),
            }),
            (e.$ZenonLocalAudioVideoManager$p_1 = {}),
            (e.$ZenonLocalAudioVideoManager$p_2 = {}),
            (e.$ZenonLocalAudioVideoManager$p_3 = {
              audio: null,
              muteDetectionAudio: null,
              previewAudio: null,
              previewVideo: null,
              screen: null,
              screenAudio: null,
              video: null,
            }),
            (e.$ZenonLocalAudioVideoManager$p_4 = {
              audio: null,
              muteDetectionAudio: null,
              previewAudio: null,
              previewVideo: null,
              screen: null,
              screenAudio: null,
              video: null,
            }),
            (e.$ZenonLocalAudioVideoManager$p_6 = {
              audio: 0,
              previewAudio: 0,
              previewVideo: 0,
              video: 0,
            }),
            e
          );
        }
        babelHelpers.inheritsLoose(a, t);
        var i = a.prototype;
        return (
          (i.retain = function (t) {
            var e = o("ZenonLocalAudioVideoTypes").TrackType[t];
            this.$ZenonLocalAudioVideoManager$p_6[e]++;
          }),
          (i.release = function (t) {
            var e = o("ZenonLocalAudioVideoTypes").TrackType[t];
            (this.$ZenonLocalAudioVideoManager$p_6[e]--,
              this.$ZenonLocalAudioVideoManager$p_6[e] < 0 &&
                (this.$ZenonLocalAudioVideoManager$p_7(
                  "Attempted to decrement retain count on ${type} more than it was retained. This indicates a bug in our codebase.",
                ),
                (this.$ZenonLocalAudioVideoManager$p_6[e] = 0)),
              this.$ZenonLocalAudioVideoManager$p_6[e] === 0 &&
                this.$ZenonLocalAudioVideoManager$p_8(t));
          }),
          (i.setLocalAudioAndVideo = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t, n, r) {
                var a = babelHelpers.extends({}, e, { requestAudio: !0 }),
                  i = babelHelpers.extends({}, t, { requestVideo: !0 }),
                  l;
                switch (n) {
                  case o("ZenonLocalAudioVideoTypes")
                    .ZenonLocalMediaFallbackStrategy.None:
                    (o(
                      "ZenonLocalAudioVideoManagerUtils",
                    ).validateVideoConstraints(t),
                      (l = yield this.$ZenonLocalAudioVideoManager$p_9(a, i)));
                    break;
                  case o("ZenonLocalAudioVideoTypes")
                    .ZenonLocalMediaFallbackStrategy.RelaxConstraints:
                    l = yield this.$ZenonLocalAudioVideoManager$p_10(a, i);
                    break;
                }
                return this.$ZenonLocalAudioVideoManager$p_11(
                  r,
                  l != null ? l : [],
                  e,
                  t,
                );
              },
            );
            function t(t, n, r, o) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.setLocalAudio = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t, n, a) {
                var i = o("ZenonLocalAudioVideoTypes").TrackType[e];
                try {
                  var l = this.$ZenonLocalAudioVideoManager$p_12(
                      n != null ? n : {},
                      {},
                    ),
                    s = l.audioConstraints,
                    u = yield this.$ZenonLocalAudioVideoManager$p_13(i, t, s);
                  if (u == null) return u;
                  if (a != null)
                    try {
                      u = yield a(u);
                    } catch (e) {
                      throw (
                        this.$ZenonLocalAudioVideoManager$p_14(
                          "Post-processing error while setting local audio track",
                          e.toString(),
                          r("err")("postProcessTrackFunction"),
                        ),
                        r("err")(e)
                      );
                    }
                  if (this.$ZenonLocalAudioVideoManager$p_6[i] === 0)
                    return this.$ZenonLocalAudioVideoManager$p_15(u);
                  if (
                    (this.$ZenonLocalAudioVideoManager$p_16(i, u),
                    (this.$ZenonLocalAudioVideoManager$p_1 =
                      n != null ? n : {}),
                    i === "audio")
                  ) {
                    var c = { constraints: s, contentType: "audio", track: u };
                    this.emit("trackUpdate", c);
                  }
                  return u;
                } catch (e) {
                  throw e;
                } finally {
                  this.$ZenonLocalAudioVideoManager$p_4[i] = null;
                }
              },
            );
            function t(t, n, r, o) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.createtNonReferenceCountedVideoTrack = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t, n) {
                var a = this.$ZenonLocalAudioVideoManager$p_12(
                    {},
                    t != null ? t : {},
                  ),
                  i = a.audioConstraints,
                  l = a.videoConstraints,
                  s;
                switch (e) {
                  case o("ZenonLocalAudioVideoTypes")
                    .ZenonLocalMediaFallbackStrategy.None:
                    (o(
                      "ZenonLocalAudioVideoManagerUtils",
                    ).validateVideoConstraints(l),
                      (s = yield this.$ZenonLocalAudioVideoManager$p_9(
                        babelHelpers.extends({}, i, { requestAudio: !1 }),
                        babelHelpers.extends({}, l, { requestVideo: !0 }),
                      )));
                    break;
                  case o("ZenonLocalAudioVideoTypes")
                    .ZenonLocalMediaFallbackStrategy.RelaxConstraints:
                    s = yield this.$ZenonLocalAudioVideoManager$p_10(
                      babelHelpers.extends({}, i, { requestAudio: !1 }),
                      babelHelpers.extends({}, l, { requestVideo: !0 }),
                    );
                    break;
                }
                var u = s != null ? s : [],
                  c = u[0];
                if (n != null)
                  try {
                    c = yield n(c);
                  } catch (e) {
                    throw (
                      this.$ZenonLocalAudioVideoManager$p_14(
                        "Post-processing error while setting local video track",
                        e.toString(),
                        r("err")("postProcessTrackFunction"),
                      ),
                      r("err")(e)
                    );
                  }
                return (
                  (this.$ZenonLocalAudioVideoManager$p_2 = t != null ? t : {}),
                  c
                );
              },
            );
            function t(t, n, r) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.setLocalVideo = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t, n, a) {
                var i = o("ZenonLocalAudioVideoTypes").TrackType[e];
                try {
                  var l = this.$ZenonLocalAudioVideoManager$p_12(
                      {},
                      n != null ? n : {},
                    ),
                    s = l.videoConstraints,
                    u = yield this.$ZenonLocalAudioVideoManager$p_17(i, t, s);
                  if (u == null) return u;
                  if (a != null)
                    try {
                      u = yield a(u);
                    } catch (e) {
                      throw (
                        this.$ZenonLocalAudioVideoManager$p_14(
                          "Post-processing error while setting local video track",
                          e.toString(),
                          r("err")("postProcessTrackFunction"),
                        ),
                        r("err")(e)
                      );
                    }
                  if (this.$ZenonLocalAudioVideoManager$p_6[i] <= 0)
                    return this.$ZenonLocalAudioVideoManager$p_15(u);
                  if (
                    (this.$ZenonLocalAudioVideoManager$p_16(i, u),
                    (this.$ZenonLocalAudioVideoManager$p_2 =
                      n != null ? n : {}),
                    i === "video")
                  ) {
                    var c = { constraints: s, contentType: "video", track: u };
                    this.emit("trackUpdate", c);
                  }
                  return u;
                } catch (e) {
                  throw e;
                } finally {
                  this.$ZenonLocalAudioVideoManager$p_4[i] = null;
                }
              },
            );
            function t(t, n, r, o) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.applyNewVideoCaptureConstraints = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t, n, r) {
                var o,
                  a =
                    (o = this.$ZenonLocalAudioVideoManager$p_3.video) == null
                      ? void 0
                      : o.webrtcStream.getVideoTracks();
                if (!(a == null || a.length === 0)) {
                  var i = { aspectRatio: e, frameRate: t, height: n, width: r },
                    l = this.$ZenonLocalAudioVideoManager$p_12({}, i),
                    s = l.videoConstraints;
                  if (
                    (yield a[0].applyConstraints(i),
                    this.$ZenonLocalAudioVideoManager$p_3.video)
                  ) {
                    var u = {
                      constraints: s,
                      contentType: "video",
                      track: this.$ZenonLocalAudioVideoManager$p_3.video,
                    };
                    this.emit("trackUpdate", u);
                  }
                }
              },
            );
            function t(t, n, r, o) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.setLocalScreen = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t, n) {
                (n === void 0 && (n = !1),
                  this.$ZenonLocalAudioVideoManager$p_4.screen != null &&
                    this.$ZenonLocalAudioVideoManager$p_4.screen.cancel());
                try {
                  var a = this.$ZenonLocalAudioVideoManager$p_12(
                      e != null ? e : {},
                      t != null ? t : {},
                    ),
                    i = a.audioConstraints,
                    l = a.videoConstraints;
                  (o(
                    "ZenonLocalAudioVideoManagerUtils",
                  ).validateVideoConstraints(l),
                    (this.$ZenonLocalAudioVideoManager$p_4.screen = new (r(
                      "CancelablePromise",
                    ))(
                      this.$ZenonLocalAudioVideoManager$p_18(
                        babelHelpers.extends({}, i, { requestAudio: n }),
                        babelHelpers.extends({}, l, { requestVideo: !0 }),
                      ),
                    )));
                  var s =
                      yield this.$ZenonLocalAudioVideoManager$p_4.screen.getPromise(),
                    u = s.filter(function (e) {
                      return e.contentType === "screen";
                    }),
                    c = u[0],
                    d = s.filter(function (e) {
                      return e.contentType === "screen_audio";
                    });
                  this.$ZenonLocalAudioVideoManager$p_16("screen", c);
                  var m = null;
                  d.length > 0 &&
                    this.getLocalScreenAudio() !== d[0] &&
                    ((m = d[0]),
                    this.$ZenonLocalAudioVideoManager$p_16("screenAudio", m));
                  var p = {
                    constraints: { audioConstraints: i, videoConstraints: l },
                    contentType: "screen",
                    screenAudioTrack: m,
                    screenVideoTrack: c,
                  };
                  return (this.emit("trackUpdate", p), s);
                } catch (e) {
                  throw e;
                } finally {
                  this.$ZenonLocalAudioVideoManager$p_4.screen = null;
                }
              },
            );
            function t(t, n, r) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.setDefaultConstraints = function (t) {
            this.$ZenonLocalAudioVideoManager$p_5 = t;
          }),
          (i.getLocalAudio = function () {
            return this.$ZenonLocalAudioVideoManager$p_3.audio;
          }),
          (i.getLocalPreviewAudio = function () {
            return this.$ZenonLocalAudioVideoManager$p_3.previewAudio;
          }),
          (i.getLocalMuteDetectionAudio = function () {
            return this.$ZenonLocalAudioVideoManager$p_3.muteDetectionAudio;
          }),
          (i.getLocalScreenAudio = function () {
            return this.$ZenonLocalAudioVideoManager$p_3.screenAudio;
          }),
          (i.getLocalScreen = function () {
            return this.$ZenonLocalAudioVideoManager$p_3.screen;
          }),
          (i.getLocalVideo = function () {
            return this.$ZenonLocalAudioVideoManager$p_3.video;
          }),
          (i.getLocalPreviewVideo = function () {
            return this.$ZenonLocalAudioVideoManager$p_3.previewVideo;
          }),
          (i.stopAllTracks = function () {
            for (var e of Object.entries(
              this.$ZenonLocalAudioVideoManager$p_3,
            )) {
              var t,
                n = e[0];
              ((t = this.$ZenonLocalAudioVideoManager$p_3[n]) == null ||
                t.webrtcTrack.stop(),
                (this.$ZenonLocalAudioVideoManager$p_3[n] = null));
            }
          }),
          (i.disableAudioTrack = function (t) {
            return this.$ZenonLocalAudioVideoManager$p_8(t);
          }),
          (i.disableVideoTrack = function (t) {
            return this.$ZenonLocalAudioVideoManager$p_8(t);
          }),
          (i.$ZenonLocalAudioVideoManager$p_13 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t, n) {
                var r = this,
                  a;
                switch (t) {
                  case o("ZenonLocalAudioVideoTypes")
                    .ZenonLocalMediaFallbackStrategy.None:
                    (this.$ZenonLocalAudioVideoManager$p_19(e),
                      (a = yield this.$ZenonLocalAudioVideoManager$p_20(
                        e,
                        this.$ZenonLocalAudioVideoManager$p_9(
                          babelHelpers.extends({}, n, { requestAudio: !0 }),
                          { requestVideo: !1 },
                        ),
                      ).catch(function (e) {
                        return r.$ZenonLocalAudioVideoManager$p_21(e);
                      })));
                    break;
                  case o("ZenonLocalAudioVideoTypes")
                    .ZenonLocalMediaFallbackStrategy.RelaxConstraints:
                    (this.$ZenonLocalAudioVideoManager$p_19(e),
                      (a = yield this.$ZenonLocalAudioVideoManager$p_20(
                        e,
                        this.$ZenonLocalAudioVideoManager$p_10(
                          babelHelpers.extends({}, n, { requestAudio: !0 }),
                          { requestVideo: !1 },
                        ),
                      ).catch(function (e) {
                        return r.$ZenonLocalAudioVideoManager$p_21(e);
                      })));
                    break;
                }
                var i = a != null ? a : [],
                  l = i[0];
                return l;
              },
            );
            function t(t, n, r) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.$ZenonLocalAudioVideoManager$p_17 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t, n) {
                var r = this,
                  a;
                switch (t) {
                  case o("ZenonLocalAudioVideoTypes")
                    .ZenonLocalMediaFallbackStrategy.None:
                    (o(
                      "ZenonLocalAudioVideoManagerUtils",
                    ).validateVideoConstraints(n),
                      this.$ZenonLocalAudioVideoManager$p_19(e),
                      (a = yield this.$ZenonLocalAudioVideoManager$p_22(
                        e,
                        this.$ZenonLocalAudioVideoManager$p_9(
                          { requestAudio: !1 },
                          babelHelpers.extends({}, n, { requestVideo: !0 }),
                        ),
                      ).catch(function (e) {
                        return r.$ZenonLocalAudioVideoManager$p_21(e);
                      })));
                    break;
                  case o("ZenonLocalAudioVideoTypes")
                    .ZenonLocalMediaFallbackStrategy.RelaxConstraints:
                    (this.$ZenonLocalAudioVideoManager$p_19(e),
                      (a = yield this.$ZenonLocalAudioVideoManager$p_22(
                        e,
                        this.$ZenonLocalAudioVideoManager$p_10(
                          { requestAudio: !1 },
                          babelHelpers.extends({}, n, { requestVideo: !0 }),
                        ),
                      ).catch(function (e) {
                        return r.$ZenonLocalAudioVideoManager$p_21(e);
                      })));
                    break;
                }
                var i = a != null ? a : [],
                  l = i[0];
                return l;
              },
            );
            function t(t, n, r) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.$ZenonLocalAudioVideoManager$p_11 = function (t, n, r, a) {
            var e = this,
              i = t
                ? o("ZenonLocalAudioVideoTypes").TrackType.PRIMARY_AUDIO
                : o("ZenonLocalAudioVideoTypes").TrackType.PREVIEW_AUDIO,
              l = t
                ? o("ZenonLocalAudioVideoTypes").TrackType.PRIMARY_VIDEO
                : o("ZenonLocalAudioVideoTypes").TrackType.PREVIEW_VIDEO;
            return n.map(function (n) {
              if (n.contentType === "audio") {
                if (e.$ZenonLocalAudioVideoManager$p_6[i] === 0)
                  return e.$ZenonLocalAudioVideoManager$p_15(n);
                if ((e.$ZenonLocalAudioVideoManager$p_16(i, n), t)) {
                  var o = { constraints: r, contentType: "audio", track: n };
                  e.emit("trackUpdate", o);
                }
              } else if (n.contentType === "video") {
                if (e.$ZenonLocalAudioVideoManager$p_6[l] === 0)
                  return e.$ZenonLocalAudioVideoManager$p_15(n);
                if ((e.$ZenonLocalAudioVideoManager$p_16(l, n), t)) {
                  var s = { constraints: a, contentType: "video", track: n };
                  e.emit("trackUpdate", s);
                }
              }
              return n;
            });
          }),
          (i.$ZenonLocalAudioVideoManager$p_8 = function (t) {
            var e = o("ZenonLocalAudioVideoTypes").TrackType[t];
            if (!this.$ZenonLocalAudioVideoManager$p_3[e]) return null;
            var n = this.$ZenonLocalAudioVideoManager$p_15(
              this.$ZenonLocalAudioVideoManager$p_3[e],
            );
            if (n && e === "audio") {
              var r = {
                constraints: babelHelpers.extends(
                  {},
                  this.$ZenonLocalAudioVideoManager$p_5.audioConstraints,
                  this.$ZenonLocalAudioVideoManager$p_1,
                ),
                contentType: "audio",
                track: n,
              };
              this.emit("trackUpdate", r);
            } else if (n && e === "video") {
              var a = {
                constraints: babelHelpers.extends(
                  {},
                  this.$ZenonLocalAudioVideoManager$p_5.videoConstraints,
                  this.$ZenonLocalAudioVideoManager$p_2,
                ),
                contentType: "video",
                track: n,
              };
              this.emit("trackUpdate", a);
            }
            return n;
          }),
          (i.$ZenonLocalAudioVideoManager$p_19 = function (t) {
            this.$ZenonLocalAudioVideoManager$p_4[t] != null &&
              this.$ZenonLocalAudioVideoManager$p_4[t].cancel();
          }),
          (i.$ZenonLocalAudioVideoManager$p_21 = function (t) {
            var e = t.isCanceled,
              n = t.result;
            if (
              (n &&
                Array.isArray(n) &&
                n[0] &&
                this.$ZenonLocalAudioVideoManager$p_15(n[0]),
              e == null || e === !1)
            )
              throw t;
          }),
          (i.$ZenonLocalAudioVideoManager$p_20 = function (t, n) {
            if (
              ((this.$ZenonLocalAudioVideoManager$p_4[t] = new (r(
                "CancelablePromise",
              ))(n)),
              this.$ZenonLocalAudioVideoManager$p_4[t] != null)
            )
              return this.$ZenonLocalAudioVideoManager$p_4[t].getPromise();
            throw r("err")("could not get audio tracks");
          }),
          (i.$ZenonLocalAudioVideoManager$p_22 = function (t, n) {
            if (
              ((this.$ZenonLocalAudioVideoManager$p_4[t] = new (r(
                "CancelablePromise",
              ))(n)),
              this.$ZenonLocalAudioVideoManager$p_4[t] != null)
            )
              return this.$ZenonLocalAudioVideoManager$p_4[t].getPromise();
            throw r("err")("could not get video tracks");
          }),
          (i.$ZenonLocalAudioVideoManager$p_15 = function (t) {
            return (
              (t.contentType === "video" || t.contentType === "audio") &&
                o("ZenonAppFeaturesUtils").shouldStopMediaTrackWhenMute() &&
                (t.webrtcTrack.stop(),
                this.$ZenonLocalAudioVideoManager$p_23(t)),
              (t.webrtcTrack.enabled = !1),
              babelHelpers.extends({}, t, { enabled: !1 })
            );
          }),
          (i.$ZenonLocalAudioVideoManager$p_23 = function (t) {
            t.webrtcTrack.readyState !== "ended" &&
              this.$ZenonLocalAudioVideoManager$p_14(
                "Stopping track failed: " + t.label,
                p,
                r("err")("Stopping track failed: " + t.label),
              );
          }),
          (i.$ZenonLocalAudioVideoManager$p_18 = function (t, n) {
            return o("ZenonLocalMediaSDK").getDisplayMedia(t, n);
          }),
          (i.$ZenonLocalAudioVideoManager$p_12 = function (t, n) {
            var e = babelHelpers.extends(
                {},
                this.$ZenonLocalAudioVideoManager$p_5.audioConstraints,
                t,
              ),
              r = babelHelpers.extends(
                {},
                this.$ZenonLocalAudioVideoManager$p_5.videoConstraints,
                n,
              );
            return { audioConstraints: e, videoConstraints: r };
          }),
          (i.$ZenonLocalAudioVideoManager$p_16 = function (t, n) {
            var e;
            ((e = this.$ZenonLocalAudioVideoManager$p_3[t]) == null ||
              e.webrtcTrack.stop(),
              (this.$ZenonLocalAudioVideoManager$p_3[t] = n));
          }),
          (i.$ZenonLocalAudioVideoManager$p_10 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                (this.$ZenonLocalAudioVideoManager$p_7(
                  "GetUserMediaWithRelaxConstraintsFallback audioConstraints: " +
                    JSON.stringify(e) +
                    " videoConstraints: " +
                    JSON.stringify(t),
                ),
                  (c || (c = o("ODS"))).bumpEntityKey(
                    4272,
                    m,
                    "gum_with_fallback.attempt",
                  ));
                try {
                  return yield this.$ZenonLocalAudioVideoManager$p_9(e, t);
                } catch (i) {
                  (c || (c = o("ODS"))).bumpEntityKey(
                    4272,
                    m,
                    "gum_with_fallback.no_retry_fallback",
                  );
                  var n = !1,
                    a = !1;
                  if (
                    ((i == null ? void 0 : i.name) === "NotReadableError"
                      ? ((n = !0), (a = !0))
                      : (i == null ? void 0 : i.name) ===
                          "OverconstrainedError" &&
                        ((n = t.requestVideo && Object.keys(t).length > 1),
                        (a = e.requestAudio && Object.keys(e).length > 1)),
                    n &&
                      this.$ZenonLocalAudioVideoManager$p_14(
                        "Removing video constraints: " + JSON.stringify(t),
                        i.toString(),
                        r("err")("GetUserMedia"),
                        "info",
                      ),
                    a &&
                      this.$ZenonLocalAudioVideoManager$p_14(
                        "Removing audio constraints: " + JSON.stringify(e),
                        i.toString(),
                        r("err")("GetUserMedia"),
                        "info",
                      ),
                    n || a)
                  )
                    return this.$ZenonLocalAudioVideoManager$p_9(
                      a ? { requestAudio: e.requestAudio } : e,
                      n ? { requestVideo: t.requestVideo } : t,
                    );
                  throw i != null
                    ? i
                    : r("err")(
                        p +
                          " Error calling #getUserMediaWithRelaxConstraintsFallback",
                      );
                }
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.$ZenonLocalAudioVideoManager$p_9 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                for (var n = 0; n < d; )
                  try {
                    return yield this.$ZenonLocalAudioVideoManager$p_24(e, t);
                  } catch (e) {
                    (o("Log").debug(
                      "getUserMediaWithRetries error: " + String(e),
                    ),
                      n++);
                  }
                return this.$ZenonLocalAudioVideoManager$p_24(e, t);
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.$ZenonLocalAudioVideoManager$p_24 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                var n = this.$ZenonLocalAudioVideoManager$p_25(e, t);
                o("ZenonActorHooks").ZenonActor.isEmployee() &&
                  r("promiseDone")(
                    o("ZenonMediaDevicesUtils").enumerateDevices(),
                  );
                var a =
                  "GetUserMedia: " +
                  JSON.stringify({
                    audioConstraints: n.audio,
                    tx: r("uuidv4")(),
                    videoConstraints: n.video,
                  });
                this.$ZenonLocalAudioVideoManager$p_7(a);
                try {
                  var i,
                    l = yield this.$ZenonLocalAudioVideoManager$p_26(n);
                  return (
                    [
                      (i = o("ZenonLocalAudioVideoManagerUtils"))
                        .LocalMediaEvents.ENDED,
                      i.LocalMediaEvents.MUTE,
                      i.LocalMediaEvents.UNMUTE,
                    ].forEach(function (e) {
                      o(
                        "ZenonLocalAudioVideoManagerUtils",
                      ).addEventListenerForEvent(
                        e,
                        l,
                        o("ZenonLocalAudioVideoManagerUtils")
                          .LocalMediaTypeCheckpoint.USER,
                      );
                    }),
                    i.logEventsForMediaStream(l, e, t),
                    i.convertToZenonImmutableMediaTrack(l, e, t)
                  );
                } catch (t) {
                  throw (
                    o("ZenonLocalAudioVideoManagerUtils").logMediaErrors(
                      e.requestAudio ? "Audio" : "Video",
                      p + " Error calling " + a,
                      t,
                    ),
                    t != null ? t : r("err")(p + " Error calling #getUserMedia")
                  );
                }
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.$ZenonLocalAudioVideoManager$p_26 = function (t) {
            var e = o(
                "ZenonLocalAudioVideoManagerUtils",
              ).cloneConstraintsWithExactDeviceId(t),
              n = e.constraints,
              r = e.hasIdealConstraints;
            try {
              return this.$ZenonLocalAudioVideoManager$p_27(n);
            } catch (e) {
              if (e.isCanceled || !r) throw e;
              return this.$ZenonLocalAudioVideoManager$p_27(t);
            }
          }),
          (i.$ZenonLocalAudioVideoManager$p_27 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = yield o("ZenonWebRTCWrapper").getUserMedia(e),
                  n = t.getVideoTracks(),
                  a = n[0];
                if (
                  (t.getTracks().map(function (e) {
                    if (e.kind === "video") {
                      var t = e.getSettings();
                      t.height ===
                        o("ZenonVideoConstraintUtils")
                          .CONSTRAINT_1080P_30FPS_CONFIG.height &&
                        t.width ===
                          o("ZenonVideoConstraintUtils")
                            .CONSTRAINT_1080P_30FPS_CONFIG.width &&
                        t.frameRate ===
                          o("ZenonVideoConstraintUtils")
                            .CONSTRAINT_1080P_30FPS_CONFIG.frameRate &&
                        r("ZenonODSLogger").logCounter(
                          "FULL_HD_CALL_INITIATED",
                        );
                    }
                  }),
                  (a == null ? void 0 : a.muted) === !0)
                ) {
                  (this.$ZenonLocalAudioVideoManager$p_7(
                    'Retry getUserMedia on muted video track: "' + a.id + '"',
                    a.id,
                  ),
                    t.getTracks().forEach(function (e) {
                      e.stop();
                    }),
                    (t = yield o("ZenonWebRTCWrapper").getUserMedia(e)));
                  var i = t.getVideoTracks(),
                    l = i[0];
                  (l == null ? void 0 : l.muted) === !0 &&
                    this.$ZenonLocalAudioVideoManager$p_7(
                      "Video track is still muted after retrying getUserMedia",
                      l.id,
                    );
                }
                return t;
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.$ZenonLocalAudioVideoManager$p_25 = function (t, n) {
            return {
              audio: this.$ZenonLocalAudioVideoManager$p_28(t),
              video: this.$ZenonLocalAudioVideoManager$p_29(n),
            };
          }),
          (i.$ZenonLocalAudioVideoManager$p_28 = function (n) {
            var t = n.requestAudio,
              r = babelHelpers.objectWithoutPropertiesLoose(n, e);
            return t === !1 ? !1 : Object.keys(r).length > 0 ? r : !0;
          }),
          (i.$ZenonLocalAudioVideoManager$p_29 = function (t) {
            var e = t.requestVideo,
              n = babelHelpers.objectWithoutPropertiesLoose(t, s);
            if (e === !1) return !1;
            if (Object.keys(n).length === 0) return !0;
            var r = n.facingMode,
              o = babelHelpers.objectWithoutPropertiesLoose(n, u),
              a = babelHelpers.extends({}, o);
            return (r != null && (a.facingMode = { ideal: r }), a);
          }),
          (i.$ZenonLocalAudioVideoManager$p_7 = function (t, n) {
            r("ZenonMediaActionLogger").logEvent(
              babelHelpers.extends(
                { checkpoint: p + " " + t },
                n != null ? { mediaID: n } : {},
              ),
            );
          }),
          (i.$ZenonLocalAudioVideoManager$p_14 = function (t, n, o, a) {
            (a === void 0 && (a = "warn"),
              r("ZenonMediaActionLogger").logErrorToFbLogger(
                p + " " + t,
                n,
                o,
                a,
              ));
          }),
          a
        );
      })(r("EventEmitter")),
      f = new _();
    l.default = f;
  },
  98,
);
