__d(
  "WAWebRenderBizContentPlaceholderPreviewIcon",
  [
    "WAWebBizContentPlaceholderGatingUtils",
    "WAWebKeyIcon.react",
    "WAWebUnknownIcon.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      return o(
        "WAWebBizContentPlaceholderGatingUtils",
      ).isMaskLinkedDevicesEnabled()
        ? s.jsx(o("WAWebKeyIcon.react").KeyIcon, {
            width: 20,
            height: 20,
            "aria-hidden": !0,
          })
        : s.jsx(o("WAWebUnknownIcon.react").UnknownIcon, {
            width: 20,
            height: 20,
            "aria-hidden": !0,
          });
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
