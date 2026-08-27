__d(
  "WAWebVoipLinkPreviewCallLink",
  [
    "fbt",
    "WALogger",
    "WAWebCallCollection",
    "WAWebEnsureVoipInited",
    "WAWebFrontendContactGetters",
    "WAWebPipController",
    "WAWebTypedEventEmitter",
    "WAWebUserPrefsVoip",
    "WAWebVoipCallBlockedModals",
    "WAWebVoipCallLinkBundlePreloader",
    "WAWebVoipCallStateUtils",
    "WAWebVoipGatingUtils",
    "WAWebVoipInitEventEmitter",
    "WAWebVoipMoveCallHere",
    "WAWebVoipNackHandlers",
    "WAWebVoipPopoutWindowState",
    "WAWebVoipStackInterface",
    "WAWebVoipUiDocPipPortalContainer.react",
    "WAWebVoipWaCallEnums",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g,
      h,
      y,
      C,
      b,
      v,
      S = 22,
      R = { videoMuted: !1, audioMuted: !1 },
      L = new (r("WAWebTypedEventEmitter"))();
    function E() {
      return R;
    }
    function k(e) {
      ((R = { videoMuted: e.videoMuted, audioMuted: e.audioMuted }),
        L.trigger("change", R));
    }
    function I() {
      if (r("WAWebPipController").manager != null) {
        r("WAWebPipController").openVoipUiPiPForCallLink();
        return;
      }
      var e = 5e3,
        t = 100,
        n = Date.now(),
        o = function () {
          if (r("WAWebPipController").manager != null) {
            r("WAWebCallCollection").pendingCallLink != null &&
              r("WAWebPipController").openVoipUiPiPForCallLink();
            return;
          }
          Date.now() - n < e && window.setTimeout(o, t);
        };
      window.setTimeout(o, t);
    }
    function T(e) {
      if (
        (e.audioDeviceId != null &&
          o("WAWebUserPrefsVoip").setSelectedAudioInputDevice(e.audioDeviceId),
        e.speakerDeviceId != null &&
          o("WAWebUserPrefsVoip").setSelectedAudioOutputDevice(
            e.speakerDeviceId,
          ),
        e.videoDeviceId != null)
      ) {
        var t = e.videoDeviceId;
        (o("WAWebUserPrefsVoip").setLandingPageVideoDeviceId(t),
          o("WAWebUserPrefsVoip").setSelectedVideoInputDevice(t));
      }
      e.colorIndex != null &&
        o("WAWebUserPrefsVoip").saveLandingPageColorIndex(e.colorIndex);
    }
    function D(e, t) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = e.data,
            a = n.audioDeviceId,
            i = n.audioMuted,
            l = n.autoJoin,
            u = n.callType,
            c = n.colorIndex,
            d = n.speakerDeviceId,
            m = n.token,
            p = n.videoDeviceId,
            L = n.videoMuted;
          if (
            (t === void 0 && (t = 0),
            o("WALogger").LOG(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: handleClickCallLink token=",
                  " type=",
                  " lobby=",
                  "",
                ])),
              m,
              u,
              t,
            ),
            !o("WAWebVoipGatingUtils").callLinksEnabled())
          ) {
            o("WALogger").LOG(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: handleClickCallLink blocked \u2014 call links not enabled",
                ])),
            );
            return;
          }
          if (!$(m)) {
            if (
              yield o(
                "WAWebVoipCallBlockedModals",
              ).showCallBlockedModalIfNeeded()
            ) {
              o("WALogger").LOG(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: handleClickCallLink blocked \u2014 call unavailable",
                  ])),
              );
              return;
            }
            ((R.videoMuted = L != null ? L : !1),
              (R.audioMuted = i != null ? i : !1));
            var E = u === "video";
            (T({
              audioDeviceId: a,
              colorIndex: c,
              speakerDeviceId: d,
              videoDeviceId: p,
            }),
              o("WAWebVoipCallLinkBundlePreloader").preloadCallLinkBundles());
            var k = o(
              "WAWebVoipInitEventEmitter",
            ).VoipInitEventEmitter.getIsVoipInited();
            k ||
              (r("WAWebCallCollection").setPendingCallLink({ isVideo: E }),
              I());
            try {
              yield o("WAWebEnsureVoipInited").ensureVoipInitialized();
            } catch (e) {
              (o("WALogger").LOG(
                h ||
                  (h = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: handleClickCallLink init failed: ",
                    "",
                  ])),
                String(e),
              ),
                r("WAWebCallCollection").setPendingCallLink(null),
                r("WAWebPipController").closePiP(),
                e instanceof
                  o("WAWebEnsureVoipInited").VoipInitUnavailableError ||
                  o("WAWebVoipCallBlockedModals").showCouldNotPlaceCallModal());
              return;
            }
            var D = o("WAWebFrontendContactGetters").getMyUsername(),
              x = yield o("WAWebVoipStackInterface").getVoipStackInterface();
            if (x == null) {
              (o("WALogger").LOG(
                y ||
                  (y = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: previewCallLink aborted - voipStackInterface is null",
                  ])),
              ),
                r("WAWebCallCollection").setPendingCallLink(null),
                r("WAWebPipController").closePiP(),
                o("WAWebVoipCallBlockedModals").showCouldNotPlaceCallModal());
              return;
            }
            if (
              (o("WALogger").LOG(
                C ||
                  (C = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: handleClickCallLink hasVoipStack=true isVideo=",
                    "",
                  ])),
                E,
              ),
              m.length !== S)
            ) {
              (o("WALogger").LOG(
                b ||
                  (b = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: handleClickCallLink: invalid token length ",
                    ", expected ",
                    "",
                  ])),
                m.length,
                S,
              ),
                r("WAWebCallCollection").setPendingCallLink(null),
                r("WAWebPipController").closePiP(),
                o("WAWebVoipNackHandlers").showErrorDialog(
                  s._(/*BTDS*/ "Invalid call link"),
                ));
              return;
            }
            var P = yield x.previewCallLink(m, E, t, D, L === !0);
            (i === !0 && x.type === "web" && (yield x.setCallMute(!0)),
              l === !0 &&
                x.type === "web" &&
                (P === 0
                  ? yield x.joinCallLink()
                  : o("WALogger").LOG(
                      v ||
                        (v = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: handleClickCallLink previewCallLink failed, skip join ",
                          "",
                        ])),
                      String(P),
                    )));
          }
        })),
        x.apply(this, arguments)
      );
    }
    function $(t) {
      var n = r("WAWebCallCollection").activeCall;
      if (n == null) return !1;
      var a = n.getState();
      return a == null || o("WAWebVoipCallStateUtils").isCallTerminal(a)
        ? !1
        : n.isCallLink && n.callLinkToken === t && P(n)
          ? !0
          : o("WAWebVoipCallStateUtils").isCallIncoming(a) && n.msg != null
            ? (o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: handleClickCallLink \u2014 incoming call ringing, opening miniplayer",
                  ])),
              ),
              r("WAWebPipController").openVoipUiPiP(n.msg),
              !0)
            : (o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: handleClickCallLink blocked \u2014 already in a different active call",
                  ])),
              ),
              o("WAWebVoipCallBlockedModals").showEndCurrentCallToast(),
              !0);
    }
    function P(e) {
      if (
        o("WAWebVoipPopoutWindowState").getIsCallActiveInPopoutWindow() ||
        o("WAWebVoipUiDocPipPortalContainer.react").getIsDocPipWindowOpen()
      )
        return (
          o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "voip: handleClickCallLink \u2014 already in this call link, pulling call back to this window",
              ])),
          ),
          o("WAWebVoipMoveCallHere").moveCallHere(),
          !0
        );
      var t = e.callLinkState;
      return t != null && t !== o("WAWebVoipWaCallEnums").CallLinkState.None
        ? (o("WALogger").LOG(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "voip: handleClickCallLink \u2014 already in this call link, reopening call-link UI",
              ])),
          ),
          r("WAWebPipController").openVoipUiPiPForCallLink(),
          !0)
        : e.msg != null
          ? (o("WALogger").LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: handleClickCallLink \u2014 already in this call link, opening miniplayer",
                ])),
            ),
            r("WAWebPipController").openVoipUiPiP(e.msg),
            !0)
          : (o("WALogger").LOG(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: handleClickCallLink \u2014 same call link but no UI to reopen",
                ])),
            ),
            !1);
    }
    ((l.LandingPageMutePrefsEmitter = L),
      (l.getLandingPageMutePrefs = E),
      (l.updateLandingPageMutePrefs = k),
      (l.applyCallLinkDevicePrefs = T),
      (l.handleClickCallLink = D));
  },
  226,
);
