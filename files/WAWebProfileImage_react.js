__d(
  "WAWebProfileImage.react",
  [
    "cx",
    "WACommonTaskScheduler",
    "WAPromiseDelays",
    "WAWebABProps",
    "WAWebClassnames",
    "WAWebDefaultContactRefreshedIcon.react",
    "WAWebDetailImage.react",
    "WAWebFlex.react",
    "WAWebNoop",
    "WAWebProfilePicThumbCollection",
    "react",
    "useWAWebListener",
    "useWAWebUnmountSignal",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useEffect,
      m = c.useState,
      p = {
        default: { backgroundColor: "x1od0jb8", $$css: !0 },
        icon: { flex: "x3psx0u", $$css: !0 },
        circleIconRefreshed: {
          borderStartStartRadius: "x1c9tyrk",
          borderStartEndRadius: "xeusxvb",
          borderEndEndRadius: "x1pahc9y",
          borderEndStartRadius: "x1ertn4p",
          backgroundColor: "x1od0jb8",
          $$css: !0,
        },
        iconOutlineRefreshed: {
          outline: "x4u6w88",
          outlineOffset: "x1g40iwv",
          $$css: !0,
        },
      };
    function _(e) {
      var t,
        n = e.theme,
        a = e.wid,
        i = m(null),
        l = i[0],
        s = i[1],
        c = m(null),
        _ = c[0],
        f = c[1],
        g = function (t) {
          s(t == null ? void 0 : t.img);
        },
        h = r("useWAWebUnmountSignal")();
      if (
        (d(function () {
          a &&
            o("WAWebProfilePicThumbCollection")
              .ProfilePicThumbCollection.find(a)
              .then(function (e) {
                return o("WAWebABProps").getABPropConfigValue(
                  "wmi_worker_scheduler_web",
                )
                  ? r("WACommonTaskScheduler")
                      .yield()
                      .then(function () {
                        return e;
                      })
                  : o("WAPromiseDelays")
                      .releaseToEventLoop()
                      .then(function () {
                        return e;
                      });
              })
              .then(function (e) {
                h.aborted || (f(e), g(e));
              })
              .catch(r("WAWebNoop"));
        }, []),
        o("useWAWebListener").useListener(_, "change:img", g),
        a != null && (l != null || (a != null && a.isNewsletter())))
      )
        return u.jsx(o("WAWebDetailImage.react").DetailImage, {
          id: a,
          quoted: e.quoted,
          size: e.size,
          shape: e.shape,
          border: e.border,
          quality: e.quality,
        });
      var y;
      (typeof e.size == "number" && e.size !== 0) ||
      (typeof e.size != "number" && e.size != null)
        ? (y = e.size)
        : (y = o("WAWebDetailImage.react").DetailImageSize.Small);
      var C = n === "voip" || n === "voip-dimmed",
        b = n === "voip-large" || n === "voip-large-dimmed",
        v = n === "voip-dimmed" || n === "voip-large-dimmed",
        S = o("WAWebDetailImage.react").getSize(y) || void 0,
        R = e.thumbs ? e.thumbs : [e.thumb],
        L = R.map(function (t, n) {
          if (t)
            return u.jsx(
              "img",
              { className: "xl1xv1r xh8yej3 x5yr21d", src: t, alt: "" },
              n,
            );
          var r = S && S / (R.length > 2 && n > 0 ? 2 : 1),
            a = { width: r, height: r, xstyle: p.icon },
            i = u.jsx(
              o("WAWebDefaultContactRefreshedIcon.react")
                .DefaultContactRefreshedIcon,
              babelHelpers.extends({}, a, {
                iconXstyle: e.quoted !== !0 && [
                  p.circleIconRefreshed,
                  p.iconOutlineRefreshed,
                ],
              }),
            );
          return u.jsx(
            o("WAWebFlex.react").FlexRow,
            {
              xstyle: p.default,
              justify: "center",
              align: "center",
              children: i,
            },
            n,
          );
        }),
        E;
      return (
        L.length === 1
          ? (E = L[0])
          : L.length === 2
            ? (E = u.jsxs(o("WAWebFlex.react").FlexRow, {
                className: "_aj_y",
                justify: "stretch",
                align: "stretch",
                children: [L[0], L[1]],
              }))
            : (E = u.jsxs(o("WAWebFlex.react").FlexRow, {
                className: "_aj_y",
                justify: "stretch",
                align: "stretch",
                children: [
                  L[0],
                  u.jsxs(o("WAWebFlex.react").FlexColumn, {
                    className: "_aj_z",
                    justify: "stretch",
                    align: "stretch",
                    children: [L[1], L[2]],
                  }),
                ],
              })),
        u.jsx(o("WAWebFlex.react").FlexRow, {
          className: o("WAWebClassnames").classnamesConvertMeToStylexPlease(
            ((t = {}),
            (t._aj_x =
              e.shape === o("WAWebDetailImage.react").DetailImageShape.Square),
            (t._aj_t = e.border === !0),
            (t._aj_v = C),
            (t._aj_w = b),
            (t._aj_u = v),
            (t._aj_s = !0),
            t),
          ),
          isFlexContainer: !1,
          style: { width: S, height: S },
          children: E,
        })
      );
    }
    ((_.displayName = _.name + " [from " + i.id + "]"), (l.default = _));
  },
  98,
);
