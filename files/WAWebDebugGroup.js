__d(
  "WAWebDebugGroup",
  [
    "WALogger",
    "WAWebApiParticipantStore",
    "WAWebChatCollection",
    "WAWebChatGetters",
    "WAWebContactModel",
    "WAWebCreateGroupAction",
    "WAWebDebugUtils",
    "WAWebDeleteChatAction",
    "WAWebExitGroupAction",
    "WAWebFindGroupMetadataAction",
    "WAWebFrontendMsgGetters",
    "WAWebGroupHandleAddressingModeMismatch",
    "WAWebGroupParticipantsJob",
    "WAWebGroupQueryGroupJob",
    "WAWebGroupsParticipantsApi",
    "WAWebHandleSingleMsgWorkerCompatible",
    "WAWebInactiveGroupLidMigrationJob",
    "WAWebModifyParticipantsGroupAction",
    "WAWebMsgGetters",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebQueryAndUpdateGroupMetadataJob",
    "WAWebSchemaGroupMetadata",
    "WAWebSendTextMsgChatAction",
    "WAWebSetArchiveChatAction",
    "WAWebUserPrefsMeUser",
    "WAWebViewMode.flow",
    "WAWebWidFactory",
    "err",
    "escapeRegex",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c() {
      o("WAWebQueryAndUpdateGroupMetadataJob").queryAndUpdateAllGroupMetadata(
        {},
      );
    }
    c.doc = "Use this to query and update all group metadata";
    function d() {
      var t = o("WAWebDebugUtils").getSelectedChat();
      if (!t || !t.groupMetadata) {
        o("WALogger").WARN(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "the current chat is not a group chat",
            ])),
        );
        return;
      }
      var n = t.groupMetadata.participants;
      if (!n.iAmAdmin()) {
        o("WALogger").WARN(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "you are not an admin in this chat",
            ])),
        );
        return;
      }
      var r = n.filter(function (e) {
        return !e.isAdmin;
      });
      o("WAWebModifyParticipantsGroupAction").promoteParticipants(t, r);
    }
    ((d.doc = "Make everyone in the group an admin"), (d.paramsToExecute = []));
    function m(e, t, n) {
      n === void 0 && (n = "Test");
      for (
        var a = self.performance.now(),
          i = t.map(function (e) {
            return new (r("WAWebContactModel"))({
              id: o("WAWebWidFactory").createWid(e + "@s.whatsapp.net"),
            });
          }),
          l = [],
          s = 0;
        s < e;
        s++
      )
        l.push(
          o("WAWebCreateGroupAction").createGroup(
            { title: n + "-" + s, thumb: null, full: null },
            i,
          ),
        );
      return Promise.all(l).then(function () {});
    }
    m.doc = "Create [n] groups, each with the given [members]";
    async function p(e, t, n) {
      if (
        (n === void 0 &&
          (n = "Group name filter as a RegExp excluding leading ^"),
        !(e > 1 && n.length < 2))
      ) {
        var a = self.performance.now(),
          i = new RegExp("^" + r("escapeRegex")(n)),
          l = o("WAWebChatCollection").ChatCollection.filter(function (e) {
            return o("WAWebChatGetters").getIsGroup(e) && i.test(e.title());
          });
        if (l.length !== 0) {
          var s = [];
          for (var u of l)
            for (var c = 0; c < e; c++)
              s.push(
                o("WAWebSendTextMsgChatAction").sendTextMsgToChat(
                  u,
                  t + " | " + c,
                ),
              );
          await Promise.all(s);
          var d = e * l.length,
            m = Math.floor(self.performance.now() - a);
        }
      }
    }
    p.doc =
      "Send [message], [n] times, to every group starting with /^[groupNameFilter]/.";
    function _(e, t) {
      t === void 0 && (t = "Test");
      var n = self.performance.now(),
        a = new RegExp("^" + r("escapeRegex")(t)),
        i = o("WAWebChatCollection").ChatCollection.filter(function (e) {
          return (
            o("WAWebChatGetters").getIsGroup(e) &&
            a.test(e.title()) &&
            e.canArchive()
          );
        });
      if (i.length === 0) return Promise.resolve();
      var l = [];
      for (var s of i)
        l.push(o("WAWebSetArchiveChatAction").setArchive(s, e, !0));
      return Promise.all(l).then(function () {
        var e = Math.floor(self.performance.now() - n);
      });
    }
    _.doc = "(un)archive every group starting with [tag].";
    async function f(e) {
      if (e == null) {
        o("WALogger").ERROR(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "bulkDeleteGroups: requires a tag",
            ])),
        );
        return;
      }
      var t = new RegExp("^" + r("escapeRegex")(e)),
        n = o("WAWebChatCollection").ChatCollection.filter(function (e) {
          return o("WAWebChatGetters").getIsGroup(e) && t.test(e.title());
        });
      if (
        prompt(
          `exit and delete the following groups (y/n)? 
` +
            n.map(function (e) {
              return e.title();
            }).join(`
`),
        ) === "y"
      ) {
        var a = n.filter(function (e) {
          var t;
          return e == null || (t = e.groupMetadata) == null
            ? void 0
            : t.participants.iAmMember();
        });
        (await Promise.all(
          a.map(function (e) {
            return o("WAWebExitGroupAction").sendExitGroup(e);
          }),
        ),
          await Promise.all(
            n.map(function (e) {
              return o("WAWebDeleteChatAction").sendDelete(e);
            }),
          ));
      }
    }
    function g() {
      o("WAWebApiParticipantStore").pruneExpiredPastParticipants();
    }
    g.doc = "Prunes past participants older than 60 days";
    async function h(e, t) {
      var n = o("WAWebDebugUtils").getSelectedMsg();
      if (!n)
        throw r("err")("You need to select a message by right clicking it");
      if (!o("WAWebMsgGetters").getIsGroupMsg(n))
        throw r("err")("You need to select a group message");
      var a = o("WAWebUserPrefsMeUser").getMeUser(),
        i = o("WAWebFrontendMsgGetters").getChat(n),
        l;
      if (e) l = a;
      else if (t != null) l = o("WAWebWidFactory").createWid(t + "@c.us");
      else {
        var s;
        l =
          (s = i.groupMetadata) == null
            ? void 0
            : s.participants.filter(function (e) {
                return !e.id.equals(a) && e.isAdmin;
              })[0].id;
      }
      if (!l) throw r("err")("No admin found");
      var u = n.id,
        c = Math.round(Date.now() / 1e3),
        d = {
          id: new (r("WAWebMsgKey"))({
            fromMe: e,
            remote: u.remote,
            id: "ADMIN-REVOKE-MSG-ID-" + c,
            participant: l,
          }),
          from: u.remote,
          to: a,
          type: o("WAWebMsgType").MSG_TYPE.PROTOCOL,
          kind: o("WAWebMsgType").MsgKind.ProtocolRevoke,
          viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
          t: c,
          ack: 1,
          author: l,
          broadcast: !1,
          notifyName: "Mock",
          protocolMessageKey: u,
          subtype: "admin_revoke",
          requiresDirectConnection: !1,
          recvFresh: !0,
          isNewMsg: !0,
        };
      await o("WAWebHandleSingleMsgWorkerCompatible").handleSingleMsg({
        chatId: i.id,
        newMsg: d,
        handleSingleMsgOrigin: "debugGroup",
      });
    }
    h.doc = "Mocks an incoming admin revoke";
    async function y() {
      var e = await o("WAWebSchemaGroupMetadata").getGroupMetadataTable().all(),
        t = e.filter(function (e) {
          return e.isLidAddressingMode !== !0;
        }),
        n = t.map(function (e) {
          return o("WAWebWidFactory").createWid(e.id);
        }),
        r = await o("WAWebGroupsParticipantsApi").bulkCheckMyMembership(n);
      return t.map(function (e, t) {
        return {
          id: e.id,
          subject: e.subject,
          isLidAddressingMode: e.isLidAddressingMode,
          suspended: e.suspended,
          terminated: e.terminated,
          isMember: r[t],
        };
      });
    }
    ((y.doc = "Get all inactive (PN-addressed, isMember) groups"),
      (y.paramsToExecute = []));
    async function C() {
      return o(
        "WAWebInactiveGroupLidMigrationJob",
      ).migrateInactiveGroupsToLid();
    }
    ((C.doc = "Migrate inactive groups to LID addressing mode"),
      (C.paramsToExecute = []));
    async function b(e) {
      var t = o("WAWebWidFactory").createWid(e),
        n = await o("WAWebGroupQueryGroupJob").queryGroupJob(t);
      return n;
    }
    b.doc = "Run group info query for a given [groupJid]";
    var v = {
      queryAndUpdateAllGroupMetadata: c,
      makeEveryoneAdmin: d,
      bulkCreateGroup: m,
      bulkDeleteGroups: f,
      bulkSendGroupMessage: p,
      bulkArchiveGroups: _,
      cleanPastParticipants: g,
      mockIncomingAdminRevoke: h,
      addParticipantsJob: o("WAWebGroupParticipantsJob").addParticipantsJob,
      handleAddressingModeMismatch: o("WAWebGroupHandleAddressingModeMismatch")
        .handleAddressingModeMismatch,
      findGroupMetadata: o("WAWebFindGroupMetadataAction").findGroupMetadata,
      getInactiveGroups: y,
      migrateInactiveGroups: C,
      queryGroupInfo: b,
    };
    l.default = v;
  },
  98,
);
