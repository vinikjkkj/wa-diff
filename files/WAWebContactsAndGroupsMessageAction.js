__d(
  "WAWebContactsAndGroupsMessageAction",
  [
    "WAWebContactsAndGroupsContactActions",
    "WAWebContactsAndGroupsMessageCard.react",
    "WAWebContactsAndGroupsPageEvents",
    "WDSDialogBridge",
    "react",
    "react-compiler-runtime",
    "useWAWebListener",
    "useWAWebOnUnmount",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.useRef;
    function c(e) {
      o("WDSDialogBridge").openWDSDialog(
        s.jsx(
          r("WAWebContactsAndGroupsMessageCard.react"),
          {
            contact: e,
            onClose: o("WDSDialogBridge").closeWDSDialog,
            onUnblock: function () {
              return o(
                "WAWebContactsAndGroupsContactActions",
              ).unblockContactFromContactsAndGroups(e, function (t) {
                return s.jsx(d, { contact: e, children: t });
              });
            },
          },
          e.id.toString(),
        ),
      );
    }
    function d(e) {
      var t = o("react-compiler-runtime").c(3),
        n = e.children,
        a = e.contact,
        i = u(!0),
        l;
      (t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = function () {
            i.current = !1;
          }),
          (t[0] = l))
        : (l = t[0]),
        o("useWAWebListener").useListener(
          o("WAWebContactsAndGroupsPageEvents").contactsAndGroupsPageEvents,
          "close",
          l,
        ));
      var s;
      return (
        t[1] !== a
          ? ((s = function () {
              i.current && c(a);
            }),
            (t[1] = a),
            (t[2] = s))
          : (s = t[2]),
        r("useWAWebOnUnmount")(s),
        n
      );
    }
    l.openContactsAndGroupsMessage = c;
  },
  98,
);
