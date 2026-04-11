__d(
  "WAWebProfileDrawerCoverPhoto.react",
  [
    "fbt",
    "WAWebDetailImage.react",
    "WAWebFlex.react",
    "WAWebFlexItem.react",
    "WAWebProfilePicPicker.react",
    "WDSButton.react",
    "WDSIconIcPhotoCamera.react",
    "react",
    "react-compiler-runtime",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useRef,
      d = 120,
      m = {
        container: {
          flexShrink: "x2lah0s",
          marginTop: "x1q9ymp4",
          marginBottom: "x9r8f99",
          minHeight: "xi3av73",
          position: "x1n2onr6",
          $$css: !0,
        },
        editButtonColor: { backgroundColor: "x1280gxy", $$css: !0 },
        profilePicEditButtonWrapper: {
          bottom: "x1ey2m1c",
          display: "x78zum5",
          insetInlineEnd: "xtijo5x",
          insetInlineStart: "x1o0tod",
          left: null,
          right: null,
          justifyContent: "xl56j7k",
          pointerEvents: "x47corl",
          position: "x10l6tqk",
          zIndex: "xhtitgo",
          $$css: !0,
        },
        imageBorder: {
          borderTopColor: "xisoiy",
          borderInlineEndColor: "x347gel",
          borderBottomColor: "xfl8pta",
          borderInlineStartColor: "x1svocj7",
          borderStartStartRadius: "xt8t1vi",
          borderStartEndRadius: "x1xc408v",
          borderEndEndRadius: "x129tdwq",
          borderEndStartRadius: "x15urzxu",
          borderTopStyle: "x13fuv20",
          borderInlineEndStyle: "x18b5jzi",
          borderBottomStyle: "x1q0q8m5",
          borderInlineStartStyle: "x1t7ytsu",
          paddingBottom: "xvpt6g3",
          $$css: !0,
        },
        pickerOverlay: {
          bottom: "x1ey2m1c",
          display: "x78zum5",
          insetInlineEnd: "xtijo5x",
          insetInlineStart: "x1o0tod",
          left: null,
          right: null,
          justifyContent: "xl56j7k",
          opacity: "xg01cxk",
          pointerEvents: "x67bb7w",
          position: "x10l6tqk",
          zIndex: "x1oy9qf3",
          $$css: !0,
        },
      };
    function p(e) {
      var t = o("react-compiler-runtime").c(10),
        n = e.profilePicThumb,
        a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = ["id"]), (t[0] = a))
        : (a = t[0]);
      var i = o("useWAWebModelValues").useModelValues(n, a),
        l = c(null),
        p;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = function () {
            var e;
            (e = l.current) == null || e.click();
          }),
          (t[1] = p))
        : (p = t[1]);
      var _ = p,
        f;
      t[2] !== i.id
        ? ((f = u.jsx(o("WAWebDetailImage.react").DetailImage, {
            id: i.id,
            size: d,
            loader: !0,
            quality: o("WAWebDetailImage.react").DetailImageQuality.High,
          })),
          (t[2] = i.id),
          (t[3] = f))
        : (f = t[3]);
      var g;
      t[4] !== n
        ? ((g = u.jsx(r("WAWebFlexItem.react"), {
            xstyle: m.pickerOverlay,
            children: u.jsx(r("WAWebProfilePicPicker.react"), {
              profilePicThumb: n,
              size: d,
              editImageButtonRef: l,
            }),
          })),
          (t[4] = n),
          (t[5] = g))
        : (g = t[5]);
      var h;
      t[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = u.jsx(r("WAWebFlexItem.react"), {
            xstyle: m.profilePicEditButtonWrapper,
            children: u.jsx(r("WDSButton.react"), {
              Icon: r("WDSIconIcPhotoCamera.react"),
              label: s._(/*BTDS*/ "Edit"),
              variant: "outline",
              xstyle: m.editButtonColor,
              onPress: _,
            }),
          })),
          (t[6] = h))
        : (h = t[6]);
      var y;
      return (
        t[7] !== f || t[8] !== g
          ? ((y = u.jsx(r("WAWebFlexItem.react"), {
              xstyle: m.container,
              children: u.jsx(o("WAWebFlex.react").FlexColumn, {
                align: "center",
                children: u.jsxs(r("WAWebFlexItem.react"), {
                  xstyle: m.imageBorder,
                  children: [f, g, h],
                }),
              }),
            })),
            (t[7] = f),
            (t[8] = g),
            (t[9] = y))
          : (y = t[9]),
        y
      );
    }
    l.default = p;
  },
  226,
);
