__d(
  "WAWebPollsOptionInput",
  [
    "fbt",
    "WAWebCheckBox.react",
    "WAWebDragIconWrapper.react",
    "WAWebFlex.react",
    "WAWebImg.react",
    "WAWebIsPhotoPollSenderEnabled",
    "WAWebPollCreationUtils",
    "WAWebPollsGatingUtils",
    "WAWebRichTextField.react",
    "WAWebUnstyledButton.react",
    "WAWebXAltIcon.react",
    "WDSIconIcImage.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = { xoeyzqq: "xmw7cw xoeyzqq", $$css: !0 },
      d = {
        photoPreviewWrapper: {
          width: "x15yg21f",
          height: "xnnlda6",
          borderStartStartRadius: "xyi3aci",
          borderStartEndRadius: "xwf5gio",
          borderEndEndRadius: "x1p453bz",
          borderEndStartRadius: "x1suzm8a",
          justifyContent: "xl56j7k",
          alignItems: "x6s0dn4",
          display: "x78zum5",
          backgroundColor: "x1h3rtpe",
          flexShrink: "x2lah0s",
          objectFit: "xl1xv1r",
          marginInlineStart: "xlese2p",
          $$css: !0,
        },
        deleteBtn: {
          position: "x10l6tqk",
          insetInlineEnd: "x185fuhz",
          left: null,
          right: null,
          top: "x1ctoq22",
          zIndex: "x11uqc5h",
          color: "x17t9dm2",
          opacity: "xg01cxk",
          transition: "xid8q7e",
          ":hover_opacity": "x1o7uuvo",
          $$css: !0,
        },
        deleteIcon: { stroke: "x1c8i944", strokeWidth: "x1ns0lul", $$css: !0 },
        grayColor: { color: "xhslqc4", $$css: !0 },
        photoPollCheckboxColumn: {
          paddingTop: "x1tiyuxx",
          paddingInlineEnd: "xyo0t3i",
          $$css: !0,
        },
        pollCheckboxColumn: {
          paddingTop: "x1tiyuxx",
          paddingInlineEnd: "x1nzty39",
          $$css: !0,
        },
      };
    function m(e) {
      var t = o("react-compiler-runtime").c(40),
        n = e.chat,
        a = e.checked,
        i = e.error,
        l = e.handleCheckBoxClick,
        m = e.image,
        _ = e.initialText,
        f = e.isPhotoPoll,
        g = e.onChange,
        h = e.onDeletePhoto,
        y = e.onDragThumbMouseDown,
        C = e.onInputBlur,
        b = e.onInputFocus,
        v = e.onPhotoIconClick,
        S = e.onPhotoThumbnailClick,
        R = e.onTextInputRef,
        L = e.pollType,
        E = e.testid,
        k = f === void 0 ? !1 : f,
        I = L === void 0 ? o("WAWebPollCreationUtils").PollType.POLL : L,
        T;
      t[0] !== n
        ? ((T = o("WAWebIsPhotoPollSenderEnabled").isPhotoPollSenderEnabled(n)
            ? s._(/*BTDS*/ "Add text or photo")
            : s._(/*BTDS*/ "Add text")),
          (t[0] = n),
          (t[1] = T))
        : (T = t[1]);
      var D = T,
        x;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((x = { className: "xh8yej3 x78zum5 x1q0g3np x6s0dn4" }), (t[2] = x))
        : (x = t[2]);
      var $;
      t[3] !== a || t[4] !== l || t[5] !== k || t[6] !== I || t[7] !== E
        ? (($ =
            I === o("WAWebPollCreationUtils").PollType.QUIZ &&
            u.jsx(o("WAWebFlex.react").FlexColumn, {
              xstyle: [k ? d.photoPollCheckboxColumn : d.pollCheckboxColumn, c],
              children: u.jsx(o("WAWebCheckBox.react").CheckBox, {
                checked: a || !1,
                id: "quiz-option-checkbox",
                onChange: function () {
                  l == null || l();
                },
                testid: E + "-select",
                theme: o("WAWebCheckBox.react").CheckboxTheme.POLLS_SENDER,
              }),
            })),
          (t[3] = a),
          (t[4] = l),
          (t[5] = k),
          (t[6] = I),
          (t[7] = E),
          (t[8] = $))
        : ($ = t[8]);
      var P, N;
      t[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((P = { className: "xh8yej3 x78zum5 x6s0dn4" }),
          (N = { className: "xh8yej3" }),
          (t[9] = P),
          (t[10] = N))
        : ((P = t[9]), (N = t[10]));
      var M = i != null ? i : void 0,
        w,
        A;
      t[11] === Symbol.for("react.memo_cache_sentinel")
        ? ((A = o(
            "WAWebPollsGatingUtils",
          ).getMaxPollOptionLengthForIncomingMessages()),
          (w = o("WAWebPollsGatingUtils").getMaxPollOptionLength()),
          (t[11] = w),
          (t[12] = A))
        : ((w = t[11]), (A = t[12]));
      var F;
      t[13] !== g
        ? ((F = function (t) {
            var e = t.text;
            return g(e);
          }),
          (t[13] = g),
          (t[14] = F))
        : (F = t[14]);
      var O =
          o("WAWebIsPhotoPollSenderEnabled").isPhotoPollSenderEnabled(n) && !k
            ? "side"
            : "none",
        B;
      t[15] !== R
        ? ((B = function (t) {
            R(t);
          }),
          (t[15] = R),
          (t[16] = B))
        : (B = t[16]);
      var W;
      t[17] !== _ ||
      t[18] !== k ||
      t[19] !== y ||
      t[20] !== C ||
      t[21] !== b ||
      t[22] !== v ||
      t[23] !== D ||
      t[24] !== F ||
      t[25] !== O ||
      t[26] !== B ||
      t[27] !== M ||
      t[28] !== E
        ? ((W = u.jsx(
            "div",
            babelHelpers.extends({}, P, {
              children: u.jsx(
                "div",
                babelHelpers.extends({}, N, {
                  children: u.jsx(o("WAWebRichTextField.react").RichTextField, {
                    emojiBtnPosition: "side",
                    error: M,
                    hideFloatingLabel: !0,
                    maxCodeUnits: A,
                    maxLength: w,
                    onBlur: C,
                    onChange: F,
                    onDragThumbMouseDown: y,
                    onFocus: b,
                    onPhotoIconClick: v,
                    photoBtnPosition: O,
                    placeholder: D,
                    ref: B,
                    showDraggableIcon: k,
                    showRemaining: !0,
                    testid: E,
                    textFormatEnabled: !0,
                    value: _,
                  }),
                }),
              ),
            }),
          )),
          (t[17] = _),
          (t[18] = k),
          (t[19] = y),
          (t[20] = C),
          (t[21] = b),
          (t[22] = v),
          (t[23] = D),
          (t[24] = F),
          (t[25] = O),
          (t[26] = B),
          (t[27] = M),
          (t[28] = E),
          (t[29] = W))
        : (W = t[29]);
      var q;
      t[30] !== m || t[31] !== k || t[32] !== h || t[33] !== y || t[34] !== S
        ? ((q = k
            ? u.jsxs(u.Fragment, {
                children: [
                  u.jsx(p, { image: m, onClick: S, onDeletePhoto: h }),
                  u.jsx("div", {
                    className: "xlese2p",
                    children: u.jsx(r("WAWebDragIconWrapper.react"), {
                      onDragThumbMouseDown: y,
                    }),
                  }),
                ],
              })
            : null),
          (t[30] = m),
          (t[31] = k),
          (t[32] = h),
          (t[33] = y),
          (t[34] = S),
          (t[35] = q))
        : (q = t[35]);
      var U;
      return (
        t[36] !== W || t[37] !== q || t[38] !== $
          ? ((U = u.jsxs(
              "div",
              babelHelpers.extends({}, x, { children: [$, W, q] }),
            )),
            (t[36] = W),
            (t[37] = q),
            (t[38] = $),
            (t[39] = U))
          : (U = t[39]),
        U
      );
    }
    function p(e) {
      var t = o("react-compiler-runtime").c(11),
        n = e.image,
        a = e.onClick,
        i = e.onDeletePhoto,
        l;
      t[0] !== (n == null ? void 0 : n.preview) || t[1] !== i
        ? ((l =
            (n == null ? void 0 : n.preview) &&
            u.jsx(r("WAWebUnstyledButton.react"), {
              onClick: i,
              role: "button",
              xstyle: d.deleteBtn,
              children: u.jsx(o("WAWebXAltIcon.react").XAltIcon, {
                xstyle: d.deleteIcon,
              }),
            })),
          (t[0] = n == null ? void 0 : n.preview),
          (t[1] = i),
          (t[2] = l))
        : (l = t[2]);
      var s;
      t[3] !== (n == null ? void 0 : n.preview)
        ? ((s =
            n != null && n.preview
              ? u.jsx(r("WAWebImg.react"), {
                  alt: "",
                  className:
                    "x15yg21f xnnlda6 xyi3aci xwf5gio x1p453bz x1suzm8a xl56j7k x6s0dn4 x78zum5 x1h3rtpe x2lah0s xl1xv1r",
                  src: n == null ? void 0 : n.preview,
                })
              : u.jsx(r("WDSIconIcImage.react"), {
                  iconXstyle: d.grayColor,
                  height: 15,
                  width: 15,
                })),
          (t[3] = n == null ? void 0 : n.preview),
          (t[4] = s))
        : (s = t[4]);
      var c;
      t[5] !== a || t[6] !== s
        ? ((c = u.jsx(r("WAWebUnstyledButton.react"), {
            onClick: a,
            xstyle: d.photoPreviewWrapper,
            children: s,
          })),
          (t[5] = a),
          (t[6] = s),
          (t[7] = c))
        : (c = t[7]);
      var m;
      return (
        t[8] !== l || t[9] !== c
          ? ((m = u.jsxs("div", { children: [l, c] })),
            (t[8] = l),
            (t[9] = c),
            (t[10] = m))
          : (m = t[10]),
        m
      );
    }
    l.default = m;
  },
  226,
);
