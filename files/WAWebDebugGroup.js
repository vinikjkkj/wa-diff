__d(
  "WAWebDebugGroup",
  [
    "Promise",
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
    "WAWebHandleSingleMsgFactory",
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
    "asyncToGeneratorRuntime",
    "err",
    "escapeRegex",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    function d() {
      o("WAWebQueryAndUpdateGroupMetadataJob").queryAndUpdateAllGroupMetadata(
        {},
      );
    }
    d.doc = "Use this to query and update all group metadata";
    function m() {
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
    ((m.doc = "Make everyone in the group an admin"), (m.paramsToExecute = []));
    function p(e, t, a) {
      a === void 0 && (a = "Test");
      for (
        var i = self.performance.now(),
          l = t.map(function (e) {
            return new (r("WAWebContactModel"))({
              id: o("WAWebWidFactory").createWid(e + "@s.whatsapp.net"),
            });
          }),
          s = [],
          u = 0;
        u < e;
        u++
      )
        s.push(
          o("WAWebCreateGroupAction").createGroup(
            { title: a + "-" + u, thumb: null, full: null },
            l,
          ),
        );
      return (c || (c = n("Promise"))).all(s).then(function () {});
    }
    p.doc = "Create [n] groups, each with the given [members]";
    function _(e, t, n) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, a) {
          if (
            (a === void 0 &&
              (a = "Group name filter as a RegExp excluding leading ^"),
            !(e > 1 && a.length < 2))
          ) {
            var i = self.performance.now(),
              l = new RegExp("^" + r("escapeRegex")(a)),
              s = o("WAWebChatCollection").ChatCollection.filter(function (e) {
                return o("WAWebChatGetters").getIsGroup(e) && l.test(e.title());
              });
            if (s.length !== 0) {
              var u = [];
              for (var d of s)
                for (var m = 0; m < e; m++)
                  u.push(
                    o("WAWebSendTextMsgChatAction").sendTextMsgToChat(
                      d,
                      t + " | " + m,
                    ),
                  );
              yield (c || (c = n("Promise"))).all(u);
              var p = e * s.length,
                _ = Math.floor(self.performance.now() - i);
            }
          }
        })),
        f.apply(this, arguments)
      );
    }
    _.doc =
      "Send [message], [n] times, to every group starting with /^[groupNameFilter]/.";
    function g(e, t) {
      t === void 0 && (t = "Test");
      var a = self.performance.now(),
        i = new RegExp("^" + r("escapeRegex")(t)),
        l = o("WAWebChatCollection").ChatCollection.filter(function (e) {
          return (
            o("WAWebChatGetters").getIsGroup(e) &&
            i.test(e.title()) &&
            e.canArchive()
          );
        });
      if (l.length === 0) return (c || (c = n("Promise"))).resolve();
      var s = [];
      for (var u of l)
        s.push(o("WAWebSetArchiveChatAction").setArchive(u, e, !0));
      return (c || (c = n("Promise"))).all(s).then(function () {
        var e = Math.floor(self.performance.now() - a);
      });
    }
    g.doc = "(un)archive every group starting with [tag].";
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
            a = o("WAWebChatCollection").ChatCollection.filter(function (e) {
              return o("WAWebChatGetters").getIsGroup(e) && t.test(e.title());
            });
          if (
            prompt(
              "exit and delete the following groups (y/n)? \n" +
                a
                  .map(function (e) {
                    return e.title();
                  })
                  .join("\n"),
            ) === "y"
          ) {
            var i = a.filter(function (e) {
              var t;
              return e == null || (t = e.groupMetadata) == null
                ? void 0
                : t.participants.iAmMember();
            });
            (yield (c || (c = n("Promise"))).all(
              i.map(function (e) {
                return o("WAWebExitGroupAction").sendExitGroup(e);
              }),
            ),
              yield c.all(
                a.map(function (e) {
                  return o("WAWebDeleteChatAction").sendDelete(e);
                }),
              ));
          }
        })),
        y.apply(this, arguments)
      );
    }
    function C() {
      o("WAWebApiParticipantStore").pruneExpiredPastParticipants();
    }
    C.doc = "Prunes past participants older than 60 days";
    function b(e, t) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = o("WAWebDebugUtils").getSelectedMsg();
          if (!n)
            throw r("err")("You need to select a message by right clicking it");
          if (!o("WAWebMsgGetters").getIsGroupMsg(n))
            throw r("err")("You need to select a group message");
          var a = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
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
          yield o("WAWebHandleSingleMsgFactory").handleSingleMsg({
            chatId: i.id,
            newMsg: d,
            handleSingleMsgOrigin: "debugGroup",
          });
        })),
        v.apply(this, arguments)
      );
    }
    b.doc = "Mocks an incoming admin revoke";
    function S() {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield o("WAWebSchemaGroupMetadata")
              .getGroupMetadataTable()
              .all(),
            t = e.filter(function (e) {
              return e.isLidAddressingMode !== !0;
            }),
            n = t.map(function (e) {
              return o("WAWebWidFactory").createWid(e.id);
            }),
            r = yield o("WAWebGroupsParticipantsApi").bulkCheckMyMembership(n);
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
        })),
        R.apply(this, arguments)
      );
    }
    ((S.doc = "Get all inactive (PN-addressed, isMember) groups"),
      (S.paramsToExecute = []));
    function L() {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return o(
            "WAWebInactiveGroupLidMigrationJob",
          ).migrateInactiveGroupsToLid();
        })),
        E.apply(this, arguments)
      );
    }
    ((L.doc = "Migrate inactive groups to LID addressing mode"),
      (L.paramsToExecute = []));
    function k(e) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebWidFactory").createWid(e),
            n = yield o("WAWebGroupQueryGroupJob").queryGroupJob(t);
          return n;
        })),
        I.apply(this, arguments)
      );
    }
    k.doc = "Run group info query for a given [groupJid]";
    var T = {
      queryAndUpdateAllGroupMetadata: d,
      makeEveryoneAdmin: m,
      bulkCreateGroup: p,
      bulkDeleteGroups: h,
      bulkSendGroupMessage: _,
      bulkArchiveGroups: g,
      cleanPastParticipants: C,
      mockIncomingAdminRevoke: b,
      addParticipantsJob: o("WAWebGroupParticipantsJob").addParticipantsJob,
      handleAddressingModeMismatch: o("WAWebGroupHandleAddressingModeMismatch")
        .handleAddressingModeMismatch,
      findGroupMetadata: o("WAWebFindGroupMetadataAction").findGroupMetadata,
      getInactiveGroups: S,
      migrateInactiveGroups: L,
      queryGroupInfo: k,
    };
    l.default = T;
  },
  98,
);
