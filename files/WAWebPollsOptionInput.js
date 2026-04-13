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
      c = {
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
    function d(e) {
      var t = o("react-compiler-runtime").c(40),
        n = e.chat,
        a = e.checked,
        i = e.error,
        l = e.handleCheckBoxClick,
        d = e.image,
        p = e.initialText,
        _ = e.isPhotoPoll,
        f = e.onChange,
        g = e.onDeletePhoto,
        h = e.onDragThumbMouseDown,
        y = e.onInputBlur,
        C = e.onInputFocus,
        b = e.onPhotoIconClick,
        v = e.onPhotoThumbnailClick,
        S = e.onTextInputRef,
        R = e.pollType,
        L = e.testid,
        E = _ === void 0 ? !1 : _,
        k = R === void 0 ? o("WAWebPollCreationUtils").PollType.POLL : R,
        I;
      t[0] !== n
        ? ((I = o("WAWebIsPhotoPollSenderEnabled").isPhotoPollSenderEnabled(n)
            ? s._(/*BTDS*/ "Add text or photo")
            : s._(/*BTDS*/ "Add text")),
          (t[0] = n),
          (t[1] = I))
        : (I = t[1]);
      var T = I,
        D;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((D = { className: "xh8yej3 x78zum5 x1q0g3np x6s0dn4" }), (t[2] = D))
        : (D = t[2]);
      var x;
      t[3] !== a || t[4] !== l || t[5] !== E || t[6] !== k || t[7] !== L
        ? ((x =
            k === o("WAWebPollCreationUtils").PollType.QUIZ &&
            u.jsx(o("WAWebFlex.react").FlexColumn, {
              xstyle: E ? c.photoPollCheckboxColumn : c.pollCheckboxColumn,
              children: u.jsx(o("WAWebCheckBox.react").CheckBox, {
                checked: a || !1,
                id: "quiz-option-checkbox",
                onChange: function () {
                  l == null || l();
                },
                testid: void 0,
                theme: o("WAWebCheckBox.react").CheckboxTheme.POLLS_SENDER,
              }),
            })),
          (t[3] = a),
          (t[4] = l),
          (t[5] = E),
          (t[6] = k),
          (t[7] = L),
          (t[8] = x))
        : (x = t[8]);
      var $, P;
      t[9] === Symbol.for("react.memo_cache_sentinel")
        ? (($ = { className: "xh8yej3 x78zum5 x6s0dn4" }),
          (P = { className: "xh8yej3" }),
          (t[9] = $),
          (t[10] = P))
        : (($ = t[9]), (P = t[10]));
      var N = i != null ? i : void 0,
        M,
        w;
      t[11] === Symbol.for("react.memo_cache_sentinel")
        ? ((w = o(
            "WAWebPollsGatingUtils",
          ).getMaxPollOptionLengthForIncomingMessages()),
          (M = o("WAWebPollsGatingUtils").getMaxPollOptionLength()),
          (t[11] = M),
          (t[12] = w))
        : ((M = t[11]), (w = t[12]));
      var A;
      t[13] !== f
        ? ((A = function (t) {
            var e = t.text;
            return f(e);
          }),
          (t[13] = f),
          (t[14] = A))
        : (A = t[14]);
      var F =
          o("WAWebIsPhotoPollSenderEnabled").isPhotoPollSenderEnabled(n) && !E
            ? "side"
            : "none",
        O;
      t[15] !== S
        ? ((O = function (t) {
            S(t);
          }),
          (t[15] = S),
          (t[16] = O))
        : (O = t[16]);
      var B;
      t[17] !== p ||
      t[18] !== E ||
      t[19] !== h ||
      t[20] !== y ||
      t[21] !== C ||
      t[22] !== b ||
      t[23] !== T ||
      t[24] !== A ||
      t[25] !== F ||
      t[26] !== O ||
      t[27] !== N ||
      t[28] !== L
        ? ((B = u.jsx(
            "div",
            babelHelpers.extends({}, $, {
              children: u.jsx(
                "div",
                babelHelpers.extends({}, P, {
                  children: u.jsx(o("WAWebRichTextField.react").RichTextField, {
                    emojiBtnPosition: "side",
                    error: N,
                    hideFloatingLabel: !0,
                    maxCodeUnits: w,
                    maxLength: M,
                    onBlur: y,
                    onChange: A,
                    onDragThumbMouseDown: h,
                    onFocus: C,
                    onPhotoIconClick: b,
                    photoBtnPosition: F,
                    placeholder: T,
                    ref: O,
                    showDraggableIcon: E,
                    showRemaining: !0,
                    testid: void 0,
                    textFormatEnabled: !0,
                    value: p,
                  }),
                }),
              ),
            }),
          )),
          (t[17] = p),
          (t[18] = E),
          (t[19] = h),
          (t[20] = y),
          (t[21] = C),
          (t[22] = b),
          (t[23] = T),
          (t[24] = A),
          (t[25] = F),
          (t[26] = O),
          (t[27] = N),
          (t[28] = L),
          (t[29] = B))
        : (B = t[29]);
      var W;
      t[30] !== d || t[31] !== E || t[32] !== g || t[33] !== h || t[34] !== v
        ? ((W = E
            ? u.jsxs(u.Fragment, {
                children: [
                  u.jsx(m, { image: d, onClick: v, onDeletePhoto: g }),
                  u.jsx("div", {
                    className: "xlese2p",
                    children: u.jsx(r("WAWebDragIconWrapper.react"), {
                      onDragThumbMouseDown: h,
                    }),
                  }),
                ],
              })
            : null),
          (t[30] = d),
          (t[31] = E),
          (t[32] = g),
          (t[33] = h),
          (t[34] = v),
          (t[35] = W))
        : (W = t[35]);
      var q;
      return (
        t[36] !== B || t[37] !== W || t[38] !== x
          ? ((q = u.jsxs(
              "div",
              babelHelpers.extends({}, D, { children: [x, B, W] }),
            )),
            (t[36] = B),
            (t[37] = W),
            (t[38] = x),
            (t[39] = q))
          : (q = t[39]),
        q
      );
    }
    function m(e) {
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
              xstyle: c.deleteBtn,
              children: u.jsx(o("WAWebXAltIcon.react").XAltIcon, {
                xstyle: c.deleteIcon,
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
                  iconXstyle: c.grayColor,
                  height: 15,
                  width: 15,
                })),
          (t[3] = n == null ? void 0 : n.preview),
          (t[4] = s))
        : (s = t[4]);
      var d;
      t[5] !== a || t[6] !== s
        ? ((d = u.jsx(r("WAWebUnstyledButton.react"), {
            onClick: a,
            xstyle: c.photoPreviewWrapper,
            children: s,
          })),
          (t[5] = a),
          (t[6] = s),
          (t[7] = d))
        : (d = t[7]);
      var m;
      return (
        t[8] !== l || t[9] !== d
          ? ((m = u.jsxs("div", { children: [l, d] })),
            (t[8] = l),
            (t[9] = d),
            (t[10] = m))
          : (m = t[10]),
        m
      );
    }
    l.default = d;
  },
  226,
);
