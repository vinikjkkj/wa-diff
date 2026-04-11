__d(
  "WAWebDBGetGroupMemberUpdateMessages",
  [
    "WATimeUtils",
    "WAWebCollectionConstants",
    "WAWebDBMessageSerialization",
    "WAWebDBMessageUtils",
    "WAWebGroupConstants",
    "WAWebSchemaMessage",
    "WAWebViewMode.flow",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          t === void 0 && (t = o("WAWebCollectionConstants").PAGE_SIZE);
          var r =
              o("WATimeUtils").unixTime() -
              o("WAWebGroupConstants").PAST_PARTICIPANT_EXPIRATION_DAYS *
                24 *
                60 *
                60,
            a = o("WAWebDBMessageUtils").beginningOfChat(e),
            i = o("WAWebDBMessageUtils").endOfChat(e),
            l = !0;
          if (n != null) {
            var s = yield o("WAWebSchemaMessage")
              .getMessageTable()
              .get(n.toString());
            (s == null ? void 0 : s.internalId) != null &&
              ((i = s.internalId), (l = !1));
          }
          var u = [];
          return (
            yield o("WAWebSchemaMessage")
              .getMessageTable()
              .between(
                ["internalId"],
                a,
                i,
                { reverse: !0, upperInclusive: l },
                function (e) {
                  return (
                    e.t < r ||
                    (e.viewMode ===
                      o("WAWebViewMode.flow").ViewModeType
                        .GROUP_MEMBER_UPDATES &&
                      u.push(
                        o("WAWebDBMessageSerialization").messageFromDbRow(e),
                      ),
                    u.length >= t)
                  );
                },
              ),
            u
          );
        })),
        s.apply(this, arguments)
      );
    }
    l.getGroupMemberUpdateMessagesForChat = e;
  },
  98,
);
