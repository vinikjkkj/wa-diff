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
    "react-compiler-runtime",
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
      var a = o("react-compiler-runtime").c(36),
        i = t.error,
        l = t.maxImageCount,
        s = t.onChange,
        c = t.ref,
        f = l === void 0 ? h : l,
        g;
      a[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = []), (a[0] = g))
        : (g = a[0]);
      var C = _(g),
        v = C[0],
        k = C[1],
        I = p(null),
        T,
        D;
      (a[1] !== v
        ? ((T = function () {
            return function () {
              v.forEach(E);
            };
          }),
          (D = [v]),
          (a[1] = v),
          (a[2] = T),
          (a[3] = D))
        : ((T = a[2]), (D = a[3])),
        d(T, D));
      var x;
      a[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((x = function () {
            var e;
            (e = I.current) == null || e.open();
          }),
          (a[4] = x))
        : (x = a[4]);
      var $ = x,
        P;
      a[5] !== v || a[6] !== f || a[7] !== s
        ? ((P = function (t) {
            var e = Array.from(t.target.files || []);
            if (e.length !== 0) {
              var n = f - v.length,
                r = e.slice(0, n),
                o = r.map(L),
                a = [].concat(v, o);
              (k(a), s(a.map(R)));
            }
          }),
          (a[5] = v),
          (a[6] = f),
          (a[7] = s),
          (a[8] = P))
        : (P = a[8]);
      var N = P,
        M;
      a[9] !== v || a[10] !== s
        ? ((M = function (t) {
            var e = v[t];
            e != null && URL.revokeObjectURL(e.url);
            var n = v.filter(function (e, n) {
              return n !== t;
            });
            (k(n), s(n.map(S)));
          }),
          (a[9] = v),
          (a[10] = s),
          (a[11] = M))
        : (M = a[11]);
      var w = M,
        A;
      a[12] !== v
        ? ((A = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var t = v.map(b);
              return (e || (e = n("Promise"))).all(t);
            });
            return function () {
              return t.apply(this, arguments);
            };
          })()),
          (a[12] = v),
          (a[13] = A))
        : (A = a[13]);
      var F = A,
        O;
      (a[14] !== F
        ? ((O = function () {
            return { uploadImages: F };
          }),
          (a[14] = F),
          (a[15] = O))
        : (O = a[15]),
        m(c, O));
      var B;
      a[16] === Symbol.for("react.memo_cache_sentinel")
        ? ((B = { className: "x78zum5 x1a02dak x1qvou4u x1s70e7g" }),
          (a[16] = B))
        : (B = a[16]);
      var W;
      if (a[17] !== w || a[18] !== v) {
        var q;
        (a[20] !== w
          ? ((q = function (t, n) {
              return u.jsxs(
                "div",
                {
                  className:
                    "xbrszos xea3l6g x18isctg x2q3nzr x1rg5ohu x1vlo0dj x6ikm8r x10wlt62 x1n2onr6 x2pejg6",
                  children: [
                    u.jsx("img", {
                      alt: "Catalog item " + (n + 1),
                      src: t.url,
                      className: "x5yr21d xl1xv1r xh8yej3",
                    }),
                    u.jsx(r("WAWebUnstyledButton.react"), {
                      xstyle: y.deleteButton,
                      "aria-label": o(
                        "WAWebBusinessProfileLabels",
                      ).getRemoveImageAriaLabel(n + 1),
                      onClick: function () {
                        return w(n);
                      },
                      children: u.jsx(o("WAWebXAltIcon.react").XAltIcon, {
                        width: 30,
                        height: 30,
                      }),
                    }),
                  ],
                },
                n,
              );
            }),
            (a[20] = w),
            (a[21] = q))
          : (q = a[21]),
          (W = v.map(q)),
          (a[17] = w),
          (a[18] = v),
          (a[19] = W));
      } else W = a[19];
      var U;
      a[22] !== v.length || a[23] !== f
        ? ((U =
            v.length < f &&
            u.jsxs("button", {
              type: "button",
              onClick: $,
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
            })),
          (a[22] = v.length),
          (a[23] = f),
          (a[24] = U))
        : (U = a[24]);
      var V;
      a[25] !== W || a[26] !== U
        ? ((V = u.jsxs(
            "div",
            babelHelpers.extends({}, B, { children: [W, U] }),
          )),
          (a[25] = W),
          (a[26] = U),
          (a[27] = V))
        : (V = a[27]);
      var H;
      a[28] !== N
        ? ((H = u.jsx(r("WAWebFilePicker.react"), {
            ref: I,
            mimes: "image/*",
            onChange: N,
            multiple: !0,
          })),
          (a[28] = N),
          (a[29] = H))
        : (H = a[29]);
      var G;
      a[30] !== i
        ? ((G =
            i != null &&
            u.jsx("div", {
              className: "x30a034 x1pg5gke xav9cv8 x1hshjfz xh8yej3",
              role: "alert",
              children: i,
            })),
          (a[30] = i),
          (a[31] = G))
        : (G = a[31]);
      var z;
      return (
        a[32] !== V || a[33] !== H || a[34] !== G
          ? ((z = u.jsxs("div", { children: [V, H, G] })),
            (a[32] = V),
            (a[33] = H),
            (a[34] = G),
            (a[35] = z))
          : (z = a[35]),
        z
      );
    }
    function b(e, t) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          try {
            var n = yield r("WAWebMediaOpaqueData").createFromData(
                e.file,
                e.file.type,
              ),
              a = yield o(
                "WAWebCryptoCalculateFilehash",
              ).calculateFilehashFromBlob(e.file),
              i = yield o("WAWebMedia").uploadProductImage(n, a, t, !0);
            return i;
          } catch (e) {
            var l = e,
              s = "Unknown error";
            throw (
              l instanceof Error
                ? (s = l.message)
                : typeof l == "string" && (s = l),
              r("err")("Failed to upload image " + (t + 1) + ": " + s)
            );
          }
        })),
        v.apply(this, arguments)
      );
    }
    function S(e) {
      return e.file;
    }
    function R(e) {
      return e.file;
    }
    function L(e) {
      return { file: e, url: URL.createObjectURL(e) };
    }
    function E(e) {
      URL.revokeObjectURL(e.url);
    }
    l.default = C;
  },
  98,
);
