__d(
  "WAWebQuotedMsgWrapper.react",
  [
    "cx",
    "fbt",
    "WAWebClassnames",
    "WAWebKeyboardIsKeyActivation",
    "react",
    "stylex",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e,
      c,
      d = c || (c = o("react")),
      m = c.useState,
      p = {
        quotedMsg: {
          position: "x1n2onr6",
          display: "x78zum5",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          backgroundColor: "x16p640f",
          borderStartStartRadius: "xp43t2z",
          borderStartEndRadius: "x5j5mwf",
          borderEndEndRadius: "xptal55",
          borderEndStartRadius: "xjodkme",
          $$css: !0,
        },
        quotedMsgRefresh: { backgroundColor: "x1bu39yj", $$css: !0 },
        noBorderRadius: {
          borderStartStartRadius: null,
          borderStartEndRadius: null,
          borderEndEndRadius: null,
          borderEndStartRadius: null,
          $$css: !0,
        },
      };
    function _(t) {
      var n,
        a = t.authorBackgroundStyle,
        i = t.children,
        l = t.clickable,
        s = t.handleClick,
        c = t.rootMsg,
        _ = t.theme,
        f = m(!1),
        g = f[0],
        h = f[1],
        y = !g && !!c,
        C = l ? "button" : null,
        b = function (t) {
          y && h(!0);
        },
        v = function (t) {
          g && h(!1);
        },
        S = function (t) {
          r("WAWebKeyboardIsKeyActivation")(t) && l && s();
        },
        R = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
          ((n = {}),
          (n._aju5 = _ === "composeBox"),
          (n._aju6 = g),
          (n._aju3 = !0),
          n),
        ),
        L = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
          (e || (e = r("stylex")))(a),
          "_aju7",
        ),
        E = [
          p.quotedMsg,
          p.quotedMsgRefresh,
          _ === "composeBox" && p.noBorderRadius,
        ],
        k = u._(/*BTDS*/ "Quoted message");
      return d.jsx("div", {
        "data-testid": void 0,
        className: "xh8yej3",
        onMouseOver: l ? b : null,
        onMouseEnter: l ? b : null,
        onMouseLeave: l ? v : null,
        children: d.jsxs("div", {
          className: R + " " + e(E),
          role: C,
          "aria-label": k,
          tabIndex: l ? 0 : null,
          onKeyDown: S,
          onClick: l ? s : null,
          children: [d.jsx("span", { className: L }), i],
        }),
      });
    }
    ((_.displayName = _.name + " [from " + i.id + "]"), (l.default = _));
  },
  226,
);
