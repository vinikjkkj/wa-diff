__d(
  "WAWebImgWithFallback.react",
  [
    "cx",
    "$InternalEnum",
    "WAWebAvatarSpinner.react",
    "WAWebClassnames",
    "WAWebDetailImage.react",
    "WAWebImg.react",
    "isEmptyObject",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useState,
      d = {
        SMALL: "SMALL",
        MEDIUM: "MEDIUM",
        LARGE: "LARGE",
        AUTO: "AUTO",
        NONE: "NONE",
      },
      m = n("$InternalEnum").Mirrored(["Default", "Transparent"]);
    function p(e) {
      switch (e) {
        case d.SMALL:
          return 49;
        case d.MEDIUM:
          return 100;
        case d.LARGE:
          return 200;
        case d.NONE:
          return;
        default:
          return e;
      }
    }
    function _(e) {
      var t,
        n,
        a,
        i,
        l = e.size,
        s = l === void 0 ? d.SMALL : l,
        _ = e.fallbackSVG,
        f = e.className,
        g = e.loader,
        h = g === void 0 ? !1 : g,
        y = e.wrapOptions,
        C = y === void 0 ? {} : y,
        b = e.transition,
        v = e.imgProps,
        S = e.theme,
        R = e.shape,
        L =
          R === void 0
            ? o("WAWebDetailImage.react").DetailImageShape.Circle
            : R,
        E = c(!1),
        k = E[0],
        I = E[1],
        T = function () {
          I(!0);
        },
        D = v.alt,
        x = v.crossOrigin,
        $ = v.draggable,
        P = v.src,
        N = C.centerWrapperChild,
        M = C.wrapperClassName,
        w = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
          "_ak0l",
          ((t = {}), (t._ak0m = k), (t._ak0n = b === !0), t),
        ),
        A = { height: p(s), width: p(s) },
        F;
      h && !k && (F = u.jsx(r("WAWebAvatarSpinner.react"), {}));
      var O = u.jsx(r("WAWebImg.react"), {
          src: P,
          className: w,
          onLoad: T,
          alt: D,
          crossOrigin: x,
          draggable: $,
        }),
        B =
          C != null && !r("isEmptyObject")(C)
            ? u.jsx("div", {
                className: o(
                  "WAWebClassnames",
                ).classnamesConvertMeToStylexPlease(
                  M,
                  "_ak0o",
                  "_ak0p",
                  ((n = {}),
                  (n._ak0q = N),
                  (n._ak0m = k),
                  (n._ak0r = S === m.Transparent),
                  n),
                ),
                children: O,
              })
            : O,
        W = P !== "" ? u.jsxs(u.Fragment, { children: [F, B] }) : null;
      return u.jsxs("div", {
        className: o("WAWebClassnames").classnamesConvertMeToStylexPlease(
          "_ak0s",
          f,
          ((a = {}),
          (a._ak0t = L === o("WAWebDetailImage.react").DetailImageShape.Circle),
          (a._ak0r = S === m.Transparent),
          (a._ak0u =
            L === o("WAWebDetailImage.react").DetailImageShape.Squircle),
          a),
        ),
        style: A,
        children: [
          W,
          !k &&
            u.jsx("div", {
              className: o("WAWebClassnames").classnamesConvertMeToStylexPlease(
                M,
                "_ak0o",
                "_ak0v",
                ((i = {}),
                (i._ak0q = N),
                (i._ak0n = b === !0),
                (i._ak0r = S === m.Transparent),
                i),
              ),
              children: _,
            }),
        ],
      });
    }
    ((_.displayName = _.name + " [from " + i.id + "]"),
      (l.Theme = m),
      (l.ImgWithFallback = _));
  },
  98,
);
