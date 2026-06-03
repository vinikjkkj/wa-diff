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
      _,
      f = 22,
      g = { videoMuted: !1, audioMuted: !1 };
    function h() {
      return g;
    }
    function y(e) {
      ((g.videoMuted = e.videoMuted), (g.audioMuted = e.audioMuted));
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
    function v(e, t) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var a = t.data,
            i = a.audioDeviceId,
            l = a.audioMuted,
            h = a.autoJoin,
            y = a.callType,
            v = a.colorIndex,
            S = a.speakerDeviceId,
            R = a.token,
            L = a.videoDeviceId,
            E = a.videoMuted;
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
              R,
              y,
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
          ((g.videoMuted = E != null ? E : !1),
            (g.audioMuted = l != null ? l : !1));
          var k = y === "video";
          b({
            audioDeviceId: i,
            colorIndex: v,
            speakerDeviceId: S,
            videoDeviceId: L,
          });
          var I = o(
            "WAWebVoipInitEventEmitter",
          ).VoipInitEventEmitter.getIsVoipInited();
          I ||
            (r("WAWebCallCollection").setPendingCallLink({ isVideo: k }), C());
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
          var T = o("WAWebFrontendContactGetters").getMyUsername(),
            D = yield o("WAWebVoipStackInterface").getVoipStackInterface();
          if (D == null) {
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
              k,
            ),
            R.length !== f)
          ) {
            (o("WALogger").LOG(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: handleClickCallLink: invalid token length ",
                  ", expected ",
                  "",
                ])),
              R.length,
              f,
            ),
              r("WAWebCallCollection").setPendingCallLink(null),
              r("WAWebPipController").closePiP(),
              o("WAWebVoipNackHandlers").showErrorDialog(
                s._(/*BTDS*/ "Invalid call link"),
              ));
            return;
          }
          var x = yield D.previewCallLink(R, k, n, T, E === !0);
          (l === !0 && D.type === "web" && (yield D.setCallMute(!0)),
            h === !0 &&
              D.type === "web" &&
              (x === 0
                ? yield D.joinCallLink()
                : o("WALogger").LOG(
                    _ ||
                      (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: handleClickCallLink: skipping auto-join, previewCallLink failed with status ",
                        "",
                      ])),
                    String(x),
                  )));
        })),
        S.apply(this, arguments)
      );
    }
    ((l.getLandingPageMutePrefs = h),
      (l.updateLandingPageMutePrefs = y),
      (l.applyCallLinkDevicePrefs = b),
      (l.handleClickCallLink = v));
  },
  226,
);
