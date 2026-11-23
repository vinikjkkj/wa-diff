__d(
  "WAWebVoipNackHandlers",
  [
    "fbt",
    "WALogger",
    "WAWebBackendRuntime",
    "WAWebCallCollection",
    "WAWebConfirmPopup.react",
    "WAWebContactCollection",
    "WAWebCoreActionsODS",
    "WAWebFrontendContactGetters",
    "WAWebGroupQueryJob",
    "WAWebGroupQueryService",
    "WAWebModalManager",
    "WAWebName.react",
    "WAWebNoop",
    "WAWebUserUtils",
    "WAWebVoipEventConstants",
    "WAWebVoipGatingUtils",
    "WAWebVoipSignalingEnums",
    "WAWebVoipStackInterface",
    "WAWebVoipUiManager",
    "WAWebWidFactory",
    "WDSText.react",
    "getErrorSafe",
    "justknobx",
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
          okText: s._(/*BTDS*/ ""),
          title: n,
          children: v.jsx(r("WDSText.react"), {
            type: "Body1",
            colorName: "contentDefault",
            children: e,
          }),
        }),
      );
    }
    async function L() {
      var e = await o("WAWebVoipStackInterface").getVoipStackInterface();
      e != null && e.type === "web"
        ? await e.endCall(o("WAWebVoipSignalingEnums").EndCallReason.Self, !0)
        : (r("WAWebCallCollection").setActiveCall(null),
          r("WAWebCallCollection").setIsInConnectedCall(!1));
    }
    function E(t) {
      var n = t != null && o("WAWebUserUtils").isMeAccount(t);
      if (n) {
        (o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "voip: handleCallOfferNacked: Self nacked for NackGroupCallNotEnabled (427)",
            ])),
        ),
          R(s._(/*BTDS*/ ""), r("WAWebNoop")));
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
          ? s._(/*BTDS*/ "", [
              s._param(
                "name",
                v.jsx(o("WAWebName.react").Name, {
                  showOrgIcon: !1,
                  contact: a,
                }),
              ),
            ])
          : s._(/*BTDS*/ ""),
      );
    }
    function k(e, t) {
      e.didRefreshGroupInfoOnMismatch ||
        (o("WAWebVoipGatingUtils").isRefreshGroupInfoOnMismatchEnabled() &&
          ((e.didRefreshGroupInfoOnMismatch = !0),
          o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "voip: handleCallOfferNacked: refreshing group info after membership mismatch (412)",
              ])),
          ),
          (o("WAWebBackendRuntime").isWebDiBackendEnabled()
            ? o("WAWebBackendRuntime").runtime(
                o("WAWebGroupQueryService").GroupQueryService,
              ).queryAndUpdateGroupMetadataById
            : o("WAWebGroupQueryJob").queryAndUpdateGroupMetadataById)({
            id: t,
          }).catch(function (t) {
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
    function I(e) {
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
                R(s._(/*BTDS*/ ""), r("WAWebNoop"), s._(/*BTDS*/ "")));
              break;
            case S.NackGroupCallNotEnabled: {
              E(a.errorJid);
              break;
            }
            case S.NackLinkedGroupCallMembershipMismatch: {
              var i = t.groupJid;
              t.isGroup && i != null && k(t, i);
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
    var T = {
      BadRequest: 400,
      DoesNotExist: 404,
      UnsupportedAppVersion: 427,
      CallFull: 428,
      NotCompatible: 432,
      ServiceUnavailable: 503,
    };
    function D(e) {
      o("WALogger").LOG(
        f ||
          (f = babelHelpers.taggedTemplateLiteralLoose([
            "voip: handleCallLinkNacked: nackCode=",
            "",
          ])),
        e,
      );
      var t = x(e);
      R(t);
    }
    function x(e) {
      switch (e) {
        case T.DoesNotExist:
          return r("justknobx")._("8427") ? s._(/*BTDS*/ "") : s._(/*BTDS*/ "");
        case T.CallFull:
          return s._(/*BTDS*/ "");
        case T.UnsupportedAppVersion:
          return r("justknobx")._("8427") ? s._(/*BTDS*/ "") : s._(/*BTDS*/ "");
        case T.ServiceUnavailable:
          return s._(/*BTDS*/ "");
        default:
          return s._(/*BTDS*/ "");
      }
    }
    x.displayName = x.name + " [from " + i.id + "]";
    async function $() {
      o("WALogger").LOG(
        g ||
          (g = babelHelpers.taggedTemplateLiteralLoose([
            "voip: handleLobbyNacked: ending call",
          ])),
      );
      var e = await o("WAWebVoipStackInterface").getVoipStackInterface();
      (e != null && e.type === "web"
        ? await e.endCall(
            o("WAWebVoipSignalingEnums").EndCallReason.Unknown,
            !0,
          )
        : (r("WAWebCallCollection").setActiveCall(null),
          r("WAWebCallCollection").setIsInConnectedCall(!1)),
        o("WAWebVoipUiManager").closeAllVoipWindows({
          callEnded: !0,
          surveyInteracted: !1,
        }),
        R(s._(/*BTDS*/ "")));
    }
    async function P() {
      o("WALogger").LOG(
        h ||
          (h = babelHelpers.taggedTemplateLiteralLoose([
            "voip: handleLobbyTimeout: ending call",
          ])),
      );
      var e = await o("WAWebVoipStackInterface").getVoipStackInterface();
      (e != null && e.type === "web"
        ? await e.endCall(
            o("WAWebVoipSignalingEnums").EndCallReason.Unknown,
            !0,
          )
        : (r("WAWebCallCollection").setActiveCall(null),
          r("WAWebCallCollection").setIsInConnectedCall(!1)),
        o("WAWebVoipUiManager").closeAllVoipWindows({
          callEnded: !0,
          surveyInteracted: !1,
        }),
        R(s._(/*BTDS*/ "")));
    }
    function N(e) {
      o("WALogger").LOG(
        y ||
          (y = babelHelpers.taggedTemplateLiteralLoose([
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
      var a =
        t !== ""
          ? (r("justknobx")._("8068") &&
              s._(/*BTDS*/ "", [s._param("name", t)])) ||
            s._(/*BTDS*/ "", [s._param("name", t)])
          : (r("justknobx")._("8068") && s._(/*BTDS*/ "")) || s._(/*BTDS*/ "");
      R(
        a,
        function () {
          o("WAWebVoipUiManager").closeAllVoipWindows({
            callEnded: !0,
            surveyInteracted: !1,
          });
        },
        s._(/*BTDS*/ ""),
      );
    }
    function M(e) {
      var t;
      try {
        t = o("WAWebWidFactory").createWid(e);
      } catch (t) {
        o("WALogger").WARN(
          C ||
            (C = babelHelpers.taggedTemplateLiteralLoose([
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
      (l.handleCallOfferNacked = I),
      (l.handleCallLinkNacked = D),
      (l.handleLobbyNacked = $),
      (l.handleLobbyTimeout = P),
      (l.showUserRemovedDialog = N),
      (l.showParticipantRemovedToast = M));
  },
  226,
);
