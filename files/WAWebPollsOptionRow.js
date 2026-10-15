__d(
  "WAWebPollsOptionRow",
  [
    "WAWebCheckBox.react",
    "WAWebDrawerSection.react",
    "WAWebFlex.react",
    "WAWebFlexItem.react",
    "WAWebFrontendMsgGetters",
    "WAWebMessagePicture.react",
    "WAWebMsgGetters",
    "WAWebPollOptionImage.react",
    "WAWebPollOptionInfo",
    "WAWebPollsGatingUtils",
    "WAWebPollsOptionCheckbox",
    "WAWebQuizOptionCheckbox",
    "WAWebSpinner.react",
    "WAWebTypesMedia",
    "WDSPaddings.stylex",
    "react",
    "react-compiler-runtime",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.useId,
      c = {
        paddingInline48: {
          paddingInlineStart: "x1oiqv2n",
          paddingInlineEnd: "x15zmtp0",
          paddingLeft: null,
          paddingRight: null,
          $$css: !0,
        },
      },
      d = {
        infoLayoutContainer: { overflowWrap: "x1mzt3pk", $$css: !0 },
        loadingThumb: {
          width: "x15yg21f",
          height: "xnnlda6",
          borderStartStartRadius: "xyi3aci",
          borderStartEndRadius: "xwf5gio",
          borderEndEndRadius: "x1p453bz",
          borderEndStartRadius: "x1suzm8a",
          backgroundColor: "x3x0x6p",
          $$css: !0,
        },
      },
      m = 18;
    function p(e) {
      var t = o("react-compiler-runtime").c(59),
        n = e.albumMsgs,
        a = e.animationPromise,
        i = e.associatedMsg,
        l = e.checked,
        p = e.hideResults,
        g = e.index,
        h = e.isAdminOrOwner,
        y = e.isCorrectOption,
        C = e.isPollEnded,
        b = e.loadingPhotoThumb,
        v = e.msgKey,
        S = e.onDetailImageClick,
        R = e.onOptionToggle,
        L = e.onPhotoThumbClick,
        E = e.option,
        k = e.readonly,
        I = e.result,
        T = e.selectable,
        D = e.trusted,
        x = e.view,
        $ = E.localId,
        P = u(),
        N;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((N = [o("WAWebMsgGetters").getIsSentByMe]), (t[0] = N))
        : (N = t[0]);
      var M = o("useWAWebMsgValues").useMsgValues(v, N),
        w = M[0],
        A;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((A = o(
            "WAWebPollsGatingUtils",
          ).isTappableLinksInPollOptionEnabled()),
          (t[1] = A))
        : (A = t[1]);
      var F = A,
        O;
      t[2] !== i || t[3] !== b || t[4] !== L
        ? ((O =
            b === !0
              ? s.jsx(o("WAWebFlex.react").FlexColumn, {
                  xstyle: d.loadingThumb,
                  justify: "center",
                  align: "center",
                  shrink: 0,
                  children: s.jsx(o("WAWebSpinner.react").Spinner, { size: m }),
                })
              : i &&
                s.jsx(o("WAWebFlex.react").FlexColumn, {
                  alignSelf: "start",
                  shrink: 0,
                  children: s.jsx(r("WAWebPollOptionImage.react"), {
                    msgKey: i.id,
                    size: "large",
                    onClick: L,
                  }),
                })),
          (t[2] = i),
          (t[3] = b),
          (t[4] = L),
          (t[5] = O))
        : (O = t[5]);
      var B;
      t[6] !== O
        ? ((B = s.jsx(s.Fragment, { children: O })), (t[6] = O), (t[7] = B))
        : (B = t[7]);
      var W = B,
        q;
      t[8] !== P ||
      t[9] !== l ||
      t[10] !== R ||
      t[11] !== E ||
      t[12] !== I.count
        ? ((q = {
            option: E,
            checked: l,
            id: P,
            onOptionToggle: R,
            count: I.count,
          }),
          (t[8] = P),
          (t[9] = l),
          (t[10] = R),
          (t[11] = E),
          (t[12] = I.count),
          (t[13] = q))
        : (q = t[13]);
      var U = q,
        V = F && T,
        H;
      t[14] !== a ||
      t[15] !== U ||
      t[16] !== p ||
      t[17] !== g ||
      t[18] !== h ||
      t[19] !== y ||
      t[20] !== w ||
      t[21] !== v ||
      t[22] !== k ||
      t[23] !== T
        ? ((H =
            !k &&
            s.jsx(r("WAWebFlexItem.react"), {
              align: "start",
              shrink: 0,
              children:
                y == null
                  ? s.jsx(
                      r("WAWebPollsOptionCheckbox"),
                      babelHelpers.extends(
                        {
                          disabled: !T,
                          theme: w
                            ? o("WAWebCheckBox.react").CheckboxTheme
                                .POLLS_SENDER
                            : o("WAWebCheckBox.react").CheckboxTheme
                                .POLLS_RECEIVER,
                          testid: "poll-option-" + g,
                        },
                        U,
                      ),
                    )
                  : s.jsx(
                      r("WAWebQuizOptionCheckbox"),
                      babelHelpers.extends(
                        {
                          isAdminOrOwner: h,
                          hideResults: p,
                          testid: "quiz-option-" + g,
                          isCorrectOption: y,
                          msgId: v,
                          animationPromise: a,
                        },
                        U,
                      ),
                    ),
            })),
          (t[14] = a),
          (t[15] = U),
          (t[16] = p),
          (t[17] = g),
          (t[18] = h),
          (t[19] = y),
          (t[20] = w),
          (t[21] = v),
          (t[22] = k),
          (t[23] = T),
          (t[24] = H))
        : (H = t[24]);
      var G = (i || b) && x === "message" ? "vertical" : "horizontal",
        z = x === "message",
        j;
      t[25] !== P ||
      t[26] !== l ||
      t[27] !== p ||
      t[28] !== g ||
      t[29] !== h ||
      t[30] !== y ||
      t[31] !== C ||
      t[32] !== v ||
      t[33] !== S ||
      t[34] !== E ||
      t[35] !== I ||
      t[36] !== T ||
      t[37] !== G ||
      t[38] !== z ||
      t[39] !== D
        ? ((j = s.jsx(r("WAWebFlexItem.react"), {
            xstyle: d.infoLayoutContainer,
            grow: 1,
            children: s.jsx(r("WAWebPollOptionInfo"), {
              checkBoxId: P,
              index: g,
              isPollEnded: C,
              msgKey: v,
              name: E.name,
              onDetailImageClick: S,
              option: E,
              result: I,
              selectable: T,
              trusted: D,
              layout: G,
              showFacePile: z,
              hideResults: p,
              checked: l,
              isCorrectOption: y,
              isAdminOrOwner: h,
            }),
          })),
          (t[25] = P),
          (t[26] = l),
          (t[27] = p),
          (t[28] = g),
          (t[29] = h),
          (t[30] = y),
          (t[31] = C),
          (t[32] = v),
          (t[33] = S),
          (t[34] = E),
          (t[35] = I),
          (t[36] = T),
          (t[37] = G),
          (t[38] = z),
          (t[39] = D),
          (t[40] = j))
        : (j = t[40]);
      var K = x === "message" && W,
        Q;
      t[41] !== K || t[42] !== H || t[43] !== j
        ? ((Q = s.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            paddingTop: 12,
            paddingBottom: 12,
            columnGap: 8,
            children: [H, j, K],
          })),
          (t[41] = K),
          (t[42] = H),
          (t[43] = j),
          (t[44] = Q))
        : (Q = t[44]);
      var X = Q,
        Y;
      t[45] !== V || t[46] !== $ || t[47] !== R || t[48] !== X
        ? ((Y = V
            ? s.jsx(_, { onOptionToggle: R, localId: $, children: X })
            : s.jsx("div", {
                className:
                  "x1nkjj8i xnnj0qo x1fpiwec x1xp25i x1om80sa xe2bo3s xw8deok xyqdcma",
                children: X,
              })),
          (t[45] = V),
          (t[46] = $),
          (t[47] = R),
          (t[48] = X),
          (t[49] = Y))
        : (Y = t[49]);
      var J = Y;
      if (x === "message") return J;
      var Z;
      t[50] === Symbol.for("react.memo_cache_sentinel")
        ? ((Z = [
            c.paddingInline48,
            o("WDSPaddings.stylex").wdsPaddings.paddingVer20,
          ]),
          (t[50] = Z))
        : (Z = t[50]);
      var ee;
      t[51] !== n || t[52] !== i || t[53] !== g || t[54] !== D
        ? ((ee = s.jsx(f, {
            associatedMsg: i,
            albumMsgs: n,
            albumIndex: g,
            trusted: D,
          })),
          (t[51] = n),
          (t[52] = i),
          (t[53] = g),
          (t[54] = D),
          (t[55] = ee))
        : (ee = t[55]);
      var te;
      return (
        t[56] !== J || t[57] !== ee
          ? ((te = s.jsxs(r("WAWebDrawerSection.react"), {
              xstyle: Z,
              children: [ee, J],
            })),
            (t[56] = J),
            (t[57] = ee),
            (t[58] = te))
          : (te = t[58]),
        te
      );
    }
    function _(e) {
      var t = o("react-compiler-runtime").c(11),
        n = e.children,
        r = e.localId,
        a = e.onOptionToggle,
        i;
      t[0] !== r || t[1] !== a
        ? ((i = function (t) {
            var e = t.target;
            (e instanceof Element && e.closest("a, input")) || a(r);
          }),
          (t[0] = r),
          (t[1] = a),
          (t[2] = i))
        : (i = t[2]);
      var l = i,
        u;
      t[3] !== r || t[4] !== a
        ? ((u = function (t) {
            if (t.key === "Enter" || t.key === " ") {
              var e = t.target;
              if (e instanceof Element && e.closest("a, input")) return;
              (t.preventDefault(), t.stopPropagation(), a(r));
            }
          }),
          (t[3] = r),
          (t[4] = a),
          (t[5] = u))
        : (u = t[5]);
      var c = u,
        d;
      t[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = {
            className:
              "x1nkjj8i xnnj0qo x1fpiwec x1xp25i x1om80sa xe2bo3s xw8deok xyqdcma x1ypdohk x99gfjr xyb16r9 xrughyy xmprcrp",
          }),
          (t[6] = d))
        : (d = t[6]);
      var m;
      return (
        t[7] !== n || t[8] !== l || t[9] !== c
          ? ((m = s.jsx(
              "div",
              babelHelpers.extends({}, d, {
                onClick: l,
                onKeyDown: c,
                role: "button",
                tabIndex: 0,
                children: n,
              }),
            )),
            (t[7] = n),
            (t[8] = l),
            (t[9] = c),
            (t[10] = m))
          : (m = t[10]),
        m
      );
    }
    function f(e) {
      var t = o("react-compiler-runtime").c(8),
        n = e.albumIndex,
        r = e.albumMsgs,
        a = e.associatedMsg,
        i = e.trusted;
      if (a) {
        var l;
        t[0] !== a
          ? ((l = o("WAWebFrontendMsgGetters").getAsImage(a.unsafe())),
            (t[0] = a),
            (t[1] = l))
          : (l = t[1]);
        var u = l;
        if (u) {
          var c;
          return (
            t[2] !== n ||
            t[3] !== r ||
            t[4] !== a.mediaData ||
            t[5] !== u.id ||
            t[6] !== i
              ? ((c = s.jsx(o("WAWebMessagePicture.react").ImageMessage, {
                  albumMsgs: r,
                  currentAlbumMessageIndex: n,
                  msgKey: u.id,
                  mediaData: a.mediaData,
                  trusted: i,
                  displayAuthor: !1,
                  hideMeta: !0,
                  theme: o("WAWebTypesMedia").DisplayTheme.PhotoPoll,
                })),
                (t[2] = n),
                (t[3] = r),
                (t[4] = a.mediaData),
                (t[5] = u.id),
                (t[6] = i),
                (t[7] = c))
              : (c = t[7]),
            c
          );
        }
      }
    }
    l.default = p;
  },
  98,
);
