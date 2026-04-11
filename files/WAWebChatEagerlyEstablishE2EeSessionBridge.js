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
      c = 406;
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
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
            var d = o("WAWebUserPrefsMeUser").getMeDeviceLidOrThrow();
            (o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "eagerlyEstablishE2EESession: status eager session start, contacts=",
                  "",
                ])),
              l.list.length,
            ),
              (n = yield o("WAWebSendMsgDatabaseJob").getFanOutListJob(
                [].concat(l.list, [d]),
                void 0,
                !0,
              )));
          } else {
            var m = o(
                "WAWebSimpleSignalPNToFBIDMigration",
              ).maybeReplaceDeprecatedBotPnWithFbid(t.id),
              p = o("WAWebUserPrefsMeUser").getMeDeviceLidOrThrow(),
              _ = o("WAWebUserPrefsMeUser").getMeDevicePnOrThrow_DO_NOT_USE(),
              f = t.id.isLid() ? p : _;
            n = yield o("WAWebSendMsgDatabaseJob").getFanOutListJob([m, f]);
          }
          try {
            var g =
                t.id.isStatus() &&
                o(
                  "WAWebStatusSessionGatingUtils",
                ).shouldUseStatusSessionForOutgoingMessage()
                  ? o("WAWebSessionScope").SessionScope.STATUS
                  : o("WAWebSessionScope").SessionScope.DEFAULT,
              h = yield o("WAWebManageE2ESessionsJob").ensureE2ESessions(
                n,
                !1,
                g,
              );
            o(
              "WAWebPostPrekeysDepletionMetric",
            ).maybePostPrekeysDepletionMetric({
              count: h == null ? void 0 : h.depletedPrekeyCount,
              prekeysFetchReason: o("WAWebWamEnumPrekeysFetchContext")
                .PREKEYS_FETCH_CONTEXT.USER_INTENT_PREFETCH,
              messageType: o("WAWebChatGetters").getIsGroup(t)
                ? o("WAWebWamEnumMessageType").MESSAGE_TYPE.GROUP
                : o("WAWebWamEnumMessageType").MESSAGE_TYPE.INDIVIDUAL,
              deviceSizeBucket: a,
            });
          } catch (e) {
            e instanceof o("WAWebBackendErrors").ServerStatusCodeError &&
            e.statusCode === c
              ? o("WALogger").LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "eagerlyEstablishE2EESession: ignore prekey err, device unregistered ",
                      "",
                    ])),
                  e,
                )
              : o("WALogger")
                  .ERROR(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "error: ",
                        "",
                      ])),
                    e,
                  )
                  .sendLogs("eagerlyEstablishE2EESession: failed");
          }
        })),
        m.apply(this, arguments)
      );
    }
    l.eagerlyEstablishE2EESession = d;
  },
  98,
);
