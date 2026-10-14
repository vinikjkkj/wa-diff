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
      u = {
        paddingInline48: {
          paddingInlineStart: "x1oiqv2n",
          paddingInlineEnd: "x15zmtp0",
          paddingLeft: null,
          paddingRight: null,
          $$css: !0,
        },
      },
      c = {
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
      d = 18;
    function m(e) {
      var t = o("react-compiler-runtime").c(61),
        n = e.albumMsgs,
        a = e.animationPromise,
        i = e.associatedMsg,
        l = e.checked,
        m = e.hideResults,
        f = e.index,
        g = e.isAdminOrOwner,
        h = e.isCorrectOption,
        y = e.isPollEnded,
        C = e.loadingPhotoThumb,
        b = e.msgKey,
        v = e.onDetailImageClick,
        S = e.onOptionToggle,
        R = e.onPhotoThumbClick,
        L = e.option,
        E = e.readonly,
        k = e.result,
        I = e.selectable,
        T = e.trusted,
        D = e.view,
        x = L.localId,
        $;
      t[0] !== b ? (($ = b.toString()), (t[0] = b), (t[1] = $)) : ($ = t[1]);
      var P = $ + "-option-" + x,
        N;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((N = [o("WAWebMsgGetters").getIsSentByMe]), (t[2] = N))
        : (N = t[2]);
      var M = o("useWAWebMsgValues").useMsgValues(b, N),
        w = M[0],
        A;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((A = o(
            "WAWebPollsGatingUtils",
          ).isTappableLinksInPollOptionEnabled()),
          (t[3] = A))
        : (A = t[3]);
      var F = A,
        O;
      t[4] !== i || t[5] !== C || t[6] !== R
        ? ((O =
            C === !0
              ? s.jsx(o("WAWebFlex.react").FlexColumn, {
                  xstyle: c.loadingThumb,
                  justify: "center",
                  align: "center",
                  shrink: 0,
                  children: s.jsx(o("WAWebSpinner.react").Spinner, { size: d }),
                })
              : i &&
                s.jsx(o("WAWebFlex.react").FlexColumn, {
                  alignSelf: "start",
                  shrink: 0,
                  children: s.jsx(r("WAWebPollOptionImage.react"), {
                    msgKey: i.id,
                    size: "large",
                    onClick: R,
                  }),
                })),
          (t[4] = i),
          (t[5] = C),
          (t[6] = R),
          (t[7] = O))
        : (O = t[7]);
      var B;
      t[8] !== O
        ? ((B = s.jsx(s.Fragment, { children: O })), (t[8] = O), (t[9] = B))
        : (B = t[9]);
      var W = B,
        q;
      t[10] !== P ||
      t[11] !== l ||
      t[12] !== S ||
      t[13] !== L ||
      t[14] !== k.count
        ? ((q = {
            option: L,
            checked: l,
            id: P,
            onOptionToggle: S,
            count: k.count,
          }),
          (t[10] = P),
          (t[11] = l),
          (t[12] = S),
          (t[13] = L),
          (t[14] = k.count),
          (t[15] = q))
        : (q = t[15]);
      var U = q,
        V = F && I,
        H;
      t[16] !== a ||
      t[17] !== U ||
      t[18] !== m ||
      t[19] !== f ||
      t[20] !== g ||
      t[21] !== h ||
      t[22] !== w ||
      t[23] !== b ||
      t[24] !== E ||
      t[25] !== I
        ? ((H =
            !E &&
            s.jsx(r("WAWebFlexItem.react"), {
              align: "start",
              shrink: 0,
              children:
                h == null
                  ? s.jsx(
                      r("WAWebPollsOptionCheckbox"),
                      babelHelpers.extends(
                        {
                          disabled: !I,
                          theme: w
                            ? o("WAWebCheckBox.react").CheckboxTheme
                                .POLLS_SENDER
                            : o("WAWebCheckBox.react").CheckboxTheme
                                .POLLS_RECEIVER,
                          testid: "poll-option-" + f,
                        },
                        U,
                      ),
                    )
                  : s.jsx(
                      r("WAWebQuizOptionCheckbox"),
                      babelHelpers.extends(
                        {
                          isAdminOrOwner: g,
                          hideResults: m,
                          testid: "quiz-option-" + f,
                          isCorrectOption: h,
                          msgId: b,
                          animationPromise: a,
                        },
                        U,
                      ),
                    ),
            })),
          (t[16] = a),
          (t[17] = U),
          (t[18] = m),
          (t[19] = f),
          (t[20] = g),
          (t[21] = h),
          (t[22] = w),
          (t[23] = b),
          (t[24] = E),
          (t[25] = I),
          (t[26] = H))
        : (H = t[26]);
      var G = (i || C) && D === "message" ? "vertical" : "horizontal",
        z = D === "message",
        j;
      t[27] !== P ||
      t[28] !== l ||
      t[29] !== m ||
      t[30] !== f ||
      t[31] !== g ||
      t[32] !== h ||
      t[33] !== y ||
      t[34] !== b ||
      t[35] !== v ||
      t[36] !== L ||
      t[37] !== k ||
      t[38] !== I ||
      t[39] !== G ||
      t[40] !== z ||
      t[41] !== T
        ? ((j = s.jsx(r("WAWebFlexItem.react"), {
            xstyle: c.infoLayoutContainer,
            grow: 1,
            children: s.jsx(r("WAWebPollOptionInfo"), {
              checkBoxId: P,
              index: f,
              isPollEnded: y,
              msgKey: b,
              name: L.name,
              onDetailImageClick: v,
              option: L,
              result: k,
              selectable: I,
              trusted: T,
              layout: G,
              showFacePile: z,
              hideResults: m,
              checked: l,
              isCorrectOption: h,
              isAdminOrOwner: g,
            }),
          })),
          (t[27] = P),
          (t[28] = l),
          (t[29] = m),
          (t[30] = f),
          (t[31] = g),
          (t[32] = h),
          (t[33] = y),
          (t[34] = b),
          (t[35] = v),
          (t[36] = L),
          (t[37] = k),
          (t[38] = I),
          (t[39] = G),
          (t[40] = z),
          (t[41] = T),
          (t[42] = j))
        : (j = t[42]);
      var K = D === "message" && W,
        Q;
      t[43] !== j || t[44] !== K || t[45] !== H
        ? ((Q = s.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            paddingTop: 12,
            paddingBottom: 12,
            columnGap: 8,
            children: [H, j, K],
          })),
          (t[43] = j),
          (t[44] = K),
          (t[45] = H),
          (t[46] = Q))
        : (Q = t[46]);
      var X = Q,
        Y;
      t[47] !== V || t[48] !== x || t[49] !== S || t[50] !== X
        ? ((Y = V
            ? s.jsx(p, { onOptionToggle: S, localId: x, children: X })
            : s.jsx("div", {
                className:
                  "x1nkjj8i xnnj0qo x1fpiwec x1xp25i x1om80sa xe2bo3s xw8deok xyqdcma",
                children: X,
              })),
          (t[47] = V),
          (t[48] = x),
          (t[49] = S),
          (t[50] = X),
          (t[51] = Y))
        : (Y = t[51]);
      var J = Y;
      if (D === "message") return J;
      var Z;
      t[52] === Symbol.for("react.memo_cache_sentinel")
        ? ((Z = [
            u.paddingInline48,
            o("WDSPaddings.stylex").wdsPaddings.paddingVer20,
          ]),
          (t[52] = Z))
        : (Z = t[52]);
      var ee;
      t[53] !== n || t[54] !== i || t[55] !== f || t[56] !== T
        ? ((ee = s.jsx(_, {
            associatedMsg: i,
            albumMsgs: n,
            albumIndex: f,
            trusted: T,
          })),
          (t[53] = n),
          (t[54] = i),
          (t[55] = f),
          (t[56] = T),
          (t[57] = ee))
        : (ee = t[57]);
      var te;
      return (
        t[58] !== J || t[59] !== ee
          ? ((te = s.jsxs(r("WAWebDrawerSection.react"), {
              xstyle: Z,
              children: [ee, J],
            })),
            (t[58] = J),
            (t[59] = ee),
            (t[60] = te))
          : (te = t[60]),
        te
      );
    }
    function p(e) {
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
    function _(e) {
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
    l.default = m;
  },
  98,
);
