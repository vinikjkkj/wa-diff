__d(
  "WAWebCustomerDataAction",
  [
    "WAJids",
    "WALogger",
    "WATimeUtils",
    "WAWebCustomerDataCollection",
    "WAWebCustomerDataSync",
    "WAWebCustomerManagerGating",
    "WAWebGetCustomerDataByChatJidJob",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    async function u(e) {
      if (!e.endsWith(o("WAJids").LID_DOMAIN))
        throw r("err")(
          '[CustomerData] retrieveCustomerDataForChatJid: chatJid must be a LID-based JID, got "' +
            e +
            '"',
        );
      if (
        !o(
          "WAWebCustomerDataCollection",
        ).CustomerDataCollection.hasCachedQueryForChatJid(e)
      ) {
        var t = await o(
          "WAWebGetCustomerDataByChatJidJob",
        ).getCustomerDataByChatJidJob({ chatJid: e });
        o(
          "WAWebCustomerDataCollection",
        ).CustomerDataCollection.updateCollectionFromDB(e, t);
      }
      return o(
        "WAWebCustomerDataCollection",
      ).CustomerDataCollection.maybeGetCustomerDataByChatJid(e);
    }
    async function c(e, t) {
      if (!e.endsWith(o("WAJids").LID_DOMAIN))
        throw r("err")(
          '[CustomerData] customerDataAddAction: chatJid must be a LID-based JID, got "' +
            e +
            '"',
        );
      await p({ actionType: "add", chatJid: e, data: t });
    }
    async function d(e, t, n) {
      if (!e.endsWith(o("WAJids").LID_DOMAIN))
        throw r("err")(
          '[CustomerData] customerDataEditAction: chatJid must be a LID-based JID, got "' +
            e +
            '"',
        );
      await p({ actionType: "edit", chatJid: e, data: t, createdAt: n });
    }
    async function m(t) {
      if (o("WAWebCustomerManagerGating").customerManagerEnabled()) {
        if (!t.endsWith(o("WAJids").LID_DOMAIN))
          throw r("err")(
            '[CustomerData] customerDataDeleteAction: chatJid must be a LID-based JID, got "' +
              t +
              '"',
          );
        (o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[CustomerData] customerDataDeleteAction: chatJid ",
              "",
            ])),
          t,
        ),
          o(
            "WAWebCustomerDataCollection",
          ).CustomerDataCollection.purgeCustomerDataByChatJid(t),
          await r("WAWebCustomerDataSync").sendCustomerDataRemove(t));
      }
    }
    async function p(e) {
      var t = o("WATimeUtils").unixTime(),
        n = {
          chatJid: e.chatJid,
          contactType: e.data.contactType,
          email: e.data.email,
          altPhoneNumbers: e.data.altPhoneNumbers,
          birthday: e.data.birthday,
          address: e.data.address,
          acquisitionSource: e.data.acquisitionSource,
          leadStage: e.data.leadStage,
          lastOrder: e.data.lastOrder,
          createdAt: e.actionType === "edit" ? e.createdAt : t,
          modifiedAt: t,
        };
      (o("WALogger").LOG(
        s ||
          (s = babelHelpers.taggedTemplateLiteralLoose([
            "[CustomerData] addOrEditCustomerDataAction: chatJid ",
            "",
          ])),
        e.chatJid,
      ),
        o("WAWebCustomerDataCollection").CustomerDataCollection.add(
          babelHelpers.extends({}, n, { id: n.chatJid }),
          { merge: !0 },
        ),
        await r("WAWebCustomerDataSync").sendCustomerDataUpdate(e.chatJid, n));
    }
    ((l.retrieveCustomerDataForChatJid = u),
      (l.customerDataAddAction = c),
      (l.customerDataEditAction = d),
      (l.customerDataDeleteAction = m),
      (l.addOrEditCustomerDataAction = p));
  },
  98,
);
