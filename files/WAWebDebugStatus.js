__d(
  "WAWebDebugStatus",
  [
    "WALogger",
    "WAWebApiContact",
    "WAWebApiDeviceList",
    "WAWebDBDeviceListFanout",
    "WAWebDBMessageStoreUtils",
    "WAWebDBMessageUtils",
    "WAWebSchemaMessage",
    "WAWebSendStatusMsgAction",
    "WAWebSignal",
    "WAWebSignalProtocolStore",
    "WAWebSignalSessionApi",
    "WAWebStatusChainFromMyCounter",
    "WAWebUserPrefsStatus",
    "WAWebUserPrefsStatusType",
    "WAWebWidFactory",
    "vulture",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d;
    async function m(e) {
      (r("vulture")("_CqURJBCEjs42B_OAZEjkA7Ag80="),
        await o("WAWebSendStatusMsgAction").sendStatusTextMsgAction({
          text: e,
        }));
    }
    m.doc = "Send text status message to allow list";
    async function p(e) {
      r("vulture")("sjjAnmHj4pr8yGK-wtoBz1OE9-U=");
      var t = e.map(function (e) {
        return o("WAWebWidFactory").createWid(e + "@c.us");
      });
      return o("WAWebUserPrefsStatus").setStatusPrivacyConfig({
        setting: o("WAWebUserPrefsStatusType").StatusPrivacySettingType
          .AllowList,
        list: t,
      });
    }
    p.doc = "set status message allow list user jid";
    async function _(t, n) {
      r("vulture")("Ir-MhXH1KJFBetcH8kF9J1yfI2A=");
      var a = await t(),
        i = a.map(function (e) {
          return e.id;
        });
      (o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "[debug] ",
            ": removing ",
            " messages",
          ])),
        n,
        i.length,
      ),
        await o("WAWebSchemaMessage").getMessageTable().bulkRemove(i),
        location.reload());
    }
    async function f() {
      return (
        r("vulture")("iwiMWDMtAfHo7bW9vu9dNnebEHE="),
        _(
          o("WAWebDBMessageStoreUtils").queryGroupStatusMsgsHelper,
          "clearGroupStatuses",
        )
      );
    }
    f.doc = "Clear all group statuses from DB and reload";
    async function g() {
      return (
        r("vulture")("gdmGDnxitULwiqJMrjJHrSgalXk="),
        _(
          o("WAWebDBMessageStoreUtils").queryNewsletterStatusMsgsHelper,
          "clearNewsletterStatuses",
        )
      );
    }
    g.doc = "Clear all newsletter statuses from DB and reload";
    async function h(e) {
      r("vulture")("5Dqz1ckxr6ovM5FoJwXhGEb3opM=");
      var t = o("WAWebWidFactory").createWid(e),
        n = o("WAWebDBMessageUtils").InternalIdPrefix.Default;
      t.isNewsletter()
        ? (n = o("WAWebDBMessageUtils").InternalIdPrefix.NewsletterStatus)
        : t.isGroup() &&
          (n = o("WAWebDBMessageUtils").InternalIdPrefix.GroupStatus);
      var a = n + o("WAWebDBMessageUtils").beginningOfChat(t),
        i = n + o("WAWebDBMessageUtils").endOfChat(t),
        l = await o("WAWebSchemaMessage")
          .getMessageTable()
          .between(["internalId"], a, i, {
            lowerInclusive: !1,
            upperInclusive: !1,
          }),
        u = l.map(function (e) {
          return e.id;
        });
      (o("WALogger").LOG(
        s ||
          (s = babelHelpers.taggedTemplateLiteralLoose([
            "[debug] clearStatusesByChatWid: removing ",
            " messages for ",
            "",
          ])),
        u.length,
        e,
      ),
        await o("WAWebSchemaMessage").getMessageTable().bulkRemove(u),
        location.reload());
    }
    h.doc = "Clear statuses for a specific chat WID from DB and reload";
    async function y(e) {
      r("vulture")("4Sy14tP6IdkthNMOkGfkGbBG_9w=");
      var t = o("WAWebWidFactory").createWid(e),
        n = await o("WAWebDBDeviceListFanout").getFanOutList({ wids: [t] });
      if (n.length === 0) {
        o("WALogger").LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "[debug] forgetAndDeleteStatusSession: no devices found for ",
              "",
            ])),
          e,
        );
        return;
      }
      (await o("WAWebUserPrefsStatus").markForgetStatusSenderKey(n),
        o("WALogger").LOG(
          c ||
            (c = babelHelpers.taggedTemplateLiteralLoose([
              "[debug] forgetAndDeleteStatusSession: forgot key ",
              " (",
              ")",
            ])),
          e,
          n.length,
        ));
      var a = [],
        i = [t];
      if (t.isUser()) {
        var l = o("WAWebApiContact").getAlternateUserWid(
          o("WAWebWidFactory").asUserWidOrThrow(t),
        );
        l != null && i.push(l);
      }
      for (var s of i) {
        var m = await o("WAWebApiDeviceList").getDeviceRecord(s);
        if (m != null && !m.deleted)
          for (var p of m.devices)
            a.push(
              o("WAWebSignalSessionApi").deleteDeviceSenderKey(
                o("WAWebWidFactory").createDeviceWidFromDeviceListPk(
                  m.id,
                  p.id,
                  p.isHosted,
                ),
              ),
            );
      }
      (await Promise.all(a),
        await Promise.all(
          n.map(function (e) {
            return o("WAWebSignal").Session.deleteRemoteSession(e);
          }),
        ),
        await o("WAWebSignalProtocolStore")
          .getSignalProtocolStore()
          .flushBufferToDiskIfNotMemOnlyMode(),
        o("WALogger").LOG(
          d ||
            (d = babelHelpers.taggedTemplateLiteralLoose([
              "[debug] forgetAndDeleteStatusSession: deleted ",
              " (",
              ")",
            ])),
          e,
          n.length,
        ));
    }
    y.doc =
      'Forget status sender key and delete all signal sessions for a LID (e.g. "12345@lid")';
    function C() {
      (r("vulture")("ynInsHzdLyJCXLJIQRcjmrpxt-k="),
        o(
          "WAWebStatusChainFromMyCounter",
        ).resetStatusChainFromMyInteractionCount());
    }
    C.doc =
      'Reset the "See more statuses" (Chain from My Status) pill tap count so the pill shows again';
    var b = {
      sendTextStatusToAllowlist: m,
      setStatusAllowList: p,
      clearGroupStatuses: f,
      clearNewsletterStatuses: g,
      clearStatusesByChatWid: h,
      forgetAndDeleteStatusSession: y,
      resetStatusChainFromMyPill: C,
    };
    l.default = b;
  },
  98,
);
