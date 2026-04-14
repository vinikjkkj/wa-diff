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
      var t = e.onChange,
        n = e.placeholder,
        r = e.title,
        a = e.value;
      return d.jsx(o("WAWebRichTextField.react").RichTextField, {
        testid: void 0,
        title: r != null ? r : s._(/*BTDS*/ "Event name"),
        focusOnMount: !0,
        emojiBtnPosition: "side",
        showRemaining: !0,
        textFormatEnabled: !1,
        maxLength: o("WAWebEventsGatingUtils").getEventsNameLengthLimit(),
        maxVisibleLines: 4,
        lineWrap: !0,
        value: a,
        onChange: function (n) {
          var e = n.text;
          return t(e);
        },
        placeholder: n != null ? n : s._(/*BTDS*/ "Event name"),
      });
    }
    g.displayName = g.name + " [from " + i.id + "]";
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
      var t = e.onChange,
        n = e.value,
        a = o("useWAWebABPropConfigValue").useABPropConfigValue(
          "wds_web_rich_text_field",
        ),
        i = _(!1),
        l = i[0],
        u = i[1],
        c = function () {
          u(!0);
        },
        m = function () {
          u(!1);
        };
      if (a === !0)
        return d.jsx(r("WDSRichTextField.react"), {
          label: s._(/*BTDS*/ "Description (optional)"),
          initialText: n,
          onValueChange: t,
          maxLength: o(
            "WAWebEventsGatingUtils",
          ).getEventsDescriptionLengthLimit(),
          rows: 4,
          testid: void 0,
        });
      var p = [h.descriptionField, l && f.activeBorderBottom];
      return d.jsx(o("WAWebRichTextField.react").RichTextField, {
        testid: void 0,
        title: s._(/*BTDS*/ "Event description"),
        emojiBtnPosition: "side",
        showRemaining: !0,
        textFormatEnabled: !0,
        maxLength: o(
          "WAWebEventsGatingUtils",
        ).getEventsDescriptionLengthLimit(),
        value: n,
        onChange: function (n) {
          var e = n.text;
          return t(e);
        },
        placeholder: s._(/*BTDS*/ "Description (optional)"),
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
        containerXstyle: p,
        onFocus: c,
        onBlur: m,
      });
    }
    y.displayName = y.name + " [from " + i.id + "]";
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
      var t = e.dateValue,
        n = e.isEndDateTimeEnabled,
        a = e.onDateChange,
        i = e.onTimeChange,
        l = e.setIsEndDateTimeEnabled,
        u = e.showRemoveEndTimeButton,
        c = e.timeValue,
        m = r("WAWebL10N").isRTL() ? f.alignEnd : f.alignStart,
        p = n
          ? d.jsxs("div", {
              children: [
                d.jsx(o("WAWebText.react").WAWebTextMuted, {
                  marginTop: 4,
                  children: s._(/*BTDS*/ "End date and time"),
                }),
                d.jsxs(o("WAWebFlex.react").FlexRow, {
                  xstyle: [o("WAWebUISpacing").uiMargin.start4, m],
                  dir: "ltr",
                  columnGap: 16,
                  children: [
                    d.jsx(o("WAWebFlex.react").FlexItem, {
                      grow: 1,
                      basis: 0,
                      children: d.jsx(o("WAWebDateInput.react").DateInput, {
                        theme: "event",
                        onChange: a,
                        value: t,
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
                        value: c,
                        onChange: i,
                      }),
                    }),
                  ],
                }),
              ],
            })
          : null,
        _ = n ? s._(/*BTDS*/ "Remove end time") : s._(/*BTDS*/ "Add end time"),
        g = d.jsx(o("WAWebPlusIcon.react").PlusIcon, {
          height: 19,
          "aria-hidden": !0,
          xstyle: [b.plusIcon, n && b.rotated],
        });
      return d.jsxs(d.Fragment, {
        children: [
          d.jsx(r("WAWebVelocityTransitionGroup"), {
            transitionName: "slide",
            children: p,
          }),
          u
            ? d.jsx(o("WAWebFlex.react").FlexRow, {
                as: "section",
                justify: "all",
                xstyle: o("WAWebUISpacing").uiMargin.vert5,
                children: d.jsxs(r("WAWebUnstyledButton.react"), {
                  xstyle: b.textBtn,
                  onClick: function () {
                    return l(!n);
                  },
                  "aria-label": r("fbs")._(
                    /*BTDS*/ "Select date from calendar",
                  ),
                  children: [
                    g,
                    d.jsx(o("WAWebText.react").WAWebTextSectionTitle, {
                      color: "primary",
                      children: _,
                    }),
                  ],
                }),
              })
            : null,
        ],
      });
    }
    S.displayName = S.name + " [from " + i.id + "]";
    function R(e) {
      var t = e.onChange,
        n = e.value,
        a = o("useWAWebABPropConfigValue").useABPropConfigValue(
          "wds_web_rich_text_field",
        ),
        i = _(!1),
        l = i[0],
        c = i[1],
        m = p(),
        g = function () {
          var e;
          (e = m.current) == null || e.focus();
        },
        h = function () {
          c(!0);
        },
        y = function () {
          c(!1);
        };
      if (a === !0)
        return d.jsx(r("WDSRichTextField.react"), {
          label: s._(/*BTDS*/ "Location (optional)"),
          initialText: n,
          onValueChange: t,
          maxLength: o(
            "WAWebEventsGatingUtils",
          ).getEventsDescriptionLengthLimit(),
          EndIcon: r("WDSIconIcLocationOn.react"),
          onEndIconClick: r("WAWebNoop"),
          testid: void 0,
        });
      var b = [
        C.locationInputContainer,
        o("WAWebUISpacing").uiMargin.vert10,
        o("WAWebUISpacing").uiPadding.vert5,
        l && f.activeBorderBottom,
      ];
      return d.jsxs(
        "section",
        babelHelpers.extends({}, (u || (u = r("stylex"))).props(b), {
          children: [
            d.jsx("div", {
              className: "x98rzlu xeuugli",
              children: d.jsx(r("WAWebRichTextInput.react"), {
                ref: m,
                placeholder: s._(/*BTDS*/ "Location (optional)"),
                ariaLabel: s._(/*BTDS*/ "Event location"),
                placeholderTextXStyle: C.locationPlaceholder,
                maxLength: o(
                  "WAWebEventsGatingUtils",
                ).getEventsDescriptionLengthLimit(),
                maxVisibleLines: 1,
                lineWrap: !1,
                initialText: n,
                onChange: function (n) {
                  var e = n.text;
                  return t(e);
                },
                onFocus: h,
                onBlur: y,
              }),
            }),
            d.jsx(r("WAWebUnstyledButton.react"), {
              onClick: g,
              xstyle: o("WAWebUISpacing").uiMargin.end5,
              "aria-label": s._(/*BTDS*/ "Focus location input"),
              children: d.jsx(r("WDSIconIcLocationOn.react"), {
                xstyle: f.iconColor,
              }),
            }),
          ],
        }),
      );
    }
    R.displayName = R.name + " [from " + i.id + "]";
    function L(e) {
      var t = e.icon,
        n = e.text;
      return d.jsxs(o("WAWebFlex.react").FlexRow, {
        align: "center",
        justify: "start",
        children: [
          d.jsx(o("WAWebFlex.react").FlexItem, { children: t }),
          d.jsx(o("WAWebFlex.react").FlexItem, {
            xstyle: [
              o("WAWebUISpacing").uiPadding.vert12,
              o("WAWebUISpacing").uiMargin.start8,
            ],
            align: "start",
            children: d.jsx(o("WAWebText.react").WAWebTextSectionTitle, {
              color: "primary",
              children: n,
            }),
          }),
        ],
      });
    }
    L.displayName = L.name + " [from " + i.id + "]";
    function E(e) {
      var t = e.callType,
        n = e.onCallTypeChange,
        a = d.createRef(),
        i = o("WAWebPopoverContext.react").useWAWebPopoverControllerRef(),
        l = function (t) {
          t === "voice" ? n("voice") : t === "video" && n("video");
        };
      return d.jsxs(d.Fragment, {
        children: [
          d.jsx(r("WDSButton.react"), {
            variant: "outline",
            size: "medium",
            type: "default",
            ref: a,
            xstyle: [
              o("WAWebUISpacing").uiPadding.end0,
              o("WAWebUISpacing").uiPadding.start8,
            ],
            Icon: r(
              t === "video" ? "WDSIconIcVideocam.react" : "WDSIconIcCall.react",
            ),
            label: s._(/*BTDS*/ '_j{"video":"Video","voice":"Voice"}', [
              s._enum(t != null ? t : "video", {
                video: "Video",
                voice: "Voice",
              }),
            ]),
            showEndDropdownIcon: !0,
            onPress: function () {
              var e;
              (e = i.current) == null || e.showPopover();
            },
          }),
          d.jsx(o("WAWebDropdownV2.react").DropdownV2Menu, {
            controllerRef: i,
            position: o("WAWebDropdownV2.react").PopoverPosition.Bottom,
            alignment: o("WAWebDropdownV2.react").PopoverAlignment.Center,
            minWidth: 140,
            target: a,
            children: d.jsxs(
              o("WAWebSelectMenuItem.react").SelectMenuItemGroup,
              {
                multiselect: !1,
                initialSelection: t != null ? t : "video",
                onSelect: l,
                children: [
                  d.jsx(o("WAWebSelectMenuItem.react").SelectMenuItem, {
                    optionId: "video",
                    primary: d.jsx(L, {
                      icon: d.jsx(r("WDSIconIcVideocam.react"), {}),
                      text: s._(/*BTDS*/ "Video"),
                    }),
                  }),
                  d.jsx(o("WAWebSelectMenuItem.react").SelectMenuItem, {
                    optionId: "voice",
                    primary: d.jsx(L, {
                      icon: d.jsx(r("WDSIconIcCall.react"), {}),
                      text: s._(/*BTDS*/ "Voice"),
                    }),
                  }),
                ],
              },
            ),
          }),
        ],
      });
    }
    E.displayName = E.name + " [from " + i.id + "]";
    function k(t) {
      var n = t.hideToggle,
        a = n === void 0 ? !1 : n,
        i = t.onChange,
        l = t.required,
        u = l === void 0 ? !1 : l,
        c = t.value,
        m = u;
      u &&
        c == null &&
        (o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[CallTypeInput] callType required but null",
              ])),
          )
          .sendLogs("call-type-required-but-not-set"),
        (m = !1));
      var p = c != null,
        _ = function () {
          i(p ? null : "video");
        },
        f = "calllink";
      return a && !m
        ? p
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
                    children: d.jsx(E, { callType: c, onCallTypeChange: i }),
                  }),
                ],
              }),
            })
          : null
        : d.jsxs(o("WAWebFlex.react").FlexColumn, {
            as: "section",
            xstyle: o("WAWebUISpacing").uiMargin.vert5,
            children: [
              m
                ? null
                : d.jsxs(o("WAWebFlex.react").FlexRow, {
                    justify: "all",
                    xstyle: o("WAWebUISpacing").uiMargin.vert10,
                    alignSelf: "stretch",
                    children: [
                      d.jsx(o("WAWebFlex.react").FlexItem, {
                        children: d.jsx(o("WAWebText.react").WAWebTextTitle, {
                          as: "label",
                          labelFor: f,
                          children: s._(/*BTDS*/ "WhatsApp call link"),
                        }),
                      }),
                      d.jsx(o("WAWebFlex.react").FlexItem, {
                        children: d.jsx(r("WDSSwitch.react"), {
                          value: p,
                          onChange: _,
                          id: f,
                        }),
                      }),
                    ],
                  }),
              p &&
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
                      children: d.jsx(E, { callType: c, onCallTypeChange: i }),
                    }),
                  ],
                }),
            ],
          });
    }
    ((k.displayName = k.name + " [from " + i.id + "]"),
      (l.NameInput = g),
      (l.DescriptionInput = y),
      (l.EndDateTimePicker = S),
      (l.LocationInput = R),
      (l.CallTypeInput = k));
  },
  226,
);
