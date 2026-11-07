__d(
  "WAWebHandleDeviceNotification",
  [
    "Promise",
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
    "WAWebOfflineDeviceCache",
    "WAWebOfflineHandler",
    "WAWebSyncDeviceAdvDeviceListJob",
    "WAWebWid",
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
      _ = { add: "add", remove: "remove", update: "update" },
      f = new (r("WADeprecatedWapParser"))(
        "incomingDevicesNotification",
        function (t) {
          (t.assertTag("notification"),
            t.assertTag("notification"),
            t.assertAttr("type", "devices"));
          var n,
            r,
            a,
            i = [];
          if (t.hasChild("remove")) ((r = _.remove), (n = t.child("remove")));
          else if (t.hasChild("add")) ((r = _.add), (n = t.child("add")));
          else if (t.hasChild("update"))
            ((r = _.update), (n = t.child("update")));
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
          if (r === _.add || r === _.remove) {
            var l = n.maybeChild("key-index-list");
            if (!l)
              throw t.createParseError(
                "key index node is required to handle device add or remove notification",
              );
            var u = l.attrTime("ts");
            if (r === _.remove && !u)
              throw t.createParseError(
                "timestamp is required to handle device remove notification",
              );
            a = {
              ts: u,
              signedKeyIndexBytes: r === _.add ? l.contentBytes() : null,
            };
            var c = n.child("device"),
              d = c.attrDeviceJid("jid"),
              m = o("WAJids").extractDeviceId(d),
              p = c.hasAttr("key-index") ? c.attrInt("key-index") : null;
            if (c.hasAttr("lid")) {
              var f = o("WAJids").extractDeviceId(c.attrDeviceJid("lid"));
              if (f !== m)
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
            i = [g(d, m, p)];
          }
          return {
            type: r,
            stanzaId: t.attrString("id"),
            hash: r === _.update ? n.attrString("hash") : null,
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
    function g(e, t, n) {
      return r("WAWebWid").isHosted(e)
        ? { id: t, keyIndex: n, isHosted: !0 }
        : { id: t, keyIndex: n };
    }
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = f.parse(e);
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
            l = a.user.isLid()
              ? o("WAWebLidMigrationUtils").toPn(a.user)
              : a.lidUser,
            s = [a.user, l].filter(Boolean),
            _ = o(
              "WAWebOfflineHandler",
            ).OfflineMessageHandler.isResumeFromRestartComplete();
          if (
            (a.lidUser != null &&
              (yield o("WAWebDBCreateLidPnMappings").createLidPnMappings({
                mappings: [{ lid: a.lidUser, pn: a.user }],
                flushImmediately: _,
                learningSource: "device-notification",
              })),
            !_)
          )
            return (
              s.forEach(function (e) {
                return o(
                  "WAWebOfflineDeviceCache",
                ).OfflinePendingDeviceCache.addOfflinePendingDevice(
                  e.toString(),
                  i,
                );
              }),
              "NO_ACK"
            );
          var g = { deviceList: a.deviceList, keyIndex: a.keyIndex },
            h = 0;
          return (
            yield (p || (p = n("Promise"))).all(
              s.map(
                (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (e) {
                      if (
                        o(
                          "WAWebOfflineHandler",
                        ).OfflineMessageHandler.isResumeOnSocketDisconnectInProgress()
                      ) {
                        yield o(
                          "WAWebApiPendingDeviceSync",
                        ).addUserToPendingDeviceSync([e.toString()]);
                        return;
                      }
                      e: {
                        if (a.type === "add" || a.type === "remove") {
                          try {
                            yield o(
                              "WAWebAdvDeviceUpdateNotificationApi",
                            ).handleADVDeviceNotification({
                              wid: e,
                              devices: g,
                              type: a.type,
                            });
                          } catch (e) {
                            o("WALogger").WARN(
                              c ||
                                (c = babelHelpers.taggedTemplateLiteralLoose([
                                  "handleDevicesNotification - ",
                                  " error: ",
                                  "",
                                ])),
                              a.type,
                              e,
                            );
                          }
                          break e;
                        }
                        if (a.type === "update") {
                          var t = yield o(
                            "WAWebApiContact",
                          ).getContactRecordByHash(r("nullthrows")(a.hash));
                          if (t == null) {
                            h++;
                            return;
                          }
                          try {
                            yield o(
                              "WAWebSyncDeviceAdvDeviceListJob",
                            ).syncDeviceListJob(
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
                            a.type,
                        );
                      }
                    },
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              ),
            ),
            h > 0 &&
              o("WALogger").WARN(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[devices] missing side contact hash for ",
                    " updates",
                  ])),
                h,
              ),
            i
          );
        })),
        y.apply(this, arguments)
      );
    }
    l.handleDevicesNotification = h;
  },
  98,
);
