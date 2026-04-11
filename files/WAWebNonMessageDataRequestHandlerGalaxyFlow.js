__d(
  "WAWebNonMessageDataRequestHandlerGalaxyFlow",
  [
    "WABase64",
    "WAGzip",
    "WALogger",
    "WALongInt",
    "WAWebBackendApi",
    "WAWebDownloadManager",
    "WAWebGalaxyFlowCloseEvent",
    "WAWebMmsMediaTypes",
    "WAWebProtobufsE2E.pb",
    "WAWebStartMediaDownloadQpl",
    "WAWebWamEnumDownloadOriginType",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _;
    function f(e) {
      o("WAWebBackendApi").frontendFireAndForget(
        "failGalaxyFlowDownloadRequest",
        e != null ? { requestId: e } : {},
      );
    }
    function g(e) {
      o("WAWebBackendApi").frontendFireAndForget(
        "resolveGalaxyFlowDownloadRequest",
        { requestId: e },
      );
    }
    function h(t) {
      var n = t.galaxyFlowAction;
      if (n == null) {
        o("WALogger").WARN(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "galaxy flow: galaxyFlowAction is null in peer data operation request",
            ])),
        );
        return;
      }
      var r = n.flowId,
        a = n.stanzaId,
        i = n.agmId;
      if (r == null || a == null) {
        o("WALogger").WARN(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "galaxy flow: missing required field - flowId=",
              " stanzaId=",
              "",
            ])),
          r != null ? r : "null",
          a != null ? a : "null",
        );
        return;
      }
      (o("WALogger").LOG(
        u ||
          (u = babelHelpers.taggedTemplateLiteralLoose([
            "galaxy flow: received NOTIFY_LAUNCH request with flowId=",
            " stanzaId=",
            " agmId=",
            "",
          ])),
        r,
        a,
        i != null ? i : "none",
      ),
        o("WAWebGalaxyFlowCloseEvent").GalaxyFlowCloseEvent.trigger(
          o("WAWebGalaxyFlowCloseEvent").getGalaxyFlowCloseEventKey(r, a),
        ),
        i != null &&
          o("WAWebGalaxyFlowCloseEvent").GalaxyFlowCloseEvent.trigger(
            o("WAWebGalaxyFlowCloseEvent").getGalaxyFlowCloseEventKey(r, i),
          ));
    }
    function y(e) {
      var t = e.flowId;
      if (t == null) return null;
      if (e.actionType === "DOWNLOAD_RESPONSES")
        return {
          type: o("WAWebProtobufsE2E.pb")
            .Message$PeerDataOperationRequestMessage$GalaxyFlowAction$GalaxyFlowActionType
            .DOWNLOAD_RESPONSES,
          flowId: t,
          galaxyFlowDownloadRequestId: e.requestId,
        };
      var n = e.stanzaId;
      return n == null
        ? null
        : babelHelpers.extends(
            {
              type: o("WAWebProtobufsE2E.pb")
                .Message$PeerDataOperationRequestMessage$GalaxyFlowAction$GalaxyFlowActionType
                .NOTIFY_LAUNCH,
              flowId: t,
              stanzaId: n,
            },
            e.agmId != null ? { agmId: e.agmId } : {},
          );
    }
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e[0],
            n = t == null ? void 0 : t.flowResponsesCsvBundle,
            a = n == null ? void 0 : n.galaxyFlowDownloadRequestId;
          if (n == null) {
            (o("WALogger").WARN(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "galaxy flow: flowResponsesCsvBundle is null in response",
                ])),
            ),
              f());
            return;
          }
          var i = n.directPath,
            l = n.fileEncSha256,
            s = n.fileName,
            u = n.fileSha256,
            h = n.mediaKey;
          if (i == null || h == null || u == null || l == null) {
            (o("WALogger").WARN(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "galaxy flow: missing required MMS fields in flowResponsesCsvBundle",
                ])),
            ),
              f(a));
            return;
          }
          o("WALogger").LOG(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "galaxy flow: downloading flow responses CSV",
              ])),
          );
          var y = o("WAWebStartMediaDownloadQpl").startMediaDownloadQpl({
            entryPoint: "GalaxyFlowResponsesDownload",
          });
          try {
            var C,
              b,
              v = yield o(
                "WAWebDownloadManager",
              ).downloadManager.downloadAndMaybeDecrypt({
                signal: new AbortController().signal,
                downloadQpl: y,
                directPath: i,
                encFilehash: o("WABase64").encodeB64(l),
                filehash: o("WABase64").encodeB64(u),
                mediaKey: o("WABase64").encodeB64(h),
                mediaKeyTimestamp: o("WALongInt").maybeNumberOrThrowIfTooLarge(
                  n.mediaKeyTimestamp,
                ),
                type: o("WAWebMmsMediaTypes").MEDIA_TYPES.DOCUMENT,
                userDownloadAttemptCount: 0,
                downloadOrigin: o("WAWebWamEnumDownloadOriginType")
                  .DOWNLOAD_ORIGIN_TYPE.P2B,
              });
            y.endSuccess();
            var S = yield o("WAGzip").inflate(new Uint8Array(v)),
              R = new TextDecoder("utf-8"),
              L = R.decode(S),
              E = new Blob([L], { type: "text/csv;charset=utf-8;" }),
              k = URL.createObjectURL(E),
              I = document.createElement("a");
            ((I.href = k),
              (I.download = s != null ? s : "flow_responses.csv"),
              (I.style.display = "none"),
              (C = document.body) == null || C.appendChild(I),
              I.click(),
              (b = document.body) == null || b.removeChild(I),
              URL.revokeObjectURL(k),
              o("WALogger").LOG(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "galaxy flow: flow responses CSV downloaded successfully",
                  ])),
              ),
              a != null && g(a));
          } catch (e) {
            (y.endFailWithError(
              "download_failed",
              r("getErrorSafe")(e).message,
            ),
              o("WALogger").ERROR(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "galaxy flow: failed to download flow responses CSV: ",
                    "",
                  ])),
                e,
              ),
              f(a));
          }
        })),
        b.apply(this, arguments)
      );
    }
    ((l.handleGalaxyFlowLaunchRequest = h),
      (l.buildGalaxyFlowDataOperationRequest = y),
      (l.handleGalaxyFlowDownloadResponse = C));
  },
  98,
);
