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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(6),
        n = e.height,
        r = e.mediaQuality,
        a = e.size,
        i = e.title,
        l = e.width,
        c;
      return (
        t[0] !== n || t[1] !== r || t[2] !== a || t[3] !== i || t[4] !== l
          ? ((c = o("WAWebMediaGatingUtils").isStickyHQPhotoSettingEnabled()
              ? u.jsxs("div", {
                  children: [
                    u.jsx(o("WAWebText.react").WAWebTextTitle, { children: i }),
                    r != null &&
                      u.jsxs(o("WAWebText_DONOTUSE.react").TextDiv, {
                        theme: "plain",
                        color: "secondary",
                        xstyle: d.hintText,
                        children: [
                          r ===
                            o("WAWebAttachMediaModel").MediaQuality.Standard &&
                            s._(/*BTDS*/ "Faster to send, smaller file size"),
                          r === o("WAWebAttachMediaModel").MediaQuality.HD &&
                            s._(
                              /*BTDS*/ "Slower to send, can be 6 times larger",
                            ),
                        ],
                      }),
                  ],
                })
              : u.jsxs("div", {
                  children: [
                    u.jsx(o("WAWebText.react").WAWebTextTitle, { children: i }),
                    a != null &&
                      l != null &&
                      n != null &&
                      u.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
                        theme: "plain",
                        color: "secondary",
                        children: s._(
                          /*BTDS*/ "{filesize} \u00b7 {width} x {height}",
                          [
                            s._param(
                              "filesize",
                              o("WAWebL10nFilesize").getL10nFilesize(a),
                            ),
                            s._param("width", l),
                            s._param("height", n),
                          ],
                        ),
                      }),
                  ],
                })),
            (t[0] = n),
            (t[1] = r),
            (t[2] = a),
            (t[3] = i),
            (t[4] = l),
            (t[5] = c))
          : (c = t[5]),
        c
      );
    }
    function _(e) {
      new (o(
        "WAWebWebHdMediaAwarenessInteractionWamEvent",
      ).WebHdMediaAwarenessInteractionWamEvent)({
        hdMediaSelected: e,
      }).commit();
    }
    function f(e) {
      var t = o("react-compiler-runtime").c(30),
        n = e.onChangeQuality,
        r = e.selectedQuality,
        a;
      t[0] !== n || t[1] !== r
        ? ((a = function () {
            r !== o("WAWebAttachMediaModel").MediaQuality.Standard &&
              (n(o("WAWebAttachMediaModel").MediaQuality.Standard), _(!1));
          }),
          (t[0] = n),
          (t[1] = r),
          (t[2] = a))
        : (a = t[2]);
      var i = a,
        l;
      t[3] !== n || t[4] !== r
        ? ((l = function () {
            r !== o("WAWebAttachMediaModel").MediaQuality.HD &&
              (n(o("WAWebAttachMediaModel").MediaQuality.HD), _(!0));
          }),
          (t[3] = n),
          (t[4] = r),
          (t[5] = l))
        : (l = t[5]);
      var s = l,
        c;
      t[6] !== e.metadataByQuality
        ? ((c = e.metadataByQuality.get(
            o("WAWebAttachMediaModel").MediaQuality.HD,
          )),
          (t[6] = e.metadataByQuality),
          (t[7] = c))
        : (c = t[7]);
      var f = c,
        g;
      t[8] !== e.metadataByQuality
        ? ((g = e.metadataByQuality.get(
            o("WAWebAttachMediaModel").MediaQuality.Standard,
          )),
          (t[8] = e.metadataByQuality),
          (t[9] = g))
        : (g = t[9]);
      var h = g,
        y;
      t[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = [
            o("WAWebUISpacing").uiPadding.top16,
            o("WAWebUISpacing").uiPadding.bottom16,
          ]),
          (t[10] = y))
        : (y = t[10]);
      var C = r === o("WAWebAttachMediaModel").MediaQuality.Standard,
        b;
      t[11] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = m.dropdownItemStandardQuality()), (t[11] = b))
        : (b = t[11]);
      var v;
      t[12] !== h
        ? ((v = u.jsx(
            p,
            babelHelpers.extends({}, h, {
              mediaQuality: o("WAWebAttachMediaModel").MediaQuality.Standard,
              title: b,
            }),
          )),
          (t[12] = h),
          (t[13] = v))
        : (v = t[13]);
      var S;
      t[14] !== i || t[15] !== C || t[16] !== v
        ? ((S = u.jsx(o("WAWebDropdownItem.react").DropdownItem, {
            addSpacing: !0,
            fixedHeight: !1,
            xstyle: y,
            selected: C,
            testid: void 0,
            action: i,
            children: v,
          })),
          (t[14] = i),
          (t[15] = C),
          (t[16] = v),
          (t[17] = S))
        : (S = t[17]);
      var R;
      t[18] === Symbol.for("react.memo_cache_sentinel")
        ? ((R = [
            o("WAWebUISpacing").uiPadding.top16,
            o("WAWebUISpacing").uiPadding.bottom16,
          ]),
          (t[18] = R))
        : (R = t[18]);
      var L = r === o("WAWebAttachMediaModel").MediaQuality.HD,
        E;
      t[19] === Symbol.for("react.memo_cache_sentinel")
        ? ((E = m.dropdownItemHDQuality()), (t[19] = E))
        : (E = t[19]);
      var k;
      t[20] !== f
        ? ((k = u.jsx(
            p,
            babelHelpers.extends({}, f, {
              mediaQuality: o("WAWebAttachMediaModel").MediaQuality.HD,
              title: E,
            }),
          )),
          (t[20] = f),
          (t[21] = k))
        : (k = t[21]);
      var I;
      t[22] !== s || t[23] !== L || t[24] !== k
        ? ((I = u.jsx(o("WAWebDropdownItem.react").DropdownItem, {
            addSpacing: !0,
            fixedHeight: !1,
            xstyle: R,
            selected: L,
            testid: void 0,
            action: s,
            children: k,
          })),
          (t[22] = s),
          (t[23] = L),
          (t[24] = k),
          (t[25] = I))
        : (I = t[25]);
      var T;
      if (t[26] === Symbol.for("react.memo_cache_sentinel")) {
        var D;
        ((T = u.jsx(o("WAWebText.react").WAWebTextMuted, {
          xstyle: [
            d.dropdownInfo,
            (D = o("WAWebUISpacing")).uiPadding.top16,
            D.uiPadding.start16,
            D.uiPadding.end16,
            D.uiPadding.bottom7,
          ],
          children: m.dropdownInfo(),
        })),
          (t[26] = T));
      } else T = t[26];
      var x;
      return (
        t[27] !== I || t[28] !== S
          ? ((x = u.jsxs(u.Fragment, { children: [S, I, T] })),
            (t[27] = I),
            (t[28] = S),
            (t[29] = x))
          : (x = t[29]),
        x
      );
    }
    l.default = f;
  },
  226,
);
