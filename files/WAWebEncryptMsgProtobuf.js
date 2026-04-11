__d(
  "WAWebEncryptMsgProtobuf",
  [
    "Promise",
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
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(e, t, n, r, o, a) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, a, i, l, s, c) {
            s === void 0 &&
              (s = o("WAWebWamEnumEditType").EDIT_TYPE.NOT_EDITED);
            try {
              var d = yield o("WAWebSignal").Cipher.encryptSignalProto(
                  t,
                  o("WAWebSendMsgCommonApi").encodeAndPad(i),
                  c,
                ),
                m = d.ciphertext,
                p = d.type;
              return (
                o(
                  "WAWebPostE2eMessageSendMetric",
                ).postSuccessDirectE2eMessageSendMetric({
                  to: t,
                  retryCount: a,
                  type: p,
                  msg: l,
                  editType: s,
                }),
                { type: p, ciphertext: m }
              );
            } catch (i) {
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
                    r("getErrorSafe")(i),
                  )
                  .tags("messaging"),
                o("WAWebSignalSessionApi").maybeDeleteUnconvertedSession(t),
                o(
                  "WAWebPostE2eMessageSendMetric",
                ).postFailureDirectE2eMessageSendMetric({
                  to: t,
                  retryCount: a,
                  msg: l,
                  editType: s,
                }),
                (u || (u = n("Promise"))).reject(
                  r("err")(
                    "[messaging] encryptMsgProtobuf: encryption fail for " +
                      t.toString() +
                      ", " +
                      r("getErrorSafe")(i).message,
                  ),
                )
              );
            }
          },
        )),
        d.apply(this, arguments)
      );
    }
    function m(e, t, n, r) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, a, i) {
            var l,
              c,
              d = new (o("WAWebE2eMessageSendWamEvent").E2eMessageSendWamEvent)(
                {
                  e2eSuccessful: !0,
                  e2eCiphertextType: o(
                    "WAWebBackendJobsCommon",
                  ).getMetricE2eCiphertextType(
                    o("WAWebBackendJobs.flow").CiphertextType.Skmsg,
                  ),
                  e2eCiphertextVersion: o("WAWebBackendJobsCommon")
                    .CIPHERTEXT_VERSION,
                  e2eDestination: o("WAWebWamEnumE2eDestination")
                    .E2E_DESTINATION.GROUP,
                  messageMediaType: o("WAWebWamMsgUtils").getWamMediaType(e),
                  retryCount: 0,
                  isLid:
                    !!i.isLid || ((l = e.author) == null ? void 0 : l.isLid()),
                  typeOfGroup: (c = i.wamTypeOfGroup) != null ? c : void 0,
                  editType: o("WAWebMsgGetters").getWamEditType(e),
                  localAddressingMode: o(
                    "WAWebWamAddressingModeUtils",
                  ).getAddressingModeMetricsFromGroupMetadata(i),
                },
              ),
              m = o("WAWebWamMsgUtils").getWamAgentEngagementType(e);
            m != null && (d.agentEngagementType = m);
            var p = o("WAWebUserPrefsMeUser").getMeDeviceLidOrThrow(),
              _ = o("WAWebUserPrefsMeUser").getMeDevicePnOrThrow_DO_NOT_USE(),
              f =
                o("WAWebGroupMsgSendUtils").isCagAddon(e, i) ||
                i.isLidAddressingMode === !0
                  ? p
                  : _;
            try {
              return babelHelpers.extends(
                {},
                yield o("WAWebSignal").Cipher.encryptSenderKeyMsgSignalProto(
                  t,
                  f,
                  a,
                ),
              );
            } catch (e) {
              return (
                (d.e2eSuccessful = !1),
                (d.weight = 1),
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
                (u || (u = n("Promise"))).reject(
                  r("err")(
                    "[messaging] encryptMsgSenderKey: encryption fail for " +
                      t.toString() +
                      ", " +
                      r("getErrorSafe")(e).message,
                  ),
                )
              );
            } finally {
              d.commit();
            }
          },
        )),
        p.apply(this, arguments)
      );
    }
    ((l.encryptMsgProtobuf = c), (l.encryptMsgSenderKey = m));
  },
  98,
);
