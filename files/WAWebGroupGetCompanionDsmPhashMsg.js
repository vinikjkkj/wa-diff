__d(
  "WAWebGroupGetCompanionDsmPhashMsg",
  [
    "Promise",
    "WALogger",
    "WAWebAdvMetadataCreationFailureWamEvent",
    "WAWebApiDeviceList",
    "WAWebDeviceSentMessageProtoUtils",
    "WAWebE2EProtoGenerator",
    "WAWebEncryptMsgProtobuf",
    "WAWebIdentityIcdcApi",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var r = t.companionDevices,
            a = t.dsmPhash,
            i = t.groupId,
            l = t.msgProtobuf;
          if (r.length === 0) return null;
          var u = o("WAWebUserPrefsMeUser").getMeUserOrThrow(),
            c = yield o("WAWebApiDeviceList").bulkGetDeviceRecord([u]),
            d = c[0],
            m = null;
          try {
            m = yield o("WAWebIdentityIcdcApi").getICDCMetaFromDeviceRecord(
              u,
              d,
            );
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
          var p = o("WAWebDeviceSentMessageProtoUtils").wrapDeviceSentMessage(
            l,
            i,
          );
          (p.deviceSentMessage != null &&
            (p = babelHelpers.extends({}, p, {
              deviceSentMessage: babelHelpers.extends({}, p.deviceSentMessage, {
                phash: a,
              }),
            })),
            o("WAWebE2EProtoGenerator").populateMessageContextInfo(p, m, null));
          var _ = r.map(
              (function () {
                var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (t) {
                    try {
                      var n = yield o(
                        "WAWebEncryptMsgProtobuf",
                      ).encryptMsgProtobuf(t, 0, p);
                      return {
                        type: n.type,
                        ciphertext: n.ciphertext,
                        participant: t,
                      };
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
                  },
                );
                return function (e) {
                  return t.apply(this, arguments);
                };
              })(),
            ),
            f = yield (s || (s = n("Promise"))).all(_);
          return f.filter(Boolean);
        })),
        c.apply(this, arguments)
      );
    }
    l.getCompanionDsmPhashMsg = u;
  },
  98,
);
