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
      var t = o("react-compiler-runtime").c(62),
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
        b = e.msg,
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
      t[0] !== b.id
        ? (($ = b.id.toString()), (t[0] = b.id), (t[1] = $))
        : ($ = t[1]);
      var P = $ + "-option-" + x,
        N;
      t[2] !== b
        ? ((N = o("WAWebMsgGetters").getIsSentByMe(b)), (t[2] = b), (t[3] = N))
        : (N = t[3]);
      var M = N,
        w;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((w = o(
            "WAWebPollsGatingUtils",
          ).isTappableLinksInPollOptionEnabled()),
          (t[4] = w))
        : (w = t[4]);
      var A = w,
        F;
      t[5] !== i || t[6] !== C || t[7] !== R
        ? ((F =
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
                    msg: i,
                    size: "large",
                    onClick: R,
                  }),
                })),
          (t[5] = i),
          (t[6] = C),
          (t[7] = R),
          (t[8] = F))
        : (F = t[8]);
      var O;
      t[9] !== F
        ? ((O = s.jsx(s.Fragment, { children: F })), (t[9] = F), (t[10] = O))
        : (O = t[10]);
      var B = O,
        W;
      t[11] !== P ||
      t[12] !== l ||
      t[13] !== S ||
      t[14] !== L ||
      t[15] !== k.count
        ? ((W = {
            option: L,
            checked: l,
            id: P,
            onOptionToggle: S,
            count: k.count,
          }),
          (t[11] = P),
          (t[12] = l),
          (t[13] = S),
          (t[14] = L),
          (t[15] = k.count),
          (t[16] = W))
        : (W = t[16]);
      var q = W,
        U = A && I,
        V;
      t[17] !== a ||
      t[18] !== q ||
      t[19] !== m ||
      t[20] !== f ||
      t[21] !== g ||
      t[22] !== h ||
      t[23] !== M ||
      t[24] !== b.id ||
      t[25] !== E ||
      t[26] !== I
        ? ((V =
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
                          theme: M
                            ? o("WAWebCheckBox.react").CheckboxTheme
                                .POLLS_SENDER
                            : o("WAWebCheckBox.react").CheckboxTheme
                                .POLLS_RECEIVER,
                          testid: "poll-option-" + f,
                        },
                        q,
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
                          msgId: b.id,
                          animationPromise: a,
                        },
                        q,
                      ),
                    ),
            })),
          (t[17] = a),
          (t[18] = q),
          (t[19] = m),
          (t[20] = f),
          (t[21] = g),
          (t[22] = h),
          (t[23] = M),
          (t[24] = b.id),
          (t[25] = E),
          (t[26] = I),
          (t[27] = V))
        : (V = t[27]);
      var H = (i || C) && D === "message" ? "vertical" : "horizontal",
        G = D === "message",
        z;
      t[28] !== P ||
      t[29] !== l ||
      t[30] !== m ||
      t[31] !== f ||
      t[32] !== g ||
      t[33] !== h ||
      t[34] !== y ||
      t[35] !== b ||
      t[36] !== v ||
      t[37] !== L ||
      t[38] !== k ||
      t[39] !== I ||
      t[40] !== H ||
      t[41] !== G ||
      t[42] !== T
        ? ((z = s.jsx(r("WAWebFlexItem.react"), {
            xstyle: c.infoLayoutContainer,
            grow: 1,
            children: s.jsx(r("WAWebPollOptionInfo"), {
              checkBoxId: P,
              index: f,
              isPollEnded: y,
              msg: b,
              name: L.name,
              onDetailImageClick: v,
              option: L,
              result: k,
              selectable: I,
              trusted: T,
              layout: H,
              showFacePile: G,
              hideResults: m,
              checked: l,
              isCorrectOption: h,
              isAdminOrOwner: g,
            }),
          })),
          (t[28] = P),
          (t[29] = l),
          (t[30] = m),
          (t[31] = f),
          (t[32] = g),
          (t[33] = h),
          (t[34] = y),
          (t[35] = b),
          (t[36] = v),
          (t[37] = L),
          (t[38] = k),
          (t[39] = I),
          (t[40] = H),
          (t[41] = G),
          (t[42] = T),
          (t[43] = z))
        : (z = t[43]);
      var j = D === "message" && B,
        K;
      t[44] !== z || t[45] !== j || t[46] !== V
        ? ((K = s.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            paddingTop: 12,
            paddingBottom: 12,
            columnGap: 8,
            children: [V, z, j],
          })),
          (t[44] = z),
          (t[45] = j),
          (t[46] = V),
          (t[47] = K))
        : (K = t[47]);
      var Q = K,
        X;
      t[48] !== U || t[49] !== x || t[50] !== S || t[51] !== Q
        ? ((X = U
            ? s.jsx(p, { onOptionToggle: S, localId: x, children: Q })
            : s.jsx("div", {
                className:
                  "x1nkjj8i xnnj0qo x1fpiwec x1xp25i x1om80sa xe2bo3s xw8deok xyqdcma",
                children: Q,
              })),
          (t[48] = U),
          (t[49] = x),
          (t[50] = S),
          (t[51] = Q),
          (t[52] = X))
        : (X = t[52]);
      var Y = X;
      if (D === "message") return Y;
      var J;
      t[53] === Symbol.for("react.memo_cache_sentinel")
        ? ((J = [
            u.paddingInline48,
            o("WDSPaddings.stylex").wdsPaddings.paddingVer20,
          ]),
          (t[53] = J))
        : (J = t[53]);
      var Z;
      t[54] !== n || t[55] !== i || t[56] !== f || t[57] !== T
        ? ((Z = s.jsx(_, {
            associatedMsg: i,
            albumMsgs: n,
            albumIndex: f,
            trusted: T,
          })),
          (t[54] = n),
          (t[55] = i),
          (t[56] = f),
          (t[57] = T),
          (t[58] = Z))
        : (Z = t[58]);
      var ee;
      return (
        t[59] !== Y || t[60] !== Z
          ? ((ee = s.jsxs(r("WAWebDrawerSection.react"), {
              xstyle: J,
              children: [Z, Y],
            })),
            (t[59] = Y),
            (t[60] = Z),
            (t[61] = ee))
          : (ee = t[61]),
        ee
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
            t[5] !== u ||
            t[6] !== i
              ? ((c = s.jsx(o("WAWebMessagePicture.react").ImageMessage, {
                  albumMsgs: r,
                  currentAlbumMessageIndex: n,
                  msg: u,
                  mediaData: a.mediaData,
                  trusted: i,
                  displayAuthor: !1,
                  hideMeta: !0,
                  theme: o("WAWebTypesMedia").DisplayTheme.PhotoPoll,
                })),
                (t[2] = n),
                (t[3] = r),
                (t[4] = a.mediaData),
                (t[5] = u),
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
