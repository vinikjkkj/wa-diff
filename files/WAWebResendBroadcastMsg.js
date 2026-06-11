__d(
  "WAWebResendBroadcastMsg",
  [
    "WALogger",
    "WAWap",
    "WAWebAdvSignatureApi",
    "WAWebBackendJobs.flow",
    "WAWebBackendJobsCommon",
    "WAWebBizBroadcastCampaignAPI",
    "WAWebBroadcastDeviceClassifier",
    "WAWebBroadcastEphemeralUtils",
    "WAWebBroadcastODS",
    "WAWebBusinessBroadcastsGatingUtils",
    "WAWebCommsWapMd",
    "WAWebE2EProtoUtils",
    "WAWebEncryptMsgProtobuf",
    "WAWebManageE2ESessionsJob",
    "WAWebReportingTokenUtils",
    "WAWebSendMsgCommonApi",
    "WAWebSessionScope",
    "WAWebSignalProtocolStore",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m = new Set([
        "self:primary:iphone",
        "self:primary:smbi",
        "self:primary:ipad",
      ]);
    function p(e, t) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var r = o("WAWebE2EProtoUtils").getBizNativeFlowName(t);
          if (r == null) return null;
          var a = yield o(
              "WAWebBizBroadcastCampaignAPI",
            ).getBizBroadcastCampaignByMsgId(n),
            i = a == null ? void 0 : a.adId;
          return i == null
            ? (o("WALogger")
                .WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[broadcast:retry] NFM message missing campaign data: nativeFlowName=",
                      ", messageKey=",
                      ". Retry will be sent without <biz> and may be rejected with error 405.",
                    ])),
                  r,
                  n,
                )
                .sendLogs("broadcast-retry-missing-campaign"),
              null)
            : o("WAWap").wap(
                "biz",
                { campaign_id: o("WAWap").CUSTOM_STRING(i) },
                o("WAWap").wap(
                  "interactive",
                  {
                    type: o("WAWap").CUSTOM_STRING("native_flow"),
                    v: o("WAWap").CUSTOM_STRING("1"),
                  },
                  o("WAWap").wap("native_flow", {
                    name: o("WAWap").CUSTOM_STRING(r),
                  }),
                ),
              );
        })),
        _.apply(this, arguments)
      );
    }
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.deviceMsgType,
            n = e.msgProtobuf,
            a = e.msgRecord,
            i = e.participant,
            l = e.to,
            _ = a.data.id,
            f = t.retryCount,
            g = o("WAWebBroadcastDeviceClassifier").classifyBroadcastDevice(i);
          o("WAWebBroadcastODS").bumpBroadcastRetry();
          try {
            yield o("WAWebManageE2ESessionsJob").ensureE2ESessions(
              [i],
              !1,
              o("WAWebSessionScope").SessionScope.DEFAULT,
            );
            var h = n,
              y = null;
            if (
              o(
                "WAWebBusinessBroadcastsGatingUtils",
              ).isBizBroadcastDisappearingMessagesFixEnabled()
            )
              try {
                var C = yield o(
                  "WAWebBroadcastEphemeralUtils",
                ).buildBroadcastRetryEphemeral({
                  authorId: o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(),
                  broadcastJid: l,
                  proto: n,
                  recipient: o("WAWebWidFactory").asUserWidOrThrow(i),
                });
                ((h = C.content), (y = C.ephSetting));
              } catch (e) {
                (o("WAWebBroadcastODS").bumpBroadcastEphemeralSetupError(),
                  o("WALogger")
                    .ERROR(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "[broadcast:retry] ephemeral setup failed, resending without DM: retryCount=",
                          "",
                        ])),
                      f,
                    )
                    .catching(r("getErrorSafe")(e))
                    .sendLogs("broadcast-retry-ephemeral-setup-failed"),
                  (h = n),
                  (y = null));
              }
            o("WALogger")
              .LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[broadcast:retry] eph_retry_debug resend stanza for participant=",
                    " retryCount=",
                    " eph_setting=",
                    "",
                  ])),
                i.toString(),
                f,
                y != null ? "attached" : "none",
              )
              .tags("messaging");
            var b = o("WAWebUserPrefsMeUser").isMeAccount(i),
              v = m.has(g),
              S = yield p(h, _.id),
              R =
                S != null
                  ? o("WAWap").wap("meta", {
                      metering_type: o("WAWap").CUSTOM_STRING("smb_mm"),
                    })
                  : null;
            o("WALogger")
              .LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[broadcast:retry] deviceType=",
                    " isIOSPrimary=",
                    " isMeDevice=",
                    " hasBizNode=",
                    " retryCount=",
                    "",
                  ])),
                g,
                String(v),
                String(b),
                String(S != null),
                f,
              )
              .tags("messaging");
            var L = o("WAWebBackendJobsCommon").getMetricEditTypeFromMsg(
                h,
                a.data,
              ),
              E = yield o("WAWebEncryptMsgProtobuf").encryptMsgProtobuf(
                i,
                f,
                h,
                a.data,
                L,
              ),
              k = E.ciphertext,
              I = E.type,
              T = null;
            if (I === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg) {
              var D = yield o("WAWebAdvSignatureApi").getADVEncodedIdentity();
              T = o("WAWap").wap("device-identity", null, D);
            }
            var x = o("WAWebBackendJobsCommon").mediaTypeFromProtobuf(h),
              $ = yield o("WAWebReportingTokenUtils").genReportingTokenBody(
                a.data,
                h,
              );
            yield o("WAWebSignalProtocolStore")
              .getSignalProtocolStore()
              .flushBufferToDiskIfNotMemOnlyMode();
            var P = o("WAWap").wap(
              "message",
              {
                id: o("WAWap").CUSTOM_STRING(_.id),
                to: o("WAWebCommsWapMd").JID(l),
                participant: o("WAWebCommsWapMd").DEVICE_JID(i),
                type: o("WAWebE2EProtoUtils").typeAttributeFromProtobuf(h),
                edit: o("WAWebSendMsgCommonApi").editAttribute(
                  h,
                  a.data.subtype,
                ),
                eph_setting:
                  y != null
                    ? o("WAWap").CUSTOM_STRING(y)
                    : o("WAWap").DROP_ATTR,
              },
              R,
              o("WAWap").wap(
                "enc",
                {
                  v: o("WAWap").CUSTOM_STRING(
                    o("WAWebBackendJobsCommon").CIPHERTEXT_VERSION.toString(),
                  ),
                  type: o("WAWap").CUSTOM_STRING(I),
                  count: f === 0 ? o("WAWap").DROP_ATTR : o("WAWap").INT(f),
                  mediatype: o("WAWebBackendJobsCommon").encodeMaybeMediaType(
                    x,
                  ),
                  "decrypt-fail": o(
                    "WAWebBackendJobsCommon",
                  ).encodeMaybeDecryptFail(
                    o("WAWebE2EProtoUtils").decryptFailAttributeFromProtobuf(h),
                  ),
                },
                k,
              ),
              T,
              $,
              S,
            );
            return (o("WAWebBroadcastODS").bumpBroadcastRetrySuccess(), P);
          } catch (e) {
            throw (
              o("WAWebBroadcastODS").bumpBroadcastRetryError(),
              o("WALogger")
                .ERROR(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "[broadcast:retry] Device retry failed: retryCount=",
                      ", deviceType=",
                      "",
                    ])),
                  f,
                  g,
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("broadcast-device-retry-failed"),
              e
            );
          }
        })),
        g.apply(this, arguments)
      );
    }
    l.createBroadcastDeviceMsgStanza = f;
  },
  98,
);
