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
    var e, s, u, c;
    function d(e, t, n, r, o, a, i) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, a, i, l, u, d, m) {
            var p = {
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
            var _ = yield f({
                dsmPhash: d,
                groupId: a,
                proto: p,
                shouldWrapDeviceSendMessage: u,
                skDistributionList: i,
              }),
              g = i.map(
                (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (e) {
                      try {
                        var t,
                          a =
                            (t = _.get(
                              o("WAWebWidFactory")
                                .asUserWidOrThrow(e)
                                .toString(),
                            )) != null
                              ? t
                              : babelHelpers.extends({}, p),
                          i = yield o(
                            "WAWebEncryptMsgProtobuf",
                          ).encryptMsgProtobuf(e, 0, a, void 0, void 0, m);
                        return {
                          type: i.type,
                          ciphertext: i.ciphertext,
                          participant: e,
                        };
                      } catch (t) {
                        var l,
                          u = o("WAWebApiContact").getAlternateUserWid(
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
                              (l = u == null ? void 0 : u.toString()) != null
                                ? l
                                : "null",
                              t,
                            )
                            .tags("messaging"),
                          o("WAWebSendMsgCommonApi").isPrimaryDevice(e))
                        )
                          return (c || (c = n("Promise"))).reject(
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
              h = yield (c || (c = n("Promise"))).all(g);
            return h.filter(Boolean);
          },
        )),
        m.apply(this, arguments)
      );
    }
    function p(e, t, n, r) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, r, a) {
            if (t.length === 0) return null;
            var i = o("WAWebUserPrefsMeUser").getMeUserOrThrow(),
              l = yield o("WAWebApiDeviceList").bulkGetDeviceRecord([i]),
              s = l[0],
              d = null;
            try {
              d = yield o("WAWebIdentityIcdcApi").getICDCMetaFromDeviceRecord(
                i,
                s,
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
              a,
              e,
            );
            (m.deviceSentMessage != null &&
              (m = babelHelpers.extends({}, m, {
                deviceSentMessage: babelHelpers.extends(
                  {},
                  m.deviceSentMessage,
                  { phash: r },
                ),
              })),
              o("WAWebE2EProtoGenerator").populateMessageContextInfo(
                m,
                d,
                null,
              ));
            var p = t.map(
                (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (e) {
                      try {
                        var t = yield o(
                          "WAWebEncryptMsgProtobuf",
                        ).encryptMsgProtobuf(e, 0, m);
                        return {
                          type: t.type,
                          ciphertext: t.ciphertext,
                          participant: e,
                        };
                      } catch (t) {
                        o("WALogger")
                          .LOG(
                            u ||
                              (u = babelHelpers.taggedTemplateLiteralLoose([
                                "getCompanionDsmPhashMsg: encryption fail for ",
                                ", ",
                                "",
                              ])),
                            e.toString(),
                            t,
                          )
                          .tags("messaging");
                      }
                    },
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              ),
              _ = yield (c || (c = n("Promise"))).all(p);
            return _.filter(Boolean);
          },
        )),
        _.apply(this, arguments)
      );
    }
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.dsmPhash,
            r = e.groupId,
            a = e.proto,
            i = e.shouldWrapDeviceSendMessage,
            l = e.skDistributionList,
            s = o("WAWebUserPrefsMeUser").getMeUserOrThrow(),
            u = [].concat(
              Array.from(new Set(l.map(o("WAWebWidFactory").asUserWidOrThrow))),
            ),
            d = yield o("WAWebApiDeviceList").bulkGetDeviceRecord(
              [s].concat(u),
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
            yield (c || (c = n("Promise"))).all(
              p.map(
                (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (e, n) {
                      var l = u[n],
                        s = babelHelpers.extends({}, a),
                        c = null;
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
                          c = yield o(
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
                        c,
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
        g.apply(this, arguments)
      );
    }
    ((l.getKeyDistributionMsg = d),
      (l.getCompanionDsmPhashMsg = p),
      (l.generateMsgProtobufs = f));
  },
  98,
);
