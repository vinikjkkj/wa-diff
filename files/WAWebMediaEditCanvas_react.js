__d(
  "WAWebMediaEditCanvas.react",
  [
    "WAWeb-easeljs",
    "WAWebObjectFit.react",
    "WAWebStaticCanvas.react",
    "isNonZeroNumber",
    "react",
    "useWAWebForceUpdate",
    "useWAWebOnUnmount",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["ref"],
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useEffect,
      m = c.useImperativeHandle,
      p = c.useRef,
      _ = c.useState;
    function f(t) {
      "use no forget";
      var n = t.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i = a.activeMediaId,
        l = a.editedMedia,
        s = a.mediaEditController,
        c = a.mediaPickerStatsLogger,
        f = p(null),
        g = p(null),
        h = p(null),
        y = p(null),
        C = _({ height: 1, width: 1 }),
        b = C[0],
        v = C[1],
        S = _(null),
        R = S[0],
        L = S[1],
        E = o("useWAWebForceUpdate").useForceUpdateDONOTUSE(),
        k = function (t) {
          var e;
          return (
            R
              ? (e = R)
              : ((e = new (o("WAWeb-easeljs").Easel.Stage)(t)),
                e.enableMouseOver()),
            (s.stage = e),
            e
          );
        },
        I = function (t, n) {
          if (f.current) {
            var e = f.current;
            n && c && i != null && c.logChange(i, n);
            var r = l.editData,
              a = k(e);
            (t && ((e.width = r.width), (e.height = r.height)),
              a.removeAllChildren(),
              r.baseItem != null && a.addChild(r.baseItem),
              r.items && a.addChild.apply(a, r.items));
            var s = l.originalImage.naturalWidth,
              u = l.originalImage.naturalHeight;
            ((a.regX = s / 2),
              (a.regY = u / 2),
              (a.rotation = r.rotation),
              o("isNonZeroNumber").isNonZeroNumber(r.width) &&
                o("isNonZeroNumber").isNonZeroNumber(r.height) &&
                ((a.x = r.width / 2 + r.scale * r.offsetX),
                (a.y = r.height / 2 + r.scale * r.offsetY)),
              (a.scaleX = r.scale),
              (a.scaleY = r.scale),
              a.update(),
              v({ width: e.width, height: e.height }),
              L(a));
          }
        },
        T = function () {
          var e = l.editData;
          l.editedImage = null;
          var t = l.originalImage;
          if (
            (!e.width &&
              !e.height &&
              ((e.width = t.naturalWidth), (e.height = t.naturalHeight)),
            !e.baseItem)
          ) {
            var n = new (o("WAWeb-easeljs").Easel.Bitmap)(t);
            e.baseItem = n;
          }
          I(!0);
        },
        D = function () {
          var e = l.originalImage;
          e.complete ? T() : (e.onload = T);
        },
        x = function () {
          I(!0);
          var e = f.current;
          e && l.saveEditsFromCanvas(e);
        },
        $ = function (t) {
          t &&
            (t.children.forEach(function (e) {
              e.removeAllEventListeners();
            }),
            t.removeAllEventListeners(),
            t.removeAllChildren(),
            t.enableMouseOver(0),
            t.clear());
        };
      (d(function () {
        (D(),
          (y.current = new (o("WAWeb-easeljs").Easel.Stage)(h.current)),
          (y.current.autoClear = !1),
          y.current.enableMouseOver(),
          g.current && (s.mediaContainer = g.current),
          (s.cropOverlay = y.current));
      }, []),
        r("useWAWebOnUnmount")(function () {
          var e = l.originalImage;
          (e.complete || (e.onload = void 0), x(), $(R), $(y.current));
        }));
      var P = function (t, n) {
        v({ width: t, height: n });
      };
      m(n, function () {
        return { saveCanvas: x, drawCanvas: I, updateCanvasSize: P };
      });
      var N = u.jsx("canvas", {
          ref: h,
          className: "x10l6tqk xzkaem6 x1s85apg x1qrby5j x3igimt",
        }),
        M = u.jsx("div", {
          className: a.className,
          ref: g,
          children: u.jsxs(r("WAWebObjectFit.react"), {
            type: a.fitType || "scaleDown",
            size: b,
            children: [
              N,
              u.jsx(r("WAWebStaticCanvas.react"), {
                ref: f,
                className: "xhtitgo xh8yej3 x5yr21d",
              }),
            ],
          }),
        });
      return M;
    }
    ((f.displayName = f.name + " [from " + i.id + "]"), (l.default = f));
  },
  98,
);
