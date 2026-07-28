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
    function u(e, t, n, r) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, r, a, i) {
            if (r.length === 0) return null;
            var l = o("WAWebUserPrefsMeUser").getMeUserOrThrow(),
              u = yield o("WAWebApiDeviceList").bulkGetDeviceRecord([l]),
              c = u[0],
              d = null;
            try {
              d = yield o("WAWebIdentityIcdcApi").getICDCMetaFromDeviceRecord(
                l,
                c,
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
            var m = o("WAWebDeviceSentMessageProtoUtils").wrapDeviceSentMessage(
              i,
              t,
            );
            (m.deviceSentMessage != null &&
              (m = babelHelpers.extends({}, m, {
                deviceSentMessage: babelHelpers.extends(
                  {},
                  m.deviceSentMessage,
                  { phash: a },
                ),
              })),
              o("WAWebE2EProtoGenerator").populateMessageContextInfo(
                m,
                d,
                null,
              ));
            var p = r.map(
                (function () {
                  var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (t) {
                      try {
                        var n = yield o(
                          "WAWebEncryptMsgProtobuf",
                        ).encryptMsgProtobuf(t, 0, m);
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
              _ = yield (s || (s = n("Promise"))).all(p);
            return _.filter(Boolean);
          },
        )),
        c.apply(this, arguments)
      );
    }
    l.getCompanionDsmPhashMsg = u;
  },
  98,
);
