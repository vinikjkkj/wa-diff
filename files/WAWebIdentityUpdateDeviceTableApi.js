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
    "WAWebBizCoexGatingUtils",
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
      if (o("WAWebBizCoexGatingUtils").bizHostedDevicesEnabled())
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
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      e,
                  );
                })();
      if (t === o("WAWebProtobufsAdv.pb").ADVEncryptionType.HOSTED)
        throw r("err")("Unexpected account type");
      return null;
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
            o("WAWebBizCoexGatingUtils").bizHostedDevicesEnabled() &&
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
                o("WAWebBizCoexGatingUtils").bizHostedDevicesEnabled() &&
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
                (o("WAWebBizCoexGatingUtils").bizHostedDevicesEnabled() &&
                  m != null &&
                  ((u = o("WAWebApiContact").updateContactAdvHostedType(t, m)),
                  (y = { contactId: t, advAccountType: m })),
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
    function h(e, t, n) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, a) {
          (t === void 0 && (t = !1), a === void 0 && (a = !1));
          var i = [],
            l = [],
            s = !1,
            m = !1,
            f = !1,
            g = [];
          (e.forEach(function (e) {
            var t = e.currentRecord,
              n = e.update,
              r = e.wid,
              a = n.devices,
              u = a.map(function (e) {
                return e.id;
              }),
              c =
                t && !t.deleted
                  ? t.devices.map(function (e) {
                      return e.id;
                    })
                  : [],
              d = Array.from(new Set(u).difference(new Set(c))).filter(
                function (e) {
                  return e !== o("WAJids").DEFAULT_DEVICE_ID;
                },
              ),
              p = Array.from(new Set(c).difference(new Set(u))).filter(
                function (e) {
                  return e !== o("WAJids").DEFAULT_DEVICE_ID;
                },
              ),
              h = t == null,
              y = o("WAWebBizCoexGatingUtils").bizHostedDevicesEnabled()
                ? _(
                    t == null ? void 0 : t.advAccountType,
                    n == null ? void 0 : n.advAccountType,
                  )
                : null;
            (o("WAWebBizCoexGatingUtils").bizHostedDevicesEnabled() &&
              y === o("WAWebProtobufsAdv.pb").ADVEncryptionType.HOSTED &&
              (g.length < 3 && g.push(r == null ? void 0 : r.toLogString()),
              o(
                "WAWebBizCoexHostedAddVerification",
              ).assertThrowsWidAdvTypeFromVerificationCache(r)),
              o("WAWebBizCoexGatingUtils").bizHostedDevicesEnabled() &&
                (y != null && (m = !0),
                y === o("WAWebProtobufsAdv.pb").ADVEncryptionType.HOSTED &&
                  (f = !0)),
              i.push({
                wid: r,
                added: d,
                removed: p,
                isNewRecord: h,
                newAdvAccountType: y,
              }),
              p.forEach(function (e) {
                l.push(
                  o("WAWebWidFactory").createDeviceWidFromUserAndDevice(
                    r.user,
                    r.server,
                    e,
                  ),
                );
              }),
              o("WAWebDeviceListPk").createDeviceListPK(r) ===
                o("WAWebDeviceListPk").createDeviceListPK(
                  o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
                ) &&
                p.length > 0 &&
                (s = !0));
          }),
            g.length > 0 &&
              o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "bulkApplyDeviceUpdates: checked coex cache for ",
                    " wids => ",
                    "",
                  ])),
                g.length,
                g,
              ),
            o("WAWebBizCoexGatingUtils").bizHostedDevicesEnabled() &&
              f === !0 &&
              (yield o("WAWebUserPrefsMultiDevice").setHaveProcessedCoexAdv()));
          var h = yield C(i, t, (t || a) && m),
            y = h.chatIds,
            b = h.encryptedNotifications;
          (p || (p = n("Promise"))).all(
            l.map(function (e) {
              return v(e);
            }),
          );
          var S =
              o("WAWebBizCoexGatingUtils").bizHostedDevicesEnabled() &&
              (b == null ? void 0 : b.length) > 0,
            R = [];
          yield o("WAWebApiGetDeviceUpdateLock").getDeviceUpdateLock(
            n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var t =
                  b.length > 0
                    ? o("WAWebDBStoreEncryptedMsgs").storeEncryptedDBMessages(
                        b,
                        [],
                        y,
                        !1,
                      )
                    : (p || (p = n("Promise"))).resolve(),
                a = o(
                  "WAWebAdvUpdateParticipantApi",
                ).bulkUpdateGroupParticipantsInTransaction(i),
                l = o("WAWebApiDeviceList")
                  .bulkCreateOrReplaceDeviceRecord(
                    e.map(function (e) {
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
                u = s
                  ? l.then(function () {
                      return o("WAWebSyncdStoreMissingKeys")
                        .updateMissingKeyDevices()
                        .catch(function (e) {
                          o("WALogger").WARN(
                            d ||
                              (d = babelHelpers.taggedTemplateLiteralLoose([
                                "syncd: updateMissingKeyDevices failed with error:\n        ",
                                "",
                              ])),
                            e,
                          );
                        });
                    })
                  : (p || (p = n("Promise"))).resolve(),
                m = [];
              (o("WAWebBizCoexGatingUtils").bizHostedDevicesEnabled() &&
                S &&
                i.forEach(function (e) {
                  var t = e.newAdvAccountType,
                    n = e.wid;
                  t != null &&
                    (m.push(
                      o("WAWebApiContact").updateContactAdvHostedType(n, t),
                    ),
                    R.push({ contactId: n, advAccountType: t }));
                }),
                yield (p || (p = n("Promise"))).all([t, a, l, u].concat(m)));
            }),
            b.length > 0,
            s,
            S,
          );
          for (var L of R)
            o("WAWebBackendApi").frontendFireAndForget(
              "updateContactAdvAccountType",
              L,
            );
          o("WAWebBizCoexUtils").sendWamCoexPrivacySysMsgInsertSuccess(b);
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
          var r = o("WAWebBizCoexGatingUtils").bizHostedDevicesEnabled() && n,
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
