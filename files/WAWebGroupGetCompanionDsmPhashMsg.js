__d(
  "WAWebGroupGetCompanionDsmPhashMsg",
  [
    "WALogger",
    "WAWebAdvMetadataCreationFailureWamEvent",
    "WAWebApiDeviceList",
    "WAWebDeviceSentMessageProtoUtils",
    "WAWebE2EProtoGenerator",
    "WAWebEncryptMsgProtobuf",
    "WAWebIdentityIcdcApi",
    "WAWebUserUtils",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s(t) {
      var n = t.companionDevices,
        r = t.dsmPhash,
        a = t.groupId,
        i = t.msgProtobuf;
      if (n.length === 0) return null;
      var l = o("WAWebUserUtils").getMeUserOrThrow(),
        s = await o("WAWebApiDeviceList").bulkGetDeviceRecord([l]),
        u = s[0],
        c = null;
      try {
        c = await o("WAWebIdentityIcdcApi").getICDCMetaFromDeviceRecord(l, u);
      } catch (e) {
        throw (
          new (o(
            "WAWebAdvMetadataCreationFailureWamEvent",
          ).AdvMetadataCreationFailureWamEvent)({
            advMetadataIsMe: !0,
          }).commit(),
          e
        );
      }
      var d = o("WAWebDeviceSentMessageProtoUtils").wrapDeviceSentMessage(i, a);
      (d.deviceSentMessage != null &&
        (d = babelHelpers.extends({}, d, {
          deviceSentMessage: babelHelpers.extends({}, d.deviceSentMessage, {
            phash: r,
          }),
        })),
        o("WAWebE2EProtoGenerator").populateMessageContextInfo(d, c, null));
      var m = n.map(async function (t) {
          try {
            var n = await o("WAWebEncryptMsgProtobuf").encryptMsgProtobuf(
              t,
              0,
              d,
            );
            return { type: n.type, ciphertext: n.ciphertext, participant: t };
          } catch (n) {
            o("WALogger")
              .LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "getCompanionDsmPhashMsg: encryption fail for ",
                    ", ",
                    "",
                  ])),
                t.toString(),
                n,
              )
              .tags("messaging");
          }
        }),
        p = await Promise.all(m);
      return p.filter(Boolean);
    }
    l.getCompanionDsmPhashMsg = s;
  },
  98,
);
