__d(
  "WAWebDebugStatus",
  [
    "WALogger",
    "WAWebApiContact",
    "WAWebApiDeviceList",
    "WAWebDBDeviceListFanout",
    "WAWebDBMessageStoreUtils",
    "WAWebDBMessageUtils",
    "WAWebRevokeStatusPsaMsgAction",
    "WAWebSchemaMessage",
    "WAWebSendStatusMsgAction",
    "WAWebSignal",
    "WAWebSignalProtocolStore",
    "WAWebSignalSessionApi",
    "WAWebStatusDBOperations",
    "WAWebUserPrefsStatus",
    "WAWebUserPrefsStatusType",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d;
    async function m(e) {
      await o("WAWebSendStatusMsgAction").sendStatusTextMsgAction({ text: e });
    }
    m.doc = "Send text status message to allow list";
    async function p(e) {
      var t = e.map(function (e) {
        return o("WAWebWidFactory").createWid(e + "@c.us");
      });
      return r("WAWebUserPrefsStatus") == null
        ? void 0
        : r("WAWebUserPrefsStatus").setStatusPrivacyConfig({
            setting: o("WAWebUserPrefsStatusType").StatusPrivacySettingType
              .AllowList,
            list: t,
          });
    }
    p.doc = "set status message allow list user jid";
    function _(e) {
      return o("WAWebStatusDBOperations").createOrUpdateStatus(e);
    }
    _.doc = "Store in database status";
    function f() {
      return o("WAWebRevokeStatusPsaMsgAction").revokeAllStatusPSA();
    }
    f.doc = "Deletes all PSA status campaigns";
    async function g(t, n) {
      var r = await t(),
        a = r.map(function (e) {
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
        a.length,
      ),
        await o("WAWebSchemaMessage").getMessageTable().bulkRemove(a),
        location.reload());
    }
    async function h() {
      return g(
        o("WAWebDBMessageStoreUtils").queryGroupStatusMsgsHelper,
        "clearGroupStatuses",
      );
    }
    h.doc = "Clear all group statuses from DB and reload";
    async function y() {
      return g(
        o("WAWebDBMessageStoreUtils").queryNewsletterStatusMsgsHelper,
        "clearNewsletterStatuses",
      );
    }
    y.doc = "Clear all newsletter statuses from DB and reload";
    async function C(e) {
      var t = o("WAWebWidFactory").createWid(e),
        n = o("WAWebDBMessageUtils").InternalIdPrefix.Default;
      t.isNewsletter()
        ? (n = o("WAWebDBMessageUtils").InternalIdPrefix.NewsletterStatus)
        : t.isGroup() &&
          (n = o("WAWebDBMessageUtils").InternalIdPrefix.GroupStatus);
      var r = n + o("WAWebDBMessageUtils").beginningOfChat(t),
        a = n + o("WAWebDBMessageUtils").endOfChat(t),
        i = await o("WAWebSchemaMessage")
          .getMessageTable()
          .between(["internalId"], r, a, {
            lowerInclusive: !1,
            upperInclusive: !1,
          }),
        l = i.map(function (e) {
          return e.id;
        });
      (o("WALogger").LOG(
        s ||
          (s = babelHelpers.taggedTemplateLiteralLoose([
            "[debug] clearStatusesByChatWid: removing ",
            " messages for ",
            "",
          ])),
        l.length,
        e,
      ),
        await o("WAWebSchemaMessage").getMessageTable().bulkRemove(l),
        location.reload());
    }
    C.doc = "Clear statuses for a specific chat WID from DB and reload";
    async function b(e) {
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
      (await r("WAWebUserPrefsStatus").markForgetStatusSenderKey(n),
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
    b.doc =
      'Forget status sender key and delete all signal sessions for a LID (e.g. "12345@lid")';
    var v = {
      sendTextStatusToAllowlist: m,
      setStatusAllowList: p,
      createOrUpdateStatusInDebug: _,
      clearPSAStatus: f,
      clearGroupStatuses: h,
      clearNewsletterStatuses: y,
      clearStatusesByChatWid: C,
      forgetAndDeleteStatusSession: b,
    };
    l.default = v;
  },
  98,
);
