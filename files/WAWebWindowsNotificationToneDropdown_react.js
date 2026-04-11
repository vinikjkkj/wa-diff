__d(
  "WAWebWindowsNotificationToneDropdown.react",
  [
    "WALogger",
    "WAWebAudioPlayIcon.react",
    "WAWebButton.react",
    "WAWebCheckmarkIcon.react",
    "WAWebDropdownV2.react",
    "WAWebFlex.react",
    "WAWebIcChevronDownMenuIcon.react",
    "WAWebIcMusicNoteIcon.react",
    "WAWebIconButton.react",
    "WAWebMenuItems.react",
    "WAWebSelectMenuItem.react",
    "WAWebText.react",
    "WAWebWindowsNotificationHelpers",
    "WAWebWindowsNotificationToneOption",
    "WAWebWindowsNotificationToneOptions",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = s.useState,
      d = {
        buttonTextContent: {
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          textOverflow: "xlyipyv",
          textAlign: "x1yc453h",
          color: "x14ug900",
          $$css: !0,
        },
        menu: {
          overflowY: "x1odjw0f",
          paddingInlineStart: "xyiysdx",
          paddingInlineEnd: "x14vy60q",
          $$css: !0,
        },
        button: {
          borderStartStartRadius: "xyi3aci",
          borderStartEndRadius: "xwf5gio",
          borderEndEndRadius: "x1p453bz",
          borderEndStartRadius: "x1suzm8a",
          borderTopWidth: "x178xt8z",
          borderInlineEndWidth: "x1lun4ml",
          borderBottomWidth: "xso031l",
          borderInlineStartWidth: "xpilrb4",
          borderTopStyle: "x13fuv20",
          borderInlineEndStyle: "x18b5jzi",
          borderBottomStyle: "x1q0q8m5",
          borderInlineStartStyle: "x1t7ytsu",
          borderTopColor: "xx42vgk",
          borderInlineEndColor: "xbogo7e",
          borderBottomColor: "x120ee7l",
          borderInlineStartColor: "x1vb5itz",
          $$css: !0,
        },
        title: { marginBottom: "xod5an3", $$css: !0 },
        toneIcon: { color: "xhslqc4", $$css: !0 },
        buttonContent: {
          marginTop: "xdj266r",
          marginInlineEnd: "x1ows92d",
          marginBottom: "xat24cr",
          marginInlineStart: "x1a5kqlc",
          $$css: !0,
        },
        playButton: {
          color: "xhslqc4",
          height: "x1vqgdyp",
          maxHeight: "x18wx58x",
          width: "x100vrsf",
          maxWidth: "xo92w5m",
          paddingTop: "xexx8yu",
          paddingInlineEnd: "xyri2b",
          paddingBottom: "x18d9i69",
          paddingInlineStart: "x1c1uobl",
          borderStartStartRadius: "x1bczwif",
          borderStartEndRadius: "xvvg52n",
          borderEndEndRadius: "xwd4zgb",
          borderEndStartRadius: "x11o6v7j",
          ":hover_backgroundColor": "x1ym48sb",
          $$css: !0,
        },
        checkmarkIcon: { color: "x1du590y", $$css: !0 },
        invisibleCheckmarkIcon: { opacity: "xg01cxk", $$css: !0 },
        menuItemContainer: {
          paddingTop: "xexx8yu",
          paddingInlineEnd: "xyri2b",
          paddingBottom: "x18d9i69",
          paddingInlineStart: "x1c1uobl",
          $$css: !0,
        },
        chevronIcon: { color: "xhslqc4", $$css: !0 },
      };
    function m(t) {
      var n,
        a,
        i = t.initialTone,
        l = t.onToneSelect,
        s = t.overrideDefaultTone,
        m = t.title,
        p = u.createRef(),
        _ = c(
          i != null
            ? i
            : o("WAWebWindowsNotificationToneOption").NotificationToneOption
                .Default,
        ),
        f = _[0],
        g = _[1],
        h = c(f),
        y = h[0],
        C = h[1],
        b =
          (n =
            (a = o(
              "WAWebWindowsNotificationToneOptions",
            ).NotificationToneOptions.find(function (e) {
              return e.value === f;
            })) == null
              ? void 0
              : a.label()) != null
            ? n
            : "",
        v = function (n, r) {
          if (
            (o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[notification] playing tone ",
                  "",
                ])),
              r,
            ),
            n.stopPropagation(),
            s != null &&
              r ===
                o("WAWebWindowsNotificationToneOption").NotificationToneOption
                  .Default)
          ) {
            o("WAWebWindowsNotificationHelpers").playTone(s);
            return;
          }
          o("WAWebWindowsNotificationHelpers").playTone(r);
        },
        S = o(
          "WAWebWindowsNotificationToneOptions",
        ).NotificationToneOptions.reduce(function (e, t) {
          return (
            e.push(
              u.jsx(
                o("WAWebMenuItems.react").SelectMenuItem,
                {
                  optionId: String(t.value),
                  primary: t.label(),
                  detailRight: null,
                  onMouseEnter: function () {
                    return C(t.value);
                  },
                  onMouseLeave: function () {
                    return C(null);
                  },
                  middlecontainerXStyle: d.menuItemContainer,
                  detailLeft:
                    f === t.value
                      ? u.jsx(o("WAWebCheckmarkIcon.react").CheckmarkIcon, {
                          xstyle: d.checkmarkIcon,
                          height: 24,
                          width: 24,
                        })
                      : u.jsx(o("WAWebCheckmarkIcon.react").CheckmarkIcon, {
                          xstyle: d.invisibleCheckmarkIcon,
                          height: 24,
                          width: 24,
                        }),
                  primaryRight:
                    t.value !==
                      o("WAWebWindowsNotificationToneOption")
                        .NotificationToneOption.None && y === t.value
                      ? u.jsx(r("WAWebIconButton.react"), {
                          xstyle: d.playButton,
                          onClick: function (n) {
                            return v(n, t.value);
                          },
                          icon: u.jsx(
                            o("WAWebAudioPlayIcon.react").AudioPlayIcon,
                            { height: 24, width: 24 },
                          ),
                        })
                      : null,
                },
                String(t.value),
              ),
            ),
            e
          );
        }, []),
        R = function (t) {
          var e = o(
            "WAWebWindowsNotificationToneOption",
          ).NotificationToneOption.cast(Number(t));
          e != null && e !== f && (l(e), g(e));
        };
      return u.jsxs("div", {
        className: "x78zum5 xdt5ytf",
        children: [
          u.jsx(o("WAWebText.react").WAWebTextTitleRefreshed, {
            color: "wdsContentDeemphasized",
            xstyle: d.title,
            children: m,
          }),
          u.jsx(o("WAWebButton.react").WAWebButtonSecondary, {
            borderStyles: d.button,
            ref: p,
            children: u.jsxs(o("WAWebFlex.react").FlexRow, {
              justify: "all",
              align: "center",
              grow: 1,
              xstyle: d.buttonContent,
              children: [
                u.jsx(o("WAWebIcMusicNoteIcon.react").IcMusicNoteIcon, {
                  iconXstyle: d.toneIcon,
                  height: 24,
                  width: 24,
                }),
                u.jsx(o("WAWebFlex.react").FlexItem, {
                  marginStart: 2,
                  grow: 1,
                  justify: "stretch",
                  align: "center",
                  xstyle: d.buttonTextContent,
                  children: b,
                }),
                u.jsx(
                  o("WAWebIcChevronDownMenuIcon.react").IcChevronDownMenuIcon,
                  { iconXstyle: d.chevronIcon },
                ),
              ],
            }),
          }),
          u.jsx(o("WAWebDropdownV2.react").DropdownV2Menu, {
            xstyle: d.menu,
            position: o("WAWebDropdownV2.react").PopoverPosition.Bottom,
            alignment: o("WAWebDropdownV2.react").PopoverAlignment.Center,
            minWidth: 320,
            maxHeight: 300,
            initHandling: "click",
            initialActiveOptionId: String(f),
            target: p,
            children: u.jsx(
              o("WAWebSelectMenuItem.react").SelectMenuItemGroup,
              {
                multiselect: !1,
                initialSelection: String(f),
                onSelect: R,
                children: S,
              },
            ),
          }),
        ],
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  98,
);
