__d(
  "WAWebEncryptMsgProtobuf",
  [
    "Promise",
    "WALogger",
    "WAWebBackendJobs.flow",
    "WAWebBackendJobsCommon",
    "WAWebE2eMessageSendWamEvent",
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
    function c(e, t, n, r, o, a, i, l) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, a, i, l, s, c, d, m) {
            (s === void 0 &&
              (s = o("WAWebWamEnumEditType").EDIT_TYPE.NOT_EDITED),
              d === void 0 && (d = !1));
            try {
              var p = yield o("WAWebSignal").Cipher.encryptSignalProto(
                  t,
                  o("WAWebSendMsgCommonApi").encodeAndPad(i),
                  c,
                  d,
                ),
                _ = p.ciphertext,
                f = p.type;
              return (
                o(
                  "WAWebPostE2eMessageSendMetric",
                ).postSuccessDirectE2eMessageSendMetric({
                  to: t,
                  retryCount: a,
                  type: f,
                  msg: l,
                  editType: s,
                  sessionScope: c,
                  coexV2SelfHosted: m,
                }),
                { type: f, ciphertext: _ }
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
                  sessionScope: c,
                  coexV2SelfHosted: m,
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
    function m(e) {
      if (e.byteLength === 0) return !1;
      var t = new Uint8Array(e, 0, 1)[0];
      return t >>> 4 === 4;
    }
    function p(e, t, n, r) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(
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
            var p = o("WAWebUserPrefsMeUser").getMeDeviceLidOrThrow();
            try {
              return babelHelpers.extends(
                {},
                yield o("WAWebSignal").Cipher.encryptSenderKeyMsgSignalProto(
                  t,
                  p,
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
        _.apply(this, arguments)
      );
    }
    ((l.encryptMsgProtobuf = c),
      (l.isPqxdhCiphertext = m),
      (l.encryptMsgSenderKey = p));
  },
  98,
);
