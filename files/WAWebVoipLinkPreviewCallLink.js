__d(
  "WAWebVoipLinkPreviewCallLink",
  [
    "fbt",
    "WALogger",
    "WAWebCallCollection",
    "WAWebEnsureVoipInited",
    "WAWebFrontendContactGetters",
    "WAWebPipController",
    "WAWebUserPrefsVoip",
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
      _ = 22,
      f = { videoMuted: !1, audioMuted: !1 };
    function g() {
      return f;
    }
    function h() {
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
    function y(e) {
      (e.audioDeviceId != null &&
        o("WAWebUserPrefsVoip").setSelectedAudioInputDevice(e.audioDeviceId),
        e.speakerDeviceId != null &&
          o("WAWebUserPrefsVoip").setSelectedAudioOutputDevice(
            e.speakerDeviceId,
          ),
        e.videoDeviceId != null &&
          o("WAWebUserPrefsVoip").setLandingPageVideoDeviceId(e.videoDeviceId),
        e.colorIndex != null &&
          o("WAWebUserPrefsVoip").saveLandingPageColorIndex(e.colorIndex));
    }
    function C(e, t) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var a = t.data,
            i = a.audioDeviceId,
            l = a.audioMuted,
            g = a.callType,
            C = a.colorIndex,
            b = a.speakerDeviceId,
            v = a.token,
            S = a.videoDeviceId,
            R = a.videoMuted;
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
              v,
              g,
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
          ((f.videoMuted = R != null ? R : !1),
            (f.audioMuted = l != null ? l : !1));
          var L = g === "video";
          y({
            audioDeviceId: i,
            colorIndex: C,
            speakerDeviceId: b,
            videoDeviceId: S,
          });
          var E = o(
            "WAWebVoipInitEventEmitter",
          ).VoipInitEventEmitter.getIsVoipInited();
          E ||
            (r("WAWebCallCollection").setPendingCallLink({ isVideo: L }), h());
          try {
            yield o("WAWebEnsureVoipInited").ensureVoipInitialized();
          } catch (e) {
            (o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: handleClickCallLink init failed: ",
                  "",
                ])),
              String(e),
            ),
              r("WAWebCallCollection").setPendingCallLink(null),
              r("WAWebPipController").closePiP());
            return;
          }
          var k = o("WAWebFrontendContactGetters").getMyUsername(),
            I = yield o("WAWebVoipStackInterface").getVoipStackInterface();
          if (I == null) {
            (o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: previewCallLink aborted - voipStackInterface is null",
                ])),
            ),
              r("WAWebCallCollection").setPendingCallLink(null),
              r("WAWebPipController").closePiP());
            return;
          }
          if (
            (o("WALogger").LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: handleClickCallLink hasVoipStack=true isVideo=",
                  "",
                ])),
              L,
            ),
            v.length !== _)
          ) {
            (o("WALogger").LOG(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: handleClickCallLink: invalid token length ",
                  ", expected ",
                  "",
                ])),
              v.length,
              _,
            ),
              r("WAWebCallCollection").setPendingCallLink(null),
              r("WAWebPipController").closePiP(),
              o("WAWebVoipNackHandlers").showErrorDialog(
                s._(/*BTDS*/ "Invalid call link"),
              ));
            return;
          }
          (yield I.previewCallLink(v, L, n, k),
            R === !0 && I.type === "web" && (yield I.setCallVideoMute(!0)),
            l === !0 && I.type === "web" && (yield I.setCallMute(!0)));
        })),
        b.apply(this, arguments)
      );
    }
    ((l.getLandingPageMutePrefs = g),
      (l.applyCallLinkDevicePrefs = y),
      (l.handleClickCallLink = C));
  },
  226,
);
