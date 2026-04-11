__d(
  "WAWebVoipStartCall",
  [
    "fbt",
    "Promise",
    "WALogger",
    "WARandomHex",
    "WAWebAdvSyncDeviceListApi",
    "WAWebBackendApi",
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
    "WAWebVoipGatingUtils",
    "WAWebVoipInitEventEmitter",
    "WAWebVoipOngoingCallCollection",
    "WAWebVoipStackInterface",
    "WAWebWamEnumLobbyEntryPointType",
    "asyncToGeneratorRuntime",
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
      W,
      q = W || (W = o("react")),
      U = (e = n("cr:17219")) != null ? e : {},
      V = U.getWindowsBridge,
      H = 5;
    function G() {
      var e = o("WAWebVoipGatingUtils").getUnsupportedBrowserReason();
      return e == null
        ? !1
        : (o("WAWebModalManager").ModalManager.open(
            e === "broken_voip_wasm"
              ? q.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
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
              : q.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
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
          !0);
    }
    function z() {
      return o(
        "WAWebVoipInitEventEmitter",
      ).VoipInitEventEmitter.getDidVoipInitError()
        ? (o("WAWebModalManager").ModalManager.open(
            q.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
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
          !0)
        : !1;
    }
    function j() {
      return o(
        "WAWebVoipInitEventEmitter",
      ).VoipInitEventEmitter.getIsVoipInited()
        ? !1
        : (o("WAWebModalManager").ModalManager.open(
            q.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
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
    function K() {
      return G() || z() || j();
    }
    function Q(e, t, n, r, o) {
      return X.apply(this, arguments);
    }
    function X() {
      return (
        (X = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, a, i, l) {
            if (
              (a === void 0 && (a = 0),
              i === void 0 && (i = 0),
              l === void 0 && (l = null),
              !K())
            ) {
              (o("WAWebVoipActivityTracker").startActivityTracking(),
                o("WAWebVoipActivityTracker").startUiActivityTracking());
              var s = yield o(
                "WAWebVoipAcquireMediaStream",
              ).checkVoipDevicePermissions(t);
              if (!s) {
                o("WAWebVoipActivityTracker").clearAllActivityTracking();
                return;
              }
              var u = l != null ? l : me(),
                c = o("WAWebLidMigrationUtils").toLid(e),
                g = o("WAWebLidMigrationUtils").toPn(e);
              if (c == null)
                if (
                  (o("WALogger")
                    .LOG(
                      d ||
                        (d = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: startWAWebVoipCall: toLid() returned null, attempting usync for LID resolution",
                        ])),
                    )
                    .color(r("WAWebConstantsDeprecated").VOIP_LOG_COLOR),
                  yield o("WAWebAdvSyncDeviceListApi").syncDeviceList({
                    wids: [e],
                    context: "voip",
                    phash: null,
                  }),
                  (c = o("WAWebLidMigrationUtils").toLid(e)),
                  c != null)
                )
                  o("WALogger")
                    .LOG(
                      m ||
                        (m = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: startWAWebVoipCall: usync resolved LID successfully",
                        ])),
                    )
                    .color(r("WAWebConstantsDeprecated").VOIP_LOG_COLOR);
                else {
                  o("WALogger")
                    .ERROR(
                      p ||
                        (p = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: startWAWebVoipCall: LID resolution failed after usync, aborting call",
                        ])),
                    )
                    .sendLogs(
                      "voip: startWAWebVoipCall: LID failed after usync, call aborted",
                    );
                  return;
                }
              var h = c != null ? c : g;
              if (h == null) {
                (o("WALogger")
                  .ERROR(
                    _ ||
                      (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: startWAWebVoipCall: peerWid is null",
                      ])),
                  )
                  .sendLogs("voip: startWAWebVoipCall: peerWid is null"),
                  o("WAWebVoipActivityTracker").clearAllActivityTracking());
                return;
              }
              (yield o("WAWebAdvSyncDeviceListApi").syncDeviceList({
                wids: [h],
                context: "voip",
                phash: null,
              }),
                yield o(
                  "WAWebOpenCoexCallingFirstTimeModalUtils",
                ).maybeShowCoexCallingSMBFirstTimeModal(),
                yield o(
                  "WAWebOpenCoexCallingFirstTimeModalUtils",
                ).maybeShowCoexCallingConsumerFirstTimeModal(e));
              var y = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(),
                C = y
                  ? o("WAWebContactCollection").ContactCollection.get(y)
                  : null,
                b = C ? o("WAWebFrontendContactGetters").getUsername(C) : null,
                v = yield (B || (B = n("Promise"))).all([
                  o("WAWebVoipStackInterface").getVoipStackInterface(),
                  o("WAWebSendMsgDatabaseJob").getFanOutListJob([h]),
                  o("WAWebBackendApi").frontendSendAndReceive("getTcToken", {
                    wid: e,
                  }),
                  o("WAWebSendTcTokenChatAction").sendTcToken(h),
                ]),
                S = v[0],
                R = v[1],
                L = v[2].tcToken,
                E = v[3],
                k = de(R, "callStart");
              (o("WALogger")
                .LOG(
                  f ||
                    (f = babelHelpers.taggedTemplateLiteralLoose([
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
                yield S == null
                  ? void 0
                  : S.startCall(
                      h,
                      k,
                      u,
                      t,
                      (g != null ? g : h).toString({ legacy: !0 }),
                      !1,
                      L,
                      a,
                      i,
                      o("WAWebVoipGatingUtils").usernameCallingEnabled()
                        ? b
                        : null,
                    ),
                yield ue(t));
            }
          },
        )),
        X.apply(this, arguments)
      );
    }
    function Y(e, t, n, r, o, a) {
      return J.apply(this, arguments);
    }
    function J() {
      return (
        (J = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, a, i, l, s) {
            var u;
            (l === void 0 && (l = 0),
              s === void 0 && (s = 0),
              o("WALogger")
                .LOG(
                  g ||
                    (g = babelHelpers.taggedTemplateLiteralLoose([
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
            var c = yield o(
              "WAWebVoipAcquireMediaStream",
            ).checkVoipDevicePermissions(t);
            if (c) {
              var d = me(),
                m = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(),
                p = m
                  ? o("WAWebContactCollection").ContactCollection.get(m)
                  : null,
                _ = p ? o("WAWebFrontendContactGetters").getUsername(p) : null,
                f = yield (B || (B = n("Promise"))).all([
                  o("WAWebVoipStackInterface").getVoipStackInterface(),
                  pe(e),
                ]),
                y = f[0],
                C = f[1],
                b = C.gcDeviceJidsCsv,
                v = C.gcUserJids,
                S = C.gcUserPnJids;
              yield B.all(
                v.map(function (e) {
                  return o("WAWebSendTcTokenChatAction").sendTcToken(e);
                }),
              );
              var R =
                (u = i == null ? void 0 : i.toString({ legacy: !0 })) != null
                  ? u
                  : "";
              o("WALogger")
                .LOG(
                  h ||
                    (h = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: startWAWebVoipGroupCall: gid=",
                      " users=",
                      " name=",
                      "",
                    ])),
                  R,
                  v,
                  a,
                )
                .color(r("WAWebConstantsDeprecated").VOIP_LOG_COLOR);
              var L = i
                ? yield o(
                    "WAWebNotificationIconUtils",
                  ).getNotificationIconByWid(
                    i,
                    new AbortController().signal,
                    o("WAWebNotificationIconUtils").USER_DEFAULT_ICON,
                  )
                : o("WAWebNotificationIconUtils").USER_DEFAULT_ICON;
              (o("WAWebCoreActionsODS").logCallAttempt(),
                t
                  ? o("WAWebCoreActionsODS").logCallOutgoingGroupVideo()
                  : o("WAWebCoreActionsODS").logCallOutgoingGroupAudio(),
                yield y == null
                  ? void 0
                  : y.startGroupCall(
                      S.map(function (e) {
                        var t;
                        return (t =
                          e == null ? void 0 : e.toString({ legacy: !0 })) !=
                          null
                          ? t
                          : "";
                      }),
                      v.map(function (e) {
                        return e.toString({ legacy: !0 });
                      }),
                      b,
                      d,
                      t,
                      R,
                      !1,
                      "",
                      a,
                      L,
                      l,
                      s,
                      _,
                    ),
                yield ue(t));
            }
          },
        )),
        J.apply(this, arguments)
      );
    }
    function Z(e, t, n, r) {
      return ee.apply(this, arguments);
    }
    function ee() {
      return (
        (ee = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            var o, a;
            if ((n === void 0 && (n = 0), r === void 0 && (r = 0), !K())) {
              var i =
                (o =
                  (a = e.groupMetadata) == null
                    ? void 0
                    : a.participants.toArray()) != null
                  ? o
                  : [];
              yield Y(
                i.map(function (e) {
                  return e.id;
                }),
                t,
                e.name || e.formattedTitle,
                e.id,
                n,
                r,
              );
            }
          },
        )),
        ee.apply(this, arguments)
      );
    }
    function te(e, t, n, r) {
      return ne.apply(this, arguments);
    }
    function ne() {
      return (
        (ne = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a) {
            if ((n === void 0 && (n = 0), a === void 0 && (a = 0), !K())) {
              var i = e.filter(function (e) {
                return !o("WAWebUserPrefsMeUser").isMeAccount(e.id);
              });
              if (i.length !== 0) {
                if (i.length === 1) {
                  yield Q(i[0].id, t, n, a);
                  return;
                }
                var l = r("WAWebFbtIntlList")(
                  i.map(function (e) {
                    return o(
                      "WAWebFrontendContactGetters",
                    ).getFormattedShortName(e);
                  }),
                  r("WAWebFbtIntlList").CONJUNCTIONS.NONE,
                  r("WAWebFbtIntlList").DELIMITERS.COMMA,
                );
                yield Y(
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
          },
        )),
        ne.apply(this, arguments)
      );
    }
    function re(e, t, n, r) {
      return oe.apply(this, arguments);
    }
    function oe() {
      return (
        (oe = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            if ((n === void 0 && (n = 0), r === void 0 && (r = 0), !K())) {
              var a = e.filter(function (e) {
                return !o("WAWebUserPrefsMeUser").isMeAccount(e) && !e.isBot();
              });
              if (a.length !== 0) {
                if (a.length === 1) {
                  yield Q(a[0], t, n, r);
                  return;
                }
                yield Y(a, t, "", void 0, n, r);
              }
            }
          },
        )),
        oe.apply(this, arguments)
      );
    }
    function ae(e) {
      return ie.apply(this, arguments);
    }
    function ie() {
      return (
        (ie = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t;
          (o("WALogger")
            .LOG(
              y ||
                (y = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: joinOngoingCallByCallId: callId=",
                  "",
                ])),
              e,
            )
            .color(r("WAWebConstantsDeprecated").VOIP_LOG_COLOR),
            o("WAWebVoipActivityTracker").startActivityTracking(),
            o("WAWebVoipActivityTracker").startUiActivityTracking(),
            o("WAWebVoipActivityTracker").trackUiActivity(
              o("WAWebVoipActivityTracker").VoipUiActivity
                .USER_JOIN_ONGOING_CALL,
            ));
          var n = o(
            "WAWebVoipOngoingCallCollection",
          ).WAWebVoipOngoingCallCollection.getByCallId(e);
          if (n == null) {
            (o("WALogger")
              .LOG(
                C ||
                  (C = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: joinOngoingCallByCallId: no call for ",
                    "",
                  ])),
                e,
              )
              .color(r("WAWebConstantsDeprecated").VOIP_LOG_COLOR),
              o("WAWebToastManager").ToastManager.open(
                q.jsx(o("WAWebToast.react").Toast, {
                  msg: s._(/*BTDS*/ "Call not found."),
                }),
              ));
            return;
          }
          var a = n.to;
          if (a == null) {
            (o("WALogger")
              .LOG(
                b ||
                  (b = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: joinOngoingCallByCallId: No chat found for call ID ",
                    "",
                  ])),
                e,
              )
              .color(r("WAWebConstantsDeprecated").VOIP_LOG_COLOR),
              o("WAWebToastManager").ToastManager.open(
                q.jsx(o("WAWebToast.react").Toast, {
                  msg: s._(/*BTDS*/ "Could not join call."),
                }),
              ));
            return;
          }
          var i = yield o("WAWebFindChatAction").findOrCreateLatestChat(
              a,
              "voipNotification",
            ),
            l = i.chat,
            u = (t = n.isVideoCall) != null ? t : !1;
          yield le(
            e,
            l,
            u,
            o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE
              .SECOND_NOTIFICATION,
            !0,
          );
        })),
        ie.apply(this, arguments)
      );
    }
    function le(e, t, n, r, o) {
      return se.apply(this, arguments);
    }
    function se() {
      return (
        (se = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, a, i, l) {
            var u, c;
            if ((i === void 0 && (i = 0), l === void 0 && (l = !1), !K())) {
              (o("WAWebVoipActivityTracker").startActivityTracking(),
                o("WAWebVoipActivityTracker").startUiActivityTracking());
              var d = yield o(
                "WAWebVoipAcquireMediaStream",
              ).checkVoipDevicePermissions(a);
              if (!d) {
                o("WAWebVoipActivityTracker").clearAllActivityTracking();
                return;
              }
              if (r("WAWebEnvironment").isWindows) {
                var m,
                  p = V == null || (m = V()) == null ? void 0 : m.voip;
                if (p == null) {
                  (o("WALogger")
                    .LOG(
                      v ||
                        (v = babelHelpers.taggedTemplateLiteralLoose([
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
                    o("WAWebBuildConstants").WINDOWS_BUILD.startsWith(
                      "2511",
                    )) ||
                  (o("WAWebBuildConstants").WINDOWS_BUILD != null &&
                    o("WAWebBuildConstants").WINDOWS_BUILD.startsWith(
                      "2514",
                    )) ||
                  (o("WAWebBuildConstants").WINDOWS_BUILD != null &&
                    o("WAWebBuildConstants").WINDOWS_BUILD.startsWith(
                      "2515",
                    )) ||
                  (o("WAWebBuildConstants").WINDOWS_BUILD != null &&
                    o("WAWebBuildConstants").WINDOWS_BUILD.startsWith(
                      "2516",
                    )) ||
                  (o("WAWebBuildConstants").WINDOWS_BUILD != null &&
                    o("WAWebBuildConstants").WINDOWS_BUILD.startsWith(
                      "2557",
                    )) ||
                  (o("WAWebBuildConstants").WINDOWS_BUILD != null &&
                    o("WAWebBuildConstants").WINDOWS_BUILD.startsWith(
                      "2558",
                    )) ||
                  (o("WAWebBuildConstants").WINDOWS_BUILD != null &&
                    o("WAWebBuildConstants").WINDOWS_BUILD.startsWith("2559"))
                ) {
                  (o("WALogger")
                    .LOG(
                      S ||
                        (S = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: joinOngoingWAWebVoipGroupCallPN: unsupported",
                        ])),
                    )
                    .color(r("WAWebConstantsDeprecated").VOIP_LOG_COLOR),
                    o("WAWebVoipActivityTracker").clearAllActivityTracking());
                  return;
                }
              }
              if (
                !o("WAWebVoipGatingUtils").isWinHybridJoinableCallsEnabled()
              ) {
                (o("WALogger").LOG(
                  R ||
                    (R = babelHelpers.taggedTemplateLiteralLoose([
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
                    L ||
                      (L = babelHelpers.taggedTemplateLiteralLoose([
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
                    E ||
                      (E = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: joinOngoingWAWebVoipGroupCallPN: no creator ",
                        "",
                      ])),
                    e,
                  )
                  .color(r("WAWebConstantsDeprecated").VOIP_LOG_COLOR),
                  yield o(
                    "WAWebVoipActionWriteCallLogEventUpdateJoinable",
                  ).cleanupJoinableCallLog(e),
                  o("WAWebToastManager").ToastManager.open(
                    q.jsx(o("WAWebToast.react").Toast, {
                      msg: s._(/*BTDS*/ "Could not join call."),
                    }),
                  ),
                  o("WAWebVoipActivityTracker").clearAllActivityTracking());
                return;
              }
              (o("WALogger")
                .LOG(
                  k ||
                    (k = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: joinOngoingWAWebVoipGroupCallPN: joining",
                    ])),
                )
                .color(r("WAWebConstantsDeprecated").VOIP_LOG_COLOR),
                o("WAWebVoipActivityTracker").trackUiActivity(
                  o("WAWebVoipActivityTracker").VoipUiActivity
                    .USER_JOIN_ONGOING_CALL,
                ));
              var f = (u = _.callParticipants) != null ? u : [],
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
                              I ||
                                (I = babelHelpers.taggedTemplateLiteralLoose([
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
                      return (
                        e != null && !o("WAWebUserPrefsMeUser").isMeAccount(e)
                      );
                    }),
                ),
                h = yield (B || (B = n("Promise"))).all([
                  o("WAWebVoipStackInterface").getVoipStackInterface(),
                  pe(g, !0),
                ]),
                y = h[0],
                C = h[1],
                b = C.gcDeviceJidsCsv,
                D = C.gcUserJids,
                x = C.gcUserPnJids;
              yield B.all(
                D.map(function (e) {
                  return o("WAWebSendTcTokenChatAction").sendTcToken(e);
                }),
              );
              var $ = t.id.isGroup() ? t.id.toString({ legacy: !0 }) : "";
              (o("WALogger")
                .LOG(
                  T ||
                    (T = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: startWAWebVoipGroupCallPN: groupJid: ",
                      "",
                    ])),
                  $,
                )
                .color(r("WAWebConstantsDeprecated").VOIP_LOG_COLOR),
                yield y == null
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
                          e == null ? void 0 : e.toString({ legacy: !0 })) !=
                          null
                          ? t
                          : "";
                      }),
                      D.map(function (e) {
                        return e.toString({ legacy: !0 });
                      }),
                      b,
                      a,
                      $,
                      0,
                      !0,
                      (c = _.callLinkToken) != null ? c : "",
                      !1,
                      "",
                      !1,
                      t.name || t.formattedTitle,
                      i,
                      l,
                    ));
            }
          },
        )),
        se.apply(this, arguments)
      );
    }
    function ue(e) {
      return ce.apply(this, arguments);
    }
    function ce() {
      return (
        (ce = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            if ("permissions" in navigator) {
              if (e) {
                var t = yield navigator.permissions.query({ name: "camera" }),
                  n = t.state === "granted";
                n ||
                  o("WALogger").LOG(
                    D ||
                      (D = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: JS doesn't have camera permissions for a video call",
                      ])),
                  );
              }
              var r = yield navigator.permissions.query({ name: "microphone" }),
                a = r.state === "granted";
              a ||
                o("WALogger").LOG(
                  x ||
                    (x = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: JS doesn't have microphone permissions for a call",
                    ])),
                );
            }
          } catch (e) {
            o("WALogger").LOG(
              $ ||
                ($ = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: failed to check device permissions: ",
                  "",
                ])),
              e,
            );
          }
        })),
        ce.apply(this, arguments)
      );
    }
    function de(e, t) {
      return e.length > H
        ? (o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
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
    function me() {
      var e = "00" + o("WARandomHex").randomHex(16).substr(2);
      return (
        o("WALogger")
          .LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "voip:generateCallId: ",
                "",
              ])),
            e,
          )
          .color(r("WAWebConstantsDeprecated").VOIP_LOG_COLOR),
        e
      );
    }
    function pe(e, t) {
      return _e.apply(this, arguments);
    }
    function _e() {
      return (
        (_e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          t === void 0 && (t = !1);
          var a = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(),
            i = e.map(function (e) {
              return o("WAWebLidMigrationUtils").toLid(e);
            }),
            l = e.filter(function (e, t) {
              return i[t] == null;
            });
          if (l.length > 0) {
            (o("WALogger")
              .LOG(
                P ||
                  (P = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: getVoipParticipantJids: ",
                    " participants unresolved, attempting usync",
                  ])),
                l.length,
              )
              .color(r("WAWebConstantsDeprecated").VOIP_LOG_COLOR),
              yield (B || (B = n("Promise"))).all(
                l.map(function (e) {
                  return o("WAWebAdvSyncDeviceListApi").syncDeviceList({
                    wids: [e],
                    context: "voip",
                    phash: null,
                  });
                }),
              ),
              (i = e.map(function (e) {
                return o("WAWebLidMigrationUtils").toLid(e);
              })));
            var s = e.filter(function (e, t) {
              return i[t] == null;
            });
            s.length > 0
              ? o("WALogger")
                  .ERROR(
                    N ||
                      (N = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: getVoipParticipantJids: ",
                        " participants still unresolved after usync, stripping",
                      ])),
                    s.length,
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
          var u = [].concat(
              t ? [a] : [],
              i.filter(function (e) {
                return e != null && !o("WAWebUserPrefsMeUser").isMeAccount(e);
              }),
            ),
            c = u.map(function (e) {
              return o("WAWebLidMigrationUtils").toPn(e);
            });
          yield (B || (B = n("Promise"))).all(
            u.map(function (e) {
              return o("WAWebAdvSyncDeviceListApi").syncDeviceList({
                wids: [e],
                context: "voip",
                phash: null,
              });
            }),
          );
          var d = yield B.all(
              u.map(function (e) {
                return o("WAWebSendMsgDatabaseJob").getFanOutListJob([e]);
              }),
            ),
            m = d.map(function (e) {
              var t = de(e, "callStart"),
                n = t.join(",");
              return n;
            });
          return { gcUserJids: u, gcUserPnJids: c, gcDeviceJidsCsv: m };
        })),
        _e.apply(this, arguments)
      );
    }
    function fe(e) {
      return ge.apply(this, arguments);
    }
    function ge() {
      return (
        (ge = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (!K()) {
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
                a = e.toString(),
                i = "",
                l = "";
              if (e.isLid()) {
                var s, u, c, d;
                ((l =
                  (s =
                    (u = o("WAWebLidMigrationUtils").toLid(e)) == null
                      ? void 0
                      : u.toString()) != null
                    ? s
                    : a),
                  (i =
                    (c =
                      (d = o("WAWebLidMigrationUtils").toPn(e)) == null
                        ? void 0
                        : d.toString()) != null
                      ? c
                      : ""));
              } else {
                var m, p, _, f;
                if (
                  ((i =
                    (m =
                      (p = o("WAWebLidMigrationUtils").toPn(e)) == null
                        ? void 0
                        : p.toString()) != null
                      ? m
                      : a),
                  (l =
                    (_ =
                      (f = o("WAWebLidMigrationUtils").toLid(e)) == null
                        ? void 0
                        : f.toString()) != null
                      ? _
                      : ""),
                  !l)
                ) {
                  var g, h;
                  (yield o("WAWebAdvSyncDeviceListApi").syncDeviceList({
                    wids: [e],
                    context: "voip",
                    phash: null,
                  }),
                    (l =
                      (g =
                        (h = o("WAWebLidMigrationUtils").toLid(e)) == null
                          ? void 0
                          : h.toString()) != null
                        ? g
                        : ""));
                }
              }
              if (!l) {
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
              var y =
                  (t = o("WAWebLidMigrationUtils").toLid(e)) != null ? t : e,
                C = yield (B || (B = n("Promise"))).all([
                  o("WAWebVoipStackInterface").getVoipStackInterface(),
                  o("WAWebAdvSyncDeviceListApi").syncDeviceList({
                    wids: [y],
                    context: "voip",
                    phash: null,
                  }),
                ]),
                b = C[0],
                v = C[1];
              if (!i) {
                var S, R;
                i =
                  (S =
                    (R = o("WAWebLidMigrationUtils").toPn(e)) == null
                      ? void 0
                      : R.toString()) != null
                    ? S
                    : "";
              }
              var L = yield o("WAWebSendMsgDatabaseJob").getFanOutListJob([y]),
                E = de(L, "inviteToCall");
              (yield b == null ? void 0 : b.inviteToCall(i, l, E),
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
        })),
        ge.apply(this, arguments)
      );
    }
    ((l.startWAWebVoipCall = Q),
      (l.startWAWebVoipGroupCallFromChat = Z),
      (l.startWAWebVoipGroupCallFromContacts = te),
      (l.startWAWebVoipGroupCallFromWids = re),
      (l.joinOngoingCallByCallId = ae),
      (l.joinOngoingWAWebVoipGroupCallPN = le),
      (l.inviteToCall = fe));
  },
  226,
);
