__d(
  "WAWebHandleProfilePicNotification",
  [
    "Promise",
    "WADeprecatedWapParser",
    "WALogger",
    "WAWap",
    "WAWebApiContact",
    "WAWebBackendJobsCommon",
    "WAWebChangeProfilePicThumb",
    "WAWebCommsWapMd",
    "WAWebGroupSystemMsg",
    "WAWebHandleSingleMsgFactory",
    "WAWebJidToWid",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebProfilePicConstants",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m = new (r("WADeprecatedWapParser"))(
        "incomingProfilePicNotificationParser",
        function (e) {
          e.assertTag("notification");
          var t, n;
          if (e.hasChild("delete")) ((t = "delete"), (n = e.child("delete")));
          else if (e.hasChild("set")) ((t = "set"), (n = e.child("set")));
          else if (e.hasChild("request")) {
            ((t = "request"), (n = e.child("request")));
            var r = o("WAWebJidToWid").chatJidToChatWid(n.attrChatJid("jid"));
            if (!o("WAWebUserPrefsMeUser").isMeAccount(r))
              throw e.createParseError("request jid must match self PN or LID");
          } else if (e.hasChild("set_avatar"))
            ((t = "set_avatar"), (n = e.child("set_avatar")));
          else return e.throw("Unexpected profile picture notification type");
          var a = e.attrString("id");
          return n.hasAttr("jid")
            ? {
                type: t,
                from: o("WAWebJidToWid").chatJidToChatWid(
                  e.attrChatJid("from"),
                ),
                jid: o("WAWebJidToWid").chatJidToChatWid(n.attrChatJid("jid")),
                author: n.hasAttr("author")
                  ? o("WAWebJidToWid").userJidToUserWid(n.attrUserJid("author"))
                  : null,
                ts: e.attrTime("t"),
                rawTs: e.attrString("t"),
                stanzaId: a,
                picId: t === "set" ? n.attrInt("id", 1) : 0,
              }
            : {
                from: o("WAWebJidToWid").userJidToUserWid(
                  e.attrUserJid("from"),
                ),
                jid: null,
                type: t,
                hash: n.attrString("hash"),
                ts: e.attrTime("t"),
                stanzaId: a,
              };
        },
      );
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var r = m.parse(t);
          if (r.error)
            return (
              o("WALogger").ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "Parsing Error: ",
                    "",
                  ])),
                r.error.toString(),
              ),
              (d || (d = n("Promise"))).reject(r.error)
            );
          var a = r.success,
            i = (d || (d = n("Promise"))).resolve();
          if (a.jid || a.hash) {
            var l;
            if (a.jid) l = a.jid;
            else {
              var p = yield o("WAWebApiContact").getContactRecordByHash(a.hash);
              p == null
                ? o("WALogger").WARN(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "side contact hash not found for pic update",
                      ])),
                  )
                : (l = o("WAWebWidFactory").createWid(p.id));
            }
            switch (a.type) {
              case "delete":
              case "set": {
                var _ =
                  a.type === "delete"
                    ? o("WAWebProfilePicConstants").ProfilePicCommand.Remove
                    : o("WAWebProfilePicConstants").ProfilePicCommand.Set;
                l &&
                  (i = o("WAWebChangeProfilePicThumb")
                    .changeProfilePicThumb(l, _)
                    .then(function () {
                      if (l.isGroup() && a.ts != null) {
                        var e = o(
                          "WAWebGroupSystemMsg",
                        ).genGroupPicChangeNotificationMsg(
                          l,
                          _,
                          a.ts,
                          a.author ||
                            o(
                              "WAWebUserPrefsMeUser",
                            ).getMePnUserOrThrow_DO_NOT_USE(),
                        );
                        return o("WAWebHandleSingleMsgFactory").handleSingleMsg(
                          {
                            chatId: l,
                            newMsg: e,
                            handleSingleMsgOrigin: "profilePicNotification",
                          },
                        );
                      }
                    }));
                break;
              }
              case "request":
                break;
              case "set_avatar":
                o("WALogger").WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "set_avatar picture notification is not implemented",
                    ])),
                );
                break;
              default:
                o("WALogger").WARN(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "Invalid type received",
                    ])),
                );
            }
          }
          return i.then(function () {
            return o("WAWap").wap("ack", {
              id: o("WAWap").CUSTOM_STRING(a.stanzaId),
              to: o("WAWebCommsWapMd").JID(a.from),
              class: "notification",
              type: "picture",
            });
          });
        })),
        _.apply(this, arguments)
      );
    }
    function f(e) {
      var t = o("WAWebBackendJobsCommon").getNonCriticalNotificationPriority(
        !!e.attrs.offline,
      );
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "handleProfilePicNotification",
          function (e) {
            return p(e.node);
          },
          { priority: t },
        )
        .waitUntilCompleted({ node: e });
    }
    l.handleProfilePicNotificationJob = f;
  },
  98,
);
