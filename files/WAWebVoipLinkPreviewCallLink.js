__d(
  "WAWebVoipLinkPreviewCallLink",
  [
    "fbt",
    "WALogger",
    "WAWebCallCollection",
    "WAWebFrontendContactGetters",
    "WAWebPipController",
    "WAWebUserPrefsVoip",
    "WAWebVoipBackendLoadable",
    "WAWebVoipGatingUtils",
    "WAWebVoipInitEventEmitter",
    "WAWebVoipNackHandlers",
    "WAWebVoipStackInterface",
    "asyncToGeneratorRuntime",
    "err",
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
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (
            !o(
              "WAWebVoipInitEventEmitter",
            ).VoipInitEventEmitter.getIsVoipInited()
          ) {
            var e = yield o("WAWebVoipBackendLoadable").requireVoipJsBackend(),
              t = e.WAWebVoipInit;
            if (
              (yield t.initWAWebVoip(),
              !o(
                "WAWebVoipInitEventEmitter",
              ).VoipInitEventEmitter.getIsVoipInited())
            )
              throw r("err")("VoIP initialization did not complete");
          }
        })),
        y.apply(this, arguments)
      );
    }
    function C() {
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
    function b(e) {
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
    function v(e, t) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var a = t.data,
            i = a.audioDeviceId,
            l = a.audioMuted,
            g = a.callType,
            y = a.colorIndex,
            v = a.speakerDeviceId,
            S = a.token,
            R = a.videoDeviceId,
            L = a.videoMuted;
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
              S,
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
          ((f.videoMuted = L != null ? L : !1),
            (f.audioMuted = l != null ? l : !1));
          var E = g === "video";
          b({
            audioDeviceId: i,
            colorIndex: y,
            speakerDeviceId: v,
            videoDeviceId: R,
          });
          var k = o(
            "WAWebVoipInitEventEmitter",
          ).VoipInitEventEmitter.getIsVoipInited();
          k ||
            (r("WAWebCallCollection").setPendingCallLink({ isVideo: E }), C());
          try {
            yield h();
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
          var I = o("WAWebFrontendContactGetters").getMyUsername(),
            T = yield o("WAWebVoipStackInterface").getVoipStackInterface();
          if (T == null) {
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
              E,
            ),
            S.length !== _)
          ) {
            (o("WALogger").LOG(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: handleClickCallLink: invalid token length ",
                  ", expected ",
                  "",
                ])),
              S.length,
              _,
            ),
              r("WAWebCallCollection").setPendingCallLink(null),
              r("WAWebPipController").closePiP(),
              o("WAWebVoipNackHandlers").showErrorDialog(
                s._(/*BTDS*/ "Invalid call link"),
              ));
            return;
          }
          (yield T.previewCallLink(S, E, n, I),
            L === !0 && T.type === "web" && (yield T.setCallVideoMute(!0)),
            l === !0 && T.type === "web" && (yield T.setCallMute(!0)));
        })),
        S.apply(this, arguments)
      );
    }
    ((l.getLandingPageMutePrefs = g),
      (l.applyCallLinkDevicePrefs = b),
      (l.handleClickCallLink = v));
  },
  226,
);
