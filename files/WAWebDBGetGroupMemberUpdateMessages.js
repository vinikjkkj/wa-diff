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
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t, n) {
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
        var s = await o("WAWebSchemaMessage")
          .getMessageTable()
          .get(n.toString());
        (s == null ? void 0 : s.internalId) != null &&
          ((i = s.internalId), (l = !1));
      }
      var u = [];
      return (
        await o("WAWebSchemaMessage")
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
                  o("WAWebViewMode.flow").ViewModeType.GROUP_MEMBER_UPDATES &&
                  u.push(o("WAWebDBMessageSerialization").messageFromDbRow(e)),
                u.length >= t)
              );
            },
          ),
        u
      );
    }
    l.getGroupMemberUpdateMessagesForChat = e;
  },
  98,
);
