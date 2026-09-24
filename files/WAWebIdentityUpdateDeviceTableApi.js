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
    var e, s, u, c, d, m, p, _;
    function f(e, t) {
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
    function g(e, t, n, r, o) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, a, i, l, u) {
            (i === void 0 && (i = !1),
              yield (_ || (_ = n("Promise"))).all(
                a
                  .filter(function (e) {
                    return e.id !== o("WAJids").DEFAULT_DEVICE_ID;
                  })
                  .map(function (e) {
                    return S(
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
              m = f(l, u);
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
            var p = yield b(
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
              g = p.chatIds,
              h = p.encryptedNotifications,
              y = null;
            (yield o("WAWebApiGetDeviceUpdateLock").getDeviceUpdateLock({
              callback: (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* () {
                    var e =
                        h.length > 0
                          ? o(
                              "WAWebDBStoreEncryptedMsgs",
                            ).storeEncryptedDBMessages(h, g, !1)
                          : (_ || (_ = n("Promise"))).resolve(),
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
                      u = (_ || (_ = n("Promise"))).resolve();
                    (m != null &&
                      ((u = o("WAWebApiContact").updateContactAdvHostedType(
                        t,
                        m,
                      )),
                      (y = {
                        contactId: o("WAWebWidFactory").asUserWidOrThrow(t),
                        advAccountType: m,
                      })),
                      yield _.all([e, a, l, u]));
                  },
                );
                function a() {
                  return e.apply(this, arguments);
                }
                return a;
              })(),
              hasAdvAccountTypeChange: m != null,
              hasNewNotification: h.length > 0,
              shouldUpdateSyncdMissingKeyDevices: !1,
            }),
              y != null &&
                o("WAWebBackendApi").frontendFireAndForget(
                  "updateContactAdvAccountType",
                  y,
                ),
              o("WAWebBizCoexUtils").sendWamCoexPrivacySysMsgInsertSuccess(h));
          },
        )),
        h.apply(this, arguments)
      );
    }
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.deviceUpdateResult,
            a = e.offline,
            i = a === void 0 ? !1 : a,
            l = e.shouldAddHostedSystemMsgIfApplicable,
            s = l === void 0 ? !1 : l,
            p = [],
            g = [],
            h = !1,
            y = !1,
            C = !1,
            v = [];
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
              d = f(
                t == null ? void 0 : t.advAccountType,
                n == null ? void 0 : n.advAccountType,
              );
            (d === o("WAWebProtobufsAdv.pb").ADVEncryptionType.HOSTED &&
              (v.length < 3 && v.push(r == null ? void 0 : r.toLogString()),
              o(
                "WAWebBizCoexHostedAddVerification",
              ).assertThrowsWidAdvTypeFromVerificationCache(r)),
              d != null && (y = !0),
              d === o("WAWebProtobufsAdv.pb").ADVEncryptionType.HOSTED &&
                (C = !0),
              p.push({
                wid: r,
                added: s,
                removed: u,
                isNewRecord: c,
                newAdvAccountType: d,
              }),
              u.forEach(function (e) {
                g.push(
                  o("WAWebWidFactory").createDeviceWidFromUserAndDevice(
                    r.user,
                    r.server,
                    e,
                  ),
                );
              }),
              o("WAWebUserPrefsMeUser").isMeAccount(r) &&
                u.length > 0 &&
                (h = !0));
          }),
            v.length > 0 &&
              o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "bulkApplyDeviceUpdates: checked coex cache for ",
                    " wids => ",
                    "",
                  ])),
                v.length,
                v,
              ),
            C === !0 &&
              (yield o("WAWebUserPrefsMultiDevice").setHaveProcessedCoexAdv()));
          var R = yield b(p, i, (i || s) && y),
            L = R.chatIds,
            E = R.encryptedNotifications;
          (_ || (_ = n("Promise")))
            .all(
              g.map(function (e) {
                return S(e);
              }),
            )
            .catch(function (e) {
              o("WALogger")
                .ERROR(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "remove identity of deleted devices failed",
                    ])),
                )
                .verbose()
                .sendLogs(
                  "remove identity of deleted devices failed when applying device update",
                );
            });
          var k = (E == null ? void 0 : E.length) > 0,
            I = [];
          yield o("WAWebApiGetDeviceUpdateLock").getDeviceUpdateLock({
            callback: (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* () {
                  var e =
                      E.length > 0
                        ? o(
                            "WAWebDBStoreEncryptedMsgs",
                          ).storeEncryptedDBMessages(E, L, !1)
                        : (_ || (_ = n("Promise"))).resolve(),
                    a = o(
                      "WAWebAdvUpdateParticipantApi",
                    ).bulkUpdateGroupParticipantsInTransaction(p),
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
                              d ||
                                (d = babelHelpers.taggedTemplateLiteralLoose([
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
                    l = h
                      ? i.then(function () {
                          return o("WAWebSyncdStoreMissingKeys")
                            .updateMissingKeyDevices()
                            .catch(function (e) {
                              o("WALogger").WARN(
                                m ||
                                  (m = babelHelpers.taggedTemplateLiteralLoose([
                                    "syncd: updateMissingKeyDevices failed with error:\n        ",
                                    "",
                                  ])),
                                String(e),
                              );
                            });
                        })
                      : (_ || (_ = n("Promise"))).resolve(),
                    s = [];
                  (k &&
                    p.forEach(function (e) {
                      var t = e.newAdvAccountType,
                        n = e.wid;
                      t != null &&
                        (s.push(
                          o("WAWebApiContact").updateContactAdvHostedType(n, t),
                        ),
                        I.push({
                          contactId: o("WAWebWidFactory").asUserWidOrThrow(n),
                          advAccountType: t,
                        }));
                    }),
                    yield (_ || (_ = n("Promise"))).all(
                      [e, a, i, l].concat(s),
                    ));
                },
              );
              function a() {
                return e.apply(this, arguments);
              }
              return a;
            })(),
            hasAdvAccountTypeChange: k,
            hasNewNotification: E.length > 0,
            shouldUpdateSyncdMissingKeyDevices: h,
          });
          for (var T of I)
            o("WAWebBackendApi").frontendFireAndForget(
              "updateContactAdvAccountType",
              T,
            );
          o("WAWebBizCoexUtils").sendWamCoexPrivacySysMsgInsertSuccess(E);
        })),
        C.apply(this, arguments)
      );
    }
    function b(e, t, n) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
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
            return (L(l), { chatIds: i, encryptedNotifications: u });
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
        v.apply(this, arguments)
      );
    }
    function S(e) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            yield (_ || (_ = n("Promise"))).all([
              o("WAWebSignalSessionApi").deleteRemoteInfo(e),
              o("WAWebSignalSessionApi").deleteDeviceSenderKey(e),
            ]);
          } catch (t) {
            o("WALogger").LOG(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "handleDevicesNotification: signal info cleanup failed ",
                  "",
                ])),
              e.user,
            );
          }
        })),
        R.apply(this, arguments)
      );
    }
    function L(e) {
      return (_ || (_ = n("Promise"))).all(
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
    ((l.clearDeviceRecord = g), (l.bulkApplyDeviceUpdate = y));
  },
  98,
);
