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
    "WAWebVoipGatingUtils",
    "WAWebVoipInitEventEmitter",
    "WAWebVoipNackHandlers",
    "WAWebVoipStackInterface",
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
      g = 22,
      h = { videoMuted: !1, audioMuted: !1 },
      y = new (r("WAWebTypedEventEmitter"))();
    function C() {
      return h;
    }
    function b(e) {
      ((h = { videoMuted: e.videoMuted, audioMuted: e.audioMuted }),
        y.trigger("change", h));
    }
    function v() {
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
    function S(e) {
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
    function R(e, t) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var a = t.data,
            i = a.audioDeviceId,
            l = a.audioMuted,
            y = a.autoJoin,
            C = a.callType,
            b = a.colorIndex,
            R = a.speakerDeviceId,
            L = a.token,
            E = a.videoDeviceId,
            k = a.videoMuted;
          if (
            (n === void 0 && (n = 0),
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: handleClickCallLink token=",
                  " type=",
                  " lobby=",
                  "",
                ])),
              L,
              C,
              n,
            ),
            !o("WAWebVoipGatingUtils").callLinksEnabled())
          ) {
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: handleClickCallLink blocked \u2014 call links not enabled",
                ])),
            );
            return;
          }
          if (
            yield o("WAWebVoipCallBlockedModals").showCallBlockedModalIfNeeded()
          ) {
            o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: handleClickCallLink blocked \u2014 call unavailable",
                ])),
            );
            return;
          }
          ((h.videoMuted = k != null ? k : !1),
            (h.audioMuted = l != null ? l : !1));
          var I = C === "video";
          (S({
            audioDeviceId: i,
            colorIndex: b,
            speakerDeviceId: R,
            videoDeviceId: E,
          }),
            o("WAWebVoipCallLinkBundlePreloader").preloadCallLinkBundles());
          var T = o(
            "WAWebVoipInitEventEmitter",
          ).VoipInitEventEmitter.getIsVoipInited();
          T ||
            (r("WAWebCallCollection").setPendingCallLink({ isVideo: I }), v());
          try {
            yield o("WAWebEnsureVoipInited").ensureVoipInitialized();
          } catch (e) {
            (o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
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
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
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
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: handleClickCallLink hasVoipStack=true isVideo=",
                  "",
                ])),
              I,
            ),
            L.length !== g)
          ) {
            (o("WALogger").LOG(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: handleClickCallLink: invalid token length ",
                  ", expected ",
                  "",
                ])),
              L.length,
              g,
            ),
              r("WAWebCallCollection").setPendingCallLink(null),
              r("WAWebPipController").closePiP(),
              o("WAWebVoipNackHandlers").showErrorDialog(
                s._(/*BTDS*/ "Invalid call link"),
              ));
            return;
          }
          var $ = yield x.previewCallLink(L, I, n, D, k === !0);
          (l === !0 && x.type === "web" && (yield x.setCallMute(!0)),
            y === !0 &&
              x.type === "web" &&
              ($ === 0
                ? yield x.joinCallLink()
                : o("WALogger").LOG(
                    f ||
                      (f = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: handleClickCallLink previewCallLink failed, skip join ",
                        "",
                      ])),
                    String($),
                  )));
        })),
        L.apply(this, arguments)
      );
    }
    ((l.LandingPageMutePrefsEmitter = y),
      (l.getLandingPageMutePrefs = C),
      (l.updateLandingPageMutePrefs = b),
      (l.applyCallLinkDevicePrefs = S),
      (l.handleClickCallLink = R));
  },
  226,
);
