__d(
  "WAWebHandleContactNotification",
  [
    "WADeprecatedWapParser",
    "WALogger",
    "WANullthrows",
    "WAWap",
    "WAWebApiChatCommon",
    "WAWebApiContact",
    "WAWebBackendApi",
    "WAWebBackendJobsCommon",
    "WAWebChangeProfilePicThumb",
    "WAWebContactCollection",
    "WAWebContactGetters",
    "WAWebContactSyncBridge",
    "WAWebContactTextStatusBridge",
    "WAWebDBCreateLidPnMappings",
    "WAWebHandleSingleMsgWorkerCompatible",
    "WAWebJidToWid",
    "WAWebLid1X1MigrationGating",
    "WAWebMessageProcessUtils",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebProcessPhoneNumberChange",
    "WAWebProfilePicConstants",
    "WAWebSchemaChat",
    "WAWebTextStatusGatingUtils",
    "WAWebUpdateTextStatusForContact",
    "WAWebUserPrefsMeUser",
    "WAWebViewMode.flow",
    "WAWebWidFactory",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _ = new (r("WADeprecatedWapParser"))(
        "incomingContactsNotification",
        function (t) {
          t.assertTag("notification");
          var n = t.attrString("id"),
            r = t.attrWapJid("from"),
            a = t.attrTime("t"),
            i = t.attrString("t"),
            l = { from: r, ts: a, rawTs: i, stanzaId: n };
          if (t.hasChild("update")) {
            var s = t.child("update");
            if (s.hasAttr("jid"))
              return babelHelpers.extends(
                {
                  type: "update",
                  jid: o("WAWebJidToWid").userJidToUserWid(
                    s.attrUserJid("jid"),
                  ),
                },
                l,
              );
            if (s.hasAttr("hash")) {
              var u = o("WAWebContactCollection").ContactCollection.findFirst(
                function (e) {
                  var t;
                  return (
                    ((t = o("WAWebContactGetters").getUserhash(e)) == null
                      ? void 0
                      : t.slice(0, 4)) === s.attrString("hash")
                  );
                },
              );
              return u == null
                ? babelHelpers.extends({ type: "empty", jid: null }, l)
                : babelHelpers.extends({ type: "update", jid: u.id }, l);
            }
            return babelHelpers.extends({ type: "empty", jid: null }, l);
          } else if (t.hasChild("add")) {
            var c = t.child("add");
            return babelHelpers.extends(
              {
                type: "add",
                hash: c.hasContent() ? c.contentBytes() : null,
                jid: null,
              },
              l,
            );
          } else if (t.hasChild("remove")) {
            var d = t.child("remove");
            return babelHelpers.extends(
              {
                type: "remove",
                jid: o("WAWebJidToWid").userJidToUserWid(d.attrUserJid("jid")),
              },
              l,
            );
          } else if (t.hasChild("modify")) {
            var m = t.child("modify");
            return babelHelpers.extends(
              {
                type: "modify",
                jid: o("WAWebJidToWid").userJidToUserWid(m.attrUserJid("new")),
                oldJid: o("WAWebJidToWid").userJidToUserWid(
                  m.attrUserJid("old"),
                ),
                lid: m.maybeAttrUserJid("new_lid")
                  ? o("WAWebJidToWid").lidUserJidToUserLid(
                      m.attrLidUserJid("new_lid"),
                    )
                  : null,
                oldLid: m.maybeAttrUserJid("old_lid")
                  ? o("WAWebJidToWid").lidUserJidToUserLid(
                      m.attrLidUserJid("old_lid"),
                    )
                  : null,
              },
              l,
            );
          } else if (t.hasChild("sync")) {
            var p = t.child("sync");
            return babelHelpers.extends(
              { type: "sync", after: p.attrTime("after"), jid: null },
              l,
            );
          }
          return (
            o("WALogger").WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  'Unexpected "contacts" notification',
                ])),
            ),
            babelHelpers.extends({ type: "empty", jid: null }, l)
          );
        },
      );
    async function f(e, t) {
      if (t.type !== "modify")
        throw r("err")("Error: genContactChangeNotificationMsg invalid type");
      var n = o("WAWebUserPrefsMeUser").getMeUser(),
        a = r("WANullthrows")(t.oldJid),
        i = r("WANullthrows")(t.jid),
        l;
      if (t.lid != null && t.oldLid != null) {
        var s = t.oldLid,
          u = t.lid;
        l = [a, i, s, u];
      } else l = [a, i];
      return {
        id: new (r("WAWebMsgKey"))({
          remote: e,
          fromMe: !1,
          id: await r("WAWebMsgKey").newId(),
        }),
        from: e,
        subtype: "change_number",
        viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
        t: t.ts,
        to: n,
        type: "notification_template",
        kind: o("WAWebMsgType").MsgKind.NotificationTemplate,
        templateParams: l,
      };
    }
    async function g(e, t) {
      t.oldJid != null &&
        t.jid != null &&
        (await r("WAWebProcessPhoneNumberChange")(t.oldJid, t.jid));
      var n = await f(e, t);
      await o("WAWebHandleSingleMsgWorkerCompatible").handleSingleMsg({
        chatId: e,
        newMsg: n,
        handleSingleMsgOrigin: "changeNumberNotification",
      });
    }
    async function h(e, t) {
      if (
        t &&
        o("WAWebLid1X1MigrationGating").Lid1X1MigrationUtils.isLidMigrated()
      ) {
        var n = await o(
          "WAWebMessageProcessUtils",
        ).selectChatForOneOnOneMessage({ lid: t });
        return n.chatId;
      }
      return e;
    }
    async function y(e) {
      if (e.oldJid) {
        var t = e.oldJid,
          n = e.jid,
          r = e.oldLid,
          a = e.lid;
        o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "handleModifyAction: oldChatPn: ",
              ", newChatPn: ",
              "",
            ])),
          t.toLogString(),
          n.toLogString(),
        );
        var i = [],
          l = await h(t, r),
          c = await o("WAWebApiChatCommon").getChatRecord(l);
        c &&
          i.push({
            id: c.id,
            changeNumberNewJid: n.toString(),
            changeNumberOldJid: void 0,
          });
        var d = await h(n, a),
          m = await o("WAWebApiChatCommon").getChatRecord(d);
        (m &&
          i.push({
            id: m.id,
            changeNumberNewJid: void 0,
            changeNumberOldJid: t.toString(),
          }),
          await o("WAWebSchemaChat").getChatTable().bulkCreateOrMerge(i),
          o("WAWebBackendApi").frontendFireAndForget(
            "updateChatChangeNumberJids",
            {
              updates: i.map(function (e) {
                return {
                  id: e.id.toString(),
                  changeNumberNewJid: e.changeNumberNewJid,
                  changeNumberOldJid: e.changeNumberOldJid,
                };
              }),
            },
          ),
          r != null &&
            a != null &&
            (await o("WAWebDBCreateLidPnMappings").createLidPnMappings({
              mappings: [
                { lid: r, pn: t },
                { lid: a, pn: n },
              ],
              flushImmediately: !0,
              learningSource: "other",
            })),
          await Promise.all([g(l, e), g(d, e)]));
      } else
        o("WALogger").LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "notification.oldJid is null",
            ])),
        );
    }
    async function C(e) {
      var t = _.parse(e);
      if (t.error)
        throw (
          o("WALogger").ERROR(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "Parsing Error: ",
                "",
              ])),
            t.error.toString(),
          ),
          t.error
        );
      var n = t.success,
        r = n.jid;
      switch (n.type) {
        case "update": {
          if (!r)
            return (
              o("WALogger").WARN(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "handleContactsNotification: update cmd missing jid",
                  ])),
              ),
              s(n)
            );
          (o("WAWebBackendApi").frontendFireAndForget("resetPresence", {
            id: r.toString(),
          }),
            o("WAWebBackendApi").frontendFireAndForget("refreshTextStatus", {
              contactId: r.toString(),
            }));
          var a;
          if (o("WAWebTextStatusGatingUtils").receiveTextStatusEnabled()) {
            var i = await o("WAWebApiContact").getContactRecord(
              o("WAWebWidFactory").asUserWidOrThrow(r),
            );
            i != null &&
              (a = o("WAWebContactTextStatusBridge")
                .getTextStatus(r, i.textStatusLastUpdateTime)
                .then(function (e) {
                  var t = e.emoji,
                    n = e.ephemeralDurationSeconds,
                    r = e.id,
                    a = e.lastUpdateTime,
                    i = e.text;
                  return o(
                    "WAWebUpdateTextStatusForContact",
                  ).updateTextStatusForContact({
                    contactId: r,
                    textString: i,
                    emoji: t,
                    ephemeralDuration: n,
                    newUpdateTime: a != null ? Number(a) : void 0,
                    source: "contact-notification",
                  });
                }));
          }
          var l = o("WAWebChangeProfilePicThumb").changeProfilePicThumb(
            n.jid,
            o("WAWebProfilePicConstants").ProfilePicCommand.Set,
          );
          return (await Promise.all([l, a]), s(n));
        }
        case "modify":
          return (await y(n), s(n));
        case "sync":
          return (
            o("WALogger")
              .LOG(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "received contact sync notification",
                  ])),
              )
              .tags("contact-sync"),
            await o("WAWebContactSyncBridge").doFullContactSync(),
            s(n)
          );
        default:
          return (
            o("WALogger").LOG(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "handleContactsNotification: unhandled notification of type ",
                  "",
                ])),
              n.type,
            ),
            s(n)
          );
      }
      function s(e, t) {
        return o("WAWap").wap(
          "ack",
          {
            id: o("WAWap").CUSTOM_STRING(e.stanzaId),
            to: e.from,
            class: "notification",
            type: "contacts",
          },
          t,
        );
      }
    }
    function b(e) {
      var t = o("WAWebBackendJobsCommon").getNonCriticalNotificationPriority(
        !!e.attrs.offline,
      );
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "handleContactNotification",
          function (e) {
            return C(e.node);
          },
          { priority: t },
        )
        .waitUntilCompleted({ node: e });
    }
    l.default = b;
  },
  98,
);
