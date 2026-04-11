__d(
  "WAWebHandleDeviceNotification",
  [
    "Promise",
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
    "asyncToGeneratorRuntime",
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
      f,
      g = { add: "add", remove: "remove", update: "update" },
      h = new (r("WADeprecatedWapParser"))(
        "incomingDevicesNotification",
        function (t) {
          (t.assertTag("notification"),
            t.assertTag("notification"),
            t.assertAttr("type", "devices"));
          var n,
            r,
            a,
            i = [];
          if (t.hasChild("remove")) ((r = g.remove), (n = t.child("remove")));
          else if (t.hasChild("add")) ((r = g.add), (n = t.child("add")));
          else if (t.hasChild("update"))
            ((r = g.update), (n = t.child("update")));
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
          if (r === g.add || r === g.remove) {
            var l = n.maybeChild("key-index-list");
            if (!l)
              throw t.createParseError(
                "key index node is required to handle device add or remove notification",
              );
            var u = l.attrTime("ts");
            if (r === g.remove && !u)
              throw t.createParseError(
                "timestamp is required to handle device remove notification",
              );
            a = {
              ts: u,
              signedKeyIndexBytes: r === g.add ? l.contentBytes() : null,
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
            hash: r === g.update ? n.attrString("hash") : null,
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
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = h.parse(e);
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
          var a = t.success,
            i = o("WAWap").wap("ack", {
              to: o("WAWebCommsWapMd").USER_JID(a.user),
              id: o("WAWap").CUSTOM_STRING(a.stanzaId),
              class: "notification",
            }),
            l = {
              wid: a.user,
              devices: { deviceList: a.deviceList, keyIndex: a.keyIndex },
              type: a.type,
              hash: a.hash,
            },
            s = a.user.isLid()
              ? o("WAWebLidMigrationUtils").toPn(a.user)
              : a.lidUser,
            y = null;
          s != null &&
            (y = {
              wid: s,
              devices: { deviceList: a.deviceList, keyIndex: a.keyIndex },
              type: a.type,
              hash: a.hash,
            });
          var C = [l, y].filter(Boolean),
            b = [];
          if (
            (a.lidUser != null &&
              a.user != null &&
              b.push({ lid: a.lidUser, pn: a.user }),
            !o(
              "WAWebOfflineHandler",
            ).OfflineMessageHandler.isResumeFromRestartComplete())
          )
            return (
              b.length > 0 &&
                (yield o("WAWebDBCreateLidPnMappings").createLidPnMappings({
                  mappings: b,
                  flushImmediately: !1,
                  learningSource: "other",
                })),
              C.forEach(function (e) {
                var t = e.wid;
                return o(
                  "WAWebOfflineDeviceCache",
                ).OfflinePendingDeviceCache.addOfflinePendingDevice(
                  t.toString(),
                  i,
                );
              }),
              "NO_ACK"
            );
          b.length > 0 &&
            (yield o("WAWebDBCreateLidPnMappings").createLidPnMappings({
              mappings: b,
              flushImmediately: !0,
              learningSource: "other",
            }));
          var v = 0,
            S = 0;
          return (
            yield (f || (f = n("Promise"))).all(
              C.map(
                (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (e) {
                      var t = e.devices,
                        n = e.hash,
                        i = e.type,
                        l = e.wid;
                      if (
                        o(
                          "WAWebOfflineHandler",
                        ).OfflineMessageHandler.isResumeOnSocketDisconnectInProgress()
                      )
                        yield o(
                          "WAWebApiPendingDeviceSync",
                        ).addUserToPendingDeviceSync([l.toString()]);
                      else if (a.type === g.add)
                        try {
                          yield o(
                            "WAWebAdvHandlerApi",
                          ).handleADVDeviceNotification({
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
                      else if (a.type === g.remove)
                        try {
                          yield o(
                            "WAWebAdvHandlerApi",
                          ).handleADVDeviceNotification({
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
                      else if (a.type === g.update) {
                        var s = yield o(
                          "WAWebApiContact",
                        ).getContactRecordByHash(r("nullthrows")(n));
                        if (s == null) v++;
                        else
                          try {
                            yield o(
                              "WAWebSyncDeviceAdvDeviceListJob",
                            ).syncDeviceListJob(
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
                      } else S++;
                    },
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              ),
            ),
            v > 0 &&
              o("WALogger").WARN(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "[devices] missing side contact hash for ",
                    " updates",
                  ])),
                v,
              ),
            S > 0 &&
              o("WALogger").WARN(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "handleDevicesNotification - ",
                    " unknown notification types: ",
                    "",
                  ])),
                S,
                a.type,
              ),
            i
          );
        })),
        C.apply(this, arguments)
      );
    }
    l.handleDevicesNotification = y;
  },
  98,
);
