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
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsMultiDevice",
    "WAWebWidFactory",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m;
    function p(e, t) {
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
    async function _(t, n, a, i, l) {
      (a === void 0 && (a = !1),
        await Promise.all(
          n
            .filter(function (e) {
              return e.id !== o("WAJids").DEFAULT_DEVICE_ID;
            })
            .map(function (e) {
              return h(
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
        d = p(i, l);
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
      var m = await g(
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
        _ = m.chatIds,
        f = m.encryptedNotifications,
        y = null;
      (await o("WAWebApiGetDeviceUpdateLock").getDeviceUpdateLock(
        async function () {
          var e =
              f.length > 0
                ? o("WAWebDBStoreEncryptedMsgs").storeEncryptedDBMessages(
                    f,
                    [],
                    _,
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
            (y = {
              contactId: o("WAWebWidFactory").asUserWidOrThrow(t),
              advAccountType: d,
            })),
            await Promise.all([e, n, i, l]));
        },
        f.length > 0,
        !1,
        d != null,
      ),
        y != null &&
          o("WAWebBackendApi").frontendFireAndForget(
            "updateContactAdvAccountType",
            y,
          ),
        o("WAWebBizCoexUtils").sendWamCoexPrivacySysMsgInsertSuccess(f));
    }
    async function f(e, t, n) {
      (t === void 0 && (t = !1), n === void 0 && (n = !1));
      var a = [],
        i = [],
        l = !1,
        s = !1,
        m = !1,
        _ = [];
      (e.forEach(function (e) {
        var t = e.currentRecord,
          n = e.update,
          r = e.wid,
          u = n.devices,
          c = u.map(function (e) {
            return e.id;
          }),
          d =
            t && !t.deleted
              ? t.devices.map(function (e) {
                  return e.id;
                })
              : [],
          f = Array.from(new Set(c).difference(new Set(d))).filter(
            function (e) {
              return e !== o("WAJids").DEFAULT_DEVICE_ID;
            },
          ),
          g = Array.from(new Set(d).difference(new Set(c))).filter(
            function (e) {
              return e !== o("WAJids").DEFAULT_DEVICE_ID;
            },
          ),
          h = t == null,
          y = p(
            t == null ? void 0 : t.advAccountType,
            n == null ? void 0 : n.advAccountType,
          );
        (y === o("WAWebProtobufsAdv.pb").ADVEncryptionType.HOSTED &&
          (_.length < 3 && _.push(r == null ? void 0 : r.toLogString()),
          o(
            "WAWebBizCoexHostedAddVerification",
          ).assertThrowsWidAdvTypeFromVerificationCache(r)),
          y != null && (s = !0),
          y === o("WAWebProtobufsAdv.pb").ADVEncryptionType.HOSTED && (m = !0),
          a.push({
            wid: r,
            added: f,
            removed: g,
            isNewRecord: h,
            newAdvAccountType: y,
          }),
          g.forEach(function (e) {
            i.push(
              o("WAWebWidFactory").createDeviceWidFromUserAndDevice(
                r.user,
                r.server,
                e,
              ),
            );
          }),
          o("WAWebUserPrefsMeUser").isMeAccount(r) && g.length > 0 && (l = !0));
      }),
        _.length > 0 &&
          o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "bulkApplyDeviceUpdates: checked coex cache for ",
                " wids => ",
                "",
              ])),
            _.length,
            _,
          ),
        m === !0 &&
          (await o("WAWebUserPrefsMultiDevice").setHaveProcessedCoexAdv()));
      var f = await g(a, t, (t || n) && s),
        y = f.chatIds,
        C = f.encryptedNotifications;
      Promise.all(
        i.map(function (e) {
          return h(e);
        }),
      );
      var b = (C == null ? void 0 : C.length) > 0,
        v = [];
      await o("WAWebApiGetDeviceUpdateLock").getDeviceUpdateLock(
        async function () {
          var t =
              C.length > 0
                ? o("WAWebDBStoreEncryptedMsgs").storeEncryptedDBMessages(
                    C,
                    [],
                    y,
                    !1,
                  )
                : Promise.resolve(),
            n = o(
              "WAWebAdvUpdateParticipantApi",
            ).bulkUpdateGroupParticipantsInTransaction(a),
            i = o("WAWebApiDeviceList")
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
                  r("err")("bulkCreateOrReplace into device list table failed")
                );
              }),
            s = l
              ? i.then(function () {
                  return o("WAWebSyncdStoreMissingKeys")
                    .updateMissingKeyDevices()
                    .catch(function (e) {
                      o("WALogger").WARN(
                        d ||
                          (d = babelHelpers.taggedTemplateLiteralLoose([
                            `syncd: updateMissingKeyDevices failed with error:
        `,
                            "",
                          ])),
                        String(e),
                      );
                    });
                })
              : Promise.resolve(),
            u = [];
          (b &&
            a.forEach(function (e) {
              var t = e.newAdvAccountType,
                n = e.wid;
              t != null &&
                (u.push(o("WAWebApiContact").updateContactAdvHostedType(n, t)),
                v.push({
                  contactId: o("WAWebWidFactory").asUserWidOrThrow(n),
                  advAccountType: t,
                }));
            }),
            await Promise.all([t, n, i, s].concat(u)));
        },
        C.length > 0,
        l,
        b,
      );
      for (var S of v)
        o("WAWebBackendApi").frontendFireAndForget(
          "updateContactAdvAccountType",
          S,
        );
      o("WAWebBizCoexUtils").sendWamCoexPrivacySysMsgInsertSuccess(C);
    }
    async function g(e, t, n) {
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
        return (y(l), { chatIds: i, encryptedNotifications: u });
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
    }
    async function h(e) {
      try {
        await Promise.all([
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
    }
    function y(e) {
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
    ((l.clearDeviceRecord = _), (l.bulkApplyDeviceUpdate = f));
  },
  98,
);
