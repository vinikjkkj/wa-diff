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
    "WAWebSpoilerGating",
    "WAWebUnstyledButton.react",
    "WDSIconIcClose.react",
    "WDSIconIcImage.react",
    "react",
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
          alignItems: "x6s0dn4",
          display: "x78zum5",
          justifyContent: "xl56j7k",
          minHeight: "xjwf9q1",
          minWidth: "xnei2rj",
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
      var t = e.chat,
        n = e.checked,
        a = e.error,
        i = e.handleCheckBoxClick,
        l = e.image,
        m = e.initialText,
        _ = e.isPhotoPoll,
        f = _ === void 0 ? !1 : _,
        g = e.onChange,
        h = e.onDeletePhoto,
        y = e.onDragThumbMouseDown,
        C = e.onInputBlur,
        b = e.onInputFocus,
        v = e.onPhotoIconClick,
        S = e.onPhotoThumbnailClick,
        R = e.onTextInputRef,
        L = e.pollType,
        E = L === void 0 ? o("WAWebPollCreationUtils").PollType.POLL : L,
        k = e.testid,
        I = o("WAWebIsPhotoPollSenderEnabled").isPhotoPollSenderEnabled(t)
          ? s._(/*BTDS*/ "")
          : s._(/*BTDS*/ "");
      return u.jsxs("div", {
        className: "xh8yej3 x78zum5 x1q0g3np x6s0dn4",
        children: [
          E === o("WAWebPollCreationUtils").PollType.QUIZ &&
            u.jsx(o("WAWebFlex.react").FlexColumn, {
              xstyle: [f ? d.photoPollCheckboxColumn : d.pollCheckboxColumn, c],
              children: u.jsx(o("WAWebCheckBox.react").CheckBox, {
                checked: n || !1,
                id: "quiz-option-checkbox",
                onChange: function () {
                  i == null || i();
                },
                testid: k + "-select",
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
                maxCodeUnits: o("WAWebPollsGatingUtils")
                  .MAX_POLL_OPTION_LENGTH_FOR_INCOMING_MESSAGES,
                maxLength: o("WAWebPollsGatingUtils").getMaxPollOptionLength(),
                onBlur: C,
                onChange: function (t) {
                  var e = t.text;
                  return g(e);
                },
                onDragThumbMouseDown: y,
                onFocus: b,
                onPhotoIconClick: v,
                photoBtnPosition:
                  o("WAWebIsPhotoPollSenderEnabled").isPhotoPollSenderEnabled(
                    t,
                  ) && !f
                    ? "side"
                    : "none",
                placeholder: I,
                ref: function (t) {
                  R(t);
                },
                showDraggableIcon: f,
                showRemaining: !0,
                spoilerEnabled:
                  o("WAWebSpoilerGating").isSpoilerSenderEnabled(),
                testid: k,
                textFormatEnabled: !0,
                value: m,
              }),
            }),
          }),
          f
            ? u.jsxs(u.Fragment, {
                children: [
                  u.jsx(p, { image: l, onClick: S, onDeletePhoto: h }),
                  u.jsx("div", {
                    className: "xlese2p",
                    children: u.jsx(r("WAWebDragIconWrapper.react"), {
                      onDragThumbMouseDown: y,
                    }),
                  }),
                ],
              })
            : null,
        ],
      });
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p(e) {
      var t = e.image,
        n = e.onClick,
        o = e.onDeletePhoto;
      return u.jsxs("div", {
        children: [
          (t == null ? void 0 : t.preview) &&
            u.jsx(r("WAWebUnstyledButton.react"), {
              onClick: o,
              role: "button",
              xstyle: d.deleteBtn,
              children: u.jsx(r("WDSIconIcClose.react"), {
                width: 19,
                height: 19,
                xstyle: d.deleteIcon,
                testid: "poll-option-remove-photo",
              }),
            }),
          u.jsx(r("WAWebUnstyledButton.react"), {
            onClick: n,
            xstyle: d.photoPreviewWrapper,
            children:
              t != null && t.preview
                ? u.jsx(r("WAWebImg.react"), {
                    alt: "",
                    className:
                      "x15yg21f xnnlda6 xyi3aci xwf5gio x1p453bz x1suzm8a xl56j7k x6s0dn4 x78zum5 x1h3rtpe x2lah0s xl1xv1r",
                    src: t == null ? void 0 : t.preview,
                  })
                : u.jsx(r("WDSIconIcImage.react"), {
                    iconXstyle: d.grayColor,
                    height: 15,
                    width: 15,
                  }),
          }),
        ],
      });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = m));
  },
  226,
);
