__d(
  "WAWebGetGroupKeyDistributionMsg",
  [
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
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    async function c(t, n, a, i, l, u, c) {
      var d = {
        senderKeyDistributionMessage: {
          groupId: n.toString({ legacy: !0 }),
          axolotlSenderKeyDistributionMessage: i,
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
      var p = await m(d, a, l, n, u),
        _ = a.map(async function (e) {
          try {
            var t,
              n =
                (t = p.get(
                  o("WAWebWidFactory").asUserWidOrThrow(e).toString(),
                )) != null
                  ? t
                  : babelHelpers.extends({}, d),
              a = await o("WAWebEncryptMsgProtobuf").encryptMsgProtobuf(
                e,
                0,
                n,
                void 0,
                void 0,
                c,
              );
            return { type: a.type, ciphertext: a.ciphertext, participant: e };
          } catch (t) {
            var i,
              l = o("WAWebApiContact").getAlternateUserWid(
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
                  (i = l == null ? void 0 : l.toString()) != null ? i : "null",
                  t,
                )
                .tags("messaging"),
              o("WAWebSendMsgCommonApi").isPrimaryDevice(e))
            )
              return Promise.reject(
                r("err")(
                  "getKeyDistributionMsg: encryption fail for primary device",
                ),
              );
          }
        }),
        f = await Promise.all(_);
      return f.filter(Boolean);
    }
    async function d(e, t, n, r) {
      if (t.length === 0) return null;
      var a = o("WAWebUserPrefsMeUser").getMeUser(),
        i = await o("WAWebApiDeviceList").bulkGetDeviceRecord([a]),
        l = i[0],
        s = null;
      try {
        s = await o("WAWebIdentityIcdcApi").getICDCMetaFromDeviceRecord(a, l);
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
      var c = o("WAWebDeviceSentMessageProtoUtils").wrapDeviceSentMessage(r, e);
      (c.deviceSentMessage != null &&
        (c = babelHelpers.extends({}, c, {
          deviceSentMessage: babelHelpers.extends({}, c.deviceSentMessage, {
            phash: n,
          }),
        })),
        o("WAWebE2EProtoGenerator").populateMessageContextInfo(c, s, null));
      var d = t.map(async function (e) {
          try {
            var t = await o("WAWebEncryptMsgProtobuf").encryptMsgProtobuf(
              e,
              0,
              c,
            );
            return { type: t.type, ciphertext: t.ciphertext, participant: e };
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
        }),
        m = await Promise.all(d);
      return m.filter(Boolean);
    }
    async function m(e, t, n, r, a) {
      var i = o("WAWebUserPrefsMeUser").getMeUser(),
        l = [].concat(
          Array.from(new Set(t.map(o("WAWebWidFactory").asUserWidOrThrow))),
        ),
        s = await o("WAWebApiDeviceList").bulkGetDeviceRecord([i].concat(l)),
        u = s[0],
        c = babelHelpers.arrayLikeToArray(s).slice(1),
        d = null;
      try {
        d = await o("WAWebIdentityIcdcApi").getICDCMetaFromDeviceRecord(i, u);
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
      var m = new Map();
      return (
        await Promise.all(
          c.map(async function (t, i) {
            var s = l[i],
              u = babelHelpers.extends({}, e),
              c = null;
            if (o("WAWebUserPrefsMeUser").isMeAccount(s))
              n &&
                ((u = o(
                  "WAWebDeviceSentMessageProtoUtils",
                ).wrapDeviceSentMessage(u, r)),
                a != null &&
                  u.deviceSentMessage != null &&
                  (u = babelHelpers.extends({}, u, {
                    deviceSentMessage: babelHelpers.extends(
                      {},
                      u.deviceSentMessage,
                      { phash: a },
                    ),
                  })));
            else
              try {
                c = await o("WAWebIdentityIcdcApi").getICDCMetaFromDeviceRecord(
                  s,
                  t,
                );
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
            (o("WAWebE2EProtoGenerator").populateMessageContextInfo(u, d, c),
              m.set(s.toString(), u));
          }),
        ),
        m
      );
    }
    ((l.getKeyDistributionMsg = c),
      (l.getCompanionDsmPhashMsg = d),
      (l.generateMsgProtobufs = m));
  },
  98,
);
