__d(
  "WAWebSendContactsAction",
  [
    "WALogger",
    "WANullthrows",
    "WATimeUtils",
    "WAWebAck",
    "WAWebAttachMediaCollection",
    "WAWebBotProfileCollection",
    "WAWebBotUtils",
    "WAWebChatGetters",
    "WAWebFileUtils",
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
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = u || (u = o("react")),
      d = "text/vcard";
    function m(e, t, n, r, a) {
      var i = e.map(function (e, t) {
          return o("WAWebFrontendVcardUtils").vcardFromContactModel(
            e,
            a == null ? void 0 : a[t],
          );
        }),
        l = i.length === 1 ? i[0] : o("WAWebVcardUtils").mergeVcards(i),
        s = l.displayName.toString() + ".vcf",
        u = o("WAWebFileUtils").createFile([l.vcard], s, { type: d }),
        c = u.size / 1024;
      if (c > o("WAWebServerPropConstants").VCARD_AS_DOCUMENT_SIZE_KB) {
        p(u, e.length, t, n, r);
        return;
      }
      _(i, t, c, n, r);
    }
    async function p(t, n, a, i, l) {
      var s = {
          file: t,
          type: o("WAWebMsgType").MSG_TYPE.DOCUMENT,
          filename: t.name,
          mimetype: d,
          isVcardOverMmsDocument: !0,
          documentPageCount: n,
        },
        u = new (r("WAWebAttachMediaCollection"))({
          chatParticipantCount: a.getParticipantCount(),
        });
      await u.processAttachmentsForChat([s], void 0, a);
      var m = u.uiProcessMsgs(1, null),
        p = m.errorMsgs;
      if (p) {
        o("WAWebToastManager").ToastManager.open(
          c.jsx(o("WAWebToast.react").Toast, { msg: p }),
        );
        return;
      }
      var _ = r("WANullthrows")(u.getValidMedias()[0]);
      try {
        await _.sendToChat({
          chat: a,
          options: { quotedMsg: i, ctwaContext: l },
        });
      } catch (t) {
        throw (
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "Error sending contact: ",
                "",
              ])),
            t,
          ),
          t
        );
      }
    }
    function _(e, t, n, a, i) {
      var l,
        u,
        c = a && a.msgContextInfo(t.id),
        d = o("WAWebUserPrefsMeUser").getMeUser(),
        m = babelHelpers.extends(
          {
            ack: o("WAWebAck").ACK.CLOCK,
            from: d,
            id: new (r("WAWebMsgKey"))({
              from: d,
              to: t.id,
              id: r("WAWebMsgKey").newId_DEPRECATED(),
              participant: o("WAWebChatGetters").getIsGroup(t) ? d : void 0,
              selfDir: "out",
            }),
            local: !0,
            isNewMsg: !0,
            t: o("WATimeUtils").unixTime(),
            to: t.id,
          },
          c,
          { ctwaContext: i },
        ),
        p = o("WAWebBotUtils").isHatchBot(t.id)
          ? self.crypto.getRandomValues(new Uint8Array(32))
          : void 0,
        _ =
          o("WAWebBotUtils").isHatchBot(t.id) &&
          (l =
            (u = o("WAWebBotProfileCollection").BotProfileCollection.get(
              t.id,
            )) == null
              ? void 0
              : u.personaId) != null
            ? l
            : void 0,
        f =
          e.length === 1
            ? babelHelpers.extends(
                {
                  type: "vcard",
                  vcardFormattedName: e[0].displayName.toString(),
                  body: e[0].vcard,
                },
                m,
                o("WAWebGetEphemeralFieldsMsgActionsUtils").getEphemeralFields(
                  t,
                ),
                { messageSecret: p, botPersonaId: _ },
              )
            : babelHelpers.extends(
                { type: "multi_vcard", vcardList: e },
                m,
                o("WAWebGetEphemeralFieldsMsgActionsUtils").getEphemeralFields(
                  t,
                ),
                { messageSecret: p, botPersonaId: _ },
              );
      (async function () {
        try {
          await o("WAWebSendMsgChatAction").addAndSendMsgToChat(t, f)[1];
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
    l.default = m;
  },
  98,
);
