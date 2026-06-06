__d(
  "WAWebEncryptMsgProtobuf",
  [
    "WALogger",
    "WAWebBackendJobs.flow",
    "WAWebBackendJobsCommon",
    "WAWebE2eMessageSendWamEvent",
    "WAWebGroupMsgSendUtils",
    "WAWebMsgGetters",
    "WAWebPostE2eMessageSendMetric",
    "WAWebSendMsgCommonApi",
    "WAWebSignal",
    "WAWebSignalSessionApi",
    "WAWebUserPrefsMeUser",
    "WAWebWamAddressingModeUtils",
    "WAWebWamEnumE2eDestination",
    "WAWebWamEnumEditType",
    "WAWebWamMsgUtils",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    async function u(t, n, a, i, l, s, u) {
      (l === void 0 && (l = o("WAWebWamEnumEditType").EDIT_TYPE.NOT_EDITED),
        u === void 0 && (u = !1));
      try {
        var c = await o("WAWebSignal").Cipher.encryptSignalProto(
            t,
            o("WAWebSendMsgCommonApi").encodeAndPad(a),
            s,
            u,
          ),
          d = c.ciphertext,
          m = c.type;
        return (
          o(
            "WAWebPostE2eMessageSendMetric",
          ).postSuccessDirectE2eMessageSendMetric({
            to: t,
            retryCount: n,
            type: m,
            msg: i,
            editType: l,
          }),
          { type: m, ciphertext: d }
        );
      } catch (a) {
        return (
          o("WALogger")
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
          o("WAWebSignalSessionApi").maybeDeleteUnconvertedSession(t),
          o(
            "WAWebPostE2eMessageSendMetric",
          ).postFailureDirectE2eMessageSendMetric({
            to: t,
            retryCount: n,
            msg: i,
            editType: l,
          }),
          Promise.reject(
            r("err")(
              "[messaging] encryptMsgProtobuf: encryption fail for " +
                t.toString() +
                ", " +
                r("getErrorSafe")(a).message,
            ),
          )
        );
      }
    }
    async function c(e, t, n, a) {
      var i,
        l,
        u = new (o("WAWebE2eMessageSendWamEvent").E2eMessageSendWamEvent)({
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
      c != null && (u.agentEngagementType = c);
      var d = o("WAWebUserPrefsMeUser").getMeDeviceLidOrThrow(),
        m = o("WAWebUserPrefsMeUser").getMeDevicePnOrThrow_DO_NOT_USE(),
        p =
          o("WAWebGroupMsgSendUtils").isCagAddon(e, a) ||
          a.isLidAddressingMode === !0
            ? d
            : m;
      try {
        return babelHelpers.extends(
          {},
          await o("WAWebSignal").Cipher.encryptSenderKeyMsgSignalProto(t, p, n),
        );
      } catch (e) {
        return (
          (u.e2eSuccessful = !1),
          (u.weight = 1),
          o("WALogger")
            .WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
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
        u.commit();
      }
    }
    ((l.encryptMsgProtobuf = u), (l.encryptMsgSenderKey = c));
  },
  98,
);
