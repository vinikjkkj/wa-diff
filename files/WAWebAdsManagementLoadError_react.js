__d(
  "WAWebAdsManagementLoadError.react",
  ["fbt", "WAWebBox.react", "WAWebText.react", "react"],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = {
        text: { display: "xt0psk2", $$css: !0 },
        paddingStart4: { paddingInlineStart: "x181vq82", $$css: !0 },
        paddingHoriz24: {
          paddingInlineStart: "xb0esv5",
          paddingInlineEnd: "xyo0t3i",
          paddingLeft: null,
          paddingRight: null,
          $$css: !0,
        },
        paddingTop16: { paddingTop: "x1p57kb1", $$css: !0 },
      };
    function d(e) {
      var t = e.errorText,
        n = e.onClickRetry,
        a =
          n != null
            ? u.jsx(o("WAWebText.react").WAWebClickableText, {
                xstyle: c.paddingStart4,
                onClick: n,
                children: s._(/*BTDS*/ "Retry"),
              })
            : null;
      return u.jsxs(r("WAWebBox.react"), {
        xstyle: [c.paddingHoriz24, c.paddingTop16],
        children: [
          u.jsx(o("WAWebText.react").WAWebTextTitle, {
            xstyle: c.text,
            children: t,
          }),
          a,
        ],
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
