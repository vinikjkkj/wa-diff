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
    "WAWebGroupQueryJob",
    "WAWebModalManager",
    "WAWebName.react",
    "WAWebNoop",
    "WAWebUserPrefsMeUser",
    "WAWebVoipEventConstants",
    "WAWebVoipGatingUtils",
    "WAWebVoipSignalingEnums",
    "WAWebVoipStackInterface",
    "WAWebVoipUiManager",
    "WAWebWidFactory",
    "WDSText.react",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
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
      C,
      b,
      v = b || (b = o("react")),
      S = {
        NackCallerCountry: 401,
        NackCallerNotEnabled: 403,
        NackCalleeCountry: 405,
        NackCalleePlatform: 406,
        NackUnknownReason: 409,
        NackDuplicateLinkedGroupCall: 411,
        NackCalleeAppVersion: 426,
        NackGroupCallNotEnabled: 427,
        NackLinkedGroupCallMembershipMismatch: 412,
        NackGroupCallMaximumLimit: 428,
        NackGroupCallCapacityFull: 434,
        NackCalleeOSVersion: 460,
        NackUnavailable: 473,
      };
    function R(e, t, n) {
      o("WAWebModalManager").ModalManager.open(
        v.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
          onOK: function () {
            (o("WAWebModalManager").ModalManager.close(), t == null || t());
          },
          okText: s._(/*BTDS*/ "OK"),
          title: n,
          children: v.jsx(r("WDSText.react"), {
            type: "Body1",
            colorName: "contentDefault",
            children: e,
          }),
        }),
      );
    }
    function L() {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield o("WAWebVoipStackInterface").getVoipStackInterface();
          e != null && e.type === "web"
            ? yield e.endCall(
                o("WAWebVoipSignalingEnums").EndCallReason.Self,
                !0,
              )
            : (r("WAWebCallCollection").setActiveCall(null),
              r("WAWebCallCollection").setIsInConnectedCall(!1));
        })),
        E.apply(this, arguments)
      );
    }
    function k(t) {
      var n = t != null && o("WAWebUserPrefsMeUser").isMeAccount(t);
      if (n) {
        (o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "voip: handleCallOfferNacked: Self nacked for NackGroupCallNotEnabled (427)",
            ])),
        ),
          R(
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
      R(
        a != null
          ? s._(/*BTDS*/ "{name} can't join WhatsApp group calls right now.", [
              s._param(
                "name",
                v.jsx(o("WAWebName.react").Name, { contact: a }),
              ),
            ])
          : s._(
              /*BTDS*/ "This person's version of WhatsApp doesn't support group calls. Ask them to update WhatsApp and try again.",
            ),
      );
    }
    function I(e, t) {
      e.didRefreshGroupInfoOnMismatch ||
        (o("WAWebVoipGatingUtils").isRefreshGroupInfoOnMismatchEnabled() &&
          ((e.didRefreshGroupInfoOnMismatch = !0),
          o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "voip: handleCallOfferNacked: refreshing group info after membership mismatch (412)",
              ])),
          ),
          o("WAWebGroupQueryJob")
            .queryAndUpdateGroupMetadataById({ id: t })
            .catch(function (t) {
              ((e.didRefreshGroupInfoOnMismatch = !1),
                o("WALogger")
                  .ERROR(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: handleCallOfferNacked: group info refresh failed",
                      ])),
                  )
                  .catching(r("getErrorSafe")(t))
                  .sendLogs("voip-refresh-group-info-on-mismatch"));
            })));
    }
    function T(e) {
      var t = r("WAWebCallCollection").activeCall;
      if (t) {
        for (var n of e.errors)
          switch (n.errorCode) {
            case S.NackUnknownReason:
            case S.NackUnavailable:
              o("WAWebCoreActionsODS").logCallErrorTerminal();
              break;
            case S.NackCallerCountry:
            case S.NackCallerNotEnabled:
            case S.NackCalleeCountry:
            case S.NackCalleePlatform:
            case S.NackCalleeAppVersion:
            case S.NackCalleeOSVersion:
              break;
            case S.NackGroupCallMaximumLimit:
            case S.NackGroupCallCapacityFull:
              break;
            default:
              break;
          }
        for (var a of e.errors)
          switch (a.errorCode) {
            case S.NackDuplicateLinkedGroupCall:
              (o("WALogger").LOG(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: handleCallOfferNacked: NackDuplicateLinkedGroupCall (411)",
                  ])),
              ),
                R(
                  s._(
                    /*BTDS*/ "Each group can only have one ongoing call at a time.",
                  ),
                  r("WAWebNoop"),
                  s._(/*BTDS*/ "Couldn't start call"),
                ));
              break;
            case S.NackGroupCallNotEnabled: {
              k(a.errorJid);
              break;
            }
            case S.NackLinkedGroupCallMembershipMismatch: {
              var i = t.groupJid;
              t.isGroup && i != null && I(t, i);
              break;
            }
            default:
              break;
          }
        if (e.isFatalNack) {
          (o("WALogger").LOG(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "voip: Fatal offer nack received, ending call",
              ])),
          ),
            L());
          return;
        }
        o("WALogger").LOG(
          _ ||
            (_ = babelHelpers.taggedTemplateLiteralLoose([
              "voip: Offer nack received, call continuing",
            ])),
        );
      }
    }
    var D = {
      BadRequest: 400,
      DoesNotExist: 404,
      UnsupportedAppVersion: 427,
      CallFull: 428,
      NotCompatible: 432,
      ServiceUnavailable: 503,
    };
    function x(e) {
      o("WALogger").LOG(
        f ||
          (f = babelHelpers.taggedTemplateLiteralLoose([
            "voip: handleCallLinkNacked: nackCode=",
            "",
          ])),
        e,
      );
      var t = $(e);
      R(t);
    }
    function $(e) {
      switch (e) {
        case D.DoesNotExist:
          return s._(/*BTDS*/ "Invalid call link");
        case D.CallFull:
          return s._(/*BTDS*/ "This call is full.");
        case D.UnsupportedAppVersion:
          return s._(/*BTDS*/ "Please update WhatsApp to join this call.");
        case D.ServiceUnavailable:
          return s._(/*BTDS*/ "Couldn't connect. Please try again later.");
        default:
          return s._(/*BTDS*/ "Couldn't join this call.");
      }
    }
    $.displayName = $.name + " [from " + i.id + "]";
    function P() {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          o("WALogger").LOG(
            y ||
              (y = babelHelpers.taggedTemplateLiteralLoose([
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
            R(s._(/*BTDS*/ "Couldn't connect.")));
        })),
        N.apply(this, arguments)
      );
    }
    function M() {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          o("WALogger").LOG(
            C ||
              (C = babelHelpers.taggedTemplateLiteralLoose([
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
            R(s._(/*BTDS*/ "Call preview has timed out.")));
        })),
        w.apply(this, arguments)
      );
    }
    function A(e) {
      o("WALogger").LOG(
        g ||
          (g = babelHelpers.taggedTemplateLiteralLoose([
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
      R(
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
    function F(e) {
      var t;
      try {
        t = o("WAWebWidFactory").createWid(e);
      } catch (t) {
        o("WALogger").WARN(
          h ||
            (h = babelHelpers.taggedTemplateLiteralLoose([
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
    ((l.showErrorDialog = R),
      (l.handleCallOfferNacked = T),
      (l.handleCallLinkNacked = x),
      (l.handleLobbyNacked = P),
      (l.handleLobbyTimeout = M),
      (l.showUserRemovedDialog = A),
      (l.showParticipantRemovedToast = F));
  },
  226,
);
