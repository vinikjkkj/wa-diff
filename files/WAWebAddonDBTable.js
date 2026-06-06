__d(
  "WAWebAddonDBTable",
  [
    "WAWebAddonCommentTableMode",
    "WAWebAddonConstants",
    "WAWebAddonEventResponseTableMode",
    "WAWebAddonInfraError",
    "WAWebAddonPinTableMode",
    "WAWebAddonPollVoteTableMode",
    "WAWebAddonReactionTableMode",
    "WAWebAddonSelectUtils",
    "WAWebAddonUnifiedAddonsTableMode",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = function (t) {
        switch (t) {
          case o("WAWebAddonConstants").AddonTableMode.Pin:
            return o("WAWebAddonPinTableMode").pinTableMode;
          case o("WAWebAddonConstants").AddonTableMode.PollVote:
            return o("WAWebAddonPollVoteTableMode").pollVoteTableMode;
          case o("WAWebAddonConstants").AddonTableMode.Comment:
            return o("WAWebAddonCommentTableMode").commentTableMode;
          case o("WAWebAddonConstants").AddonTableMode.Reaction:
            return o("WAWebAddonReactionTableMode").reactionTableMode;
          case o("WAWebAddonConstants").AddonTableMode.EventResponse:
            return o("WAWebAddonEventResponseTableMode").eventResponseTableMode;
          case o("WAWebAddonConstants").AddonTableMode.Unified:
            return o("WAWebAddonUnifiedAddonsTableMode").unifiedAddonsTableMode;
          case o("WAWebAddonConstants").AddonTableMode.None:
            throw new (o("WAWebAddonInfraError").AddonInfraError)(
              o("WAWebAddonInfraError").AddonInfraErrorCode.UnexpectedError,
            );
        }
      },
      s = {
        bulkUpsert: (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (t, n) {
              if (n.length !== 0) return e(t).bulkUpsert(n);
            },
          );
          function r(e, n) {
            return t.apply(this, arguments);
          }
          return r;
        })(),
        bulkGetByParentAndSender: (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (t, n) {
              return n.length === 0 ? [] : e(t).bulkGetByParentAndSender(n);
            },
          );
          function r(e, n) {
            return t.apply(this, arguments);
          }
          return r;
        })(),
        bulkGetByMsgKey: (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (t, n, r) {
              return e(t).bulkGetByMsgKey(n, r);
            },
          );
          function r(e, n, r) {
            return t.apply(this, arguments);
          }
          return r;
        })(),
        bulkGetByParentMsgKey: (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (t, n) {
              return e(t).bulkGetByParentMsgKey(n);
            },
          );
          function r(e, n) {
            return t.apply(this, arguments);
          }
          return r;
        })(),
        bulkGetByChatWid: (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (t, n) {
              return e(t).bulkGetByChatWid(n);
            },
          );
          function r(e, n) {
            return t.apply(this, arguments);
          }
          return r;
        })(),
        bulkRemoveByMsgKey: (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (t, n) {
              if (n.length !== 0) return e(t).bulkRemoveByMsgKey(n);
            },
          );
          function r(e, n) {
            return t.apply(this, arguments);
          }
          return r;
        })(),
        updateAck: (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (t, n, r) {
              return e(t).updateAck(n, r);
            },
          );
          function r(e, n, r) {
            return t.apply(this, arguments);
          }
          return r;
        })(),
        getByMsgKey: (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (t, n) {
              return e(t).getByMsgKey(n);
            },
          );
          function r(e, n) {
            return t.apply(this, arguments);
          }
          return r;
        })(),
        getTableSize: (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
            return e(t).getTableSize();
          });
          function r(e) {
            return t.apply(this, arguments);
          }
          return r;
        })(),
      },
      u = {
        bulkGetByParentAndSender: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t) {
              return s.bulkGetByParentAndSender(
                o("WAWebAddonSelectUtils").getTableModeByMsgType(e),
                t,
              );
            },
          );
          function t(t, n) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        getByMsgKey: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t) {
              return s.getByMsgKey(
                o("WAWebAddonSelectUtils").getTableModeByMsgType(e),
                t,
              );
            },
          );
          function t(t, n) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
      };
    ((l.addonInternalDBTable = s), (l.addonDBTable = u));
  },
  98,
);
