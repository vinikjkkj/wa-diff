__d(
  "WAWebEphemeralSyncResponse",
  [
    "WAJobOrchestratorTypes",
    "WALogger",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebBackoff",
    "WAWebChatCollection",
    "WAWebChatEphemerality",
    "WAWebChatGetters",
    "WAWebChatThreadLogging",
    "WAWebCommonMsgUtils",
    "WAWebContactCollection",
    "WAWebDBChatEphemeralExemptionData",
    "WAWebDBEphemeralMessage",
    "WAWebDBUpdateChatTable",
    "WAWebDBUpdateMessageTable",
    "WAWebEphemeralGenerateSystemMessage",
    "WAWebEphemeralIsDurationAllowed",
    "WAWebEphemeralOutOfSyncInfoWamEvent",
    "WAWebEphemeralSyncResponseWAM",
    "WAWebEphemeralityResolver",
    "WAWebEphemeralityTypes",
    "WAWebEphemeralityUtils",
    "WAWebMsgCollection",
    "WAWebMsgEphemerality",
    "WAWebMsgKey",
    "WAWebMsgModel",
    "WAWebMsgType",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebSendMsgRecordAction",
    "WAWebUpdateEphemeralSettingChatAction",
    "WAWebUserPrefsMeUser",
    "WAWebWamEnumEsrFailureReasonType",
    "asyncToGeneratorRuntime",
    "err",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f, g, h, y, C, b, v, S, R, L, E, k, I;
    function T() {
      return o("WAWebABProps").getABPropConfigValue("ephemeral_sync_response");
    }
    function D() {
      (o("WAWebABProps").getABPropConfigValue("ephemeral_sync_response"),
        o("WAWebABProps").getABPropConfigValue("dm_reliability_logging"));
    }
    function x(e) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[DMResolve] setting ephemeralOutOfSync on msg",
              ])),
          );
          var n = { ephemeralOutOfSync: !0 };
          (T() &&
            (yield o("WAWebDBUpdateMessageTable").updateMessageTable(t.id, n)),
            (t.ephemeralOutOfSync = !0));
          var r = o("WAWebMsgCollection").MsgCollection.get(t.id);
          r && r.set(n);
        })),
        $.apply(this, arguments)
      );
    }
    function P(e) {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebChatCollection").ChatCollection.get(e.id.remote);
          if (!t)
            throw r("err")("[DMResolve] chat model not found for ESR message");
          if (o("WAWebChatGetters").getIsGroup(t)) {
            o("WALogger")
              .ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[DMResolve] ESR not supported for groups ",
                    "",
                  ])),
                t.id.toLogString(),
              )
              .sendLogs("handle-ephemeral-sync-response");
            return;
          }
          if ((D(), !T())) {
            o(
              "WAWebEphemeralSyncResponseWAM",
            ).sendEphemeralSyncResponseReceiveWamEvent({
              chat: t,
              failureReason: o("WAWebWamEnumEsrFailureReasonType")
                .ESR_FAILURE_REASON_TYPE.ESR_ABPROP_OFF,
            });
            return;
          }
          if (t.contact.isEnterprise) {
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[DMResolve] ESR skip: enterprise contact ",
                  "",
                ])),
              t.id.toLogString(),
            );
            return;
          }
          o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "[DMResolve] processing EPHEMERAL_SYNC_RESPONSE",
              ])),
          );
          var n = {
              id: e.id,
              type: e.type,
              kind: e.kind,
              ephemeralDuration: e.ephemeralDuration,
              ephemeralSettingTimestamp: e.ephemeralSettingTimestamp,
              disappearingModeInitiator: e.disappearingModeInitiator,
              disappearingModeTrigger: e.disappearingModeTrigger,
              disappearingModeInitiatedByMe: e.disappearingModeInitiatedByMe,
            },
            a = o("WAWebMsgEphemerality").getMsgEphemeralitySettings(n);
          if (a != null) {
            if (
              !o("WAWebEphemeralIsDurationAllowed").isEphemeralDurationAllowed(
                a.duration,
              )
            ) {
              (o("WALogger").LOG(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[DMResolve] ESR invalid duration ",
                    "s for ",
                    "",
                  ])),
                a.duration,
                t.id.toLogString(),
              ),
                o(
                  "WAWebEphemeralSyncResponseWAM",
                ).sendEphemeralSyncResponseReceiveWamEvent({
                  chat: t,
                  failureReason: o("WAWebWamEnumEsrFailureReasonType")
                    .ESR_FAILURE_REASON_TYPE.INVALID_EPHEMERAL_DURATION,
                }));
              return;
            }
            var i = o("WAWebChatEphemerality").getChatEphemeralityFields(t);
            if (
              o("WAWebEphemeralityResolver").compareEphemeralityFields(i, a)
            ) {
              o("WALogger").LOG(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[DMResolve] ESR received, settings already in sync",
                  ])),
              );
              return;
            }
            (o("WALogger").LOG(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "[DMResolve] Updating chat due to EPHEMERAL_SYNC_RESPONSE",
                ])),
            ),
              (t.ephemeralDuration = a.duration),
              (t.ephemeralSettingTimestamp = o(
                "WAWebEphemeralityResolver",
              ).resolveSettingTimestamp(a.settingTimestamp)));
            var l = o(
                "WAWebEphemeralityResolver",
              ).resolveDisappearingModeTrigger(a.disappearingModeTrigger),
              _ = o(
                "WAWebEphemeralityResolver",
              ).resolveDisappearingModeInitiator(a.initiator);
            ((t.disappearingModeInitiator = _),
              (t.disappearingModeTrigger = l),
              (t.disappearingModeInitiatedByMe = o(
                "WAWebEphemeralityResolver",
              ).resolveDisappearingModeInitiatedByMe(
                a.initiatedByMe,
                a.initiator,
              )),
              yield o("WAWebDBUpdateChatTable").updateChatTable(t.id, {
                ephemeralDuration: t.ephemeralDuration,
                ephemeralSettingTimestamp: t.ephemeralSettingTimestamp,
                disappearingModeInitiator: _,
                disappearingModeTrigger: l,
                disappearingModeInitiatedByMe: t.disappearingModeInitiatedByMe,
              }),
              o(
                "WAWebDBChatEphemeralExemptionData",
              ).updateEphemeralDurationCache(t.id, t.ephemeralDuration));
            var f =
              o("WAWebEphemeralityResolver").resolveEphermalityDuration(
                i == null ? void 0 : i.duration,
              ) !==
              o("WAWebEphemeralityResolver").resolveEphermalityDuration(
                a == null ? void 0 : a.duration,
              );
            (f &&
              (yield o(
                "WAWebEphemeralGenerateSystemMessage",
              ).generateEphemeralNotificationTemplateSystemMessage(
                t,
                a.duration,
                null,
              )),
              o(
                "WAWebEphemeralSyncResponseWAM",
              ).sendEphemeralSyncResponseReceiveWamEvent({
                chat: t,
                incomingESRSettings: a,
                localChatSettings: i,
              }));
          }
        })),
        N.apply(this, arguments)
      );
    }
    var M = new (o("WAWebBackoff").BackoffCache)(
      [1e3 * 60 * 3, 1e3 * 60 * 15, 1 / 0],
      { resetInterval: o("WATimeUtils").DAY_SECONDS },
    );
    function w(e, t, n, r) {
      return A.apply(this, arguments);
    }
    function A() {
      return (
        (A = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a) {
            var i;
            if ((D(), !T() || !e.isUser() || e.isPSA() || e.isBot())) {
              o("WALogger").LOG(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "[DMResolve] skip sending ESR: disabled or unsupported chat",
                  ])),
              );
              return;
            }
            if (r("gkx")("26256")) {
              var l;
              window.esrCount = ((l = window.esrCount) != null ? l : 0) + 1;
            }
            var s = e.toString();
            if (M.test(s)) {
              var u;
              o("WALogger").LOG(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "[DMResolve] Not sending ESR to ",
                    " due to back off limit",
                  ])),
                e,
              );
              var c = (u = M.get(s)) == null ? void 0 : u.attempts;
              c != null &&
                o(
                  "WAWebEphemeralSyncResponseWAM",
                ).sendEphemeralSyncResponseSendErrorWamEvent({
                  to: e,
                  error: o("WAWebWamEnumEsrFailureReasonType")
                    .ESR_FAILURE_REASON_TYPE.ATTEMPTS_EXHAUSTED,
                  attempts: c,
                });
              return;
            }
            var d = t.duration,
              m = t.initiator,
              p = t.settingTimestamp,
              h = o("WAWebUserPrefsMeUser").getMeUser(),
              y = new (r("WAWebMsgKey"))({
                fromMe: !0,
                remote: e,
                id: yield r("WAWebMsgKey").newId(),
                participant: void 0,
              }),
              C = {
                id: y,
                from: h,
                to: e,
                t: o("WATimeUtils").unixTime(),
                type: o("WAWebMsgType").MSG_TYPE.PROTOCOL,
                subtype: "ephemeral_sync_response",
                ephemeralDuration: d,
                ephemeralSettingTimestamp: p,
                disappearingModeInitiator: m,
              },
              b = new (o("WAWebMsgModel").Msg)(C);
            return (
              o("WALogger").LOG(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
                    "[DMResolve] Sending out EPHEMERAL_SYNC_RESPONSE",
                  ])),
              ),
              o(
                "WAWebEphemeralSyncResponseWAM",
              ).sendEphemeralSyncResponseSendWamEvent({
                to: e,
                changes: t,
                incomingMsgSettings: n,
                localChatSettings: a,
                attempts: (i = M.get(s)) == null ? void 0 : i.attempts,
              }),
              o("WAWebOrchestratorNonPersistedJob")
                .createNonPersistedJob(
                  "sendMessage",
                  function () {
                    return o("WAWebSendMsgRecordAction").sendMsgRecord(b);
                  },
                  {
                    priority: o("WAJobOrchestratorTypes").JOB_PRIORITY
                      .UI_ACTION,
                  },
                )
                .waitUntilCompleted()
            );
          },
        )),
        A.apply(this, arguments)
      );
    }
    function F(e, t) {
      return !!(
        o("WAWebChatGetters").getIsUser(t) &&
        !t.contact.isEnterprise &&
        !e.id.fromMe &&
        o("WAWebMsgEphemerality").messageSupportsEphemerality(e.type)
      );
    }
    function O(e, t) {
      return B.apply(this, arguments);
    }
    function B() {
      return (
        (B = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n;
          if (
            o("WAWebABProps").getABPropConfigValue(
              "out_of_sync_disappearing_messages_logging",
            )
          ) {
            o("WALogger").LOG(
              h ||
                (h = babelHelpers.taggedTemplateLiteralLoose([
                  "logEphemeralOutOfSync",
                ])),
            );
            var r =
                (n = o("WAWebChatEphemerality").getEphemeralSetting(t)) != null
                  ? n
                  : 0,
              a = o("WAWebEphemeralityResolver").getEphemeralDurationForUser(
                o("WAWebContactCollection").ContactCollection.getMeContact(),
              ),
              i = o("WAWebEphemeralityResolver").getEphemeralDurationForUser(
                t.contact,
              );
            new (o(
              "WAWebEphemeralOutOfSyncInfoWamEvent",
            ).EphemeralOutOfSyncInfoWamEvent)({
              incomingMessageEphemeralityDuration: e != null ? e : 0,
              isAGroup: o("WAWebChatGetters").getIsGroup(t),
              threadEphemeralityDuration: r,
              otherDefaultModeDuration: i != null ? i : 0,
              userDefaultModeDuration: a != null ? a : 0,
              threadId: yield o("WAWebChatThreadLogging").getChatThreadID(
                t.id.toJid(),
              ),
              isNewThreadForUser: t.msgs.length === 0,
            }).commit();
          }
        })),
        B.apply(this, arguments)
      );
    }
    function W(e, t) {
      return q.apply(this, arguments);
    }
    function q() {
      return (
        (q = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n =
            e.type === o("WAWebMsgType").MSG_TYPE.PROTOCOL &&
            e.subtype === "ephemeral_setting";
          if (!F(e, t) && !n) {
            o("WALogger").LOG(
              y ||
                (y = babelHelpers.taggedTemplateLiteralLoose([
                  "[DMResolve] dropping msg from ephemeral sync",
                ])),
            );
            return;
          }
          var r = o("WAWebMsgEphemerality").getMsgEphemeralitySettings(e),
            a = o("WAWebChatEphemerality").getChatEphemeralityFields(t);
          o("WALogger").LOG(
            C ||
              (C = babelHelpers.taggedTemplateLiteralLoose([
                "[DMResolve] resolving ephemerality with chat DM settings",
              ])),
          );
          var i = o("WAWebEphemeralityResolver").resolveExistingChatDMSettings(
            r,
            a,
          );
          if (
            o(
              "WAWebEphemeralityUtils",
            ).isEphemeralityDisabledForMessagingWithContact(t.contact)
          )
            return U({
              chat: t,
              localChatSettings: a,
              incomingMsgSettings: r,
              msg: e,
            });
          var l = o("WAWebEphemeralityResolver").compareEphemeralityFields(
              a,
              i,
            ),
            s = o("WAWebEphemeralityResolver").compareEphemeralityFields(r, i);
          if (i == null || (l && s))
            (o("WALogger").LOG(
              b ||
                (b = babelHelpers.taggedTemplateLiteralLoose([
                  "[DMResolve] neither party is out-of-sync",
                ])),
            ),
              M.remove(t.id.toString()));
          else {
            if (
              (o("WALogger").LOG(
                v ||
                  (v = babelHelpers.taggedTemplateLiteralLoose([
                    "[DMResolve] ESR resolution details: ",
                    "",
                  ])),
                JSON.stringify({
                  msgId: e.id.toString(),
                  resolution: i,
                  incomingMsgSettings: r,
                  localChatSettings: a,
                }),
              ),
              !l)
            ) {
              var u;
              (o("WALogger").LOG(
                S ||
                  (S = babelHelpers.taggedTemplateLiteralLoose([
                    "[DMResolve] local out-of-sync, updating chat DM settings",
                  ])),
              ),
                yield o(
                  "WAWebUpdateEphemeralSettingChatAction",
                ).updateChatEphemeralSettings(t, {
                  ephemeralSettingTimestamp: i.settingTimestamp,
                  ephemeralDuration: i.duration,
                  disappearingModeInitiator: i.initiator,
                  disappearingModeTrigger: i.disappearingModeTrigger,
                  disappearingModeInitiatedByMe: i.initiatedByMe,
                  afterReadDuration: i.afterReadDuration,
                }),
                !n &&
                  i.duration !==
                    ((u = a == null ? void 0 : a.duration) != null ? u : 0) &&
                  (o("WALogger").LOG(
                    R ||
                      (R = babelHelpers.taggedTemplateLiteralLoose([
                        "[DMResolve] rendering DM sysmsg: duration changed",
                      ])),
                  ),
                  yield o(
                    "WAWebEphemeralGenerateSystemMessage",
                  ).generateEphemeralNotificationTemplateSystemMessage(
                    t,
                    i.duration,
                    null,
                  )));
            }
            if (
              !s &&
              (o("WALogger").LOG(
                L ||
                  (L = babelHelpers.taggedTemplateLiteralLoose([
                    "[DMResolve] other party out-of-sync, sending ESR",
                  ])),
              ),
              !o("WAWebCommonMsgUtils").isNotificationType(e.type, e.subtype))
            ) {
              var c,
                d = (c = r == null ? void 0 : r.duration) != null ? c : 0;
              (i.duration !== d &&
                (x(e), O(r == null ? void 0 : r.duration, t)),
                w(e.from, i, r, a));
            }
          }
        })),
        q.apply(this, arguments)
      );
    }
    function U(e) {
      return V.apply(this, arguments);
    }
    function V() {
      return (
        (V = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.chat,
            n = e.incomingMsgSettings,
            r = e.localChatSettings,
            a = e.msg;
          if (
            (o("WALogger").LOG(
              E ||
                (E = babelHelpers.taggedTemplateLiteralLoose([
                  "[DMResolve] Ephemerality disabled and not synced",
                ])),
            ),
            n != null &&
              n.duration > 0 &&
              (yield o(
                "WAWebDBEphemeralMessage",
              ).convertMessageNotEphemeralForContactWithEphmeralityDisabled({
                messageId: a.id.toString(),
                contactId: t.contact.id.toString(),
              }),
              (a.ephemeralDuration = 0),
              (a.ephemeralStartTimestamp = void 0),
              (a.ephemeralSettingTimestamp = void 0),
              (a.ephemeralOutOfSync = void 0),
              (a.ephemeralSettingUser = void 0)),
            r == null || r.duration === 0)
          ) {
            o("WALogger").LOG(
              k ||
                (k = babelHelpers.taggedTemplateLiteralLoose([
                  "[DMResolve] disabled ephemerality: local chat not eph",
                ])),
            );
            return;
          }
          if (n == null || n.duration === 0) {
            o("WALogger").LOG(
              I ||
                (I = babelHelpers.taggedTemplateLiteralLoose([
                  "[DMResolve] disabled ephemerality: incoming msg not eph",
                ])),
            );
            return;
          }
          (yield o(
            "WAWebUpdateEphemeralSettingChatAction",
          ).updateChatEphemeralSettings(t, {
            ephemeralSettingTimestamp: o(
              "WAWebEphemeralityResolver",
            ).resolveSettingTimestamp(n.settingTimestamp),
            ephemeralDuration: 0,
            disappearingModeInitiator: o("WAWebEphemeralityTypes")
              .DisappearingModeInitiator.InitiatedByOther,
            disappearingModeTrigger: o("WAWebEphemeralityTypes")
              .DisappearingModeTrigger.Unknown,
            disappearingModeInitiatedByMe: !1,
          }),
            yield o(
              "WAWebEphemeralGenerateSystemMessage",
            ).generateEphemeralNotificationTemplateSystemMessage(
              t,
              0,
              t.contact.id,
            ));
        })),
        V.apply(this, arguments)
      );
    }
    var H = w;
    ((l.processEphemeralSyncResponse = P),
      (l.syncEphemeralSetting = W),
      (l._sendEphemeralSyncResponse = H));
  },
  98,
);
