__d(
  "WAWebOutContactPillItem.react",
  [
    "fbt",
    "WAWebBoolFunc",
    "WAWebChatCell.react",
    "WAWebDefaultUserIcon.react",
    "WAWebOutContactGetters",
    "WAWebText.react",
    "WAWebUnstyledButton.react",
    "WDSFocusStateStyles",
    "WDSIconIcClose.react",
    "WDSTooltip.react",
    "react",
    "react-compiler-runtime",
    "useWAWebOutContactValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = {
        outContactDeleteButton: {
          flex: "x1okw0bk",
          color: "xhslqc4",
          paddingTop: "x4p5aij",
          paddingInlineEnd: "x1ccui7m",
          paddingBottom: "x1j85h84",
          paddingInlineStart: "x18pi947",
          marginTop: "x1gslohp",
          marginBottom: "x12nagc",
          marginInlineStart: "xwklpps",
          marginInlineEnd: "x2fvf9",
          borderStartStartRadius: "x1c9tyrk",
          borderStartEndRadius: "xeusxvb",
          borderEndEndRadius: "x1pahc9y",
          borderEndStartRadius: "x1ertn4p",
          $$css: !0,
        },
      };
    function d(e) {
      var t = o("react-compiler-runtime").c(21),
        n = e.onDelete,
        a = e.outContact,
        i;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = [o("WAWebOutContactGetters").getName]), (t[0] = i))
        : (i = t[0]);
      var l = o("useWAWebOutContactValues").useWAWebOutContactValues(a.id, i),
        d = l[0],
        m;
      t[1] !== a.id
        ? ((m = a.id.toString()), (t[1] = a.id), (t[2] = m))
        : (m = t[2]);
      var p;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = u.jsx("div", {
            className: "x78zum5 x6s0dn4 xl56j7k",
            children: u.jsx(o("WAWebDefaultUserIcon.react").DefaultUserIcon, {
              height: 26,
              width: 26,
            }),
          })),
          (t[3] = p))
        : (p = t[3]);
      var _;
      t[4] !== d
        ? ((_ = u.jsx(o("WAWebText.react").WAWebTextTitleRefreshed, {
            children: d,
          })),
          (t[4] = d),
          (t[5] = _))
        : (_ = t[5]);
      var f;
      t[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = s._(/*BTDS*/ "Remove")), (t[6] = f))
        : (f = t[6]);
      var g;
      t[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = [
            o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus,
            c.outContactDeleteButton,
          ]),
          (t[7] = g))
        : (g = t[7]);
      var h;
      t[8] !== n || t[9] !== a
        ? ((h = function (t) {
            (t.stopPropagation(), n(a));
          }),
          (t[8] = n),
          (t[9] = a),
          (t[10] = h))
        : (h = t[10]);
      var y;
      t[11] !== d
        ? ((y = s._(/*BTDS*/ "Remove {contact-name} from add list", [
            s._param("contact-name", d),
          ])),
          (t[11] = d),
          (t[12] = y))
        : (y = t[12]);
      var C;
      t[13] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = u.jsx(r("WDSIconIcClose.react"), { "aria-hidden": !0 })),
          (t[13] = C))
        : (C = t[13]);
      var b;
      t[14] !== h || t[15] !== y
        ? ((b = u.jsx(r("WDSTooltip.react"), {
            label: f,
            children: u.jsx(
              r("WAWebUnstyledButton.react"),
              {
                dataTab: 2,
                xstyle: g,
                role: "button",
                onClick: h,
                "aria-label": y,
                customDataAttr: "selectedContact",
                children: C,
              },
              "chat-controls",
            ),
          })),
          (t[14] = h),
          (t[15] = y),
          (t[16] = b))
        : (b = t[16]);
      var v;
      return (
        t[17] !== b || t[18] !== m || t[19] !== _
          ? ((v = u.jsx(
              r("WAWebChatCell.react"),
              {
                theme: "list-names",
                contextEnabled: o("WAWebBoolFunc").returnFalse,
                image: p,
                primary: _,
                detail: b,
                idle: !0,
              },
              m,
            )),
            (t[17] = b),
            (t[18] = m),
            (t[19] = _),
            (t[20] = v))
          : (v = t[20]),
        v
      );
    }
    l.default = d;
  },
  226,
);
