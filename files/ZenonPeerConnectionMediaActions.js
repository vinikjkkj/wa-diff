__d(
  "ZenonPeerConnectionMediaActions",
  [
    "AggregateError",
    "Promise",
    "ZenonAppProvider",
    "ZenonAuditedCheckpointLogId",
    "ZenonInfraActionsLogger",
    "ZenonLoggingEventTypes",
    "ZenonRequestedMediaType",
    "asyncToGeneratorRuntime",
    "emptyFunction",
    "err",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = function (t, n) {
        n.type === "applyRemoteIceCandidate" &&
          n.payload != null &&
          r("promiseDone")(
            t.sdpManager.setRemoteIceCandidate(n.payload),
            function () {
              (t.logEvent({
                direction: o("ZenonLoggingEventTypes")
                  .ZenonUpdateIceInfoDirection.Receive,
                name: "updateIceInfo",
                sdpString: n.payload.candidate,
              }),
                n.onSuccess());
            },
            n.onError,
          );
      },
      u = function (t, n) {
        r("ZenonInfraActionsLogger").logError({
          auditId: r("ZenonAuditedCheckpointLogId").RP_ROOMS_INFRA_WWW__ERROR,
          checkpoint: "Failed to add local tracks: " + n.data.toString(),
          errorDomain: "ZenonPeerConnectionMediaActions_onAddLocalTracks",
        });
      },
      c = function (t, n) {
        return (
          r("ZenonInfraActionsLogger").logCheckpointEmployeesTestUsersOnly({
            checkpoint: "Successfully added local tracks",
          }),
          n.data
        );
      },
      d = (function () {
        var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a) {
          if (a.type !== "addLocalTracks") return {};
          var i = a.payload,
            l = i.callMedia,
            s = i.tracks,
            u = [],
            c = yield (e || (e = n("Promise"))).all(
              s.map(
                (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (e) {
                      try {
                        return (
                          yield t.mediaChannelManager.addTrack(
                            e,
                            a.payload.mediaMode,
                          ),
                          x(t, e.trackId, e.enabled),
                          { status: "fulfilled" }
                        );
                      } catch (e) {
                        return { reason: e, status: "rejected" };
                      }
                    },
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              ),
            );
          if (
            (c.forEach(function (e) {
              e.status === "rejected" && u.push(r("err")(e.reason));
            }),
            u.length > 0)
          ) {
            var d = new (r("AggregateError"))(u);
            throw (d.stack, a.onError(d), d);
          }
          var m =
            a.payload.callInitiator !== !0 && a.payload.mediaMode === "p2p";
          return (
            (l === r("ZenonRequestedMediaType").Video ||
              l === r("ZenonRequestedMediaType").Audiovideo) &&
              !m &&
              (o("ZenonAppProvider").isMetaAI()
                ? t.mediaChannelManager.addSendRecvVideoTransceiverIfMissing()
                : t.mediaChannelManager.addReceiveOnlyVideoTransceiverIfMissing()),
            (l === r("ZenonRequestedMediaType").Audio ||
              l === r("ZenonRequestedMediaType").Audiovideo) &&
              (yield t.mediaChannelManager.addAudioTrackOrRecvOnlyTransceiverIfMissing(
                a.payload.mediaMode,
              )),
            r("ZenonInfraActionsLogger").logCheckpointEmployeesTestUsersOnly({
              checkpoint: "add local tracks",
            }),
            a.onSuccess(),
            { localMediaStateVersion: t.localMediaStateVersion + s.length }
          );
        });
        return function (n, r) {
          return t.apply(this, arguments);
        };
      })(),
      m = function (t, n) {
        n.type === "forceEncodingEnabled" &&
          r("promiseDone")(
            t.mediaChannelManager.forceEncodingEnabled(n.payload.enabled),
            n.onSuccess,
            n.onError,
          );
      },
      p = function (t, n) {
        n.type === "iceCandidateReady" &&
          r("promiseDone")(
            t.onIceCandidateReady(n.payload),
            n.onSuccess,
            n.onError,
          );
      },
      _ = function (t, n) {
        if (n.type !== "localMediaStateUpdateRetry") return {};
        r("ZenonInfraActionsLogger").logCheckpointEmployeesTestUsersOnly({
          checkpoint: "local media state update retry with media status only",
        });
        var e = $(t, n.onSuccess, n.onError),
          o = e.localMediaStateVersion;
        return {
          localMediaStateUpdateRetryTimerId: null,
          localMediaStateVersion: o,
        };
      },
      f = function (t, n) {
        if (n.type === "muteLocalTrack") {
          var e = D(t, n.payload.trackId, !1, n.onSuccess, n.onError);
          return (
            r("ZenonInfraActionsLogger").logCheckpointEmployeesTestUsersOnly({
              checkpoint: "mute local track",
            }),
            e
          );
        }
        return {};
      },
      g = function (t, n) {
        return (
          n.type === "muteRemoteTrack" &&
            (x(t, n.payload.trackId, !1),
            r("ZenonInfraActionsLogger").logCheckpointEmployeesTestUsersOnly({
              checkpoint: "mute remote track",
            })),
          {}
        );
      },
      h = function (t, n) {
        r("ZenonInfraActionsLogger").logError({
          auditId: r("ZenonAuditedCheckpointLogId").RP_ROOMS_INFRA_WWW__ERROR,
          checkpoint: "Failed to remove local track: " + n.data.toString(),
          errorDomain: "ZenonPeerConnectionMediaActions_onRemoveLocalTracks",
        });
      },
      y = function (t, n) {
        return (
          r("ZenonInfraActionsLogger").logCheckpointEmployeesTestUsersOnly({
            checkpoint: "Successfully removed local track",
          }),
          n.data
        );
      },
      C = (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (t.type !== "removeLocalTrack") return {};
          var n = t.payload.trackId;
          yield e.mediaChannelManager.removeTrack(n);
          var o = D(e, n, !1, t.onSuccess, t.onError);
          return (
            r("ZenonInfraActionsLogger").logCheckpoint({
              auditId: r("ZenonAuditedCheckpointLogId")
                .RP_ROOMS_INFRA_WWW__ERROR,
              checkpoint: "remove local track with id " + n,
            }),
            o
          );
        });
        return function (n, r) {
          return e.apply(this, arguments);
        };
      })(),
      b = function (t, n) {
        r("ZenonInfraActionsLogger").logError({
          auditId: r("ZenonAuditedCheckpointLogId").RP_ROOMS_INFRA_WWW__ERROR,
          checkpoint: "Failed to replace local tracks: " + n.data.toString(),
          errorDomain: "ZenonPeerConnectionMediaActions_onReplaceLocalTrack",
        });
      },
      v = (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (t.type !== "replaceLocalTrack") return {};
          var n = t.payload,
            o = n.preserveOriginal,
            a = n.replacementTrack,
            i = n.trackIdToReplace;
          yield e.mediaChannelManager.replaceTrack(i, a, o != null ? o : !1);
          var l = D(
            e,
            t.payload.trackIdToReplace,
            !1,
            r("emptyFunction"),
            r("emptyFunction"),
          );
          return (
            (l = D(
              babelHelpers.extends({}, e, l),
              t.payload.replacementTrack.trackId,
              t.payload.replacementTrack.enabled,
              t.onSuccess,
              t.onError,
            )),
            r("ZenonInfraActionsLogger").logCheckpointEmployeesTestUsersOnly({
              checkpoint:
                "replace local track with id " + i + " by track " + a.trackId,
            }),
            l
          );
        });
        return function (n, r) {
          return e.apply(this, arguments);
        };
      })(),
      S = function (t, n) {
        return (
          r("ZenonInfraActionsLogger").logCheckpointEmployeesTestUsersOnly({
            checkpoint: "Successfully replaced local track",
          }),
          n.data
        );
      },
      R = function (t, n) {
        return n.type !== "setLocalMediaStateVersion"
          ? {}
          : (n.onSuccess(), { localMediaStateVersion: n.payload.version });
      },
      L = function (t, n) {
        if (n.type === "stopLocalTrack") {
          var e = n.payload.trackId;
          try {
            (t.mediaChannelManager.stopLocalTrack(e), n.onSuccess());
          } catch (e) {
            n.onError(e);
          }
        }
      },
      E = function (t, n) {
        if (n.type === "unmuteLocalTrack") {
          var e = D(t, n.payload.trackId, !0, n.onSuccess, n.onError);
          return (
            r("ZenonInfraActionsLogger").logCheckpointEmployeesTestUsersOnly({
              checkpoint: "unmute local track",
            }),
            e
          );
        }
        return {};
      },
      k = function (t, n) {
        return (
          n.type === "unmuteRemoteTrack" &&
            (x(t, n.payload.trackId, !0),
            r("ZenonInfraActionsLogger").logCheckpointEmployeesTestUsersOnly({
              checkpoint: "unmute remote track",
            })),
          {}
        );
      };
    function I(e, t) {
      t.type === "applyMediaUpdate" &&
        (T(e.mediaChannelManager, t.payload.mediaStates), t.onSuccess());
    }
    function T(e, t, n) {
      (n === void 0 && (n = !0),
        t &&
          (e.updateTrackInfos(t),
          e.updateMuteStates(t),
          n &&
            e.removeMissingTracks(
              t.tracks.map(function (e) {
                return e.trackID;
              }),
            )));
    }
    function D(e, t, n, r, o) {
      return (x(e, t, n), $(e, r, o));
    }
    function x(e, t, n) {
      var r = e.mediaChannelManager;
      n ? r.unmuteTrack(t) : r.muteTrack(t);
    }
    function $(e, t, n) {
      var o = e.mediaChannelManager,
        a = [],
        i = o.getLocalTracksForMWS();
      i.forEach(function (e) {
        var t = {
          enabled: e.enabled,
          name: e.name,
          trackID: e.trackId,
          type: e.contentType,
        };
        a.push(t);
      });
      var l = e.localMediaStateVersion + 1,
        s = { tracks: a, version: l };
      return (
        r("promiseDone")(e.onLocalMediaStateUpdate(s), t, n),
        { localMediaStateVersion: l }
      );
    }
    function P(e) {
      var t;
      (t = e.tslogUploader) == null || t.logTslog();
    }
    ((l.applyRemoteIceCandidate = s),
      (l.onAddLocalTracksError = u),
      (l.onAddedLocalTracks = c),
      (l.onAddingLocalTracks = d),
      (l.onForceEncodingEnabled = m),
      (l.onIceCandidateReady = p),
      (l.onLocalMediaStateUpdateRetry = _),
      (l.onMuteLocalTrack = f),
      (l.onMuteRemoteTrack = g),
      (l.onRemoveLocalTrackError = h),
      (l.onRemovedLocalTrack = y),
      (l.onRemovingLocalTrack = C),
      (l.onReplaceLocalTrackError = b),
      (l.onReplacingLocalTrack = v),
      (l.onReplacedLocalTrack = S),
      (l.onSetLocalMediaStateVersion = R),
      (l.onStopLocalTrack = L),
      (l.onUnmuteLocalTrack = E),
      (l.onUnmuteRemoteTrack = k),
      (l.onApplyMediaUpdate = I),
      (l.applyMediaStates = T),
      (l.startTslog = P));
  },
  98,
);
