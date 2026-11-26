__d(
  "WAWebIdentityUpdateDeviceTableApi",
  [
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
    "WAWebUserPrefsMultiDevice",
    "WAWebUserUtils",
    "WAWebWidFactory",
    "cr:16885",
    "err",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f;
    function g(e, t) {
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
    async function h(t, n, a, i, l) {
      (a === void 0 && (a = !1),
        await Promise.all(
          n
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
      var u = [],
        c = n
          .map(function (e) {
            return e.id;
          })
          .filter(function (e) {
            return e !== o("WAJids").DEFAULT_DEVICE_ID;
          }),
        d = g(i, l);
      d === o("WAWebProtobufsAdv.pb").ADVEncryptionType.HOSTED &&
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
        await o("WAWebUserPrefsMultiDevice").setHaveProcessedCoexAdv());
      var m = await b(
          [
            {
              wid: t,
              added: u,
              removed: c,
              isNewRecord: !1,
              newAdvAccountType: d,
            },
          ],
          a,
          d != null,
        ),
        p = m.chatIds,
        _ = m.encryptedNotifications,
        f = null;
      (await o("WAWebApiGetDeviceUpdateLock").getDeviceUpdateLock({
        callback: async function () {
          var e =
              _.length > 0
                ? o("WAWebDBStoreEncryptedMsgs").storeEncryptedDBMessages(
                    _,
                    p,
                    !1,
                  )
                : Promise.resolve(),
            n = o(
              "WAWebAdvUpdateParticipantApi",
            ).updateGroupParticipantsInTransaction(t, u, c),
            a = {
              id: o("WAWebDeviceListPk").createDeviceListPK(t),
              deleted: !0,
            };
          d === o("WAWebProtobufsAdv.pb").ADVEncryptionType.HOSTED &&
            (a.deletedChangedToHost = !0);
          var i = o("WAWebApiDeviceList")
              .createOrReplaceDeviceRecord(a)
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
            l = Promise.resolve();
          (d != null &&
            ((l = o("WAWebApiContact").updateContactAdvHostedType(t, d)),
            (f = {
              contactId: o("WAWebWidFactory").asUserWidOrThrow(t),
              advAccountType: d,
            })),
            await Promise.all([e, n, i, l]));
        },
        hasAdvAccountTypeChange: d != null,
        hasNewNotification: _.length > 0,
        shouldUpdateSyncdMissingKeyDevices: !1,
      }),
        f != null &&
          o("WAWebBackendApi").frontendFireAndForget(
            "updateContactAdvAccountType",
            f,
          ),
        o("WAWebBizCoexUtils").sendWamCoexPrivacySysMsgInsertSuccess(_));
    }
    async function y(e) {
      var t = e.deviceUpdateResult,
        a = e.offline,
        i = a === void 0 ? !1 : a,
        l = e.shouldAddHostedSystemMsgIfApplicable,
        s = l === void 0 ? !1 : l,
        p = [],
        _ = [],
        f = !1,
        h = !1,
        y = !1,
        S = [];
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
          d = g(
            t == null ? void 0 : t.advAccountType,
            n == null ? void 0 : n.advAccountType,
          );
        (d === o("WAWebProtobufsAdv.pb").ADVEncryptionType.HOSTED &&
          (S.length < 3 && S.push(r == null ? void 0 : r.toLogString()),
          o(
            "WAWebBizCoexHostedAddVerification",
          ).assertThrowsWidAdvTypeFromVerificationCache(r)),
          d != null && (h = !0),
          d === o("WAWebProtobufsAdv.pb").ADVEncryptionType.HOSTED && (y = !0),
          p.push({
            wid: r,
            added: s,
            removed: u,
            isNewRecord: c,
            newAdvAccountType: d,
          }),
          u.forEach(function (e) {
            _.push(
              o("WAWebWidFactory").createDeviceWidFromUserAndDevice(
                r.user,
                r.server,
                e,
              ),
            );
          }),
          o("WAWebUserUtils").isMeAccount(r) && u.length > 0 && (f = !0));
      }),
        S.length > 0 &&
          o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "bulkApplyDeviceUpdates: checked coex cache for ",
                " wids => ",
                "",
              ])),
            S.length,
            S,
          ),
        y === !0 &&
          (await o("WAWebUserPrefsMultiDevice").setHaveProcessedCoexAdv()));
      var R = await b(p, i, (i || s) && h),
        L = R.chatIds,
        E = R.encryptedNotifications;
      Promise.all(
        _.map(function (e) {
          return v(e);
        }),
      ).catch(function (e) {
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
      var k = C(t, p, E.length > 0),
        I = [];
      await o("WAWebApiGetDeviceUpdateLock").getDeviceUpdateLock({
        callback: async function () {
          var e =
              E.length > 0
                ? o("WAWebDBStoreEncryptedMsgs").storeEncryptedDBMessages(
                    E,
                    L,
                    !1,
                  )
                : Promise.resolve(),
            n = o(
              "WAWebAdvUpdateParticipantApi",
            ).bulkUpdateGroupParticipantsInTransaction(p),
            a = o("WAWebApiDeviceList")
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
                  r("err")("bulkCreateOrReplace into device list table failed")
                );
              }),
            i = f
              ? a.then(function () {
                  return o("WAWebSyncdStoreMissingKeys")
                    .updateMissingKeyDevices()
                    .catch(function (e) {
                      o("WALogger").WARN(
                        m ||
                          (m = babelHelpers.taggedTemplateLiteralLoose([
                            `syncd: updateMissingKeyDevices failed with error:
        `,
                            "",
                          ])),
                        String(e),
                      );
                    });
                })
              : Promise.resolve(),
            l = k.map(function (e) {
              var t = e.advAccountType,
                n = e.wid;
              return (
                I.push({
                  contactId: o("WAWebWidFactory").asUserWidOrThrow(n),
                  advAccountType: t,
                }),
                o("WAWebApiContact").updateContactAdvHostedType(n, t)
              );
            });
          await Promise.all([e, n, a, i].concat(l));
        },
        hasAdvAccountTypeChange: k.length > 0,
        hasNewNotification: E.length > 0,
        shouldUpdateSyncdMissingKeyDevices: f,
      });
      for (var T of I)
        o("WAWebBackendApi").frontendFireAndForget(
          "updateContactAdvAccountType",
          T,
        );
      (n("cr:16885") == null ||
        n("cr:16885").observeAeaAdvStates(
          t.flatMap(function (e) {
            var t = e.update,
              n = e.wid;
            return t.advAccountType == null
              ? []
              : [{ user: n, advAccountType: t.advAccountType }];
          }),
        ),
        o("WAWebBizCoexUtils").sendWamCoexPrivacySysMsgInsertSuccess(E));
    }
    function C(e, t, n) {
      if (!r("justknobx")._("247"))
        return n
          ? t.flatMap(function (e) {
              var t = e.newAdvAccountType,
                n = e.wid;
              return t != null ? [{ wid: n, advAccountType: t }] : [];
            })
          : [];
      var o = new Set(
        e
          .filter(function (e) {
            var t = e.isFromPrimaryOnlyDeviceList;
            return t;
          })
          .map(function (e) {
            var t = e.wid;
            return t;
          }),
      );
      return t.flatMap(function (e) {
        var t = e.newAdvAccountType,
          r = e.wid;
        return t != null && (n || !o.has(r))
          ? [{ wid: r, advAccountType: t }]
          : [];
      });
    }
    async function b(e, t, n) {
      n === void 0 && (n = !1);
      var r = n,
        a =
          r === !0
            ? await o(
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
        var u = await o("WAWebDBEncryptMultipleMsgs").encryptMultipleDBMsgs(l);
        return (
          S(l).catch(function (e) {
            o("WALogger")
              .ERROR(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "updateNotificationInModel failed",
                  ])),
              )
              .verbose()
              .sendLogs("updateNotificationInModel failed");
          }),
          { chatIds: i, encryptedNotifications: u }
        );
      }
      return (
        o("WAWebGetMessageCache")
          .getMessageCache()
          .addMessages(
            l.map(function (e) {
              return { msg: e };
            }),
            !1,
          )
          .catch(function (e) {
            o("WALogger")
              .ERROR(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "add notifications to message cache failed",
                  ])),
              )
              .verbose()
              .sendLogs("add notifications to message cache failed");
          }),
        { chatIds: [], encryptedNotifications: [] }
      );
    }
    async function v(e) {
      try {
        await Promise.all([
          o("WAWebSignalSessionApi").deleteRemoteInfo(e),
          o("WAWebSignalSessionApi").deleteDeviceSenderKey(e),
        ]);
      } catch (t) {
        o("WALogger").LOG(
          f ||
            (f = babelHelpers.taggedTemplateLiteralLoose([
              "handleDevicesNotification: signal info cleanup failed ",
              "",
            ])),
          e.user,
        );
      }
    }
    function S(e) {
      return Promise.all(
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
    ((l.clearDeviceRecord = h), (l.bulkApplyDeviceUpdate = y));
  },
  98,
);
