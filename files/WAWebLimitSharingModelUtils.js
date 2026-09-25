__d(
  "WAWebLimitSharingModelUtils",
  [
    "WAWebBackendApi",
    "WAWebContactSystemMsg",
    "WAWebDBUpdateChatTable",
    "WAWebHandleSingleMsgWorkerCompatible",
    "WAWebLimitSharingGatingUtils",
    "WAWebProtobufsProtocol.pb",
    "WAWebSchemaChat",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Map();
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return o("WAWebSchemaChat").getChatTable().get(e);
        })),
        u.apply(this, arguments)
      );
    }
    function c(e, t) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          (yield o("WAWebDBUpdateChatTable").updateChatTable(e, {
            limitSharing: t,
          }),
            o("WAWebBackendApi").frontendFireAndForget(
              "updateChatLimitSharing",
              { id: e, limitSharing: t },
            ));
        })),
        d.apply(this, arguments)
      );
    }
    function m(e, t) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          (yield o("WAWebDBUpdateChatTable").updateChatTable(e, {
            acp2Setting: t,
          }),
            o("WAWebBackendApi").frontendFireAndForget(
              "updateChatAcp2Setting",
              { id: e, acp2Setting: t },
            ));
        })),
        p.apply(this, arguments)
      );
    }
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = yield s(e.toString());
          if (
            !y(n == null ? void 0 : n.acp2Setting, e) &&
            (n == null || (t = n.limitSharing) == null
              ? void 0
              : t.sharingLimited) === !0
          ) {
            var r = {
                sharingLimited: n.limitSharing.sharingLimited,
                trigger: n.limitSharing.trigger,
              },
              a = o("WAWebWidFactory").createWid(n.id);
            yield k(a, r);
          }
        })),
        f.apply(this, arguments)
      );
    }
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield s(e.toString()),
            n = t == null ? void 0 : t.acp2Setting;
          n == null ||
            !y(n, e) ||
            (yield L(e, { enabled: !0, trigger: n.trigger }));
        })),
        h.apply(this, arguments)
      );
    }
    function y(e, t) {
      return (
        (e == null ? void 0 : e.enabled) === !0 &&
        o("WAWebLimitSharingGatingUtils").isAcp2EnabledForWid(t)
      );
    }
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.acp2Enabled,
            n = e.chatWID,
            r = e.sharingLimited;
          if (r === !0) {
            var a,
              i,
              l = yield s(n.toString());
            if (
              (l == null || (a = l.limitSharing) == null
                ? void 0
                : a.limitSharingSettingTimestamp) != null
            )
              return;
            if (
              (l == null || (i = l.limitSharing) == null
                ? void 0
                : i.sharingLimited) !== r
            ) {
              var u = {
                sharingLimited: r,
                trigger: o("WAWebProtobufsProtocol.pb").LimitSharing$Trigger
                  .UNKNOWN,
                limitSharingSettingTimestamp: 0,
              };
              return (
                yield c(n, u),
                t === !0 &&
                o("WAWebLimitSharingGatingUtils").isAcp2EnabledForWid(n)
                  ? void 0
                  : k(n, u)
              );
            }
          }
        })),
        b.apply(this, arguments)
      );
    }
    function v(t) {
      e.set(t.toString(), Date.now());
    }
    function S(e) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.chatWID,
            n = e.enabled,
            r = e.snapshotRequestedAtMs;
          if (n != null) {
            var a = yield s(t.toString()),
              i = a == null ? void 0 : a.acp2Setting;
            if ((i == null ? void 0 : i.enabled) !== n) {
              if (n && (i == null ? void 0 : i.settingTimestamp) == null) {
                var l = {
                  enabled: n,
                  trigger: o("WAWebProtobufsProtocol.pb").LimitSharing$Trigger
                    .UNKNOWN,
                  settingTimestamp: 0,
                };
                return (yield m(t, l), L(t, l));
              }
              i != null &&
                (T(t, r) ||
                  (yield m(t, babelHelpers.extends({}, i, { enabled: n }))));
            }
          }
        })),
        R.apply(this, arguments)
      );
    }
    function L(e, t, n) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = o("WAWebContactSystemMsg").genAcp2UpdateSystemMsg(e, t),
            a =
              (n == null ? void 0 : n.beforeTimestamp) != null
                ? babelHelpers.extends({}, r, { t: n.beforeTimestamp })
                : r;
          return (
            yield o("WAWebHandleSingleMsgWorkerCompatible").handleSingleMsg({
              chatId: e,
              newMsg: a,
              handleSingleMsgOrigin: "acp2",
            }),
            a
          );
        })),
        E.apply(this, arguments)
      );
    }
    function k(e, t, n) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = o("WAWebContactSystemMsg").genLimitSharingUpdateSystemMsg(
              e,
              t,
            ),
            a =
              (n == null ? void 0 : n.beforeTimestamp) != null
                ? babelHelpers.extends({}, r, { t: n.beforeTimestamp })
                : r;
          return (
            yield o("WAWebHandleSingleMsgWorkerCompatible").handleSingleMsg({
              chatId: e,
              newMsg: a,
              handleSingleMsgOrigin: "limitSharing",
            }),
            a
          );
        })),
        I.apply(this, arguments)
      );
    }
    function T(t, n) {
      var r;
      if (n == null) return !1;
      var o = (r = e.get(t.toString())) != null ? r : 0;
      return o >= n;
    }
    ((l.getChat = s),
      (l.updateChat = c),
      (l.updateChatAcp2Setting = m),
      (l.createLimitSharingMsgOnChatClear = _),
      (l.createAcp2MsgOnChatClear = g),
      (l.genLimitSharingSystemMessageOnPersistedChat = C),
      (l.noteDatedAcp2Write = v),
      (l.genAcp2SystemMessageOnPersistedChat = S),
      (l.genAcp2SystemMessage = L),
      (l.genLimitSharingSystemMessage = k));
  },
  98,
);
