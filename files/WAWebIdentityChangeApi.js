__d(
  "WAWebIdentityChangeApi",
  [
    "Promise",
    "WAJids",
    "WANullthrows",
    "WAWebAdvUpdateParticipantApi",
    "WAWebApiContact",
    "WAWebApiDeviceList",
    "WAWebBackendApi",
    "WAWebBizCoexGatingUtils",
    "WAWebBizCoexUtils",
    "WAWebContactSystemMsg",
    "WAWebDeviceListPk",
    "WAWebHandleSingleMsgWorkerCompatible",
    "WAWebModelStorageUtils",
    "WAWebMsgType",
    "WAWebOfflineDeviceCache",
    "WAWebProtobufsAdv.pb",
    "WAWebSchemaChat",
    "WAWebSecurityCodeApi",
    "WAWebSendTcTokenWhenDeviceIdentityChange",
    "WAWebSignal",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e, t) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n,
            r = (n = e.device) != null ? n : o("WAJids").DEFAULT_DEVICE_ID,
            a = o("WAWebWidFactory").asUserWidOrThrow(e);
          if (r === o("WAJids").DEFAULT_DEVICE_ID) {
            yield c({ wid: a });
            var i = yield o(
              "WAWebSecurityCodeApi",
            ).addSecurityCodeChangedNotifications({ user: a, offline: t });
            return (
              o(
                "WAWebSendTcTokenWhenDeviceIdentityChange",
              ).sendTcTokenWhenDeviceIdentityChange(a),
              i
            );
          }
        })),
        u.apply(this, arguments)
      );
    }
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var a = t.offline,
            i = t.stanzaLid,
            l = t.wid,
            s = [o("WAJids").DEFAULT_DEVICE_ID],
            u = [o("WAJids").DEFAULT_DEVICE_ID],
            c = !1;
          if (a === !0)
            (o(
              "WAWebOfflineDeviceCache",
            ).OfflinePendingDeviceCache.addOfflinePendingDevice(
              String(l),
              null,
            ),
              yield o("WAWebModelStorageUtils")
                .getStorage()
                .lock(["participant"], function () {
                  return o(
                    "WAWebAdvUpdateParticipantApi",
                  ).updateGroupParticipantsInTransaction(l, u, s);
                }));
          else {
            var d = yield o("WAWebApiDeviceList").getDeviceRecord(l);
            if (
              (d &&
                !d.deleted &&
                (d.devices.forEach(function (e) {
                  e.id !== o("WAJids").DEFAULT_DEVICE_ID && s.push(e.id);
                }),
                o("WAWebBizCoexGatingUtils").bizHostedDevicesEnabled() &&
                  d.advAccountType ===
                    o("WAWebProtobufsAdv.pb").ADVEncryptionType.HOSTED &&
                  (c = !0)),
              (e || (e = n("Promise"))).all(
                s.map(function (t) {
                  return t === o("WAJids").DEFAULT_DEVICE_ID
                    ? (e || (e = n("Promise"))).resolve()
                    : o("WAWebSignal").Session.deleteRemoteInfo(
                        o("WAWebWidFactory").createDeviceWidFromUserAndDevice(
                          l.user,
                          l.server,
                          t,
                        ),
                      );
                }),
              ),
              yield e.all([
                o("WAWebModelStorageUtils")
                  .getStorage()
                  .lock(["participant"], function () {
                    return o(
                      "WAWebAdvUpdateParticipantApi",
                    ).updateGroupParticipantsInTransaction(l, u, s);
                  }),
                o("WAWebApiDeviceList").createOrReplaceDeviceRecord({
                  id: o("WAWebDeviceListPk").createDeviceListPK(l),
                  deleted: !0,
                }),
              ]),
              o("WAWebBizCoexGatingUtils").bizHostedDevicesEnabled() &&
                c === !0)
            ) {
              (yield o("WAWebApiContact").updateContactAdvHostedType(
                l,
                o("WAWebProtobufsAdv.pb").ADVEncryptionType.E2EE,
              ),
                o("WAWebBackendApi").frontendFireAndForget(
                  "updateContactAdvAccountType",
                  {
                    contactId: l,
                    advAccountType: o("WAWebProtobufsAdv.pb").ADVEncryptionType
                      .E2EE,
                  },
                ));
              var m = [l.toString()];
              if (l.isLid()) {
                var p = o("WAWebApiContact").getPnIfLidIsLatestMapping(l);
                p != null && m.push(p.toString());
              } else i != null && m.push(i.toString());
              var _ = yield o("WAWebSchemaChat").getChatTable().bulkGet(m, !1),
                f = _.find(Boolean);
              if (f != null) {
                var g = o("WAWebWidFactory").createWid(f.id),
                  h = o("WAWebContactSystemMsg").genNotificationMsg(g, {
                    type: "e2e_notification",
                    kind: o("WAWebMsgType").MsgKind.E2eNotification,
                    subtype: "encrypt_now",
                    templateParams: [],
                  });
                yield o("WAWebHandleSingleMsgWorkerCompatible").handleSingleMsg(
                  {
                    chatId: r("WANullthrows")(h.from),
                    newMsg: h,
                    handleSingleMsgOrigin: "bizStateChangeNotification",
                  },
                );
              }
              o("WAWebBizCoexUtils").triggerUsyncForCoexUpdate(l);
            }
          }
        })),
        d.apply(this, arguments)
      );
    }
    ((l.handleNewIdentityImpl = s),
      (l.clearDeviceRecordForIdentityChangeImpl = c));
  },
  98,
);
