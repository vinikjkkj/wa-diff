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
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useMemo;
    function d(e) {
      var t = o("react-compiler-runtime").c(17),
        a;
      t[0] !== e ? ((a = e.every(g)), (t[0] = e), (t[1] = a)) : (a = t[1]);
      var i = a,
        l;
      t[2] !== e ? ((l = e.every(f)), (t[2] = e), (t[3] = l)) : (l = t[3]);
      var s = l,
        u;
      t[4] !== e ? ((u = e.every(_)), (t[4] = e), (t[5] = u)) : (u = t[5]);
      var c = u,
        d;
      t[6] !== e ? ((d = e.every(p)), (t[6] = e), (t[7] = d)) : (d = t[7]);
      var h = d,
        y;
      t[8] !== e ? ((y = e.every(m)), (t[8] = e), (t[9] = y)) : (y = t[9]);
      var C = y,
        b;
      t[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((b =
            r("WAWebEnvironment").isWindows &&
            n("cr:7565") != null &&
            n("cr:7565").supportsBulkMediaSaving()),
          (t[10] = b))
        : (b = t[10]);
      var v = b,
        S;
      return (
        t[11] !== C || t[12] !== s || t[13] !== i || t[14] !== h || t[15] !== c
          ? ((S = {
              canAllDownload: i,
              canAllDelete: s,
              canForwardAll: c,
              canAllStar: h,
              allMessagesHasStar: C,
              canSaveAllFilesDirectly: v,
            }),
            (t[11] = C),
            (t[12] = s),
            (t[13] = i),
            (t[14] = h),
            (t[15] = c),
            (t[16] = S))
          : (S = t[16]),
        S
      );
    }
    function m(e) {
      return e.star;
    }
    function p(e) {
      return o("WAWebMsgActionCapability").canStarMsg(e.unsafe());
    }
    function _(e) {
      return o("WAWebMsgActionCapability").canForwardMsg(e.unsafe());
    }
    function f(e) {
      return o("WAWebMsgActionCapability").canDeleteMsg(e.unsafe());
    }
    function g(e) {
      return o("WAWebMsgActionCapability").canDownloadMsg(e.unsafe(), !0);
    }
    function h(e) {
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
    function y(e) {
      var t = o("react-compiler-runtime").c(31),
        n = e.handleDownload,
        a = e.handleOpenDeleteFlow,
        i = e.handleOpenForwardFlow,
        l = e.handleSaveAll,
        c = e.handleStar,
        m = e.handleUnstar,
        p = e.msgs,
        _ = d(p),
        f;
      if (
        t[0] !== n ||
        t[1] !== a ||
        t[2] !== i ||
        t[3] !== l ||
        t[4] !== c ||
        t[5] !== m ||
        t[6] !== _.allMessagesHasStar ||
        t[7] !== _.canAllDelete ||
        t[8] !== _.canAllDownload ||
        t[9] !== _.canAllStar ||
        t[10] !== _.canForwardAll ||
        t[11] !== _.canSaveAllFilesDirectly
      ) {
        var g = [];
        if (_.canAllDownload && !_.canSaveAllFilesDirectly) {
          var h;
          t[13] === Symbol.for("react.memo_cache_sentinel")
            ? ((h = s._(/*BTDS*/ "Download all")), (t[13] = h))
            : (h = t[13]);
          var y;
          (t[14] !== n
            ? ((y = u.jsx(
                r("WDSMenuItem.react"),
                {
                  Icon: r("WDSIconIcDownload.react"),
                  title: h,
                  onPress: n,
                  testid: void 0,
                },
                "download",
              )),
              (t[14] = n),
              (t[15] = y))
            : (y = t[15]),
            g.push(y));
        }
        if (_.canForwardAll) {
          var C;
          t[16] === Symbol.for("react.memo_cache_sentinel")
            ? ((C = s._(/*BTDS*/ "Forward all")), (t[16] = C))
            : (C = t[16]);
          var b;
          (t[17] !== i
            ? ((b = u.jsx(
                r("WDSMenuItem.react"),
                {
                  Icon: r("WDSIconIcFastForward.react"),
                  iconDirectional: !0,
                  title: C,
                  onPress: function () {
                    i(!0);
                  },
                  testid: void 0,
                },
                "forward",
              )),
              (t[17] = i),
              (t[18] = b))
            : (b = t[18]),
            g.push(b));
        }
        if (_.canAllStar)
          if (_.allMessagesHasStar) {
            var v;
            t[19] === Symbol.for("react.memo_cache_sentinel")
              ? ((v = s._(/*BTDS*/ "Unstar all")), (t[19] = v))
              : (v = t[19]);
            var S;
            (t[20] !== m
              ? ((S = u.jsx(
                  r("WDSMenuItem.react"),
                  {
                    Icon: r("WDSIconWdsIcGradeSlash.react"),
                    title: v,
                    onPress: m,
                    testid: void 0,
                  },
                  "star",
                )),
                (t[20] = m),
                (t[21] = S))
              : (S = t[21]),
              g.push(S));
          } else {
            var R;
            t[22] === Symbol.for("react.memo_cache_sentinel")
              ? ((R = s._(/*BTDS*/ "Star all")), (t[22] = R))
              : (R = t[22]);
            var L;
            (t[23] !== c
              ? ((L = u.jsx(
                  r("WDSMenuItem.react"),
                  {
                    Icon: r("WDSIconIcGrade.react"),
                    title: R,
                    onPress: c,
                    testid: void 0,
                  },
                  "star",
                )),
                (t[23] = c),
                (t[24] = L))
              : (L = t[24]),
              g.push(L));
          }
        if (_.canAllDownload && _.canSaveAllFilesDirectly) {
          var E;
          t[25] === Symbol.for("react.memo_cache_sentinel")
            ? ((E = s._(/*BTDS*/ "Save all")), (t[25] = E))
            : (E = t[25]);
          var k;
          (t[26] !== l
            ? ((k = u.jsx(
                r("WDSMenuItem.react"),
                {
                  Icon: r("WDSIconIcDownload.react"),
                  title: E,
                  onPress: l,
                  testid: void 0,
                },
                "save",
              )),
              (t[26] = l),
              (t[27] = k))
            : (k = t[27]),
            g.push(k));
        }
        if (_.canAllDelete) {
          var I;
          t[28] === Symbol.for("react.memo_cache_sentinel")
            ? ((I = s._(/*BTDS*/ "Delete all")), (t[28] = I))
            : (I = t[28]);
          var T;
          (t[29] !== a
            ? ((T = u.jsx(
                r("WDSMenuItem.react"),
                {
                  Icon: r("WDSIconIcDelete.react"),
                  title: I,
                  onPress: function () {
                    a(!0);
                  },
                  testid: void 0,
                  destructive: !0,
                },
                "delete",
              )),
              (t[29] = a),
              (t[30] = T))
            : (T = t[30]),
            g.push(T));
        }
        ((f = u.jsx(r("WDSMenu.react"), { useMaxWidth: !1, children: g })),
          (t[0] = n),
          (t[1] = a),
          (t[2] = i),
          (t[3] = l),
          (t[4] = c),
          (t[5] = m),
          (t[6] = _.allMessagesHasStar),
          (t[7] = _.canAllDelete),
          (t[8] = _.canAllDownload),
          (t[9] = _.canAllStar),
          (t[10] = _.canForwardAll),
          (t[11] = _.canSaveAllFilesDirectly),
          (t[12] = f));
      } else f = t[12];
      return f;
    }
    ((l.useAlbumMenuConfig = d),
      (l.buildAlbumContextMenuItems = h),
      (l.WAWebMessageAlbumWrapperMenuContent = y));
  },
  226,
);
