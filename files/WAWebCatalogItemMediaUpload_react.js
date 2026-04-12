__d(
  "WAWebCatalogItemMediaUpload.react",
  [
    "Promise",
    "WAWebBusinessProfileLabels",
    "WAWebCryptoCalculateFilehash",
    "WAWebFilePicker.react",
    "WAWebMedia",
    "WAWebMediaOpaqueData",
    "WAWebUnstyledButton.react",
    "WAWebXAltIcon.react",
    "WDSIconIcPhotoCamera.react",
    "WDSText.react",
    "asyncToGeneratorRuntime",
    "err",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useEffect,
      m = c.useImperativeHandle,
      p = c.useRef,
      _ = c.useState,
      f = "128px",
      g = "131px",
      h = 10,
      y = {
        addButtonText: {
          paddingTop: "x1xrf6ya",
          paddingBottom: "xscbp6u",
          paddingInlineStart: "xdx6fka",
          paddingInlineEnd: "xvtqlqk",
          paddingLeft: null,
          paddingRight: null,
          $$css: !0,
        },
        deleteButton: {
          color: "x14ug900",
          filter: "xjjae95",
          insetInlineEnd: "x1lm9i9x",
          left: null,
          right: null,
          position: "x10l6tqk",
          top: "x1pdr0v7",
          zIndex: "x11uqc5h",
          $$css: !0,
        },
      };
    function C(t) {
      var a = t.error,
        i = t.maxImageCount,
        l = i === void 0 ? h : i,
        s = t.onChange,
        c = t.ref,
        f = _([]),
        g = f[0],
        C = f[1],
        b = p(null);
      d(
        function () {
          return function () {
            g.forEach(function (e) {
              URL.revokeObjectURL(e.url);
            });
          };
        },
        [g],
      );
      var v = function () {
          var e;
          (e = b.current) == null || e.open();
        },
        S = function (t) {
          var e = Array.from(t.target.files || []);
          if (e.length !== 0) {
            var n = l - g.length,
              r = e.slice(0, n),
              o = r.map(function (e) {
                return { file: e, url: URL.createObjectURL(e) };
              }),
              a = [].concat(g, o);
            (C(a),
              s(
                a.map(function (e) {
                  return e.file;
                }),
              ));
          }
        },
        R = function (t) {
          var e = g[t];
          e != null && URL.revokeObjectURL(e.url);
          var n = g.filter(function (e, n) {
            return n !== t;
          });
          (C(n),
            s(
              n.map(function (e) {
                return e.file;
              }),
            ));
        },
        L = (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var t = g.map(
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e, t) {
                    try {
                      var n = yield r("WAWebMediaOpaqueData").createFromData(
                          e.file,
                          e.file.type,
                        ),
                        a = yield o(
                          "WAWebCryptoCalculateFilehash",
                        ).calculateFilehashFromBlob(e.file),
                        i = yield o("WAWebMedia").uploadProductImage(
                          n,
                          a,
                          t,
                          !0,
                        );
                      return i;
                    } catch (e) {
                      var l = "Unknown error";
                      throw (
                        e instanceof Error
                          ? (l = e.message)
                          : typeof e == "string" && (l = e),
                        r("err")("Failed to upload image " + (t + 1) + ": " + l)
                      );
                    }
                  },
                );
                return function (t, n) {
                  return e.apply(this, arguments);
                };
              })(),
            );
            return (e || (e = n("Promise"))).all(t);
          });
          return function () {
            return t.apply(this, arguments);
          };
        })();
      return (
        m(c, function () {
          return { uploadImages: L };
        }),
        u.jsxs("div", {
          children: [
            u.jsxs("div", {
              className: "x78zum5 x1a02dak x1qvou4u x1s70e7g",
              children: [
                g.map(function (e, t) {
                  return u.jsxs(
                    "div",
                    {
                      className:
                        "xbrszos xea3l6g x18isctg x2q3nzr x1rg5ohu x1vlo0dj x6ikm8r x10wlt62 x1n2onr6 x2pejg6",
                      children: [
                        u.jsx("img", {
                          alt: "Catalog item " + (t + 1),
                          src: e.url,
                          className: "x5yr21d xl1xv1r xh8yej3",
                        }),
                        u.jsx(r("WAWebUnstyledButton.react"), {
                          xstyle: y.deleteButton,
                          "aria-label": o(
                            "WAWebBusinessProfileLabels",
                          ).getRemoveImageAriaLabel(t + 1),
                          onClick: function () {
                            return R(t);
                          },
                          children: u.jsx(o("WAWebXAltIcon.react").XAltIcon, {
                            width: 30,
                            height: 30,
                          }),
                        }),
                      ],
                    },
                    t,
                  );
                }),
                g.length < l &&
                  u.jsxs("button", {
                    type: "button",
                    onClick: v,
                    className:
                      "x6s0dn4 x1od0jb8 xyi3aci xwf5gio x1p453bz x1suzm8a x1ypdohk x78zum5 xdt5ytf x1vlo0dj xl56j7k x2pejg6",
                    children: [
                      u.jsx(r("WDSIconIcPhotoCamera.react"), {}),
                      u.jsx(r("WDSText.react"), {
                        colorName: "contentDefault",
                        type: "Body3Emphasized",
                        xstyle: y.addButtonText,
                        children: o(
                          "WAWebBusinessProfileLabels",
                        ).getAddImagesButtonLabel(),
                      }),
                    ],
                  }),
              ],
            }),
            u.jsx(r("WAWebFilePicker.react"), {
              ref: b,
              mimes: "image/*",
              onChange: S,
              multiple: !0,
            }),
            a != null &&
              u.jsx("div", {
                className: "x30a034 x1pg5gke xav9cv8 x1hshjfz xh8yej3",
                role: "alert",
                children: a,
              }),
          ],
        })
      );
    }
    ((C.displayName = C.name + " [from " + i.id + "]"), (l.default = C));
  },
  98,
);
