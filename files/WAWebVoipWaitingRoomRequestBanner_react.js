__d(
  "WAWebVoipWaitingRoomRequestBanner.react",
  [
    "fbt",
    "WAWebFlex.react",
    "WDSButton.react",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = {
        bannerContainer: {
          paddingTop: "x16ovd2e",
          paddingBottom: "x12xbjc7",
          paddingInlineStart: "xb0esv5",
          paddingInlineEnd: "x1nzty39",
          position: "x10l6tqk",
          width: "xeq5yr9",
          minHeight: "x1wxaq2x",
          height: "xt7dq6l",
          insetInlineStart: "x1o0tod",
          insetInlineEnd: "xtijo5x",
          left: null,
          right: null,
          marginInlineStart: "xvc5jky",
          marginInlineEnd: "x11t971q",
          marginLeft: null,
          marginRight: null,
          bottom: "x1d9eok4",
          backgroundColor: "x1c2u55m",
          boxShadow: "xi5p3m0",
          borderStartStartRadius: "x1g83kfv",
          borderStartEndRadius: "x3qq2k7",
          borderEndEndRadius: "x2x8art",
          borderEndStartRadius: "x1qor8vf",
          zIndex: "xf5e64p",
          $$css: !0,
        },
        multiUserBanner: { maxWidth: "xxc7z9f", $$css: !0 },
      };
    function d(e) {
      var t = o("react-compiler-runtime").c(23),
        n = e.firstUserName,
        a = e.onApprove,
        i = e.onDeny,
        l = e.onSeeAll,
        d = e.waitingRoomUsersCount;
      if (d <= 0) return null;
      if (d === 1) {
        var m;
        t[0] !== n
          ? ((m = u.jsx(r("WDSText.react"), {
              type: "Body2Emphasized",
              colorName: "persistentAlwaysWhite",
              children: s._(/*BTDS*/ "{name} requested to join", [
                s._param("name", n),
              ]),
            })),
            (t[0] = n),
            (t[1] = m))
          : (m = t[1]);
        var p;
        t[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((p = s._(/*BTDS*/ "Deny")), (t[2] = p))
          : (p = t[2]);
        var _;
        t[3] !== i
          ? ((_ = u.jsx(r("WDSButton.react"), {
              variant: "filled",
              type: "destructive",
              size: "small",
              label: p,
              onPress: i,
            })),
            (t[3] = i),
            (t[4] = _))
          : (_ = t[4]);
        var f;
        t[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((f = s._(/*BTDS*/ "Approve")), (t[5] = f))
          : (f = t[5]);
        var g;
        t[6] !== a
          ? ((g = u.jsx(r("WDSButton.react"), {
              variant: "tonal",
              type: "default",
              size: "small",
              label: f,
              onPress: a,
            })),
            (t[6] = a),
            (t[7] = g))
          : (g = t[7]);
        var h;
        t[8] !== _ || t[9] !== g
          ? ((h = u.jsxs(o("WAWebFlex.react").FlexRow, {
              align: "center",
              columnGap: 8,
              shrink: 0,
              children: [_, g],
            })),
            (t[8] = _),
            (t[9] = g),
            (t[10] = h))
          : (h = t[10]);
        var y;
        return (
          t[11] !== m || t[12] !== h
            ? ((y = u.jsxs(o("WAWebFlex.react").FlexRow, {
                align: "center",
                columnGap: 8,
                xstyle: c.bannerContainer,
                children: [m, h],
              })),
              (t[11] = m),
              (t[12] = h),
              (t[13] = y))
            : (y = t[13]),
          y
        );
      }
      var C;
      t[14] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = [c.bannerContainer, c.multiUserBanner]), (t[14] = C))
        : (C = t[14]);
      var b;
      t[15] !== d
        ? ((b = u.jsx(r("WDSText.react"), {
            type: "Body2Emphasized",
            colorName: "persistentAlwaysWhite",
            children: s._(
              /*BTDS*/ '_j{"*":"{number} people requested to join","_1":"1 person requested to join"}',
              [s._plural(d, "number")],
            ),
          })),
          (t[15] = d),
          (t[16] = b))
        : (b = t[16]);
      var v;
      t[17] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = s._(/*BTDS*/ "See all")), (t[17] = v))
        : (v = t[17]);
      var S;
      t[18] !== l
        ? ((S = u.jsx(o("WAWebFlex.react").FlexItem, {
            shrink: 0,
            children: u.jsx(r("WDSButton.react"), {
              variant: "tonal",
              type: "default",
              size: "small",
              label: v,
              onPress: l,
            }),
          })),
          (t[18] = l),
          (t[19] = S))
        : (S = t[19]);
      var R;
      return (
        t[20] !== b || t[21] !== S
          ? ((R = u.jsxs(o("WAWebFlex.react").FlexRow, {
              align: "center",
              columnGap: 8,
              xstyle: C,
              children: [b, S],
            })),
            (t[20] = b),
            (t[21] = S),
            (t[22] = R))
          : (R = t[22]),
        R
      );
    }
    l.default = d;
  },
  226,
);
