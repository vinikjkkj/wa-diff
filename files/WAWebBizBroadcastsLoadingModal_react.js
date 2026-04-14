__d(
  "WAWebBizBroadcastsLoadingModal.react",
  ["WAWebModal.react", "WAWebSpinner.react", "react", "useWAWebTimeout"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.useState,
      c = {
        controlsStyle: {
          paddingInlineEnd: "xyri2b",
          paddingInlineStart: "x1c1uobl",
          paddingTop: "xl7twdi",
          $$css: !0,
        },
      };
    function d(e) {
      var t = e.onCancel,
        n = u(!1),
        r = n[0],
        a = n[1];
      return (
        o("useWAWebTimeout").useTimeout(
          function () {
            a(!0);
          },
          1e3,
          { immediate: !0 },
        ),
        r
          ? s.jsx(o("WAWebModal.react").Modal, {
              onOverlayClick: t,
              testid: void 0,
              controlsStyle: c.controlsStyle,
              children: s.jsx("div", {
                className: "x6s0dn4 x78zum5 xl56j7k xz65tgg",
                children: s.jsx(o("WAWebSpinner.react").Spinner, { size: 48 }),
              }),
            })
          : null
      );
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  98,
);
