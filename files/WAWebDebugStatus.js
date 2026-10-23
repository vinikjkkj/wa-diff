__d(
  "WAWebDebugStatus",
  [
    "Promise",
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
    "asyncToGeneratorRuntime",
    "vulture",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m;
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          (r("vulture")("_CqURJBCEjs42B_OAZEjkA7Ag80="),
            yield o("WAWebSendStatusMsgAction").sendStatusTextMsgAction({
              text: e,
            }));
        })),
        _.apply(this, arguments)
      );
    }
    p.doc = "Send text status message to allow list";
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          r("vulture")("sjjAnmHj4pr8yGK-wtoBz1OE9-U=");
          var t = e.map(function (e) {
            return o("WAWebWidFactory").createWid(e + "@c.us");
          });
          return o("WAWebUserPrefsStatus").setStatusPrivacyConfig({
            setting: o("WAWebUserPrefsStatusType").StatusPrivacySettingType
              .AllowList,
            list: t,
          });
        })),
        g.apply(this, arguments)
      );
    }
    f.doc = "set status message allow list user jid";
    function h(e, t) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          r("vulture")("Ir-MhXH1KJFBetcH8kF9J1yfI2A=");
          var a = yield t(),
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
            yield o("WAWebSchemaMessage").getMessageTable().bulkRemove(i),
            location.reload());
        })),
        y.apply(this, arguments)
      );
    }
    function C() {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return (
            r("vulture")("iwiMWDMtAfHo7bW9vu9dNnebEHE="),
            h(
              o("WAWebDBMessageStoreUtils").queryGroupStatusMsgsHelper,
              "clearGroupStatuses",
            )
          );
        })),
        b.apply(this, arguments)
      );
    }
    C.doc = "Clear all group statuses from DB and reload";
    function v() {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return (
            r("vulture")("gdmGDnxitULwiqJMrjJHrSgalXk="),
            h(
              o("WAWebDBMessageStoreUtils").queryNewsletterStatusMsgsHelper,
              "clearNewsletterStatuses",
            )
          );
        })),
        S.apply(this, arguments)
      );
    }
    v.doc = "Clear all newsletter statuses from DB and reload";
    function R(e) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          r("vulture")("5Dqz1ckxr6ovM5FoJwXhGEb3opM=");
          var t = o("WAWebWidFactory").createWid(e),
            n = o("WAWebDBMessageUtils").InternalIdPrefix.Default;
          t.isNewsletter()
            ? (n = o("WAWebDBMessageUtils").InternalIdPrefix.NewsletterStatus)
            : t.isGroup() &&
              (n = o("WAWebDBMessageUtils").InternalIdPrefix.GroupStatus);
          var a = n + o("WAWebDBMessageUtils").beginningOfChat(t),
            i = n + o("WAWebDBMessageUtils").endOfChat(t),
            l = yield o("WAWebSchemaMessage")
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
            yield o("WAWebSchemaMessage").getMessageTable().bulkRemove(u),
            location.reload());
        })),
        L.apply(this, arguments)
      );
    }
    R.doc = "Clear statuses for a specific chat WID from DB and reload";
    function E(e) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          r("vulture")("4Sy14tP6IdkthNMOkGfkGbBG_9w=");
          var t = o("WAWebWidFactory").createWid(e),
            a = yield o("WAWebDBDeviceListFanout").getFanOutList({ wids: [t] });
          if (a.length === 0) {
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
          (yield o("WAWebUserPrefsStatus").markForgetStatusSenderKey(a),
            o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[debug] forgetAndDeleteStatusSession: forgot key ",
                  " (",
                  ")",
                ])),
              e,
              a.length,
            ));
          var i = [],
            l = [t];
          if (t.isUser()) {
            var s = o("WAWebApiContact").getAlternateUserWid(
              o("WAWebWidFactory").asUserWidOrThrow(t),
            );
            s != null && l.push(s);
          }
          for (var p of l) {
            var _ = yield o("WAWebApiDeviceList").getDeviceRecord(p);
            if (_ != null && !_.deleted)
              for (var f of _.devices)
                i.push(
                  o("WAWebSignalSessionApi").deleteDeviceSenderKey(
                    o("WAWebWidFactory").createDeviceWidFromDeviceListPk(
                      _.id,
                      f.id,
                      f.isHosted,
                    ),
                  ),
                );
          }
          (yield (m || (m = n("Promise"))).all(i),
            yield m.all(
              a.map(function (e) {
                return o("WAWebSignal").Session.deleteRemoteSession(e);
              }),
            ),
            yield o("WAWebSignalProtocolStore")
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
              a.length,
            ));
        })),
        k.apply(this, arguments)
      );
    }
    E.doc =
      'Forget status sender key and delete all signal sessions for a LID (e.g. "12345@lid")';
    function I() {
      (r("vulture")("ynInsHzdLyJCXLJIQRcjmrpxt-k="),
        o(
          "WAWebStatusChainFromMyCounter",
        ).resetStatusChainFromMyInteractionCount());
    }
    I.doc =
      'Reset the "See more statuses" (Chain from My Status) pill tap count so the pill shows again';
    var T = {
      sendTextStatusToAllowlist: p,
      setStatusAllowList: f,
      clearGroupStatuses: C,
      clearNewsletterStatuses: v,
      clearStatusesByChatWid: R,
      forgetAndDeleteStatusSession: E,
      resetStatusChainFromMyPill: I,
    };
    l.default = T;
  },
  98,
);
