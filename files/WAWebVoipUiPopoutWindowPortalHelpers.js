__d(
  "WAWebVoipUiPopoutWindowPortalHelpers",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WAWebCallCollection",
    "WAWebLazyLoadedRetriable",
    "WAWebUA",
    "WAWebVoipPopoutWindowState",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f = 3e3,
      g = 500,
      h = 250,
      y = 1e4,
      C = new Map(),
      b = new WeakMap();
    function v(e, t, n, r) {
      (n === void 0 && (n = !1),
        r === void 0 && (r = null),
        t != null
          ? (C.set(e, t), b.set(t, { acquiredInWindow: r, isFromPopout: n }))
          : C.delete(e));
    }
    function S(e, t) {
      var n;
      if (t == null) return !1;
      var r = C.get(e);
      return r == null
        ? !1
        : ((n = b.get(r)) == null ? void 0 : n.acquiredInWindow) === t;
    }
    function R() {
      C.clear();
    }
    function L(e) {
      var t, n;
      return e == null
        ? !1
        : (t = (n = b.get(e)) == null ? void 0 : n.isFromPopout) != null
          ? t
          : !1;
    }
    function E() {
      var e = [];
      for (var t of C) {
        var n = t[0],
          r = t[1];
        L(r) && e.push({ type: n, stream: r });
      }
      return e;
    }
    async function k(t) {
      var n = t.needsAudio,
        a = t.needsVideo,
        i = t.targetWindow;
      if (!o("WAWebUA").UA.isSafari || !a || !n) {
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[voip][popout] skip prime: safari=",
              " vid=",
              " aud=",
              "",
            ])),
          String(o("WAWebUA").UA.isSafari),
          String(a),
          String(n),
        );
        return;
      }
      try {
        var l,
          d = (l = i.navigator) == null ? void 0 : l.mediaDevices;
        if (d == null) return;
        o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "[voip][popout] priming Safari cam+mic perm",
            ])),
        );
        var m = await d.getUserMedia({ audio: !0, video: !0 });
        (m.getTracks().forEach(function (e) {
          e.stop();
        }),
          o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[voip][popout] Safari perm granted, tracks released",
              ])),
          ));
      } catch (e) {
        o("WALogger")
          .WARN(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "[voip][popout] Safari perm prime failed, falling back",
              ])),
          )
          .catching(r("getErrorSafe")(e));
      }
    }
    var I = r("WAWebLazyLoadedRetriable")(async function () {
      var e = await r("JSResourceForInteraction")("WAWebVoipVideoCameraCapture")
        .__setRef("WAWebVoipUiPopoutWindowPortalHelpers")
        .load();
      return e.WAWebVoipVideoCameraCapture;
    }, "WAWebVoipVideoCameraCapture");
    async function T(e, t) {
      var n, o, a;
      if (
        ((n = r("WAWebCallCollection").activeCall) == null ? void 0 : n.id) ===
        t
      ) {
        var i = await I();
        if (
          ((o = r("WAWebCallCollection").activeCall) == null
            ? void 0
            : o.id) === t
        ) {
          var l = i.currentDeviceId,
            s = i.captureParams,
            u = i.getLastCapturedStream();
          l == null ||
            l === "" ||
            s == null ||
            u == null ||
            (await i.startCameraCapture({
              camera_id_requested: l,
              height: s.height,
              isAVUpgrade: !1,
              max_fps: s.maxFps,
              targetWindow: e,
              width: s.width,
            }),
            (a = r("WAWebCallCollection").activeCall) == null || a.id);
        }
      }
    }
    async function D(e) {
      var t = null;
      try {
        var n, a;
        if (
          e == null ||
          ((n = r("WAWebCallCollection").activeCall) == null
            ? void 0
            : n.id) !== e
        )
          return !1;
        var i = await I();
        if (
          ((a = r("WAWebCallCollection").activeCall) == null
            ? void 0
            : a.id) !== e
        )
          return !1;
        var l = i.captureParams,
          s = i.getLastCapturedStream();
        if (l == null || s == null)
          return (
            o("WALogger").WARN(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: popout reuse: no stream/params, skipping camera repump",
                ])),
            ),
            !1
          );
        var u = s.getVideoTracks().some(function (e) {
          return e.readyState === "live";
        });
        return u
          ? ((t = s.clone()),
            o("WALogger").LOG(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: popout reuse: repumping camera from cloned stream",
                ])),
            ),
            await i.startWithStream(t, l.width, l.height, l.maxFps, !0),
            !0)
          : (o("WALogger").WARN(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: popout reuse: no live video track, skipping camera repump",
                ])),
            ),
            !1);
      } catch (e) {
        var c;
        return (
          (c = t) == null ||
            c.getTracks().forEach(function (e) {
              e.stop();
            }),
          o("WALogger")
            .ERROR(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: popout reuse: camera repump failed",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("voip-popout-reuse-camera-repump-failed"),
          !1
        );
      }
    }
    function x(e) {
      o(
        "WAWebVoipPopoutWindowState",
      ).WAWebVoipUiPopoutWindowEventEmitter.trigger(
        "popoutWindowVisibilityChanged",
        {
          visibilityState: e,
          isCallActiveInPopoutWindow: o(
            "WAWebVoipPopoutWindowState",
          ).getIsCallActiveInPopoutWindow(),
          hasPopoutWindow:
            o("WAWebVoipPopoutWindowState").getPopoutWindow() != null,
        },
      );
    }
    ((l.POPOUT_WINDOW_CALL_END_CLOSE_DELAY_MS = f),
      (l.SAFARI_POPOUT_CLOSE_POLL_INTERVAL_MS = g),
      (l.STREAM_REACQUISITION_POLL_INTERVAL_MS = h),
      (l.STREAM_REACQUISITION_TIMEOUT_MS = y),
      (l.setMediaStream = v),
      (l.wasStreamAcquiredInWindow = S),
      (l.clearActiveStreams = R),
      (l.getStreamsFromPopout = E),
      (l.primeSafariMediaPermissions = k),
      (l.reacquireCameraInTargetWindow = T),
      (l.reacquireCameraReusingStreamForPopout = D),
      (l.emitPopoutWindowVisibilityChanged = x));
  },
  98,
);
