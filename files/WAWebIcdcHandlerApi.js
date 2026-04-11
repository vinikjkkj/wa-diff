__d(
  "WAWebIcdcHandlerApi",
  [
    "Promise",
    "WAJids",
    "WALogger",
    "WALongInt",
    "WATimeUtils",
    "WAWebAdvExpectedTsApi",
    "WAWebApiDeviceList",
    "WAWebApiPendingDeviceSync",
    "WAWebBackendEventBus",
    "WAWebBizCoexGatingUtils",
    "WAWebBizCoexHostedAddVerification",
    "WAWebBizCoexOfflineICDCHandledCache",
    "WAWebHandleAdvForUsyncApi",
    "WAWebIdentityUpdateDeviceTableApi",
    "WAWebLastADVCheckTimeApi",
    "WAWebPromiseQueue",
    "WAWebProtobufsAdv.pb",
    "WAWebSyncDeviceAdvDeviceListJob",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p = new (o("WAWebPromiseQueue").PromiseQueue)();
    function _(e, t, r) {
      return r == null
        ? (m || (m = n("Promise"))).resolve()
        : p.enqueue(function () {
            return h(e, t, r);
          });
    }
    function f(e, t, n) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, r) {
          var a,
            i,
            l = {
              hostedBizEncMismatch: !1,
              senderOrRecipientAccountTypeHosted: !1,
            };
          if (
            !o("WAWebBizCoexGatingUtils").bizHostedDevicesEnabled() ||
            o("WAWebUserPrefsMeUser").isMeAccount(t) ||
            !t.isUser()
          )
            return l;
          var c = r == null ? void 0 : r.deviceListMetadata;
          if (c == null) return l;
          var d = o("WAWebUserPrefsMeUser").isMeAccount(n),
            m = d ? c.receiverAccountType : c.senderAccountType,
            p = d ? t : n;
          if (m == null) return l;
          if (m === o("WAWebProtobufsAdv.pb").ADVEncryptionType.E2EE)
            return (
              o(
                "WAWebBizCoexOfflineICDCHandledCache",
              ).removeFromOfflineBizHostedSenderICDCProcessedCache(p),
              l
            );
          if (m !== o("WAWebProtobufsAdv.pb").ADVEncryptionType.HOSTED)
            return l;
          if (
            o(
              "WAWebBizCoexOfflineICDCHandledCache",
            ).hasOfflineBizHostedSenderICDCProcessedForSender(p)
          )
            return (
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[handleHostedIcdcMetadataInline] skip, already processed ",
                    "",
                  ])),
                p == null ? void 0 : p.toLogString(),
              ),
              {
                hostedBizEncMismatch: !1,
                senderOrRecipientAccountTypeHosted: !0,
              }
            );
          (o(
            "WAWebBizCoexOfflineICDCHandledCache",
          ).addToOfflineBizHostedSenderICDCProcessedCache(p),
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "handleIcdcMetadataInline: add to coex cache for ",
                  "",
                ])),
              p == null ? void 0 : p.toLogString(),
            ),
            o(
              "WAWebBizCoexHostedAddVerification",
            ).addToCoexHostedVerificationCache(p));
          var _ = yield o("WAWebApiDeviceList").getDeviceRecord(p),
            f = o("WALongInt").numberOrThrowIfTooLarge(
              (a = c.senderTimestamp) != null ? a : 0,
            ),
            g = (i = _ == null ? void 0 : _.timestamp) != null ? i : 0;
          if (f >= g) {
            if (
              (_ == null ? void 0 : _.advAccountType) !==
              o("WAWebProtobufsAdv.pb").ADVEncryptionType.HOSTED
            ) {
              var h;
              return (
                yield o("WAWebIdentityUpdateDeviceTableApi").clearDeviceRecord(
                  p,
                  (h = _ == null ? void 0 : _.devices) != null ? h : [],
                  !o("WAWebBackendEventBus").BackendEventBus
                    .isOfflineDeliveryEnd,
                  o("WAWebProtobufsAdv.pb").ADVEncryptionType.E2EE,
                  o("WAWebProtobufsAdv.pb").ADVEncryptionType.HOSTED,
                ),
                o("WAWebBackendEventBus").BackendEventBus.isOfflineDeliveryEnd
                  ? o("WAWebSyncDeviceAdvDeviceListJob").syncDeviceListJob(
                      [p],
                      null,
                      null,
                    )
                  : yield o(
                      "WAWebApiPendingDeviceSync",
                    ).addUserToPendingDeviceSync([p.toString()]),
                o("WALogger").LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "handleHostedIcdcMetadataInline: update ADV type for ",
                      "",
                    ])),
                  p == null ? void 0 : p.toLogString(),
                ),
                {
                  hostedBizEncMismatch:
                    (_ == null ? void 0 : _.advAccountType) ===
                      o("WAWebProtobufsAdv.pb").ADVEncryptionType.E2EE ||
                    (_ == null ? void 0 : _.deletedChangedToHost) !== !0,
                  senderOrRecipientAccountTypeHosted: !0,
                }
              );
            }
            return {
              hostedBizEncMismatch: !1,
              senderOrRecipientAccountTypeHosted: !0,
            };
          }
          return l;
        })),
        g.apply(this, arguments)
      );
    }
    function h(e, t, n) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = n.deviceListMetadata;
          if (r == null) {
            o("WALogger")
              .LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "get empty device list metadata",
                  ])),
              )
              .tags("handleICDCData");
            return;
          }
          if (
            (e.device == null || e.device === o("WAJids").DEFAULT_DEVICE_ID) &&
            r.senderTimestamp != null &&
            r.senderKeyHash == null
          ) {
            var a =
                o("WALongInt").numberOrThrowIfTooLarge(r.senderTimestamp) + 1,
              i = yield o("WAWebHandleAdvForUsyncApi").handleADVSyncResult(
                e,
                {
                  deviceList: [
                    { id: o("WAJids").DEFAULT_DEVICE_ID, keyIndex: 0 },
                  ],
                  keyIndex: {
                    ts: o("WATimeUtils").castToUnixTime(a),
                    signedKeyIndexBytes: null,
                  },
                },
                null,
                null,
              );
            (i == null ? void 0 : i.identityUpdatePromise) != null &&
              (yield i.identityUpdatePromise);
            return;
          }
          var l = [],
            s =
              e.user ===
              o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE().user;
          (l.push({ id: e, ts: r.senderTimestamp }),
            s && t != null && l.push({ id: t, ts: r.recipientTimestamp }));
          var u = yield o(
              "WAWebLastADVCheckTimeApi",
            ).getLastADVDeviceInfoCheckTime(),
            m = yield o("WAWebApiDeviceList").bulkGetDeviceRecord(
              l.map(function (e) {
                return e.id;
              }),
            ),
            p = [];
          if (
            (m.forEach(function (e, t) {
              var n = l[t].ts;
              if (!(e == null || e.deleted || n == null)) {
                var r = o(
                  "WAWebAdvExpectedTsApi",
                ).computeExpectedTsForDeviceRecord(
                  o("WALongInt").numberOrThrowIfTooLarge(n),
                  e,
                  u,
                );
                (r.expectedTs !== e.expectedTs ||
                  r.expectedTsLastDeviceJobTs !== e.expectedTsLastDeviceJobTs ||
                  r.expectedTsUpdateTs !== e.expectedTsUpdateTs) &&
                  p.push(babelHelpers.extends({}, e, r));
              }
            }),
            p.length > 0)
          )
            return (
              o("WALogger").LOG(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "handleICDCData: updated expected timestamp for ",
                    " records => ",
                    "",
                  ])),
                p.length,
                p.slice(0, 3).map(function (e) {
                  return e.id;
                }),
              ),
              o("WAWebApiDeviceList").bulkCreateOrReplaceDeviceRecord(p)
            );
        })),
        y.apply(this, arguments)
      );
    }
    ((l.handleICDCData = _), (l.handleHostedIcdcMetadataInline = f));
  },
  98,
);
