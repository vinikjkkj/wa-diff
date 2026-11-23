__d(
  "WAWebHandleContactNotification",
  [
    "WADeprecatedWapParser",
    "WALogger",
    "WAWap",
    "WAWebApiChatCommon",
    "WAWebApiContact",
    "WAWebBackendApi",
    "WAWebBackendJobsCommon",
    "WAWebChangeProfilePicThumb",
    "WAWebCheckChatExistsOrCreate",
    "WAWebContactSyncBridge",
    "WAWebDBCreateLidPnMappings",
    "WAWebDBProcessMessage",
    "WAWebHandleSingleMsgWorkerCompatible",
    "WAWebJidToWid",
    "WAWebLidAwareContactsDB",
    "WAWebMessageProcessUtils",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebProcessPhoneNumberChange",
    "WAWebProfilePicConstants",
    "WAWebSchemaChat",
    "WAWebSchemaContact_DO_NOT_USE_DIRECTLY",
    "WAWebTextStatusUtils",
    "WAWebUpdateTextStatusForContact",
    "WAWebUserUtils",
    "WAWebUsernameTypes",
    "WAWebViewMode.flow",
    "WAWebWidFactory",
    "err",
    "isStringNullOrEmpty",
    "nullthrows",
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
            return s.hasAttr("jid")
              ? babelHelpers.extends(
                  {
                    type: "update",
                    jid: o("WAWebJidToWid").userJidToUserWid(
                      s.attrUserJid("jid"),
                    ),
                  },
                  l,
                )
              : s.hasAttr("hash")
                ? babelHelpers.extends(
                    {
                      type: "update_by_hash",
                      hash: s.attrString("hash"),
                      jid: null,
                    },
                    l,
                  )
                : babelHelpers.extends({ type: "empty", jid: null }, l);
          } else if (t.hasChild("add")) {
            var u = t.child("add");
            return babelHelpers.extends(
              {
                type: "add",
                hash: u.hasContent() ? u.contentBytes() : null,
                jid: null,
              },
              l,
            );
          } else if (t.hasChild("remove")) {
            var c = t.child("remove");
            return babelHelpers.extends(
              {
                type: "remove",
                jid: o("WAWebJidToWid").userJidToUserWid(c.attrUserJid("jid")),
              },
              l,
            );
          } else if (t.hasChild("modify")) {
            var d = t.child("modify");
            return babelHelpers.extends(
              {
                type: "modify",
                jid: o("WAWebJidToWid").userJidToUserWid(d.attrUserJid("new")),
                oldJid: o("WAWebJidToWid").userJidToUserWid(
                  d.attrUserJid("old"),
                ),
                lid: d.maybeAttrUserJid("new_lid")
                  ? o("WAWebJidToWid").lidUserJidToUserLid(
                      d.attrLidUserJid("new_lid"),
                    )
                  : null,
                oldLid: d.maybeAttrUserJid("old_lid")
                  ? o("WAWebJidToWid").lidUserJidToUserLid(
                      d.attrLidUserJid("old_lid"),
                    )
                  : null,
              },
              l,
            );
          } else if (t.hasChild("sync")) {
            var m = t.child("sync");
            return babelHelpers.extends(
              { type: "sync", after: m.attrTime("after"), jid: null },
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
      var n = o("WAWebUserUtils").getMeUserOrThrow(),
        a = r("nullthrows")(t.oldJid),
        i = r("nullthrows")(t.jid),
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
      var n = e.chatId,
        a = await f(n, t);
      if (
        (e.accountLid != null &&
          (await o("WAWebCheckChatExistsOrCreate").checkChatExistsOrCreate({
            destinationChat: e,
            msgMeta: null,
            chatOriginType: "changeNumberNotification",
            options: { firstIncomingMsg: a },
          })),
        (await o("WAWebApiChatCommon").getChatRecord(n)) == null)
      ) {
        await o("WAWebDBProcessMessage").storeMessages([a], n);
        return;
      }
      await o("WAWebHandleSingleMsgWorkerCompatible").handleSingleMsg({
        chatId: n,
        newMsg: a,
        handleSingleMsgOrigin: "changeNumberNotification",
      });
    }
    async function h(e, t) {
      return t
        ? o("WAWebMessageProcessUtils").selectChatForOneOnOneMessage({ lid: t })
        : { chatId: e };
    }
    async function y(e, t) {
      var n = await o("WAWebSchemaContact_DO_NOT_USE_DIRECTLY")
          .getContactTable()
          .bulkGet([e.toString()]),
        a = n[0];
      if (a != null) {
        var i = a.displayNameLID,
          l = a.isEphemeralityDisabled,
          s = a.isUsernameContact,
          u = a.pushname,
          c = a.username,
          d = a.usernameKey;
        if (
          !(
            !o("WAWebUsernameTypes").isPresentUsername(c) &&
            d == null &&
            s == null &&
            r("isStringNullOrEmpty")(u) &&
            r("isStringNullOrEmpty")(i) &&
            l !== !0
          )
        ) {
          var m = { id: t.toString() };
          (o("WAWebUsernameTypes").isPresentUsername(c) && (m.username = c),
            d != null && (m.usernameKey = d),
            s != null && (m.isUsernameContact = s),
            r("isStringNullOrEmpty")(u) || (m.pushname = u),
            r("isStringNullOrEmpty")(i) || (m.displayNameLID = i),
            l === !0 && (m.isEphemeralityDisabled = !0),
            await r("WAWebLidAwareContactsDB").bulkCreateOrMerge(
              [m],
              "propagateContactDataToNewLid",
            ),
            o("WAWebBackendApi").frontendFireAndForget(
              "propagateIdentityFieldsToLidContact",
              {
                lid: t,
                username: c,
                usernameKey: d,
                isUsernameContact: s,
                pushname: u,
                displayNameLID: i,
                isEphemeralityDisabled: l,
              },
            ));
        }
      }
    }
    async function C(e) {
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
          c = await o("WAWebApiChatCommon").getChatRecord(l.chatId);
        c &&
          i.push({
            id: c.id,
            changeNumberNewJid: n.toString(),
            changeNumberOldJid: void 0,
          });
        var d = await h(n, a),
          m = await o("WAWebApiChatCommon").getChatRecord(d.chatId);
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
              write: "now",
              learningSource: "contact-notification",
            }),
            r.equals(a) || (await y(r, a))),
          await Promise.all([g(l, e), g(d, e)]));
      } else
        o("WALogger").LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "notification.oldJid is null",
            ])),
        );
    }
    async function b(e) {
      o("WAWebBackendApi").frontendFireAndForget("resetPresence", {
        id: e.toString(),
      });
      var t,
        n = await o("WAWebApiContact").getContactRecord(
          o("WAWebWidFactory").asUserWidOrThrow(e),
        );
      n != null &&
        (t = o("WAWebUpdateTextStatusForContact").updateTextStatusForContact({
          contactId: e,
          textString: null,
          emoji: null,
          ephemeralDuration: null,
          newUpdateTime: o("WAWebTextStatusUtils").TEXT_STATUS_NOT_FETCHED,
          source: "contact-notification",
        }));
      var r = o("WAWebChangeProfilePicThumb").changeProfilePicThumb(
        e,
        o("WAWebProfilePicConstants").ProfilePicCommand.Set,
      );
      await Promise.all([r, t]);
    }
    async function v(e) {
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
        case "update":
          return r
            ? (await b(r), i(n))
            : (o("WALogger").WARN(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "handleContactsNotification: update cmd missing jid",
                  ])),
              ),
              i(n));
        case "update_by_hash": {
          var a = await o("WAWebApiContact").getContactRecordByHash(n.hash);
          return (
            a == null || (await b(o("WAWebWidFactory").createWid(a.id))),
            i(n)
          );
        }
        case "modify":
          return (await C(n), i(n));
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
            i(n)
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
            i(n)
          );
      }
      function i(e, t) {
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
    function S(e) {
      var t = o("WAWebBackendJobsCommon").getNonCriticalNotificationPriority(
        !!e.attrs.offline,
      );
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "handleContactNotification",
          function (e) {
            return v(e.node);
          },
          { priority: t },
        )
        .waitUntilCompleted({ node: e });
    }
    l.default = S;
  },
  98,
);
