__d(
  "WAWebHDPhotoMediaEditorDropdown.react",
  [
    "fbt",
    "WAWebAttachMediaModel",
    "WAWebDropdownItem.react",
    "WAWebL10nFilesize",
    "WAWebMediaGatingUtils",
    "WAWebText.react",
    "WAWebText_DONOTUSE.react",
    "WAWebUISpacing",
    "WAWebWebHdMediaAwarenessInteractionWamEvent",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useCallback,
      d = {
        dropdownInfo: {
          borderTopWidth: "x178xt8z",
          borderTopStyle: "x13fuv20",
          borderTopColor: "xx42vgk",
          $$css: !0,
        },
        hintText: { textWrap: "xk4td0m", maxWidth: "x1ncir08", $$css: !0 },
      },
      m = {
        dropdownItemStandardQuality: function () {
          return s._(/*BTDS*/ "Standard quality");
        },
        dropdownItemHDQuality: function () {
          return s._(/*BTDS*/ "HD quality");
        },
        dropdownInfo: function () {
          return o("WAWebMediaGatingUtils").isStickyHQPhotoSettingEnabled()
            ? s._(/*BTDS*/ "Select the quality photos and videos are sent at.")
            : s._(
                /*BTDS*/ "HD photos are clearer. Standard photos use less storage space and are faster to send.",
              );
        },
      };
    function p(e) {
      var t = e.height,
        n = e.mediaQuality,
        r = e.size,
        a = e.title,
        i = e.width;
      return o("WAWebMediaGatingUtils").isStickyHQPhotoSettingEnabled()
        ? u.jsxs("div", {
            children: [
              u.jsx(o("WAWebText.react").WAWebTextTitle, { children: a }),
              n != null &&
                u.jsxs(o("WAWebText_DONOTUSE.react").TextDiv, {
                  theme: "plain",
                  color: "secondary",
                  xstyle: d.hintText,
                  children: [
                    n === o("WAWebAttachMediaModel").MediaQuality.Standard &&
                      s._(/*BTDS*/ "Faster to send, smaller file size"),
                    n === o("WAWebAttachMediaModel").MediaQuality.HD &&
                      s._(/*BTDS*/ "Slower to send, can be 6 times larger"),
                  ],
                }),
            ],
          })
        : u.jsxs("div", {
            children: [
              u.jsx(o("WAWebText.react").WAWebTextTitle, { children: a }),
              r != null &&
                i != null &&
                t != null &&
                u.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
                  theme: "plain",
                  color: "secondary",
                  children: s._(
                    /*BTDS*/ "{filesize} \u00b7 {width} x {height}",
                    [
                      s._param(
                        "filesize",
                        o("WAWebL10nFilesize").getL10nFilesize(r),
                      ),
                      s._param("width", i),
                      s._param("height", t),
                    ],
                  ),
                }),
            ],
          });
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _(e) {
      new (o(
        "WAWebWebHdMediaAwarenessInteractionWamEvent",
      ).WebHdMediaAwarenessInteractionWamEvent)({
        hdMediaSelected: e,
      }).commit();
    }
    function f(e) {
      var t = e.onChangeQuality,
        n = e.selectedQuality,
        r = c(
          function () {
            n !== o("WAWebAttachMediaModel").MediaQuality.Standard &&
              (t(o("WAWebAttachMediaModel").MediaQuality.Standard), _(!1));
          },
          [t, n],
        ),
        a = c(
          function () {
            n !== o("WAWebAttachMediaModel").MediaQuality.HD &&
              (t(o("WAWebAttachMediaModel").MediaQuality.HD), _(!0));
          },
          [t, n],
        ),
        i = e.metadataByQuality.get(o("WAWebAttachMediaModel").MediaQuality.HD),
        l = e.metadataByQuality.get(
          o("WAWebAttachMediaModel").MediaQuality.Standard,
        );
      return u.jsxs(u.Fragment, {
        children: [
          u.jsx(o("WAWebDropdownItem.react").DropdownItem, {
            addSpacing: !0,
            fixedHeight: !1,
            xstyle: [
              o("WAWebUISpacing").uiPadding.top16,
              o("WAWebUISpacing").uiPadding.bottom16,
            ],
            selected: n === o("WAWebAttachMediaModel").MediaQuality.Standard,
            testid: void 0,
            action: r,
            children: u.jsx(
              p,
              babelHelpers.extends({}, l, {
                mediaQuality: o("WAWebAttachMediaModel").MediaQuality.Standard,
                title: m.dropdownItemStandardQuality(),
              }),
            ),
          }),
          u.jsx(o("WAWebDropdownItem.react").DropdownItem, {
            addSpacing: !0,
            fixedHeight: !1,
            xstyle: [
              o("WAWebUISpacing").uiPadding.top16,
              o("WAWebUISpacing").uiPadding.bottom16,
            ],
            selected: n === o("WAWebAttachMediaModel").MediaQuality.HD,
            testid: void 0,
            action: a,
            children: u.jsx(
              p,
              babelHelpers.extends({}, i, {
                mediaQuality: o("WAWebAttachMediaModel").MediaQuality.HD,
                title: m.dropdownItemHDQuality(),
              }),
            ),
          }),
          u.jsx(o("WAWebText.react").WAWebTextMuted, {
            xstyle: [
              d.dropdownInfo,
              o("WAWebUISpacing").uiPadding.top16,
              o("WAWebUISpacing").uiPadding.start16,
              o("WAWebUISpacing").uiPadding.end16,
              o("WAWebUISpacing").uiPadding.bottom7,
            ],
            children: m.dropdownInfo(),
          }),
        ],
      });
    }
    ((f.displayName = f.name + " [from " + i.id + "]"), (l.default = f));
  },
  226,
);
