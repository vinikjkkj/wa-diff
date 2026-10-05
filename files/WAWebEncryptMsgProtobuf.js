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
    var e, s, u, c;
    function d(e, t, n, r, o, a, i, l) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, a, i, l, u, d, m, _) {
            (u === void 0 &&
              (u = o("WAWebWamEnumEditType").EDIT_TYPE.NOT_EDITED),
              m === void 0 && (m = !1));
            try {
              var f = yield o("WAWebSignal").Cipher.encryptSignalProto(
                  t,
                  o("WAWebSendMsgCommonApi").encodeAndPad(i),
                  d,
                  m,
                ),
                g = f.ciphertext,
                h = f.type;
              return (
                o(
                  "WAWebPostE2eMessageSendMetric",
                ).postSuccessDirectE2eMessageSendMetric({
                  to: t,
                  retryCount: a,
                  type: h,
                  msg: l,
                  editType: u,
                  sessionScope: d,
                  coexV2SelfHosted: _,
                  isPq: p(g),
                }),
                { type: h, ciphertext: g }
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
                o("WAWebSignalSessionApi")
                  .maybeDeleteUnconvertedSession(t)
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
                  retryCount: a,
                  msg: l,
                  editType: u,
                  sessionScope: d,
                  coexV2SelfHosted: _,
                }),
                (c || (c = n("Promise"))).reject(
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
        m.apply(this, arguments)
      );
    }
    function p(e) {
      if (e.byteLength === 0) return !1;
      var t = new Uint8Array(e, 0, 1)[0];
      return t >>> 4 === 4;
    }
    function _(e, t, n, r) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, a, i) {
            var l,
              s,
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
                  typeOfGroup: (s = i.wamTypeOfGroup) != null ? s : void 0,
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
                (c || (c = n("Promise"))).reject(
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
        f.apply(this, arguments)
      );
    }
    ((l.encryptMsgProtobuf = d),
      (l.isPqxdhCiphertext = p),
      (l.encryptMsgSenderKey = _));
  },
  98,
);
