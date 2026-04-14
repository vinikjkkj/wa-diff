__d(
  "WAWebMessageAlbumWrapperMenuContent.react",
  [
    "fbt",
    "WAWebEnvironment",
    "WAWebMsgActionCapability",
    "WDSIconIcDelete.react",
    "WDSIconIcDownload.react",
    "WDSIconIcFastForward.react",
    "WDSIconIcGrade.react",
    "WDSIconWdsIcGradeSlash.react",
    "WDSMenu.react",
    "WDSMenuItem.react",
    "cr:7565",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useMemo;
    function d(e) {
      return c(
        function () {
          var t = e.every(function (e) {
              return o("WAWebMsgActionCapability").canDownloadMsg(
                e.unsafe(),
                !0,
              );
            }),
            a = e.every(function (e) {
              return o("WAWebMsgActionCapability").canDeleteMsg(e.unsafe());
            }),
            i = e.every(function (e) {
              return o("WAWebMsgActionCapability").canForwardMsg(e.unsafe());
            }),
            l = e.every(function (e) {
              return o("WAWebMsgActionCapability").canStarMsg(e.unsafe());
            }),
            s = e.every(function (e) {
              return e.star;
            }),
            u =
              r("WAWebEnvironment").isWindows &&
              n("cr:7565") != null &&
              n("cr:7565").supportsBulkMediaSaving();
          return {
            canAllDownload: t,
            canAllDelete: a,
            canForwardAll: i,
            canAllStar: l,
            allMessagesHasStar: s,
            canSaveAllFilesDirectly: u,
          };
        },
        [e],
      );
    }
    function m(e) {
      var t = e.handleDownload,
        a = e.handleOpenDeleteFlow,
        i = e.handleOpenForwardFlow,
        l = e.handleSaveAll,
        c = e.handleStar,
        d = e.handleUnstar,
        m = e.msgs,
        p = [],
        _ = m.every(function (e) {
          return o("WAWebMsgActionCapability").canDownloadMsg(e.unsafe(), !0);
        }),
        f = m.every(function (e) {
          return o("WAWebMsgActionCapability").canDeleteMsg(e.unsafe());
        }),
        g =
          r("WAWebEnvironment").isWindows &&
          n("cr:7565") != null &&
          n("cr:7565").supportsBulkMediaSaving(),
        h = s._(/*BTDS*/ "Download all");
      _ &&
        !g &&
        p.push(
          u.jsx(
            r("WDSMenuItem.react"),
            {
              Icon: r("WDSIconIcDownload.react"),
              title: h,
              onPress: t,
              testid: void 0,
            },
            "download",
          ),
        );
      var y = s._(/*BTDS*/ "Forward all"),
        C = m.every(function (e) {
          return o("WAWebMsgActionCapability").canForwardMsg(e.unsafe());
        });
      C &&
        p.push(
          u.jsx(
            r("WDSMenuItem.react"),
            {
              Icon: r("WDSIconIcFastForward.react"),
              iconDirectional: !0,
              title: y,
              onPress: function () {
                i(!0);
              },
              testid: void 0,
            },
            "forward",
          ),
        );
      var b = m.every(function (e) {
        return o("WAWebMsgActionCapability").canStarMsg(e.unsafe());
      });
      if (b) {
        var v = m.every(function (e) {
            return e.star;
          }),
          S = s._(/*BTDS*/ "Unstar all"),
          R = s._(/*BTDS*/ "Star all");
        v
          ? p.push(
              u.jsx(
                r("WDSMenuItem.react"),
                {
                  Icon: r("WDSIconWdsIcGradeSlash.react"),
                  title: S,
                  onPress: d,
                  testid: void 0,
                },
                "star",
              ),
            )
          : p.push(
              u.jsx(
                r("WDSMenuItem.react"),
                {
                  Icon: r("WDSIconIcGrade.react"),
                  title: R,
                  onPress: c,
                  testid: void 0,
                },
                "star",
              ),
            );
      }
      var L = s._(/*BTDS*/ "Save all");
      _ &&
        g &&
        p.push(
          u.jsx(
            r("WDSMenuItem.react"),
            {
              Icon: r("WDSIconIcDownload.react"),
              title: L,
              onPress: l,
              testid: void 0,
            },
            "save",
          ),
        );
      var E = s._(/*BTDS*/ "Delete all");
      return (
        f &&
          p.push(
            u.jsx(
              r("WDSMenuItem.react"),
              {
                Icon: r("WDSIconIcDelete.react"),
                title: E,
                onPress: function () {
                  a(!0);
                },
                testid: void 0,
                destructive: !0,
              },
              "delete",
            ),
          ),
        p
      );
    }
    function p(e) {
      var t = e.handleDownload,
        n = e.handleOpenDeleteFlow,
        o = e.handleOpenForwardFlow,
        a = e.handleSaveAll,
        i = e.handleStar,
        l = e.handleUnstar,
        c = e.msgs,
        m = d(c),
        p = [];
      return (
        m.canAllDownload &&
          !m.canSaveAllFilesDirectly &&
          p.push(
            u.jsx(
              r("WDSMenuItem.react"),
              {
                Icon: r("WDSIconIcDownload.react"),
                title: s._(/*BTDS*/ "Download all"),
                onPress: t,
                testid: void 0,
              },
              "download",
            ),
          ),
        m.canForwardAll &&
          p.push(
            u.jsx(
              r("WDSMenuItem.react"),
              {
                Icon: r("WDSIconIcFastForward.react"),
                iconDirectional: !0,
                title: s._(/*BTDS*/ "Forward all"),
                onPress: function () {
                  o(!0);
                },
                testid: void 0,
              },
              "forward",
            ),
          ),
        m.canAllStar &&
          (m.allMessagesHasStar
            ? p.push(
                u.jsx(
                  r("WDSMenuItem.react"),
                  {
                    Icon: r("WDSIconWdsIcGradeSlash.react"),
                    title: s._(/*BTDS*/ "Unstar all"),
                    onPress: l,
                    testid: void 0,
                  },
                  "star",
                ),
              )
            : p.push(
                u.jsx(
                  r("WDSMenuItem.react"),
                  {
                    Icon: r("WDSIconIcGrade.react"),
                    title: s._(/*BTDS*/ "Star all"),
                    onPress: i,
                    testid: void 0,
                  },
                  "star",
                ),
              )),
        m.canAllDownload &&
          m.canSaveAllFilesDirectly &&
          p.push(
            u.jsx(
              r("WDSMenuItem.react"),
              {
                Icon: r("WDSIconIcDownload.react"),
                title: s._(/*BTDS*/ "Save all"),
                onPress: a,
                testid: void 0,
              },
              "save",
            ),
          ),
        m.canAllDelete &&
          p.push(
            u.jsx(
              r("WDSMenuItem.react"),
              {
                Icon: r("WDSIconIcDelete.react"),
                title: s._(/*BTDS*/ "Delete all"),
                onPress: function () {
                  n(!0);
                },
                testid: void 0,
                destructive: !0,
              },
              "delete",
            ),
          ),
        u.jsx(r("WDSMenu.react"), { useMaxWidth: !1, children: p })
      );
    }
    ((p.displayName = p.name + " [from " + i.id + "]"),
      (l.useAlbumMenuConfig = d),
      (l.buildAlbumContextMenuItems = m),
      (l.WAWebMessageAlbumWrapperMenuContent = p));
  },
  226,
);
