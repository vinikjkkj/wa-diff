__d(
  "WAWebEventsCreateEventModalInputs.react",
  [
    "fbt",
    "WALogger",
    "WAWebDateInput.react",
    "WAWebDropdownV2.react",
    "WAWebEventUtils",
    "WAWebEventsGatingUtils",
    "WAWebFlex.react",
    "WAWebL10N",
    "WAWebNoop",
    "WAWebPlusIcon.react",
    "WAWebPopoverContext.react",
    "WAWebRichTextField.react",
    "WAWebRichTextInput.react",
    "WAWebSelectMenuItem.react",
    "WAWebText.react",
    "WAWebTimeInput.react",
    "WAWebUISpacing",
    "WAWebUnstyledButton.react",
    "WAWebVelocityTransitionGroup",
    "WDSButton.react",
    "WDSIconIcCall.react",
    "WDSIconIcLocationOn.react",
    "WDSIconIcVideocam.react",
    "WDSRichTextField.react",
    "WDSSwitch.react",
    "fbs",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebABPropConfigValue",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d = c || (c = o("react")),
      m = c,
      p = m.useRef,
      _ = m.useState,
      f = {
        activeBorderBottom: { borderBottomColor: "x1rrvw3c", $$css: !0 },
        iconColor: { color: "xhslqc4", $$css: !0 },
        alignStart: { textAlign: "x1yc453h", $$css: !0 },
        alignEnd: { textAlign: "xp4054r", $$css: !0 },
      };
    function g(e) {
      var t = o("react-compiler-runtime").c(12),
        n = e.onChange,
        r = e.placeholder,
        a = e.title,
        i = e.value,
        l;
      t[0] !== a
        ? ((l = a != null ? a : s._(/*BTDS*/ "Event name")),
          (t[0] = a),
          (t[1] = l))
        : (l = t[1]);
      var u;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((u = o("WAWebEventsGatingUtils").getEventsNameLengthLimit()),
          (t[2] = u))
        : (u = t[2]);
      var c;
      t[3] !== n
        ? ((c = function (t) {
            var e = t.text;
            return n(e);
          }),
          (t[3] = n),
          (t[4] = c))
        : (c = t[4]);
      var m;
      t[5] !== r
        ? ((m = r != null ? r : s._(/*BTDS*/ "Event name")),
          (t[5] = r),
          (t[6] = m))
        : (m = t[6]);
      var p;
      return (
        t[7] !== l || t[8] !== c || t[9] !== m || t[10] !== i
          ? ((p = d.jsx(o("WAWebRichTextField.react").RichTextField, {
              testid: void 0,
              title: l,
              focusOnMount: !0,
              emojiBtnPosition: "side",
              showRemaining: !0,
              textFormatEnabled: !1,
              maxLength: u,
              maxVisibleLines: 4,
              lineWrap: !0,
              value: i,
              onChange: c,
              placeholder: m,
            })),
            (t[7] = l),
            (t[8] = c),
            (t[9] = m),
            (t[10] = i),
            (t[11] = p))
          : (p = t[11]),
        p
      );
    }
    var h = {
      descriptionField: {
        borderStartStartRadius: "xyi3aci",
        borderStartEndRadius: "xwf5gio",
        borderEndEndRadius: "x1p453bz",
        borderEndStartRadius: "x1suzm8a",
        borderBottomWidth: "xso031l",
        borderBottomStyle: "x1q0q8m5",
        borderBottomColor: "x13um86b",
        $$css: !0,
      },
    };
    function y(e) {
      var t = o("react-compiler-runtime").c(18),
        n = e.onChange,
        a = e.value,
        i = o("useWAWebABPropConfigValue").useABPropConfigValue(
          "wds_web_rich_text_field",
        ),
        l = _(!1),
        u = l[0],
        c = l[1],
        m;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = function () {
            c(!0);
          }),
          (t[0] = m))
        : (m = t[0]);
      var p = m,
        g;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = function () {
            c(!1);
          }),
          (t[1] = g))
        : (g = t[1]);
      var y = g;
      if (i === !0) {
        var C;
        t[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((C = s._(/*BTDS*/ "Description (optional)")), (t[2] = C))
          : (C = t[2]);
        var b;
        t[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((b = o(
              "WAWebEventsGatingUtils",
            ).getEventsDescriptionLengthLimit()),
            (t[3] = b))
          : (b = t[3]);
        var v;
        return (
          t[4] !== n || t[5] !== a
            ? ((v = d.jsx(r("WDSRichTextField.react"), {
                label: C,
                initialText: a,
                onValueChange: n,
                maxLength: b,
                rows: 4,
                testid: void 0,
              })),
              (t[4] = n),
              (t[5] = a),
              (t[6] = v))
            : (v = t[6]),
          v
        );
      }
      var S = u && f.activeBorderBottom,
        R;
      t[7] !== S
        ? ((R = [h.descriptionField, S]), (t[7] = S), (t[8] = R))
        : (R = t[8]);
      var L = R,
        E;
      t[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((E = s._(/*BTDS*/ "Event description")), (t[9] = E))
        : (E = t[9]);
      var k;
      t[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((k = o("WAWebEventsGatingUtils").getEventsDescriptionLengthLimit()),
          (t[10] = k))
        : (k = t[10]);
      var I;
      t[11] !== n
        ? ((I = function (t) {
            var e = t.text;
            return n(e);
          }),
          (t[11] = n),
          (t[12] = I))
        : (I = t[12]);
      var T;
      t[13] === Symbol.for("react.memo_cache_sentinel")
        ? ((T = s._(/*BTDS*/ "Description (optional)")), (t[13] = T))
        : (T = t[13]);
      var D;
      return (
        t[14] !== L || t[15] !== I || t[16] !== a
          ? ((D = d.jsx(o("WAWebRichTextField.react").RichTextField, {
              testid: void 0,
              title: E,
              emojiBtnPosition: "side",
              showRemaining: !0,
              textFormatEnabled: !0,
              maxLength: k,
              value: a,
              onChange: I,
              placeholder: T,
              multiline: !0,
              maxVisibleLines: 4,
              minVisibleLines: 2,
              bulletPointsEnabled: !0,
              numberedListEnabled: !1,
              blockQuoteEnabled: !1,
              inlineCodeEnabled: !1,
              theme: "gray-background",
              hideFloatingLabel: !0,
              hideSpacer: !0,
              containerXstyle: L,
              onFocus: p,
              onBlur: y,
            })),
            (t[14] = L),
            (t[15] = I),
            (t[16] = a),
            (t[17] = D))
          : (D = t[17]),
        D
      );
    }
    var C = {
        locationInputContainer: {
          width: "xh8yej3",
          position: "x1n2onr6",
          zIndex: "xhtitgo",
          display: "x78zum5",
          flex: "x1okw0bk",
          alignItems: "x1cy8zhl",
          borderBottomWidth: "xso031l",
          borderBottomStyle: "x1q0q8m5",
          borderBottomColor: "x13um86b",
          $$css: !0,
        },
        locationPlaceholder: {
          insetInlineStart: "x1o0tod",
          left: null,
          right: null,
          $$css: !0,
        },
      },
      b = {
        plusIcon: { transition: "x1yssd5k", $$css: !0 },
        rotated: { transform: "x1158fpu", $$css: !0 },
        textBtn: {
          display: "x78zum5",
          alignItems: "x6s0dn4",
          columnGap: "xouci9l",
          cursor: "x1ypdohk",
          $$css: !0,
        },
      },
      v = function () {
        return o("WAWebEventUtils").getEventDateBoundaries(!1);
      };
    function S(e) {
      var t = o("react-compiler-runtime").c(21),
        n = e.dateValue,
        a = e.isEndDateTimeEnabled,
        i = e.onDateChange,
        l = e.onTimeChange,
        u = e.setIsEndDateTimeEnabled,
        c = e.showRemoveEndTimeButton,
        m = e.timeValue,
        p = r("WAWebL10N").isRTL() ? f.alignEnd : f.alignStart,
        _;
      t[0] !== n || t[1] !== a || t[2] !== i || t[3] !== l || t[4] !== m
        ? ((_ = a
            ? d.jsxs("div", {
                children: [
                  d.jsx(o("WAWebText.react").WAWebTextMuted, {
                    marginTop: 4,
                    children: s._(/*BTDS*/ "End date and time"),
                  }),
                  d.jsxs(o("WAWebFlex.react").FlexRow, {
                    xstyle: [o("WAWebUISpacing").uiMargin.start4, p],
                    dir: "ltr",
                    columnGap: 16,
                    children: [
                      d.jsx(o("WAWebFlex.react").FlexItem, {
                        grow: 1,
                        basis: 0,
                        children: d.jsx(o("WAWebDateInput.react").DateInput, {
                          theme: "event",
                          onChange: i,
                          value: n,
                          name: "event-date",
                          getDateBoundaries: v,
                        }),
                      }),
                      d.jsx(o("WAWebFlex.react").FlexItem, {
                        grow: 1,
                        basis: 0,
                        children: d.jsx(o("WAWebTimeInput.react").TimeInput, {
                          theme: "event",
                          name: "event-time",
                          value: m,
                          onChange: l,
                        }),
                      }),
                    ],
                  }),
                ],
              })
            : null),
          (t[0] = n),
          (t[1] = a),
          (t[2] = i),
          (t[3] = l),
          (t[4] = m),
          (t[5] = _))
        : (_ = t[5]);
      var g = _,
        h;
      t[6] !== a
        ? ((h = a
            ? s._(/*BTDS*/ "Remove end time")
            : s._(/*BTDS*/ "Add end time")),
          (t[6] = a),
          (t[7] = h))
        : (h = t[7]);
      var y = h,
        C = a && b.rotated,
        S;
      t[8] !== C
        ? ((S = d.jsx(o("WAWebPlusIcon.react").PlusIcon, {
            height: 19,
            "aria-hidden": !0,
            xstyle: [b.plusIcon, C],
          })),
          (t[8] = C),
          (t[9] = S))
        : (S = t[9]);
      var R = S,
        L;
      t[10] !== g
        ? ((L = d.jsx(r("WAWebVelocityTransitionGroup"), {
            transitionName: "slide",
            children: g,
          })),
          (t[10] = g),
          (t[11] = L))
        : (L = t[11]);
      var E;
      t[12] !== R || t[13] !== y || t[14] !== a || t[15] !== u || t[16] !== c
        ? ((E = c
            ? d.jsx(o("WAWebFlex.react").FlexRow, {
                as: "section",
                justify: "all",
                xstyle: o("WAWebUISpacing").uiMargin.vert5,
                children: d.jsxs(r("WAWebUnstyledButton.react"), {
                  xstyle: b.textBtn,
                  onClick: function () {
                    return u(!a);
                  },
                  "aria-label": r("fbs")._(
                    /*BTDS*/ "Select date from calendar",
                  ),
                  children: [
                    R,
                    d.jsx(o("WAWebText.react").WAWebTextSectionTitle, {
                      color: "primary",
                      children: y,
                    }),
                  ],
                }),
              })
            : null),
          (t[12] = R),
          (t[13] = y),
          (t[14] = a),
          (t[15] = u),
          (t[16] = c),
          (t[17] = E))
        : (E = t[17]);
      var k;
      return (
        t[18] !== L || t[19] !== E
          ? ((k = d.jsxs(d.Fragment, { children: [L, E] })),
            (t[18] = L),
            (t[19] = E),
            (t[20] = k))
          : (k = t[20]),
        k
      );
    }
    function R(e) {
      var t = o("react-compiler-runtime").c(23),
        n = e.onChange,
        a = e.value,
        i = o("useWAWebABPropConfigValue").useABPropConfigValue(
          "wds_web_rich_text_field",
        ),
        l = _(!1),
        c = l[0],
        m = l[1],
        g = p(),
        h;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = function () {
            var e;
            (e = g.current) == null || e.focus();
          }),
          (t[0] = h))
        : (h = t[0]);
      var y = h,
        b;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = function () {
            m(!0);
          }),
          (t[1] = b))
        : (b = t[1]);
      var v = b,
        S;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((S = function () {
            m(!1);
          }),
          (t[2] = S))
        : (S = t[2]);
      var R = S;
      if (i === !0) {
        var L;
        t[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((L = s._(/*BTDS*/ "Location (optional)")), (t[3] = L))
          : (L = t[3]);
        var E;
        t[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((E = o(
              "WAWebEventsGatingUtils",
            ).getEventsDescriptionLengthLimit()),
            (t[4] = E))
          : (E = t[4]);
        var k;
        return (
          t[5] !== n || t[6] !== a
            ? ((k = d.jsx(r("WDSRichTextField.react"), {
                label: L,
                initialText: a,
                onValueChange: n,
                maxLength: E,
                EndIcon: r("WDSIconIcLocationOn.react"),
                onEndIconClick: r("WAWebNoop"),
                testid: void 0,
              })),
              (t[5] = n),
              (t[6] = a),
              (t[7] = k))
            : (k = t[7]),
          k
        );
      }
      var I = c && f.activeBorderBottom,
        T;
      if (t[8] !== I) {
        var D = [
          C.locationInputContainer,
          o("WAWebUISpacing").uiMargin.vert10,
          o("WAWebUISpacing").uiPadding.vert5,
          I,
        ];
        ((T = (u || (u = r("stylex"))).props(D)), (t[8] = I), (t[9] = T));
      } else T = t[9];
      var x;
      t[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((x = { className: "x98rzlu xeuugli" }), (t[10] = x))
        : (x = t[10]);
      var $, P;
      t[11] === Symbol.for("react.memo_cache_sentinel")
        ? (($ = s._(/*BTDS*/ "Location (optional)")),
          (P = s._(/*BTDS*/ "Event location")),
          (t[11] = $),
          (t[12] = P))
        : (($ = t[11]), (P = t[12]));
      var N;
      t[13] === Symbol.for("react.memo_cache_sentinel")
        ? ((N = o("WAWebEventsGatingUtils").getEventsDescriptionLengthLimit()),
          (t[13] = N))
        : (N = t[13]);
      var M;
      t[14] !== n
        ? ((M = function (t) {
            var e = t.text;
            return n(e);
          }),
          (t[14] = n),
          (t[15] = M))
        : (M = t[15]);
      var w;
      t[16] !== M || t[17] !== a
        ? ((w = d.jsx(
            "div",
            babelHelpers.extends({}, x, {
              children: d.jsx(r("WAWebRichTextInput.react"), {
                ref: g,
                placeholder: $,
                ariaLabel: P,
                placeholderTextXStyle: C.locationPlaceholder,
                maxLength: N,
                maxVisibleLines: 1,
                lineWrap: !1,
                initialText: a,
                onChange: M,
                onFocus: v,
                onBlur: R,
              }),
            }),
          )),
          (t[16] = M),
          (t[17] = a),
          (t[18] = w))
        : (w = t[18]);
      var A;
      t[19] === Symbol.for("react.memo_cache_sentinel")
        ? ((A = d.jsx(r("WAWebUnstyledButton.react"), {
            onClick: y,
            xstyle: o("WAWebUISpacing").uiMargin.end5,
            "aria-label": s._(/*BTDS*/ "Focus location input"),
            children: d.jsx(r("WDSIconIcLocationOn.react"), {
              xstyle: f.iconColor,
            }),
          })),
          (t[19] = A))
        : (A = t[19]);
      var F;
      return (
        t[20] !== w || t[21] !== T
          ? ((F = d.jsxs(
              "section",
              babelHelpers.extends({}, T, { children: [w, A] }),
            )),
            (t[20] = w),
            (t[21] = T),
            (t[22] = F))
          : (F = t[22]),
        F
      );
    }
    function L(e) {
      var t = o("react-compiler-runtime").c(8),
        n = e.icon,
        r = e.text,
        a;
      t[0] !== n
        ? ((a = d.jsx(o("WAWebFlex.react").FlexItem, { children: n })),
          (t[0] = n),
          (t[1] = a))
        : (a = t[1]);
      var i;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = [
            o("WAWebUISpacing").uiPadding.vert12,
            o("WAWebUISpacing").uiMargin.start8,
          ]),
          (t[2] = i))
        : (i = t[2]);
      var l;
      t[3] !== r
        ? ((l = d.jsx(o("WAWebFlex.react").FlexItem, {
            xstyle: i,
            align: "start",
            children: d.jsx(o("WAWebText.react").WAWebTextSectionTitle, {
              color: "primary",
              children: r,
            }),
          })),
          (t[3] = r),
          (t[4] = l))
        : (l = t[4]);
      var s;
      return (
        t[5] !== a || t[6] !== l
          ? ((s = d.jsxs(o("WAWebFlex.react").FlexRow, {
              align: "center",
              justify: "start",
              children: [a, l],
            })),
            (t[5] = a),
            (t[6] = l),
            (t[7] = s))
          : (s = t[7]),
        s
      );
    }
    function E(e) {
      var t = o("react-compiler-runtime").c(23),
        n = e.callType,
        a = e.onCallTypeChange,
        i;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = d.createRef()), (t[0] = i))
        : (i = t[0]);
      var l = i,
        u = o("WAWebPopoverContext.react").useWAWebPopoverControllerRef(),
        c;
      t[1] !== a
        ? ((c = function (t) {
            t === "voice" ? a("voice") : t === "video" && a("video");
          }),
          (t[1] = a),
          (t[2] = c))
        : (c = t[2]);
      var m = c,
        p;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = [
            o("WAWebUISpacing").uiPadding.end0,
            o("WAWebUISpacing").uiPadding.start8,
          ]),
          (t[3] = p))
        : (p = t[3]);
      var _ = r(
          n === "video" ? "WDSIconIcVideocam.react" : "WDSIconIcCall.react",
        ),
        f;
      t[4] !== n
        ? ((f = s._(/*BTDS*/ '_j{"video":"Video","voice":"Voice"}', [
            s._enum(n != null ? n : "video", {
              video: "Video",
              voice: "Voice",
            }),
          ])),
          (t[4] = n),
          (t[5] = f))
        : (f = t[5]);
      var g;
      t[6] !== u
        ? ((g = function () {
            var e;
            (e = u.current) == null || e.showPopover();
          }),
          (t[6] = u),
          (t[7] = g))
        : (g = t[7]);
      var h;
      t[8] !== _ || t[9] !== f || t[10] !== g
        ? ((h = d.jsx(r("WDSButton.react"), {
            variant: "outline",
            size: "medium",
            type: "default",
            ref: l,
            xstyle: p,
            Icon: _,
            label: f,
            showEndDropdownIcon: !0,
            onPress: g,
          })),
          (t[8] = _),
          (t[9] = f),
          (t[10] = g),
          (t[11] = h))
        : (h = t[11]);
      var y = n != null ? n : "video",
        C;
      t[12] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = d.jsx(o("WAWebSelectMenuItem.react").SelectMenuItem, {
            optionId: "video",
            primary: d.jsx(L, {
              icon: d.jsx(r("WDSIconIcVideocam.react"), {}),
              text: s._(/*BTDS*/ "Video"),
            }),
          })),
          (t[12] = C))
        : (C = t[12]);
      var b;
      t[13] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = d.jsx(o("WAWebSelectMenuItem.react").SelectMenuItem, {
            optionId: "voice",
            primary: d.jsx(L, {
              icon: d.jsx(r("WDSIconIcCall.react"), {}),
              text: s._(/*BTDS*/ "Voice"),
            }),
          })),
          (t[13] = b))
        : (b = t[13]);
      var v;
      t[14] !== m || t[15] !== y
        ? ((v = d.jsxs(o("WAWebSelectMenuItem.react").SelectMenuItemGroup, {
            multiselect: !1,
            initialSelection: y,
            onSelect: m,
            children: [C, b],
          })),
          (t[14] = m),
          (t[15] = y),
          (t[16] = v))
        : (v = t[16]);
      var S;
      t[17] !== u || t[18] !== v
        ? ((S = d.jsx(o("WAWebDropdownV2.react").DropdownV2Menu, {
            controllerRef: u,
            position: o("WAWebDropdownV2.react").PopoverPosition.Bottom,
            alignment: o("WAWebDropdownV2.react").PopoverAlignment.Center,
            minWidth: 140,
            target: l,
            children: v,
          })),
          (t[17] = u),
          (t[18] = v),
          (t[19] = S))
        : (S = t[19]);
      var R;
      return (
        t[20] !== S || t[21] !== h
          ? ((R = d.jsxs(d.Fragment, { children: [h, S] })),
            (t[20] = S),
            (t[21] = h),
            (t[22] = R))
          : (R = t[22]),
        R
      );
    }
    function k(t) {
      var n = o("react-compiler-runtime").c(18),
        a = t.hideToggle,
        i = t.onChange,
        l = t.required,
        u = t.value,
        c = a === void 0 ? !1 : a,
        m = l === void 0 ? !1 : l,
        p = m;
      m &&
        u == null &&
        (o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[CallTypeInput] callType required but null",
              ])),
          )
          .sendLogs("call-type-required-but-not-set"),
        (p = !1));
      var _ = u != null,
        f;
      n[0] !== _ || n[1] !== i
        ? ((f = function () {
            i(_ ? null : "video");
          }),
          (n[0] = _),
          (n[1] = i),
          (n[2] = f))
        : (f = n[2]);
      var g = f;
      if (c && !p) {
        var h;
        return (
          n[3] !== _ || n[4] !== i || n[5] !== u
            ? ((h = _
                ? d.jsx(o("WAWebFlex.react").FlexColumn, {
                    as: "section",
                    xstyle: o("WAWebUISpacing").uiMargin.vert5,
                    children: d.jsxs(o("WAWebFlex.react").FlexRow, {
                      justify: "all",
                      align: "center",
                      alignSelf: "stretch",
                      children: [
                        d.jsx(o("WAWebFlex.react").FlexItem, {
                          children: d.jsx(o("WAWebText.react").WAWebTextTitle, {
                            children: s._(/*BTDS*/ "WhatsApp call link"),
                          }),
                        }),
                        d.jsx(o("WAWebFlex.react").FlexItem, {
                          children: d.jsx(E, {
                            callType: u,
                            onCallTypeChange: i,
                          }),
                        }),
                      ],
                    }),
                  })
                : null),
              (n[3] = _),
              (n[4] = i),
              (n[5] = u),
              (n[6] = h))
            : (h = n[6]),
          h
        );
      }
      var y;
      n[7] !== p || n[8] !== g || n[9] !== _
        ? ((y = p
            ? null
            : d.jsxs(o("WAWebFlex.react").FlexRow, {
                justify: "all",
                xstyle: o("WAWebUISpacing").uiMargin.vert10,
                alignSelf: "stretch",
                children: [
                  d.jsx(o("WAWebFlex.react").FlexItem, {
                    children: d.jsx(o("WAWebText.react").WAWebTextTitle, {
                      as: "label",
                      labelFor: "calllink",
                      children: s._(/*BTDS*/ "WhatsApp call link"),
                    }),
                  }),
                  d.jsx(o("WAWebFlex.react").FlexItem, {
                    children: d.jsx(r("WDSSwitch.react"), {
                      value: _,
                      onChange: g,
                      id: "calllink",
                    }),
                  }),
                ],
              })),
          (n[7] = p),
          (n[8] = g),
          (n[9] = _),
          (n[10] = y))
        : (y = n[10]);
      var C;
      n[11] !== _ || n[12] !== i || n[13] !== u
        ? ((C =
            _ &&
            d.jsxs(o("WAWebFlex.react").FlexRow, {
              justify: "all",
              align: "center",
              alignSelf: "stretch",
              children: [
                d.jsx(o("WAWebFlex.react").FlexItem, {
                  children: d.jsx(o("WAWebText.react").WAWebTextTitle, {
                    children: s._(/*BTDS*/ "Call type"),
                  }),
                }),
                d.jsx(o("WAWebFlex.react").FlexItem, {
                  children: d.jsx(E, { callType: u, onCallTypeChange: i }),
                }),
              ],
            })),
          (n[11] = _),
          (n[12] = i),
          (n[13] = u),
          (n[14] = C))
        : (C = n[14]);
      var b;
      return (
        n[15] !== y || n[16] !== C
          ? ((b = d.jsxs(o("WAWebFlex.react").FlexColumn, {
              as: "section",
              xstyle: o("WAWebUISpacing").uiMargin.vert5,
              children: [y, C],
            })),
            (n[15] = y),
            (n[16] = C),
            (n[17] = b))
          : (b = n[17]),
        b
      );
    }
    ((l.NameInput = g),
      (l.DescriptionInput = y),
      (l.EndDateTimePicker = S),
      (l.LocationInput = R),
      (l.CallTypeInput = k));
  },
  226,
);
