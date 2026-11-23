__d(
  "WAWebEncryptMsgProtobuf",
  [
    "WALogger",
    "WAWebBackendJobs.flow",
    "WAWebBackendJobsCommon",
    "WAWebE2eMessageSendWamEvent",
    "WAWebHandleMsgError",
    "WAWebMsgGetters",
    "WAWebPostE2eMessageSendMetric",
    "WAWebSendMsgCommonApi",
    "WAWebSignal",
    "WAWebSignalSessionApi",
    "WAWebUserUtils",
    "WAWebWamAddressingModeUtils",
    "WAWebWamEnumE2eDestination",
    "WAWebWamEnumEditType",
    "WAWebWamMsgUtils",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    async function c(t, n, a, i, l, u, c, m) {
      (l === void 0 && (l = o("WAWebWamEnumEditType").EDIT_TYPE.NOT_EDITED),
        c === void 0 && (c = !1));
      try {
        var p = await o("WAWebSignal").Cipher.encryptSignalProto(
            t,
            o("WAWebSendMsgCommonApi").encodeAndPad(a, {
              type: i == null ? void 0 : i.type,
              subtype: i == null ? void 0 : i.subtype,
            }),
            u,
            c,
          ),
          _ = p.ciphertext,
          f = p.type;
        return (
          o(
            "WAWebPostE2eMessageSendMetric",
          ).postSuccessDirectE2eMessageSendMetric({
            to: t,
            retryCount: n,
            type: f,
            msg: i,
            editType: l,
            sessionScope: u,
            coexV2SelfHosted: m,
            isPq: d(_),
          }),
          { type: f, ciphertext: _ }
        );
      } catch (a) {
        if (
          (o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "encryptMsgProtobuf: encryption fail for ",
                  ", ",
                  "",
                ])),
              t.toString(),
              r("getErrorSafe")(a),
            )
            .tags("messaging"),
          o("WAWebSignalSessionApi")
            .maybeDeleteUnconvertedSession(t, u)
            .catch(function (e) {
              o("WALogger")
                .WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "maybeDeleteUnconvertedSession: cleanup failed for ",
                      ", ",
                      "",
                    ])),
                  t.toString(),
                  r("getErrorSafe")(e),
                )
                .tags("messaging");
            }),
          o(
            "WAWebPostE2eMessageSendMetric",
          ).postFailureDirectE2eMessageSendMetric({
            to: t,
            retryCount: n,
            msg: i,
            editType: l,
            sessionScope: u,
            coexV2SelfHosted: m,
          }),
          a instanceof o("WAWebHandleMsgError").MessageValidationError)
        )
          throw a;
        return Promise.reject(
          r("err")(
            "[messaging] encryptMsgProtobuf: encryption fail for " +
              t.toString() +
              ", " +
              r("getErrorSafe")(a).message,
          ),
        );
      }
    }
    function d(e) {
      if (e.byteLength === 0) return !1;
      var t = new Uint8Array(e, 0, 1)[0];
      return t >>> 4 === 4;
    }
    async function m(e, t, n, a) {
      var i,
        l,
        s = new (o("WAWebE2eMessageSendWamEvent").E2eMessageSendWamEvent)({
          e2eSuccessful: !0,
          e2eCiphertextType: o(
            "WAWebBackendJobsCommon",
          ).getMetricE2eCiphertextType(
            o("WAWebBackendJobs.flow").CiphertextType.Skmsg,
          ),
          e2eCiphertextVersion: o("WAWebBackendJobsCommon").CIPHERTEXT_VERSION,
          e2eDestination: o("WAWebWamEnumE2eDestination").E2E_DESTINATION.GROUP,
          messageMediaType: o("WAWebWamMsgUtils").getWamMediaType(e),
          retryCount: 0,
          isLid: !!a.isLid || ((i = e.author) == null ? void 0 : i.isLid()),
          typeOfGroup: (l = a.wamTypeOfGroup) != null ? l : void 0,
          editType: o("WAWebMsgGetters").getWamEditType(e),
          localAddressingMode: o(
            "WAWebWamAddressingModeUtils",
          ).getAddressingModeMetricsFromGroupMetadata(a),
        }),
        c = o("WAWebWamMsgUtils").getWamAgentEngagementType(e);
      c != null && (s.agentEngagementType = c);
      var d = o("WAWebUserUtils").getMeDeviceLidOrThrow();
      try {
        return babelHelpers.extends(
          {},
          await o("WAWebSignal").Cipher.encryptSenderKeyMsgSignalProto(t, d, n),
        );
      } catch (e) {
        return (
          (s.e2eSuccessful = !1),
          (s.weight = 1),
          o("WALogger")
            .WARN(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "encryptMsgSenderKey: encryption fail for ",
                  ", ",
                  "",
                ])),
              t.toString(),
              r("getErrorSafe")(e),
            )
            .tags("messaging"),
          Promise.reject(
            r("err")(
              "[messaging] encryptMsgSenderKey: encryption fail for " +
                t.toString() +
                ", " +
                r("getErrorSafe")(e).message,
            ),
          )
        );
      } finally {
        s.commit();
      }
    }
    ((l.encryptMsgProtobuf = c),
      (l.isPqxdhCiphertext = d),
      (l.encryptMsgSenderKey = m));
  },
  98,
);
