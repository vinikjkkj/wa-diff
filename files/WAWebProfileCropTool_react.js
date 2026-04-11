__d(
  "WAWebProfileCropTool.react",
  [
    "fbt",
    "$InternalEnum",
    "WAWeb-easeljs",
    "WAWebAccessibility.react",
    "WAWebImageUtils",
    "WAWebKeyboardHotKeys.react",
    "WAWebMinusIcon.react",
    "WAWebPlusIcon.react",
    "WAWebProfileCropConstants",
    "WAWebUnstyledButton.react",
    "WDSFocusStateStyles",
    "asyncToGeneratorRuntime",
    "err",
    "intlNumUtils",
    "isStringNullOrEmpty",
    "react",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["ref"],
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useEffect,
      p = d.useImperativeHandle,
      _ = d.useRef,
      f = d.useState,
      g = {
        scalerButton: {
          color: "xhslqc4",
          cursor: "x1ypdohk",
          width: "xgd8bvy",
          height: "x1fgtraw",
          display: "x78zum5",
          alignItems: "x6s0dn4",
          justifyContent: "xl56j7k",
          $$css: !0,
        },
      },
      h = "rgba(0, 0, 0, 0.5)",
      y = 1.1,
      C = 1.02,
      b = 361,
      v = 500,
      S = 9 / 16,
      R = 2 + S,
      L = "M90 0C0 0 0 0 0 90s0 90 90 90 90 0 90-90 0-90-90-90Z",
      E = n("$InternalEnum").Mirrored(["CIRCLE", "RECT", "SQUIRCLE"]),
      k = n("$InternalEnum").Mirrored(["ENLARGE", "REDUCE"]),
      I = n("$InternalEnum").Mirrored(["DOWN", "LEFT", "RIGHT", "UP"]);
    function T(t) {
      var a = t.ref,
        i = babelHelpers.objectWithoutPropertiesLoose(t, e),
        l = i.cropOverlay,
        u = i.drawCanvas,
        d = i.editedMedia,
        T = _(0),
        D = f(""),
        x = D[0],
        $ = D[1],
        P = f(null),
        N = P[0],
        M = P[1],
        w = function (t, n) {
          var e = d.editData,
            r = T.current * R,
            o = (t - e.width / 2) * e.scale,
            a = (t + e.width / 2) * e.scale,
            i = (n + e.height / 2) * e.scale,
            l = (n - e.height / 2) * e.scale,
            s = r / 2,
            u = (r / 2) * S;
          return {
            overlapLeft: Math.min(0, -s - o) / e.scale,
            overlapRight: Math.min(0, a - s) / e.scale,
            overlapTop: Math.min(0, -u - l) / e.scale,
            overlapBottom: Math.min(0, i - u) / e.scale,
            x: o < -s && a > s,
            y: l < -u && i > u,
          };
        },
        A = function (t, n) {
          var e = d.editData,
            r = T.current,
            o = (t - e.width / 2) * e.scale,
            a = (t + e.width / 2) * e.scale,
            i = (n + e.height / 2) * e.scale,
            l = (n - e.height / 2) * e.scale;
          return { x: o < -r && a > r, y: l < -r && i > r };
        },
        F = function (t, n) {
          var e = d.editData,
            r = e.offsetX + t / e.scale,
            o = e.offsetY + n / e.scale,
            a = i.cropShape === E.RECT ? w(r, o) : A(r, o);
          (a.x && (e.offsetX = r), a.y && (e.offsetY = o), u(), Q(t, n, a));
        },
        O = function (t, n) {
          var e = t.stageX - n.x,
            r = t.stageY - n.y;
          (F(e, r), (n.x = t.stageX), (n.y = t.stageY));
        },
        B = function (t) {
          var e = T.current,
            n = d.editData,
            r = e * R,
            o = Math.max(t, r / n.width),
            a = Math.max(t, o);
          n.scale = a;
          var i = w(n.offsetX, n.offsetY);
          return {
            scale: n.scale,
            offsetX: n.offsetX + i.overlapLeft - i.overlapRight,
            offsetY: n.offsetY + i.overlapTop - i.overlapBottom,
          };
        },
        W = function (t) {
          var e = T.current,
            n = d.editData,
            r = Math.max((2 * e) / n.width, (2 * e) / n.height),
            o = Math.max(t, r);
          if (n.width * t < e || n.height * t < e) return !1;
          var a = -e / o + n.width / 2,
            i = e / o - n.width / 2,
            l = -e / o + n.height / 2,
            s = e / o - n.height / 2;
          return {
            scale: o,
            offsetX: Math.min(Math.max(n.offsetX, i), a),
            offsetY: Math.min(Math.max(n.offsetY, s), l),
          };
        },
        q = function (t) {
          return i.cropShape === E.RECT ? B(t) : W(t);
        },
        U = function (t) {
          t === void 0 && (t = y);
          var e = d.editData,
            n = t !== 0 ? t : y,
            r = q(e.scale * n);
          (r &&
            ((e.scale = r.scale),
            (e.offsetX = r.offsetX),
            (e.offsetY = r.offsetY),
            u()),
            K(t, k.ENLARGE));
        },
        V = function (t) {
          t === void 0 && (t = y);
          var e = d.editData,
            n = t !== 0 ? t : y,
            r = q(e.scale / n);
          (r &&
            ((e.scale = r.scale),
            (e.offsetX = r.offsetX),
            (e.offsetY = r.offsetY),
            u()),
            K(t, k.REDUCE));
        };
      (o("useWAWebListener").useListener(l.canvas, "mousewheel", function (e) {
        e.deltaY > 0 ? U(C) : V(C);
      }),
        m(function () {
          d.saveEdits();
          var e = d.editData,
            t = l.canvas,
            n;
          (e.baseItem
            ? (n = e.baseItem.getBounds())
            : (n = { width: 0, height: 0 }),
            (t.style.display = "block"),
            (t.width = n.width),
            (t.height = n.height));
          var r = new (o("WAWeb-easeljs").Easel.Shape)();
          (r.graphics.beginFill("rgba(0, 0, 0, 0.1)"),
            r.graphics.drawRect(0, 0, n.width, n.height),
            (r.regX = n.width / 2),
            (r.regY = n.height / 2),
            (r.x = n.width / 2),
            (r.y = n.height / 2),
            r.on("mousedown", function (e) {
              var t = { x: e.stageX, y: e.stageY },
                n = r.on("pressmove", O, null, !1, t);
              r.on(
                "pressup",
                function () {
                  r.off("pressmove", n);
                },
                null,
                !0,
              );
            }),
            (r.cursor = "move"));
          var a = t.getContext("2d"),
            s = t.width,
            u = t.height,
            c = s / u > v / b ? u / b : s / v;
          T.current = (Math.min(b, v) / 2) * 0.9 * c;
          var m = T.current,
            p;
          if (
            ((a.fillStyle = h),
            a.fillRect(0, 0, s, u),
            (a.globalCompositeOperation = "destination-out"),
            a.beginPath(),
            i.cropShape === E.CIRCLE)
          )
            a.arc(s / 2, u / 2, m, 0, 2 * Math.PI, !0);
          else if (i.cropShape === E.RECT) {
            var _ = m * R,
              f = m * R * S;
            a.fillRect(s / 2 - _ / 2, u / 2 - f / 2, _, f);
          } else if (i.cropShape === E.SQUIRCLE) {
            ((p = new Path2D(L)), a.translate(s / 2 - m, u / 2 - m));
            var g = c * 2 * 0.9;
            a.scale(g, g);
          }
          ((a.fillStyle = "#ffffff"),
            p ? a.fill(p) : a.fill(),
            l.addChild(r),
            l.update());
        }, []));
      var H = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e,
              t = d.editData,
              n = (e = d.editedImage) == null ? void 0 : e.src,
              a = T.current;
            if (r("isStringNullOrEmpty")(n)) throw r("err")("empty image");
            var i = a * 2,
              l = i;
            i > o("WAWebProfileCropConstants").PROF_PIC_MAX_SIDE
              ? (l = o("WAWebProfileCropConstants").PROF_PIC_MAX_SIDE)
              : i < o("WAWebProfileCropConstants").PROF_PIC_MIN_SIDE &&
                (l = o("WAWebProfileCropConstants").PROF_PIC_MIN_SIDE);
            var s = a * R,
              u = a * R * S,
              c = yield o("WAWebImageUtils").crop(
                n,
                t.width / 2 - s / 2,
                t.height / 2 - u / 2,
                s,
                u,
                l,
                l * S,
                o("WAWebImageUtils").DATA_URL | o("WAWebImageUtils").CANVAS,
              ),
              m = c,
              p = c.images.dataUrl;
            return { thumb: m.images.dataUrl, full: p };
          });
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        G = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e,
              t = d.editData,
              n = (e = d.editedImage) == null ? void 0 : e.src,
              a = T.current;
            if (r("isStringNullOrEmpty")(n)) throw r("err")("empty image");
            var i = a * 2,
              l = i;
            i > o("WAWebProfileCropConstants").PROF_PIC_MAX_SIDE
              ? (l = o("WAWebProfileCropConstants").PROF_PIC_MAX_SIDE)
              : i < o("WAWebProfileCropConstants").PROF_PIC_MIN_SIDE &&
                (l = o("WAWebProfileCropConstants").PROF_PIC_MIN_SIDE);
            var s = yield o("WAWebImageUtils").crop(
                n,
                (t.width - i) / 2,
                (t.height - i) / 2,
                i,
                i,
                l,
                l,
                o("WAWebImageUtils").DATA_URL | o("WAWebImageUtils").CANVAS,
              ),
              u = yield o("WAWebImageUtils").crop(
                s.images.canvas,
                0,
                0,
                o("WAWebProfileCropConstants").PROF_PIC_THUMB_SIDE,
                o("WAWebProfileCropConstants").PROF_PIC_THUMB_SIDE,
              ),
              c = s.images.dataUrl;
            return { thumb: u.images.dataUrl, full: c };
          });
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        z = function () {
          return i.cropShape === E.RECT ? H() : G();
        };
      p(a, function () {
        return { crop: z };
      });
      var j = _(null);
      function K(e, t) {
        var n = 1 - e,
          r = N != null ? N : 1;
        (t === k.ENLARGE ? (r += n) : (r -= n), M(r), Y(r, t));
      }
      function Q(e, t, n) {
        e < 0
          ? X(I.RIGHT, n)
          : e > 0
            ? X(I.LEFT, n)
            : t < 0
              ? X(I.DOWN, n)
              : t > 0 && X(I.UP, n);
      }
      function X(e, t) {
        switch (e) {
          case I.DOWN:
            if (!t.y) {
              $(s._(/*BTDS*/ "Image aligned down as far as possible"));
              return;
            }
            $(s._(/*BTDS*/ "Image moved down"));
            break;
          case I.LEFT:
            if (!t.x) {
              $(s._(/*BTDS*/ "Image aligned left as far as possible"));
              return;
            }
            $(s._(/*BTDS*/ "Image moved left"));
            break;
          case I.RIGHT:
            if (!t.x) {
              $(s._(/*BTDS*/ "Image aligned right as far as possible"));
              return;
            }
            $(s._(/*BTDS*/ "Image moved right"));
            break;
          case I.UP:
            if (!t.y) {
              $(s._(/*BTDS*/ "Image aligned up as far as possible"));
              return;
            }
            $(s._(/*BTDS*/ "Image moved up"));
            break;
        }
      }
      function Y(e, t) {
        var n = Math.round(Math.abs(e) * 100);
        t === k.ENLARGE
          ? $(
              s._(/*BTDS*/ "Zoomed in {zoom_percentage}\u0025", [
                s._param("zoom_percentage", o("intlNumUtils").formatNumber(n)),
              ]),
            )
          : $(
              s._(/*BTDS*/ "Zoomed out {zoom_percentage}\u0025", [
                s._param("zoom_percentage", o("intlNumUtils").formatNumber(n)),
              ]),
            );
      }
      var J = function (t) {
          if (j.current) {
            var e = t ? t.target : document.activeElement;
            j.current;
          }
        },
        Z = {
          pageup: function () {
            return U();
          },
          pagedown: function () {
            return V();
          },
          down: function () {
            return F(0, -10);
          },
          up: function () {
            return F(0, 10);
          },
          left: function () {
            return F(10, 0);
          },
          right: function () {
            return F(-10, 0);
          },
        };
      return c.jsxs("div", {
        className:
          "x10l6tqk x1inkcgm xoegz02 xgd8bvy x14ju556 x1280gxy xadg8h5 xjlgbav x22tq4u x1taic9k x1ctnl55",
        children: [
          c.jsx(o("WAWebAccessibility.react").InvisibleAnnouncement, {
            assertive: !0,
            text: x,
            startWithText: !0,
          }),
          c.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
            component: "button",
            handlers: Z,
            onFocus: J,
            ref: j,
            "aria-label": s._(
              /*BTDS*/ "Photo editor canvas widget: arrow keys move crop window, Page Up and Page Down enlarge or shrink the crop area",
            ),
            tabIndex: 0,
          }),
          c.jsx(r("WAWebUnstyledButton.react"), {
            xstyle: [
              g.scalerButton,
              o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus,
            ],
            onClick: function () {
              return U();
            },
            "aria-label": s._(
              /*BTDS*/ "Zoom in or shrink area of photo to be cropped",
            ),
            testid: void 0,
            children: c.jsx(o("WAWebPlusIcon.react").PlusIcon, {}),
          }),
          c.jsx(r("WAWebUnstyledButton.react"), {
            xstyle: [
              g.scalerButton,
              o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus,
            ],
            onClick: function () {
              return V();
            },
            "aria-label": s._(
              /*BTDS*/ "Zoom out or enlarge area of photo to be cropped",
            ),
            testid: void 0,
            children: c.jsx(o("WAWebMinusIcon.react").MinusIcon, {}),
          }),
        ],
      });
    }
    T.displayName = T.name + " [from " + i.id + "]";
    var D = T;
    ((l.CropShapeType = E), (l.WrappedProfileCropTool = D));
  },
  226,
);
