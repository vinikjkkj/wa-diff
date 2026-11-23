__d(
  "MAWDbProtocolMsgIdMiddleware",
  [
    "FBLogger",
    "MAWJidUtils",
    "MAWODSProxy",
    "Random",
    "WAOdsEnums",
    "getErrorSafe",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("justknobx")._("3300");
    function s(e) {
      return babelHelpers.extends({}, e, {
        get: function (n) {
          return e.get(n).then(function (e) {
            return (d(e, "get"), e);
          });
        },
        getMany: function (n) {
          return e.getMany(n).then(function (e) {
            return e == null
              ? void 0
              : e.map(function (e) {
                  return (d(e, "getMany"), e);
                });
          });
        },
        mutate: function (n) {
          return (
            n.type === "add"
              ? n.values.map(function (e) {
                  return u(e);
                })
              : n.type === "put" &&
                n.values.map(function (e) {
                  e.protocolMsgId == null && u(e);
                }),
            e.mutate(n)
          );
        },
        query: function (n) {
          return e.query(n).then(function (e) {
            var t;
            return (
              e == null ||
                (t = e.result) == null ||
                t.map(function (e) {
                  d(e, "query");
                }),
              e
            );
          });
        },
      });
    }
    function u(e) {
      e.protocolMsgId = o("MAWJidUtils").toProtocolMsgIdStringForMAWStorage(e);
    }
    function c(e) {
      return (
        (e == null ? void 0 : e.rowId) == null &&
        (e == null ? void 0 : e.externalId) == null
      );
    }
    function d(t, n) {
      try {
        if (c(t)) {
          n !== "get" &&
            o("Random").coinflip(e) &&
            r("FBLogger")("messenger_web").warn(
              "Corrupted message row returned from DB, msg is null:%s, queryType: %s",
              t == null,
              n,
            );
          return;
        }
        ((t == null ? void 0 : t.protocolMsgId) == null &&
          o("Random").coinflip(e) &&
          (o("MAWODSProxy").odsBumpEntityKey({
            entity: o("WAOdsEnums").Entity.MAW_PROTOCOL_MSG_ID_INDEX,
            key: "null_protocol_msg_id",
          }),
          r("FBLogger")("messenger_web").warn(
            "Message with null protocolMsgId. type: %s, rowId: %s, externalId: %s",
            t == null ? void 0 : t.type,
            t == null ? void 0 : t.rowId,
            t == null ? void 0 : t.externalId,
          )),
          t != null &&
            t.protocolMsgId != null &&
            t.protocolMsgId !==
              o("MAWJidUtils").toProtocolMsgIdStringForMAWStorage(t) &&
            o("Random").coinflip(e) &&
            o("MAWODSProxy").odsBumpEntityKey({
              entity: o("WAOdsEnums").Entity.MAW_PROTOCOL_MSG_ID_INDEX,
              key:
                "inconsistent_protocol_msg_id." + (t == null ? void 0 : t.type),
            }));
      } catch (e) {
        var a = r("getErrorSafe")(e);
        r("FBLogger")("messenger_web")
          .catching(a)
          .mustfix("Error while checking protocol msg id");
      }
    }
    function m() {
      return {
        create: function (t) {
          try {
            return babelHelpers.extends({}, t, {
              table: function (n) {
                return n !== "messages" ? t.table(n) : s(t.table(n));
              },
            });
          } catch (n) {
            var e = r("getErrorSafe")(n);
            return (
              r("FBLogger")("messenger_web")
                .catching(e)
                .mustfix("Error applying Protocol MsgId Middleware"),
              t
            );
          }
        },
        name: "MAWDbProtocolMsgIdMiddleware",
        stack: "dbcore",
      };
    }
    l.MAWDbProtocolMsgIdMiddleware = m;
  },
  98,
);
