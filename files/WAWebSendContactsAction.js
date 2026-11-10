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
    "WAWebLidMeUserForChat",
    "WAWebMsgKey",
    "WAWebMsgKeyUtils",
    "WAWebMsgType",
    "WAWebP2PPillsContactShareRequireBundle",
    "WAWebSendMsgChatAction",
    "WAWebServerPropConstants",
    "WAWebToast.react",
    "WAWebToastManager",
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
      g(u, a, l, n, f, s, i);
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
    function g(e, t, a, i, l, u, c) {
      var d,
        m,
        p = u && u.msgContextInfo(i.id),
        _ = o("WAWebLidMeUserForChat").getMeUserLidOrJidForChat(
          i,
          o("WAWebMsgKeyUtils").TranslateMsgKeyType.Message,
        ),
        f = babelHelpers.extends(
          {
            ack: o("WAWebAck").ACK.CLOCK,
            from: _,
            id: new (r("WAWebMsgKey"))({
              from: _,
              to: i.id,
              id: r("WAWebMsgKey").newId_DEPRECATED(),
              participant: o("WAWebChatGetters").getIsGroup(i) ? _ : void 0,
              selfDir: "out",
            }),
            local: !0,
            isNewMsg: !0,
            t: o("WATimeUtils").unixTime(),
            to: i.id,
          },
          p,
          { ctwaContext: c },
        ),
        g =
          o("WAWebBotUtils").isHatchBot(i.id) || i.id.isSupportAgentBot()
            ? self.crypto.getRandomValues(new Uint8Array(32))
            : void 0,
        h =
          o("WAWebBotUtils").isHatchBot(i.id) &&
          (d =
            (m = o("WAWebBotProfileCollection").BotProfileCollection.get(
              i.id,
            )) == null
              ? void 0
              : m.personaId) != null
            ? d
            : void 0,
        y =
          e.length === 1
            ? babelHelpers.extends(
                {
                  type: "vcard",
                  vcardFormattedName: e[0].displayName.toString(),
                  body: e[0].vcard,
                },
                f,
                o("WAWebGetEphemeralFieldsMsgActionsUtils").getEphemeralFields(
                  i,
                ),
                { messageSecret: g, botPersonaId: h },
              )
            : babelHelpers.extends(
                { type: "multi_vcard", vcardList: e },
                f,
                o("WAWebGetEphemeralFieldsMsgActionsUtils").getEphemeralFields(
                  i,
                ),
                { messageSecret: g, botPersonaId: h },
              );
      n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
        try {
          var e = o("WAWebP2PPillsContactShareRequireBundle")
            .getContactCardPillsForSend(t, i, a)
            .then(function (e) {
              return e != null
                ? babelHelpers.extends({}, y, { businessInteractionPills: e })
                : y;
            });
          yield o("WAWebSendMsgChatAction").addAndSendMsgToChat(i, e)[1];
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
