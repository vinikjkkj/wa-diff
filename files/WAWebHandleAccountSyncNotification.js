__d(
  "WAWebHandleAccountSyncNotification",
  [
    "Promise",
    "WADeprecatedWapParser",
    "WAJids",
    "WALogger",
    "WATimeUtils",
    "WAWap",
    "WAWebABProps",
    "WAWebAccountSyncJob",
    "WAWebAdvHandlerApi",
    "WAWebApiPendingDeviceSync",
    "WAWebBackendApi",
    "WAWebBackendEventBus",
    "WAWebBizBroadcastDeviceRemovalCleanup",
    "WAWebBizCoexGatingUtils",
    "WAWebBizCoexUtils",
    "WAWebCommsWapMd",
    "WAWebContactSyncLogger",
    "WAWebContactTextStatusBridge",
    "WAWebGetAboutQueryJob",
    "WAWebGetDisappearingModeJob",
    "WAWebJidToWid",
    "WAWebMexFetchTextStatusListJob",
    "WAWebMexUsersGetAboutStatus",
    "WAWebOfflineDeviceCache",
    "WAWebOfflineHandler",
    "WAWebPDFNTypes",
    "WAWebQueryBlockListJob",
    "WAWebSetUsernameJob",
    "WAWebTextStatusGatingUtils",
    "WAWebUpdateDisappearingModeForContact",
    "WAWebUpdateTextStatusForContact",
    "WAWebUserDisclosureCollection",
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsMultiDevice",
    "WAWebUsernameGatingUtils",
    "WAWebWidFactory",
    "WAWebWorkerSafeBackendApi",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m = function (t) {
        var e,
          n = t.maybeChild("key-index-list"),
          r =
            n == null
              ? null
              : {
                  ts: n.attrTime("ts"),
                  signedKeyIndexBytes: n.hasContent() ? n.contentBytes() : null,
                  expectedTs:
                    (e = n.maybeAttrTime("expected_ts")) != null ? e : void 0,
                },
          a = t.mapChildrenWithTag("device", function (e) {
            var n,
              r = e.attrDeviceJid("jid");
            if (
              o("WAWebBizCoexGatingUtils").bizHostedDevicesEnabled() &&
              ((r != null && r.endsWith("@hosted")) ||
                (r != null && r.endsWith("@hosted.lid")))
            ) {
              var a,
                i =
                  (a = o("WAWebWidFactory").createHostedDeviceWidOrThrow(r)) ==
                  null
                    ? void 0
                    : a.device;
              if (i == null || i !== o("WAWebBizCoexUtils").HOSTED_DEVICE_ID)
                throw t.createParseError("invalid hosted device jid");
              return {
                id: i,
                keyIndex: e.maybeAttrInt("key-index"),
                isHosted: !0,
              };
            }
            return {
              id:
                (n = o("WAWebWidFactory").createWid(
                  e.attrDeviceJid("jid"),
                ).device) != null
                  ? n
                  : o("WAJids").DEFAULT_DEVICE_ID,
              keyIndex: e.maybeAttrInt("key-index"),
            };
          });
        return (
          o("WAWebBizCoexGatingUtils").bizHostedDevicesEnabled() ||
            (a = a.filter(function (e) {
              return e.id !== o("WAWebBizCoexUtils").HOSTED_DEVICE_ID;
            })),
          a.length === 0 ? null : { deviceList: a, keyIndex: r }
        );
      },
      p = new (r("WADeprecatedWapParser"))(
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
              d = a.hasAttr("last_update_time")
                ? a.attrString("last_update_time")
                : void 0;
            return babelHelpers.extends(
              {
                type: o("WAWebAccountSyncJob").AccountSyncType.TEXT_STATUS,
                action: i,
                text: l,
                emoji: u,
                ephemeralDurationSeconds: c,
                lastUpdateTime: d,
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
                  devices: m(e.child("devices")),
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
                    t != null && _.push({ userId: n, username: t });
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
    function _() {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var t = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
            r;
          if (
            o("WAWebABProps").getABPropConfigValue("mex_usync_about_status")
          ) {
            var a = yield o(
                "WAWebMexUsersGetAboutStatus",
              ).getMexUsersAboutStatus({ wid: t, tcToken: null }),
              i = a.state,
              l = a.status;
            i == null && (r = l);
          } else {
            var s = yield o("WAWebGetAboutQueryJob").getAbout({
              wid: t,
              tcToken: null,
            });
            if (s.error)
              return (
                o("WALogger").WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "getStatus failed for ",
                      ": failed ",
                      " : ",
                      "",
                    ])),
                  t,
                  s.error.errorCode,
                  s.error.errorText,
                ),
                (d || (d = n("Promise"))).reject(s.error.errorText)
              );
            r = s.status;
          }
          r !== "" &&
            (yield o("WAWebBackendApi").frontendSendAndReceive("setMyStatus", {
              status: r,
            }));
        })),
        f.apply(this, arguments)
      );
    }
    function g() {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = o("WAWebUserPrefsMeUser").getMeDevicePnOrThrow_DO_NOT_USE(),
            t = yield o("WAWebContactTextStatusBridge").getTextStatus(e);
          if (t.error) return (d || (d = n("Promise"))).reject(t.error.message);
          var r = t.emoji,
            a = t.ephemeralDurationSeconds,
            i = t.id,
            l = t.lastUpdateTime,
            s = t.text,
            u = o(
              "WAWebMexFetchTextStatusListJob",
            ).parseTextStatusServerResponse({
              text: s,
              emoji: r != null ? { content: r } : null,
              ephemeral_duration_sec: a,
              last_update_time: l.toString(),
              jid: i.toJid(),
            });
          return o(
            "WAWebUpdateTextStatusForContact",
          ).updateTextStatusForContact(
            u.id,
            u.textStatusString,
            u.textStatusEmoji,
            u.textStatusEphemeralDuration,
            u.textStatusLastUpdateTime,
          );
        })),
        h.apply(this, arguments)
      );
    }
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.devices,
            n = e.wid,
            r = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(),
            a = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE();
          return o("WAWebUserPrefsMeUser").isMeAccount(n)
            ? [
                { wid: a, devices: t },
                { wid: r, devices: t },
              ]
            : (o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "wid-is-not-self",
                    ])),
                )
                .sendLogs("wid-is-not-self"),
              [{ wid: n, devices: t }]);
        })),
        C.apply(this, arguments)
      );
    }
    function b(e) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = p.parse(e);
          if (t.error)
            return (
              o("WALogger").ERROR(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "Parsing Error: ",
                    "",
                  ])),
                t.error.toString(),
              ),
              (d || (d = n("Promise"))).reject(t.error)
            );
          var r = t.success,
            a = o("WAWap").wap("ack", {
              id: o("WAWap").CUSTOM_STRING(r.stanzaId),
              to: o("WAWebCommsWapMd").JID(r.from),
              class: "notification",
              type: "account_sync",
            });
          switch (r.type) {
            case o("WAWebAccountSyncJob").AccountSyncType.STATUS:
              yield _();
              break;
            case o("WAWebAccountSyncJob").AccountSyncType.TEXT_STATUS:
              if (!o("WAWebTextStatusGatingUtils").receiveTextStatusEnabled())
                break;
              if (r.action === "modify") yield g();
              else {
                var i = r.emoji,
                  l = r.ephemeralDurationSeconds,
                  s = r.lastUpdateTime,
                  m = r.text,
                  f = o("WAWebWidFactory").asUserWidOrThrow(r.from);
                yield o(
                  "WAWebUpdateTextStatusForContact",
                ).updateTextStatusForContact(
                  f,
                  m,
                  i,
                  l,
                  s != null ? Number(s) : void 0,
                );
              }
              break;
            case o("WAWebAccountSyncJob").AccountSyncType.DEVICES: {
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
                    yield o(
                      "WAWebApiPendingDeviceSync",
                    ).addUserToPendingDeviceSync([r.from.toString()]),
                    a
                  );
              } else
                return (
                  o(
                    "WAWebOfflineDeviceCache",
                  ).OfflinePendingDeviceCache.addOfflinePendingDevice(
                    r.from.toString(),
                    a,
                  ),
                  "NO_ACK"
                );
              var h = r.devices;
              if (h) {
                var C,
                  b,
                  v = yield y({
                    wid: o("WAWebWidFactory").asUserWidOrThrow(r.from),
                    devices: h,
                  });
                yield o("WAWebAdvHandlerApi").handleADVDeviceSyncResult(v);
                var S = new Set(
                  (C =
                    (b = h.deviceList) == null
                      ? void 0
                      : b.map(function (e) {
                          return e.id;
                        })) != null
                    ? C
                    : [],
                );
                yield o(
                  "WAWebBizBroadcastDeviceRemovalCleanup",
                ).cleanupCampaignsWithInvalidDevices(S);
              } else yield o("WAWebAccountSyncJob").getDevices("notification");
              break;
            }
            case o("WAWebAccountSyncJob").AccountSyncType.PICTURE:
              yield o("WAWebAccountSyncJob").getAndUpdateProfilePicture();
              break;
            case o("WAWebAccountSyncJob").AccountSyncType.PRIVACY:
              o(
                "WAWebBackendEventBus",
              ).BackendEventBus.triggerAccountSyncForPrivacy(
                yield o("WAWebAccountSyncJob").updatePrivacySettings(),
              );
              break;
            case o("WAWebAccountSyncJob").AccountSyncType.BLOCKLIST:
              (o("WAWebUsernameGatingUtils").usernameDisplayedEnabled() &&
                r.usernames != null &&
                (yield o("WAWebSetUsernameJob").setUsernamesJob(r.usernames)),
                o("WAWebQueryBlockListJob").fetchAndUpdateBlocklist(
                  "notification",
                ));
              break;
            case o("WAWebAccountSyncJob").AccountSyncType.OPTOUTLIST: {
              var R = o("WAWebUserPrefsMultiDevice").getOptOutListHash(),
                L = r.dhash,
                E = r.list,
                k = r.prevDhash;
              if (R !== k) {
                o("WAWebWorkerSafeBackendApi").workerSafeFireAndForget(
                  "updateOptOutList",
                );
                break;
              } else
                L != null &&
                  (E == null ||
                    E.forEach(
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
                  yield o("WAWebUserPrefsMultiDevice").setOptOutlistHash(L));
              break;
            }
            case o("WAWebAccountSyncJob").AccountSyncType.TOS:
              r.notices &&
                o("WAWebAccountSyncJob").updateTosStateFromAccountSync(
                  r.notices,
                );
              break;
            case o("WAWebAccountSyncJob").AccountSyncType.DISAPPEARING_MODE: {
              var I = r.action,
                T = r.from,
                D = r.disappearingModeDuration,
                x = r.disappearingModeSettingTimestamp;
              if (I === "modify") {
                var $ = yield o(
                  "WAWebGetDisappearingModeJob",
                ).getDisappearingMode(
                  T,
                  o("WAWebContactSyncLogger").SYNC_REQUEST_ORIGIN
                    .DM_FORCE_REFRESH,
                );
                $.error == null &&
                  $.disappearingModeDuration != null &&
                  $.disappearingModeSettingTimestamp != null &&
                  ((D = $.disappearingModeDuration),
                  (x = $.disappearingModeSettingTimestamp));
              }
              D != null &&
                x != null &&
                (yield o(
                  "WAWebUpdateDisappearingModeForContact",
                ).updateDisappearingModeForContact({
                  contactId: T,
                  newDuration: D,
                  newSettingTimestamp: x,
                }));
              break;
            }
            case o("WAWebAccountSyncJob").AccountSyncType.NOTICE: {
              var P = r.noticeId,
                N = r.noticeStage,
                M = r.noticeTimestamp,
                w = r.noticeVersion;
              if (
                P != null &&
                P !== "" &&
                N != null &&
                w != null &&
                M != null
              ) {
                var A = N === o("WAWebPDFNTypes").NOTICE_STAGES.PDFN_ACCEPTED;
                (yield o(
                  "WAWebUserDisclosureCollection",
                ).UserDisclosureCollection.updateNoticeStage({
                  id: P,
                  accepted: A,
                  policyVersion: w,
                }),
                  o("WAWebAccountSyncJob").updateTosStateFromAccountSync([
                    {
                      id: P,
                      state: A,
                      timestamp: o("WATimeUtils").castToUnixTime(M),
                    },
                  ]));
              }
              break;
            }
            case o("WAWebAccountSyncJob").AccountSyncType.USER: {
              r.isAiAvailable === !0 &&
                o("WALogger").LOG(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "Receieved account sync notification for Ai Available",
                    ])),
                );
              break;
            }
          }
          return a;
        })),
        v.apply(this, arguments)
      );
    }
    ((l.getAndUpdateStatus = _), (l.handleAccountSyncNotification = b));
  },
  98,
);
