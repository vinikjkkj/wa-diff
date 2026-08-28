__d(
  "ZenonPeerConnectionSdpActions",
  [
    "FBLogger",
    "ZenonAuditedCheckpointLogId",
    "ZenonBrowsers",
    "ZenonInfraActionsLogger",
    "ZenonPeerConnectionMediaActions",
    "ZenonSDP",
    "asyncToGeneratorRuntime",
    "err",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
        function t(t, n) {
          var r;
          return (
            (r = e.call(this, t.message, { cause: t }) || this),
            (r.sdpEvent = n),
            r
          );
        }
        return (
          babelHelpers.inheritsLoose(t, e),
          (t.stringifyNewSdp = function (n) {
            if (n instanceof t) {
              var e = n.sdpEvent;
              if (e.type === "applyRemoteSdp") {
                var r,
                  o,
                  a = e.payload.sdp;
                return (r =
                  (o = a.sdp) != null ? o : JSON.stringify(a.update)) != null
                  ? r
                  : "unavailable";
              }
            }
            return "unavailable";
          }),
          t
        );
      })(babelHelpers.wrapNativeSuper(Error)),
      s = function (t) {
        r("promiseDone")(t.onRemoteSdpSet());
      },
      u = (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (t.type === "remoteSdpFailed") {
            if (
              (r("ZenonInfraActionsLogger").logCheckpointEmployeesTestUsersOnly(
                {
                  checkpoint: "trying to rollback to last successful sdp pair",
                },
              ),
              o("ZenonBrowsers").supportsRollback())
            )
              yield e.sdpManager.rollbackSdp();
            else {
              if (e.lastSuccessfulSdpPair == null)
                throw r("FBLogger")("rtc_www").mustfixThrow(
                  "No last successfully negotiated SDP pair, should never happen here",
                );
              var n = e.lastSuccessfulSdpPair,
                a = n.localSdp,
                i = n.remoteSdp;
              (yield e.sdpManager.setLocalSdp(a),
                r("ZenonInfraActionsLogger").logCheckpoint({
                  auditId: r("ZenonAuditedCheckpointLogId")
                    .RP_ROOMS_INFRA_WWW__ERROR,
                  checkpoint: "setting remote sdp, name: " + t.type,
                }),
                yield e.sdpManager.setRemoteSdp(i, e.logEvent),
                t.onSuccess());
            }
            r("ZenonInfraActionsLogger").logCheckpointEmployeesTestUsersOnly({
              checkpoint: "successful rollback to last successful sdp pair",
            });
          }
        });
        return function (n, r) {
          return e.apply(this, arguments);
        };
      })(),
      c = (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (
            t.type === "applyLocalSdp" ||
            t.type === "localMediaStateUpdateRetry" ||
            t.type === "iceRestart"
          ) {
            var n = t.type === "iceRestart",
              o = e.localMediaStateVersion + 1;
            (yield e.sdpManager.createAndSetLocalSdp(o, "offer", {
              iceRestart: n,
            }),
              r("ZenonInfraActionsLogger").logCheckpointEmployeesTestUsersOnly({
                checkpoint: "apply local SDP",
              }));
            var a =
              t.type === "localMediaStateUpdateRetry"
                ? null
                : e.localMediaStateUpdateRetryTimerId;
            return (
              t.onSuccess(),
              {
                localMediaStateUpdateRetryTimerId: a,
                localMediaStateVersion: o,
                outstandingLocalOffer: !0,
              }
            );
          }
          return {};
        });
        return function (n, r) {
          return e.apply(this, arguments);
        };
      })(),
      d = (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (t.type === "applyRemoteSdp") {
            var n = e.mediaChannelManager,
              a = e.sdpManager,
              i = t.payload.sdp,
              l = i.sdp,
              s = i.type,
              u = t.payload.sdpOriginLocalId,
              c = t.payload.e2eeServerState;
            (s === "answer"
              ? (e.logEvent({ name: "setRemoteSdpAnswer" }),
                r("ZenonInfraActionsLogger").logCheckpoint({
                  auditId: r("ZenonAuditedCheckpointLogId")
                    .RP_ROOMS_INFRA_WWW__ERROR,
                  checkpoint: "setting remote sdp, name: " + t.type,
                }),
                yield a.setRemoteSdp(
                  new (o("ZenonSDP").ZenonRemoteSDP)({ sdp: l, type: s }),
                  e.logEvent,
                  u,
                  c,
                ),
                e.logEvent({ name: "endSetRemoteDescription" }),
                r(
                  "ZenonInfraActionsLogger",
                ).logCheckpointEmployeesTestUsersOnly({
                  checkpoint: "apply remote answer",
                }))
              : s === "pranswer" &&
                (e.logEvent({ name: "setRemoteSdpPrAnswer" }),
                r("ZenonInfraActionsLogger").logCheckpoint({
                  auditId: r("ZenonAuditedCheckpointLogId")
                    .RP_ROOMS_INFRA_WWW__ERROR,
                  checkpoint: "setting remote sdp, name: " + t.type,
                }),
                yield a.setRemoteSdp(
                  new (o("ZenonSDP").ZenonRemoteSDP)({ sdp: l, type: s }),
                  e.logEvent,
                  u,
                  c,
                ),
                e.logEvent({ name: "endSetRemoteDescription" }),
                r(
                  "ZenonInfraActionsLogger",
                ).logCheckpointEmployeesTestUsersOnly({
                  checkpoint: "apply remote pranswer",
                })),
              o("ZenonPeerConnectionMediaActions").applyMediaStates(
                n,
                t.payload.mediaStates,
              ));
            var d = t.payload.renegotiationOffer;
            if (d != null) {
              var m = d.sdp,
                p = d.type;
              (r("ZenonInfraActionsLogger").logCheckpoint({
                auditId: r("ZenonAuditedCheckpointLogId")
                  .RP_ROOMS_INFRA_WWW__ERROR,
                checkpoint: "setting remote sdp, name: " + t.type,
              }),
                yield a.setRemoteSdp(
                  new (o("ZenonSDP").ZenonRemoteSDP)({ sdp: m, type: p }),
                  e.logEvent,
                  u,
                  c,
                ));
              var _ = e.localMediaStateVersion + 1;
              (yield e.sdpManager.createAndSetLocalSdp(_, "answer"),
                r(
                  "ZenonInfraActionsLogger",
                ).logCheckpointEmployeesTestUsersOnly({
                  checkpoint: "Apply renegotiation offer and set local answer",
                }));
            }
            return (
              t.payload.source === "joinResponse"
                ? e.logEvent({ name: "inviteResponseProcessed" })
                : t.payload.source === "serverMediaUpdateRequest" &&
                  t.payload.sdp.type === "answer" &&
                  e.logEvent({ name: "smuWithAnswerProcessed" }),
              t.payload.onProcessed &&
                (t.payload.onProcessed(),
                r("ZenonInfraActionsLogger").logCheckpoint({
                  checkpoint:
                    "onProcessed called in ZenonPeerConnectionSdpActions.applyRemoteAnswer",
                })),
              t.onSuccess(),
              t.payload.sdp
            );
          }
        });
        return function (n, r) {
          return e.apply(this, arguments);
        };
      })(),
      m = (function () {
        var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var a = t.mediaChannelManager,
            i = t.sdpManager;
          if (n.type === "applyRemoteSdp") {
            var l = n.payload.sdp,
              s = n.payload.sdpOriginLocalId,
              u = n.payload.e2eeServerState;
            if (l.type === "offer")
              try {
                t.logEvent({ name: "setRemoteSdpOffer" });
                var c;
                if (l.update) {
                  var d;
                  c =
                    (d = t.sdpManager.getRemoteSdp()) != null
                      ? d
                      : new (o("ZenonSDP").ZenonRemoteSDP)({ type: l.type });
                  var m = Object.keys(l.update.media);
                  (m.forEach(function (e) {
                    var t = l.update.media[e].body;
                    c.updateMSection(parseInt(e, 10), t);
                  }),
                    c.setVersion(l.version),
                    c.setType(l.type),
                    c.updateMids(
                      m.map(function (e) {
                        return l.update.media[e].mid;
                      }),
                    ),
                    c.updateMsidSemantic(),
                    a.removeMissingTracks(c.getActiveTrackIDs()));
                } else
                  c = new (o("ZenonSDP").ZenonRemoteSDP)({
                    sdp: l.sdp,
                    type: l.type,
                  });
                r("ZenonInfraActionsLogger").logCheckpoint({
                  auditId: r("ZenonAuditedCheckpointLogId")
                    .RP_ROOMS_INFRA_WWW__ERROR,
                  checkpoint: "setting remote sdp, name: " + n.type,
                });
                var p = yield i.setRemoteSdp(c, t.logEvent, s, u);
                (o("ZenonPeerConnectionMediaActions").applyMediaStates(
                  a,
                  n.payload.mediaStates,
                  l.update == null,
                ),
                  n.payload.onProcessed &&
                    (n.payload.onProcessed(),
                    r("ZenonInfraActionsLogger").logCheckpoint({
                      checkpoint:
                        "onProcessed called in ZenonPeerConnectionSdpActions.applyRemoteOfferAndSetLocalAnswer",
                    })));
                var _ = t.localMediaStateVersion + 1,
                  f = yield t.sdpManager.createAndSetLocalSdp(_, "answer");
                return (
                  r(
                    "ZenonInfraActionsLogger",
                  ).logCheckpointEmployeesTestUsersOnly({
                    checkpoint: "apply remote offer and set local answer",
                  }),
                  n.onSuccess(),
                  {
                    lastSuccessfulSdpPair: {
                      localSdp: f.copyWithTypeAndActpass("offer"),
                      remoteSdp: p.copyWithType("answer"),
                    },
                    localMediaStateVersion: _,
                  }
                );
              } catch (t) {
                var g = t instanceof Error ? t : r("err")(String(t));
                throw new e(g, n);
              }
          }
          return {};
        });
        return function (n, r) {
          return t.apply(this, arguments);
        };
      })(),
      p = function (n, o) {
        var t = e.stringifyNewSdp(o.data),
          a = n.sdpManager.getRemoteSdp();
        r("ZenonInfraActionsLogger").logError({
          auditId: r("ZenonAuditedCheckpointLogId").RP_ROOMS_INFRA_WWW__ERROR,
          checkpoint:
            "Failed to apply remote offer and set local answer: " +
            o.data.toString() +
            " | remoteSdp: " +
            t +
            " | priorSdp: " +
            JSON.stringify(a),
          errorDomain:
            "ZenonPeerConnectionSdpActions_onApplyRemoteOfferAndSetLocalAnswer",
        });
      },
      _ = function (t) {
        var e = t.sdpManager.getLocalSdp();
        if (e == null)
          throw r("FBLogger")("rtc_www").mustfixThrow(
            "Local sdp should never be null after setting remote answer",
          );
        var n = t.sdpManager.getRemoteSdp();
        if (n == null)
          throw r("FBLogger")("rtc_www").mustfixThrow(
            "Remote sdp should never be null after setting remote answer",
          );
        return {
          lastSuccessfulSdpPair: { localSdp: e, remoteSdp: n },
          outstandingLocalOffer: !1,
        };
      },
      f = function (t) {
        t.logEvent({ name: "negotiationComplete" });
      },
      g = function (t, n) {
        var e = t.sdpManager.getLocalSdp(),
          o = n.data.localMediaStateVersion;
        if (e !== null && o != null) {
          var a = e.toDesc(),
            i = a.sdp,
            l = a.type;
          r("promiseDone")(
            t.onLocalSdpSet(
              { sdp: i, type: l, version: o },
              t.mediaChannelManager.getLocalTracksForMWS(),
            ),
          );
        }
        return (e !== null && t.mediaChannelManager.onLocalSdpSet(e), n.data);
      };
    ((l.onRemoteSdpSet = s),
      (l.applyingLastSuccessfulSdpPair = u),
      (l.applyLocalSdp = c),
      (l.applyRemoteAnswer = d),
      (l.applyRemoteOfferAndSetLocalAnswer = m),
      (l.onApplyRemoteOfferSetLocalAnswerError = p),
      (l.updateSdpPair = _),
      (l.logNegotiationCompleted = f),
      (l.onLocalSdpSet = g));
  },
  98,
);
