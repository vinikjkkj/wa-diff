__d(
  "WAWebLimitSharingModelUtils",
  [
    "WAWebBackendApi",
    "WAWebContactSystemMsg",
    "WAWebDBUpdateChatTable",
    "WAWebHandleSingleMsgFactory",
    "WAWebProtobufsProtocol.pb",
    "WAWebSchemaChat",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return o("WAWebSchemaChat").getChatTable().get(e);
        })),
        s.apply(this, arguments)
      );
    }
    function u(e, t) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          (yield o("WAWebDBUpdateChatTable").updateChatTable(e, {
            limitSharing: t,
          }),
            o("WAWebBackendApi").frontendFireAndForget(
              "updateChatLimitSharing",
              { id: e, limitSharing: t },
            ));
        })),
        c.apply(this, arguments)
      );
    }
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n,
            r = yield e(t.toString());
          if (
            (r == null || (n = r.limitSharing) == null
              ? void 0
              : n.sharingLimited) === !0
          ) {
            var a = {
                sharingLimited: r.limitSharing.sharingLimited,
                trigger: r.limitSharing.trigger,
              },
              i = o("WAWebWidFactory").createWid(r.id);
            yield f(i, a);
          }
        })),
        m.apply(this, arguments)
      );
    }
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.chatWID,
            r = t.sharingLimited;
          if (r === !0) {
            var a,
              i,
              l = yield e(n.toString());
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
              var s = {
                sharingLimited: r,
                trigger: o("WAWebProtobufsProtocol.pb").LimitSharing$Trigger
                  .UNKNOWN,
                limitSharingSettingTimestamp: 0,
              };
              return (yield u(n, s), f(n, s));
            }
          }
        })),
        _.apply(this, arguments)
      );
    }
    function f(e, t) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = o("WAWebContactSystemMsg").genLimitSharingUpdateSystemMsg(
            e,
            t,
          );
          return (
            yield o("WAWebHandleSingleMsgFactory").handleSingleMsg({
              chatId: e,
              newMsg: n,
              handleSingleMsgOrigin: "limitSharing",
            }),
            n
          );
        })),
        g.apply(this, arguments)
      );
    }
    ((l.getChat = e),
      (l.updateChat = u),
      (l.createLimitSharingMsgOnChatClear = d),
      (l.genLimitSharingSystemMessageOnPersistedChat = p),
      (l.genLimitSharingSystemMessage = f));
  },
  98,
);
