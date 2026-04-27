__d(
  "WAWebChatEagerlyEstablishE2EeSessionBridge",
  [
    "WALogger",
    "WAWebApiParticipantStore",
    "WAWebBackendErrors",
    "WAWebChatGetters",
    "WAWebLidMigrationUtils",
    "WAWebManageE2ESessionsJob",
    "WAWebPostPrekeysDepletionMetric",
    "WAWebSendMsgDatabaseJob",
    "WAWebSessionScope",
    "WAWebSimpleSignalPNToFBIDMigration",
    "WAWebStatusSessionGatingUtils",
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsStatus",
    "WAWebWamEnumMessageType",
    "WAWebWamEnumPrekeysFetchContext",
    "WAWebWamNumberToSizeBucket",
    "asyncToGeneratorRuntime",
    "compactMap",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = 406;
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n,
            a = null;
          if (o("WAWebChatGetters").getIsGroup(t)) {
            var i = yield o("WAWebApiParticipantStore").getGroupSenderKeyList(
              t.id,
            );
            ((n = i.skDistribList),
              (a = r("WAWebWamNumberToSizeBucket")(
                i.skDistribList.length + i.skList.length,
              )));
          } else if (t.id.isStatus()) {
            var l = yield r("WAWebUserPrefsStatus").getStatusList();
            l.list = r("compactMap")(
              l.list,
              o("WAWebLidMigrationUtils").toUserLid,
            );
            var m = o("WAWebUserPrefsMeUser").getMeDeviceLidOrThrow();
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "eagerlyEstablishE2EESession: status eager session start, contacts=",
                  "",
                ])),
              l.list.length,
            );
            var p = yield o("WAWebSendMsgDatabaseJob").getFanOutListJob(
                [].concat(l.list, [m]),
                void 0,
                !0,
              ),
              _ = yield r("WAWebUserPrefsStatus").getStatusSkDistribList(p),
              f = _.skDistribList;
            ((n = f),
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "eagerlyEstablishE2EESession: status skDistribList=",
                    " allDevices=",
                    "",
                  ])),
                f.length,
                p.length,
              ));
          } else {
            var g = o(
                "WAWebSimpleSignalPNToFBIDMigration",
              ).maybeReplaceDeprecatedBotPnWithFbid(t.id),
              h = o("WAWebUserPrefsMeUser").getMeDeviceLidOrThrow(),
              y = o("WAWebUserPrefsMeUser").getMeDevicePnOrThrow_DO_NOT_USE(),
              C = t.id.isLid() ? h : y;
            n = yield o("WAWebSendMsgDatabaseJob").getFanOutListJob([g, C]);
          }
          try {
            var b =
                t.id.isStatus() &&
                o(
                  "WAWebStatusSessionGatingUtils",
                ).shouldUseStatusSessionForOutgoingMessage()
                  ? o("WAWebSessionScope").SessionScope.STATUS
                  : o("WAWebSessionScope").SessionScope.DEFAULT,
              v = yield o("WAWebManageE2ESessionsJob").ensureE2ESessions(
                n,
                !1,
                b,
              );
            o(
              "WAWebPostPrekeysDepletionMetric",
            ).maybePostPrekeysDepletionMetric({
              count: v == null ? void 0 : v.depletedPrekeyCount,
              prekeysFetchReason: o("WAWebWamEnumPrekeysFetchContext")
                .PREKEYS_FETCH_CONTEXT.USER_INTENT_PREFETCH,
              messageType: o("WAWebChatGetters").getIsGroup(t)
                ? o("WAWebWamEnumMessageType").MESSAGE_TYPE.GROUP
                : o("WAWebWamEnumMessageType").MESSAGE_TYPE.INDIVIDUAL,
              deviceSizeBucket: a,
            });
          } catch (e) {
            e instanceof o("WAWebBackendErrors").ServerStatusCodeError &&
            e.statusCode === d
              ? o("WALogger").LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "eagerlyEstablishE2EESession: ignore prekey err, device unregistered ",
                      "",
                    ])),
                  e,
                )
              : o("WALogger")
                  .ERROR(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "error: ",
                        "",
                      ])),
                    e,
                  )
                  .sendLogs("eagerlyEstablishE2EESession: failed");
          }
        })),
        p.apply(this, arguments)
      );
    }
    l.eagerlyEstablishE2EESession = m;
  },
  98,
);
