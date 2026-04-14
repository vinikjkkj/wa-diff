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
      var t = e.onDelete,
        n = e.outContact,
        a = o("useWAWebOutContactValues").useWAWebOutContactValues(n.id, [
          o("WAWebOutContactGetters").getName,
        ]),
        i = a[0];
      return u.jsx(
        r("WAWebChatCell.react"),
        {
          theme: "list-names",
          contextEnabled: o("WAWebBoolFunc").returnFalse,
          image: u.jsx("div", {
            className: "x78zum5 x6s0dn4 xl56j7k",
            children: u.jsx(o("WAWebDefaultUserIcon.react").DefaultUserIcon, {
              height: 26,
              width: 26,
            }),
          }),
          primary: u.jsx(o("WAWebText.react").WAWebTextTitleRefreshed, {
            children: i,
          }),
          detail: u.jsx(r("WDSTooltip.react"), {
            label: s._(/*BTDS*/ "Remove"),
            children: u.jsx(
              r("WAWebUnstyledButton.react"),
              {
                dataTab: 2,
                xstyle: [
                  o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus,
                  c.outContactDeleteButton,
                ],
                role: "button",
                onClick: function (r) {
                  (r.stopPropagation(), t(n));
                },
                "aria-label": s._(
                  /*BTDS*/ "Remove {contact-name} from add list",
                  [s._param("contact-name", i)],
                ),
                customDataAttr: "selectedContact",
                children: u.jsx(r("WDSIconIcClose.react"), {
                  "aria-hidden": !0,
                }),
              },
              "chat-controls",
            ),
          }),
          idle: !0,
        },
        n.id.toString(),
      );
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
