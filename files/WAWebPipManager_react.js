__d(
  "WAWebPipManager.react",
  [
    "fbt",
    "WAWebCallCollection",
    "WAWebCmd",
    "WAWebConfirmPopup.react",
    "WAWebFloatingMsgVideoPlayerRenderer.react",
    "WAWebFloatingOgVideoPlayerRenderer.react",
    "WAWebFloatingVoipRenderer.react",
    "WAWebFrontendMsgGetters",
    "WAWebInlineVideoPlaybackClosedWamEvent",
    "WAWebKeyboardRotateFocus.react",
    "WAWebKeyboardTabUtils",
    "WAWebMediaGatingUtils",
    "WAWebModalManager",
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebPipCloseButton.react",
    "WAWebPipConst",
    "WAWebPipController",
    "WAWebPipVideoRefControls.react",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebVelocityTransitionGroup",
    "WAWebWamEnumInlineVideoType",
    "WAWebWamEnumWebcRmrReasonCode",
    "WAWebWamMsgUtils",
    "WAWebWid",
    "WAWebYoutubeVideoPlayerRenderer.react",
    "react",
    "useWAWebListener",
    "useWAWebVideoPlaybackRate",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useEffect,
      m = c.useImperativeHandle,
      p = c.useRef,
      _ = c.useState,
      f = {
        msg: null,
        startTime: null,
        zoomRect: null,
        videoMetadata: null,
        videoRef: null,
        isVideoPlaying: !1,
        videoType: o("WAWebPipConst").PiPVideoType.MSG,
        previewUrl: null,
        videoSrc: null,
        counterAbuseData: null,
      },
      g = {
        playerWrapper: {
          position: "xixxii4",
          zIndex: "x16p50fe",
          width: "xnalus7",
          height: "xqtp20y",
          overflowX: "x1plvlek",
          overflowY: "xryxfnj",
          $$css: !0,
        },
      },
      h = new Map();
    (h.set(
      o("WAWebPipConst").PiPVideoType.MSG,
      r("WAWebFloatingMsgVideoPlayerRenderer.react"),
    ),
      h.set(
        o("WAWebPipConst").PiPVideoType.YOUTUBE,
        r("WAWebYoutubeVideoPlayerRenderer.react"),
      ),
      h.set(
        o("WAWebPipConst").PiPVideoType.OG,
        r("WAWebFloatingOgVideoPlayerRenderer.react"),
      ),
      h.set(
        o("WAWebPipConst").PiPVideoType.VOIP,
        r("WAWebFloatingVoipRenderer.react"),
      ));
    function y(e) {
      var t = C(e);
      return t == null
        ? null
        : new (o(
            "WAWebInlineVideoPlaybackClosedWamEvent",
          ).InlineVideoPlaybackClosedWamEvent)({
            inlineVideoPlayed: !1,
            inlineVideoType: t,
          });
    }
    function C(e) {
      return e === o("WAWebPipConst").PiPVideoType.YOUTUBE
        ? o("WAWebWamEnumInlineVideoType").INLINE_VIDEO_TYPE.YOUTUBE
        : null;
    }
    function b(e, t) {
      return r("WAWebWid").isNewsletter(e.id.remote)
        ? t != null && t.counterAbuseToken != null
        : t != null && t.counterAbuseToken != null && t.nonce != null;
    }
    function v(e) {
      var t,
        n,
        a,
        i = e.ref,
        l = p(null),
        c = _(f.msg),
        C = c[0],
        v = c[1],
        S = _(f.startTime),
        R = S[0],
        L = S[1],
        E = _(f.zoomRect),
        k = E[0],
        I = E[1],
        T = p(null),
        D = _(f.videoMetadata),
        x = D[0],
        $ = D[1],
        P = _(f.videoRef),
        N = P[0],
        M = P[1],
        w = _(f.isVideoPlaying),
        A = w[0],
        F = w[1],
        O = _(f.videoType),
        B = O[0],
        W = O[1],
        q = _(f.previewUrl),
        U = q[0],
        V = q[1],
        H = _(f.videoSrc),
        G = H[0],
        z = H[1],
        j = _(null),
        K = j[0],
        Q = j[1],
        X = _(f.counterAbuseData),
        Y = X[0],
        J = X[1],
        Z = o("WAWebMediaGatingUtils").isVideoPlaybackSpeedEnabled(),
        ee =
          (t = C == null || (n = C.id) == null ? void 0 : n.toString()) != null
            ? t
            : null,
        te = r("useWAWebVideoPlaybackRate")(ee),
        ne = te.advancePlaybackRate,
        re = te.playbackRate,
        oe = te.resetAllPlaybackRates;
      (d(
        function () {
          Z && (N == null || N.setPlaybackRate(re));
        },
        [Z, re, N],
      ),
        d(function () {
          var e = function () {
            var t;
            ((t = l.current) == null || t.commit(),
              window.removeEventListener("unload", e));
          };
          return (window.addEventListener("unload", e), e);
        }, []));
      var ae = function (t) {
          Q(function () {
            return t;
          });
        },
        ie = function (t, n) {
          var e = l.current;
          (e != null &&
            ((t == null ? void 0 : t.duration) != null &&
              (e.inlineVideoDurationT = Math.floor(
                t == null ? void 0 : t.duration,
              )),
            !e.inlineVideoPlayed &&
              n &&
              (e.markInlineVideoPlayStartT(), (e.inlineVideoPlayed = n))),
            $(t),
            F(n));
        },
        le = function () {
          var e;
          (C && r("WAWebPipController").didClose(C),
            (e = l.current) == null || e.commit(),
            oe(),
            v(f.msg),
            L(f.startTime),
            I(f.zoomRect),
            $(f.videoMetadata),
            M(f.videoRef),
            F(f.isVideoPlaying),
            W(f.videoType),
            V(f.previewUrl),
            z(f.videoSrc),
            J(f.counterAbuseData));
        },
        se = function (t) {
          t.id.equals(C == null ? void 0 : C.id) &&
            (B !== o("WAWebPipConst").PiPVideoType.VOIP ||
              r("WAWebCallCollection").activeCall == null) &&
            le();
        };
      d(
        function () {
          return function () {
            C && r("WAWebPipController").didClose(C);
          };
        },
        [C],
      );
      var ue = function (t, n) {
          if (
            t !== o("WAWebPipConst").PiPVideoType.VOIP &&
            r("WAWebCallCollection").activeCall != null
          ) {
            o("WAWebModalManager").ModalManager.open(
              u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
                tsNavigationData: {
                  surface: "unknown",
                  viewName: "pip-manager",
                },
                onOK: o("WAWebModalManager").closeModalManager,
                title: s._(/*BTDS*/ "Cannot open video during call"),
                children: s._(
                  /*BTDS*/ "You cannot watch a video while a call is in progress. Please end the call first.",
                ),
              }),
            );
            return;
          }
          var e = n.msg;
          if (e != null) {
            var a;
            (r("WAWebPipController").didOpen(e),
              (a = l.current) == null || a.commit());
            var i = y(t);
            ((l.current = i),
              i != null &&
                ((i.messageType = o("WAWebWamMsgUtils").getWamMessageType(e)),
                (i.inlineVideoHasRcat = b(e, n.counterAbuseData)),
                i.startInlineVideoPlayStartT()),
              t === o("WAWebPipConst").PiPVideoType.MSG &&
                e.downloadMedia({
                  downloadEvenIfExpensive: !0,
                  rmrReason: o("WAWebWamEnumWebcRmrReasonCode")
                    .WEBC_RMR_REASON_CODE.PIP,
                  isUserInitiated: !0,
                }));
          }
          (v(e),
            L(n.startTime),
            I(n.zoomRect),
            $(f.videoMetadata),
            M(f.videoRef),
            F(f.isVideoPlaying),
            W(t),
            V(n.preview != null ? "data:image/jpeg;base64," + n.preview : null),
            z(n.videoSrc),
            J(n.counterAbuseData));
        },
        ce = function () {
          N == null || N.pause();
        },
        de = function (t) {
          ce();
        },
        me = function (t) {
          var e;
          return (e = C == null ? void 0 : C.id.equals(t.id)) != null ? e : !1;
        },
        pe = function () {
          C && r("WAWebPipController").didError(C);
        },
        _e = function () {
          var e = (N == null ? void 0 : N.getAudioDisabled()) === !0;
          return {
            enableDragBar: !0,
            bottomContent:
              x != null && N != null
                ? u.jsx(o("WAWebPipVideoRefControls.react").VideoRefControls, {
                    disableAudioControls: e,
                    refVideo: N,
                    videoMetadata: x,
                    isFullscreenMode: !1,
                    isVideoPlaying: A,
                    newPiPStyle: !0,
                    onFullscreenToggle: K != null ? K : void 0,
                    playbackRate: Z ? re : void 0,
                    onPlaybackRateChange: Z ? ne : void 0,
                  })
                : null,
            topContent: u.jsx(r("WAWebPipCloseButton.react"), {
              isFullscreenMode: !1,
              onClick: le,
            }),
          };
        },
        fe = function () {
          return k
            ? {
                height: k.bottom - k.top,
                width: k.right - k.left,
                left: k.left,
                bottom: window.innerHeight - k.bottom,
              }
            : null;
        },
        ge = function () {
          return babelHelpers.extends(
            {
              msg: C,
              startTime: R,
              zoomRect: k,
              videoMetadata: x,
              videoRef: N,
              isVideoPlaying: A,
              videoType: B,
              previewUrl: U,
              videoSrc: G,
              counterAbuseData: Y,
            },
            _e(),
            {
              animationStartStyle: fe(),
              onClose: le,
              onError: pe,
              autoPlay: !0,
              onRefSet: M,
              onVideoMetadataChange: ie,
              onSetFullscreenToggleCallback: ae,
            },
          );
        };
      (o("useWAWebListener").useListener(
        o("WAWebCmd").Cmd,
        ["media_viewer_modal"],
        de,
      ),
        o("useWAWebListener").useListener(
          o("WAWebMsgCollection").MsgCollection,
          ["remove"],
          function (e) {
            se(e);
          },
        ));
      var he = C != null ? o("WAWebFrontendMsgGetters").getChat(C) : null;
      (o("useWAWebListener").useListener(
        (a = he == null ? void 0 : he.msgs) != null
          ? a
          : o("WAWebMsgCollection").MsgCollection,
        "remove_msgs",
        function (e) {
          e.forEach(se);
        },
      ),
        o("useWAWebListener").useListener(
          o("WAWebMsgCollection").MsgCollection,
          ["change:type"],
          function (e) {
            e.type === o("WAWebMsgType").MSG_TYPE.REVOKED &&
              (!o("WAWebMsgGetters").getIsSentByMe(e) &&
                C != null &&
                C.id.equals(e.id) &&
                o("WAWebToastManager").ToastManager.open(
                  u.jsx(o("WAWebToast.react").Toast, {
                    msg: s._(/*BTDS*/ "Currently playing video was revoked."),
                  }),
                ),
              se(e));
          },
        ));
      var ye = { isOpened: me, pausePiP: ce, openPiP: ue, closePiP: le };
      (m(i, function () {
        return ye;
      }),
        d(function () {
          return (
            r("WAWebPipController").register(ye),
            function () {
              r("WAWebPipController").unregister();
            }
          );
        }, []));
      var Ce = h.get(B);
      return u.jsx(o("WAWebKeyboardRotateFocus.react").RotateFocus, {
        focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
        children: u.jsx(r("WAWebVelocityTransitionGroup"), {
          ref: T,
          transitionName: "pip",
          xstyle: g.playerWrapper,
          component: "div",
          children:
            Ce != null ? u.jsx(Ce, babelHelpers.extends({}, ge())) : null,
        }),
      });
    }
    v.displayName = v.name + " [from " + i.id + "]";
    var S = v;
    l.PiPManager = S;
  },
  226,
);
