__d(
  "WAWebVoipStartCall",
  [
    "fbt",
    "WALogger",
    "WARandomHex",
    "WAWebAdvSyncDeviceListApi",
    "WAWebBackendApi",
    "WAWebBlockedParticipantCallWarning",
    "WAWebBuildConstants",
    "WAWebConfirmPopup.react",
    "WAWebConstantsDeprecated",
    "WAWebContactCollection",
    "WAWebCoreActionsODS",
    "WAWebEnvironment",
    "WAWebFbtIntlList",
    "WAWebFindChatAction",
    "WAWebFrontendContactGetters",
    "WAWebLidMigrationUtils",
    "WAWebModalManager",
    "WAWebNotificationIconUtils",
    "WAWebOpenCoexCallingFirstTimeModalUtils",
    "WAWebSendMsgDatabaseJob",
    "WAWebSendTcTokenChatAction",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUserPrefsMeUser",
    "WAWebVoipAcquireMediaStream",
    "WAWebVoipActionWriteCallLogEventUpdateJoinable",
    "WAWebVoipActivityTracker",
    "WAWebVoipBackendLoadable",
    "WAWebVoipGatingUtils",
    "WAWebVoipInitEventEmitter",
    "WAWebVoipOngoingCallCollection",
    "WAWebVoipStackInterface",
    "WAWebWamEnumLobbyEntryPointType",
    "cr:17219",
    "getErrorSafe",
    "nullthrows",
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
      v,
      S,
      R,
      L,
      E,
      k,
      I,
      T,
      D,
      x,
      $,
      P,
      N,
      M,
      w,
      A,
      F,
      O,
      B,
      W = B || (B = o("react")),
      q = (e = n("cr:17219")) != null ? e : {},
      U = q.getWindowsBridge,
      V = 5;
    function H() {
      var e = o("WAWebVoipGatingUtils").getUnsupportedBrowserReason();
      if (e == null) return !1;
      e: {
        if (e === "missing_shared_array_buffer") {
          o("WAWebCoreActionsODS").logCallBrowserUnsupportedMissingSAB();
          break e;
        }
        if (e === "missing_atomics") {
          o("WAWebCoreActionsODS").logCallBrowserUnsupportedMissingAtomics();
          break e;
        }
        if (e === "missing_rtc_peer_connection") {
          o("WAWebCoreActionsODS").logCallBrowserUnsupportedMissingRTC();
          break e;
        }
        if (e === "broken_voip_wasm") {
          o("WAWebCoreActionsODS").logCallBrowserUnsupportedBrokenWasm();
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      }
      return (
        o("WAWebModalManager").ModalManager.open(
          e === "broken_voip_wasm"
            ? W.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
                tsNavigationData: {
                  surface: "unknown",
                  viewName: "voip-start-call",
                },
                onOK: o("WAWebModalManager").closeModalManager,
                title: s._(
                  /*BTDS*/ "Your version of Safari doesn\u2019t support calls",
                ),
                children: s._(
                  /*BTDS*/ "Please update your browser to Safari 26.3 or higher and try again.",
                ),
              })
            : W.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
                tsNavigationData: {
                  surface: "unknown",
                  viewName: "voip-start-call",
                },
                onOK: o("WAWebModalManager").closeModalManager,
                title: s._(
                  /*BTDS*/ "Your browser doesn\u2019t support calling",
                ),
                children: s._(
                  /*BTDS*/ "Please update your browser or try another browser.",
                ),
              }),
        ),
        !0
      );
    }
    async function G() {
      if (
        !o(
          "WAWebVoipInitEventEmitter",
        ).VoipInitEventEmitter.getDidVoipInitError()
      )
        return !1;
      var e = await o("WAWebVoipBackendLoadable").requireVoipJsBackend(),
        t = e.WAWebVoipInit;
      return (await t.retryWAWebVoipInitAfterFailure())
        ? !1
        : (o("WAWebModalManager").ModalManager.open(
            W.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              tsNavigationData: {
                surface: "unknown",
                viewName: "voip-start-call",
              },
              onOK: o("WAWebModalManager").closeModalManager,
              title: s._(/*BTDS*/ "Couldn't place call"),
              children: s._(
                /*BTDS*/ "Couldn't place call. Refresh the page and try again.",
              ),
            }),
          ),
          !0);
    }
    function z() {
      return o(
        "WAWebVoipInitEventEmitter",
      ).VoipInitEventEmitter.getIsVoipInited()
        ? !1
        : (o("WAWebModalManager").ModalManager.open(
            W.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              tsNavigationData: {
                surface: "unknown",
                viewName: "voip-start-call",
              },
              onOK: o("WAWebModalManager").closeModalManager,
              title: s._(/*BTDS*/ "Couldn't place call"),
              children: s._(/*BTDS*/ "Please wait a moment and try again."),
            }),
          ),
          !0);
    }
    async function j() {
      return H() || (await G()) ? !0 : z();
    }
    async function K(e, t, n, a, i) {
      if (
        (n === void 0 && (n = 0),
        a === void 0 && (a = 0),
        i === void 0 && (i = null),
        !(await j()))
      ) {
        (o("WAWebVoipActivityTracker").startActivityTracking(),
          o("WAWebVoipActivityTracker").startUiActivityTracking());
        var l = await o(
          "WAWebVoipAcquireMediaStream",
        ).checkVoipDevicePermissions(t);
        if (!l) {
          o("WAWebVoipActivityTracker").clearAllActivityTracking();
          return;
        }
        var s = i != null ? i : re(),
          _ = o("WAWebLidMigrationUtils").toLid(e),
          f = o("WAWebLidMigrationUtils").toPn(e);
        if (_ == null)
          if (
            (o("WALogger")
              .LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: startWAWebVoipCall: toLid() returned null, attempting usync for LID resolution",
                  ])),
              )
              .color(r("WAWebConstantsDeprecated").VOIP_LOG_COLOR),
            await o("WAWebAdvSyncDeviceListApi").syncDeviceList({
              wids: [e],
              context: "voip",
              phash: null,
            }),
            (_ = o("WAWebLidMigrationUtils").toLid(e)),
            _ != null)
          )
            o("WALogger")
              .LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: startWAWebVoipCall: usync resolved LID successfully",
                  ])),
              )
              .color(r("WAWebConstantsDeprecated").VOIP_LOG_COLOR);
          else {
            o("WALogger")
              .ERROR(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: startWAWebVoipCall: LID resolution failed after usync, aborting call",
                  ])),
              )
              .sendLogs(
                "voip: startWAWebVoipCall: LID failed after usync, call aborted",
              );
            return;
          }
        var g = _ != null ? _ : f;
        if (g == null) {
          (o("WALogger")
            .ERROR(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: startWAWebVoipCall: peerWid is null",
                ])),
            )
            .sendLogs("voip: startWAWebVoipCall: peerWid is null"),
            o("WAWebVoipActivityTracker").clearAllActivityTracking());
          return;
        }
        (await o("WAWebAdvSyncDeviceListApi").syncDeviceList({
          wids: [g],
          context: "voip",
          phash: null,
        }),
          await o(
            "WAWebOpenCoexCallingFirstTimeModalUtils",
          ).maybeShowCoexCallingSMBFirstTimeModal(),
          await o(
            "WAWebOpenCoexCallingFirstTimeModalUtils",
          ).maybeShowCoexCallingConsumerFirstTimeModal(e));
        var h = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(),
          y = h ? o("WAWebContactCollection").ContactCollection.get(h) : null,
          C = y ? o("WAWebFrontendContactGetters").getUsername(y) : null,
          b = await Promise.all([
            o("WAWebVoipStackInterface").getVoipStackInterface(),
            o("WAWebSendMsgDatabaseJob").getFanOutListJob([g]),
            o("WAWebBackendApi").frontendSendAndReceive("getTcToken", {
              wid: e,
            }),
            o("WAWebSendTcTokenChatAction").sendTcToken(g),
          ]),
          v = b[0],
          S = b[1],
          R = b[2].tcToken,
          L = b[3],
          E = ne(S, "callStart");
        (o("WALogger")
          .LOG(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "voip: startWAWebVoipCall: Placing LID call",
              ])),
          )
          .color(r("WAWebConstantsDeprecated").VOIP_LOG_COLOR),
          o("WAWebVoipActivityTracker").trackActivity(
            t
              ? o("WAWebVoipActivityTracker").VoipActivity
                  .START_OUTGOING_VIDEO_CALL
              : o("WAWebVoipActivityTracker").VoipActivity
                  .START_OUTGOING_AUDIO_CALL,
          ),
          o("WAWebVoipActivityTracker").trackUiActivity(
            o("WAWebVoipActivityTracker").VoipUiActivity
              .USER_INITIATE_OUTGOING_CALL,
          ),
          o("WAWebCoreActionsODS").logCallAttempt(),
          t
            ? o("WAWebCoreActionsODS").logCallOutgoingVideo()
            : o("WAWebCoreActionsODS").logCallOutgoingAudio(),
          await (v == null
            ? void 0
            : v.startCall(
                g,
                E,
                s,
                t,
                (f != null ? f : g).toString({ legacy: !0 }),
                !1,
                R,
                n,
                a,
                o("WAWebVoipGatingUtils").usernameCallingEnabled() ? C : null,
              )),
          await te(t));
      }
    }
    async function Q(e, t, n, a, i, l) {
      var s;
      (i === void 0 && (i = 0),
        l === void 0 && (l = 0),
        o("WALogger")
          .LOG(
            _ ||
              (_ = babelHelpers.taggedTemplateLiteralLoose([
                "voip: startWAWebVoipCall: Placing Group call",
              ])),
          )
          .color(r("WAWebConstantsDeprecated").VOIP_LOG_COLOR),
        o("WAWebVoipActivityTracker").startActivityTracking(),
        o("WAWebVoipActivityTracker").startUiActivityTracking(),
        o("WAWebVoipActivityTracker").trackActivity(
          t
            ? o("WAWebVoipActivityTracker").VoipActivity
                .START_OUTGOING_VIDEO_GROUP_CALL
            : o("WAWebVoipActivityTracker").VoipActivity
                .START_OUTGOING_AUDIO_GROUP_CALL,
        ),
        o("WAWebVoipActivityTracker").trackUiActivity(
          o("WAWebVoipActivityTracker").VoipUiActivity
            .USER_INITIATE_OUTGOING_CALL,
        ));
      var u = await o("WAWebVoipAcquireMediaStream").checkVoipDevicePermissions(
        t,
      );
      if (u) {
        var c = re(),
          d = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(),
          m = d ? o("WAWebContactCollection").ContactCollection.get(d) : null,
          p = m ? o("WAWebFrontendContactGetters").getUsername(m) : null,
          g = await Promise.all([
            o("WAWebVoipStackInterface").getVoipStackInterface(),
            oe(e),
          ]),
          h = g[0],
          y = g[1],
          C = y.gcDeviceJidsCsv,
          b = y.gcUserJids,
          v = y.gcUserPnJids;
        await Promise.all(
          b.map(function (e) {
            return o("WAWebSendTcTokenChatAction").sendTcToken(e);
          }),
        );
        var S =
          (s = a == null ? void 0 : a.toString({ legacy: !0 })) != null
            ? s
            : "";
        o("WALogger")
          .LOG(
            f ||
              (f = babelHelpers.taggedTemplateLiteralLoose([
                "voip: startWAWebVoipGroupCall: gid=",
                " users=",
                " name=",
                "",
              ])),
            S,
            b,
            n,
          )
          .color(r("WAWebConstantsDeprecated").VOIP_LOG_COLOR);
        var R = a
          ? await o("WAWebNotificationIconUtils").getNotificationIconByWid(
              a,
              new AbortController().signal,
              o("WAWebNotificationIconUtils").USER_DEFAULT_ICON,
            )
          : o("WAWebNotificationIconUtils").USER_DEFAULT_ICON;
        (o("WAWebCoreActionsODS").logCallAttempt(),
          t
            ? o("WAWebCoreActionsODS").logCallOutgoingGroupVideo()
            : o("WAWebCoreActionsODS").logCallOutgoingGroupAudio(),
          await (h == null
            ? void 0
            : h.startGroupCall(
                v.map(function (e) {
                  var t;
                  return (t =
                    e == null ? void 0 : e.toString({ legacy: !0 })) != null
                    ? t
                    : "";
                }),
                b.map(function (e) {
                  return e.toString({ legacy: !0 });
                }),
                C,
                c,
                t,
                S,
                !1,
                "",
                n,
                R,
                i,
                l,
                p,
              )),
          await te(t));
      }
    }
    async function X(e, t, n, r) {
      var a, i;
      if (
        (n === void 0 && (n = 0),
        r === void 0 && (r = 0),
        !(await j()) &&
          (await o(
            "WAWebBlockedParticipantCallWarning",
          ).maybeShowBlockedParticipantCallWarning(e, "start")))
      ) {
        var l =
          (a =
            (i = e.groupMetadata) == null
              ? void 0
              : i.participants.toArray()) != null
            ? a
            : [];
        await Q(
          l.map(function (e) {
            return e.id;
          }),
          t,
          e.name || e.formattedTitle,
          e.id,
          n,
          r,
        );
      }
    }
    async function Y(e, t, n, a) {
      if ((n === void 0 && (n = 0), a === void 0 && (a = 0), !(await j()))) {
        var i = e.filter(function (e) {
          return !o("WAWebUserPrefsMeUser").isMeAccount(e.id);
        });
        if (i.length !== 0) {
          if (i.length === 1) {
            await K(i[0].id, t, n, a);
            return;
          }
          var l = r("WAWebFbtIntlList")(
            i.map(function (e) {
              return o("WAWebFrontendContactGetters").getFormattedShortName(e);
            }),
            r("WAWebFbtIntlList").CONJUNCTIONS.NONE,
            r("WAWebFbtIntlList").DELIMITERS.COMMA,
          );
          await Q(
            i.map(function (e) {
              return e.id;
            }),
            t,
            l.toString(),
            void 0,
            n,
            a,
          );
        }
      }
    }
    async function J(e, t, n, r) {
      if ((n === void 0 && (n = 0), r === void 0 && (r = 0), !(await j()))) {
        var a = e.filter(function (e) {
          return !o("WAWebUserPrefsMeUser").isMeAccount(e) && !e.isBot();
        });
        if (a.length !== 0) {
          if (a.length === 1) {
            await K(a[0], t, n, r);
            return;
          }
          await Q(a, t, "", void 0, n, r);
        }
      }
    }
    async function Z(e) {
      var t;
      (o("WALogger")
        .LOG(
          g ||
            (g = babelHelpers.taggedTemplateLiteralLoose([
              "voip: joinOngoingCallByCallId: callId=",
              "",
            ])),
          e,
        )
        .color(r("WAWebConstantsDeprecated").VOIP_LOG_COLOR),
        o("WAWebVoipActivityTracker").startActivityTracking(),
        o("WAWebVoipActivityTracker").startUiActivityTracking(),
        o("WAWebVoipActivityTracker").trackUiActivity(
          o("WAWebVoipActivityTracker").VoipUiActivity.USER_JOIN_ONGOING_CALL,
        ));
      var n = o(
        "WAWebVoipOngoingCallCollection",
      ).WAWebVoipOngoingCallCollection.getByCallId(e);
      if (n == null) {
        (o("WALogger")
          .LOG(
            h ||
              (h = babelHelpers.taggedTemplateLiteralLoose([
                "voip: joinOngoingCallByCallId: no call for ",
                "",
              ])),
            e,
          )
          .color(r("WAWebConstantsDeprecated").VOIP_LOG_COLOR),
          o("WAWebToastManager").ToastManager.open(
            W.jsx(o("WAWebToast.react").Toast, {
              msg: s._(/*BTDS*/ "Call not found."),
            }),
          ));
        return;
      }
      var a = n.to;
      if (a == null) {
        (o("WALogger")
          .LOG(
            y ||
              (y = babelHelpers.taggedTemplateLiteralLoose([
                "voip: joinOngoingCallByCallId: No chat found for call ID ",
                "",
              ])),
            e,
          )
          .color(r("WAWebConstantsDeprecated").VOIP_LOG_COLOR),
          o("WAWebToastManager").ToastManager.open(
            W.jsx(o("WAWebToast.react").Toast, {
              msg: s._(/*BTDS*/ "Could not join call."),
            }),
          ));
        return;
      }
      var i = await o("WAWebFindChatAction").findOrCreateLatestChat(
          a,
          "voipNotification",
        ),
        l = i.chat,
        u = (t = n.isVideoCall) != null ? t : !1;
      await ee(
        e,
        l,
        u,
        o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE
          .SECOND_NOTIFICATION,
        !0,
      );
    }
    async function ee(e, t, n, a, i) {
      var l, u;
      if ((a === void 0 && (a = 0), i === void 0 && (i = !1), !(await j()))) {
        var c = await o(
          "WAWebBlockedParticipantCallWarning",
        ).maybeShowBlockedParticipantCallWarning(t, "join");
        if (!c) {
          o("WAWebVoipActivityTracker").clearAllActivityTracking();
          return;
        }
        (o("WAWebVoipActivityTracker").startActivityTracking(),
          o("WAWebVoipActivityTracker").startUiActivityTracking());
        var d = await o(
          "WAWebVoipAcquireMediaStream",
        ).checkVoipDevicePermissions(n);
        if (!d) {
          o("WAWebVoipActivityTracker").clearAllActivityTracking();
          return;
        }
        if (r("WAWebEnvironment").isWindows) {
          var m,
            p = U == null || (m = U()) == null ? void 0 : m.voip;
          if (p == null) {
            (o("WALogger")
              .LOG(
                C ||
                  (C = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: joinOngoingWAWebVoipGroupCallPN: VoIP bridge is null",
                  ])),
              )
              .color(r("WAWebConstantsDeprecated").VOIP_LOG_COLOR),
              o("WAWebVoipActivityTracker").clearAllActivityTracking());
            return;
          }
          if (
            !("joinOngoingCall" in p) ||
            (o("WAWebBuildConstants").WINDOWS_BUILD != null &&
              o("WAWebBuildConstants").WINDOWS_BUILD.startsWith("2511")) ||
            (o("WAWebBuildConstants").WINDOWS_BUILD != null &&
              o("WAWebBuildConstants").WINDOWS_BUILD.startsWith("2514")) ||
            (o("WAWebBuildConstants").WINDOWS_BUILD != null &&
              o("WAWebBuildConstants").WINDOWS_BUILD.startsWith("2515")) ||
            (o("WAWebBuildConstants").WINDOWS_BUILD != null &&
              o("WAWebBuildConstants").WINDOWS_BUILD.startsWith("2516")) ||
            (o("WAWebBuildConstants").WINDOWS_BUILD != null &&
              o("WAWebBuildConstants").WINDOWS_BUILD.startsWith("2557")) ||
            (o("WAWebBuildConstants").WINDOWS_BUILD != null &&
              o("WAWebBuildConstants").WINDOWS_BUILD.startsWith("2558")) ||
            (o("WAWebBuildConstants").WINDOWS_BUILD != null &&
              o("WAWebBuildConstants").WINDOWS_BUILD.startsWith("2559"))
          ) {
            (o("WALogger")
              .LOG(
                b ||
                  (b = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: joinOngoingWAWebVoipGroupCallPN: unsupported",
                  ])),
              )
              .color(r("WAWebConstantsDeprecated").VOIP_LOG_COLOR),
              o("WAWebVoipActivityTracker").clearAllActivityTracking());
            return;
          }
        }
        if (!o("WAWebVoipGatingUtils").isWinHybridJoinableCallsEnabled()) {
          (o("WALogger").LOG(
            v ||
              (v = babelHelpers.taggedTemplateLiteralLoose([
                "voip: joinOngoingWAWebVoipGroupCallPN: not enabled",
              ])),
          ),
            o("WAWebVoipActivityTracker").clearAllActivityTracking());
          return;
        }
        var _ = o(
          "WAWebVoipOngoingCallCollection",
        ).WAWebVoipOngoingCallCollection.getByCallId(e);
        if (_ == null) {
          (o("WALogger")
            .LOG(
              S ||
                (S = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: joinOngoingWAWebVoipGroupCallPN: no call ",
                  "",
                ])),
              e,
            )
            .color(r("WAWebConstantsDeprecated").VOIP_LOG_COLOR),
            o("WAWebVoipActivityTracker").clearAllActivityTracking());
          return;
        } else if (_.callCreator == null) {
          (o("WALogger")
            .LOG(
              R ||
                (R = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: joinOngoingWAWebVoipGroupCallPN: no creator ",
                  "",
                ])),
              e,
            )
            .color(r("WAWebConstantsDeprecated").VOIP_LOG_COLOR),
            await o(
              "WAWebVoipActionWriteCallLogEventUpdateJoinable",
            ).cleanupJoinableCallLog(e),
            o("WAWebToastManager").ToastManager.open(
              W.jsx(o("WAWebToast.react").Toast, {
                msg: s._(/*BTDS*/ "Could not join call."),
              }),
            ),
            o("WAWebVoipActivityTracker").clearAllActivityTracking());
          return;
        }
        (o("WALogger")
          .LOG(
            L ||
              (L = babelHelpers.taggedTemplateLiteralLoose([
                "voip: joinOngoingWAWebVoipGroupCallPN: joining",
              ])),
          )
          .color(r("WAWebConstantsDeprecated").VOIP_LOG_COLOR),
          o("WAWebVoipActivityTracker").trackUiActivity(
            o("WAWebVoipActivityTracker").VoipUiActivity.USER_JOIN_ONGOING_CALL,
          ));
        var f = (l = _.callParticipants) != null ? l : [],
          g = [
            o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
          ].concat(
            f
              .map(function (e) {
                var t = o("WAWebLidMigrationUtils").toPn(e.participant);
                return (
                  t == null &&
                    o("WALogger")
                      .ERROR(
                        E ||
                          (E = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: joinOngoingWAWebVoipGroupCallPN: participant dropped - toPn() returned null",
                          ])),
                      )
                      .sendLogs(
                        "voip: StartPNCall: group join participant toPn failed",
                      ),
                  t
                );
              })
              .filter(function (e) {
                return e != null && !o("WAWebUserPrefsMeUser").isMeAccount(e);
              }),
          ),
          h = await Promise.all([
            o("WAWebVoipStackInterface").getVoipStackInterface(),
            oe(g, !0),
          ]),
          y = h[0],
          I = h[1],
          T = I.gcDeviceJidsCsv,
          D = I.gcUserJids,
          x = I.gcUserPnJids;
        await Promise.all(
          D.map(function (e) {
            return o("WAWebSendTcTokenChatAction").sendTcToken(e);
          }),
        );
        var $ = t.id.isGroup() ? t.id.toString({ legacy: !0 }) : "";
        (o("WALogger")
          .LOG(
            k ||
              (k = babelHelpers.taggedTemplateLiteralLoose([
                "voip: startWAWebVoipGroupCallPN: groupJid: ",
                "",
              ])),
            $,
          )
          .color(r("WAWebConstantsDeprecated").VOIP_LOG_COLOR),
          o("WAWebCoreActionsODS").logCallGroupJoin(),
          await (y == null
            ? void 0
            : y.joinOngoingCall(
                e,
                r("nullthrows")(_.callCreator).toString({
                  legacy: !0,
                  formatIncludeDevice: !0,
                }),
                "",
                x.map(function (e) {
                  var t;
                  return (t =
                    e == null ? void 0 : e.toString({ legacy: !0 })) != null
                    ? t
                    : "";
                }),
                D.map(function (e) {
                  return e.toString({ legacy: !0 });
                }),
                T,
                n,
                $,
                0,
                !0,
                (u = _.callLinkToken) != null ? u : "",
                !1,
                "",
                !1,
                t.name || t.formattedTitle,
                a,
                i,
              )));
      }
    }
    async function te(e) {
      try {
        if ("permissions" in navigator) {
          if (e) {
            var t = await navigator.permissions.query({ name: "camera" }),
              n = t.state === "granted";
            n ||
              o("WALogger").LOG(
                I ||
                  (I = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: JS doesn't have camera permissions for a video call",
                  ])),
              );
          }
          var r = await navigator.permissions.query({ name: "microphone" }),
            a = r.state === "granted";
          a ||
            o("WALogger").LOG(
              T ||
                (T = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: JS doesn't have microphone permissions for a call",
                ])),
            );
        }
      } catch (e) {
        o("WALogger").LOG(
          D ||
            (D = babelHelpers.taggedTemplateLiteralLoose([
              "voip: failed to check device permissions: ",
              "",
            ])),
          e,
        );
      }
    }
    function ne(e, t) {
      return e.length > V
        ? (o("WALogger").LOG(
            x ||
              (x = babelHelpers.taggedTemplateLiteralLoose([
                "voip:",
                ": too many devices, removing companions",
              ])),
            t,
          ),
          e
            .filter(function (e) {
              return !e.isCompanion();
            })
            .map(function (e) {
              return e.toString({ legacy: !0, formatIncludeDevice: !0 });
            }))
        : e.map(function (e) {
            return e.toString({ legacy: !0, formatIncludeDevice: !0 });
          });
    }
    function re() {
      var e = "00" + o("WARandomHex").randomHex(16).substr(2);
      return (
        o("WALogger")
          .LOG(
            $ ||
              ($ = babelHelpers.taggedTemplateLiteralLoose([
                "voip:generateCallId: ",
                "",
              ])),
            e,
          )
          .color(r("WAWebConstantsDeprecated").VOIP_LOG_COLOR),
        e
      );
    }
    async function oe(e, t) {
      t === void 0 && (t = !1);
      var n = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(),
        a = e.map(function (e) {
          return o("WAWebLidMigrationUtils").toLid(e);
        }),
        i = e.filter(function (e, t) {
          return a[t] == null;
        });
      if (i.length > 0) {
        (o("WALogger")
          .LOG(
            P ||
              (P = babelHelpers.taggedTemplateLiteralLoose([
                "voip: getVoipParticipantJids: ",
                " participants unresolved, attempting usync",
              ])),
            i.length,
          )
          .color(r("WAWebConstantsDeprecated").VOIP_LOG_COLOR),
          await Promise.all(
            i.map(function (e) {
              return o("WAWebAdvSyncDeviceListApi").syncDeviceList({
                wids: [e],
                context: "voip",
                phash: null,
              });
            }),
          ),
          (a = e.map(function (e) {
            return o("WAWebLidMigrationUtils").toLid(e);
          })));
        var l = e.filter(function (e, t) {
          return a[t] == null;
        });
        l.length > 0
          ? o("WALogger")
              .ERROR(
                N ||
                  (N = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: getVoipParticipantJids: ",
                    " participants still unresolved after usync, stripping",
                  ])),
                l.length,
              )
              .sendLogs(
                "voip: getVoipParticipantJids: participants stripped after usync",
              )
          : o("WALogger")
              .LOG(
                M ||
                  (M = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: getVoipParticipantJids: usync resolved all participants successfully",
                  ])),
              )
              .color(r("WAWebConstantsDeprecated").VOIP_LOG_COLOR);
      }
      var s = [].concat(
          t ? [n] : [],
          a.filter(function (e) {
            return e != null && !o("WAWebUserPrefsMeUser").isMeAccount(e);
          }),
        ),
        u = s.map(function (e) {
          return o("WAWebLidMigrationUtils").toPn(e);
        });
      await Promise.all(
        s.map(function (e) {
          return o("WAWebAdvSyncDeviceListApi").syncDeviceList({
            wids: [e],
            context: "voip",
            phash: null,
          });
        }),
      );
      var c = await Promise.all(
          s.map(function (e) {
            return o("WAWebSendMsgDatabaseJob").getFanOutListJob([e]);
          }),
        ),
        d = c.map(function (e) {
          var t = ne(e, "callStart"),
            n = t.join(",");
          return n;
        });
      return { gcUserJids: s, gcUserPnJids: u, gcDeviceJidsCsv: d };
    }
    async function ae(e) {
      if (!(await j())) {
        o("WALogger").LOG(
          w ||
            (w = babelHelpers.taggedTemplateLiteralLoose([
              "voip: inviteToCall called for chat: ",
              "",
            ])),
          e.toString(),
        );
        try {
          var t,
            n = e.toString(),
            a = "",
            i = "";
          if (e.isLid()) {
            var l, s, u, c;
            ((i =
              (l =
                (s = o("WAWebLidMigrationUtils").toLid(e)) == null
                  ? void 0
                  : s.toString()) != null
                ? l
                : n),
              (a =
                (u =
                  (c = o("WAWebLidMigrationUtils").toPn(e)) == null
                    ? void 0
                    : c.toString()) != null
                  ? u
                  : ""));
          } else {
            var d, m, p, _;
            if (
              ((a =
                (d =
                  (m = o("WAWebLidMigrationUtils").toPn(e)) == null
                    ? void 0
                    : m.toString()) != null
                  ? d
                  : n),
              (i =
                (p =
                  (_ = o("WAWebLidMigrationUtils").toLid(e)) == null
                    ? void 0
                    : _.toString()) != null
                  ? p
                  : ""),
              !i)
            ) {
              var f, g;
              (await o("WAWebAdvSyncDeviceListApi").syncDeviceList({
                wids: [e],
                context: "voip",
                phash: null,
              }),
                (i =
                  (f =
                    (g = o("WAWebLidMigrationUtils").toLid(e)) == null
                      ? void 0
                      : g.toString()) != null
                    ? f
                    : ""));
            }
          }
          if (!i) {
            o("WALogger")
              .ERROR(
                A ||
                  (A = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: inviteToCall: LID resolution failed for participant, aborting invite",
                  ])),
              )
              .sendLogs("voip: inviteToCall: LID expected but missing");
            return;
          }
          var h = (t = o("WAWebLidMigrationUtils").toLid(e)) != null ? t : e,
            y = await Promise.all([
              o("WAWebVoipStackInterface").getVoipStackInterface(),
              o("WAWebAdvSyncDeviceListApi").syncDeviceList({
                wids: [h],
                context: "voip",
                phash: null,
              }),
            ]),
            C = y[0],
            b = y[1];
          if (!a) {
            var v, S;
            a =
              (v =
                (S = o("WAWebLidMigrationUtils").toPn(e)) == null
                  ? void 0
                  : S.toString()) != null
                ? v
                : "";
          }
          var R = await o("WAWebSendMsgDatabaseJob").getFanOutListJob([h]),
            L = ne(R, "inviteToCall");
          (await (C == null ? void 0 : C.inviteToCall(a, i, L)),
            o("WALogger").LOG(
              F ||
                (F = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: inviteToCall completed successfully for ",
                  "",
                ])),
              e.toString(),
            ));
        } catch (t) {
          throw (
            o("WALogger")
              .ERROR(
                O ||
                  (O = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: inviteToCall failed for ",
                    "",
                  ])),
                e.toString(),
              )
              .catching(r("getErrorSafe")(t)),
            t
          );
        }
      }
    }
    ((l.startWAWebVoipCall = K),
      (l.startWAWebVoipGroupCallFromChat = X),
      (l.startWAWebVoipGroupCallFromContacts = Y),
      (l.startWAWebVoipGroupCallFromWids = J),
      (l.joinOngoingCallByCallId = Z),
      (l.joinOngoingWAWebVoipGroupCallPN = ee),
      (l.inviteToCall = ae));
  },
  226,
);
