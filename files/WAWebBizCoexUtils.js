__d(
  "WAWebBizCoexUtils",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebBizCoexGatingUtils",
    "WAWebCoexPrivacySysMsgWamEvent",
    "WAWebMsgKey",
    "WAWebOfflineDeviceCache",
    "WAWebOfflineHandler",
    "WAWebSchemaChat",
    "WAWebSyncDeviceAdvDeviceListJob",
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsMultiDevice",
    "WAWebWamEnumCoexSysMsgInsertionChannel",
    "WAWebWamEnumCoexSysMsgStateTransitionAttempt",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 99,
      u = [
        "biz_account_type_is_hosted",
        "biz_account_type_changed_to_hosted",
        "biz_me_account_type_is_hosted",
        "biz_me_account_type_is_hosted_transition",
      ],
      c = new Set(),
      d = new Set();
    function m(e) {
      return e.some(function (e) {
        return e.isHosted();
      });
    }
    function p(e, t) {
      var n;
      !o("WAWebBizCoexGatingUtils").bizHostedDevicesEnabled() ||
        e == null ||
        (((n = e[0]) == null ? void 0 : n.id) === s && _(t));
    }
    function _(e) {
      o(
        "WAWebOfflineHandler",
      ).OfflineMessageHandler.isResumeFromRestartComplete()
        ? o("WAWebSyncDeviceAdvDeviceListJob").syncDeviceListJob(
            [e],
            null,
            null,
          )
        : o(
            "WAWebOfflineDeviceCache",
          ).OfflinePendingDeviceCache.addOfflinePendingDevice(
            e.toString(),
            null,
          );
    }
    function f(e) {
      return !o("WAWebBizCoexGatingUtils").bizHostedDevicesEnabled() ||
        e == null
        ? !1
        : u.includes(e);
    }
    function g(e) {
      return o("WAWebBizCoexGatingUtils").bizHostedDevicesEnabled()
        ? !!(
            o(
              "WAWebUserPrefsMultiDevice",
            ).getIsHostedMeAccountFromLocalStorage() || e.isHosted === !0
          )
        : !1;
    }
    function h(e) {
      o("WAWebBizCoexGatingUtils").bizHostedDevicesEnabled() &&
        C(
          e.map(function (e) {
            var t = e[0],
              n = e[1];
            return t == null ? null : { id: t.id, subtype: t.subtype };
          }),
        );
    }
    function y(e) {
      var t;
      C([
        {
          id: e == null || (t = e.id) == null ? void 0 : t.toString(),
          subtype: e == null ? void 0 : e.subtype,
          channel: o("WAWebWamEnumCoexSysMsgInsertionChannel")
            .COEX_SYS_MSG_INSERTION_CHANNEL.HISTORY_SYNC,
        },
      ]);
    }
    function C(t) {
      try {
        var n,
          a = o("WAWebUserPrefsMeUser").getMaybeMeDevicePn(),
          i = (n = a == null ? void 0 : a.device) != null ? n : 0;
        t.forEach(function (e) {
          if ((e == null ? void 0 : e.id) != null) {
            var t = r("WAWebMsgKey").fromString(e.id),
              n = {
                coexSysMsgInsertionSuccess: !0,
                coexSysMsgMultiDeviceId: i,
                coexSysMsgStateTransitionAttempt: o(
                  "WAWebWamEnumCoexSysMsgStateTransitionAttempt",
                ).COEX_SYS_MSG_STATE_TRANSITION_ATTEMPT.E2EE_TO_HOSTED,
                coexSysMsgIsSelf: !1,
              },
              l = new (o(
                "WAWebCoexPrivacySysMsgWamEvent",
              ).CoexPrivacySysMsgWamEvent)(n);
            switch (
              (e.channel != null && (l.coexSysMsgInsertionChannel = e.channel),
              e.subtype)
            ) {
              case "biz_account_type_is_hosted": {
                ((l.coexSysMsgStateTransitionAttempt = o(
                  "WAWebWamEnumCoexSysMsgStateTransitionAttempt",
                ).COEX_SYS_MSG_STATE_TRANSITION_ATTEMPT.HOSTED_TO_HOSTED),
                  (l.coexSysMsgBusinessId = t.remote.user));
                break;
              }
              case "biz_account_type_changed_to_hosted": {
                ((l.coexSysMsgStateTransitionAttempt = o(
                  "WAWebWamEnumCoexSysMsgStateTransitionAttempt",
                ).COEX_SYS_MSG_STATE_TRANSITION_ATTEMPT.E2EE_TO_HOSTED),
                  (l.coexSysMsgBusinessId = t.remote.user));
                break;
              }
              case "biz_me_account_type_is_hosted": {
                var s;
                ((l.coexSysMsgIsSelf = !0),
                  (l.coexSysMsgStateTransitionAttempt = o(
                    "WAWebWamEnumCoexSysMsgStateTransitionAttempt",
                  ).COEX_SYS_MSG_STATE_TRANSITION_ATTEMPT.HOSTED_TO_HOSTED),
                  (l.coexSysMsgBusinessId =
                    (s = a == null ? void 0 : a.user) != null ? s : ""));
                break;
              }
              case "biz_me_account_type_is_hosted_transition": {
                var u;
                ((l.coexSysMsgIsSelf = !0),
                  (l.coexSysMsgStateTransitionAttempt = o(
                    "WAWebWamEnumCoexSysMsgStateTransitionAttempt",
                  ).COEX_SYS_MSG_STATE_TRANSITION_ATTEMPT.E2EE_TO_HOSTED),
                  (l.coexSysMsgBusinessId =
                    (u = a == null ? void 0 : a.user) != null ? u : ""));
                break;
              }
              case "encrypt": {
                var c;
                ((l.coexSysMsgStateTransitionAttempt = o(
                  "WAWebWamEnumCoexSysMsgStateTransitionAttempt",
                ).COEX_SYS_MSG_STATE_TRANSITION_ATTEMPT.HOSTED_TO_E2EE),
                  (l.coexSysMsgBusinessId =
                    t == null || (c = t.remote) == null ? void 0 : c.user));
                break;
              }
              default:
                return;
            }
            l.commit();
          }
        });
      } catch (t) {
        var l = r("getErrorSafe")(t);
        o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[coex] wam event commit failed",
              ])),
          )
          .catching(l)
          .verbose()
          .sendLogs("coex wam event commit failed");
      }
    }
    function b(e) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (c.has(e)) return !1;
          var t = yield o("WAWebSchemaChat").getChatTable().get(e, !1);
          return (c.add(e), !t);
        })),
        v.apply(this, arguments)
      );
    }
    function S(e) {
      c.delete(e.toString());
    }
    function R(e) {
      var t = e.toString() + "_" + o("WATimeUtils").unixTime().toString();
      return d.has(t) ? !0 : (d.add(t), !1);
    }
    function L() {
      d.clear();
    }
    ((l.HOSTED_DEVICE_ID = s),
      (l.fanoutListContainsHostedDevice = m),
      (l.triggerUsyncForCoexDeviceAdd = p),
      (l.triggerUsyncForCoexUpdate = _),
      (l.isCoexSystemMsgType = f),
      (l.isMeOrCurrentContactHosted = g),
      (l.sendWamCoexPrivacySysMsgInsertSuccess = h),
      (l.sendWamCoexPrivacySysMsgHistorySyncInsert = y),
      (l.shouldCreateFallbackHostedAdvSystemMsgOnPlaceholder = b),
      (l.deleteChatFromFallbackHostedAdvSystemMsgOnPlaceholderCache = S),
      (l.shouldDedupInitialHostedSystemMsg = R),
      (l.clearDedupInitialHostedSystemMsgCache = L));
  },
  98,
);
