__d(
  "WAWebIdentityChangeApi",
  [
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
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n,
        r = (n = e.device) != null ? n : o("WAJids").DEFAULT_DEVICE_ID,
        a = o("WAWebWidFactory").asUserWidOrThrow(e);
      if (r === o("WAJids").DEFAULT_DEVICE_ID) {
        await s({ wid: a });
        var i = await o(
          "WAWebSecurityCodeApi",
        ).addSecurityCodeChangedNotifications({ user: a, offline: t });
        return (
          o(
            "WAWebSendTcTokenWhenDeviceIdentityChange",
          ).sendTcTokenWhenDeviceIdentityChange(a),
          i
        );
      }
    }
    async function s(e) {
      var t = e.offline,
        n = e.stanzaLid,
        a = e.wid,
        i = [o("WAJids").DEFAULT_DEVICE_ID],
        l = [o("WAJids").DEFAULT_DEVICE_ID],
        s = !1;
      if (t === !0)
        (o(
          "WAWebOfflineDeviceCache",
        ).OfflinePendingDeviceCache.addOfflinePendingDevice(String(a), null),
          await o("WAWebModelStorageUtils")
            .getStorage()
            .lock(["participant"], function () {
              return o(
                "WAWebAdvUpdateParticipantApi",
              ).updateGroupParticipantsInTransaction(a, l, i);
            }));
      else {
        var u = await o("WAWebApiDeviceList").getDeviceRecord(a);
        if (
          (u &&
            !u.deleted &&
            (u.devices.forEach(function (e) {
              e.id !== o("WAJids").DEFAULT_DEVICE_ID && i.push(e.id);
            }),
            o("WAWebBizCoexGatingUtils").bizHostedDevicesEnabled() &&
              u.advAccountType ===
                o("WAWebProtobufsAdv.pb").ADVEncryptionType.HOSTED &&
              (s = !0)),
          Promise.all(
            i.map(function (e) {
              return e === o("WAJids").DEFAULT_DEVICE_ID
                ? Promise.resolve()
                : o("WAWebSignal").Session.deleteRemoteInfo(
                    o("WAWebWidFactory").createDeviceWidFromUserAndDevice(
                      a.user,
                      a.server,
                      e,
                    ),
                  );
            }),
          ),
          await Promise.all([
            o("WAWebModelStorageUtils")
              .getStorage()
              .lock(["participant"], function () {
                return o(
                  "WAWebAdvUpdateParticipantApi",
                ).updateGroupParticipantsInTransaction(a, l, i);
              }),
            o("WAWebApiDeviceList").createOrReplaceDeviceRecord({
              id: o("WAWebDeviceListPk").createDeviceListPK(a),
              deleted: !0,
            }),
          ]),
          o("WAWebBizCoexGatingUtils").bizHostedDevicesEnabled() && s === !0)
        ) {
          (await o("WAWebApiContact").updateContactAdvHostedType(
            a,
            o("WAWebProtobufsAdv.pb").ADVEncryptionType.E2EE,
          ),
            o("WAWebBackendApi").frontendFireAndForget(
              "updateContactAdvAccountType",
              {
                contactId: o("WAWebWidFactory").asUserWidOrThrow(a),
                advAccountType: o("WAWebProtobufsAdv.pb").ADVEncryptionType
                  .E2EE,
              },
            ));
          var c = [a.toString()];
          if (a.isLid()) {
            var d = o("WAWebApiContact").getPnIfLidIsLatestMapping(a);
            d != null && c.push(d.toString());
          } else n != null && c.push(n.toString());
          var m = await o("WAWebSchemaChat").getChatTable().bulkGet(c, !1),
            p = m.find(Boolean);
          if (p != null) {
            var _ = o("WAWebWidFactory").createWid(p.id),
              f = o("WAWebContactSystemMsg").genNotificationMsg(_, {
                type: "e2e_notification",
                kind: o("WAWebMsgType").MsgKind.E2eNotification,
                subtype: "encrypt_now",
                templateParams: [],
              });
            await o("WAWebHandleSingleMsgWorkerCompatible").handleSingleMsg({
              chatId: r("WANullthrows")(f.from),
              newMsg: f,
              handleSingleMsgOrigin: "bizStateChangeNotification",
            });
          }
          o("WAWebBizCoexUtils").triggerUsyncForCoexUpdate(a);
        }
      }
    }
    ((l.handleNewIdentityImpl = e),
      (l.clearDeviceRecordForIdentityChangeImpl = s));
  },
  98,
);
