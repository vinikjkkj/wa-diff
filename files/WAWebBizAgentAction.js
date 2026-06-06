__d(
  "WAWebBizAgentAction",
  [
    "WATimeUtils",
    "WAWebAgentCollection",
    "WAWebAgentModelUtils",
    "WAWebBizAgentLoginState",
    "WAWebChatAssignmentGatingUtils",
    "WAWebCmd",
    "WAWebMdExpansionAgentBrowserMdIdWamEvent",
    "WAWebMiscBrowserUtils",
    "WAWebMsgCollection",
    "WAWebSchemaAgent",
    "WAWebSchemaMessage",
    "WAWebUnattributedMessageCollection",
    "WAWebUserPrefsMeUser",
    "WAWebWamEnumMultideviceActionType",
    "compactMap",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t;
      return (
        e.author.user !==
        ((t = o("WAWebUserPrefsMeUser").getMaybeMePnUser()) == null
          ? void 0
          : t.user)
      );
    }
    async function s(t, n) {
      if (
        !(e(t) || !o("WAWebAgentModelUtils").canUserSeeMessageAttribution())
      ) {
        var a = t.author.getDeviceId(),
          i = o("WAWebAgentCollection").AgentCollection.getByDeviceId(a);
        if (i == null) {
          var l = n.map(function (e) {
            return { id: e.id.toString(), deviceId: a };
          });
          o(
            "WAWebUnattributedMessageCollection",
          ).UnattributedMessageCollection.add(l);
          return;
        }
        var s = r("compactMap")(n, function (e) {
            return o("WAWebMsgCollection").MsgCollection.get(e.id);
          }).filter(function (e) {
            return e.agentId == null;
          }),
          u = String(i.id);
        s.forEach(function (e) {
          e.agentId = u;
        });
        var c = s.map(function (e) {
          var t = e.id.toString();
          return { id: t, agentId: u };
        });
        await o("WAWebSchemaMessage").getMessageTable().bulkCreateOrMerge(c);
      }
    }
    function u(e) {
      if (
        e.agentId != null ||
        !o("WAWebAgentModelUtils").canUserSeeMessageAttribution()
      )
        return e.agentId;
      var t = o("WAWebUserPrefsMeUser").getMaybeMeDevicePn();
      if (t != null) {
        var n = o("WAWebAgentCollection").AgentCollection.getByDeviceId(
          t.getDeviceId(),
        );
        if (n != null) return n.id;
      }
    }
    var c;
    function d(e, t) {
      (t === void 0 && (t = !1),
        o(
          "WAWebChatAssignmentGatingUtils",
        ).isMultiDeviceAgentsLoggingEnabled() &&
          new (o(
            "WAWebMdExpansionAgentBrowserMdIdWamEvent",
          ).MdExpansionAgentBrowserMdIdWamEvent)(
            babelHelpers.extends({ agentId: c }, e),
          ).commitAndWaitForFlush(t));
    }
    function m(e) {
      var t = o("WAWebBizAgentLoginState").getAgentLoginPayload();
      t != null &&
        d(
          babelHelpers.extends({}, e, t, {
            multideviceAction: o("WAWebWamEnumMultideviceActionType")
              .MULTIDEVICE_ACTION_TYPE.LOGIN,
          }),
        );
    }
    async function p() {
      if (
        o(
          "WAWebChatAssignmentGatingUtils",
        ).isMultiDeviceMessageAttributionEnabled()
      ) {
        var e = await o("WAWebSchemaAgent").getAgentTable().all();
        o("WAWebAgentCollection").AgentCollection.initializeFromCache(e);
      }
    }
    async function _() {
      if (
        (await p(),
        !!o(
          "WAWebChatAssignmentGatingUtils",
        ).isMultiDeviceAgentsLoggingEnabled())
      ) {
        var e = o("WAWebUserPrefsMeUser")
            .getMeDevicePnOrThrow_DO_NOT_USE()
            .getDeviceId(),
          t = r("WAWebMiscBrowserUtils").persistentExpiringId();
        (o("WAWebCmd").Cmd.on("logout_from_bridge", function () {
          d(
            {
              browserId: t,
              companionMdId: e,
              logoutTimestamp:
                o("WATimeUtils").unixTimeWithoutClockSkewCorrection(),
              multideviceAction: o("WAWebWamEnumMultideviceActionType")
                .MULTIDEVICE_ACTION_TYPE.LOGOUT,
            },
            !0,
          );
        }),
          document.addEventListener("visibilitychange", function () {
            document.hidden ||
              d({
                browserId: t,
                companionMdId: e,
                multideviceAction: o("WAWebWamEnumMultideviceActionType")
                  .MULTIDEVICE_ACTION_TYPE.ACTIVE,
              });
          }));
        var n = o("WAWebAgentCollection").AgentCollection.getByDeviceId(e);
        n != null
          ? ((c = n.id), m({ browserId: t, companionMdId: e }))
          : o("WAWebCmd").Cmd.on(
              "app_state_sync_completed_from_bridge",
              function () {
                var n = o("WAWebAgentCollection").AgentCollection.getByDeviceId(
                  e,
                );
                (n == null ? void 0 : n.id) != null &&
                  c == null &&
                  ((c = n.id), m({ browserId: t, companionMdId: e }));
              },
            );
      }
    }
    function f(e) {
      var t =
          e != null ? o("WAWebAgentCollection").AgentCollection.get(e) : void 0,
        n = r("WAWebMiscBrowserUtils").persistentExpiringId();
      d({
        browserId: n,
        agentId: t == null ? void 0 : t.id,
        companionMdId: t == null ? void 0 : t.deviceId,
        multideviceAction: o("WAWebWamEnumMultideviceActionType")
          .MULTIDEVICE_ACTION_TYPE.MESSAGE_INFO,
      });
    }
    ((l.updateUnattributedMessages = s),
      (l.getAgentId = u),
      (l.initializeAgentLog = _),
      (l.logMessageInfo = f));
  },
  98,
);
