__d(
  "WAWebIdentityUpdateDeviceTableApi",
  [
    "Promise",
    "WAJids",
    "WALogger",
    "WAWebAdvDeviceNotificationApi",
    "WAWebAdvUpdateParticipantApi",
    "WAWebApiContact",
    "WAWebApiDeviceList",
    "WAWebApiGetDeviceUpdateLock",
    "WAWebBackendApi",
    "WAWebBizCoexHostedAddVerification",
    "WAWebBizCoexUtils",
    "WAWebDBEncryptMultipleMsgs",
    "WAWebDBStoreEncryptedMsgs",
    "WAWebDeviceListPk",
    "WAWebGetMessageCache",
    "WAWebProtobufsAdv.pb",
    "WAWebSignalSessionApi",
    "WAWebSyncdStoreMissingKeys",
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsMultiDevice",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p;
    function _(e, t) {
      return e == null
        ? t === o("WAWebProtobufsAdv.pb").ADVEncryptionType.HOSTED
          ? t
          : null
        : e === o("WAWebProtobufsAdv.pb").ADVEncryptionType.HOSTED
          ? t === o("WAWebProtobufsAdv.pb").ADVEncryptionType.E2EE
            ? t
            : null
          : e === o("WAWebProtobufsAdv.pb").ADVEncryptionType.E2EE
            ? t === o("WAWebProtobufsAdv.pb").ADVEncryptionType.HOSTED
              ? t
              : null
            : e === o("WAWebProtobufsAdv.pb").ADVEncryptionType.NON_E2EE
              ? null
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      e,
                  );
                })();
    }
    function f(e, t, n, r, o) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, a, i, l, u) {
            (i === void 0 && (i = !1),
              yield (p || (p = n("Promise"))).all(
                a
                  .filter(function (e) {
                    return e.id !== o("WAJids").DEFAULT_DEVICE_ID;
                  })
                  .map(function (e) {
                    return v(
                      o("WAWebWidFactory").createDeviceWidFromUserAndDevice(
                        t.user,
                        t.server,
                        e.id,
                      ),
                    );
                  }),
              ));
            var c = [],
              d = a
                .map(function (e) {
                  return e.id;
                })
                .filter(function (e) {
                  return e !== o("WAJids").DEFAULT_DEVICE_ID;
                }),
              m = _(l, u);
            m === o("WAWebProtobufsAdv.pb").ADVEncryptionType.HOSTED &&
              (o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "clearDeviceRecord: check coex cache for ",
                    "",
                  ])),
                t == null ? void 0 : t.toLogString(),
              ),
              o(
                "WAWebBizCoexHostedAddVerification",
              ).assertThrowsWidAdvTypeFromVerificationCache(t),
              yield o("WAWebUserPrefsMultiDevice").setHaveProcessedCoexAdv());
            var f = yield C(
                [
                  {
                    wid: t,
                    added: c,
                    removed: d,
                    isNewRecord: !1,
                    newAdvAccountType: m,
                  },
                ],
                i,
                m != null,
              ),
              g = f.chatIds,
              h = f.encryptedNotifications,
              y = null;
            (yield o("WAWebApiGetDeviceUpdateLock").getDeviceUpdateLock(
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                var e =
                    h.length > 0
                      ? o("WAWebDBStoreEncryptedMsgs").storeEncryptedDBMessages(
                          h,
                          [],
                          g,
                          !1,
                        )
                      : (p || (p = n("Promise"))).resolve(),
                  a = o(
                    "WAWebAdvUpdateParticipantApi",
                  ).updateGroupParticipantsInTransaction(t, c, d),
                  i = {
                    id: o("WAWebDeviceListPk").createDeviceListPK(t),
                    deleted: !0,
                  };
                m === o("WAWebProtobufsAdv.pb").ADVEncryptionType.HOSTED &&
                  (i.deletedChangedToHost = !0);
                var l = o("WAWebApiDeviceList")
                    .createOrReplaceDeviceRecord(i)
                    .catch(function (e) {
                      throw (
                        o("WALogger")
                          .ERROR(
                            s ||
                              (s = babelHelpers.taggedTemplateLiteralLoose([
                                "remove from device list table failed",
                              ])),
                          )
                          .verbose()
                          .sendLogs(
                            "remove from device list table failed when clearing device record",
                          ),
                        r("err")("remove from device list table failed")
                      );
                    }),
                  u = (p || (p = n("Promise"))).resolve();
                (m != null &&
                  ((u = o("WAWebApiContact").updateContactAdvHostedType(t, m)),
                  (y = {
                    contactId: o("WAWebWidFactory").asUserWidOrThrow(t),
                    advAccountType: m,
                  })),
                  yield p.all([e, a, l, u]));
              }),
              h.length > 0,
              !1,
              m != null,
            ),
              y != null &&
                o("WAWebBackendApi").frontendFireAndForget(
                  "updateContactAdvAccountType",
                  y,
                ),
              o("WAWebBizCoexUtils").sendWamCoexPrivacySysMsgInsertSuccess(h));
          },
        )),
        g.apply(this, arguments)
      );
    }
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.deviceUpdateResult,
            a = e.offline,
            i = a === void 0 ? !1 : a,
            l = e.shouldAddHostedSystemMsgIfApplicable,
            s = l === void 0 ? !1 : l,
            m = [],
            f = [],
            g = !1,
            h = !1,
            y = !1,
            b = [];
          (t.forEach(function (e) {
            var t = e.currentRecord,
              n = e.update,
              r = e.wid,
              a = n.devices,
              i = a.map(function (e) {
                return e.id;
              }),
              l =
                t && !t.deleted
                  ? t.devices.map(function (e) {
                      return e.id;
                    })
                  : [],
              s = Array.from(new Set(i).difference(new Set(l))).filter(
                function (e) {
                  return e !== o("WAJids").DEFAULT_DEVICE_ID;
                },
              ),
              u = Array.from(new Set(l).difference(new Set(i))).filter(
                function (e) {
                  return e !== o("WAJids").DEFAULT_DEVICE_ID;
                },
              ),
              c = t == null,
              d = _(
                t == null ? void 0 : t.advAccountType,
                n == null ? void 0 : n.advAccountType,
              );
            (d === o("WAWebProtobufsAdv.pb").ADVEncryptionType.HOSTED &&
              (b.length < 3 && b.push(r == null ? void 0 : r.toLogString()),
              o(
                "WAWebBizCoexHostedAddVerification",
              ).assertThrowsWidAdvTypeFromVerificationCache(r)),
              d != null && (h = !0),
              d === o("WAWebProtobufsAdv.pb").ADVEncryptionType.HOSTED &&
                (y = !0),
              m.push({
                wid: r,
                added: s,
                removed: u,
                isNewRecord: c,
                newAdvAccountType: d,
              }),
              u.forEach(function (e) {
                f.push(
                  o("WAWebWidFactory").createDeviceWidFromUserAndDevice(
                    r.user,
                    r.server,
                    e,
                  ),
                );
              }),
              o("WAWebUserPrefsMeUser").isMeAccount(r) &&
                u.length > 0 &&
                (g = !0));
          }),
            b.length > 0 &&
              o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "bulkApplyDeviceUpdates: checked coex cache for ",
                    " wids => ",
                    "",
                  ])),
                b.length,
                b,
              ),
            y === !0 &&
              (yield o("WAWebUserPrefsMultiDevice").setHaveProcessedCoexAdv()));
          var S = yield C(m, i, (i || s) && h),
            R = S.chatIds,
            L = S.encryptedNotifications;
          (p || (p = n("Promise"))).all(
            f.map(function (e) {
              return v(e);
            }),
          );
          var E = (L == null ? void 0 : L.length) > 0,
            k = [];
          yield o("WAWebApiGetDeviceUpdateLock").getDeviceUpdateLock(
            n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e =
                  L.length > 0
                    ? o("WAWebDBStoreEncryptedMsgs").storeEncryptedDBMessages(
                        L,
                        [],
                        R,
                        !1,
                      )
                    : (p || (p = n("Promise"))).resolve(),
                a = o(
                  "WAWebAdvUpdateParticipantApi",
                ).bulkUpdateGroupParticipantsInTransaction(m),
                i = o("WAWebApiDeviceList")
                  .bulkCreateOrReplaceDeviceRecord(
                    t.map(function (e) {
                      return e.update;
                    }),
                  )
                  .catch(function (e) {
                    throw (
                      o("WALogger")
                        .ERROR(
                          c ||
                            (c = babelHelpers.taggedTemplateLiteralLoose([
                              "bulkCreateOrReplace into device list table failed",
                            ])),
                        )
                        .verbose()
                        .sendLogs(
                          "bulkCreateOrReplace into device list table failed when applying device update",
                        ),
                      r("err")(
                        "bulkCreateOrReplace into device list table failed",
                      )
                    );
                  }),
                l = g
                  ? i.then(function () {
                      return o("WAWebSyncdStoreMissingKeys")
                        .updateMissingKeyDevices()
                        .catch(function (e) {
                          o("WALogger").WARN(
                            d ||
                              (d = babelHelpers.taggedTemplateLiteralLoose([
                                "syncd: updateMissingKeyDevices failed with error:\n        ",
                                "",
                              ])),
                            String(e),
                          );
                        });
                    })
                  : (p || (p = n("Promise"))).resolve(),
                s = [];
              (E &&
                m.forEach(function (e) {
                  var t = e.newAdvAccountType,
                    n = e.wid;
                  t != null &&
                    (s.push(
                      o("WAWebApiContact").updateContactAdvHostedType(n, t),
                    ),
                    k.push({
                      contactId: o("WAWebWidFactory").asUserWidOrThrow(n),
                      advAccountType: t,
                    }));
                }),
                yield (p || (p = n("Promise"))).all([e, a, i, l].concat(s)));
            }),
            L.length > 0,
            g,
            E,
          );
          for (var I of k)
            o("WAWebBackendApi").frontendFireAndForget(
              "updateContactAdvAccountType",
              I,
            );
          o("WAWebBizCoexUtils").sendWamCoexPrivacySysMsgInsertSuccess(L);
        })),
        y.apply(this, arguments)
      );
    }
    function C(e, t, n) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          n === void 0 && (n = !1);
          var r = n,
            a =
              r === !0
                ? yield o(
                    "WAWebAdvDeviceNotificationApi",
                  ).bulkGenerateDeviceAndAdvAccountTypeChangeNotifications(e)
                : { notifications: [], chatIds: [] },
            i = a.chatIds,
            l = a.notifications,
            s =
              r &&
              l.some(function (e) {
                return o("WAWebBizCoexUtils").isCoexSystemMsgType(e.subtype);
              });
          if (!t || s) {
            var u = yield o("WAWebDBEncryptMultipleMsgs").encryptMultipleDBMsgs(
              l,
            );
            return (R(l), { chatIds: i, encryptedNotifications: u });
          }
          return (
            o("WAWebGetMessageCache")
              .getMessageCache()
              .addMessages(
                l.map(function (e) {
                  return { msg: e };
                }),
                !1,
              ),
            { chatIds: [], encryptedNotifications: [] }
          );
        })),
        b.apply(this, arguments)
      );
    }
    function v(e) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            yield (p || (p = n("Promise"))).all([
              o("WAWebSignalSessionApi").deleteRemoteInfo(e),
              o("WAWebSignalSessionApi").deleteDeviceSenderKey(e),
            ]);
          } catch (t) {
            o("WALogger").LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "handleDevicesNotification: signal info cleanup failed ",
                  "",
                ])),
              e.user,
            );
          }
        })),
        S.apply(this, arguments)
      );
    }
    function R(e) {
      return (p || (p = n("Promise"))).all(
        e.map(function (e) {
          return o("WAWebBackendApi").frontendSendAndReceive(
            "processMultipleMessages",
            {
              chatId: e.from,
              msgObjs: [
                babelHelpers.extends({}, e, { recvFresh: !0, isNewMsg: !0 }),
              ],
              meta: { add: "after", isHistory: !1 },
              processMessagesOrigin: "updateDeviceTableApi",
            },
          );
        }),
      );
    }
    ((l.clearDeviceRecord = f), (l.bulkApplyDeviceUpdate = h));
  },
  98,
);
