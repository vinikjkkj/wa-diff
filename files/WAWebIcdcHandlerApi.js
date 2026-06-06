__d(
  "WAWebIcdcHandlerApi",
  [
    "WAJids",
    "WALogger",
    "WALongInt",
    "WATimeUtils",
    "WAWebAdvExpectedTsApi",
    "WAWebApiDeviceList",
    "WAWebApiPendingDeviceSync",
    "WAWebBackendEventBus",
    "WAWebBizCoexHostedAddVerification",
    "WAWebBizCoexOfflineICDCHandledCache",
    "WAWebHandleAdvForUsyncApi",
    "WAWebIdentityUpdateDeviceTableApi",
    "WAWebLastADVCheckTimeApi",
    "WAWebPromiseQueue",
    "WAWebProtobufsAdv.pb",
    "WAWebSyncDeviceAdvDeviceListJob",
    "WAWebUserPrefsMeUser",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m = new (o("WAWebPromiseQueue").PromiseQueue)();
    function p(e, t, n) {
      return n == null
        ? Promise.resolve()
        : m.enqueue(function () {
            return f(e, t, n);
          });
    }
    async function _(t, n, r) {
      var a,
        i,
        l = {
          hostedBizEncMismatch: !1,
          senderOrRecipientAccountTypeHosted: !1,
        };
      if (o("WAWebUserPrefsMeUser").isMeAccount(t) || !t.isUser()) return l;
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
      if (m !== o("WAWebProtobufsAdv.pb").ADVEncryptionType.HOSTED) return l;
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
          { hostedBizEncMismatch: !1, senderOrRecipientAccountTypeHosted: !0 }
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
        o("WAWebBizCoexHostedAddVerification").addToCoexHostedVerificationCache(
          p,
        ));
      var _ = await o("WAWebApiDeviceList").getDeviceRecord(p),
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
            await o("WAWebIdentityUpdateDeviceTableApi").clearDeviceRecord(
              p,
              (h = _ == null ? void 0 : _.devices) != null ? h : [],
              !o("WAWebBackendEventBus").BackendEventBus.isOfflineDeliveryEnd,
              o("WAWebProtobufsAdv.pb").ADVEncryptionType.E2EE,
              o("WAWebProtobufsAdv.pb").ADVEncryptionType.HOSTED,
            ),
            o("WAWebBackendEventBus").BackendEventBus.isOfflineDeliveryEnd
              ? o("WAWebSyncDeviceAdvDeviceListJob").syncDeviceListJob(
                  [p],
                  null,
                  null,
                )
              : await o("WAWebApiPendingDeviceSync").addUserToPendingDeviceSync(
                  [p.toString()],
                ),
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
    }
    async function f(e, t, n) {
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
        var a = o("WALongInt").numberOrThrowIfTooLarge(r.senderTimestamp) + 1,
          i = await o("WAWebHandleAdvForUsyncApi").handleADVSyncResult(
            e,
            {
              deviceList: [{ id: o("WAJids").DEFAULT_DEVICE_ID, keyIndex: 0 }],
              keyIndex: {
                ts: o("WATimeUtils").castToUnixTime(a),
                signedKeyIndexBytes: null,
              },
            },
            null,
            null,
          );
        (i == null ? void 0 : i.identityUpdatePromise) != null &&
          (await i.identityUpdatePromise);
        return;
      }
      var l = [],
        s = o("WAWebUserPrefsMeUser").isMeAccount(e);
      (l.push({ id: e, ts: r.senderTimestamp }),
        s && t != null && l.push({ id: t, ts: r.recipientTimestamp }));
      var u = await o(
          "WAWebLastADVCheckTimeApi",
        ).getLastADVDeviceInfoCheckTime(),
        m = await o("WAWebApiDeviceList").bulkGetDeviceRecord(
          l.map(function (e) {
            return e.id;
          }),
        ),
        p = [];
      if (
        (m.forEach(function (e, t) {
          var n = l[t].ts;
          if (!(e == null || e.deleted || n == null)) {
            var r = o("WAWebAdvExpectedTsApi").computeExpectedTsForDeviceRecord(
              {
                deviceRecord: e,
                incomingTs: o("WALongInt").numberOrThrowIfTooLarge(n),
                lastDeviceJobTs: u,
              },
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
    }
    ((l.handleICDCData = p), (l.handleHostedIcdcMetadataInline = _));
  },
  98,
);
