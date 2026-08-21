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
    "WAWebVoipNackHandlers",
    "WAWebVoipPopoutWindowState",
    "WAWebVoipStackInterface",
    "WAWebVoipUiDocPipPortalContainer.react",
    "WAWebVoipUiManager",
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
      v = 22,
      S = { videoMuted: !1, audioMuted: !1 },
      R = new (r("WAWebTypedEventEmitter"))();
    function L() {
      return S;
    }
    function E(e) {
      ((S = { videoMuted: e.videoMuted, audioMuted: e.audioMuted }),
        R.trigger("change", S));
    }
    function k() {
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
    function I(e) {
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
    function T(e, t) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = e.data,
            a = n.audioDeviceId,
            i = n.audioMuted,
            l = n.autoJoin,
            u = n.callType,
            c = n.colorIndex,
            d = n.speakerDeviceId,
            m = n.token,
            R = n.videoDeviceId,
            L = n.videoMuted;
          if (
            (t === void 0 && (t = 0),
            o("WALogger").LOG(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
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
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: handleClickCallLink blocked \u2014 call links not enabled",
                ])),
            );
            return;
          }
          if (!x(m)) {
            if (
              yield o(
                "WAWebVoipCallBlockedModals",
              ).showCallBlockedModalIfNeeded()
            ) {
              o("WALogger").LOG(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: handleClickCallLink blocked \u2014 call unavailable",
                  ])),
              );
              return;
            }
            ((S.videoMuted = L != null ? L : !1),
              (S.audioMuted = i != null ? i : !1));
            var E = u === "video";
            (I({
              audioDeviceId: a,
              colorIndex: c,
              speakerDeviceId: d,
              videoDeviceId: R,
            }),
              o("WAWebVoipCallLinkBundlePreloader").preloadCallLinkBundles());
            var T = o(
              "WAWebVoipInitEventEmitter",
            ).VoipInitEventEmitter.getIsVoipInited();
            T ||
              (r("WAWebCallCollection").setPendingCallLink({ isVideo: E }),
              k());
            try {
              yield o("WAWebEnsureVoipInited").ensureVoipInitialized();
            } catch (e) {
              (o("WALogger").LOG(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
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
              $ = yield o("WAWebVoipStackInterface").getVoipStackInterface();
            if ($ == null) {
              (o("WALogger").LOG(
                h ||
                  (h = babelHelpers.taggedTemplateLiteralLoose([
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
                y ||
                  (y = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: handleClickCallLink hasVoipStack=true isVideo=",
                    "",
                  ])),
                E,
              ),
              m.length !== v)
            ) {
              (o("WALogger").LOG(
                C ||
                  (C = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: handleClickCallLink: invalid token length ",
                    ", expected ",
                    "",
                  ])),
                m.length,
                v,
              ),
                r("WAWebCallCollection").setPendingCallLink(null),
                r("WAWebPipController").closePiP(),
                o("WAWebVoipNackHandlers").showErrorDialog(
                  s._(/*BTDS*/ "Invalid call link"),
                ));
              return;
            }
            var P = yield $.previewCallLink(m, E, t, D, L === !0);
            (i === !0 && $.type === "web" && (yield $.setCallMute(!0)),
              l === !0 &&
                $.type === "web" &&
                (P === 0
                  ? yield $.joinCallLink()
                  : o("WALogger").LOG(
                      b ||
                        (b = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: handleClickCallLink previewCallLink failed, skip join ",
                          "",
                        ])),
                      String(P),
                    )));
          }
        })),
        D.apply(this, arguments)
      );
    }
    function x(t) {
      var n = r("WAWebCallCollection").activeCall;
      if (n == null) return !1;
      var a = n.getState();
      return a == null || o("WAWebVoipCallStateUtils").isCallTerminal(a)
        ? !1
        : n.isCallLink && n.callLinkToken === t && $(n)
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
    function $(e) {
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
          window.focus(),
          o("WAWebVoipUiManager").closeVoipUiPopoutWindow({ callEnded: !1 }),
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
          : !1;
    }
    ((l.LandingPageMutePrefsEmitter = R),
      (l.getLandingPageMutePrefs = L),
      (l.updateLandingPageMutePrefs = E),
      (l.applyCallLinkDevicePrefs = I),
      (l.handleClickCallLink = T));
  },
  226,
);
