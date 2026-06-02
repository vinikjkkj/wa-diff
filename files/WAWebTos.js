__d(
  "WAWebTos",
  [
    "WACustomError",
    "WAExponentialBackoff",
    "WALogger",
    "WAPromiseDelays",
    "WATimeUtils",
    "WAWebBackendErrors",
    "WAWebBizBroadcastGenAIToS",
    "WAWebBizBroadcastTos",
    "WAWebBotBaseGating",
    "WAWebBotGating",
    "WAWebBotTosIds",
    "WAWebBusinessBroadcastsGatingUtils",
    "WAWebEventEmitter",
    "WAWebGetUserDisclosuresAction",
    "WAWebMmSignalSharingGatingUtils",
    "WAWebMmSignalSharingTos",
    "WAWebNewsletterCommonGatingUtils",
    "WAWebNewsletterGatingUtils",
    "WAWebTosGatingUtils",
    "WAWebTosJob",
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsStore",
    "WAWebWamoNewsletterGatingUtils",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p = "20210210",
      _ = (function (e) {
        function t(t) {
          var n;
          return (
            (n = e.call(this, "Unknown user notice id: " + t) || this),
            (n.name = "UnknownUserNoticeIdError"),
            n
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(o("WACustomError").CustomError),
      f = {
        minTimeout: 1e3,
        maxTimeout: 16e3,
        retries: 5,
        signal: new AbortController().signal,
      },
      g = (function (t) {
        function n() {
          for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.$TosManagerImpl$p_1 = []),
            (e.$TosManagerImpl$p_2 =
              o("WAWebTosJob").DEFAULT_TOS_REFRESH_INTERVAL * 1e3),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.clearDisclosureNoticeIds_TESTONLY = function () {
            this.$TosManagerImpl$p_1 = [];
          }),
          (a.$TosManagerImpl$p_3 = function () {
            var e = new Set();
            if (
              (o("WAWebTosGatingUtils").tosFetchEnabled() && e.add(p),
              o("WAWebBotBaseGating").isBotEnabled())
            ) {
              var t;
              (e.add((t = o("WAWebBotTosIds")).getBotAgentTosId()),
                e.add(t.getBotInvokeTosId()),
                e.add(t.getBotShortcutTosId()),
                e.add(t.getBotLegacyShortcutTosId()),
                e.add(t.getBotLegacyInvokeTosId()));
              var n = o("WAWebBotGating").getMasterBotNoticeId();
              n != null && e.add(n.toString());
            }
            return (
              (o("WAWebBotBaseGating").isBizBot1pEnabled() ||
                o("WAWebBotBaseGating").isBizBot3pEnabled()) &&
                e.add(o("WAWebBotTosIds").getBizBotTosId()),
              o(
                "WAWebMmSignalSharingGatingUtils",
              ).isMmSignalSharingDisclosureEnabled() &&
                e.add(
                  o(
                    "WAWebMmSignalSharingTos",
                  ).getMmSignalSharingDisclosureTosId(),
                ),
              Array.from(e)
            );
          }),
          (a.$TosManagerImpl$p_4 = function () {
            var e = this.$TosManagerImpl$p_3().concat(this.$TosManagerImpl$p_1);
            return e;
          }),
          (a.$TosManagerImpl$p_5 = function (t) {
            var e = new Set(this.$TosManagerImpl$p_1.concat(t));
            this.$TosManagerImpl$p_1 = Array.from(e);
          }),
          (a.getLastAcceptedTime = function (t) {
            var e = this.$TosManagerImpl$p_6(t),
              n = r("WAWebUserPrefsStore").getUser(e);
            return n != null && typeof n == "number"
              ? o("WATimeUtils").castToUnixTime(n)
              : null;
          }),
          (a.getState = function (n) {
            try {
              var t = this.getStoreKey(n),
                a = r("WAWebUserPrefsStore").getUser(t),
                i =
                  typeof a == "string" &&
                  (a === "UNKNOWN" ||
                    a === "NOT_ACCEPTED" ||
                    a === "SHOWN" ||
                    a === "SOFT_OPT_IN" ||
                    a === "ACCEPTED")
                    ? a
                    : "UNKNOWN";
              return i;
            } catch (t) {
              return (
                t instanceof _ ||
                  o("WALogger")
                    .ERROR(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "Unexpected error when getting notice id state: ",
                          "",
                        ])),
                      n,
                    )
                    .tags("tos-manager")
                    .sendLogs("Unexpected error when getting notice id state"),
                "UNKNOWN"
              );
            }
          }),
          (a.setState = function (t, n, r) {
            this.$TosManagerImpl$p_1.includes(t) ||
            (h() && this.$TosManagerImpl$p_3().includes(t))
              ? (this.$TosManagerImpl$p_7(t, n, r), this.trigger("change"))
              : o("WALogger").WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "ToS state manager unrecognized user notice id: ",
                      "",
                    ])),
                  t,
                );
          }),
          (a.$TosManagerImpl$p_7 = function (t, n, o) {
            (r("WAWebUserPrefsStore").setUser(this.getStoreKey(t), n),
              n === "ACCEPTED" && o != null
                ? r("WAWebUserPrefsStore").setUser(
                    this.$TosManagerImpl$p_6(t),
                    o,
                  )
                : r("WAWebUserPrefsStore").setUser(
                    this.$TosManagerImpl$p_6(t),
                    void 0,
                  ));
          }),
          (a.run = async function (t) {
            var e = this;
            if (
              !(
                !h() &&
                !o("WAWebNewsletterCommonGatingUtils").isNewsletterEnabled() &&
                !o(
                  "WAWebBusinessBroadcastsGatingUtils",
                ).isBizBroadcastSendWebEnabledNoExposure()
              )
            ) {
              try {
                await o("WAExponentialBackoff").exponentialBackoff(
                  f,
                  function (t, n) {
                    return e.$TosManagerImpl$p_8().catch(function (e) {
                      if (
                        e instanceof
                        o("WAWebBackendErrors").ServerStatusCodeError
                      )
                        e: {
                          if (e.statusCode === 500) {
                            return (
                              o("WALogger").WARN(
                                u ||
                                  (u = babelHelpers.taggedTemplateLiteralLoose([
                                    "[TosManager] query failed: ",
                                    " (retry ",
                                    ")",
                                  ])),
                                e.message,
                                n,
                              ),
                              t(e)
                            );
                            break e;
                          }
                          break e;
                        }
                      throw e;
                    });
                  },
                );
              } catch (e) {
                if (
                  (o("WALogger")
                    .ERROR(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
                          "ToS state manager state pull failed, error: ",
                          "",
                        ])),
                      e,
                    )
                    .verbose()
                    .sendLogs("ToS state manager run failed"),
                  !(
                    e instanceof
                      o("WAWebBackendErrors").ServerStatusCodeError &&
                    e.statusCode === 500
                  ))
                )
                  return;
              }
              if (
                (t == null ? void 0 : t.singleRun) !== !0 &&
                this.$TosManagerImpl$p_9(this.$TosManagerImpl$p_4()).length > 0
              ) {
                var n = o("WAWebUserPrefsMeUser").getMaybeMePnUser();
                (await o("WAPromiseDelays").delayMs(this.$TosManagerImpl$p_2),
                  o("WAWebUserPrefsMeUser").getMaybeMePnUser() === n &&
                    this.run());
              }
            }
          }),
          (a.$TosManagerImpl$p_8 = async function () {
            var e = this;
            if (o("WAWebUserPrefsMeUser").getMaybeMePnUser()) {
              var t = await Promise.all([
                  this.$TosManagerImpl$p_10(),
                  this.$TosManagerImpl$p_11(),
                ]),
                n = t[0],
                a = t[1];
              this.$TosManagerImpl$p_2 = Math.min(n.refresh, a.refresh) * 1e3;
              var i = n.notice.concat(a.notice),
                l = new Set(this.$TosManagerImpl$p_4()),
                s = !1;
              (i
                .filter(function (e) {
                  return l.has(e.id);
                })
                .forEach(function (t) {
                  var n = t.state ? "ACCEPTED" : "NOT_ACCEPTED",
                    o = e.getStoreKey(t.id),
                    a = r("WAWebUserPrefsStore").getUser(o);
                  (a === "SHOWN" && n === "NOT_ACCEPTED") ||
                    (a !== n &&
                      (r("WAWebUserPrefsStore").setUser(o, n),
                      e.$TosManagerImpl$p_7(t.id, n, t.timestamp),
                      (s = !0)));
                }),
                r("WAWebUserPrefsStore").setUser(
                  o("WAWebUserPrefsKeys").KEYS.TOS_STATE_FETCH_ITERATION,
                  o("WAWebTosGatingUtils").tosFetchIteration(),
                ),
                s && this.trigger("change"));
            }
          }),
          (a.$TosManagerImpl$p_12 = function () {
            return {
              refresh: o("WAWebTosJob").DEFAULT_TOS_REFRESH_INTERVAL,
              notice: [],
            };
          }),
          (a.$TosManagerImpl$p_10 = function () {
            if (!h()) return Promise.resolve(this.$TosManagerImpl$p_12());
            var e = this.$TosManagerImpl$p_9(this.$TosManagerImpl$p_3());
            return e.length > 0
              ? o("WAWebTosJob").queryTosState(e)
              : Promise.resolve(this.$TosManagerImpl$p_12());
          }),
          (a.$TosManagerImpl$p_11 = function () {
            return (
              o("WAWebNewsletterCommonGatingUtils").isNewsletterEnabled() &&
                this.populateTosManagerNewsletterIds(),
              o(
                "WAWebBusinessBroadcastsGatingUtils",
              ).isBizBroadcastSendWebEnabledNoExposure() &&
                this.populateTosManagerBizBroadcastIds(),
              this.$TosManagerImpl$p_1.length === 0
                ? Promise.resolve(this.$TosManagerImpl$p_12())
                : o("WAWebGetUserDisclosuresAction").getUserDisclosuresAction()
            );
          }),
          (a.$TosManagerImpl$p_9 = function (t) {
            var e = this,
              n =
                parseInt(
                  r("WAWebUserPrefsStore").getUser(
                    o("WAWebUserPrefsKeys").KEYS.TOS_STATE_FETCH_ITERATION,
                  ),
                  10,
                ) || 0;
            if (o("WAWebTosGatingUtils").tosFetchIteration() > n) return t;
            var a = t.map(function (t) {
              return e.getState(t);
            });
            return t.filter(function (e, t) {
              return a[t] !== "ACCEPTED";
            });
          }),
          (a.getStoreKey = function (t) {
            var e = new Set(this.$TosManagerImpl$p_4());
            if (e.has(t)) return "TOS_STATE_" + t;
            throw new _(t);
          }),
          (a.$TosManagerImpl$p_6 = function (t) {
            var e = new Set(this.$TosManagerImpl$p_4());
            if (e.has(t)) return "TOS_STATE_" + t + "_LAST_ACCEPTED_TIME";
            throw new _(t);
          }),
          (a.maybeUpdateServer = async function (t) {
            var e = this;
            if (h())
              try {
                var n = new Set(t);
                await o("WAExponentialBackoff").exponentialBackoff(
                  f,
                  function (t, r) {
                    var a = e.$TosManagerImpl$p_13(n);
                    return a.length > 0
                      ? o("WAWebTosJob")
                          .updateTosState(a)
                          .catch(function (e) {
                            if (
                              e instanceof
                                o("WAWebBackendErrors").ServerStatusCodeError &&
                              e.statusCode === 500
                            )
                              return (
                                o("WALogger").WARN(
                                  d ||
                                    (d =
                                      babelHelpers.taggedTemplateLiteralLoose([
                                        "[TosManager] session update failed: ",
                                        " (retry ",
                                        ")",
                                      ])),
                                  e.message,
                                  r,
                                ),
                                t(e)
                              );
                            throw e;
                          })
                      : Promise.resolve();
                  },
                );
              } catch (e) {
                o("WALogger")
                  .ERROR(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "[TosManager] session update failed: ",
                        "",
                      ])),
                    e,
                  )
                  .verbose()
                  .sendLogs(
                    "ToS state manager server session state update failed",
                  );
              }
          }),
          (a.$TosManagerImpl$p_13 = function (t) {
            var e = this;
            if (o("WAWebUserPrefsMeUser").getMaybeMePnUser()) {
              var n = this.$TosManagerImpl$p_3().map(function (t) {
                return e.getState(t);
              });
              return this.$TosManagerImpl$p_3().filter(function (e, r) {
                return n[r] === "ACCEPTED" && t.has(e);
              });
            }
            return [];
          }),
          (a.$TosManagerImpl$p_14 = function (t) {
            (r("WAWebUserPrefsStore").setUser(this.getStoreKey(t), void 0),
              r("WAWebUserPrefsStore").setUser(
                this.$TosManagerImpl$p_6(t),
                void 0,
              ));
          }),
          (a.resetAllState = function () {
            var e = this;
            (this.$TosManagerImpl$p_4().forEach(function (t) {
              e.$TosManagerImpl$p_14(t);
            }),
              o("WAWebTosJob").deleteTosState(p));
          }),
          (a.resetState = function (t) {
            (this.$TosManagerImpl$p_14(t), o("WAWebTosJob").deleteTosState(t));
          }),
          (a.populateTosManagerNewsletterIds = function () {
            var e = [
              o("WAWebNewsletterGatingUtils").getNewsletterProducerTos(),
              o("WAWebNewsletterGatingUtils").getNewsletterConsumerTos(),
              o("WAWebNewsletterGatingUtils").getNewsletterAdminInviteTos(),
            ].concat(o("WAWebWamoNewsletterGatingUtils").getWamoNotices());
            this.$TosManagerImpl$p_5(e);
          }),
          (a.populateTosManagerBizBroadcastIds = function () {
            if (
              o(
                "WAWebBusinessBroadcastsGatingUtils",
              ).isBizBroadcastSendWebEnabledNoExposure()
            ) {
              var e = o("WAWebBizBroadcastTos").getBizBroadcastTosId();
              e !== "" && this.$TosManagerImpl$p_5([e]);
              var t = o(
                "WAWebBizBroadcastGenAIToS",
              ).getBizBroadcastGenAITosId();
              t !== "" && this.$TosManagerImpl$p_5([t]);
            }
          }),
          n
        );
      })(r("WAWebEventEmitter"));
    function h() {
      return (
        o("WAWebTosGatingUtils").tosFetchEnabled() ||
        o("WAWebBotBaseGating").isBizBot1pEnabled() ||
        o("WAWebBotBaseGating").isBizBot3pEnabled()
      );
    }
    var y = new g();
    ((l.TOS_3_ID = p), (l.TosManager = y));
  },
  98,
);
