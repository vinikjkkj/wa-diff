__d(
  "WAWebSendContactsAction",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebAck",
    "WAWebAttachMediaCollection",
    "WAWebBotProfileCollection",
    "WAWebBotUtils",
    "WAWebChatGetters",
    "WAWebCreateFile",
    "WAWebFrontendVcardUtils",
    "WAWebGetEphemeralFieldsMsgActionsUtils",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebSendMsgChatAction",
    "WAWebServerPropConstants",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUserPrefsMeUser",
    "WAWebVcardUtils",
    "asyncToGeneratorRuntime",
    "nullthrows",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = c || (c = o("react")),
      m = "text/vcard";
    function p(t) {
      var n = t.chat,
        a = t.contacts,
        i = t.ctwaContext,
        l = t.options,
        s = t.quotedMsg,
        u = a.map(function (e, t) {
          return o("WAWebFrontendVcardUtils").vcardFromContactModel(
            e,
            l == null ? void 0 : l[t],
          );
        }),
        c = u.length === 1 ? u[0] : o("WAWebVcardUtils").mergeVcards(u),
        d = c.displayName.toString() + ".vcf",
        p = o("WAWebCreateFile").createFile(
          [r("nullthrows")(c.vcard, "Outgoing vcard has no content")],
          d,
          { type: m },
        ),
        f = p.size / 1024;
      if (f > o("WAWebServerPropConstants").VCARD_AS_DOCUMENT_SIZE_KB) {
        _(p, a.length, n, s, i).catch(function (t) {
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "Error sending contacts via MMS: ",
                "",
              ])),
            t,
          );
        });
        return;
      }
      g(u, n, f, s, i);
    }
    function _(e, t, n, r, o) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a, i) {
            var l = {
                file: e,
                type: o("WAWebMsgType").MSG_TYPE.DOCUMENT,
                filename: e.name,
                mimetype: m,
                isVcardOverMmsDocument: !0,
                documentPageCount: t,
              },
              s = new (r("WAWebAttachMediaCollection"))({
                chatParticipantCount: n.getParticipantCount(),
              });
            yield s.processAttachmentsForChat([l], void 0, n);
            var c = s.uiProcessMsgs(1, null),
              p = c.errorMsgs;
            if (p) {
              o("WAWebToastManager").ToastManager.open(
                d.jsx(o("WAWebToast.react").Toast, { msg: p }),
              );
              return;
            }
            var _ = r("nullthrows")(s.getValidMedias()[0]);
            try {
              yield _.sendToChat({
                chat: n,
                options: { quotedMsg: a, ctwaContext: i },
              });
            } catch (e) {
              throw (
                o("WALogger").LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "Error sending contact: ",
                      "",
                    ])),
                  e,
                ),
                e
              );
            }
          },
        )),
        f.apply(this, arguments)
      );
    }
    function g(e, t, a, i, l) {
      var u,
        c,
        d = i && i.msgContextInfo(t.id),
        m = o("WAWebUserPrefsMeUser").getMeUserOrThrow(),
        p = babelHelpers.extends(
          {
            ack: o("WAWebAck").ACK.CLOCK,
            from: m,
            id: new (r("WAWebMsgKey"))({
              from: m,
              to: t.id,
              id: r("WAWebMsgKey").newId_DEPRECATED(),
              participant: o("WAWebChatGetters").getIsGroup(t) ? m : void 0,
              selfDir: "out",
            }),
            local: !0,
            isNewMsg: !0,
            t: o("WATimeUtils").unixTime(),
            to: t.id,
          },
          d,
          { ctwaContext: l },
        ),
        _ =
          o("WAWebBotUtils").isHatchBot(t.id) || t.id.isSupportAgentBot()
            ? self.crypto.getRandomValues(new Uint8Array(32))
            : void 0,
        f =
          o("WAWebBotUtils").isHatchBot(t.id) &&
          (u =
            (c = o("WAWebBotProfileCollection").BotProfileCollection.get(
              t.id,
            )) == null
              ? void 0
              : c.personaId) != null
            ? u
            : void 0,
        g =
          e.length === 1
            ? babelHelpers.extends(
                {
                  type: "vcard",
                  vcardFormattedName: e[0].displayName.toString(),
                  body: e[0].vcard,
                },
                p,
                o("WAWebGetEphemeralFieldsMsgActionsUtils").getEphemeralFields(
                  t,
                ),
                { messageSecret: _, botPersonaId: f },
              )
            : babelHelpers.extends(
                { type: "multi_vcard", vcardList: e },
                p,
                o("WAWebGetEphemeralFieldsMsgActionsUtils").getEphemeralFields(
                  t,
                ),
                { messageSecret: _, botPersonaId: f },
              );
      n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
        try {
          yield o("WAWebSendMsgChatAction").addAndSendMsgToChat(t, g)[1];
        } catch (e) {
          throw (
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "Error sending contact: ",
                  "",
                ])),
              e,
            ),
            e
          );
        }
      })();
    }
    l.default = p;
  },
  98,
);
