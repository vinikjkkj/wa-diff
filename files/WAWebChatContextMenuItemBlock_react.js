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
    "react-compiler-runtime",
    "useWAWebChatValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(7),
        n = e.chat,
        a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = [o("WAWebChatGetters").getIsUser]), (t[0] = a))
        : (a = t[0]);
      var i = o("useWAWebChatValues").useChatValues(n.id, a),
        l = i[0];
      if (
        o("WAWebABProps").getABPropConfigValue("block_from_chat_list") &&
        l &&
        !o("WAWebContactGetters").getIsMe(n.contact) &&
        !n.contact.isEnterprise
      ) {
        var c =
            o("WAWebBlocklistCollection").BlocklistCollection.get(n.id) != null,
          d = c;
        if (
          !d &&
          o("WAWebLid1X1MigrationGating").Lid1X1MigrationUtils.isLidMigrated()
        ) {
          var m = o("WAWebApiContact").getAlternateUserWid(
              o("WAWebWidFactory").asUserWidOrThrow(n.id),
            ),
            p = m
              ? o("WAWebBlocklistCollection").BlocklistCollection.get(m) != null
              : !1;
          d = p;
        }
        if (d) {
          var _;
          t[1] === Symbol.for("react.memo_cache_sentinel")
            ? ((_ = s._(/*BTDS*/ "Unblock")), (t[1] = _))
            : (_ = t[1]);
          var f = _,
            g;
          return (
            t[2] !== n
              ? ((g = u.jsx(
                  r("WDSMenuItem.react"),
                  {
                    Icon: r("WDSIconIcBlock.react"),
                    title: f,
                    onPress: function () {
                      return o("WAWebBlockContactUtils").handleUnblock(
                        n.contact,
                        n.isTrusted()
                          ? o("WAWebBlockContants").BlockEntryPoint
                              .ChatListBlock
                          : o("WAWebBlockContants").BlockEntryPoint
                              .ChatListNoInsubBlock,
                      );
                    },
                    testid: void 0,
                  },
                  "UnBlock",
                )),
                (t[2] = n),
                (t[3] = g))
              : (g = t[3]),
            g
          );
        }
        var h;
        t[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((h = s._(/*BTDS*/ "Block")), (t[4] = h))
          : (h = t[4]);
        var y = h,
          C;
        return (
          t[5] !== n
            ? ((C = u.jsx(
                r("WDSMenuItem.react"),
                {
                  Icon: r("WDSIconIcBlock.react"),
                  title: y,
                  onPress: function () {
                    return o("WAWebBlockContactUtils").handleBlock(
                      n,
                      n.isTrusted()
                        ? o("WAWebBlockContants").BlockEntryPoint.ChatListBlock
                        : o("WAWebBlockContants").BlockEntryPoint
                            .ChatListNoInsubBlock,
                    );
                  },
                  testid: void 0,
                  destructive: !0,
                },
                "Block",
              )),
              (t[5] = n),
              (t[6] = C))
            : (C = t[6]),
          C
        );
      }
    }
    l.default = c;
  },
  226,
);
