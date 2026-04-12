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
      var t,
        n = e.profilePicThumb,
        a = o("useWAWebModelValues").useModelValues(n, ["id"]),
        i = c(null),
        l = function () {
          var e;
          (e = i.current) == null || e.click();
        };
      return u.jsx((t = r("WAWebFlexItem.react")), {
        xstyle: m.container,
        children: u.jsx(o("WAWebFlex.react").FlexColumn, {
          align: "center",
          children: u.jsxs(t, {
            xstyle: m.imageBorder,
            children: [
              u.jsx(o("WAWebDetailImage.react").DetailImage, {
                id: a.id,
                size: d,
                loader: !0,
                quality: o("WAWebDetailImage.react").DetailImageQuality.High,
              }),
              u.jsx(t, {
                xstyle: m.pickerOverlay,
                children: u.jsx(r("WAWebProfilePicPicker.react"), {
                  profilePicThumb: n,
                  size: d,
                  editImageButtonRef: i,
                }),
              }),
              u.jsx(t, {
                xstyle: m.profilePicEditButtonWrapper,
                children: u.jsx(r("WDSButton.react"), {
                  Icon: r("WDSIconIcPhotoCamera.react"),
                  label: s._(/*BTDS*/ "Edit"),
                  variant: "outline",
                  xstyle: m.editButtonColor,
                  onPress: l,
                }),
              }),
            ],
          }),
        }),
      });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  226,
);
