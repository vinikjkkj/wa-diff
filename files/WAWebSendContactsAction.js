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
        g = p.size / 1024;
      if (g > o("WAWebServerPropConstants").VCARD_AS_DOCUMENT_SIZE_KB) {
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
      f(u, a, l, n, g, s, i);
    }
    async function _(e, t, n, a, i) {
      var l = {
          file: e,
          type: o("WAWebMsgType").MSG_TYPE.DOCUMENT,
          filename: e.name,
          mimetype: m,
          isVcardOverMmsDocument: !0,
          documentPageCount: t,
        },
        u = new (r("WAWebAttachMediaCollection"))({
          chatParticipantCount: n.getParticipantCount(),
        });
      await u.processAttachmentsForChat([l], void 0, n);
      var c = u.uiProcessMsgs(1, null),
        p = c.errorMsgs;
      if (p) {
        o("WAWebToastManager").ToastManager.open(
          d.jsx(o("WAWebToast.react").Toast, { msg: p }),
        );
        return;
      }
      var _ = r("nullthrows")(u.getValidMedias()[0]);
      try {
        await _.sendToChat({
          chat: n,
          options: { quotedMsg: a, ctwaContext: i },
        });
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
    }
    function f(e, t, n, a, i, l, s) {
      var c,
        d,
        m = l && l.msgContextInfo(a.id),
        p = o("WAWebLidMeUserForChat").getMeUserLidOrJidForChat(
          a,
          o("WAWebMsgKeyUtils").TranslateMsgKeyType.Message,
        ),
        _ = babelHelpers.extends(
          {
            ack: o("WAWebAck").ACK.CLOCK,
            from: p,
            id: new (r("WAWebMsgKey"))({
              from: p,
              to: a.id,
              id: r("WAWebMsgKey").newId_DEPRECATED(),
              participant: o("WAWebChatGetters").getIsGroup(a) ? p : void 0,
              selfDir: "out",
            }),
            local: !0,
            isNewMsg: !0,
            t: o("WATimeUtils").unixTime(),
            to: a.id,
          },
          m,
          { ctwaContext: s },
        ),
        f =
          o("WAWebBotUtils").isHatchBot(a.id) || a.id.isSupportAgentBot()
            ? self.crypto.getRandomValues(new Uint8Array(32))
            : void 0,
        g =
          o("WAWebBotUtils").isHatchBot(a.id) &&
          (c =
            (d = o("WAWebBotProfileCollection").BotProfileCollection.get(
              a.id,
            )) == null
              ? void 0
              : d.personaId) != null
            ? c
            : void 0,
        h =
          e.length === 1
            ? babelHelpers.extends(
                {
                  type: "vcard",
                  vcardFormattedName: e[0].displayName.toString(),
                  body: e[0].vcard,
                },
                _,
                o("WAWebGetEphemeralFieldsMsgActionsUtils").getEphemeralFields(
                  a,
                ),
                { messageSecret: f, botPersonaId: g },
              )
            : babelHelpers.extends(
                { type: "multi_vcard", vcardList: e },
                _,
                o("WAWebGetEphemeralFieldsMsgActionsUtils").getEphemeralFields(
                  a,
                ),
                { messageSecret: f, botPersonaId: g },
              );
      (async function () {
        try {
          var e = o("WAWebP2PPillsContactShareRequireBundle")
            .getContactCardPillsForSend(t, a, n)
            .then(function (e) {
              return e != null
                ? babelHelpers.extends({}, h, { businessInteractionPills: e })
                : h;
            });
          await o("WAWebSendMsgChatAction").addAndSendMsgToChat(a, e)[1];
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
      })();
    }
    l.default = p;
  },
  98,
);
