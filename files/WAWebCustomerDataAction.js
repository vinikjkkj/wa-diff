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
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
            var t = yield o(
              "WAWebGetCustomerDataByChatJidJob",
            ).getCustomerDataByChatJidJob({ chatJid: e });
            o(
              "WAWebCustomerDataCollection",
            ).CustomerDataCollection.updateCollectionFromDB(e, t);
          }
          return o(
            "WAWebCustomerDataCollection",
          ).CustomerDataCollection.maybeGetCustomerDataByChatJid(e);
        })),
        c.apply(this, arguments)
      );
    }
    function d(e, t) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (!e.endsWith(o("WAJids").LID_DOMAIN))
            throw r("err")(
              '[CustomerData] customerDataAddAction: chatJid must be a LID-based JID, got "' +
                e +
                '"',
            );
          yield h({ actionType: "add", chatJid: e, data: t });
        })),
        m.apply(this, arguments)
      );
    }
    function p(e, t, n) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          if (!e.endsWith(o("WAJids").LID_DOMAIN))
            throw r("err")(
              '[CustomerData] customerDataEditAction: chatJid must be a LID-based JID, got "' +
                e +
                '"',
            );
          yield h({ actionType: "edit", chatJid: e, data: t, createdAt: n });
        })),
        _.apply(this, arguments)
      );
    }
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
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
              yield r("WAWebCustomerDataSync").sendCustomerDataRemove(t));
          }
        })),
        g.apply(this, arguments)
      );
    }
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
            yield r("WAWebCustomerDataSync").sendCustomerDataUpdate(
              e.chatJid,
              n,
            ));
        })),
        y.apply(this, arguments)
      );
    }
    ((l.retrieveCustomerDataForChatJid = u),
      (l.customerDataAddAction = d),
      (l.customerDataEditAction = p),
      (l.customerDataDeleteAction = f),
      (l.addOrEditCustomerDataAction = h));
  },
  98,
);
