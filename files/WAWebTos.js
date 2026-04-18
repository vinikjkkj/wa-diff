__d(
  "WAWebTos",
  [
    "Promise",
    "WACustomError",
    "WAExponentialBackoff",
    "WALogger",
    "WAPromiseDelays",
    "WATimeUtils",
    "WAWebBackendErrors",
    "WAWebBizBroadcastGenAIToS",
    "WAWebBizBroadcastTos",
    "WAWebBizGatingUtils",
    "WAWebBotBaseGating",
    "WAWebBotGating",
    "WAWebBotTosIds",
    "WAWebEventEmitter",
    "WAWebGetUserDisclosuresAction",
    "WAWebMmSignalSharingGatingUtils",
    "WAWebMmSignalSharingTos",
    "WAWebNewsletterCommonGatingUtils",
    "WAWebNewsletterGatingUtils",
    "WAWebTosJob",
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsStore",
    "WAWebWamoNewsletterGatingUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _ = "20210210",
      f = (function (e) {
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
      g = {
        minTimeout: 1e3,
        maxTimeout: 16e3,
        retries: 5,
        signal: new AbortController().signal,
      },
      h = (function (t) {
        function a() {
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
        babelHelpers.inheritsLoose(a, t);
        var i = a.prototype;
        return (
          (i.clearDisclosureNoticeIds_TESTONLY = function () {
            this.$TosManagerImpl$p_1 = [];
          }),
          (i.$TosManagerImpl$p_3 = function () {
            var e = new Set();
            if (
              (o("WAWebBizGatingUtils").tosFetchEnabled() && e.add(_),
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
          (i.$TosManagerImpl$p_4 = function () {
            var e = this.$TosManagerImpl$p_3().concat(this.$TosManagerImpl$p_1);
            return e;
          }),
          (i.$TosManagerImpl$p_5 = function (t) {
            var e = new Set(this.$TosManagerImpl$p_1.concat(t));
            this.$TosManagerImpl$p_1 = Array.from(e);
          }),
          (i.getLastAcceptedTime = function (t) {
            var e = this.$TosManagerImpl$p_6(t),
              n = r("WAWebUserPrefsStore").getUser(e);
            return n != null && typeof n == "number"
              ? o("WATimeUtils").castToUnixTime(n)
              : null;
          }),
          (i.getState = function (n) {
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
                t instanceof f ||
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
          (i.setState = function (t, n, r) {
            this.$TosManagerImpl$p_1.includes(t) ||
            (y() && this.$TosManagerImpl$p_3().includes(t))
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
          (i.$TosManagerImpl$p_7 = function (t, n, o) {
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
          (i.run = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = this;
                if (
                  !(
                    !y() &&
                    !o(
                      "WAWebNewsletterCommonGatingUtils",
                    ).isNewsletterEnabled() &&
                    !o(
                      "WAWebBizGatingUtils",
                    ).isBizBroadcastSendWebEnabledNoExposure()
                  )
                ) {
                  try {
                    yield o("WAExponentialBackoff").exponentialBackoff(
                      g,
                      function (e, n) {
                        return t.$TosManagerImpl$p_8().catch(function (t) {
                          if (
                            t instanceof
                            o("WAWebBackendErrors").ServerStatusCodeError
                          )
                            e: {
                              if (t.statusCode === 500) {
                                return (
                                  o("WALogger").WARN(
                                    u ||
                                      (u =
                                        babelHelpers.taggedTemplateLiteralLoose(
                                          [
                                            "[TosManager] query failed: ",
                                            " (retry ",
                                            ")",
                                          ],
                                        )),
                                    t.message,
                                    n,
                                  ),
                                  e(t)
                                );
                                break e;
                              }
                              break e;
                            }
                          throw t;
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
                    (e == null ? void 0 : e.singleRun) !== !0 &&
                    this.$TosManagerImpl$p_9(this.$TosManagerImpl$p_4())
                      .length > 0
                  ) {
                    var n = o("WAWebUserPrefsMeUser").getMaybeMePnUser();
                    (yield o("WAPromiseDelays").delayMs(
                      this.$TosManagerImpl$p_2,
                    ),
                      o("WAWebUserPrefsMeUser").getMaybeMePnUser() === n &&
                        this.run());
                  }
                }
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.$TosManagerImpl$p_8 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e = this;
              if (o("WAWebUserPrefsMeUser").getMaybeMePnUser()) {
                var t = yield (p || (p = n("Promise"))).all([
                    this.$TosManagerImpl$p_10(),
                    this.$TosManagerImpl$p_11(),
                  ]),
                  a = t[0],
                  i = t[1];
                this.$TosManagerImpl$p_2 = Math.min(a.refresh, i.refresh) * 1e3;
                var l = a.notice.concat(i.notice),
                  s = new Set(this.$TosManagerImpl$p_4()),
                  u = !1;
                (l
                  .filter(function (e) {
                    return s.has(e.id);
                  })
                  .forEach(function (t) {
                    var n = t.state ? "ACCEPTED" : "NOT_ACCEPTED",
                      o = e.getStoreKey(t.id),
                      a = r("WAWebUserPrefsStore").getUser(o);
                    (a === "SHOWN" && n === "NOT_ACCEPTED") ||
                      (a !== n &&
                        (r("WAWebUserPrefsStore").setUser(o, n),
                        e.$TosManagerImpl$p_7(t.id, n, t.timestamp),
                        (u = !0)));
                  }),
                  r("WAWebUserPrefsStore").setUser(
                    o("WAWebUserPrefsKeys").KEYS.TOS_STATE_FETCH_ITERATION,
                    o("WAWebBizGatingUtils").tosFetchIteration(),
                  ),
                  u && this.trigger("change"));
              }
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.$TosManagerImpl$p_12 = function () {
            return {
              refresh: o("WAWebTosJob").DEFAULT_TOS_REFRESH_INTERVAL,
              notice: [],
            };
          }),
          (i.$TosManagerImpl$p_10 = function () {
            if (!y())
              return (p || (p = n("Promise"))).resolve(
                this.$TosManagerImpl$p_12(),
              );
            var e = this.$TosManagerImpl$p_9(this.$TosManagerImpl$p_3());
            return e.length > 0
              ? o("WAWebTosJob").queryTosState(e)
              : (p || (p = n("Promise"))).resolve(this.$TosManagerImpl$p_12());
          }),
          (i.$TosManagerImpl$p_11 = function () {
            return (
              o("WAWebNewsletterCommonGatingUtils").isNewsletterEnabled() &&
                this.populateTosManagerNewsletterIds(),
              o(
                "WAWebBizGatingUtils",
              ).isBizBroadcastSendWebEnabledNoExposure() &&
                this.populateTosManagerBizBroadcastIds(),
              this.$TosManagerImpl$p_1.length === 0
                ? (p || (p = n("Promise"))).resolve(this.$TosManagerImpl$p_12())
                : o("WAWebGetUserDisclosuresAction").getUserDisclosuresAction()
            );
          }),
          (i.$TosManagerImpl$p_9 = function (t) {
            var e = this,
              n =
                parseInt(
                  r("WAWebUserPrefsStore").getUser(
                    o("WAWebUserPrefsKeys").KEYS.TOS_STATE_FETCH_ITERATION,
                  ),
                  10,
                ) || 0;
            if (o("WAWebBizGatingUtils").tosFetchIteration() > n) return t;
            var a = t.map(function (t) {
              return e.getState(t);
            });
            return t.filter(function (e, t) {
              return a[t] !== "ACCEPTED";
            });
          }),
          (i.getStoreKey = function (t) {
            var e = new Set(this.$TosManagerImpl$p_4());
            if (e.has(t)) return "TOS_STATE_" + t;
            throw new f(t);
          }),
          (i.$TosManagerImpl$p_6 = function (t) {
            var e = new Set(this.$TosManagerImpl$p_4());
            if (e.has(t)) return "TOS_STATE_" + t + "_LAST_ACCEPTED_TIME";
            throw new f(t);
          }),
          (i.maybeUpdateServer = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = this;
                if (y())
                  try {
                    var r = new Set(e);
                    yield o("WAExponentialBackoff").exponentialBackoff(
                      g,
                      function (e, a) {
                        var i = t.$TosManagerImpl$p_13(r);
                        return i.length > 0
                          ? o("WAWebTosJob")
                              .updateTosState(i)
                              .catch(function (t) {
                                if (
                                  t instanceof
                                    o("WAWebBackendErrors")
                                      .ServerStatusCodeError &&
                                  t.statusCode === 500
                                )
                                  return (
                                    o("WALogger").WARN(
                                      d ||
                                        (d =
                                          babelHelpers.taggedTemplateLiteralLoose(
                                            [
                                              "[TosManager] session update failed: ",
                                              " (retry ",
                                              ")",
                                            ],
                                          )),
                                      t.message,
                                      a,
                                    ),
                                    e(t)
                                  );
                                throw t;
                              })
                          : (p || (p = n("Promise"))).resolve();
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
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.$TosManagerImpl$p_13 = function (t) {
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
          (i.$TosManagerImpl$p_14 = function (t) {
            (r("WAWebUserPrefsStore").setUser(this.getStoreKey(t), void 0),
              r("WAWebUserPrefsStore").setUser(
                this.$TosManagerImpl$p_6(t),
                void 0,
              ));
          }),
          (i.resetAllState = function () {
            var e = this;
            (this.$TosManagerImpl$p_4().forEach(function (t) {
              e.$TosManagerImpl$p_14(t);
            }),
              o("WAWebTosJob").deleteTosState(_));
          }),
          (i.resetState = function (t) {
            (this.$TosManagerImpl$p_14(t), o("WAWebTosJob").deleteTosState(t));
          }),
          (i.populateTosManagerNewsletterIds = function () {
            var e = [
              o("WAWebNewsletterGatingUtils").getNewsletterProducerTos(),
              o("WAWebNewsletterGatingUtils").getNewsletterConsumerTos(),
              o("WAWebNewsletterGatingUtils").getNewsletterAdminInviteTos(),
            ].concat(o("WAWebWamoNewsletterGatingUtils").getWamoNotices());
            this.$TosManagerImpl$p_5(e);
          }),
          (i.populateTosManagerBizBroadcastIds = function () {
            if (
              o("WAWebBizGatingUtils").isBizBroadcastSendWebEnabledNoExposure()
            ) {
              var e = o("WAWebBizBroadcastTos").getBizBroadcastTosId();
              e !== "" && this.$TosManagerImpl$p_5([e]);
              var t = o(
                "WAWebBizBroadcastGenAIToS",
              ).getBizBroadcastGenAITosId();
              t !== "" && this.$TosManagerImpl$p_5([t]);
            }
          }),
          a
        );
      })(r("WAWebEventEmitter"));
    function y() {
      return (
        o("WAWebBizGatingUtils").tosFetchEnabled() ||
        o("WAWebBotBaseGating").isBizBot1pEnabled() ||
        o("WAWebBotBaseGating").isBizBot3pEnabled()
      );
    }
    var C = new h();
    ((l.TOS_3_ID = _), (l.TosManager = C));
  },
  98,
);
