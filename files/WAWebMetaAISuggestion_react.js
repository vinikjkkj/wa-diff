__d(
  "WAWebMetaAISuggestion.react",
  [
    "WAWebBotFrontendUtils",
    "WAWebCellV2.react",
    "WAWebKeyboardHotKeys.react",
    "WAWebMetaAIIcon.react",
    "WAWebSendAiFilledIcon.react",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
    "useMergeRefs",
    "useWAWebActiveSelection",
    "useWAWebFocusState",
    "useWAWebHover",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e.useImperativeHandle,
      c = 15,
      d = {
        container: {
          paddingInlineEnd: "xcldk2z",
          paddingInlineStart: "x1phvje8",
          paddingBottom: "xa0aww2",
          paddingTop: "x1gxa6cn",
          $$css: !0,
        },
        cell: {
          paddingInlineEnd: "x1nzty39",
          paddingInlineStart: "x181vq82",
          minHeight: "xu0aao5",
          height: "xc9qbxq",
          $$css: !0,
        },
        primary: { paddingInlineStart: "x4tra6z", $$css: !0 },
        sendIcon: { color: "x1v5yvga", $$css: !0 },
      };
    function m(e) {
      var t = o("react-compiler-runtime").c(31),
        n = e.active,
        a = e.chatEntryPoint,
        i = e.onClick,
        l = e.ref,
        m = e.suggestion,
        p = r("useWAWebActiveSelection")(n, m.id),
        _ = p[0],
        f = p[1],
        g = o("useWAWebHover").useWAWebHover(_),
        h = r("useWAWebFocusState")(),
        y = h[0],
        C = h[1],
        b = r("useMergeRefs")(_, y),
        v;
      t[0] !== a || t[1] !== i || t[2] !== m
        ? ((v = function (t) {
            var e = m.query;
            (o("WAWebBotFrontendUtils").sendMetaBotQuery(e, a),
              i == null || i(t, m));
          }),
          (t[0] = a),
          (t[1] = i),
          (t[2] = m),
          (t[3] = v))
        : (v = t[3]);
      var S = v,
        R;
      t[4] !== _
        ? ((R = function () {
            var e;
            (e = _.current) == null || e.focus();
          }),
          (t[4] = _),
          (t[5] = R))
        : (R = t[5]);
      var L = R,
        E;
      (t[6] !== L
        ? ((E = function () {
            return { focus: L };
          }),
          (t[6] = L),
          (t[7] = E))
        : (E = t[7]),
        u(l, E));
      var k;
      t[8] !== S ? ((k = { enter: S }), (t[8] = S), (t[9] = k)) : (k = t[9]);
      var I = k,
        T = f || C,
        D;
      t[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((D = [d.cell]), (t[10] = D))
        : (D = t[10]);
      var x = m.query,
        $;
      t[11] !== m.query
        ? (($ = s.jsx(r("WDSText.react"), {
            type: "Body2",
            colorName: "contentDefault",
            maxLines: 1,
            children: m.query,
          })),
          (t[11] = m.query),
          (t[12] = $))
        : ($ = t[12]);
      var P, N;
      t[13] === Symbol.for("react.memo_cache_sentinel")
        ? ((N = s.jsx(r("WAWebMetaAIIcon.react"), { height: c, width: c })),
          (P = { className: "xvy4d1p xxk0z11" }),
          (t[13] = P),
          (t[14] = N))
        : ((P = t[13]), (N = t[14]));
      var M;
      t[15] !== f || t[16] !== C || t[17] !== g
        ? ((M =
            (g || f || C) &&
            s.jsx(o("WAWebSendAiFilledIcon.react").SendAiFilledIcon, {
              xstyle: d.sendIcon,
            })),
          (t[15] = f),
          (t[16] = C),
          (t[17] = g),
          (t[18] = M))
        : (M = t[18]);
      var w;
      t[19] !== M
        ? ((w = s.jsx("div", babelHelpers.extends({}, P, { children: M }))),
          (t[19] = M),
          (t[20] = w))
        : (w = t[20]);
      var A;
      t[21] !== b ||
      t[22] !== m.query ||
      t[23] !== w ||
      t[24] !== T ||
      t[25] !== $
        ? ((A = s.jsx(r("WAWebCellV2.react"), {
            ref: b,
            active: T,
            containerXStyle: D,
            colorScheme: "default",
            border: "bottom-partial",
            size: "small",
            title: x,
            primary: $,
            primaryXStyle: d.primary,
            detailLeft: N,
            detailRight: w,
          })),
          (t[21] = b),
          (t[22] = m.query),
          (t[23] = w),
          (t[24] = T),
          (t[25] = $),
          (t[26] = A))
        : (A = t[26]);
      var F;
      return (
        t[27] !== S || t[28] !== I || t[29] !== A
          ? ((F = s.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
              handlers: I,
              role: "button",
              xstyle: d.container,
              onMouseDown: S,
              children: A,
            })),
            (t[27] = S),
            (t[28] = I),
            (t[29] = A),
            (t[30] = F))
          : (F = t[30]),
        F
      );
    }
    l.default = m;
  },
  98,
);
