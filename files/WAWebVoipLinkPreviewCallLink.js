__d(
  "WAWebVoipLinkPreviewCallLink",
  [
    "fbt",
    "WALogger",
    "WAWebCallCollection",
    "WAWebCallLinkAutoJoinConsent",
    "WAWebEnsureVoipInited",
    "WAWebEventEmitter",
    "WAWebFrontendContactGetters",
    "WAWebPipController",
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
    "justknobx",
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
      L = new (r("WAWebEventEmitter"))();
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
    async function D(t, n) {
      var a = t.data,
        i = a.audioDeviceId,
        l = a.audioMuted,
        g = a.autoJoin,
        h = a.callType,
        y = a.colorIndex,
        C = a.speakerDeviceId,
        b = a.token,
        v = a.videoDeviceId,
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
          b,
          h,
          n,
        ),
        !o("WAWebVoipGatingUtils").isCallingEnabled())
      ) {
        (o("WALogger").LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "voip: handleClickCallLink blocked \u2014 call links not enabled",
            ])),
        ),
          o("WAWebCallLinkAutoJoinConsent").dropAutoJoinConsentRefusedByGate(
            g,
            b,
          ),
          x());
        return;
      }
      if ($(b)) {
        o(
          "WAWebCallLinkAutoJoinConsent",
        ).dropAutoJoinConsentRefusedByExistingCall(g, b);
        return;
      }
      var E = o("WAWebCallLinkAutoJoinConsent").consumeAutoJoinConsent(g, b);
      if (
        await o("WAWebVoipCallBlockedModals").showCallBlockedModalIfNeeded()
      ) {
        o("WALogger").LOG(
          c ||
            (c = babelHelpers.taggedTemplateLiteralLoose([
              "voip: handleClickCallLink blocked \u2014 call unavailable",
            ])),
        );
        return;
      }
      ((R.videoMuted = L != null ? L : !1),
        (R.audioMuted = l != null ? l : !1));
      var k = h === "video";
      (E &&
        T({
          audioDeviceId: i,
          colorIndex: y,
          speakerDeviceId: C,
          videoDeviceId: v,
        }),
        o("WAWebVoipCallLinkBundlePreloader").preloadCallLinkBundles());
      var D = o(
        "WAWebVoipInitEventEmitter",
      ).VoipInitEventEmitter.getIsVoipInited();
      D || (r("WAWebCallCollection").setPendingCallLink({ isVideo: k }), I());
      try {
        await o("WAWebEnsureVoipInited").ensureVoipInitialized();
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
          e instanceof o("WAWebEnsureVoipInited").VoipInitUnavailableError ||
            o("WAWebVoipCallBlockedModals").showCouldNotPlaceCallModal());
        return;
      }
      var P = o("WAWebFrontendContactGetters").getMyUsername(),
        N = await o("WAWebVoipStackInterface").getVoipStackInterface();
      if (N == null) {
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
          k,
        ),
        b.length !== S)
      ) {
        (o("WALogger").LOG(
          _ ||
            (_ = babelHelpers.taggedTemplateLiteralLoose([
              "voip: handleClickCallLink: invalid token length ",
              ", expected ",
              "",
            ])),
          b.length,
          S,
        ),
          r("WAWebCallCollection").setPendingCallLink(null),
          r("WAWebPipController").closePiP(),
          o("WAWebVoipNackHandlers").showErrorDialog(
            r("justknobx")._("8427") ? s._(/*BTDS*/ "") : s._(/*BTDS*/ ""),
          ));
        return;
      }
      var M = await N.previewCallLink(b, k, n, P, L === !0);
      (l === !0 && N.type === "web" && (await N.setCallMute(!0)),
        E &&
          N.type === "web" &&
          (M === 0
            ? (o("WAWebCallLinkAutoJoinConsent").reportAutoJoinAttempted(),
              await N.joinCallLink())
            : o("WALogger").LOG(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: handleClickCallLink previewCallLink failed, skip join ",
                    "",
                  ])),
                String(M),
              )));
    }
    function x() {
      o("WAWebVoipNackHandlers").showErrorDialog(
        s._(/*BTDS*/ ""),
        void 0,
        s._(/*BTDS*/ ""),
      );
    }
    function $(e) {
      var t = r("WAWebCallCollection").activeCall;
      if (t == null) return !1;
      var n = t.getState();
      return n == null || o("WAWebVoipCallStateUtils").isCallTerminal(n)
        ? !1
        : t.isCallLink && t.callLinkToken === e && P(t)
          ? !0
          : o("WAWebVoipCallStateUtils").isCallIncoming(n) && t.msg != null
            ? (o("WALogger").LOG(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: handleClickCallLink \u2014 incoming call ringing, opening miniplayer",
                  ])),
              ),
              r("WAWebPipController").openVoipUiPiP(t.msg),
              !0)
            : (o("WALogger").LOG(
                h ||
                  (h = babelHelpers.taggedTemplateLiteralLoose([
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
            y ||
              (y = babelHelpers.taggedTemplateLiteralLoose([
                "voip: handleClickCallLink \u2014 already in this call link, pulling call back to this window",
              ])),
          ),
          o("WAWebVoipMoveCallHere").moveCallHere(),
          !0
        );
      var t = e.callLinkState;
      return t != null && t !== o("WAWebVoipWaCallEnums").CallLinkState.None
        ? (o("WALogger").LOG(
            C ||
              (C = babelHelpers.taggedTemplateLiteralLoose([
                "voip: handleClickCallLink \u2014 already in this call link, reopening call-link UI",
              ])),
          ),
          r("WAWebPipController").openVoipUiPiPForCallLink(),
          !0)
        : e.msg != null
          ? (o("WALogger").LOG(
              b ||
                (b = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: handleClickCallLink \u2014 already in this call link, opening miniplayer",
                ])),
            ),
            r("WAWebPipController").openVoipUiPiP(e.msg),
            !0)
          : (o("WALogger").LOG(
              v ||
                (v = babelHelpers.taggedTemplateLiteralLoose([
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
