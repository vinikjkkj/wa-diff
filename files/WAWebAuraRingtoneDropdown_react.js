__d(
  "WAWebAuraRingtoneDropdown.react",
  [
    "fbt",
    "WALogger",
    "WAWebAudioPauseIcon.react",
    "WAWebAudioPlayIcon.react",
    "WAWebAuraRingtoneDownloader",
    "WAWebAuraRingtonePrefs",
    "WAWebButton.react",
    "WAWebCheckmarkIcon.react",
    "WAWebDropdownV2.react",
    "WAWebFlex.react",
    "WAWebIcChevronDownMenuIcon.react",
    "WAWebIcMusicNoteIcon.react",
    "WAWebIconButton.react",
    "WAWebMenuItems.react",
    "WAWebRingtoneScreenWamEvent",
    "WAWebSelectMenuItem.react",
    "WAWebText.react",
    "bx",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c,
      d,
      m,
      p = m || (m = o("react")),
      _ = m,
      f = _.useCallback,
      g = _.useEffect,
      h = _.useRef,
      y = _.useState;
    function C(e) {
      var t,
        n = e.toLowerCase(),
        r = {
          "aura-ringtone-01": s._(/*BTDS*/ "Flutter"),
          "aura-ringtone-02": s._(/*BTDS*/ "Tempo"),
          "aura-ringtone-03": s._(/*BTDS*/ "Ripple"),
          "aura-ringtone-04": s._(/*BTDS*/ "Quest"),
          "aura-ringtone-05": s._(/*BTDS*/ "Drum"),
          "aura-ringtone-06": s._(/*BTDS*/ "Murmur"),
          "aura-ringtone-07": s._(/*BTDS*/ "Flux"),
          "aura-ringtone-08": s._(/*BTDS*/ "Meadow"),
          "aura-ringtone-09": s._(/*BTDS*/ "Bubble"),
          "aura-ringtone-10": s._(/*BTDS*/ "Carnival"),
        };
      return (t = r[n]) != null ? t : e;
    }
    var b = {
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
          paddingInlineStart: "x4tra6z",
          paddingInlineEnd: "x1j8ymqv",
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
        title: { marginBottom: "xcytdqz", $$css: !0 },
        toneIcon: { color: "xhslqc4", $$css: !0 },
        buttonContent: {
          marginTop: "xdj266r",
          marginInlineEnd: "x1ipd1wl",
          marginBottom: "xat24cr",
          marginInlineStart: "xto4ptb",
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
      },
      v = r("bx").getURL(r("bx")("78755"));
    function S(t) {
      var n = t.disabled,
        a = t.initialToneId,
        i = t.isRingtonesBenefitActive,
        l = t.onToneSelect,
        m = t.ringtoneSource,
        _ = t.title,
        S = h(null),
        R = y(a != null ? a : o("WAWebAuraRingtonePrefs").DEFAULT_RINGTONE_ID),
        L = R[0],
        E = R[1],
        k = y(L),
        I = k[0],
        T = k[1],
        D = y([]),
        x = D[0],
        $ = D[1];
      g(function () {
        var e = !1;
        return (
          o("WAWebAuraRingtoneDownloader")
            .downloadPremiumRingtones()
            .then(function () {
              if (!e) {
                var t = o(
                  "WAWebAuraRingtoneDownloader",
                ).getDownloadedRingtones();
                $(t);
              }
            }),
          function () {
            e = !0;
          }
        );
      }, []);
      var P = h(!1),
        N = h(null),
        M = y(null),
        w = M[0],
        A = M[1];
      g(function () {
        return function () {
          var e = N.current;
          e != null && (e.pause(), (N.current = null));
        };
      }, []);
      var F = function () {
          if (L === o("WAWebAuraRingtonePrefs").DEFAULT_RINGTONE_ID)
            return s._(/*BTDS*/ "Default");
          if (L === o("WAWebAuraRingtonePrefs").NONE_RINGTONE_ID)
            return s._(/*BTDS*/ "None (silent)");
          var e = x.find(function (e) {
            return e.id === L;
          });
          return e != null ? C(e.displayName) : L;
        },
        O = function () {
          var e = N.current;
          (e != null && (e.pause(), (e.currentTime = 0)),
            (N.current = null),
            A(null));
        },
        B = function (n, r) {
          if ((n.stopPropagation(), w === r)) {
            (o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[aura_ringtones] stopping tone ",
                  "",
                ])),
              r,
            ),
              O());
            return;
          }
          (o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[aura_ringtones] playing tone ",
                "",
              ])),
            r,
          ),
            O());
          var t = null;
          if (r === o("WAWebAuraRingtonePrefs").DEFAULT_RINGTONE_ID) t = v;
          else {
            if (r === o("WAWebAuraRingtonePrefs").NONE_RINGTONE_ID) return;
            t = o("WAWebAuraRingtoneDownloader").getRingtoneBlobUrl(r);
          }
          if (t != null) {
            var a = new window.Audio(t);
            (a.addEventListener("ended", function () {
              (A(null), (N.current = null));
            }),
              (N.current = a),
              A(r),
              a.play().catch(function (e) {
                (o("WALogger").LOG(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[aura_ringtones] audio playback failed: ",
                      "",
                    ])),
                  String(e),
                ),
                  A(null),
                  (N.current = null));
              }));
          }
        },
        W = function (t) {
          (o("WALogger").LOG(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "[aura_ringtones] selected tone ",
                "",
              ])),
            t,
          ),
            O());
          var e =
            t !== o("WAWebAuraRingtonePrefs").DEFAULT_RINGTONE_ID &&
            t !== o("WAWebAuraRingtonePrefs").NONE_RINGTONE_ID;
          (!i && e) ||
            (t !== L &&
              ((P.current = !0),
              l(t),
              E(t),
              new (o("WAWebRingtoneScreenWamEvent").RingtoneScreenWamEvent)({
                ringtoneChangeApplied: !0,
                ringtoneId: t,
                ringtoneReset:
                  t === o("WAWebAuraRingtonePrefs").DEFAULT_RINGTONE_ID,
                ringtoneSource: m,
                premiumRingtonesDownloadedCount: x.length,
              }).commit()));
        },
        q = f(
          function () {
            window.setTimeout(function () {
              (P.current ||
                new (o("WAWebRingtoneScreenWamEvent").RingtoneScreenWamEvent)({
                  ringtoneChangeApplied: !1,
                  ringtoneId: L,
                  ringtoneReset: !1,
                  ringtoneSelectionCancelled: !0,
                  ringtoneSource: m,
                  premiumRingtonesDownloadedCount: x.length,
                }).commit(),
                (P.current = !1));
            }, 0);
          },
          [L, x.length, m],
        ),
        U = function (t, n, a) {
          var e = a && !i;
          return p.jsx(
            o("WAWebMenuItems.react").SelectMenuItem,
            {
              optionId: t,
              primary: n,
              detailRight: null,
              disabled: e,
              onMouseEnter: function () {
                return T(t);
              },
              onMouseLeave: function () {
                return T(null);
              },
              middlecontainerXStyle: b.menuItemContainer,
              detailLeft:
                L === t
                  ? p.jsx(o("WAWebCheckmarkIcon.react").CheckmarkIcon, {
                      xstyle: b.checkmarkIcon,
                      height: 24,
                      width: 24,
                    })
                  : p.jsx(o("WAWebCheckmarkIcon.react").CheckmarkIcon, {
                      xstyle: b.invisibleCheckmarkIcon,
                      height: 24,
                      width: 24,
                    }),
              primaryRight:
                t !== o("WAWebAuraRingtonePrefs").NONE_RINGTONE_ID &&
                (I === t || w === t) &&
                !e
                  ? p.jsx(r("WAWebIconButton.react"), {
                      xstyle: b.playButton,
                      onClick: function (n) {
                        return B(n, t);
                      },
                      ariaLabel:
                        w === t
                          ? s._(/*BTDS*/ "Stop ringtone preview")
                          : s._(/*BTDS*/ "Play ringtone preview"),
                      icon:
                        w === t
                          ? p.jsx(
                              o("WAWebAudioPauseIcon.react").AudioPauseIcon,
                              { height: 24, width: 24 },
                            )
                          : p.jsx(o("WAWebAudioPlayIcon.react").AudioPlayIcon, {
                              height: 24,
                              width: 24,
                            }),
                    })
                  : null,
            },
            t,
          );
        };
      return p.jsxs("div", {
        className: "x78zum5 xdt5ytf",
        children: [
          p.jsx(o("WAWebText.react").WAWebTextTitleRefreshed, {
            color: "wdsContentDeemphasized",
            xstyle: b.title,
            children: _,
          }),
          p.jsx(o("WAWebButton.react").WAWebButtonSecondary, {
            borderStyles: b.button,
            ref: S,
            testid: void 0,
            disabled: n,
            children: p.jsxs(o("WAWebFlex.react").FlexRow, {
              justify: "all",
              align: "center",
              grow: 1,
              xstyle: b.buttonContent,
              children: [
                p.jsx(o("WAWebIcMusicNoteIcon.react").IcMusicNoteIcon, {
                  iconXstyle: b.toneIcon,
                  height: 24,
                  width: 24,
                }),
                p.jsx(o("WAWebFlex.react").FlexItem, {
                  marginStart: 2,
                  grow: 1,
                  justify: "stretch",
                  align: "center",
                  xstyle: b.buttonTextContent,
                  children: F(),
                }),
                p.jsx(
                  o("WAWebIcChevronDownMenuIcon.react").IcChevronDownMenuIcon,
                  { iconXstyle: b.chevronIcon },
                ),
              ],
            }),
          }),
          n !== !0 &&
            p.jsxs(o("WAWebDropdownV2.react").DropdownV2Menu, {
              xstyle: b.menu,
              position: o("WAWebDropdownV2.react").PopoverPosition.Bottom,
              alignment: o("WAWebDropdownV2.react").PopoverAlignment.Center,
              minWidth: 320,
              maxHeight: 300,
              initHandling: "click",
              initialActiveOptionId: L,
              onClose: q,
              target: S,
              children: [
                p.jsxs(o("WAWebSelectMenuItem.react").SelectMenuItemGroup, {
                  multiselect: !1,
                  initialSelection: L,
                  onSelect: W,
                  children: [
                    U(
                      o("WAWebAuraRingtonePrefs").DEFAULT_RINGTONE_ID,
                      s._(/*BTDS*/ "Default"),
                      !1,
                    ),
                    U(
                      o("WAWebAuraRingtonePrefs").NONE_RINGTONE_ID,
                      s._(/*BTDS*/ "None (silent)"),
                      !1,
                    ),
                  ],
                }),
                x.length > 0 &&
                  p.jsx("div", {
                    className: "x178xt8z x13fuv20 xx42vgk x1380le5 x16ovd2e",
                    children: p.jsx(
                      o("WAWebSelectMenuItem.react").SelectMenuItemGroup,
                      {
                        multiselect: !1,
                        initialSelection: L,
                        onSelect: W,
                        children: []
                          .concat(x)
                          .sort(function (e, t) {
                            return e.id.localeCompare(t.id);
                          })
                          .map(function (e) {
                            return U(e.id, C(e.displayName), !0);
                          }),
                      },
                    ),
                  }),
              ],
            }),
        ],
      });
    }
    ((S.displayName = S.name + " [from " + i.id + "]"), (l.default = S));
  },
  226,
);
