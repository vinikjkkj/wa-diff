__d(
  "WAWebChatUnreadCount.react",
  [
    "fbt",
    "$InternalEnum",
    "WAWebCountRenderingUtils",
    "WAWebL10N",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebABPropConfigValue",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = n("$InternalEnum").Mirrored([
        "Transparent",
        "Outlined",
        "MissedCalls",
        "QuestionResponses",
      ]),
      m = {
        count: {
          display: "x1rg5ohu",
          paddingTop: "x1gxa6cn",
          paddingInlineEnd: "x1j8ymqv",
          paddingBottom: "xa0aww2",
          paddingInlineStart: "x4tra6z",
          color: "x1pse0pq",
          verticalAlign: "x16dsc37",
          height: "xlup9mm",
          minWidth: "x15kz4h8",
          textAlign: "x2b8uid",
          borderStartStartRadius: "xt8t1vi",
          borderStartEndRadius: "x1xc408v",
          borderEndEndRadius: "x129tdwq",
          borderEndStartRadius: "x15urzxu",
          $$css: !0,
        },
        countMorePadding: {
          paddingInlineStart: "x181vq82",
          paddingInlineEnd: "x1uc92m",
          $$css: !0,
        },
        outlinePaddingReposition: { marginInlineStart: "x165d6jo", $$css: !0 },
        transparent: { backgroundColor: "xjbqb8w", $$css: !0 },
        fixWordBreak: { wordBreak: "xdnwjd9", $$css: !0 },
        outlined: {
          borderTopWidth: "x1ktv7sr",
          borderInlineEndWidth: "x142x0oa",
          borderBottomWidth: "xv7zg05",
          borderInlineStartWidth: "x12dgle5",
          borderTopStyle: "x13fuv20",
          borderInlineEndStyle: "x18b5jzi",
          borderBottomStyle: "x1q0q8m5",
          borderInlineStartStyle: "x1t7ytsu",
          borderTopColor: "x1yqpz0i",
          borderInlineEndColor: "x1lebdv1",
          borderBottomColor: "x1454cx3",
          borderInlineStartColor: "x1qppnnw",
          $$css: !0,
        },
        defaultBg: { backgroundColor: "xyp3urf", $$css: !0 },
        missedCallBg: { backgroundColor: "xk0ssx3", $$css: !0 },
        marginHoriz8: {
          marginInlineStart: "x150mmf0",
          marginInlineEnd: "xqf2s3x",
          marginLeft: null,
          marginRight: null,
          $$css: !0,
        },
      };
    function p(t) {
      var n = o("react-compiler-runtime").c(27),
        a = t.ariaLabel,
        i = t.count,
        l = t.maxCount,
        u = t.ref,
        p = t.theme,
        _ = l === void 0 ? 1e3 : l,
        f;
      if (a != null && a !== "") f = a;
      else if (i > 0) {
        var g;
        (n[0] !== i
          ? ((g = s._(
              /*BTDS*/ '_j{"*":"{count} unread messages","_1":"1 unread message"}',
              [s._plural(i, "count")],
            )),
            (n[0] = i),
            (n[1] = g))
          : (g = n[1]),
          (f = g));
      } else {
        var h;
        (n[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((h = s._(/*BTDS*/ "Unread")), (n[2] = h))
          : (h = n[2]),
          (f = h));
      }
      var y = p === d.Transparent ? "contentDeemphasized" : "contentOnAccent",
        C = o("useWAWebABPropConfigValue").useABPropConfigValue(
          "wds_web_roboto",
        ),
        b = p === d.MissedCalls ? m.missedCallBg : m.defaultBg,
        v,
        S,
        R,
        L;
      if (n[3] !== b || n[4] !== i || n[5] !== _ || n[6] !== u || n[7] !== p) {
        var E = [m.count, b];
        (i >= 10 &&
          (E.push(m.countMorePadding),
          (p === d.Outlined || p === d.MissedCalls) &&
            E.push(m.outlinePaddingReposition)),
          p === d.Outlined || p === d.MissedCalls
            ? E.push(m.outlined)
            : p === d.Transparent
              ? E.push(m.transparent)
              : p === d.QuestionResponses && E.push(m.marginHoriz8));
        var k =
            p === d.MissedCalls ? "missed-call-counter" : "icon-unread-count",
          I = p === d.MissedCalls ? "missed_call" : "unread_message",
          T;
        (n[12] !== i || n[13] !== I || n[14] !== _ || n[15] !== p
          ? ((T =
              p === d.QuestionResponses
                ? r("WAWebL10N").d(i)
                : o("WAWebCountRenderingUtils").renderCount(i, _, I)),
            (n[12] = i),
            (n[13] = I),
            (n[14] = _),
            (n[15] = p),
            (n[16] = T))
          : (T = n[16]),
          (v = T),
          (S = u),
          (R = k),
          (L = (e || (e = r("stylex"))).props(E)),
          (n[3] = b),
          (n[4] = i),
          (n[5] = _),
          (n[6] = u),
          (n[7] = p),
          (n[8] = v),
          (n[9] = S),
          (n[10] = R),
          (n[11] = L));
      } else ((v = n[8]), (S = n[9]), (R = n[10]), (L = n[11]));
      var D;
      n[17] !== v || n[18] !== C || n[19] !== y
        ? ((D = c.jsx(r("WDSText.react"), {
            type: "Body3Emphasized",
            colorName: y,
            robotoPropValue: C,
            xstyle: m.fixWordBreak,
            children: v,
          })),
          (n[17] = v),
          (n[18] = C),
          (n[19] = y),
          (n[20] = D))
        : (D = n[20]);
      var x;
      return (
        n[21] !== S || n[22] !== R || n[23] !== L || n[24] !== D || n[25] !== f
          ? ((x = c.jsx(
              "span",
              babelHelpers.extends({ ref: S, "data-testid": void 0 }, L, {
                "aria-label": f,
                children: D,
              }),
            )),
            (n[21] = S),
            (n[22] = R),
            (n[23] = L),
            (n[24] = D),
            (n[25] = f),
            (n[26] = x))
          : (x = n[26]),
        x
      );
    }
    ((l.UnreadCountTheme = d), (l.UnreadCount = p));
  },
  226,
);
