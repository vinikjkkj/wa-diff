__d(
  "WAWebGetGroupKeyDistributionMsg",
  [
    "Promise",
    "WALogger",
    "WAWebAdvMetadataCreationFailureWamEvent",
    "WAWebApiContact",
    "WAWebApiDeviceList",
    "WAWebDeviceSentMessageProtoUtils",
    "WAWebE2EProtoGenerator",
    "WAWebEncryptMsgProtobuf",
    "WAWebIdentityIcdcApi",
    "WAWebSendMsgCommonApi",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(e, t, n, r, o, a, i, l) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, a, i, l, c, d, p, _) {
            _ === void 0 && (_ = !1);
            var f = {
              senderKeyDistributionMessage: {
                groupId: a.toString({ legacy: !0 }),
                axolotlSenderKeyDistributionMessage: l,
              },
            };
            o("WALogger")
              .LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "getKeyDistributionMsg: precalculate ICDC for ",
                    "",
                  ])),
                t == null ? void 0 : t.id.toString(),
              )
              .tags("messaging");
            var g = yield m({
                dsmPhash: d,
                groupId: a,
                proto: f,
                shouldWrapDeviceSendMessage: c,
                skDistributionList: i,
              }),
              h = _
                ? function () {
                    return !1;
                  }
                : o("WAWebSendMsgCommonApi").isPrimaryDevice,
              y = i.map(
                (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (e) {
                      try {
                        var t,
                          a =
                            (t = g.get(
                              o("WAWebWidFactory")
                                .asUserWidOrThrow(e)
                                .toString(),
                            )) != null
                              ? t
                              : babelHelpers.extends({}, f),
                          i = yield o(
                            "WAWebEncryptMsgProtobuf",
                          ).encryptMsgProtobuf(e, 0, a, void 0, void 0, p);
                        return {
                          type: i.type,
                          ciphertext: i.ciphertext,
                          participant: e,
                        };
                      } catch (t) {
                        var l,
                          c = o("WAWebApiContact").getAlternateUserWid(
                            o("WAWebWidFactory").asUserWidOrThrow(e),
                          );
                        if (
                          (o("WALogger")
                            .LOG(
                              s ||
                                (s = babelHelpers.taggedTemplateLiteralLoose([
                                  "getKeyDistributionMsg: encryption fail for ",
                                  ", altWid: ",
                                  ", ",
                                  "",
                                ])),
                              e.toString(),
                              (l = c == null ? void 0 : c.toString()) != null
                                ? l
                                : "null",
                              t,
                            )
                            .tags("messaging"),
                          h(e))
                        )
                          return (u || (u = n("Promise"))).reject(
                            r("err")(
                              "getKeyDistributionMsg: encryption fail for primary device",
                            ),
                          );
                      }
                    },
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              ),
              C = yield (u || (u = n("Promise"))).all(y);
            return C.filter(Boolean);
          },
        )),
        d.apply(this, arguments)
      );
    }
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.dsmPhash,
            r = e.groupId,
            a = e.proto,
            i = e.shouldWrapDeviceSendMessage,
            l = e.skDistributionList,
            s = o("WAWebUserPrefsMeUser").getMeUserOrThrow(),
            c = [].concat(
              Array.from(new Set(l.map(o("WAWebWidFactory").asUserWidOrThrow))),
            ),
            d = yield o("WAWebApiDeviceList").bulkGetDeviceRecord(
              [s].concat(c),
            ),
            m = d[0],
            p = babelHelpers.arrayLikeToArray(d).slice(1),
            _ = null;
          try {
            _ = yield o("WAWebIdentityIcdcApi").getICDCMetaFromDeviceRecord(
              s,
              m,
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
          var f = new Map();
          return (
            yield (u || (u = n("Promise"))).all(
              p.map(
                (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (e, n) {
                      var l = c[n],
                        s = babelHelpers.extends({}, a),
                        u = null;
                      if (o("WAWebUserPrefsMeUser").isMeAccount(l))
                        i &&
                          ((s = o(
                            "WAWebDeviceSentMessageProtoUtils",
                          ).wrapDeviceSentMessage(s, r)),
                          t != null &&
                            s.deviceSentMessage != null &&
                            (s = babelHelpers.extends({}, s, {
                              deviceSentMessage: babelHelpers.extends(
                                {},
                                s.deviceSentMessage,
                                { phash: t },
                              ),
                            })));
                      else
                        try {
                          u = yield o(
                            "WAWebIdentityIcdcApi",
                          ).getICDCMetaFromDeviceRecord(l, e);
                        } catch (e) {
                          throw (
                            new (o(
                              "WAWebAdvMetadataCreationFailureWamEvent",
                            ).AdvMetadataCreationFailureWamEvent)({
                              advMetadataIsMe: !1,
                            }).commit(),
                            e
                          );
                        }
                      (o("WAWebE2EProtoGenerator").populateMessageContextInfo(
                        s,
                        _,
                        u,
                      ),
                        f.set(l.toString(), s));
                    },
                  );
                  return function (t, n) {
                    return e.apply(this, arguments);
                  };
                })(),
              ),
            ),
            f
          );
        })),
        p.apply(this, arguments)
      );
    }
    ((l.getKeyDistributionMsg = c), (l.generateMsgProtobufs = m));
  },
  98,
);
