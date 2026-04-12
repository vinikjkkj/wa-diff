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
      var t = e.chat,
        n = e.checked,
        a = e.error,
        i = e.handleCheckBoxClick,
        l = e.image,
        d = e.initialText,
        p = e.isPhotoPoll,
        _ = p === void 0 ? !1 : p,
        f = e.onChange,
        g = e.onDeletePhoto,
        h = e.onDragThumbMouseDown,
        y = e.onInputBlur,
        C = e.onInputFocus,
        b = e.onPhotoIconClick,
        v = e.onPhotoThumbnailClick,
        S = e.onTextInputRef,
        R = e.pollType,
        L = R === void 0 ? o("WAWebPollCreationUtils").PollType.POLL : R,
        E = e.testid,
        k = o("WAWebIsPhotoPollSenderEnabled").isPhotoPollSenderEnabled(t)
          ? s._(/*BTDS*/ "Add text or photo")
          : s._(/*BTDS*/ "Add text");
      return u.jsxs("div", {
        className: "xh8yej3 x78zum5 x1q0g3np x6s0dn4",
        children: [
          L === o("WAWebPollCreationUtils").PollType.QUIZ &&
            u.jsx(o("WAWebFlex.react").FlexColumn, {
              xstyle: _ ? c.photoPollCheckboxColumn : c.pollCheckboxColumn,
              children: u.jsx(o("WAWebCheckBox.react").CheckBox, {
                checked: n || !1,
                id: "quiz-option-checkbox",
                onChange: function () {
                  i == null || i();
                },
                testid: void 0,
                theme: o("WAWebCheckBox.react").CheckboxTheme.POLLS_SENDER,
              }),
            }),
          u.jsx("div", {
            className: "xh8yej3 x78zum5 x6s0dn4",
            children: u.jsx("div", {
              className: "xh8yej3",
              children: u.jsx(o("WAWebRichTextField.react").RichTextField, {
                emojiBtnPosition: "side",
                error: a != null ? a : void 0,
                hideFloatingLabel: !0,
                maxCodeUnits: o(
                  "WAWebPollsGatingUtils",
                ).getMaxPollOptionLengthForIncomingMessages(),
                maxLength: o("WAWebPollsGatingUtils").getMaxPollOptionLength(),
                onBlur: y,
                onChange: function (t) {
                  var e = t.text;
                  return f(e);
                },
                onDragThumbMouseDown: h,
                onFocus: C,
                onPhotoIconClick: b,
                photoBtnPosition:
                  o("WAWebIsPhotoPollSenderEnabled").isPhotoPollSenderEnabled(
                    t,
                  ) && !_
                    ? "side"
                    : "none",
                placeholder: k,
                ref: function (t) {
                  S(t);
                },
                showDraggableIcon: _,
                showRemaining: !0,
                testid: void 0,
                textFormatEnabled: !0,
                value: d,
              }),
            }),
          }),
          _
            ? u.jsxs(u.Fragment, {
                children: [
                  u.jsx(m, { image: l, onClick: v, onDeletePhoto: g }),
                  u.jsx("div", {
                    className: "xlese2p",
                    children: u.jsx(r("WAWebDragIconWrapper.react"), {
                      onDragThumbMouseDown: h,
                    }),
                  }),
                ],
              })
            : null,
        ],
      });
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m(e) {
      var t = e.image,
        n = e.onClick,
        a = e.onDeletePhoto;
      return u.jsxs("div", {
        children: [
          (t == null ? void 0 : t.preview) &&
            u.jsx(r("WAWebUnstyledButton.react"), {
              onClick: a,
              role: "button",
              xstyle: c.deleteBtn,
              children: u.jsx(o("WAWebXAltIcon.react").XAltIcon, {
                xstyle: c.deleteIcon,
              }),
            }),
          u.jsx(r("WAWebUnstyledButton.react"), {
            onClick: n,
            xstyle: c.photoPreviewWrapper,
            children:
              t != null && t.preview
                ? u.jsx(r("WAWebImg.react"), {
                    alt: "",
                    className:
                      "x15yg21f xnnlda6 xyi3aci xwf5gio x1p453bz x1suzm8a xl56j7k x6s0dn4 x78zum5 x1h3rtpe x2lah0s xl1xv1r",
                    src: t == null ? void 0 : t.preview,
                  })
                : u.jsx(r("WDSIconIcImage.react"), {
                    iconXstyle: c.grayColor,
                    height: 15,
                    width: 15,
                  }),
          }),
        ],
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
