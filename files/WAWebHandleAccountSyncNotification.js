__d(
  "WAWebHandleAccountSyncNotification",
  [
    "Promise",
    "WADeprecatedWapParser",
    "WAJids",
    "WALogger",
    "WATimeUtils",
    "WAWap",
    "WAWebAccountSyncJob",
    "WAWebAdvHandlerApi",
    "WAWebApiPendingDeviceSync",
    "WAWebBackendEventBus",
    "WAWebBizBroadcastDeviceRemovalCleanup",
    "WAWebBizCoexUtils",
    "WAWebCommsWapMd",
    "WAWebContactSyncLogger",
    "WAWebFetchAndUpdateBlocklistJob",
    "WAWebGetDisappearingModeJob",
    "WAWebJidToWid",
    "WAWebOfflineDeviceCache",
    "WAWebOfflineHandler",
    "WAWebPDFNTypes",
    "WAWebSetUsernameJob",
    "WAWebTextStatusAccountSyncNotification",
    "WAWebUpdateDisappearingModeForContact",
    "WAWebUserDisclosureCollection",
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsMultiDevice",
    "WAWebUserUtils",
    "WAWebUsernameGatingUtils",
    "WAWebUsernameTypes",
    "WAWebWidFactory",
    "WAWebWorkerSafeBackendApi",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    function d(e) {
      var t,
        n = e.maybeChild("key-index-list"),
        r =
          n == null
            ? null
            : {
                ts: n.attrTime("ts"),
                signedKeyIndexBytes: n.hasContent() ? n.contentBytes() : null,
                expectedTs:
                  (t = n.maybeAttrTime("expected_ts")) != null ? t : void 0,
              },
        a = e.mapChildrenWithTag("device", function (t) {
          var n,
            r = t.attrDeviceJid("jid");
          if (
            (r != null && r.endsWith("@hosted")) ||
            (r != null && r.endsWith("@hosted.lid"))
          ) {
            var a,
              i =
                (a = o("WAWebWidFactory").createHostedDeviceWidOrThrow(r)) ==
                null
                  ? void 0
                  : a.device;
            if (i == null || i !== o("WAWebBizCoexUtils").HOSTED_DEVICE_ID)
              throw e.createParseError("invalid hosted device jid");
            return {
              id: i,
              keyIndex: t.maybeAttrInt("key-index"),
              isHosted: !0,
            };
          }
          return {
            id:
              (n = o("WAWebWidFactory").createWid(
                t.attrDeviceJid("jid"),
              ).device) != null
                ? n
                : o("WAJids").DEFAULT_DEVICE_ID,
            keyIndex: t.maybeAttrInt("key-index"),
          };
        });
      return a.length === 0 ? null : { deviceList: a, keyIndex: r };
    }
    var m = new (r("WADeprecatedWapParser"))(
      "incomingAccountSyncNotification",
      function (e) {
        e.assertTag("notification");
        var t = {
          stanzaId: e.attrString("id"),
          ts: e.attrTime("t"),
          from: o("WAWebJidToWid").deviceJidToDeviceWid(
            e.attrDeviceJid("from"),
          ),
        };
        if (e.hasChild("status")) {
          var n = e.child("status"),
            r = n.hasAttr("action") ? n.attrString("action") : void 0;
          return babelHelpers.extends(
            {
              type: o("WAWebAccountSyncJob").AccountSyncType.STATUS,
              action: r,
            },
            t,
          );
        } else if (e.hasChild("text_status")) {
          var a = e.child("text_status"),
            i = a.hasAttr("action") ? a.attrString("action") : void 0,
            l = a.hasAttr("text") ? a.attrString("text") : void 0,
            s = a.hasChild("emoji") ? a.child("emoji") : void 0,
            u =
              s != null && s.hasAttr("content")
                ? s == null
                  ? void 0
                  : s.attrString("content")
                : void 0,
            c = a.hasAttr("ephemeral_duration_sec")
              ? a.attrInt("ephemeral_duration_sec")
              : void 0,
            m = a.hasAttr("last_update_time")
              ? a.attrString("last_update_time")
              : void 0;
          return babelHelpers.extends(
            {
              type: o("WAWebAccountSyncJob").AccountSyncType.TEXT_STATUS,
              action: i,
              text: l,
              emoji: u,
              ephemeralDurationSeconds: c,
              lastUpdateTime: m,
            },
            t,
          );
        } else {
          if (e.hasChild("privacy"))
            return babelHelpers.extends(
              { type: o("WAWebAccountSyncJob").AccountSyncType.PRIVACY },
              t,
            );
          if (e.hasChild("devices"))
            return babelHelpers.extends(
              {
                type: o("WAWebAccountSyncJob").AccountSyncType.DEVICES,
                devices: d(e.child("devices")),
              },
              t,
            );
          if (e.hasChild("blocklist")) {
            var p = e.child("blocklist"),
              _ = [];
            return (
              o("WAWebUsernameGatingUtils").usernameDisplayedEnabled() &&
                p.forEachChildWithTag("item", function (e) {
                  var t = e.maybeAttrString("username"),
                    n = o("WAWebJidToWid").userJidToUserWid(
                      e.attrUserJid("jid"),
                    );
                  t != null &&
                    _.push({
                      userId: n,
                      username: o("WAWebUsernameTypes").asUsername(t),
                    });
                }),
              babelHelpers.extends(
                {
                  type: o("WAWebAccountSyncJob").AccountSyncType.BLOCKLIST,
                  usernames: _,
                },
                t,
              )
            );
          } else {
            if (e.hasChild("picture"))
              return babelHelpers.extends(
                { type: o("WAWebAccountSyncJob").AccountSyncType.PICTURE },
                t,
              );
            if (e.hasChild("tos")) {
              var f = e.child("tos"),
                g = [];
              return (
                f.forEachChildWithTag("notice", function (e) {
                  var t = e.maybeAttrString("state") !== "false",
                    n = e.attrString("id");
                  g.push({ id: n, state: t });
                }),
                babelHelpers.extends(
                  {
                    type: o("WAWebAccountSyncJob").AccountSyncType.TOS,
                    notices: g,
                  },
                  t,
                )
              );
            } else if (e.hasChild("disappearing_mode")) {
              var h = e.child("disappearing_mode"),
                y,
                C,
                b;
              return (
                h.hasAttr("action")
                  ? (y = h.attrString("action"))
                  : ((C = h.attrInt("duration")), (b = h.attrInt("t"))),
                babelHelpers.extends({}, t, {
                  type: o("WAWebAccountSyncJob").AccountSyncType
                    .DISAPPEARING_MODE,
                  action: y,
                  disappearingModeDuration: C,
                  disappearingModeSettingTimestamp: b,
                })
              );
            } else if (e.hasChild("notice")) {
              var v = e.child("notice");
              return babelHelpers.extends(
                {
                  type: o("WAWebAccountSyncJob").AccountSyncType.NOTICE,
                  noticeId: v.attrString("id"),
                  noticeStage: v.maybeAttrString("stage"),
                  noticeVersion: v.maybeAttrString("version"),
                  noticeTimestamp: v.attrInt("t"),
                },
                t,
              );
            } else if (e.hasChild("user")) {
              var S = e.child("user"),
                R = S.maybeAttrString("state") === "AI available";
              return babelHelpers.extends(
                {
                  type: o("WAWebAccountSyncJob").AccountSyncType.USER,
                  isAiAvailable: R,
                },
                t,
              );
            } else if (e.hasChild("biz_opt_out_list")) {
              var L = e.child("biz_opt_out_list"),
                E = L.mapChildren(function (e) {
                  return {
                    action: e.attrString("action"),
                    biz_jid: e.attrUserJid("biz_jid"),
                  };
                }),
                k = L.maybeAttrString("dhash"),
                I = L.maybeAttrString("prev_dhash");
              return babelHelpers.extends(
                {
                  type: o("WAWebAccountSyncJob").AccountSyncType.OPTOUTLIST,
                  list: E,
                  dhash: k,
                  prevDhash: I,
                },
                t,
              );
            }
          }
        }
        throw e.createParseError("notification type not supported");
      },
    );
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.devices,
            r = t.wid,
            a = o("WAWebUserUtils").getMeLidUserOrThrow(),
            i = o("WAWebUserPrefsMeUser").getMaybeMePnUser();
          if (!o("WAWebUserUtils").isMeAccount(r))
            return (
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "wid-is-not-self",
                    ])),
                )
                .sendLogs("wid-is-not-self"),
              [{ wid: r, devices: n }]
            );
          var l = [{ wid: a, devices: n }];
          return (i != null && l.push({ wid: i, devices: n }), l);
        })),
        _.apply(this, arguments)
      );
    }
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = m.parse(e);
          if (t.error)
            return (
              o("WALogger").ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "Parsing Error: ",
                    "",
                  ])),
                t.error.toString(),
              ),
              (c || (c = n("Promise"))).reject(t.error)
            );
          var r = t.success,
            a = o("WAWap").wap("ack", {
              id: o("WAWap").CUSTOM_STRING(r.stanzaId),
              to: o("WAWebCommsWapMd").JID(r.from),
              class: "notification",
              type: "account_sync",
            });
          e: {
            if (r.type === o("WAWebAccountSyncJob").AccountSyncType.STATUS)
              break e;
            if (
              r.type === o("WAWebAccountSyncJob").AccountSyncType.TEXT_STATUS
            ) {
              var i = o(
                "WAWebTextStatusAccountSyncNotification",
              ).applyTextStatusAccountSync(r);
              i != null && (yield i);
              break e;
            }
            if (r.type === o("WAWebAccountSyncJob").AccountSyncType.DEVICES)
              return h(r, a);
            if (r.type === o("WAWebAccountSyncJob").AccountSyncType.PICTURE) {
              yield o("WAWebAccountSyncJob").getAndUpdateProfilePicture();
              break e;
            }
            if (r.type === o("WAWebAccountSyncJob").AccountSyncType.PRIVACY) {
              o(
                "WAWebBackendEventBus",
              ).BackendEventBus.triggerAccountSyncForPrivacy(
                yield o("WAWebAccountSyncJob").forceUpdatePrivacySettings(),
              );
              break e;
            }
            if (r.type === o("WAWebAccountSyncJob").AccountSyncType.BLOCKLIST) {
              (o("WAWebUsernameGatingUtils").usernameDisplayedEnabled() &&
                r.usernames != null &&
                (yield o("WAWebSetUsernameJob").setUsernamesJob(r.usernames)),
                o("WAWebFetchAndUpdateBlocklistJob").fetchAndUpdateBlocklist(
                  "notification",
                ));
              break e;
            }
            if (
              r.type === o("WAWebAccountSyncJob").AccountSyncType.OPTOUTLIST
            ) {
              yield C(r);
              break e;
            }
            if (r.type === o("WAWebAccountSyncJob").AccountSyncType.TOS) {
              r.notices &&
                o("WAWebAccountSyncJob").updateTosStateFromAccountSync(
                  r.notices,
                );
              break e;
            }
            if (
              r.type ===
              o("WAWebAccountSyncJob").AccountSyncType.DISAPPEARING_MODE
            ) {
              yield R(r);
              break e;
            }
            if (r.type === o("WAWebAccountSyncJob").AccountSyncType.NOTICE) {
              yield v(r);
              break e;
            }
            if (r.type === o("WAWebAccountSyncJob").AccountSyncType.USER) {
              r.isAiAvailable === !0 &&
                o("WALogger").LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "Receieved account sync notification for Ai Available",
                    ])),
                );
              break e;
            }
            throw Error(
              "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                r.type,
            );
          }
          return a;
        })),
        g.apply(this, arguments)
      );
    }
    function h(e, t) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (
            o(
              "WAWebOfflineHandler",
            ).OfflineMessageHandler.isResumeFromRestartComplete()
          ) {
            if (
              o(
                "WAWebOfflineHandler",
              ).OfflineMessageHandler.isResumeOnSocketDisconnectInProgress()
            )
              return (
                yield o("WAWebApiPendingDeviceSync").addUserToPendingDeviceSync(
                  [e.from.toString()],
                ),
                t
              );
          } else
            return (
              o(
                "WAWebOfflineDeviceCache",
              ).OfflinePendingDeviceCache.addOfflinePendingDevice(
                e.from.toString(),
                t,
              ),
              "NO_ACK"
            );
          var n = e.devices;
          if (n) {
            var r,
              a,
              i = yield p({
                wid: o("WAWebWidFactory").asUserWidOrThrow(e.from),
                devices: n,
              });
            yield o("WAWebAdvHandlerApi").handleADVDeviceSyncResult(i);
            var l = new Set(
              (r =
                (a = n.deviceList) == null
                  ? void 0
                  : a.map(function (e) {
                      return e.id;
                    })) != null
                ? r
                : [],
            );
            yield o(
              "WAWebBizBroadcastDeviceRemovalCleanup",
            ).cleanupCampaignsWithInvalidDevices(l);
          } else yield o("WAWebAccountSyncJob").getDevices("notification");
          return t;
        })),
        y.apply(this, arguments)
      );
    }
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebUserPrefsMultiDevice").getOptOutListHash(),
            r = e.dhash,
            a = e.list,
            i = e.prevDhash;
          if (t !== i) {
            o("WAWebWorkerSafeBackendApi").workerSafeFireAndForget(
              "updateOptOutList",
            );
            return;
          } else
            r != null &&
              (a == null ||
                a.forEach(
                  (function () {
                    var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                      function* (e) {
                        var t = e.action,
                          n = e.biz_jid,
                          r = t === "block",
                          a = o("WAWebJidToWid").userJidToUserWid(n);
                        yield o(
                          "WAWebWorkerSafeBackendApi",
                        ).workerSafeFireAndForget(
                          "updateOptOutListModelInCollection",
                          { targetWid: a, isBlocked: r },
                        );
                      },
                    );
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })(),
                ),
              yield o("WAWebUserPrefsMultiDevice").setOptOutlistHash(r));
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
          var t = e.noticeId,
            n = e.noticeStage,
            r = e.noticeTimestamp,
            a = e.noticeVersion;
          if (t != null && t !== "" && n != null && a != null && r != null) {
            var i = n === o("WAWebPDFNTypes").NOTICE_STAGES.PDFN_ACCEPTED;
            (yield o(
              "WAWebUserDisclosureCollection",
            ).UserDisclosureCollection.updateNoticeStage({
              id: t,
              accepted: i,
              policyVersion: a,
            }),
              o("WAWebAccountSyncJob").updateTosStateFromAccountSync([
                {
                  id: t,
                  state: i,
                  timestamp: o("WATimeUtils").castToUnixTime(r),
                },
              ]));
          }
        })),
        S.apply(this, arguments)
      );
    }
    function R(e) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.action,
            n = e.from,
            r = e.disappearingModeDuration,
            a = e.disappearingModeSettingTimestamp;
          if (t === "modify") {
            var i = yield o("WAWebGetDisappearingModeJob").getDisappearingMode(
              n,
              o("WAWebContactSyncLogger").SYNC_REQUEST_ORIGIN.DM_FORCE_REFRESH,
            );
            i.error == null &&
              i.disappearingModeDuration != null &&
              i.disappearingModeSettingTimestamp != null &&
              ((r = i.disappearingModeDuration),
              (a = i.disappearingModeSettingTimestamp));
          }
          r != null &&
            a != null &&
            (yield o(
              "WAWebUpdateDisappearingModeForContact",
            ).updateDisappearingModeForContact({
              contactId: n,
              newDuration: r,
              newSettingTimestamp: a,
            }));
        })),
        L.apply(this, arguments)
      );
    }
    l.handleAccountSyncNotification = f;
  },
  98,
);
