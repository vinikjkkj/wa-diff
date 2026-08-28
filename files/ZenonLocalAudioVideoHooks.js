__d(
  "ZenonLocalAudioVideoHooks",
  [
    "Promise",
    "ZenonAppProvider",
    "ZenonCallsHooks",
    "ZenonLocalAudioVideoManager",
    "ZenonLocalAudioVideoTypes",
    "ZenonLocalMediaContext",
    "ZenonLoggingHooks",
    "ZenonProductConnectFunnel",
    "ZenonUserActionLogger",
    "ZenonVideoConstraintUtils",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "gkx",
    "qex",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = u.useCallback,
      d = u.useContext,
      m = u.useEffect,
      p = u.useRef,
      _ = "ZenonLocalAudioVideoHooks";
    function f(e, t, n) {
      return e && t != null && t > 0 && n != null && n > 0;
    }
    function g(t, a, i, l) {
      (l === void 0 && (l = !1),
        t ===
          o("ZenonLocalAudioVideoTypes").ZenonLocalMediaOwnershipType.Strong &&
          r("ZenonLocalAudioVideoManager").retain("PRIMARY_AUDIO"));
      try {
        var s;
        return (
          l === !0 &&
            (s = function (r) {
              return (
                (r.webrtcTrack.enabled = !1),
                (e || (e = n("Promise"))).resolve(
                  babelHelpers.extends({}, r, { enabled: !1 }),
                )
              );
            }),
          r("ZenonLocalAudioVideoManager").setLocalAudio(
            "PRIMARY_AUDIO",
            a,
            i,
            s,
          )
        );
      } catch (e) {
        t ===
          o("ZenonLocalAudioVideoTypes").ZenonLocalMediaOwnershipType.Strong &&
          r("ZenonLocalAudioVideoManager").release("PRIMARY_AUDIO");
        var u = r("getErrorSafe")(e);
        throw (
          r("ZenonUserActionLogger").logError({
            checkpoint: _ + "_getUserMedia_audio_error",
            error_domain: _,
            error_type: u.toString(),
          }),
          e
        );
      }
    }
    function h(e) {
      e ===
        o("ZenonLocalAudioVideoTypes").ZenonLocalMediaOwnershipType.Strong &&
        r("ZenonLocalAudioVideoManager").release("PRIMARY_AUDIO");
    }
    function y(e, t) {
      t === void 0 && (t = !0);
      var o = p(!1);
      return (
        m(
          function () {
            o && t && h(e);
          },
          [e, t],
        ),
        c(
          (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t, n, a) {
                (a === void 0 && (a = !1),
                  h(e),
                  (o.current = !0),
                  r("ZenonProductConnectFunnel").setUIPermissionsRequest());
                var i = yield g(e, t, n, a);
                return (
                  r("ZenonProductConnectFunnel").setUIPermissionsReceived(),
                  i
                );
              },
            );
            return function (e, n, r) {
              return t.apply(this, arguments);
            };
          })(),
          [e],
        )
      );
    }
    function C(t, a) {
      (a === void 0 && (a = !0),
        m(
          function () {
            return (
              t ===
                o("ZenonLocalAudioVideoTypes").ZenonLocalMediaOwnershipType
                  .Strong &&
                r("ZenonLocalAudioVideoManager").retain("PRIMARY_AUDIO"),
              function () {
                t ===
                  o("ZenonLocalAudioVideoTypes").ZenonLocalMediaOwnershipType
                    .Strong &&
                  a &&
                  r("ZenonLocalAudioVideoManager").release("PRIMARY_AUDIO");
              }
            );
          },
          [t, a],
        ));
      var i = c(
        (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (t, o, a) {
              a === void 0 && (a = !1);
              try {
                var i;
                (a === !0 &&
                  (i = function (r) {
                    return (
                      (r.webrtcTrack.enabled = !1),
                      (e || (e = n("Promise"))).resolve(
                        babelHelpers.extends({}, r, { enabled: !1 }),
                      )
                    );
                  }),
                  r("ZenonProductConnectFunnel").setUIPermissionsRequest());
                var l = yield r("ZenonLocalAudioVideoManager").setLocalAudio(
                  "PRIMARY_AUDIO",
                  t,
                  o,
                  i,
                );
                return (
                  r("ZenonProductConnectFunnel").setUIPermissionsReceived(),
                  l
                );
              } catch (e) {
                var s = r("getErrorSafe")(e);
                throw (
                  r("ZenonUserActionLogger").logError({
                    checkpoint: _ + "_getUserMedia_audio_error",
                    error_domain: _,
                    error_type: s.toString(),
                  }),
                  e
                );
              }
            },
          );
          return function (e, n, r) {
            return t.apply(this, arguments);
          };
        })(),
        [],
      );
      return i;
    }
    var b =
      r("gkx")("11524") || o("ZenonAppProvider").isWidgetLiveChatApp() ? y : C;
    function v() {
      m(function () {
        return (
          r("ZenonLocalAudioVideoManager").retain("PRIMARY_AUDIO"),
          r("ZenonLocalAudioVideoManager").retain("PRIMARY_VIDEO"),
          function () {
            (r("ZenonLocalAudioVideoManager").release("PRIMARY_AUDIO"),
              r("ZenonLocalAudioVideoManager").release("PRIMARY_VIDEO"));
          }
        );
      }, []);
      var e = r("ZenonCallsHooks").useSupportConstrainedDevice(),
        t = e.frameRate,
        a = e.height,
        i = e.isEnabled,
        l = e.width;
      m(
        function () {
          if (f(i, l, a))
            r("ZenonLocalAudioVideoManager").applyNewVideoCaptureConstraints(
              { ideal: (l != null ? l : 16) / (a != null ? a : 9) },
              { max: t != null ? t : 30 },
              { max: a },
              { max: l },
            );
          else if (r("qex")._("1577")) {
            var e;
            r("ZenonLocalAudioVideoManager").applyNewVideoCaptureConstraints(
              {
                ideal: (e = o("ZenonVideoConstraintUtils"))
                  .CONSTRAINT_1080P_30FPS_CONFIG.aspectRatio,
              },
              { ideal: e.CONSTRAINT_1080P_30FPS_CONFIG.frameRate },
              { ideal: e.CONSTRAINT_1080P_30FPS_CONFIG.height },
              { ideal: e.CONSTRAINT_1080P_30FPS_CONFIG.width },
            );
          } else {
            var e;
            r("ZenonLocalAudioVideoManager").applyNewVideoCaptureConstraints(
              {
                ideal: (e = o("ZenonVideoConstraintUtils"))
                  .CONSTRAINT_720P_30FPS_CONFIG.aspectRatio,
              },
              { ideal: e.CONSTRAINT_720P_30FPS_CONFIG.frameRate },
              { ideal: e.CONSTRAINT_720P_30FPS_CONFIG.height },
              { ideal: e.CONSTRAINT_720P_30FPS_CONFIG.width },
            );
          }
        },
        [t, a, i, l],
      );
      var s = c(
        (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, n, s) {
              try {
                if (f(i, l, a))
                  (t != null && (n.frameRate = { max: t }),
                    (n.height = { max: a }),
                    (n.width = { max: l }),
                    (n.aspectRatio = {
                      ideal: (l != null ? l : 16) / (a != null ? a : 9),
                    }));
                else if (r("qex")._("1577")) {
                  var u;
                  ((n.frameRate = {
                    ideal: (u = o("ZenonVideoConstraintUtils"))
                      .CONSTRAINT_1080P_30FPS_CONFIG.frameRate,
                  }),
                    (n.height = {
                      ideal: u.CONSTRAINT_1080P_30FPS_CONFIG.height,
                    }),
                    (n.width = {
                      ideal: u.CONSTRAINT_1080P_30FPS_CONFIG.width,
                    }),
                    (n.aspectRatio = {
                      ideal: u.CONSTRAINT_1080P_30FPS_CONFIG.aspectRatio,
                    }));
                } else {
                  var u;
                  ((n.frameRate = {
                    ideal: (u = o("ZenonVideoConstraintUtils"))
                      .CONSTRAINT_720P_30FPS_CONFIG.frameRate,
                  }),
                    (n.height = {
                      ideal: u.CONSTRAINT_720P_30FPS_CONFIG.height,
                    }),
                    (n.width = { ideal: u.CONSTRAINT_720P_30FPS_CONFIG.width }),
                    (n.aspectRatio = {
                      ideal: u.CONSTRAINT_720P_30FPS_CONFIG.aspectRatio,
                    }));
                }
                r("ZenonProductConnectFunnel").setUIPermissionsRequest();
                var c = yield r(
                  "ZenonLocalAudioVideoManager",
                ).setLocalAudioAndVideo(e, n, s, !0);
                return (
                  r("ZenonProductConnectFunnel").setUIPermissionsReceived(),
                  c
                );
              } catch (e) {
                var d = r("getErrorSafe")(e);
                throw (
                  r("ZenonUserActionLogger").logError({
                    checkpoint: _ + "_useCreateLocalAudioAndVideo_error",
                    error_domain: _,
                    error_type: d.toString(),
                  }),
                  e
                );
              }
            },
          );
          return function (t, n, r) {
            return e.apply(this, arguments);
          };
        })(),
        [t, a, i, l],
      );
      return s;
    }
    function S() {
      m(function () {
        return (
          r("ZenonLocalAudioVideoManager").retain("PREVIEW_AUDIO"),
          r("ZenonLocalAudioVideoManager").retain("PREVIEW_VIDEO"),
          function () {
            (r("ZenonLocalAudioVideoManager").release("PREVIEW_AUDIO"),
              r("ZenonLocalAudioVideoManager").release("PREVIEW_VIDEO"));
          }
        );
      }, []);
      var e = c(
        (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t, n) {
              try {
                return yield r(
                  "ZenonLocalAudioVideoManager",
                ).setLocalAudioAndVideo(e, t, n, !1);
              } catch (e) {
                var o = r("getErrorSafe")(e);
                throw (
                  r("ZenonUserActionLogger").logError({
                    checkpoint:
                      _ + "_useCreateLocalAudioAndVideoForPreview_error",
                    error_domain: _,
                    error_type: o.toString(),
                  }),
                  e
                );
              }
            },
          );
          return function (t, n, r) {
            return e.apply(this, arguments);
          };
        })(),
        [],
      );
      return e;
    }
    function R() {
      var e = o("ZenonLoggingHooks").useErrorLogging();
      m(function () {
        return (
          r("ZenonLocalAudioVideoManager").retain("PREVIEW_AUDIO"),
          function () {
            r("ZenonLocalAudioVideoManager").release("PREVIEW_AUDIO");
          }
        );
      }, []);
      var t = c(
        (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (t, n) {
              try {
                return yield r("ZenonLocalAudioVideoManager").setLocalAudio(
                  "PREVIEW_AUDIO",
                  t,
                  n,
                );
              } catch (t) {
                var o = r("getErrorSafe")(t);
                throw (
                  e({
                    checkpoint: _ + "_getUserMedia_error_audio_preview",
                    error: o,
                    errorDomain: _,
                  }),
                  t
                );
              }
            },
          );
          return function (e, n) {
            return t.apply(this, arguments);
          };
        })(),
        [e],
      );
      return t;
    }
    function L(t) {
      m(
        function () {
          return (
            t ===
              o("ZenonLocalAudioVideoTypes").ZenonLocalMediaOwnershipType
                .Strong &&
              r("ZenonLocalAudioVideoManager").retain("PRIMARY_VIDEO"),
            function () {
              t ===
                o("ZenonLocalAudioVideoTypes").ZenonLocalMediaOwnershipType
                  .Strong &&
                r("ZenonLocalAudioVideoManager").release("PRIMARY_VIDEO");
            }
          );
        },
        [t],
      );
      var a = r("ZenonCallsHooks").useSupportConstrainedDevice(),
        i = a.frameRate,
        l = a.height,
        s = a.isEnabled,
        u = a.width,
        d = o("ZenonLoggingHooks").useErrorLogging(),
        p = c(
          (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t, a, c, m) {
                c === void 0 && (c = !1);
                try {
                  var p = m;
                  if (
                    (c === !0 &&
                      (p = function (r) {
                        r.webrtcTrack.enabled = !1;
                        var t = babelHelpers.extends({}, r, { enabled: !1 });
                        return m ? m(t) : (e || (e = n("Promise"))).resolve(t);
                      }),
                    f(s, u, l))
                  )
                    (i != null && (a.frameRate = { max: i }),
                      (a.width = { max: u }),
                      (a.height = { max: l }),
                      (a.aspectRatio = {
                        ideal: (u != null ? u : 16) / (l != null ? l : 9),
                      }));
                  else if (r("qex")._("1577")) {
                    var g;
                    r(
                      "ZenonLocalAudioVideoManager",
                    ).applyNewVideoCaptureConstraints(
                      {
                        ideal: (g = o("ZenonVideoConstraintUtils"))
                          .CONSTRAINT_1080P_30FPS_CONFIG.aspectRatio,
                      },
                      { ideal: g.CONSTRAINT_1080P_30FPS_CONFIG.frameRate },
                      { ideal: g.CONSTRAINT_1080P_30FPS_CONFIG.height },
                      { ideal: g.CONSTRAINT_1080P_30FPS_CONFIG.width },
                    );
                  } else {
                    var g;
                    ((a.frameRate = {
                      ideal: (g = o("ZenonVideoConstraintUtils"))
                        .CONSTRAINT_720P_30FPS_CONFIG.frameRate,
                    }),
                      (a.height = {
                        ideal: g.CONSTRAINT_720P_30FPS_CONFIG.height,
                      }),
                      (a.width = {
                        ideal: g.CONSTRAINT_720P_30FPS_CONFIG.width,
                      }),
                      (a.aspectRatio = {
                        ideal: g.CONSTRAINT_720P_30FPS_CONFIG.aspectRatio,
                      }));
                  }
                  r("ZenonProductConnectFunnel").setUIPermissionsRequest();
                  var h = yield r("ZenonLocalAudioVideoManager").setLocalVideo(
                    "PRIMARY_VIDEO",
                    t,
                    a,
                    p,
                  );
                  return (
                    r("ZenonProductConnectFunnel").setUIPermissionsReceived(),
                    h
                  );
                } catch (e) {
                  var y = r("getErrorSafe")(e);
                  throw (
                    d({
                      checkpoint: _ + "_getUserMedia_video_error",
                      error: y,
                      errorDomain: _,
                    }),
                    e
                  );
                }
              },
            );
            return function (e, n, r, o) {
              return t.apply(this, arguments);
            };
          })(),
          [i, l, d, s, u],
        );
      return p;
    }
    function E() {
      m(function () {
        return (
          r("ZenonLocalAudioVideoManager").retain("PREVIEW_VIDEO"),
          function () {
            r("ZenonLocalAudioVideoManager").release("PREVIEW_VIDEO");
          }
        );
      }, []);
      var e = o("ZenonLoggingHooks").useErrorLogging(),
        t = c(
          (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t, n) {
                try {
                  return yield r("ZenonLocalAudioVideoManager").setLocalVideo(
                    "PREVIEW_VIDEO",
                    t,
                    n,
                  );
                } catch (t) {
                  var o = r("getErrorSafe")(t);
                  throw (
                    e({
                      checkpoint: _ + "_getUserMedia_error_video_preview",
                      error: o,
                      errorDomain: _,
                    }),
                    t
                  );
                }
              },
            );
            return function (e, n) {
              return t.apply(this, arguments);
            };
          })(),
          [e],
        );
      return t;
    }
    function k() {
      var e = o("ZenonLoggingHooks").useErrorLogging(),
        t = c(
          (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t, n, o) {
                try {
                  return yield r(
                    "ZenonLocalAudioVideoManager",
                  ).createtNonReferenceCountedVideoTrack(t, n, o);
                } catch (t) {
                  var a = r("getErrorSafe")(t);
                  throw (
                    e({
                      checkpoint:
                        _ +
                        "_getUserMedia_error_useCreateNonReferenceCountedVideo",
                      error: a,
                      errorDomain: _,
                    }),
                    t
                  );
                }
              },
            );
            return function (e, n, r) {
              return t.apply(this, arguments);
            };
          })(),
          [e],
        );
      return t;
    }
    function I() {
      return c(function (e) {
        return r("ZenonLocalAudioVideoManager").disableAudioTrack(e);
      }, []);
    }
    function T() {
      return c(function (e) {
        return r("ZenonLocalAudioVideoManager").disableVideoTrack(e);
      }, []);
    }
    function D() {
      var e = d(r("ZenonLocalMediaContext")),
        t = e.audioTrack;
      return t;
    }
    function x() {
      var e = d(r("ZenonLocalMediaContext")),
        t = e.videoTrack;
      return t;
    }
    var $ = {
        useCreateLocalAudio: b,
        useCreateLocalAudio2: y,
        useCreateLocalAudioAndVideo: v,
        useCreateLocalAudioAndVideoForPreview: S,
        useCreateLocalAudioForPreview: R,
        useCreateLocalVideo: L,
        useCreateLocalVideoForPreview: E,
        useCreateNonReferenceCountedVideo: k,
        useDisableAudio: I,
        useDisableVideo: T,
        useLocalAudio: D,
        useLocalVideo: x,
      },
      P = $;
    l.default = P;
  },
  98,
);
