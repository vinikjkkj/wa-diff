__d(
  "WAWebDebugStatus",
  [
    "WALogger",
    "WAWebDBMessageStoreUtils",
    "WAWebDBMessageUtils",
    "WAWebRevokeStatusPsaMsgAction",
    "WAWebSchemaMessage",
    "WAWebSendStatusMsgAction",
    "WAWebStatusDBOperations",
    "WAWebUserPrefsStatus",
    "WAWebUserPrefsStatusType",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield o("WAWebSendStatusMsgAction").sendStatusTextMsgAction({
            text: e,
          });
        })),
        c.apply(this, arguments)
      );
    }
    u.doc = "Send text status message to allow list";
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        m.apply(this, arguments)
      );
    }
    d.doc = "set status message allow list user jid";
    function p(e) {
      return o("WAWebStatusDBOperations").createOrUpdateStatus(e);
    }
    p.doc = "Store in database status";
    function _() {
      return o("WAWebRevokeStatusPsaMsgAction").revokeAllStatusPSA();
    }
    _.doc = "Deletes all PSA status campaigns";
    function f(e, t) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
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
        g.apply(this, arguments)
      );
    }
    function h() {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return f(
            o("WAWebDBMessageStoreUtils").queryGroupStatusMsgsHelper,
            "clearGroupStatuses",
          );
        })),
        y.apply(this, arguments)
      );
    }
    h.doc = "Clear all group statuses from DB and reload";
    function C() {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return f(
            o("WAWebDBMessageStoreUtils").queryNewsletterStatusMsgsHelper,
            "clearNewsletterStatuses",
          );
        })),
        b.apply(this, arguments)
      );
    }
    C.doc = "Clear all newsletter statuses from DB and reload";
    function v(e) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        S.apply(this, arguments)
      );
    }
    v.doc = "Clear statuses for a specific chat WID from DB and reload";
    var R = {
      sendTextStatusToAllowlist: u,
      setStatusAllowList: d,
      createOrUpdateStatusInDebug: p,
      clearPSAStatus: _,
      clearGroupStatuses: h,
      clearNewsletterStatuses: C,
      clearStatusesByChatWid: v,
    };
    l.default = R;
  },
  98,
);
