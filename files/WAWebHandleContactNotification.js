__d(
  "WAWebHandleContactNotification",
  [
    "Promise",
    "WADeprecatedWapParser",
    "WALogger",
    "WANullthrows",
    "WAWap",
    "WAWebApiChatCommon",
    "WAWebBackendJobsCommon",
    "WAWebChangeProfilePicThumb",
    "WAWebChatCollection",
    "WAWebContactCollection",
    "WAWebContactGetters",
    "WAWebContactSyncBridge",
    "WAWebContactTextStatusBridge",
    "WAWebDBCreateLidPnMappings",
    "WAWebHandleSingleMsgFactory",
    "WAWebJidToWid",
    "WAWebLid1X1MigrationGating",
    "WAWebMessageProcessUtils",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebPresenceCollection",
    "WAWebProcessPhoneNumberChange",
    "WAWebProfilePicConstants",
    "WAWebSchemaChat",
    "WAWebStatusContactAction",
    "WAWebTextStatusCollection",
    "WAWebTextStatusGatingUtils",
    "WAWebUpdateTextStatusForContact",
    "WAWebUserPrefsMeUser",
    "WAWebViewMode.flow",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
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
      _,
      f = new (r("WADeprecatedWapParser"))(
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
    function g(e, t) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (t.type !== "modify")
            throw r("err")(
              "Error: genContactChangeNotificationMsg invalid type",
            );
          var n = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
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
              id: yield r("WAWebMsgKey").newId(),
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
        })),
        h.apply(this, arguments)
      );
    }
    function y(e, t) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          t.oldJid != null &&
            t.jid != null &&
            (yield r("WAWebProcessPhoneNumberChange")(t.oldJid, t.jid));
          var n = yield g(e, t);
          yield o("WAWebHandleSingleMsgFactory").handleSingleMsg({
            chatId: e,
            newMsg: n,
            handleSingleMsgOrigin: "changeNumberNotification",
          });
        })),
        C.apply(this, arguments)
      );
    }
    function b(e, t) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (
            t &&
            o("WAWebLid1X1MigrationGating").Lid1X1MigrationUtils.isLidMigrated()
          ) {
            var n = yield o(
              "WAWebMessageProcessUtils",
            ).selectChatForOneOnOneMessage({ lid: t });
            return n.chatId;
          }
          return e;
        })),
        v.apply(this, arguments)
      );
    }
    function S(e) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (e.oldJid) {
            var t = e.oldJid,
              r = e.jid,
              a = e.oldLid,
              i = e.lid;
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "handleModifyAction: oldChatPn: ",
                  ", newChatPn: ",
                  "",
                ])),
              t.toLogString(),
              r.toLogString(),
            );
            var l = [],
              c = yield b(t, a),
              d = yield o("WAWebApiChatCommon").getChatRecord(c);
            d &&
              l.push({
                id: d.id,
                changeNumberNewJid: r.toString(),
                changeNumberOldJid: void 0,
              });
            var m = yield b(r, i),
              p = yield o("WAWebApiChatCommon").getChatRecord(m);
            (p &&
              l.push({
                id: p.id,
                changeNumberNewJid: void 0,
                changeNumberOldJid: t.toString(),
              }),
              yield o("WAWebSchemaChat")
                .getChatTable()
                .bulkCreateOrMerge(l)
                .then(function () {
                  l.forEach(function (e) {
                    var t = o("WAWebChatCollection").ChatCollection.get(e.id);
                    if (t) {
                      var n = e.changeNumberNewJid,
                        r = e.changeNumberOldJid;
                      ((t.changeNumberNewJid =
                        n != null ? o("WAWebWidFactory").createWid(n) : void 0),
                        (t.changeNumberOldJid =
                          r != null
                            ? o("WAWebWidFactory").createWid(r)
                            : void 0));
                    }
                  });
                }),
              a != null &&
                i != null &&
                (yield o("WAWebDBCreateLidPnMappings").createLidPnMappings({
                  mappings: [
                    { lid: a, pn: t },
                    { lid: i, pn: r },
                  ],
                  flushImmediately: !0,
                  learningSource: "other",
                })),
              yield (_ || (_ = n("Promise"))).all([y(c, e), y(m, e)]));
          } else
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "notification.oldJid is null",
                ])),
            );
        })),
        R.apply(this, arguments)
      );
    }
    function L(e) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = f.parse(e);
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
          var r = t.success,
            a = r.jid;
          switch (r.type) {
            case "update": {
              if (!a)
                return (
                  o("WALogger").WARN(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "handleContactsNotification: update cmd missing jid",
                      ])),
                  ),
                  y(r)
                );
              var i = o("WAWebPresenceCollection").PresenceCollection.get(a);
              i && i.reset();
              var l = o("WAWebTextStatusCollection").TextStatusCollection.get(
                  a,
                ),
                s =
                  l == null
                    ? null
                    : o("WAWebStatusContactAction")
                        .getStatus(o("WAWebWidFactory").asUserWidOrThrow(a))
                        .then(function (e) {
                          l.set({ status: e.status });
                        }),
                u = o("WAWebContactCollection").ContactCollection.get(a),
                g;
              u &&
                o("WAWebTextStatusGatingUtils").receiveTextStatusEnabled() &&
                (g = o("WAWebContactTextStatusBridge")
                  .getTextStatus(u.id, u.textStatusLastUpdateTime)
                  .then(function (e) {
                    var t = e.emoji,
                      n = e.ephemeralDurationSeconds,
                      r = e.id,
                      a = e.lastUpdateTime,
                      i = e.text;
                    return o(
                      "WAWebUpdateTextStatusForContact",
                    ).updateTextStatusForContact(
                      r,
                      i,
                      t,
                      n,
                      a != null ? Number(a) : void 0,
                    );
                  }));
              var h = o("WAWebChangeProfilePicThumb").changeProfilePicThumb(
                r.jid,
                o("WAWebProfilePicConstants").ProfilePicCommand.Set,
              );
              return (yield (_ || (_ = n("Promise"))).all([h, s, g]), y(r));
            }
            case "modify":
              return (yield S(r), y(r));
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
                yield o("WAWebContactSyncBridge").doFullContactSync(),
                y(r)
              );
            default:
              return (
                o("WALogger").LOG(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "handleContactsNotification: unhandled notification of type ",
                      "",
                    ])),
                  r.type,
                ),
                y(r)
              );
          }
          function y(e, t) {
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
        })),
        E.apply(this, arguments)
      );
    }
    function k(e) {
      var t = o("WAWebBackendJobsCommon").getNonCriticalNotificationPriority(
        !!e.attrs.offline,
      );
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "handleContactNotification",
          function (e) {
            return L(e.node);
          },
          { priority: t },
        )
        .waitUntilCompleted({ node: e });
    }
    l.default = k;
  },
  98,
);
