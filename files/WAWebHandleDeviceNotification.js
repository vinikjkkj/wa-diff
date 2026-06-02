__d(
  "WAWebHandleDeviceNotification",
  [
    "WADeprecatedWapParser",
    "WAJids",
    "WALogger",
    "WAWap",
    "WAWebAdvHandlerApi",
    "WAWebApiContact",
    "WAWebApiPendingDeviceSync",
    "WAWebCommsWapMd",
    "WAWebDBCreateLidPnMappings",
    "WAWebJidToWid",
    "WAWebLidMigrationUtils",
    "WAWebOfflineDeviceCache",
    "WAWebOfflineHandler",
    "WAWebSyncDeviceAdvDeviceListJob",
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
      p,
      _,
      f = { add: "add", remove: "remove", update: "update" },
      g = new (r("WADeprecatedWapParser"))(
        "incomingDevicesNotification",
        function (t) {
          (t.assertTag("notification"),
            t.assertTag("notification"),
            t.assertAttr("type", "devices"));
          var n,
            r,
            a,
            i = [];
          if (t.hasChild("remove")) ((r = f.remove), (n = t.child("remove")));
          else if (t.hasChild("add")) ((r = f.add), (n = t.child("add")));
          else if (t.hasChild("update"))
            ((r = f.update), (n = t.child("update")));
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
          if (r === f.add || r === f.remove) {
            var l = n.maybeChild("key-index-list");
            if (!l)
              throw t.createParseError(
                "key index node is required to handle device add or remove notification",
              );
            var u = l.attrTime("ts");
            if (r === f.remove && !u)
              throw t.createParseError(
                "timestamp is required to handle device remove notification",
              );
            a = {
              ts: u,
              signedKeyIndexBytes: r === f.add ? l.contentBytes() : null,
            };
            var c = n.child("device"),
              d = o("WAJids").extractDeviceId(c.attrDeviceJid("jid")),
              m = c.hasAttr("key-index") ? c.attrInt("key-index") : null;
            if (c.hasAttr("lid")) {
              var p = o("WAJids").extractDeviceId(c.attrDeviceJid("lid"));
              if (p !== d)
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
            i = [{ id: d, keyIndex: m }];
          }
          return {
            type: r,
            stanzaId: t.attrString("id"),
            hash: r === f.update ? n.attrString("hash") : null,
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
    async function h(e) {
      var t = g.parse(e);
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
        i = {
          wid: n.user,
          devices: { deviceList: n.deviceList, keyIndex: n.keyIndex },
          type: n.type,
          hash: n.hash,
        },
        l = n.user.isLid()
          ? o("WAWebLidMigrationUtils").toPn(n.user)
          : n.lidUser,
        s = null;
      l != null &&
        (s = {
          wid: l,
          devices: { deviceList: n.deviceList, keyIndex: n.keyIndex },
          type: n.type,
          hash: n.hash,
        });
      var h = [i, s].filter(Boolean),
        y = [];
      if (
        (n.lidUser != null &&
          n.user != null &&
          y.push({ lid: n.lidUser, pn: n.user }),
        !o(
          "WAWebOfflineHandler",
        ).OfflineMessageHandler.isResumeFromRestartComplete())
      )
        return (
          y.length > 0 &&
            (await o("WAWebDBCreateLidPnMappings").createLidPnMappings({
              mappings: y,
              flushImmediately: !1,
              learningSource: "other",
            })),
          h.forEach(function (e) {
            var t = e.wid;
            return o(
              "WAWebOfflineDeviceCache",
            ).OfflinePendingDeviceCache.addOfflinePendingDevice(
              t.toString(),
              a,
            );
          }),
          "NO_ACK"
        );
      y.length > 0 &&
        (await o("WAWebDBCreateLidPnMappings").createLidPnMappings({
          mappings: y,
          flushImmediately: !0,
          learningSource: "other",
        }));
      var C = 0,
        b = 0;
      return (
        await Promise.all(
          h.map(async function (e) {
            var t = e.devices,
              a = e.hash,
              i = e.type,
              l = e.wid;
            if (
              o(
                "WAWebOfflineHandler",
              ).OfflineMessageHandler.isResumeOnSocketDisconnectInProgress()
            )
              await o("WAWebApiPendingDeviceSync").addUserToPendingDeviceSync([
                l.toString(),
              ]);
            else if (n.type === f.add)
              try {
                await o("WAWebAdvHandlerApi").handleADVDeviceNotification({
                  wid: l,
                  devices: t,
                  type: i,
                });
              } catch (e) {
                o("WALogger").WARN(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "handleDevicesNotification - add error: ",
                      "",
                    ])),
                  e,
                );
              }
            else if (n.type === f.remove)
              try {
                await o("WAWebAdvHandlerApi").handleADVDeviceNotification({
                  wid: l,
                  devices: t,
                  type: i,
                });
              } catch (e) {
                o("WALogger").WARN(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "handleDevicesNotification - remove error: ",
                      "",
                    ])),
                  e,
                );
              }
            else if (n.type === f.update) {
              var s = await o("WAWebApiContact").getContactRecordByHash(
                r("nullthrows")(a),
              );
              if (s == null) C++;
              else
                try {
                  await o("WAWebSyncDeviceAdvDeviceListJob").syncDeviceListJob(
                    [o("WAWebWidFactory").createWid(s.id)],
                    "notification",
                    null,
                  );
                } catch (e) {
                  o("WALogger").WARN(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "handleDevicesNotification - update error: ",
                        "",
                      ])),
                    e,
                  );
                }
            } else b++;
          }),
        ),
        C > 0 &&
          o("WALogger").WARN(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "[devices] missing side contact hash for ",
                " updates",
              ])),
            C,
          ),
        b > 0 &&
          o("WALogger").WARN(
            _ ||
              (_ = babelHelpers.taggedTemplateLiteralLoose([
                "handleDevicesNotification - ",
                " unknown notification types: ",
                "",
              ])),
            b,
            n.type,
          ),
        a
      );
    }
    l.handleDevicesNotification = h;
  },
  98,
);
