__d(
  "WAWebChatContextMenuItemBlock.react",
  [
    "fbt",
    "WAWebABProps",
    "WAWebApiContact",
    "WAWebBlockContactUtils",
    "WAWebBlockContants",
    "WAWebBlocklistCollection",
    "WAWebChatGetters",
    "WAWebContactGetters",
    "WAWebLid1X1MigrationGating",
    "WAWebWidFactory",
    "WDSIconIcBlock.react",
    "WDSMenuItem.react",
    "react",
    "useWAWebChatValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.chat,
        n = o("useWAWebChatValues").useChatValues(t.id, [
          o("WAWebChatGetters").getIsUser,
        ]),
        a = n[0];
      if (
        o("WAWebABProps").getABPropConfigValue("block_from_chat_list") &&
        a &&
        !o("WAWebContactGetters").getIsMe(t.contact) &&
        !t.contact.isEnterprise
      ) {
        var i =
            o("WAWebBlocklistCollection").BlocklistCollection.get(t.id) != null,
          l = i;
        if (
          !l &&
          o("WAWebLid1X1MigrationGating").Lid1X1MigrationUtils.isLidMigrated()
        ) {
          var c = o("WAWebApiContact").getAlternateUserWid(
              o("WAWebWidFactory").asUserWidOrThrow(t.id),
            ),
            d = c
              ? o("WAWebBlocklistCollection").BlocklistCollection.get(c) != null
              : !1;
          l = d;
        }
        if (l) {
          var m = s._(/*BTDS*/ "Unblock");
          return u.jsx(
            r("WDSMenuItem.react"),
            {
              Icon: r("WDSIconIcBlock.react"),
              title: m,
              onPress: function () {
                return o("WAWebBlockContactUtils").handleUnblock(
                  t.contact,
                  t.isTrusted()
                    ? o("WAWebBlockContants").BlockEntryPoint.ChatListBlock
                    : o("WAWebBlockContants").BlockEntryPoint
                        .ChatListNoInsubBlock,
                );
              },
              testid: void 0,
            },
            "UnBlock",
          );
        }
        var p = s._(/*BTDS*/ "Block");
        return u.jsx(
          r("WDSMenuItem.react"),
          {
            Icon: r("WDSIconIcBlock.react"),
            title: p,
            onPress: function () {
              return o("WAWebBlockContactUtils").handleBlock(
                t,
                t.isTrusted()
                  ? o("WAWebBlockContants").BlockEntryPoint.ChatListBlock
                  : o("WAWebBlockContants").BlockEntryPoint
                      .ChatListNoInsubBlock,
              );
            },
            testid: void 0,
            destructive: !0,
          },
          "Block",
        );
      }
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
