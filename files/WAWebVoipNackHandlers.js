__d(
  "WAWebVoipNackHandlers",
  [
    "fbt",
    "WALogger",
    "WAWebCallCollection",
    "WAWebConfirmPopup.react",
    "WAWebContactCollection",
    "WAWebCoreActionsODS",
    "WAWebModalManager",
    "WAWebName.react",
    "WAWebNoop",
    "WAWebUserPrefsMeUser",
    "WAWebVoipSignalingEnums",
    "WAWebVoipStackInterface",
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
      h = g || (g = o("react")),
      y = {
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
    function C(e, t, n) {
      o("WAWebModalManager").ModalManager.open(
        h.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
          onOK: function () {
            (o("WAWebModalManager").ModalManager.close(), t == null || t());
          },
          okText: s._(/*BTDS*/ "OK"),
          title: n,
          children: h.jsx(r("WDSText.react"), {
            type: "Body1",
            colorName: "contentDefault",
            children: e,
          }),
        }),
      );
    }
    function b() {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield o("WAWebVoipStackInterface").getVoipStackInterface();
          e != null && e.type === "web"
            ? yield e.endCall(
                o("WAWebVoipSignalingEnums").EndCallReason.Self,
                !0,
              )
            : (r("WAWebCallCollection").setActiveCall(null),
              r("WAWebCallCollection").setIsInConnectedCall(!1));
        })),
        v.apply(this, arguments)
      );
    }
    function S(t, n) {
      var a = t != null && o("WAWebUserPrefsMeUser").isMeAccount(t);
      if (a)
        return (
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "voip: handleCallOfferNacked: Self nacked for NackGroupCallNotEnabled (427)",
              ])),
          ),
          C(
            s._(
              /*BTDS*/ "Your version of WhatsApp doesn't support group calls.",
            ),
            r("WAWebNoop"),
          ),
          n
        );
      o("WALogger").LOG(
        u ||
          (u = babelHelpers.taggedTemplateLiteralLoose([
            "voip: handleCallOfferNacked: Showing dialog for NackGroupCallNotEnabled (427) for peer, isCompleteNack=",
            "",
          ])),
        n,
      );
      var i =
        t != null
          ? o("WAWebContactCollection").ContactCollection.gadd(t, {
              silent: !0,
            })
          : null;
      return (
        C(
          i != null
            ? s._(
                /*BTDS*/ "{name} is unable to join WhatsApp group calls at this time.",
                [
                  s._param(
                    "name",
                    h.jsx(o("WAWebName.react").Name, { contact: i }),
                  ),
                ],
              )
            : s._(
                /*BTDS*/ "This person's version of WhatsApp doesn't support group calls. Ask them to update WhatsApp and try again.",
              ),
        ),
        !1
      );
    }
    function R(e) {
      var t = r("WAWebCallCollection").activeCall;
      if (t) {
        for (var n of e.errors)
          switch (n.errorCode) {
            case y.NackUnknownReason:
            case y.NackUnavailable:
              o("WAWebCoreActionsODS").logCallErrorTerminal();
              break;
            case y.NackCallerCountry:
            case y.NackCallerNotEnabled:
            case y.NackCalleeCountry:
            case y.NackCalleePlatform:
            case y.NackCalleeAppVersion:
            case y.NackCalleeOSVersion:
              break;
            case y.NackGroupCallMaximumLimit:
            case y.NackGroupCallCapacityFull:
              break;
            default:
              break;
          }
        var a = e.isCompleteNack;
        for (var i of e.errors)
          switch (i.errorCode) {
            case y.NackDuplicateLinkedGroupCall:
              (o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: handleCallOfferNacked: NackDuplicateLinkedGroupCall (411)",
                  ])),
              ),
                C(
                  s._(
                    /*BTDS*/ "Each group can only have one ongoing call at a time.",
                  ),
                  r("WAWebNoop"),
                  s._(/*BTDS*/ "Call Failed"),
                ));
              break;
            case y.NackGroupCallNotEnabled: {
              a = S(i.errorJid, a);
              break;
            }
            default:
              break;
          }
        if (a) {
          (o("WALogger").LOG(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "voip: Complete nack received, ending call",
              ])),
          ),
            b());
          return;
        }
        o("WALogger").LOG(
          m ||
            (m = babelHelpers.taggedTemplateLiteralLoose([
              "voip: Partial nack received, call continuing",
            ])),
        );
      }
    }
    var L = {
      BadRequest: 400,
      DoesNotExist: 404,
      UnsupportedAppVersion: 427,
      CallFull: 428,
      NotCompatible: 432,
      ServiceUnavailable: 503,
    };
    function E(e) {
      o("WALogger").LOG(
        p ||
          (p = babelHelpers.taggedTemplateLiteralLoose([
            "voip: handleCallLinkNacked: nackCode=",
            "",
          ])),
        e,
      );
      var t = k(e);
      C(t);
    }
    function k(e) {
      switch (e) {
        case L.DoesNotExist:
          return s._(/*BTDS*/ "Invalid call link");
        case L.CallFull:
          return s._(/*BTDS*/ "This call is full.");
        case L.UnsupportedAppVersion:
          return s._(/*BTDS*/ "Please update WhatsApp to join this call.");
        case L.ServiceUnavailable:
          return s._(/*BTDS*/ "Unable to connect. Please try again later.");
        default:
          return s._(/*BTDS*/ "Couldn't join this call.");
      }
    }
    k.displayName = k.name + " [from " + i.id + "]";
    function I() {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          o("WALogger").LOG(
            _ ||
              (_ = babelHelpers.taggedTemplateLiteralLoose([
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
            C(s._(/*BTDS*/ "Unable to connect.")));
        })),
        T.apply(this, arguments)
      );
    }
    function D() {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          o("WALogger").LOG(
            f ||
              (f = babelHelpers.taggedTemplateLiteralLoose([
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
            C(s._(/*BTDS*/ "Call preview has timed out.")));
        })),
        x.apply(this, arguments)
      );
    }
    ((l.showErrorDialog = C),
      (l.handleCallOfferNacked = R),
      (l.handleCallLinkNacked = E),
      (l.handleLobbyNacked = I),
      (l.handleLobbyTimeout = D));
  },
  226,
);
