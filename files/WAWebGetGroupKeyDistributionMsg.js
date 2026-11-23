__d(
  "WAWebGetGroupKeyDistributionMsg",
  [
    "WALogger",
    "WAWebAdvMetadataCreationFailureWamEvent",
    "WAWebApiContact",
    "WAWebApiDeviceList",
    "WAWebBoolFunc",
    "WAWebDeviceSentMessageProtoUtils",
    "WAWebE2EProtoGenerator",
    "WAWebEncryptMsgProtobuf",
    "WAWebIdentityIcdcApi",
    "WAWebSendMsgCommonApi",
    "WAWebUserUtils",
    "WAWebWidFactory",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    async function u(t, n, a, i, l, u, d, m) {
      m === void 0 && (m = !1);
      var p = {
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
      var _ = await c({
          dsmPhash: u,
          groupId: n,
          proto: p,
          shouldWrapDeviceSendMessage: l,
          skDistributionList: a,
        }),
        f = m
          ? o("WAWebBoolFunc").returnFalse
          : o("WAWebSendMsgCommonApi").isPrimaryDevice,
        g = a.map(async function (e) {
          try {
            var t,
              n =
                (t = _.get(
                  o("WAWebWidFactory").asUserWidOrThrow(e).toString(),
                )) != null
                  ? t
                  : babelHelpers.extends({}, p),
              a = await o("WAWebEncryptMsgProtobuf").encryptMsgProtobuf(
                e,
                0,
                n,
                void 0,
                void 0,
                d,
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
              f(e))
            )
              return Promise.reject(
                r("err")(
                  "getKeyDistributionMsg: encryption fail for primary device",
                ),
              );
          }
        }),
        h = await Promise.all(g);
      return h.filter(Boolean);
    }
    async function c(e) {
      var t = e.dsmPhash,
        n = e.groupId,
        r = e.proto,
        a = e.shouldWrapDeviceSendMessage,
        i = e.skDistributionList,
        l = o("WAWebUserUtils").getMeUserOrThrow(),
        s = [].concat(
          Array.from(new Set(i.map(o("WAWebWidFactory").asUserWidOrThrow))),
        ),
        u = await o("WAWebApiDeviceList").bulkGetDeviceRecord([l].concat(s)),
        c = u[0],
        d = babelHelpers.arrayLikeToArray(u).slice(1),
        m = null;
      try {
        m = await o("WAWebIdentityIcdcApi").getICDCMetaFromDeviceRecord(l, c);
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
      var p = new Map();
      return (
        await Promise.all(
          d.map(async function (e, i) {
            var l = s[i],
              u = babelHelpers.extends({}, r),
              c = null;
            if (o("WAWebUserUtils").isMeAccount(l))
              a &&
                ((u = o(
                  "WAWebDeviceSentMessageProtoUtils",
                ).wrapDeviceSentMessage(u, n)),
                t != null &&
                  u.deviceSentMessage != null &&
                  (u = babelHelpers.extends({}, u, {
                    deviceSentMessage: babelHelpers.extends(
                      {},
                      u.deviceSentMessage,
                      { phash: t },
                    ),
                  })));
            else
              try {
                c = await o("WAWebIdentityIcdcApi").getICDCMetaFromDeviceRecord(
                  l,
                  e,
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
            (o("WAWebE2EProtoGenerator").populateMessageContextInfo(u, m, c),
              p.set(l.toString(), u));
          }),
        ),
        p
      );
    }
    ((l.getKeyDistributionMsg = u), (l.generateMsgProtobufs = c));
  },
  98,
);
