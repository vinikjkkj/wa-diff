__d(
  "WAWebMediaEditorPreviewHeader.react",
  ["fbt", "WAWebClickable.react", "WDSIconIcClose.react", "fbs", "react"],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = { closeButton: { cursor: "x1ypdohk", $$css: !0 } };
    function d(e) {
      var t = e.filename,
        n = e.pageCount,
        a = null;
      return (
        n != null &&
          n > 0 &&
          (a = s._(/*BTDS*/ '_j{"*":"{number} pages","_1":"1 page"}', [
            s._plural(n, "number"),
          ])),
        u.jsxs("div", {
          className:
            "x78zum5 x6s0dn4 x1qughib x1gg8mnh x16ovd2e xvtqlqk x12xbjc7 xdx6fka x1280gxy",
          children: [
            u.jsx(o("WAWebClickable.react").Clickable, {
              ariaLabel: r("fbs")._(/*BTDS*/ "Close"),
              onClick: e.onClose,
              xstyle: c.closeButton,
              children: u.jsx(r("WDSIconIcClose.react"), {}),
            }),
            u.jsxs("div", {
              className: "x78zum5 x1iyjqo2 xs83m0k x1r8uery xdt5ytf x6s0dn4",
              children: [
                t &&
                  u.jsx("span", {
                    className: "x1f6kntn x14ug900",
                    children: t,
                  }),
                a != null &&
                  u.jsx("span", {
                    className: "x1ok221b x1pg5gke xhslqc4",
                    children: a,
                  }),
              ],
            }),
          ],
        })
      );
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
