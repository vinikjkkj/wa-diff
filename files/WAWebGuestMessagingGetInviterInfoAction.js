__d(
  "WAWebGuestMessagingGetInviterInfoAction",
  [
    "Promise",
    "WALogger",
    "WAWebGuestMessagingFetchProfilePicAction",
    "WAWebGuestMessagingGetPushName",
    "WAWebSchemaChat",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c() {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            var t = yield o("WAWebSchemaChat").getChatTable().allPrimaryKeys();
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
            var r = t[0],
              a = yield (u || (u = n("Promise"))).all([
                o("WAWebGuestMessagingGetPushName").getPushName(r),
                o("WAWebGuestMessagingFetchProfilePicAction").fetchProfilePic(
                  r,
                ),
              ]),
              i = a[0],
              l = a[1];
            return [i, l];
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
        })),
        d.apply(this, arguments)
      );
    }
    l.getInviterInfo = c;
  },
  98,
);
