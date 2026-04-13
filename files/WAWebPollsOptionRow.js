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
    "WAWebUISpacing",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = {
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
      c = 18;
    function d(e) {
      var t = o("react-compiler-runtime").c(62),
        n = e.albumMsgs,
        a = e.animationPromise,
        i = e.associatedMsg,
        l = e.checked,
        d = e.hideResults,
        _ = e.index,
        f = e.isAdminOrOwner,
        g = e.isCorrectOption,
        h = e.isPollEnded,
        y = e.loadingPhotoThumb,
        C = e.msg,
        b = e.onDetailImageClick,
        v = e.onOptionToggle,
        S = e.onPhotoThumbClick,
        R = e.option,
        L = e.readonly,
        E = e.result,
        k = e.selectable,
        I = e.trusted,
        T = e.view,
        D = R.localId,
        x;
      t[0] !== C.id
        ? ((x = C.id.toString()), (t[0] = C.id), (t[1] = x))
        : (x = t[1]);
      var $ = x + "-option-" + D,
        P;
      t[2] !== C
        ? ((P = o("WAWebMsgGetters").getIsSentByMe(C)), (t[2] = C), (t[3] = P))
        : (P = t[3]);
      var N = P,
        M;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((M = o(
            "WAWebPollsGatingUtils",
          ).isTappableLinksInPollOptionEnabled()),
          (t[4] = M))
        : (M = t[4]);
      var w = M,
        A;
      t[5] !== i || t[6] !== y || t[7] !== S
        ? ((A =
            y === !0
              ? s.jsx(o("WAWebFlex.react").FlexColumn, {
                  xstyle: u.loadingThumb,
                  justify: "center",
                  align: "center",
                  shrink: 0,
                  children: s.jsx(o("WAWebSpinner.react").Spinner, { size: c }),
                })
              : i &&
                s.jsx(o("WAWebFlex.react").FlexColumn, {
                  alignSelf: "start",
                  shrink: 0,
                  children: s.jsx(r("WAWebPollOptionImage.react"), {
                    msg: i,
                    size: "large",
                    onClick: S,
                  }),
                })),
          (t[5] = i),
          (t[6] = y),
          (t[7] = S),
          (t[8] = A))
        : (A = t[8]);
      var F;
      t[9] !== A
        ? ((F = s.jsx(s.Fragment, { children: A })), (t[9] = A), (t[10] = F))
        : (F = t[10]);
      var O = F,
        B;
      t[11] !== $ ||
      t[12] !== l ||
      t[13] !== v ||
      t[14] !== R ||
      t[15] !== E.count
        ? ((B = {
            option: R,
            checked: l,
            id: $,
            onOptionToggle: v,
            count: E.count,
          }),
          (t[11] = $),
          (t[12] = l),
          (t[13] = v),
          (t[14] = R),
          (t[15] = E.count),
          (t[16] = B))
        : (B = t[16]);
      var W = B,
        q = w && k,
        U;
      t[17] !== a ||
      t[18] !== W ||
      t[19] !== d ||
      t[20] !== _ ||
      t[21] !== f ||
      t[22] !== g ||
      t[23] !== N ||
      t[24] !== C.id ||
      t[25] !== L ||
      t[26] !== k
        ? ((U =
            !L &&
            s.jsx(r("WAWebFlexItem.react"), {
              align: "start",
              shrink: 0,
              children:
                g == null
                  ? s.jsx(
                      r("WAWebPollsOptionCheckbox"),
                      babelHelpers.extends(
                        {
                          disabled: !k,
                          theme: N
                            ? o("WAWebCheckBox.react").CheckboxTheme
                                .POLLS_SENDER
                            : o("WAWebCheckBox.react").CheckboxTheme
                                .POLLS_RECEIVER,
                          testid: void 0,
                        },
                        W,
                      ),
                    )
                  : s.jsx(
                      r("WAWebQuizOptionCheckbox"),
                      babelHelpers.extends(
                        {
                          isAdminOrOwner: f,
                          hideResults: d,
                          testid: void 0,
                          isCorrectOption: g,
                          msgId: C.id,
                          animationPromise: a,
                        },
                        W,
                      ),
                    ),
            })),
          (t[17] = a),
          (t[18] = W),
          (t[19] = d),
          (t[20] = _),
          (t[21] = f),
          (t[22] = g),
          (t[23] = N),
          (t[24] = C.id),
          (t[25] = L),
          (t[26] = k),
          (t[27] = U))
        : (U = t[27]);
      var V = (i || y) && T === "message" ? "vertical" : "horizontal",
        H = T === "message",
        G;
      t[28] !== $ ||
      t[29] !== l ||
      t[30] !== d ||
      t[31] !== _ ||
      t[32] !== f ||
      t[33] !== g ||
      t[34] !== h ||
      t[35] !== C ||
      t[36] !== b ||
      t[37] !== R ||
      t[38] !== E ||
      t[39] !== k ||
      t[40] !== V ||
      t[41] !== H ||
      t[42] !== I
        ? ((G = s.jsx(r("WAWebFlexItem.react"), {
            xstyle: u.infoLayoutContainer,
            grow: 1,
            children: s.jsx(r("WAWebPollOptionInfo"), {
              checkBoxId: $,
              index: _,
              isPollEnded: h,
              msg: C,
              name: R.name,
              onDetailImageClick: b,
              option: R,
              result: E,
              selectable: k,
              trusted: I,
              layout: V,
              showFacePile: H,
              hideResults: d,
              checked: l,
              isCorrectOption: g,
              isAdminOrOwner: f,
            }),
          })),
          (t[28] = $),
          (t[29] = l),
          (t[30] = d),
          (t[31] = _),
          (t[32] = f),
          (t[33] = g),
          (t[34] = h),
          (t[35] = C),
          (t[36] = b),
          (t[37] = R),
          (t[38] = E),
          (t[39] = k),
          (t[40] = V),
          (t[41] = H),
          (t[42] = I),
          (t[43] = G))
        : (G = t[43]);
      var z = T === "message" && O,
        j;
      t[44] !== G || t[45] !== z || t[46] !== U
        ? ((j = s.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            paddingTop: 12,
            paddingBottom: 12,
            columnGap: 8,
            children: [U, G, z],
          })),
          (t[44] = G),
          (t[45] = z),
          (t[46] = U),
          (t[47] = j))
        : (j = t[47]);
      var K = j,
        Q;
      t[48] !== q || t[49] !== D || t[50] !== v || t[51] !== K
        ? ((Q = q
            ? s.jsx(m, { onOptionToggle: v, localId: D, children: K })
            : s.jsx("div", {
                className:
                  "x1nkjj8i xnnj0qo x1fpiwec x1xp25i x1om80sa xe2bo3s xw8deok xyqdcma",
                children: K,
              })),
          (t[48] = q),
          (t[49] = D),
          (t[50] = v),
          (t[51] = K),
          (t[52] = Q))
        : (Q = t[52]);
      var X = Q;
      if (T === "message") return X;
      var Y;
      t[53] === Symbol.for("react.memo_cache_sentinel")
        ? ((Y = [
            o("WAWebUISpacing").uiPadding.horiz48,
            o("WAWebUISpacing").uiPadding.vert20,
          ]),
          (t[53] = Y))
        : (Y = t[53]);
      var J;
      t[54] !== n || t[55] !== i || t[56] !== _ || t[57] !== I
        ? ((J = s.jsx(p, {
            associatedMsg: i,
            albumMsgs: n,
            albumIndex: _,
            trusted: I,
          })),
          (t[54] = n),
          (t[55] = i),
          (t[56] = _),
          (t[57] = I),
          (t[58] = J))
        : (J = t[58]);
      var Z;
      return (
        t[59] !== X || t[60] !== J
          ? ((Z = s.jsxs(r("WAWebDrawerSection.react"), {
              xstyle: Y,
              children: [J, X],
            })),
            (t[59] = X),
            (t[60] = J),
            (t[61] = Z))
          : (Z = t[61]),
        Z
      );
    }
    function m(e) {
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
              "x1nkjj8i xnnj0qo x1fpiwec x1xp25i x1om80sa xe2bo3s xw8deok xyqdcma x1ypdohk xkokhmn x1xxrpmy x57krjk xbr1m4g",
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
    function p(e) {
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
    l.default = d;
  },
  98,
);
