__d(
  "WAWebHandleDeviceNotification",
  [
    "WADeprecatedWapParser",
    "WAJids",
    "WALogger",
    "WAWap",
    "WAWebAdvDeviceUpdateNotificationApi",
    "WAWebApiContact",
    "WAWebApiPendingDeviceSync",
    "WAWebCommsWapMd",
    "WAWebDBCreateLidPnMappings",
    "WAWebJidToWid",
    "WAWebLidMigrationUtils",
    "WAWebLidPnMappingWrite",
    "WAWebOfflineDeviceCache",
    "WAWebOfflineHandler",
    "WAWebSyncDeviceAdvDeviceListJob",
    "WAWebWid",
    "WAWebWidFactory",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p = { add: "add", remove: "remove", update: "update" },
      _ = new (r("WADeprecatedWapParser"))(
        "incomingDevicesNotification",
        function (t) {
          (t.assertTag("notification"),
            t.assertTag("notification"),
            t.assertAttr("type", "devices"));
          var n,
            r,
            a,
            i = [];
          if (t.hasChild("remove")) ((r = p.remove), (n = t.child("remove")));
          else if (t.hasChild("add")) ((r = p.add), (n = t.child("add")));
          else if (t.hasChild("update"))
            ((r = p.update), (n = t.child("update")));
          else
            throw (
              o("WALogger").WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    '[devices] notif missing "remove" or "add" node',
                  ])),
              ),
              t.createParseError("Failed to parse devices notification")
            );
          if (r === p.add || r === p.remove) {
            var l = n.maybeChild("key-index-list");
            if (!l)
              throw t.createParseError(
                "key index node is required to handle device add or remove notification",
              );
            var u = l.attrTime("ts");
            if (r === p.remove && !u)
              throw t.createParseError(
                "timestamp is required to handle device remove notification",
              );
            a = {
              ts: u,
              signedKeyIndexBytes: r === p.add ? l.contentBytes() : null,
            };
            var c = n.child("device"),
              d = c.attrDeviceJid("jid"),
              m = o("WAJids").extractDeviceId(d),
              _ = c.hasAttr("key-index") ? c.attrInt("key-index") : null;
            if (c.hasAttr("lid")) {
              var g = o("WAJids").extractDeviceId(c.attrDeviceJid("lid"));
              if (g !== m)
                throw (
                  o("WALogger").WARN(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[devices] device id mismatch: jid vs lid attr",
                      ])),
                  ),
                  t.createParseError("mismatched device jid and lid attributes")
                );
            }
            i = [f(d, m, _)];
          }
          return {
            type: r,
            stanzaId: t.attrString("id"),
            hash: r === p.update ? n.attrString("hash") : null,
            user: o("WAWebJidToWid").deviceJidToUserWid(
              t.attrDeviceJid("from"),
            ),
            lidUser: t.hasAttr("lid")
              ? o("WAWebJidToWid").lidDeviceJidToUserLid(
                  t.attrLidDeviceJid("lid"),
                )
              : null,
            deviceList: i,
            keyIndex: a,
          };
        },
      );
    function f(e, t, n) {
      return r("WAWebWid").isHosted(e)
        ? { id: t, keyIndex: n, isHosted: !0 }
        : { id: t, keyIndex: n };
    }
    async function g(e) {
      var t = _.parse(e);
      if (t.error)
        throw (
          o("WALogger").ERROR(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "Parsing Error: ",
                "",
              ])),
            t.error.toString(),
          ),
          t.error
        );
      var n = t.success,
        a = o("WAWap").wap("ack", {
          to: o("WAWebCommsWapMd").USER_JID(n.user),
          id: o("WAWap").CUSTOM_STRING(n.stanzaId),
          class: "notification",
        }),
        i = n.user.isLid()
          ? o("WAWebLidMigrationUtils").toPn(n.user)
          : n.lidUser,
        l = [n.user, i].filter(Boolean),
        s = o(
          "WAWebOfflineHandler",
        ).OfflineMessageHandler.isResumeFromRestartComplete();
      if (
        (n.lidUser != null &&
          (await o("WAWebDBCreateLidPnMappings").createLidPnMappings({
            mappings: [{ lid: n.lidUser, pn: n.user }],
            write: o("WAWebLidPnMappingWrite").toLidPnMappingWrite(s),
            learningSource: "device-notification",
          })),
        !s)
      )
        return (
          l.forEach(function (e) {
            return o(
              "WAWebOfflineDeviceCache",
            ).OfflinePendingDeviceCache.addOfflinePendingDevice(
              e.toString(),
              a,
            );
          }),
          "NO_ACK"
        );
      var p = { deviceList: n.deviceList, keyIndex: n.keyIndex },
        f = 0;
      return (
        await Promise.all(
          l.map(async function (e) {
            if (
              o(
                "WAWebOfflineHandler",
              ).OfflineMessageHandler.isResumeOnSocketDisconnectInProgress()
            ) {
              await o("WAWebApiPendingDeviceSync").addUserToPendingDeviceSync([
                e.toString(),
              ]);
              return;
            }
            e: {
              if (n.type === "add" || n.type === "remove") {
                try {
                  await o(
                    "WAWebAdvDeviceUpdateNotificationApi",
                  ).handleADVDeviceNotification({
                    wid: e,
                    devices: p,
                    type: n.type,
                  });
                } catch (e) {
                  o("WALogger").WARN(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "handleDevicesNotification - ",
                        " error: ",
                        "",
                      ])),
                    n.type,
                    e,
                  );
                }
                break e;
              }
              if (n.type === "update") {
                var t = await o("WAWebApiContact").getContactRecordByHash(
                  r("nullthrows")(n.hash),
                );
                if (t == null) {
                  f++;
                  return;
                }
                try {
                  await o("WAWebSyncDeviceAdvDeviceListJob").syncDeviceListJob(
                    [o("WAWebWidFactory").createWid(t.id)],
                    "notification",
                    null,
                  );
                } catch (e) {
                  o("WALogger").WARN(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "handleDevicesNotification - update error: ",
                        "",
                      ])),
                    e,
                  );
                }
                break e;
              }
              throw Error(
                "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                  n.type,
              );
            }
          }),
        ),
        f > 0 &&
          o("WALogger").WARN(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "[devices] missing side contact hash for ",
                " updates",
              ])),
            f,
          ),
        a
      );
    }
    l.handleDevicesNotification = g;
  },
  98,
);
