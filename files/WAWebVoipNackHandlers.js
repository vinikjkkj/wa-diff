__d(
  "WAWebVoipNackHandlers",
  [
    "fbt",
    "WALogger",
    "WAWebCallCollection",
    "WAWebConfirmPopup.react",
    "WAWebContactCollection",
    "WAWebCoreActionsODS",
    "WAWebFrontendContactGetters",
    "WAWebModalManager",
    "WAWebName.react",
    "WAWebNoop",
    "WAWebUserPrefsMeUser",
    "WAWebVoipEventConstants",
    "WAWebVoipSignalingEnums",
    "WAWebVoipStackInterface",
    "WAWebVoipUiManager",
    "WAWebWidFactory",
    "WDSText.react",
    "asyncToGeneratorRuntime",
    "react",
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
      C = y || (y = o("react")),
      b = {
        NackCallerCountry: 401,
        NackCallerNotEnabled: 403,
        NackCalleeCountry: 405,
        NackCalleePlatform: 406,
        NackUnknownReason: 409,
        NackDuplicateLinkedGroupCall: 411,
        NackCalleeAppVersion: 426,
        NackGroupCallNotEnabled: 427,
        NackGroupCallMaximumLimit: 428,
        NackGroupCallCapacityFull: 434,
        NackCalleeOSVersion: 460,
        NackUnavailable: 473,
      };
    function v(e, t, n) {
      o("WAWebModalManager").ModalManager.open(
        C.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
          onOK: function () {
            (o("WAWebModalManager").ModalManager.close(), t == null || t());
          },
          okText: s._(/*BTDS*/ "OK"),
          title: n,
          children: C.jsx(r("WDSText.react"), {
            type: "Body1",
            colorName: "contentDefault",
            children: e,
          }),
        }),
      );
    }
    function S() {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield o("WAWebVoipStackInterface").getVoipStackInterface();
          e != null && e.type === "web"
            ? yield e.endCall(
                o("WAWebVoipSignalingEnums").EndCallReason.Self,
                !0,
              )
            : (r("WAWebCallCollection").setActiveCall(null),
              r("WAWebCallCollection").setIsInConnectedCall(!1));
        })),
        R.apply(this, arguments)
      );
    }
    function L(t) {
      var n = t != null && o("WAWebUserPrefsMeUser").isMeAccount(t);
      if (n) {
        (o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "voip: handleCallOfferNacked: Self nacked for NackGroupCallNotEnabled (427)",
            ])),
        ),
          v(
            s._(
              /*BTDS*/ "Your version of WhatsApp doesn't support group calls.",
            ),
            r("WAWebNoop"),
          ));
        return;
      }
      o("WALogger").LOG(
        u ||
          (u = babelHelpers.taggedTemplateLiteralLoose([
            "voip: handleCallOfferNacked: Showing dialog for NackGroupCallNotEnabled (427) for peer",
          ])),
      );
      var a =
        t != null
          ? o("WAWebContactCollection").ContactCollection.gadd(t, {
              silent: !0,
            })
          : null;
      v(
        a != null
          ? s._(/*BTDS*/ "{name} can't join WhatsApp group calls right now.", [
              s._param(
                "name",
                C.jsx(o("WAWebName.react").Name, { contact: a }),
              ),
            ])
          : s._(
              /*BTDS*/ "This person's version of WhatsApp doesn't support group calls. Ask them to update WhatsApp and try again.",
            ),
      );
    }
    function E(e) {
      var t = r("WAWebCallCollection").activeCall;
      if (t) {
        for (var n of e.errors)
          switch (n.errorCode) {
            case b.NackUnknownReason:
            case b.NackUnavailable:
              o("WAWebCoreActionsODS").logCallErrorTerminal();
              break;
            case b.NackCallerCountry:
            case b.NackCallerNotEnabled:
            case b.NackCalleeCountry:
            case b.NackCalleePlatform:
            case b.NackCalleeAppVersion:
            case b.NackCalleeOSVersion:
              break;
            case b.NackGroupCallMaximumLimit:
            case b.NackGroupCallCapacityFull:
              break;
            default:
              break;
          }
        for (var a of e.errors)
          switch (a.errorCode) {
            case b.NackDuplicateLinkedGroupCall:
              (o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: handleCallOfferNacked: NackDuplicateLinkedGroupCall (411)",
                  ])),
              ),
                v(
                  s._(
                    /*BTDS*/ "Each group can only have one ongoing call at a time.",
                  ),
                  r("WAWebNoop"),
                  s._(/*BTDS*/ "Couldn't start call"),
                ));
              break;
            case b.NackGroupCallNotEnabled: {
              L(a.errorJid);
              break;
            }
            default:
              break;
          }
        if (e.isFatalNack) {
          (o("WALogger").LOG(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "voip: Fatal offer nack received, ending call",
              ])),
          ),
            S());
          return;
        }
        o("WALogger").LOG(
          m ||
            (m = babelHelpers.taggedTemplateLiteralLoose([
              "voip: Offer nack received, call continuing",
            ])),
        );
      }
    }
    var k = {
      BadRequest: 400,
      DoesNotExist: 404,
      UnsupportedAppVersion: 427,
      CallFull: 428,
      NotCompatible: 432,
      ServiceUnavailable: 503,
    };
    function I(e) {
      o("WALogger").LOG(
        p ||
          (p = babelHelpers.taggedTemplateLiteralLoose([
            "voip: handleCallLinkNacked: nackCode=",
            "",
          ])),
        e,
      );
      var t = T(e);
      v(t);
    }
    function T(e) {
      switch (e) {
        case k.DoesNotExist:
          return s._(/*BTDS*/ "Invalid call link");
        case k.CallFull:
          return s._(/*BTDS*/ "This call is full.");
        case k.UnsupportedAppVersion:
          return s._(/*BTDS*/ "Please update WhatsApp to join this call.");
        case k.ServiceUnavailable:
          return s._(/*BTDS*/ "Couldn't connect. Please try again later.");
        default:
          return s._(/*BTDS*/ "Couldn't join this call.");
      }
    }
    T.displayName = T.name + " [from " + i.id + "]";
    function D() {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          o("WALogger").LOG(
            g ||
              (g = babelHelpers.taggedTemplateLiteralLoose([
                "voip: handleLobbyNacked: ending call",
              ])),
          );
          var e = yield o("WAWebVoipStackInterface").getVoipStackInterface();
          (e != null && e.type === "web"
            ? yield e.endCall(
                o("WAWebVoipSignalingEnums").EndCallReason.Unknown,
                !0,
              )
            : (r("WAWebCallCollection").setActiveCall(null),
              r("WAWebCallCollection").setIsInConnectedCall(!1)),
            o("WAWebVoipUiManager").closeAllVoipWindows({
              callEnded: !0,
              surveyInteracted: !1,
            }),
            v(s._(/*BTDS*/ "Couldn't connect.")));
        })),
        x.apply(this, arguments)
      );
    }
    function $() {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          o("WALogger").LOG(
            h ||
              (h = babelHelpers.taggedTemplateLiteralLoose([
                "voip: handleLobbyTimeout: ending call",
              ])),
          );
          var e = yield o("WAWebVoipStackInterface").getVoipStackInterface();
          (e != null && e.type === "web"
            ? yield e.endCall(
                o("WAWebVoipSignalingEnums").EndCallReason.Unknown,
                !0,
              )
            : (r("WAWebCallCollection").setActiveCall(null),
              r("WAWebCallCollection").setIsInConnectedCall(!1)),
            o("WAWebVoipUiManager").closeAllVoipWindows({
              callEnded: !0,
              surveyInteracted: !1,
            }),
            v(s._(/*BTDS*/ "Call preview has timed out.")));
        })),
        P.apply(this, arguments)
      );
    }
    function N(e) {
      o("WALogger").LOG(
        _ ||
          (_ = babelHelpers.taggedTemplateLiteralLoose([
            "voip: showUserRemovedDialog: removerJid=",
            "",
          ])),
        e != null ? e : "null",
      );
      var t = "";
      if (e != null && e !== "") {
        var n = o("WAWebContactCollection").ContactCollection.get(e);
        (n != null && (t = o("WAWebFrontendContactGetters").getDisplayName(n)),
          t === "" && (t = e));
      }
      var r =
        t !== ""
          ? s._(/*BTDS*/ "You have been removed from the call by {name}.", [
              s._param("name", t),
            ])
          : s._(/*BTDS*/ "You have been removed from the call.");
      v(
        r,
        function () {
          o("WAWebVoipUiManager").closeAllVoipWindows({
            callEnded: !0,
            surveyInteracted: !1,
          });
        },
        s._(/*BTDS*/ "Call has ended"),
      );
    }
    function M(e) {
      var t;
      try {
        t = o("WAWebWidFactory").createWid(e);
      } catch (t) {
        o("WALogger").WARN(
          f ||
            (f = babelHelpers.taggedTemplateLiteralLoose([
              "voip: showParticipantRemovedToast: invalid jid ",
              "",
            ])),
          e,
        );
        return;
      }
      r("WAWebCallCollection").trigger(
        o("WAWebVoipEventConstants").getChangeEvent(
          o("WAWebVoipEventConstants").VoipCallCollectionEvents
            .PARTICIPANT_REMOVED,
        ),
        { jid: t },
      );
    }
    ((l.showErrorDialog = v),
      (l.handleCallOfferNacked = E),
      (l.handleCallLinkNacked = I),
      (l.handleLobbyNacked = D),
      (l.handleLobbyTimeout = $),
      (l.showUserRemovedDialog = N),
      (l.showParticipantRemovedToast = M));
  },
  226,
);
