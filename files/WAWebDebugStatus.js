__d(
  "WAWebDebugStatus",
  [
    "Promise",
    "WALogger",
    "WAWebDBDeviceListFanout",
    "WAWebDBMessageStoreUtils",
    "WAWebDBMessageUtils",
    "WAWebRevokeStatusPsaMsgAction",
    "WAWebSchemaMessage",
    "WAWebSendStatusMsgAction",
    "WAWebSignal",
    "WAWebSignalProtocolStore",
    "WAWebStatusDBOperations",
    "WAWebUserPrefsStatus",
    "WAWebUserPrefsStatusType",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m;
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield o("WAWebSendStatusMsgAction").sendStatusTextMsgAction({
            text: e,
          });
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
        })),
        g.apply(this, arguments)
      );
    }
    f.doc = "set status message allow list user jid";
    function h(e) {
      return o("WAWebStatusDBOperations").createOrUpdateStatus(e);
    }
    h.doc = "Store in database status";
    function y() {
      return o("WAWebRevokeStatusPsaMsgAction").revokeAllStatusPSA();
    }
    y.doc = "Deletes all PSA status campaigns";
    function C(e, t) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var r = yield t(),
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
            yield o("WAWebSchemaMessage").getMessageTable().bulkRemove(a),
            location.reload());
        })),
        b.apply(this, arguments)
      );
    }
    function v() {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return C(
            o("WAWebDBMessageStoreUtils").queryGroupStatusMsgsHelper,
            "clearGroupStatuses",
          );
        })),
        S.apply(this, arguments)
      );
    }
    v.doc = "Clear all group statuses from DB and reload";
    function R() {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return C(
            o("WAWebDBMessageStoreUtils").queryNewsletterStatusMsgsHelper,
            "clearNewsletterStatuses",
          );
        })),
        L.apply(this, arguments)
      );
    }
    R.doc = "Clear all newsletter statuses from DB and reload";
    function E(e) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebWidFactory").createWid(e),
            n = o("WAWebDBMessageUtils").InternalIdPrefix.Default;
          t.isNewsletter()
            ? (n = o("WAWebDBMessageUtils").InternalIdPrefix.NewsletterStatus)
            : t.isGroup() &&
              (n = o("WAWebDBMessageUtils").InternalIdPrefix.GroupStatus);
          var r = n + o("WAWebDBMessageUtils").beginningOfChat(t),
            a = n + o("WAWebDBMessageUtils").endOfChat(t),
            i = yield o("WAWebSchemaMessage")
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
            yield o("WAWebSchemaMessage").getMessageTable().bulkRemove(l),
            location.reload());
        })),
        k.apply(this, arguments)
      );
    }
    E.doc = "Clear statuses for a specific chat WID from DB and reload";
    function I(e) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
          (yield r("WAWebUserPrefsStatus").markForgetStatusSenderKey(a),
            o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[debug] forgetAndDeleteStatusSession: forgot sender key for ",
                  " (",
                  " devices)",
                ])),
              e,
              a.length,
            ),
            yield (m || (m = n("Promise"))).all(
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
                  "[debug] forgetAndDeleteStatusSession: deleted sessions for ",
                  " (",
                  " devices)",
                ])),
              e,
              a.length,
            ));
        })),
        T.apply(this, arguments)
      );
    }
    I.doc =
      'Forget status sender key and delete all signal sessions for a LID (e.g. "12345@lid")';
    var D = {
      sendTextStatusToAllowlist: p,
      setStatusAllowList: f,
      createOrUpdateStatusInDebug: h,
      clearPSAStatus: y,
      clearGroupStatuses: v,
      clearNewsletterStatuses: R,
      clearStatusesByChatWid: E,
      forgetAndDeleteStatusSession: I,
    };
    l.default = D;
  },
  98,
);
