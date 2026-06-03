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
    "WAWebBroadcastODS",
    "WAWebCommsWapMd",
    "WAWebE2EProtoUtils",
    "WAWebEncryptMsgProtobuf",
    "WAWebManageE2ESessionsJob",
    "WAWebReportingTokenUtils",
    "WAWebSendMsgCommonApi",
    "WAWebSessionScope",
    "WAWebSignalProtocolStore",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = new Set([
        "self:primary:iphone",
        "self:primary:smbi",
        "self:primary:ipad",
      ]);
    function d(e, t) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
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
        m.apply(this, arguments)
      );
    }
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.deviceMsgType,
            n = e.msgProtobuf,
            a = e.msgRecord,
            i = e.participant,
            l = e.to,
            m = a.data.id,
            p = t.retryCount,
            _ = o("WAWebBroadcastDeviceClassifier").classifyBroadcastDevice(i);
          o("WAWebBroadcastODS").bumpBroadcastRetry();
          try {
            yield o("WAWebManageE2ESessionsJob").ensureE2ESessions(
              [i],
              !1,
              o("WAWebSessionScope").SessionScope.DEFAULT,
            );
            var f = n,
              g = o("WAWebUserPrefsMeUser").isMeAccount(i),
              h = c.has(_),
              y = yield d(n, m.id),
              C =
                y != null
                  ? o("WAWap").wap("meta", {
                      metering_type: o("WAWap").CUSTOM_STRING("smb_mm"),
                    })
                  : null;
            o("WALogger")
              .LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[broadcast:retry] deviceType=",
                    " isIOSPrimary=",
                    " isMeDevice=",
                    " hasBizNode=",
                    " retryCount=",
                    "",
                  ])),
                _,
                String(h),
                String(g),
                String(y != null),
                p,
              )
              .tags("messaging");
            var b = o("WAWebBackendJobsCommon").getMetricEditTypeFromMsg(
                n,
                a.data,
              ),
              v = yield o("WAWebEncryptMsgProtobuf").encryptMsgProtobuf(
                i,
                p,
                f,
                a.data,
                b,
              ),
              S = v.ciphertext,
              R = v.type,
              L = null;
            if (R === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg) {
              var E = yield o("WAWebAdvSignatureApi").getADVEncodedIdentity();
              L = o("WAWap").wap("device-identity", null, E);
            }
            var k = o("WAWebBackendJobsCommon").mediaTypeFromProtobuf(n),
              I = yield o("WAWebReportingTokenUtils").genReportingTokenBody(
                a.data,
                n,
              );
            yield o("WAWebSignalProtocolStore")
              .getSignalProtocolStore()
              .flushBufferToDiskIfNotMemOnlyMode();
            var T = o("WAWap").wap(
              "message",
              {
                id: o("WAWap").CUSTOM_STRING(m.id),
                to: o("WAWebCommsWapMd").JID(l),
                participant: o("WAWebCommsWapMd").DEVICE_JID(i),
                type: o("WAWebE2EProtoUtils").typeAttributeFromProtobuf(n),
                edit: o("WAWebSendMsgCommonApi").editAttribute(
                  n,
                  a.data.subtype,
                ),
              },
              C,
              o("WAWap").wap(
                "enc",
                {
                  v: o("WAWap").CUSTOM_STRING(
                    o("WAWebBackendJobsCommon").CIPHERTEXT_VERSION.toString(),
                  ),
                  type: o("WAWap").CUSTOM_STRING(R),
                  count: p === 0 ? o("WAWap").DROP_ATTR : o("WAWap").INT(p),
                  mediatype: o("WAWebBackendJobsCommon").encodeMaybeMediaType(
                    k,
                  ),
                  "decrypt-fail": o(
                    "WAWebBackendJobsCommon",
                  ).encodeMaybeDecryptFail(
                    o("WAWebE2EProtoUtils").decryptFailAttributeFromProtobuf(n),
                  ),
                },
                S,
              ),
              L,
              I,
              y,
            );
            return (o("WAWebBroadcastODS").bumpBroadcastRetrySuccess(), T);
          } catch (e) {
            throw (
              o("WAWebBroadcastODS").bumpBroadcastRetryError(),
              o("WALogger")
                .ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[broadcast:retry] Device retry failed: retryCount=",
                      ", deviceType=",
                      "",
                    ])),
                  p,
                  _,
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("broadcast-device-retry-failed"),
              e
            );
          }
        })),
        _.apply(this, arguments)
      );
    }
    l.createBroadcastDeviceMsgStanza = p;
  },
  98,
);
