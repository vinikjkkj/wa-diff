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
      d = 3e3,
      m = 500,
      p = 250,
      _ = 1e4,
      f = new Map(),
      g = new WeakMap();
    function h(e, t, n) {
      (n === void 0 && (n = !1),
        t != null ? (f.set(e, t), g.set(t, { isFromPopout: n })) : f.delete(e));
    }
    function y() {
      f.clear();
    }
    function C(e) {
      var t, n;
      return e == null
        ? !1
        : (t = (n = g.get(e)) == null ? void 0 : n.isFromPopout) != null
          ? t
          : !1;
    }
    function b() {
      var e = [];
      for (var t of f) {
        var n = t[0],
          r = t[1];
        C(r) && e.push({ type: n, stream: r });
      }
      return e;
    }
    async function v(t, n, a) {
      if (!o("WAWebUA").UA.isSafari || !n || !a) {
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [popout] skipping permission priming: safari=",
              ", needsVideo=",
              ", needsAudio=",
              "",
            ])),
          String(o("WAWebUA").UA.isSafari),
          String(n),
          String(a),
        );
        return;
      }
      try {
        var i,
          l = (i = t.navigator) == null ? void 0 : i.mediaDevices;
        if (l == null) return;
        o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [popout] priming Safari combined camera+mic permission",
            ])),
        );
        var d = await l.getUserMedia({ audio: !0, video: !0 });
        (d.getTracks().forEach(function (e) {
          e.stop();
        }),
          o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [popout] Safari combined permission granted, released priming tracks",
              ])),
          ));
      } catch (e) {
        o("WALogger")
          .WARN(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [popout] Safari permission priming failed, falling back to individual prompts",
              ])),
          )
          .catching(r("getErrorSafe")(e))
          .sendLogs("voip-safari-permission-prime-fail");
      }
    }
    var S = r("WAWebLazyLoadedRetriable")(async function () {
      var e = await r("JSResourceForInteraction")("WAWebVoipVideoCameraCapture")
        .__setRef("WAWebVoipUiPopoutWindowPortalHelpers")
        .load();
      return e.WAWebVoipVideoCameraCapture;
    }, "WAWebVoipVideoCameraCapture");
    async function R(e, t) {
      var n, o, a;
      if (
        ((n = r("WAWebCallCollection").activeCall) == null ? void 0 : n.id) ===
        t
      ) {
        var i = await S();
        if (
          ((o = r("WAWebCallCollection").activeCall) == null
            ? void 0
            : o.id) === t
        ) {
          var l = i.currentDeviceId,
            s = i.captureParams;
          l == null ||
            l === "" ||
            s == null ||
            (await i.startCameraCapture(l, s.width, s.height, s.maxFps, !1, e),
            (a = r("WAWebCallCollection").activeCall) == null || a.id);
        }
      }
    }
    function L(e) {
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
    ((l.POPOUT_WINDOW_CALL_END_CLOSE_DELAY_MS = d),
      (l.SAFARI_POPOUT_CLOSE_POLL_INTERVAL_MS = m),
      (l.STREAM_REACQUISITION_POLL_INTERVAL_MS = p),
      (l.STREAM_REACQUISITION_TIMEOUT_MS = _),
      (l.setMediaStream = h),
      (l.clearActiveStreams = y),
      (l.getStreamsFromPopout = b),
      (l.primeSafariMediaPermissions = v),
      (l.reacquireCameraInTargetWindow = R),
      (l.emitPopoutWindowVisibilityChanged = L));
  },
  98,
);
