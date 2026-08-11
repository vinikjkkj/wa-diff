__d(
  "WAWebDebugChatAssignment",
  [
    "WAWebABProps",
    "WAWebAgentCollection",
    "WAWebChatAssignmentCollection",
    "WAWebChatAssignmentGatingUtils",
    "WAWebChatAssignmentUtils",
    "WAWebChatCollection",
    "WAWebConnModel",
    "WAWebFeatureFlagCollection",
    "WAWebFeatureFlagName",
    "WAWebMobilePlatforms",
    "WAWebUserPrefsMeUser",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "debug-self-agent",
      s = "debug-assignment-";
    function u(e) {
      (e === void 0 && (e = 3), p());
      var t = f(),
        n = new Set(
          o("WAWebChatAssignmentCollection")
            .ChatAssignmentCollection.getModelsArray()
            .map(function (e) {
              return e.chatId;
            }),
        ),
        r = o("WAWebChatCollection")
          .ChatCollection.getModelsArray()
          .filter(function (e) {
            return e.id.isRegularUser() && e.archive !== !0;
          })
          .map(function (e) {
            return e.id.toString({ legacy: !0 });
          })
          .filter(function (e) {
            return !n.has(e);
          })
          .slice(0, e),
        a = r.map(function (e) {
          return {
            id: "" + s + e,
            chatId: e,
            agentId: t,
            chatOpenedByAgent: !0,
          };
        });
      o(
        "WAWebChatAssignmentCollection",
      ).ChatAssignmentCollection.processChatAssignments(a);
      var i = new Set(
        o("WAWebChatAssignmentCollection")
          .ChatAssignmentCollection.getModelsArray()
          .map(function (e) {
            return e.chatId;
          }),
      );
      return r.filter(function (e) {
        return i.has(e);
      });
    }
    u.doc =
      'Assign the first `count` non-archived 1:1 chats (default 3) to this device, so they match the "Assigned to you" filter. Skips chats that already carry an assignment, so it never disturbs real ones. Also enables the CHAT_ASSIGNMENT subscription flag. Requires the tab to have been loaded with ?smb_md_agent_chat_assignment_enabled=true.';
    function c() {
      var t = o("WAWebChatAssignmentCollection")
        .ChatAssignmentCollection.getModelsArray()
        .filter(function (e) {
          return e.id.startsWith(s);
        });
      return (
        t.forEach(function (e) {
          o("WAWebChatAssignmentCollection").ChatAssignmentCollection.remove(e);
        }),
        o("WAWebAgentCollection").AgentCollection.get(e) != null &&
          o("WAWebAgentCollection").AgentCollection.remove(e),
        t.length
      );
    }
    c.doc =
      "Remove every assignment created by this tool, plus its synthetic agent, and return how many assignments were removed. Deliberately leaves the CHAT_ASSIGNMENT subscription flag enabled: the tool cannot tell whether it turned that flag on or the account already had it, so restoring it could clobber real entitlement state. Same reason it leaves real assignments alone. The flag lives in FeatureFlagCollection and is cleared by a reload. Note: messages sent while the synthetic agent was registered keep its id in their agentId column; that cannot be undone from here.";
    function d() {
      var e;
      return {
        abPropEnabled: o("WAWebABProps").getABPropConfigValue(
          "smb_md_agent_chat_assignment_enabled",
        ),
        chatAssignmentEnabled: o(
          "WAWebChatAssignmentGatingUtils",
        ).chatAssignmentEnabled(),
        connIsSMB: o("WAWebConnModel").Conn.isSMB === !0,
        isSMB: o("WAWebMobilePlatforms").isSMB(),
        assignedChatIds: o("WAWebChatCollection")
          .ChatCollection.getModelsArray()
          .filter(function (e) {
            return e.isAssignedToMe;
          })
          .map(function (e) {
            return e.id.toString({ legacy: !0 });
          }),
        canAssignChats: o("WAWebChatAssignmentUtils").canAssignChats(),
        selfDeviceId: _(),
        subscriptionFlagEnabled:
          ((e = o("WAWebFeatureFlagCollection").FeatureFlagCollection.get(
            o("WAWebFeatureFlagName").FeatureFlagName.CHAT_ASSIGNMENT,
          )) == null
            ? void 0
            : e.enabled) === !0,
      };
    }
    d.doc =
      "Report both gates (ABProp and subscription flag), the resolved canAssignChats(), this device id, and which chats currently read as assigned to you.";
    function m(e) {
      return (e === void 0 && (e = 3), u(e), d());
    }
    m.doc =
      "One-shot: enable the subscription flag, assign `count` chats to this device, then report status. Start here.";
    function p() {
      var e = o("WAWebFeatureFlagCollection").FeatureFlagCollection.get(
        o("WAWebFeatureFlagName").FeatureFlagName.CHAT_ASSIGNMENT,
      );
      if (e != null) {
        e.set({ enabled: !0 });
        return;
      }
      o("WAWebFeatureFlagCollection").FeatureFlagCollection.add({
        id: o("WAWebFeatureFlagName").FeatureFlagName.CHAT_ASSIGNMENT,
        enabled: !0,
        expirationTime: null,
        limit: null,
      });
    }
    function _() {
      return o("WAWebUserPrefsMeUser")
        .getMeDevicePnOrThrow_DO_NOT_USE()
        .getDeviceId();
    }
    function f() {
      var t = _(),
        n = o("WAWebAgentCollection").AgentCollection.getByDeviceId(t);
      return n != null && !n.isDeleted
        ? String(n.id)
        : (o("WAWebAgentCollection").AgentCollection.add({
            id: e,
            deviceId: t,
            name: "Debug agent (you)",
            isDeleted: !1,
          }),
          e);
    }
    var g = { chatAssignment: { assign: u, setup: m, status: d, unassign: c } };
    l.default = g;
  },
  98,
);
