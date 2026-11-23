__d(
  "WAWebGuestMessagingGetInviterInfoAction",
  [
    "WALogger",
    "WAWebGuestMessagingFetchProfilePicAction",
    "WAWebGuestMessagingGetPushName",
    "WAWebSchemaChat",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    async function u() {
      try {
        var t = await o("WAWebSchemaChat").getChatTable().allPrimaryKeys();
        if (t.length !== 1)
          return (
            o("WALogger").ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "getInviterInfo: expected 1 chat, found ",
                  "",
                ])),
              t.length,
            ),
            [null, null]
          );
        var n = t[0],
          r = await Promise.all([
            o("WAWebGuestMessagingGetPushName").getPushName(n),
            o("WAWebGuestMessagingFetchProfilePicAction").fetchProfilePic(n),
          ]),
          a = r[0],
          i = r[1];
        return [a, i];
      } catch (e) {
        return (
          o("WALogger")
            .ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "getInviterInfo: failed to get inviter info ",
                  "",
                ])),
              e,
            )
            .tags("guest"),
          [null, null]
        );
      }
    }
    l.getInviterInfo = u;
  },
  98,
);
