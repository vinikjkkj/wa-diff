__d(
  "WAWebVoipStartCall",
  [
    "fbt",
    "Promise",
    "WALogger",
    "WAPromiseRaceAbort",
    "WARandomHex",
    "WAWebAdvSyncDeviceListApi",
    "WAWebBackendApi",
    "WAWebBlockedParticipantCallWarning",
    "WAWebBuildConstants",
    "WAWebCallCollection",
    "WAWebConfirmPopup.react",
    "WAWebConstantsDeprecated",
    "WAWebContactCollection",
    "WAWebCoreActionsODS",
    "WAWebEnsureVoipInited",
    "WAWebEnvironment",
    "WAWebFbtIntlList",
    "WAWebFindChatAction",
    "WAWebFrontendContactGetters",
    "WAWebLidMigrationUtils",
    "WAWebModalManager",
    "WAWebNoop",
    "WAWebNotificationIconUtils",
    "WAWebOpenCoexCallingFirstTimeModalUtils",
    "WAWebPipController",
    "WAWebSendMsgDatabaseJob",
    "WAWebSendTcTokenChatAction",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUserPrefsMeUser",
    "WAWebUsernameTypes",
    "WAWebVoipAcquireMediaStream",
    "WAWebVoipActionWriteCallLogEventUpdateJoinable",
    "WAWebVoipActivityTracker",
    "WAWebVoipBackendLoadable",
    "WAWebVoipCancelOutgoingCall",
    "WAWebVoipGatingUtils",
    "WAWebVoipInitEventEmitter",
    "WAWebVoipOngoingCallCollection",
    "WAWebVoipStackInterface",
    "WAWebVoipUiLoadable",
    "WAWebVoipUiVideoCallLoadable",
    "WAWebVoipUiVideoGroupCallLoadable",
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
      q,
      U,
      V,
      H,
      G,
      z,
      j,
      K,
      Q,
      X = Q || (Q = o("react")),
      Y = (e = n("cr:17219")) != null ? e : {},
      J = Y.getWindowsBridge,
      Z = 5;
    function ee(e, t) {
      return e().then(
        function () {},
        function (e) {
          o("WALogger")
            .WARN(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: bundle preload failed",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs(t);
        },
      );
    }
    function te() {
      return ee(
        o("WAWebVoipUiVideoGroupCallLoadable").requireBundle,
        "voip-preload-group-call-bundle",
      );
    }
    function ne(e) {
      r("WAWebEnvironment").isWindows ||
        (r("WAWebCallCollection").setPendingOutgoingCall({
          abortController: e.abortController,
          isGroup: e.isGroup,
          isJoin: e.isJoin,
          isVideo: e.isVideo,
        }),
        r("WAWebPipController").openVoipUiPiPForOutgoing());
    }
    function re() {
      var e = o("WAWebVoipGatingUtils").getUnsupportedBrowserReason();
      if (e == null) return !1;
      var t = o("WAWebVoipGatingUtils").getCrossOriginIsolatedState();
      e: {
        if (e === "missing_shared_array_buffer") {
          (o("WAWebCoreActionsODS").logCallBrowserUnsupportedMissingSAB(),
            o("WAWebCoreActionsODS").logCallBrowserCapabilityMissingSAB(t));
          break e;
        }
        if (e === "missing_atomics") {
          (o("WAWebCoreActionsODS").logCallBrowserUnsupportedMissingAtomics(),
            o("WAWebCoreActionsODS").logCallBrowserCapabilityMissingAtomics(t));
          break e;
        }
        if (e === "missing_rtc_peer_connection") {
          (o("WAWebCoreActionsODS").logCallBrowserUnsupportedMissingRTC(),
            o("WAWebCoreActionsODS").logCallBrowserCapabilityMissingRTC(t));
          break e;
        }
        if (e === "broken_voip_wasm") {
          (o("WAWebCoreActionsODS").logCallBrowserUnsupportedBrokenWasm(),
            o("WAWebCoreActionsODS").logCallBrowserCapabilityBrokenWasm(t));
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
            ? X.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
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
            : X.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
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
    function oe() {
      return ae.apply(this, arguments);
    }
    function ae() {
      return (
        (ae = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (
            !o(
              "WAWebVoipInitEventEmitter",
            ).VoipInitEventEmitter.getDidVoipInitError()
          )
            return !1;
          var e = yield o("WAWebVoipBackendLoadable").requireVoipJsBackend(),
            t = e.WAWebVoipInit;
          return (yield t.retryWAWebVoipInitAfterFailure())
            ? !1
            : (o("WAWebModalManager").ModalManager.open(
                X.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
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
        })),
        ae.apply(this, arguments)
      );
    }
    function ie() {
      o("WAWebModalManager").ModalManager.open(
        X.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
          tsNavigationData: { surface: "unknown", viewName: "voip-start-call" },
          onOK: o("WAWebModalManager").closeModalManager,
          title: s._(/*BTDS*/ "Couldn't place call"),
          children: s._(/*BTDS*/ "Refresh the page and try again."),
        }),
      );
    }
    function le() {
      return se.apply(this, arguments);
    }
    function se() {
      return (
        (se = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return re() ? !0 : oe();
        })),
        se.apply(this, arguments)
      );
    }
    function ue(e) {
      return ce.apply(this, arguments);
    }
    function ce() {
      return (
        (ce = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (r("WAWebCallCollection").pendingOutgoingCall != null)
            return (
              o("WALogger")
                .LOG(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: outgoing call already pending; ignoring duplicate start",
                    ])),
                )
                .color(r("WAWebConstantsDeprecated").VOIP_LOG_COLOR),
              null
            );
          var t = new AbortController();
          ne({
            abortController: t,
            isGroup: e.isGroup,
            isJoin: e.isJoin,
            isVideo: e.isVideo,
          });
          var n = o("WAWebEnsureVoipInited").ensureVoipInitialized();
          n.catch(r("WAWebNoop"));
          try {
            yield r("WAPromiseRaceAbort")(n, t.signal);
          } catch (e) {
            return t.signal.aborted
              ? (o("WALogger")
                  .LOG(
                    p ||
                      (p = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: outgoing call cancelled while waiting for VoIP init",
                      ])),
                  )
                  .color(r("WAWebConstantsDeprecated").VOIP_LOG_COLOR),
                null)
              : (o("WALogger")
                  .ERROR(
                    _ ||
                      (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: outgoing call: VoIP init failed, aborting",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e))
                  .sendLogs("voip-outgoing-ensure-init-failed"),
                o("WAWebVoipCancelOutgoingCall").cancelPendingOutgoingCall(),
                ie(),
                null);
          }
          return t;
        })),
        ce.apply(this, arguments)
      );
    }
    function de(e, t, n, r, o) {
      return me.apply(this, arguments);
    }
    function me() {
      return (
        (me = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, a, i, l) {
            if (
              (a === void 0 && (a = 0),
              i === void 0 && (i = 0),
              l === void 0 && (l = null),
              !(yield le()))
            ) {
              (o("WAWebVoipActivityTracker").startActivityTracking(),
                o("WAWebVoipActivityTracker").startUiActivityTracking());
              var s = yield ue({ isGroup: !1, isJoin: !1, isVideo: t });
              if (s != null) {
                var u = s.signal,
                  c = yield o(
                    "WAWebVoipAcquireMediaStream",
                  ).checkVoipDevicePermissions(t);
                if (!c) {
                  o("WAWebVoipCancelOutgoingCall").cancelPendingOutgoingCall();
                  return;
                }
                var d = l != null ? l : Te(),
                  m = o("WAWebLidMigrationUtils").toLid(e),
                  p = o("WAWebLidMigrationUtils").toPn(e);
                if (m == null)
                  if (
                    (o("WALogger")
                      .LOG(
                        f ||
                          (f = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: startWAWebVoipCall: toLid() returned null, attempting usync for LID resolution",
                          ])),
                      )
                      .color(r("WAWebConstantsDeprecated").VOIP_LOG_COLOR),
                    yield o("WAWebAdvSyncDeviceListApi").syncDeviceList({
                      wids: [e],
                      context: "voip",
                      phash: null,
                    }),
                    (m = o("WAWebLidMigrationUtils").toLid(e)),
                    m != null)
                  )
                    o("WALogger")
                      .LOG(
                        g ||
                          (g = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: startWAWebVoipCall: usync resolved LID successfully",
                          ])),
                      )
                      .color(r("WAWebConstantsDeprecated").VOIP_LOG_COLOR);
                  else {
                    (o("WALogger")
                      .ERROR(
                        h ||
                          (h = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: startWAWebVoipCall: LID resolution failed after usync, aborting call",
                          ])),
                      )
                      .sendLogs(
                        "voip: startWAWebVoipCall: LID failed after usync, call aborted",
                      ),
                      o(
                        "WAWebVoipCancelOutgoingCall",
                      ).cancelPendingOutgoingCall());
                    return;
                  }
                var _ = m != null ? m : p;
                if (_ == null) {
                  (o("WALogger")
                    .ERROR(
                      y ||
                        (y = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: startWAWebVoipCall: peerWid is null",
                        ])),
                    )
                    .sendLogs("voip: startWAWebVoipCall: peerWid is null"),
                    o(
                      "WAWebVoipCancelOutgoingCall",
                    ).cancelPendingOutgoingCall());
                  return;
                }
                (yield o("WAWebAdvSyncDeviceListApi").syncDeviceList({
                  wids: [_],
                  context: "voip",
                  phash: null,
                }),
                  yield o(
                    "WAWebOpenCoexCallingFirstTimeModalUtils",
                  ).maybeShowCoexCallingSMBFirstTimeModal(),
                  yield o(
                    "WAWebOpenCoexCallingFirstTimeModalUtils",
                  ).maybeShowCoexCallingConsumerFirstTimeModal(e));
                var v = (K || (K = n("Promise"))).all([
                  o("WAWebVoipStackInterface").getVoipStackInterface(),
                  o("WAWebSendMsgDatabaseJob").getFanOutListJob([_]),
                  o("WAWebBackendApi").frontendSendAndReceive("getTcToken", {
                    wid: e,
                  }),
                  o("WAWebSendTcTokenChatAction").sendTcToken(_),
                  ee(
                    o("WAWebVoipUiLoadable").requireBundle,
                    "voip-start-call-preload-ui",
                  ),
                  t
                    ? ee(
                        o("WAWebVoipUiVideoCallLoadable").requireBundle,
                        "voip-start-call-preload-video",
                      )
                    : void 0,
                ]);
                v.catch(r("WAWebNoop"));
                try {
                  var S = yield r("WAPromiseRaceAbort")(v, u),
                    R = S[0],
                    L = S[1],
                    E = S[2].tcToken,
                    k = Ie(L, "callStart");
                  (o("WALogger")
                    .LOG(
                      C ||
                        (C = babelHelpers.taggedTemplateLiteralLoose([
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
                    yield R == null
                      ? void 0
                      : R.startCall(
                          _,
                          k,
                          d,
                          t,
                          (p != null ? p : _).toString({ legacy: !0 }),
                          !1,
                          E,
                          a,
                          i,
                          null,
                        ));
                } catch (e) {
                  if (u.aborted) {
                    o("WALogger")
                      .LOG(
                        b ||
                          (b = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: startWAWebVoipCall: cancelled before signaling",
                          ])),
                      )
                      .color(r("WAWebConstantsDeprecated").VOIP_LOG_COLOR);
                    return;
                  }
                  throw (
                    o(
                      "WAWebVoipCancelOutgoingCall",
                    ).cancelPendingOutgoingCall(),
                    e
                  );
                }
                yield Ee(t);
              }
            }
          },
        )),
        me.apply(this, arguments)
      );
    }
    function pe(e, t, n, r, o, a) {
      return _e.apply(this, arguments);
    }
    function _e() {
      return (
        (_e = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, a, i, l, s) {
            (l === void 0 && (l = 0),
              s === void 0 && (s = 0),
              o("WALogger")
                .LOG(
                  v ||
                    (v = babelHelpers.taggedTemplateLiteralLoose([
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
            var u = yield ue({ isGroup: !0, isJoin: !1, isVideo: t });
            if (u != null) {
              var c = u.signal,
                d = yield o(
                  "WAWebVoipAcquireMediaStream",
                ).checkVoipDevicePermissions(t);
              if (!d) {
                o("WAWebVoipCancelOutgoingCall").cancelPendingOutgoingCall();
                return;
              }
              var m = Te(),
                p = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(),
                _ = p
                  ? o("WAWebContactCollection").ContactCollection.get(p)
                  : null,
                f = _ ? o("WAWebFrontendContactGetters").getUsername(_) : null,
                g = (K || (K = n("Promise"))).all([
                  o("WAWebVoipStackInterface").getVoipStackInterface(),
                  De(e),
                  ee(
                    o("WAWebVoipUiLoadable").requireBundle,
                    "voip-start-group-call-preload-ui",
                  ),
                  t
                    ? ee(
                        o("WAWebVoipUiVideoCallLoadable").requireBundle,
                        "voip-start-group-call-preload-video",
                      )
                    : void 0,
                  t
                    ? ee(
                        o("WAWebVoipUiVideoGroupCallLoadable").requireBundle,
                        "voip-start-group-call-preload-video-group",
                      )
                    : void 0,
                ]);
              g.catch(r("WAWebNoop"));
              try {
                var h,
                  y = yield r("WAPromiseRaceAbort")(g, c),
                  C = y[0],
                  b = y[1],
                  E = b.gcDeviceJidsCsv,
                  k = b.gcUserJids,
                  I = b.gcUserPnJids;
                yield (K || (K = n("Promise"))).all(
                  k.map(function (e) {
                    return o("WAWebSendTcTokenChatAction").sendTcToken(e);
                  }),
                );
                var T =
                  (h = i == null ? void 0 : i.toString({ legacy: !0 })) != null
                    ? h
                    : "";
                o("WALogger")
                  .LOG(
                    S ||
                      (S = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: startWAWebVoipGroupCall: gid=",
                        " users=",
                        " name=",
                        "",
                      ])),
                    T,
                    k,
                    a,
                  )
                  .color(r("WAWebConstantsDeprecated").VOIP_LOG_COLOR);
                var D = i
                  ? yield o(
                      "WAWebNotificationIconUtils",
                    ).getNotificationIconByWid(
                      i,
                      new AbortController().signal,
                      o("WAWebNotificationIconUtils").USER_DEFAULT_ICON,
                    )
                  : o("WAWebNotificationIconUtils").USER_DEFAULT_ICON;
                if (c.aborted) {
                  o("WALogger")
                    .LOG(
                      R ||
                        (R = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: startWAWebVoipGroupCall: cancelled before signaling",
                        ])),
                    )
                    .color(r("WAWebConstantsDeprecated").VOIP_LOG_COLOR);
                  return;
                }
                (o("WAWebCoreActionsODS").logCallAttempt(),
                  t
                    ? o("WAWebCoreActionsODS").logCallOutgoingGroupVideo()
                    : o("WAWebCoreActionsODS").logCallOutgoingGroupAudio(),
                  yield C == null
                    ? void 0
                    : C.startGroupCall(
                        I.map(function (e) {
                          var t;
                          return (t =
                            e == null ? void 0 : e.toString({ legacy: !0 })) !=
                            null
                            ? t
                            : "";
                        }),
                        k.map(function (e) {
                          return e.toString({ legacy: !0 });
                        }),
                        E,
                        m,
                        t,
                        T,
                        !1,
                        "",
                        a,
                        D,
                        l,
                        s,
                        o("WAWebUsernameTypes").serializeMaybeUsername(f),
                      ));
              } catch (e) {
                if (c.aborted) {
                  o("WALogger")
                    .LOG(
                      L ||
                        (L = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: startWAWebVoipGroupCall: cancelled before signaling",
                        ])),
                    )
                    .color(r("WAWebConstantsDeprecated").VOIP_LOG_COLOR);
                  return;
                }
                throw (
                  o("WAWebVoipCancelOutgoingCall").cancelPendingOutgoingCall(),
                  e
                );
              }
              yield Ee(t);
            }
          },
        )),
        _e.apply(this, arguments)
      );
    }
    function fe(e, t, n, r) {
      return ge.apply(this, arguments);
    }
    function ge() {
      return (
        (ge = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            var a, i;
            if (
              (n === void 0 && (n = 0),
              r === void 0 && (r = 0),
              !(yield le()) &&
                (yield o(
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
              yield pe(
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
          },
        )),
        ge.apply(this, arguments)
      );
    }
    function he(e, t, n, r) {
      return ye.apply(this, arguments);
    }
    function ye() {
      return (
        (ye = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a) {
            if (
              (n === void 0 && (n = 0), a === void 0 && (a = 0), !(yield le()))
            ) {
              var i = e.filter(function (e) {
                return !o("WAWebUserPrefsMeUser").isMeAccount(e.id);
              });
              if (i.length !== 0) {
                if (i.length === 1) {
                  yield de(i[0].id, t, n, a);
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
                yield pe(
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
        ye.apply(this, arguments)
      );
    }
    function Ce(e, t, n, r) {
      return be.apply(this, arguments);
    }
    function be() {
      return (
        (be = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            if (
              (n === void 0 && (n = 0), r === void 0 && (r = 0), !(yield le()))
            ) {
              var a = e.filter(function (e) {
                return !o("WAWebUserPrefsMeUser").isMeAccount(e) && !e.isBot();
              });
              if (a.length !== 0) {
                if (a.length === 1) {
                  yield de(a[0], t, n, r);
                  return;
                }
                yield pe(a, t, "", void 0, n, r);
              }
            }
          },
        )),
        be.apply(this, arguments)
      );
    }
    function ve(e) {
      return Se.apply(this, arguments);
    }
    function Se() {
      return (
        (Se = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t;
          (o("WALogger")
            .LOG(
              E ||
                (E = babelHelpers.taggedTemplateLiteralLoose([
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
                k ||
                  (k = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: joinOngoingCallByCallId: no call for ",
                    "",
                  ])),
                e,
              )
              .color(r("WAWebConstantsDeprecated").VOIP_LOG_COLOR),
              o("WAWebToastManager").ToastManager.open(
                X.jsx(o("WAWebToast.react").Toast, {
                  msg: s._(/*BTDS*/ "Call not found."),
                }),
              ));
            return;
          }
          var a = n.to;
          if (a == null) {
            (o("WALogger")
              .LOG(
                I ||
                  (I = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: joinOngoingCallByCallId: No chat found for call ID ",
                    "",
                  ])),
                e,
              )
              .color(r("WAWebConstantsDeprecated").VOIP_LOG_COLOR),
              o("WAWebToastManager").ToastManager.open(
                X.jsx(o("WAWebToast.react").Toast, {
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
          yield Re({
            callId: e,
            chat: l,
            isDeviceSwitch: !0,
            isVideo: u,
            lobbyEntryPoint: o("WAWebWamEnumLobbyEntryPointType")
              .LOBBY_ENTRY_POINT_TYPE.SECOND_NOTIFICATION,
          });
        })),
        Se.apply(this, arguments)
      );
    }
    function Re(e) {
      return Le.apply(this, arguments);
    }
    function Le() {
      return (
        (Le = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            a = e.callId,
            i = e.chat,
            l = e.isDeviceSwitch,
            u = l === void 0 ? !1 : l,
            c = e.isVideo,
            d = e.lobbyEntryPoint,
            m = d === void 0 ? 0 : d;
          if (!(yield le())) {
            var p = yield o(
              "WAWebBlockedParticipantCallWarning",
            ).maybeShowBlockedParticipantCallWarning(i, "join");
            if (!p) {
              o("WAWebVoipActivityTracker").clearAllActivityTracking();
              return;
            }
            (o("WAWebVoipActivityTracker").startActivityTracking(),
              o("WAWebVoipActivityTracker").startUiActivityTracking());
            var _ = yield o(
              "WAWebVoipAcquireMediaStream",
            ).checkVoipDevicePermissions(c);
            if (!_) {
              o("WAWebVoipActivityTracker").clearAllActivityTracking();
              return;
            }
            if (r("WAWebEnvironment").isWindows) {
              var f,
                g = J == null || (f = J()) == null ? void 0 : f.voip;
              if (g == null) {
                (o("WALogger")
                  .LOG(
                    T ||
                      (T = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: joinOngoingWAWebVoipGroupCallPN: VoIP bridge is null",
                      ])),
                  )
                  .color(r("WAWebConstantsDeprecated").VOIP_LOG_COLOR),
                  o("WAWebVoipActivityTracker").clearAllActivityTracking());
                return;
              }
              if (
                !("joinOngoingCall" in g) ||
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
                    D ||
                      (D = babelHelpers.taggedTemplateLiteralLoose([
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
                x ||
                  (x = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: joinOngoingWAWebVoipGroupCallPN: not enabled",
                  ])),
              ),
                o("WAWebVoipActivityTracker").clearAllActivityTracking());
              return;
            }
            var h = o(
              "WAWebVoipOngoingCallCollection",
            ).WAWebVoipOngoingCallCollection.getByCallId(a);
            if (h == null) {
              (o("WALogger")
                .LOG(
                  $ ||
                    ($ = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: joinOngoingWAWebVoipGroupCallPN: no call ",
                      "",
                    ])),
                  a,
                )
                .color(r("WAWebConstantsDeprecated").VOIP_LOG_COLOR),
                o("WAWebVoipActivityTracker").clearAllActivityTracking());
              return;
            } else if (h.callCreator == null) {
              (o("WALogger")
                .LOG(
                  P ||
                    (P = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: joinOngoingWAWebVoipGroupCallPN: no creator ",
                      "",
                    ])),
                  a,
                )
                .color(r("WAWebConstantsDeprecated").VOIP_LOG_COLOR),
                yield o(
                  "WAWebVoipActionWriteCallLogEventUpdateJoinable",
                ).cleanupJoinableCallLog(a),
                o("WAWebToastManager").ToastManager.open(
                  X.jsx(o("WAWebToast.react").Toast, {
                    msg: s._(/*BTDS*/ "Could not join call."),
                  }),
                ),
                o("WAWebVoipActivityTracker").clearAllActivityTracking());
              return;
            }
            (o("WALogger")
              .LOG(
                N ||
                  (N = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: joinOngoingWAWebVoipGroupCallPN: joining",
                  ])),
              )
              .color(r("WAWebConstantsDeprecated").VOIP_LOG_COLOR),
              o("WAWebVoipActivityTracker").trackUiActivity(
                o("WAWebVoipActivityTracker").VoipUiActivity
                  .USER_JOIN_ONGOING_CALL,
              ));
            var y = (t = h.callParticipants) != null ? t : [],
              C = [
                o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
              ].concat(
                y
                  .map(function (e) {
                    var t = o("WAWebLidMigrationUtils").toPn(e.participant);
                    return (
                      t == null &&
                        o("WALogger")
                          .ERROR(
                            M ||
                              (M = babelHelpers.taggedTemplateLiteralLoose([
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
              b = yield ue({ isGroup: !0, isJoin: !0, isVideo: c });
            if (b != null) {
              var v = b.signal,
                S = (K || (K = n("Promise"))).all([
                  o("WAWebVoipStackInterface").getVoipStackInterface(),
                  De(C, !0),
                  ee(
                    o("WAWebVoipUiLoadable").requireBundle,
                    "voip-join-group-call-preload-ui",
                  ),
                  c
                    ? ee(
                        o("WAWebVoipUiVideoCallLoadable").requireBundle,
                        "voip-join-group-call-preload-video",
                      )
                    : void 0,
                  c
                    ? ee(
                        o("WAWebVoipUiVideoGroupCallLoadable").requireBundle,
                        "voip-join-group-call-preload-video-group",
                      )
                    : void 0,
                ]);
              S.catch(r("WAWebNoop"));
              try {
                var R,
                  L = yield r("WAPromiseRaceAbort")(S, v),
                  E = L[0],
                  k = L[1],
                  I = k.gcDeviceJidsCsv,
                  O = k.gcUserJids,
                  B = k.gcUserPnJids;
                yield (K || (K = n("Promise"))).all(
                  O.map(function (e) {
                    return o("WAWebSendTcTokenChatAction").sendTcToken(e);
                  }),
                );
                var W = i.id.isGroup() ? i.id.toString({ legacy: !0 }) : "";
                if (
                  (o("WALogger")
                    .LOG(
                      w ||
                        (w = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: startWAWebVoipGroupCallPN: groupJid: ",
                          "",
                        ])),
                      W,
                    )
                    .color(r("WAWebConstantsDeprecated").VOIP_LOG_COLOR),
                  v.aborted)
                ) {
                  o("WALogger")
                    .LOG(
                      A ||
                        (A = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: joinOngoingWAWebVoipGroupCallPN: cancelled before signaling",
                        ])),
                    )
                    .color(r("WAWebConstantsDeprecated").VOIP_LOG_COLOR);
                  return;
                }
                (o("WAWebCoreActionsODS").logCallGroupJoin(),
                  yield E == null
                    ? void 0
                    : E.joinOngoingCall(
                        a,
                        r("nullthrows")(h.callCreator).toString({
                          legacy: !0,
                          formatIncludeDevice: !0,
                        }),
                        "",
                        B.map(function (e) {
                          var t;
                          return (t =
                            e == null ? void 0 : e.toString({ legacy: !0 })) !=
                            null
                            ? t
                            : "";
                        }),
                        O.map(function (e) {
                          return e.toString({ legacy: !0 });
                        }),
                        I,
                        c,
                        W,
                        0,
                        !0,
                        (R = h.callLinkToken) != null ? R : "",
                        !1,
                        "",
                        !1,
                        i.name || i.formattedTitle,
                        m,
                        u,
                      ));
              } catch (e) {
                if (v.aborted) {
                  o("WALogger")
                    .LOG(
                      F ||
                        (F = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: joinOngoingWAWebVoipGroupCallPN: cancelled before signaling",
                        ])),
                    )
                    .color(r("WAWebConstantsDeprecated").VOIP_LOG_COLOR);
                  return;
                }
                throw (
                  o("WAWebVoipCancelOutgoingCall").cancelPendingOutgoingCall(),
                  e
                );
              }
            }
          }
        })),
        Le.apply(this, arguments)
      );
    }
    function Ee(e) {
      return ke.apply(this, arguments);
    }
    function ke() {
      return (
        (ke = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            if ("permissions" in navigator) {
              if (e) {
                var t = yield navigator.permissions.query({ name: "camera" }),
                  n = t.state === "granted";
                n ||
                  o("WALogger").LOG(
                    O ||
                      (O = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: JS doesn't have camera permissions for a video call",
                      ])),
                  );
              }
              var r = yield navigator.permissions.query({ name: "microphone" }),
                a = r.state === "granted";
              a ||
                o("WALogger").LOG(
                  B ||
                    (B = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: JS doesn't have microphone permissions for a call",
                    ])),
                );
            }
          } catch (e) {
            o("WALogger").LOG(
              W ||
                (W = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: failed to check device permissions: ",
                  "",
                ])),
              e,
            );
          }
        })),
        ke.apply(this, arguments)
      );
    }
    function Ie(e, t) {
      return e.length > Z
        ? (o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
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
    function Te() {
      var e = "00" + o("WARandomHex").randomHex(16).substr(2);
      return (
        o("WALogger")
          .LOG(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "voip:generateCallId: ",
                "",
              ])),
            e,
          )
          .color(r("WAWebConstantsDeprecated").VOIP_LOG_COLOR),
        e
      );
    }
    function De(e, t) {
      return xe.apply(this, arguments);
    }
    function xe() {
      return (
        (xe = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
                q ||
                  (q = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: getVoipParticipantJids: ",
                    " participants unresolved, attempting usync",
                  ])),
                l.length,
              )
              .color(r("WAWebConstantsDeprecated").VOIP_LOG_COLOR),
              yield (K || (K = n("Promise"))).all(
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
                    U ||
                      (U = babelHelpers.taggedTemplateLiteralLoose([
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
                    V ||
                      (V = babelHelpers.taggedTemplateLiteralLoose([
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
          yield (K || (K = n("Promise"))).all(
            u.map(function (e) {
              return o("WAWebAdvSyncDeviceListApi").syncDeviceList({
                wids: [e],
                context: "voip",
                phash: null,
              });
            }),
          );
          var d = yield K.all(
              u.map(function (e) {
                return o("WAWebSendMsgDatabaseJob").getFanOutListJob([e]);
              }),
            ),
            m = d.map(function (e) {
              var t = Ie(e, "callStart"),
                n = t.join(",");
              return n;
            });
          return { gcUserJids: u, gcUserPnJids: c, gcDeviceJidsCsv: m };
        })),
        xe.apply(this, arguments)
      );
    }
    function $e(e) {
      return Pe.apply(this, arguments);
    }
    function Pe() {
      return (
        (Pe = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (!(yield le())) {
            o("WALogger").LOG(
              H ||
                (H = babelHelpers.taggedTemplateLiteralLoose([
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
                    G ||
                      (G = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: inviteToCall: LID resolution failed for participant, aborting invite",
                      ])),
                  )
                  .sendLogs("voip: inviteToCall: LID expected but missing");
                return;
              }
              var y =
                  (t = o("WAWebLidMigrationUtils").toLid(e)) != null ? t : e,
                C = yield (K || (K = n("Promise"))).all([
                  o("WAWebVoipStackInterface").getVoipStackInterface(),
                  o("WAWebAdvSyncDeviceListApi").syncDeviceList({
                    wids: [y],
                    context: "voip",
                    phash: null,
                  }),
                  ee(
                    o("WAWebVoipUiLoadable").requireBundle,
                    "voip-invite-to-call-preload-ui",
                  ),
                  ee(
                    o("WAWebVoipUiVideoGroupCallLoadable").requireBundle,
                    "voip-invite-to-call-preload-video-group",
                  ),
                ]),
                b = C[0];
              if (!i) {
                var v, S;
                i =
                  (v =
                    (S = o("WAWebLidMigrationUtils").toPn(e)) == null
                      ? void 0
                      : S.toString()) != null
                    ? v
                    : "";
              }
              var R = yield o("WAWebSendMsgDatabaseJob").getFanOutListJob([y]),
                L = Ie(R, "inviteToCall");
              (yield b == null ? void 0 : b.inviteToCall(i, l, L),
                o("WALogger").LOG(
                  z ||
                    (z = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: inviteToCall completed successfully for ",
                      "",
                    ])),
                  e.toString(),
                ));
            } catch (t) {
              throw (
                o("WALogger")
                  .ERROR(
                    j ||
                      (j = babelHelpers.taggedTemplateLiteralLoose([
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
        Pe.apply(this, arguments)
      );
    }
    ((l.preloadGroupCallBundle = te),
      (l.startWAWebVoipCall = de),
      (l.startWAWebVoipGroupCallFromChat = fe),
      (l.startWAWebVoipGroupCallFromContacts = he),
      (l.startWAWebVoipGroupCallFromWids = Ce),
      (l.joinOngoingCallByCallId = ve),
      (l.joinOngoingWAWebVoipGroupCallPN = Re),
      (l.inviteToCall = $e));
  },
  226,
);
